<template>
    <div id="main">
        装备编配和保障情况分析展现：能够展现装备超缺编情况，装备规模结构，重点装备油耗等情况。
    </div>
</template>

<script>

export default {
    data() {
        return {
            option: {
                title: {
                    text: '文化活动用房设施',
                    // textAlign: "center"
                    left: "center"
                },
                tooltip: {
                    
                },
                // legend: {
                //     data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
                // },
                radar: {
                    // shape: 'circle',
                    name: {
                        textStyle: {
                            color: '#fff',
                            backgroundColor: '#999',
                            borderRadius: 3,
                            padding: [3, 5]
                        }
                    },
                    indicator: [
                        { name: '规模（间）', max: 500},
                        { name: '面积（平方米）', max: 7000},
                        { name: '所属营区（个）', max: 20},
                        { name: '配备各类营具类型（个）', max: 15},
                        { name: '配备各类营具数量（个）', max: 50},
                        { name: '供水类型（种））', max: 10},
                        { name: '供电类型（种）', max: 10},
                        { name: '供暖类型（种）', max: 10},
                        { name: '消防类型（种）', max: 10}
                    ]
                },
                series: [{
                    name: '预算 vs 开销（Budget vs spending）',
                    type: 'radar',
                    // areaStyle: {normal: {}},
                    data: [
                        {
                            value: [380, 4498.8, 15, 13, 45, 8,6,7,9],
                            name: '文化活动用房设施',
                            // label: {
                            //     show: true,
                            //     formatter: function(params) {
                            //         return params.value;
                            //     }
                            // },
                        }
                        
                    ]
                }]
            }
        }
    },
    methods: {
        draw: function(){
            const myChart = this.$echarts.init(document.getElementById("main"))
            myChart.setOption(this.option)
            window.onresize = function () {
                myChart.resize()
            }
        }
    },
    mounted() {
        this.draw()
    },
}
</script>

<style scoped>
    #main {
        width: 100%;
        height: 800px;
        border:1px red solid;
    }
</style>