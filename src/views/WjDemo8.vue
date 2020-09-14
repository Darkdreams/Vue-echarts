<template>
    <div id="main"></div>
</template>

<script>
let myChart = ''

export default {
    data() {
        return {
            
        }
    },
    methods: {
        draw: function(){
            const { $echarts } = this
            let option = {
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
                }],
                legend: {
                    // show: true,
                    // data: ['A', 'B', 'C']
                }
            }

            myChart = $echarts.init(document.getElementById("main"))
            myChart.setOption(option)
            window.onresize = function () {
                myChart.resize()
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
#main {
    width: 100%;
    height: 600px;
    border: 1px red solid;
}
</style>