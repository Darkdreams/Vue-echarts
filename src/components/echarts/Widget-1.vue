<template>
    <div id="main1"></div>
</template>

<script>
// let dataMap = {}
let myChart = null

export default {
    props: {
        width: Number,
    },
    data() {
        return {
            // myChart: '',
            // dataMap: {},
            newOption: {
                legend: {
                    show: true,
                    textStyle: {
                        fontSize: 10
                    },
                    type: 'scroll',
                    top: 10,
                    data: ['武警部队编制人数','武警部队实有人数', '武警部队警官编制人数', '武警部队警官实有人数', '武警部队士兵编制人数', '武警部队士兵实有人数', '武警部队文职人员编制人数', '武警部队文职人员实有人数', '各大单位武警部队编制人数', '各大单位武警部队实有人数', '武警部队院校编制人数', '武警部队科研机构编制人数', '武警部队训练机构编制人数', '武警部队新型作战力量编制人数'],
                }
            },
            
            option: {
                baseOption: {
                    title: {
                    // subtext: 'Demo'
                    },
                    tooltip: {
                    },
                    
                    legend: {
                        show: true,
                        textStyle: {
                            fontSize: 10
                        },
                        type: 'scroll',
                        top: 10,
                        data: ['武警部队编制人数','武警部队实有人数', '武警部队警官编制人数', '武警部队警官实有人数', '武警部队士兵编制人数', '武警部队士兵实有人数', '武警部队文职人员编制人数', '武警部队文职人员实有人数', '各大单位武警部队编制人数', '各大单位武警部队实有人数', '武警部队院校编制人数', '武警部队科研机构编制人数', '武警部队训练机构编制人数', '武警部队新型作战力量编制人数'],
                    },
                    calculable: true,
                    grid: {
                        top: 80,
                        bottom: 80,
                        left: 70,
                    },
                    xAxis: [
                        {
                            'type': 'category',
                            'axisLabel': { 'interval': 0 },
                            'data': [
                                '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月',
                            ],
                            nameTextStyle: {
                                fontSize: 10
                            },
                            splitLine: { 
                                show: false 
                            },
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            name: '数量规模（万人）',
                        }
                    ],
                    series: [
                        { 
                            name: '武警部队编制人数',
                            type: 'line',
                            data: [150.9, 40, 140.1, 45.9, 130.1, 50.3, 120.7, 55.1, 110.8, 60.7, 100.8, 65],
                            animationDelay: function (idx) {
                                return idx * 10;
                            },
                            smooth: true
                        },
                        {
                            name: '武警部队实有人数',
                            type: 'line',
                            data: [40.6, 150.5, 45.3, 140.1, 50.4, 130.4, 55.3, 120.8, 50.5, 110.8, 60.9, 100],
                            animationDelay: function (idx) {
                                return idx * 10;
                            },
                            smooth: true
                        },
                        { 
                            name: '武警部队警官编制人数',
                            type: 'line',
                            data: [100.7, 10, 90, 15, 80.5, 20, 70, 25, 60, 30, 50, 35],
                            animationDelay: function (idx) {
                                return idx * 10;
                            },
                            smooth: true
                        },
                        // { 
                        //     name: '武警部队警官实有人数',
                        //     type: 'line',
                        //     data: [30.3, 26.3, 18.2, 27.2, 35, 23.6, 36.1, 26.7, 46.7, 36.1, 26.4, 56.75],
                        //     animationDelay: function (idx) {
                        //         return idx * 10;
                        //     },
                        //     smooth: true
                        // },
                        // { 
                        //     name: '武警部队士兵编制人数', 
                        //     type: 'line',
                        //     data: [50.9, 69, 108.7, 78.5, 98.7, 78.7, 108.5, 88.7, 98.6, 68.8, 110.8, 69], 
                        //     animationDelay: function (idx) {
                        //         return idx * 10;
                        //     },
                        //     smooth: true
                        // },
                        // { 
                        //     name: '武警部队士兵实有人数', 
                        //     type: 'line',
                        //     data: [70.7, 101.2, 80.3, 100.2, 90.5, 101, 80.1, 100.9, 90.8, 101, 88.4, 101.25], 
                        //     animationDelay: function (idx) {
                        //         return idx * 10;
                        //     },
                        //     smooth: true
                        // },
                        // { 
                        //     name: '武警部队文职人员编制人数', 
                        //     type: 'line',
                        //     data: [18.9, 13.5, 17, 10, 19, 11, 20.4, 10.6, 21, 18,7, 16, 29], 
                        //     animationDelay: function (idx) {
                        //         return idx * 10;
                        //     },
                        //     smooth: true
                        // },
                        // { 
                        //     name: '武警部队文职人员实有人数', 
                        //     type: 'line',
                        //     data: [28, 37.5, 20.7, 30.7, 20.6, 30.5, 20.6, 30.5, 20.6, 30.5, 20.5, 30.7], 
                        //     animationDelay: function (idx) {
                        //         return idx * 10;
                        //     },
                        //     smooth: true
                        // },
                        // { 
                        //     name: '武警部队院校编制人数', 
                        //     type: 'line',
                        //     data: [31, 40.9, 51.4, 42, 31.6, 51.1, 40.8, 30.3, 51.8, 41.5, 31.2, 52], 
                        //     animationDelay: function (idx) {
                        //         return idx * 10;
                        //     },
                        //     smooth: true
                        // },
                        // { 
                        //     name: '武警部队科研机构编制人数', 
                        //     type: 'line',
                        //     data: [23.9, 34.9, 25, 33.2, 24.9, 33.8, 24.4, 34.9, 23.4, 33.4, 23.3, 35], 
                        //     animationDelay: function (idx) {
                        //         return idx * 10;
                        //     },
                        //     smooth: true
                        // },
                        // { 
                        //     name: '武警部队训练机构编制人数', 
                        //     type: 'line',
                        //     data: [22.6, 33, 42.7, 32.9, 22.9, 42.8, 32.5, 22.7, 42.8, 32.8, 42.8, 53], 
                        //     animationDelay: function (idx) {
                        //         return idx * 10;
                        //     },
                        //     smooth: true
                        // },
                        // { 
                        //     name: '武警部队新型作战力量编制人数', 
                        //     type: 'line',
                        //     data: [26.9, 29.3, 35.7, 29.1, 37.5, 29, 48.1, 57.6, 39.6, 28.4, 39.9, 40], 
                        //     animationDelay: function (idx) {
                        //         return idx * 10;
                        //     },
                        //     smooth: true
                        // },
                    ],
                    animationEasing: 'elasticOut',
                    animationDelayUpdate: function (idx) {
                        return idx * 5;
                    }
                },
                options: [
                    {}
                ]
            }
        }
    },
    methods: {
        draw: function(){
            const { $echarts, option } = this
            myChart = $echarts.init(document.getElementById("main1"))
            myChart.setOption(option)
        }
    },
    created() {
    },
    mounted() {
        const legend = {
            show: false
        }

        this.draw()

        if(this.width <= 470) {
            this.option.baseOption.legend = legend
            // myChart.resize()
            myChart.setOption(this.option)
        }
    }
}
</script>

<style scoped>
    #main1 {
        width: 100%;
        height: 100%;
    }
</style>