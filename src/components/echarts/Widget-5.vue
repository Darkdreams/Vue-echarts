<template>
    <div id="main5">
        装备编配和保障情况分析展现：能够展现装备超缺编情况，装备规模结构，重点装备油耗等情况。
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
            option: {
                title: {
                    
                },
                tooltip: {
                    
                },
                legend: {
                    show: true
                },
                radar: {
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
                        { name: '供水类型（种）', max: 10},
                        { name: '供电类型（种）', max: 10},
                        { name: '供暖类型（种）', max: 10},
                        { name: '消防类型（种）', max: 10}
                    ]
                },
                series: [{
                    // name: '预算 vs 开销（Budget vs spending）',
                    type: 'radar',
                    // areaStyle: {},
                    data: [
                        {
                            value: [400, 6000, 5, 2.5, 10, 6,6,8,6],
                            name: '文化活动用房设施',
                            // label: {
                            //     show: true,
                            //     formatter: function(params) {
                            //         return params.value;
                            //     }
                            // },
                        },
                        {
                            value: [300,4000,14,9,35,9,9,3,3],
                            name: '专业用房设施',
                            // label: {
                            //     show: true,
                            //     formatter: function(params) {
                            //         return params.value;
                            //     }
                            // },
                        },
                        // {
                        //     value: [80, 2000, 10, 10, 40, 5,5,5,5],
                        //     name: '生活用房设施',
                        //     // label: {
                        //     //     show: true,
                        //     //     formatter: function(params) {
                        //     //         return params.value;
                        //     //     }
                        //     // },
                        // },
                        // {
                        //     value: [80, 1000.8, 2, 1, 6, 9,9,9,9],
                        //     name: '工作用房设施',
                        //     zIndex: 10,
                        //     z: 2
                        //     // label: {
                        //     //     show: true,
                        //     //     formatter: function(params) {
                        //     //         return params.value;
                        //     //     }
                        //     // },
                        // },
                    ]
                }]
            }
        }
    },
    methods: {
        draw: function(){
            myChart = this.$echarts.init(document.getElementById("main5"))
            myChart.setOption(this.option)
        }
    },
    mounted() {
        this.draw()

        const legend = {
            show: false
        } 
        const indicator = [
            { name: '', max: 500},
            { name: '', max: 7000},
            { name: '', max: 20},
            { name: '', max: 15},
            { name: '', max: 50},
            { name: '', max: 10},
            { name: '', max: 10},
            { name: '', max: 10},
            { name: '', max: 10}
        ]
        if(this.width <= 470) {
            this.option.legend = legend
            // this.option.radar.indicator = indicator
            // myChart.resize()
            myChart.setOption(this.option)
        }
    },
}
</script>

<style scoped>
    #main5 {
        width: 100%;
        height: 100%;
    }
</style>