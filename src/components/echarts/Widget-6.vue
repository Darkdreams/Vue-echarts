<template>
    <div id="main6">
        专业用房设施
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
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c}'
                },
                legend: {
                    show: true,
                    type: 'scroll',
                    left: 10,
                    data: ['规模（间）', '面积（平方米）', '所属营区（个）', '配备各类营具类型（个）', '配备各类营具数量（个）','供水类型（种）', '供电类型（种）', '供暖类型（种）', '消防类型（种）']
                },
                series: [
                    {
                        name: '专业用房设施',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: true,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '10',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            {value: 335, name: '规模（间）'},
                            {value: 310, name: '面积（平方米）'},
                            {value: 234, name: '所属营区（个）'},
                            {value: 135, name: '配备各类营具类型（个）'},
                            {value: 1548, name: '配备各类营具数量（个）'},
                            {value: 335, name: '供水类型（种）'},
                            {value: 310, name: '供电类型（种）'},
                            {value: 234, name: '供暖类型（种）'},
                            {value: 135, name: '消防类型（种）'},
                        ]
                    }
                ]
            }
        }
    },
    methods: {
        draw: function(){
            myChart = this.$echarts.init(document.getElementById("main6"))
            myChart.setOption(this.option)
        }
    },
    mounted() {
        this.draw()

        const legend = {
            show: false
        } 

        const label = {
            show: true,
            fontSize: '70%',
            fontWeight: 'bold'
        }

        if(this.width <= 470) {
            this.option.legend = legend
            this.option.series[0].emphasis.label = label
            myChart.setOption(this.option)
        }
    }
}
</script>

<style scoped>
    #main6 {
        width: 100%;
        height: 100%;
    }
</style>