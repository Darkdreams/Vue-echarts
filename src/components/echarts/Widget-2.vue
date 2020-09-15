<template>
    <div id="main2">物资水平战略物资储备</div>
</template>

<script>
let myChart = null

export default {
    props: {
        width: Number
    },
    data() {
        return {
            dataMap: {},
            option: {
                baseOption: {
                    angleAxis: {
                        type: 'category',
                        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                        boundaryGap: false,
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#999',
                                type: 'dashed'
                            }
                        },
                        axisLine: {
                            show: false,
                        },
                        // polarIndex: 1
                    },
                    radiusAxis: {
                        // type: 'category',
                        axisLine: {
                            show: false
                        },
                        // polarIndex: 1
                        // axisLabel: {
                        //     rotate: 45
                        // }
                    },
                    polar: {
                    },
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
                        data: ['武器装备储备数据', '维修器材储备数据', '军需物资储备数据', '卫生物资储备数据', '运输装备储备数据', '野营装备储备数据'],
                        // selected: {
                        //     '维修器材储备数据': false,
                        //     '军需物资储备数据': false,
                        //     '卫生物资储备数据': false,
                        //     '运输装备储备数据': false,
                        //     '野营装备储备数据': false
                        // },
                        // selectedMode: "single"
                    },
                    grid: {
                        left: "center"
                    },
                    series: [
                        { 
                            name: '武器装备储备数据', 
                            type: 'scatter',
                            barWidth:'10',
                            data: [105.9, 103.3, 80.1, 101.9, 90.1, 70.3, 38.7, 60, 110, 67.7, 90.8, 40], 
                            coordinateSystem: 'polar', 
                            stack: 'a',
                            symbolSize: function (val,index) {
                                return val / 2;
                            },
                            animationDelay: function (idx) {
                                return idx * 5;
                            }               
                        },
                        { 
                            name: '维修器材储备数据', 
                            type: 'scatter',
                            barWidth:'10',
                            data: [97.4, 63, 45.2, 76.8, 56.9, 59.6, 38.9, 98.6, 66.5, 101.7, 50, 108], 
                            coordinateSystem: 'polar', 
                            stack: 'a',
                            symbolSize: function (val) {
                                return val / 2;
                            },
                            animationDelay: function (idx) {
                                return idx * 5;
                            }                
                        },
                        { 
                            name: '军需物资储备数据', 
                            type: 'scatter',
                            barWidth:'10',
                            data: [105.9, 51.3, 100.1, 50.9, 101.1, 52, 108.7, 53, 110, 55.7, 107.8, 43.9], 
                            coordinateSystem: 'polar', 
                            stack: 'a',
                            symbolSize: function (val) {
                                return val / 2;
                            },
                            animationDelay: function (idx) {
                                return idx * 5;
                            }                
                        },
                        // { 
                        //     name: '卫生物资储备数据', 
                        //     type: 'scatter',
                        //     barWidth:'10',
                        //     data: [97.4, 54, 90.2, 48.3, 107.9, 51.4, 98.9, 33.6, 99.5, 44.7, 93, 54], 
                        //     coordinateSystem: 'polar', 
                        //     stack: 'a',
                        //     symbolSize: function (val) {
                        //         return val / 2;
                        //     },
                        //     animationDelay: function (idx) {
                        //         return idx * 5;
                        //     }                
                        // },
                        // { 
                        //     name: '运输装备储备数据', 
                        //     type: 'scatter',
                        //     barWidth:'10',
                        //     data: [105.9, 49.3, 100.1, 51.9, 101.1, 52.3, 108.7, 58.5, 110, 51.7, 107.8, 45], 
                        //     coordinateSystem: 'polar', 
                        //     stack: 'a',
                        //     symbolSize: function (val) {
                        //         return val / 2;
                        //     },
                        //     animationDelay: function (idx) {
                        //         return idx * 5;
                        //     }                
                        // },
                        // { 
                        //     name: '野营装备储备数据', 
                        //     type: 'scatter',
                        //     barWidth:'10',
                        //     data: [97.4, 52, 90.2, 48.3, 107.9, 50.4, 98.9, 54.6, 99.5, 50.7, 93, 59], 
                        //     coordinateSystem: 'polar', 
                        //     stack: 'a',
                        //     symbolSize: function (val) {
                        //         return val / 2;
                        //     },
                        //     animationDelay: function (idx) {
                        //         return idx * 5;
                        //     }                
                        // },
                    ]
                },
                options: [
                    {}
                ]
            }
        }
    },
    methods: {
        dataFormatter: function(obj) {
            var pList = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
            var temp;
            for (var year = 2016; year <= 2020; year++) {
                var max = 0;
                var sum = 0;
                temp = obj[year];
                for (var i = 0, l = temp.length; i < l; i++) {
                    max = Math.max(max, temp[i]);
                    sum += temp[i];
                    obj[year][i] = {
                        name: pList[i],
                        value: temp[i]
                    };
                }
                obj[year + 'max'] = Math.floor(max / 100) * 100;
                obj[year + 'sum'] = sum;
            }
            return obj;
        },
        draw: function(){
            const { $echarts, option } = this
            myChart = $echarts.init(document.getElementById("main2"))
            myChart.setOption(option)
        },
        addData: function(){
            const { dataFormatter, dataMap } = this
            
            dataMap.data1 = dataFormatter({
                2020: [79.8, 79.6, 79.6, 79.6, 79.8, 79.7, 79.5, 79.9, 79.9, 79.8, 79.5, 80],
                2019: [74.6, 74.5, 74.9, 74.6, 74.6, 74.6, 74.6, 74.6, 74.5, 74.5, 74.5, 75],
                2018: [69.5, 69.6, 69.9, 69.7, 69.9, 69.7, 70, 69.7, 69.7, 69.8, 69.5, 70],
                2017: [76.6, 75.5, 77.3, 79.1, 79.4, 76.4, 77.3, 75.8, 78.5, 76.8, 79.9, 80],
                2016: [105.9, 103.3, 100.1, 101.9, 101.1, 104.3, 108.7, 106.5, 110, 107.7, 107.8, 110],
            });

            dataMap.data2 = dataFormatter({
                2020:[77.6, 77.8, 77.9, 77.6, 77.8, 77.7, 77.5, 77.5, 77.9, 77.8, 78, 78],
                2019:[74, 73.7, 73.5, 74, 73.6, 74, 73.8, 74, 74, 73.8, 73.9, 74],
                2018:[76.9, 76.9, 76.7, 76.5, 76.6, 76.5, 76.8, 76.5, 76.7, 77, 76.6, 77],
                2017:[84.3, 84.7, 84.1, 84.1, 84.9, 84.3, 84.7, 85, 84.8, 84.9, 84.6, 85],
                2016:[97.4, 103, 90.2, 96.3, 107.9, 101.4, 98.9, 98.6, 99.5, 101.7, 93, 108],
            });

            dataMap.data3 = dataFormatter({
                2020:[10.8, 10.9, 10.9, 10.6, 10.8, 10.5, 10.7, 10.9, 10.5, 10.9, 10.6, 11],
                2019:[8.6, 9, 8.5, 9, 9, 8.6, 8.8, 8.8, 8.8, 8.8, 8.7, 9],
                2018:[11, 10.5, 10.5, 10.9, 10.7, 10.5, 10.7, 10.9, 10.8, 10.5, 10.5, 11],
                2017:[3.9, 3.7, 3.9, 3.2, 3.7, 3.1, 3.9, 3.4, 3.4, 3.5, 4, 4],
                2016:[6, 7.3, 7.1, 6.9, 6.6, 6.6, 6.6, 6.6, 7.2, 6.3, 7.3, 7.5],
            });

            dataMap.data4 = dataFormatter({
                2020:[10.1, 10, 10.5, 10.4, 10.4, 10.3, 10.1, 10.2, 10, 10.3, 10, 10.5],
                2019:[8.4, 8, 8.3, 8.3, 8.3, 8.3, 8.5, 8.4, 8.5, 8, 8.5, 8.5],
                2018:[9, 8.6, 8.5, 8.5, 8.9, 8.6, 8.9, 8.5, 8.7, 8.5, 9, 9],
                2017:[4.5, 4.5, 4.5, 4.5, 4.4, 4.4, 4.5, 4.5, 4.4, 4.5, 4.5, 4.5],
                2016:[6.3, 6.3, 6.2, 6.2, 6, 6.6, 6.1, 6.7, 6.7, 6.1, 6.4, 6.75],
            });

            dataMap.data5 = dataFormatter({
                2020:[68.9, 69, 68.7, 68.5, 68.7, 68.7, 68.5, 68.7, 68.6, 68.8, 68.8, 69],
                2019:[65.8, 65.6, 65.9, 65.6, 65.7, 65.9, 65.9, 66, 66, 65.5, 66, 66],
                2018:[58.8, 59, 58.9, 59, 58.5, 58.5, 58.7, 58.6, 59, 58.8, 58.5, 59],
                2017:[75.8, 75.3, 75.1, 75.2, 75.8, 75.5, 75.6, 75, 75.9, 75.5, 75, 76],
                2016:[99.3, 92.9, 90.5, 95.3, 98.1, 92.1, 98.8, 93.3, 92.7, 94.4, 100, 102.5],
            });

            dataMap.data6 = dataFormatter({
                2020:[68.9, 69, 68.7, 68.5, 68.7, 68.7, 68.5, 68.7, 68.6, 68.8, 68.8, 69],
                2019:[65.8, 65.6, 65.9, 65.6, 65.7, 65.9, 65.9, 66, 66, 65.5, 66, 66],
                2018:[58.8, 59, 58.9, 59, 58.5, 58.5, 58.7, 58.6, 59, 58.8, 58.5, 59],
                2017:[75.8, 75.3, 75.1, 75.2, 75.8, 75.5, 75.6, 75, 75.9, 75.5, 75, 76],
                2016:[99.3, 92.9, 90.5, 95.3, 98.1, 92.1, 98.8, 93.3, 92.7, 94.4, 100, 102.5],
            });

            this.option.options = [
                {
                    // title: { text: '2015年编制人数' },
                    series: [
                        { data: dataMap.data1['2016'] },
                        { data: dataMap.data2['2016'] },
                        { data: dataMap.data3['2016'] },
                        { data: dataMap.data4['2016'] },
                        { data: dataMap.data5['2016'] },
                        { data: dataMap.data6['2016'] },
                    ]
                },
                {
                    // title: { text: '2016年编制人数' },
                    series: [
                        { data: dataMap.data1['2017'] },
                        { data: dataMap.data2['2017'] },
                        { data: dataMap.data3['2017'] },
                        { data: dataMap.data4['2017'] },
                        { data: dataMap.data5['2017'] },
                        { data: dataMap.data6['2017'] },
                    ]
                },
                {
                    // title: { text: '2017年编制人数' },
                    series: [
                        { data: dataMap.data1['2018'] },
                        { data: dataMap.data2['2018'] },
                        { data: dataMap.data3['2018'] },
                        { data: dataMap.data4['2018'] },
                        { data: dataMap.data5['2018'] },
                        { data: dataMap.data6['2018'] },
                    ]
                },
                {
                    // title: { text: '2018年编制人数' },
                    series: [
                        { data: dataMap.data1['2019'] },
                        { data: dataMap.data2['2019'] },
                        { data: dataMap.data3['2019'] },
                        { data: dataMap.data4['2019'] },
                        { data: dataMap.data5['2019'] },
                        { data: dataMap.data6['2019'] },
                    ]
                },
                {
                    // title: { text: '2019年编制人数' },
                    series: [
                        { data: dataMap.data1['2020'] },
                        { data: dataMap.data2['2020'] },
                        { data: dataMap.data3['2020'] },
                        { data: dataMap.data4['2020'] },
                        { data: dataMap.data5['2020'] },
                        { data: dataMap.data6['2020'] },
                    ]
                },
            ]
        }
    },
    created() {
        this.addData()
    },
    mounted() {
        const { draw } = this
        
        draw()

        const legend = {
            show: false
        } 
          
        if(this.width <= 470) {
            this.option.baseOption.legend = legend
            // myChart.resize()
            myChart.setOption(this.option)
        }

    }
}
</script>

<style scoped>
    #main2 {
        width: 100%;
        height: 100%;
    }
</style>