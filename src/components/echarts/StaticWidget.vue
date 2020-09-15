<template>
    <div class="static-mod">
        <div v-for="item in itemData" :key="item.id" class="item">
            <div class="item-head">
                <div class="item-title">{{item.value}}</div>
                <div class="item-icon">
                    <img src="../image/symbols-buttons-big-screen.png">
                </div>
            </div>
            <div class="item-data-mod">
                <img :src="item.src">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            itemData: [
                
                {id: 1, value: "数量规模", src: require("./image/1.png")},
                {id: 2, value: "部队编成", src: require("./image/2.png")},
                {id: 3, value: "武器装备", src: require("./image/3.png")},
                {id: 4, value: "武装力量", src: require("./image/4.png")},
                {id: 5, value: "营房设施", src: require("./image/5.png")},
                {id: 6, value: "部队编制", src: require("./image/6.png")},
                {id: 7, value: "营房设施", src: require("./image/7.png")},
                {id: 8, value: "营房设施对比", src: require("./image/8.png")},
                {id: 9, value: "战略物资储备", src: require("./image/9.png")},
                {id: 10, value: "人员热点图", src: require("./image/10.png")},
                {id: 11, value: "武装力量", src: require("./image/11.png")},
                {id: 12, value: "军事部署", src: require("./image/12.png")},
            ]
        }
    }
}
</script>

<style scoped>
.static-mod {
    width: 960px;
    display: flex;
    flex-wrap: wrap;
}

.item {
    width: 150px;
    height: 150px;
    box-sizing: border-box;
    margin: 5px; 
    background: #FFFFFF;
    border: 1px solid rgba(255,255,255,0.04);
    box-shadow: 0 0 3px 0 rgba(0,0,0,0.17), inset 0 -1px 0 0 rgba(255,255,255,0.08);
    border-radius: 4px;
    border-radius: 4px;
}

.item .item-head {
    width: 100%;
    height: 32px;
    line-height: 32px;
    text-align: left;
    text-indent: 10px;
    display: flex;
    justify-content: space-between;
}

.item .item-head .item-icon {
    margin-right: 5px;
    cursor: pointer;
}

.item .item-head .item-icon img{
    width: 12px;
    height: 12px;
}
.item-data-mod {
    width: 100%;
    height: 118px;
    background-image: linear-gradient(0deg, rgba(168,198,223,0.00) 0%, #A8C6DF 100%);
    border-radius: 0 0 4px 4px;
}

.item-data-mod img {
    width: 100%;
    height: 100%;
}
</style>