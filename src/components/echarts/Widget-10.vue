<template>
    <div id="main10"></div>
</template>

<script>
let myChart = ''

export default {
    props: {
        width: Number
    },
    data: function(){
        return {
            option: {
                tooltip: {
                    trigger: 'item',
                    triggerOn: 'mousemove'
                },
                legend: {
                    top: '2%',
                    left: 'left',
                    orient: 'vertical',
                    data: {
                        name: 'tree1',
                        icon: 'rectangle'
                    },
                    borderColor: '#c23531'
                },
                series: {
                    type: 'tree',
                    layout: 'orthogonal',
                    name: 'WJ部队机关组织树',
                    roam: true,
                    data: [
                        {
                            "name": "WJ部队机关",
                            "children": [
                                {
                                    "name": "参谋部",
                                    "children": [
                                        {
                                            "name": "作战勤务局"
                                        },
                                        {
                                            "name": "规划和编制局",
                                        },
                                        {
                                            "name": "装备局",
                                        }
                                    ],
                                    
                                },
                                {
                                    "name": "政治工作部",
                                    "children": [
                                        {"name": "组织局"},
                                        {"name": "宣传局"},
                                        {"name": "WJ部队政治工作部宣传文化中心"}
                                ]
                                },
                                {
                                    "name": "后勤部"
                                },
                                {
                                    "name": "装备部"
                                },
                                {
                                    "name": "纪律检查委员会"
                                },
                                {
                                    "name": "北京市内卫总队",
                                    "children": [
                                        {
                                            "name": "司令部",
                                            "children": [
                                                {"name": "办公室"},
                                                {"name": "内位处"}
                                            ]
                                        },
                                        {
                                            "name": "政治部",
                                            "children": [
                                                {"name": "秘书处"},
                                                {"name": "组织处"}
                                            ]
                                        },
                                        {
                                            "name": "后勤部",
                                            "children": [
                                                {"name": "办公室"},
                                                {"name": "政治处"}
                                            ]
                                        },
                                        {"name": "纪委办公室"},
                                        {"name": "执勤第一支队"},
                                        {"name": "执勤第二支队"},
                                        {"name": "执勤第三支队"},
                                        {"name": "执勤第四支队"},
                                        {"name": "执勤第五支队"},
                                        {"name": "执勤第六支队"},
                                        {"name": "执勤第七支队"},
                                        {"name": "执勤第八支队"},
                                        {"name": "执勤第九支队"},
                                        {"name": "执勤第十支队"},
                                        {"name": "执勤第十一支队"},
                                        {"name": "执勤第十二支队"},
                                        {"name": "执勤第十三支队"},
                                        {"name": "执勤第十四支队"},
                                        {"name": "机动第一支队"},
                                        {"name": "机动第二支队"},
                                        {"name": "机动第三支队"},
                                        {"name": "机动第四支队"},
                                        {"name": "指挥学校"}
                                    ]
                                },
                                {
                                "name": "第一机动总队"
                                },
                                {
                                "name": "海警总队(中国海警局)"
                                },
                                {
                                "name": "院校、科研机构"
                                },
                            ]
                        },
                    ],

                    top: '10%',
                    left: '30%',
                    bottom: '0%',
                    right: 'center',
                    // initialTreeDepth: 2,

                    symbolSize: 10,

                    label: {
                        position: 'left',
                        verticalAlign: 'middle',
                        align: 'right',
                        // formatter: '{b}',
                        red: "#333",
                        fontSize: 7,
                        
                    },

                    leaves: {
                        label: {
                            position: 'right',
                            verticalAlign: 'middle',
                            align: 'left'
                        }
                    },

                    expandAndCollapse: true,

                    animationDuration: 550,
                    animationDurationUpdate: 750

                }
            }
        }
    },

    methods: {
        draw: function(){
            const { dataTree, option } = this

            myChart = this.$echarts.init(document.getElementById("main10"))
            myChart.setOption(option)

            const series = {
                initialTreeDepth: 1
            }

            if(this.width <= 470) {
                // option.series = series
                // myChart.setOption(option, false)
            }
        }
    },

    mounted: function() {
        const { draw } = this
        draw()
    },
}
</script>

<style scoped>
#main10 {
    width: 100%;
    height: 100%;
}
</style>