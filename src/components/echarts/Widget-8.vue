<template>
    <div id="main8"></div>
</template>

<script>
let myChart = ''

export default {
    props: {
        width: Number
    },
    data() {
        return {
            option: {
                angleAxis: {
                    type: 'category',
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                },
                tooltip: {
                    
                },
                radiusAxis: {
                },
                polar: {
                },
                grid: {
                    left: "center"
                },
                legend: {
                    show: true
                },
                series: [{
                    type: 'bar',
                    data: 
                        [100, 80.4, 60.1, 90.9, 70.1, 95.3, 69.7, 100.1, 60.8, 98.7, 80.8, 90]
                    ,
                    coordinateSystem: 'polar',
                    name: '招待用房设施',
                    stack: 'a'
                }, {
                    type: 'bar',
                    data: [50.9, 80.4, 60.1, 90.9, 70.1, 95.3, 69.7, 100.1, 60.8, 98.7, 80.8, 90],
                    coordinateSystem: 'polar',
                    name: '库房设施',
                    stack: 'a'
                }, {
                    type: 'bar',
                    data: [50.9, 80.4, 60.1, 90.9, 70.1, 95.3, 69.7, 100.1, 60.8, 98.7, 80.8, 90],
                    coordinateSystem: 'polar',
                    name: '附属用房设施',
                    stack: 'a'
                }]
            }
        }
    },
    methods: {
        draw: function(){
            const { $echarts, option } = this

            myChart = $echarts.init(document.getElementById("main8"))
            myChart.setOption(option)

            const legend = {
                show: false
            } 
            
            if(this.width <= 470) {
                option.legend = legend
                // myChart.resize()
                myChart.setOption(option)
            }
        },
    },
    created() {
    },
    mounted() {
        this.draw()
    }
}
</script>

<style scoped>
#main8 {
    width: 100%;
    height: 100%;
}
</style>