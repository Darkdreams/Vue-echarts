<template>
    <div id="main7">
        武装力量数据
    </div>
</template>

<script>
let myChart = ""
export default {
    props: {
        width: Number
    },
    data() {
        return {
            cookiesTime: null,
            option: {}
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
            let emphasisStyle = {
                itemStyle: {
                    barBorderWidth: 1,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: 'rgba(0,0,0,0.5)'
                }
            };

            this.option = {
                backgroundColor: '#eee',
                legend: {
                    show: true,
                    data: ['各单位编制人员数', '实有人员数量', '超编数量', '缺编数量'],
                    left: 10
                },
                
                toolbox: {
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
                    left: "center"
                },
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
                ],
            };

            myChart = this.$echarts.init(document.getElementById("main7"))
            myChart.setOption(this.option)

            const legend = {
                show: false
            } 

            const grid = {}
            
            if(this.width <= 470) {
                this.option.legend = legend
                this.option.grid = grid
                // myChart.resize()
                myChart.setOption(this.option, true)
            }
        }
    },
    mounted() {
        this.draw()
    }
}
</script>

<style scoped>
    #main7 {
        width: 100%;
        height: 100%;
    }
</style>