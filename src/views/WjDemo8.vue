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
            let data = [
                [1200, 2000, 3000, 1000],
                [4000, 10000, 6825, 1000],
                [3000, 6500, 4463.33, 1000],
                [2500, 5600, 3793.83, 1000],
                [2000, 4000, 3060, 1000],
                [2000, 4000, 3222.33, 1000],
                [2500, 4000, 3133.33, 1000],
                [1800, 4000, 3100, 1000],
                [2000, 3500, 2750, 1000],
                [2000, 3000, 2500, 1000],
                [1800, 3000, 2433.33, 1000],
                [2000, 2700, 2375, 1000],
            ];
            let cities = ['1月', ' 2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
            let barHeight = 50;

            let option = {
                title: {
                    // text: '在中国租个房子有多贵？',
                    // subtext: '市中心一室月租费（数据来源：https://www.numbeo.com）'
                },
                legend: {
                    show: true,
                    data: ['工作用房设施', '文化活动用房设施', '专业用房设施', '生活用房设施']
                },
                grid: {
                    top: 100
                },
                angleAxis: {
                    type: 'category',
                    data: cities
                },
                tooltip: {
                    show: true,
                    formatter: function (params) {
                        var id = params.dataIndex;
                        return cities[id] + '<br>最低：' + data[id][0] + '<br>最高：' + data[id][1] + '<br>平均：' + data[id][2];
                    }
                },
                radiusAxis: {
                },
                polar: {
                },
                series: [{
                    type: 'bar',
                    itemStyle: {
                        color: 'transparent'
                    },
                    data: data.map(function (d) {
                        return d[0];
                    }),
                    coordinateSystem: 'polar',
                    stack: '最大最小值',
                    silent: true
                }, {
                    type: 'bar',
                    data: data.map(function (d) {
                        return d[1];
                    }),
                    coordinateSystem: 'polar',
                    name: '价格范围',
                    stack: '最大最小值'
                }, {
                    type: 'bar',
                    itemStyle: {
                        color: 'transparent'
                    },
                    data: data.map(function (d) {
                        return d[2]
                    }),
                    coordinateSystem: 'polar',
                    stack: '均值',
                    silent: true,
                    z: 10
                }, {
                    type: 'bar',
                    data: data.map(function (d) {
                        return d[3];
                    }),
                    coordinateSystem: 'polar',
                    name: '均值',
                    stack: '均值',
                    barGap: '-100%',
                    z: 10
                }]
            };

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
        const { dataMap } = this
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