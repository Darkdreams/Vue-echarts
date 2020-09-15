<template>
    <div class="container">
        <widget 
            v-for="widget in widgetList" 
            :key="widget.id" 
            :index="widget.id" 
            :title="widget.value"
        ></widget>
    </div>
</template>

<script>
import Widget from '../components/widget'

export default {
    data: function(){
        return {
            widgetList: [
                {id: 1, value: "部队编制体制数量规模"},
                {id: 2, value: "物资水平战略物资储备"},
                {id: 3, value: "部队编制体制部队编成"},
                {id: 4, value: "设施建设营房设施"},
                {id: 5, value: "设施建设营房设施"},
                {id: 6, value: "武装力量数据"},
                {id: 7, value: "设施建设营房设施"},
                {id: 8, value: "武器装备数据"},
                {id: 9, value: "WJ部队机关组织树"},
                {id: 10, value: "WJ部队全国部署军力统计"},
                {id: 11, value: "设施建设营房设施"},
            ]
        }
    },
    components: {
        Widget
    },
    methods: {
        
    },

    mounted: function() {
        
    }
}
</script>

<style scoped>
.container {
    width: 1920px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
}
</style>