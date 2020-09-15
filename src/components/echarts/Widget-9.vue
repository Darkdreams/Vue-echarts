<template>
    <div id="main9">武器装备数据</div>
</template>

<script>
let myChart = null

export default {
    props: {
        width: Number
    },
    data() {
        return {
            optionEchart: {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c}万台 '
                },
                legend: {
                    show: true,
                    orient: 'vertical',
                    left: 10,
                    data: ['编制数量', '实有数量', '指控通联装备 ', '侦察情报装备', '执勤安保装备', '机动处突装备', '反恐排爆装备', '海上维权执法装备', '防卫作战装备', '抢险救援装备', '空中支援装备', '综合保障装备']
                },
                series: [
                    {
                        name: '装备编配',
                        type: 'pie',
                        selectedMode: false,

                        radius: [0, '30%'],
                        
                        label: {
                            show: true,
                            position: 'inner'
                        },
                        labelLine: {
                            show: false,
                            smooth: true,
                        },
                        data: [
                            {value: 335, name: '编制数量', selected: true},
                            {value: 679, name: '实有数量'},
                        ]
                    },
                    {
                        name: '装备体系',
                        type: 'pie',
                        radius: ['40%', '55%'],
                        // selectedMode: 'single',
                        label: {
                            show: false,
                            formatter: '{hr|}\n  {b|{b}：}{c}万台  ',
                            backgroundColor: '#eee',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,
                            position: 'outer',
                            alignTo: 'labelLine',
                            
                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 22,
                                    align: 'center'
                                },
                                
                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        },
                        data: [
                            {value: 335, name: '指控通联装备 '},
                            {value: 310, name: '侦察情报装备'},
                            {value: 234, name: '执勤安保装备'},
                            {value: 135, name: '机动处突装备'},
                            {value: 1048, name: '反恐排爆装备'},
                            {value: 251, name: '海上维权执法装备'},
                            {value: 147, name: '防卫作战装备'},
                            {value: 102, name: '抢险救援装备'},
                            {value: 147, name: '空中支援装备'},
                            {value: 102, name: '综合保障装备'}
                        ]
                    }
                ]
            }
        }
    },
    methods: {
        draw: function(){
            const { $echarts, optionEchart } = this
            const legend = {
                show: false
            }
            
            const label = {
                show: false
            }
            
            myChart = $echarts.init(document.getElementById("main9"))
            myChart.setOption(optionEchart)


            if(this.width <= 470) {
                optionEchart.legend = legend
                optionEchart.series[0].label = label
                optionEchart.series[1].label = label
                // myChart.resize()
                myChart.setOption(optionEchart)
            }
            
        },
    },
    created() {
        // this.addData()
    },
    mounted() {
        const { dataMap } = this
        this.draw()
    }
}
</script>

<style scoped>
#main9 {
    width: 100%;
    height: 100%;
}
</style>