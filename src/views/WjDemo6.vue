<template>
    <div id="main">
        武装力量数据
    </div>
</template>

<script>

export default {
    data() {
        return {
            cookiesTime: null,
            
        }
    },
    methods: {
        draw: function(){
            let xAxisData = [];
            let data1 = [];
            let data2 = [];
            let data3 = [];
            let data4 = [];

            for (let i = 1; i <= 12; i++) {
                xAxisData.push(i + '月');
                data1.push((Math.random() * 100).toFixed(2));
                data2.push((Math.random() * 100).toFixed(2));
                data3.push((Math.random() + 5).toFixed(2));
                data4.push(-(Math.random() * 5).toFixed(2));
            }
            console.log(data3)
            let emphasisStyle = {
                itemStyle: {
                    barBorderWidth: 1,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: 'rgba(0,0,0,0.5)'
                }
            };

            let option = {
                backgroundColor: '#eee',
                legend: {
                    data: ['各单位编制人员数', '实有人员数量', '超编数量', '缺编数量'],
                    left: 10
                },
                // brush: {
                //     toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
                //     xAxisIndex: 0
                // },
                toolbox: {
                    // feature: {
                    //     magicType: {
                    //         type: ['stack', 'tiled']
                    //     },
                    //     dataView: {}
                    // }
                },
                tooltip: {},
                xAxis: {
                    data: xAxisData,
                    name: '月份',
                    axisLine: {onZero: true},
                    splitLine: {show: false},
                    splitArea: {show: false}
                },
                yAxis: {
                    inverse: false,
                    splitArea: {show: false}
                },
                grid: {
                    left: 100
                },
                // visualMap: {
                //     type: 'continuous',
                //     dimension: 1,
                //     text: ['High', 'Low'],
                //     inverse: true,
                //     itemHeight: 200,
                //     calculable: true,
                //     min: -2,
                //     max: 6,
                //     top: 60,
                //     left: 10,
                //     inRange: {
                //         colorLightness: [0.4, 0.8]
                //     },
                //     outOfRange: {
                //         color: '#bbb'
                //     },
                //     controller: {
                //         inRange: {
                //             color: '#2f4554'
                //         }
                //     }
                // },
                series: [
                    {
                        name: '各单位编制人员数',
                        type: 'bar',
                        stack: 'one',
                        emphasis: emphasisStyle,
                        data: data1
                    },
                    {
                        name: '实有人员数量',
                        type: 'bar',
                        stack: 'one',
                        emphasis: emphasisStyle,
                        data: data2
                    },
                    {
                        name: '超编数量',
                        type: 'bar',
                        stack: 'one',
                        emphasis: emphasisStyle,
                        data: data3
                    },
                    {
                        name: '缺编数量',
                        type: 'bar',
                        stack: 'one',
                        emphasis: emphasisStyle,
                        data: data4
                    }
                ]
            };

            // myChart.on('brushSelected');
            const myChart = this.$echarts.init(document.getElementById("main"))
            myChart.setOption(option)
            window.onresize = function () {
                myChart.resize()
            }
        }
    },
    mounted() {
        this.draw()
        // console.log(this)
    },
    created() {
        // let expire = new Date((new Date()).getTime() + 2 * 60 * 60000);//有效期2小时
        // expire = ";expires=" + expire.toGMTString();
        // document.cookie = `username=12123; ${expire}; path=/`;
        // this.$axios.get('/wjdemoData').then(res => {
        //     // this.qusitionList = res
        //     console.log(res)
        // })
    }
}
</script>

<style scoped>
    #main {
        width: 100%;
        height: 800px;
    }
</style>