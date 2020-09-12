<template>
    <div>
        <div id="demoCharts">

        </div>
        <div id="wjCharts1">

        </div>
    </div>
</template>

<script>


export default {
    data() {
        return {
            msg: "测试标题",
            dataJson: [
                {
                    "area":["襄城区","樊城区","襄州区","高新区","东津新区","襄阳市直","枣阳市","宜城市","老河口市","南漳县","保康县","谷城县"],
                    "listmonth":["2017-04","2017-05","2017-06"],
                    "listscore":[[32.54,47.99,38.64,40.27,35.94,49.92,46.64,39.49,39.25,45.87,40.29,40.81],[32.36,42.06,41.27,39.6,48.35,49.54,41.46,38.65,37.45,47.14,40.69,42.42],[32.36,46.81,42.5,39.38,0,52.84,46.06,42.47,37.75,47.1,42.81,40.63]]
                }
            ],
            demoSeries: [],
            wjdemo1: [
                {
                    power: ['执勤力量', '特战力量', '改革前'],
                    listYear: ["2016", "2017", "2018", "2019", "2020"],
                    other: [[100,200,300,400,500], [200,300,400,500,600], [10,20,30,40,50]],
                }
            ],
            option1: {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                    }
                },
                toolbox: {
                    feature: {
                        // dataView: {show: true, readOnly: false},
                        magicType: {show: true, type: ['line', 'bar']},
                        restore: {show: true},
                        // saveAsImage: {show: true}
                    }
                },
                legend: {
                    show: true,
                    data: ['力量 1', '力量 2', '改革前']
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['2000年', '2001年', '2002年', '2003年','2004年','2005年','2006年','2007年','2008年','2009年',],
                        axisPointer: {
                            type: 'shadow'
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '数量',
                        min: 0,
                        max: 220,
                        interval: 20,
                        axisLabel: {
                            formatter: '{value} 万'
                        }
                    },
                    // {
                    //     type: 'value',
                    //     name: '百分比',
                    //     min: 0,
                    //     max:  100,
                    //     interval: 5,
                    //     axisLabel: {
                    //         formatter: '{value} %'
                    //     }
                    // }
                ],
                series: [
                    {
                        name: '力量 1',
                        type: 'bar',
                        itemStyle: {
                            color: "red"
                        },
                        data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                    },
                    {
                        name: '力量 2',
                        type: 'bar',
                        itemStyle: {
                            color: "blue"
                        },
                        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                    },
                    {
                        name: '改革前',
                        type: 'line',
                        yAxisIndex: 0,
                        itemStyle: {
                            color: "#333"
                        },
                        data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                    }
                ]
            }
        }
    },
    methods: {
        drawLine() {
            const myCharts = this.$echarts.init(document.getElementById("demoCharts"))
            myCharts.setOption({
                title: { 
                    text: this.msg,
                    subtext: '小标题',
                },
                tooltip: {},
                legend:{
                    data: this.dataJson[0].listmonth
                },
                xAxis: {
                    data: this.dataJson[0].area
                },
                yAxis: {},
                series: this.demoSeries
            });
        },
        wjdemo1Fn() {
            const wjCharts1 = this.$echarts.init(document.getElementById("demoCharts"))
            wjCharts1.setOption(this.option1)
        }
    },
    mounted() {
        // console.log(this.wjdemo1[0].other)

        for (let index = 0; index < this.dataJson[0].listmonth.length; index++) {
            this.demoSeries.push({
                name: this.dataJson[0].listmonth[index],
                data: this.dataJson[0].listscore[index],
                type: 'bar'
            })
        }
        // this.drawLine()
        this.wjdemo1Fn()
    },
}
</script>

<style scoped>
    #demoCharts {
        height: 700px;
        width: 100%;
        border: 1px red solid;
    }
</style>
