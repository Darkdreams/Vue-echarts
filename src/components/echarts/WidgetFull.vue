<template>
    <div id="main-full">可视化工具</div>
</template>

<script>
let myChart = ""

export default {
    props: {
        optionData: Object,
        index: Number
    },

    data: function(){
        return {
            option: {}
        }
    },

    methods: {
        
    },

    mounted() {
        console.log(this.optionData)
        const { $echarts } = this
        myChart = $echarts.init(document.getElementById("main-full"))
        switch (this.index) {
            case 1:
                this.optionData.option.baseOption.legend = {
                    show: true,
                    textStyle: {
                        fontSize: 10
                    },
                    type: 'scroll',
                    top: 10,
                    data: ['武警部队编制人数','武警部队实有人数', '武警部队警官编制人数', '武警部队警官实有人数', '武警部队士兵编制人数', '武警部队士兵实有人数', '武警部队文职人员编制人数', '武警部队文职人员实有人数', '各大单位武警部队编制人数', '各大单位武警部队实有人数', '武警部队院校编制人数', '武警部队科研机构编制人数', '武警部队训练机构编制人数', '武警部队新型作战力量编制人数'],
                }
                break;
            case 2:
                this.optionData.option.baseOption.legend = {
                    legend: {
                        show: true,
                        textStyle: {
                            fontSize: 10
                        },
                        type: 'scroll',
                        top: 10,
                        data: ['武器装备储备数据', '维修器材储备数据', '军需物资储备数据', '卫生物资储备数据', '运输装备储备数据', '野营装备储备数据'],
                    }
                }
                break;
            case 4:
                this.optionData.option.legend = {
                    legend: {
                        show: true,
                        textStyle: {
                            fontSize: 10
                        },
                        type: 'scroll',
                        data: ['武警部队团级以上建制单位数量','武警部队机动总队团级以上单位数量','武警部队内卫总队团及以上单位数量','武警部队海警总队团级以上单位数量','武警部队院校建制单位数量','武警部队科研机构建制单位数量','武警部队训练机构建制单位数量','武警部队直属建制单位数量','武警部队附属建制单位数量','武警部队机关局单位数量','武警部队机关处单位数量',],
                    }
                }
                break;
            case 5:
                this.optionData.option.legend = {
                    show: true,
                }
                break;
            case 6:
                this.optionData.option.legend = {
                    show: true,
                    data: ['各单位编制人员数', '实有人员数量', '超编数量', '缺编数量'],
                    left: "center",
                    
                }
                this.optionData.option.grid = {
                }
                break;
            case 7:
                this.optionData.option.legend = {
                    show: true,
                    left: "center",
                }
                break;
            case 8:
                this.optionData.option.legend = {
                    show: true,
                    orient: 'vertical',
                    left: 10,
                    data: ['编制数量', '实有数量', '指控通联装备 ', '侦察情报装备', '执勤安保装备', '机动处突装备', '反恐排爆装备', '海上维权执法装备', '防卫作战装备', '抢险救援装备', '空中支援装备', '综合保障装备']
                }
                this.optionData.option.series[0].label = {
                    show: true,
                    position: 'inner'
                }
                this.optionData.option.series[1].label = {
                    show: true,
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
                }
                this.optionData.option.series[0].left = "70"
                this.optionData.option.series[1].left = "70"
                break;
            case 9:
                this.optionData.option.series.label.fontSize = 15
                break;
            case 11:
                this.optionData.option.legend = {
                    show: true,
                    type: 'scroll',
                    left: 10,
                    data: ['规模（间）', '面积（平方米）', '所属营区（个）', '配备各类营具类型（个）', '配备各类营具数量（个）','供水类型（种）', '供电类型（种）', '供暖类型（种）', '消防类型（种）']
                }
                this.optionData.option.series[0].label = {
                    show: false,
                    position: 'center'
                }
                this.optionData.option.series[0].emphasis.label = {
                    show: true,
                    fontSize: '15',
                    fontWeight: 'bold'
                }
                break;
        }
        myChart.setOption(this.optionData.option)
    },
}
</script>

<style scoped>
#main-full {
    width: 100%;
    height: 100%;
}
</style>