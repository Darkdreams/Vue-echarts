<template>
    <div class="container" id="container">
        <widget 
            v-for="widget in widgetList" 
            :key="widget.id" 
            :index="widget.id" 
            :title="widget.value"
            :type="widget.type"
        ></widget>
    </div>
</template>

<script>
import Widget from '../components/widget'

export default {
    data: function(){
        return {
            widgetList: [
                {id: 1, value: "部队编制体制数量规模", type: ""},
                {id: 2, value: "物资水平战略物资储备", type: ""},
                {id: 3, value: "部队编制体制部队编成", type: ""},
                {id: 4, value: "设施建设营房设施", type: ""},
                {id: 5, value: "设施建设营房设施", type: ""},
                {id: 6, value: "武装力量数据", type: ""},
                {id: 7, value: "设施建设营房设施", type: ""},
                {id: 8, value: "武器装备数据", type: ""},
                {id: 9, value: "WJ部队机关组织树", type: ""},
                {id: 10, value: "WJ部队全国部署军力统计", type: ""},
                {id: 11, value: "设施建设营房设施", type: "half"},
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
    width: 100%;
    /* margin: 0 auto; */
    display: flex;
    flex-wrap: wrap;
    position: relative;
}
</style>