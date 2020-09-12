<template>
    <div id="main">
        专业用房设施
    </div>
</template>

<script>
import 'echarts-gl';
export default {
    data() {
        return {

        }
    },
    methods: {
        draw: function(){
            // this.$axios.get('/3dData').then(res => {
            // // this.qusitionList = res
            //     console.log(res)
            // })
            let option = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    // orient: 'vertical',
                    type: 'scroll',
                    left: 10,
                    data: ['规模（间）', '面积（平方米）', '所属营区（个）', '配备各类营具类型（个）', '配备各类营具数量（个）','供水类型（种）', '供电类型（种）', '供暖类型（种）', '消防类型（种）']
                },
                series: [
                    {
                        name: '专业用房设施',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '100%',
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
        
    }
}
</script>

<style scoped>
    #main {
        width: 100%;
        height: 800px;
    }
</style>