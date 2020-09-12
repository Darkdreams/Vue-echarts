<template>
    <div id="main">武器装备数据</div>
</template>

<script>
let myChart = null

export default {
    data() {
        return {
            optionEchart: {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c}万台 '
                },
                legend: {
                    orient: 'vertical',
                    left: 10,
                    data: ['编制数量', '实有数量', '指控通联装备 ', '侦察情报装备', '执勤安保装备', '机动处突装备', '反恐排爆装备', '海上维权执法装备', '防卫作战装备', '抢险救援装备', '空中支援装备', '综合保障装备']
                },
                series: [
                    {
                        name: '装备编配',
                        type: 'pie',
                        // selectedMode: 'single',
                        radius: [0, '30%'],

                        label: {
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
                            formatter: '{hr|}\n  {b|{b}：}{c}万台  ',
                            backgroundColor: '#eee',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,
                            position: 'outer',
                            alignTo: 'labelLine',
                            // shadowBlur:3,
                            // shadowOffsetX: 2,
                            // shadowOffsetY: 2,
                            // shadowColor: '#999',
                            // padding: [0, 7],
                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 22,
                                    align: 'center'
                                },
                                // abg: {
                                //     backgroundColor: '#333',
                                //     width: '100%',
                                //     align: 'right',
                                //     height: 22,
                                //     borderRadius: [4, 4, 0, 0]
                                // },
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
            myChart = $echarts.init(document.getElementById("main"))
            myChart.setOption(optionEchart)
        },
    },
    created() {
        // this.addData()
    },
    mounted() {
        const { dataMap } = this
        this.draw()
        if(this.dataMap) {
            console.log(myChart.getOption())
        }

        window.onresize = function () {
            myChart.resize()
        }
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