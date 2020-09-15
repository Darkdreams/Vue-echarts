<template>
    <div class="static-mod">
        <div v-for="item in itemData" :key="item.id" class="item" data-index="item.id">
            <div class="item-head">
                <div class="item-title">{{item.value}}</div>
                <div class="item-icon">
                    <img src="../image/symbols-buttons-big-screen.png">
                </div>
            </div>
            <div class="item-data-mod">
                图片{{item.id}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            itemData: [
                {id: 1, value: "item1"},
                {id: 2, value: "item2"},
                {id: 3, value: "item3"},
                {id: 4, value: "item4"},
                {id: 5, value: "item5"},
                {id: 6, value: "item6"},
                {id: 7, value: "item7"},
                {id: 8, value: "item8"},
                {id: 9, value: "item9"},
                {id: 10, value: "item10"},
                {id: 11, value: "item11"},
                {id: 12, value: "item12"},
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
</style>