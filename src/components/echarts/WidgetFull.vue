<template>
    <div id="main-full">可视化工具</div>
</template>

<script>
let myChart = ""

export default {
    props: {
        optionData: Object
    },

    data: function(){
        return {
            option: {}
        }
    },

    methods: {
        
    },

    mounted() {
        const { $echarts } = this
        myChart = $echarts.init(document.getElementById("main-full"))
        myChart.setOption(this.optionData.optionEchart||this.optionData.option)
    },
}
</script>

<style scoped>
#main-full {
    width: 100%;
    height: 100%;
}
</style>