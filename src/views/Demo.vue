<template>
    <div class="container">
        <div id="main">测试</div>
        <select v-model="selected" class="selectMod">
            <option v-for="(option, index) in optionsList" v-bind:value="option.value" :key="index">
                {{ option.text }}
            </option>
        </select>
        <p>{{selected}}</p>
    </div>
</template>

<script>
let myChart = null,
    dataMap = null
export default {
    data: function(){
        return {
            years: [2016, 2017, 2018, 2019, 2020],
            dataMap: "",
            selected: "",
            seriesData: {
                2016: [50, 200, 150, 80, 70, 110, 130],
                2017: [100, 111, 222, 33, 70, 120, 110],
                2018: [150, 200, 150, 20, 11, 222, 250],
                2019: [200, 111, 222, 80, 70, 110, 130],
                2020: [250, 200, 150, 80, 24, 111, 222]
            },
            optionsList: [
                { text: '2016', value: '2016' },
                { text: '2017', value: '2017' },
                { text: '2018', value: '2018' },
                { text: '2019', value: '2019' },
                { text: '2020', value: '2020' }
            ],
            optionEchart: {
                tooltip: {
                },
                xAxis: {
                    type: 'category',
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [],
                    type: 'line',
                    backgroundStyle: {
                        color: 'rgba(220, 220, 220, 0.8)'
                    }
                }]
                // baseOption: {
                    
                // },
                // options: []
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
            const { $echarts, optionEchart, selected, seriesData } = this
            console.log(selected)
            myChart = $echarts.init(document.getElementById("main"))
            this.optionEchart = {
                series: [{ 
                    data: seriesData[selected] 
                }]
            }
            
            myChart.setOption(optionEchart)
        },
        getData: function(){
            this.$axios.get(`/wjdemoData`).then( res => {
                // console.log(res.data)
                if(res.status === '200') {
                    this.dataMap = res.data
                }
            })
            console.log(this.dataMap)
        }
    },
    created: function() {
        // console.log(seriesData)
        
    },
    mounted: function(){
        // this.getData()
        this.selected = this.optionsList[0].value 
        const { dataFormatter } = this
        // dataMap = dataFormatter(seriesData)
        // console.log(seriesData[this.selected])
        this.draw()
    },
    watch: {
        selected: function(newValue, oldValue) {
            const { $echarts, optionEchart, selected,seriesData } = this
            this.selected = newValue
            if(newValue != oldValue) {
                // optionEchart = {
                //     series: [{ 
                //         data: seriesData[selected] 
                //     }]
                // }
                optionEchart.series[0].data = seriesData[selected]
                myChart.setOption(optionEchart)
            }
            
            console.log(seriesData[newValue])
        },
        immediate: true
    },
}
</script>

<style scoped>
.container {
    position: relative;
}
#main {
    width: 100%;
    height: 800px;
    border:1px red solid;
}
.selectMod {
    width: 100px;
    height: 50px;
    text-align: center;
    position: absolute;
    top: 50px;
    right: 50px;
}
</style>