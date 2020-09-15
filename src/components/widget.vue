<template>
    <div>
        <div v-if="index === 3">
            <StaticWidget />
        </div>
        <div v-else class="echarts-comp-mini">
            <div class="echarts-comp-head">
                <div class="head-title">
                    <div class="head-title-icon">
                        <img src="./image/1981600081064_.pic.jpg" alt="">
                    </div>
                    <div class="head-title-text">{{title}}</div>
                </div>
                <div class="head-icon" @click="handlerClick(index)">
                    <img src="./image/symbols-buttons-big-screen.png">
                </div>
            </div>
            <div class="echarts-comp-data">
                <Widget1 v-if="index === 1" :width="width" />
                <Widget2 v-if="index === 2" :width="width"/>
                <Widget4 v-if="index === 4" :width="width"/>
                <Widget5 v-if="index === 5" :width="width"/>
                <Widget7 v-if="index === 6" :width="width"/>
                <Widget8 v-if="index === 7" :width="width"/>
                <Widget9 v-if="index === 8" :width="width"/>
                <Widget10 v-if="index === 9" :width="width"/>
                <Widget11 v-if="index === 10" :width="width"/>
                <Widget6 v-if="index === 11" :width="width"/>
            </div>
            <div class="echart-layer-container" v-if="show">
                <div class="echart-container">
                    <div class="echart-head">
                        <div class="head-title">
                            <div class="head-title-icon">
                                <img src="./image/1981600081064_.pic.jpg" alt="">
                            </div>
                            <div class="head-title-text">{{title}}</div>
                        </div>
                        <div class="head-icon">
                            <img src="./image/symbols-buttons-big-screen.png">
                        </div>
                    </div>
                    <div class="echarts-comp-data">
                        <Widget1 v-if="index === 1"/>
                        <Widget2 v-if="index === 2"/>
                        <Widget4 v-if="index === 4"/>
                        <Widget5 v-if="index === 5"/>
                        <Widget7 v-if="index === 6"/>
                        <Widget8 v-if="index === 7"/>
                        <Widget9 v-if="index === 8"/>
                        <Widget10 v-if="index === 9"/>
                        <Widget11 v-if="index === 11" />
                        <Widget6 v-if="index === 11"/>
                        <!-- <WidgetFull /> -->
                    </div>   
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import Widget1 from './echarts/Widget-1'
import Widget2 from './echarts/Widget-2'
import Widget4 from './echarts/Widget-4'
import Widget5 from './echarts/Widget-5'
import Widget6 from './echarts/Widget-6'
import Widget7 from './echarts/Widget-7'
import Widget8 from './echarts/Widget-8'
import Widget9 from './echarts/Widget-9'
import Widget10 from './echarts/Widget-10'
import Widget11 from './echarts/Widget-11'
import Widget12 from './echarts/Widget-12'
import StaticWidget from './echarts/StaticWidget'
import WidgetFull from './echarts/WidgetFull'

export default {
    props: {
        index: Number,
        title: String
    },
    components: {
        StaticWidget,
        Widget1,
        Widget2,
        Widget4,
        Widget5,
        Widget6,
        Widget7,
        Widget8,
        Widget9,
        Widget10,
        Widget11,
        Widget12,
        WidgetFull
    },
    data: function(){
        return {
            width: 470,
            show: false,
            remove: false,
        }
    },

    methods: {
        handlerClick: function(index) {
            // this.show = true
            // this.remove = true
            // console.log(index)
            console.log(this.$refs.one)

        }
    },

    mounted: function() {
        // console.log(this.index)
    },
    watch: {
        show () {
            console.log('show 改变了');
        },
        remove() {
            console.log('remove 改变了');
        }
    }
}
</script>

<style scoped>
.widget {
    box-sizing: border-box;
    margin: 10px;
    width: 200px;
    height: 80px;
    background: #FFFFFF;
}

.echarts-comp-mini {
    width: 470px;
    height: 310px;
    box-sizing: border-box;
    margin: 5px;
    border: 1px solid rgba(255,255,255,0.04);
    box-shadow: 0 0 3px 0 rgba(0,0,0,0.17), inset 0 -1px 0 0 rgba(255,255,255,0.08);
    border-radius: 12px;
    border-radius: 12px;
}

.echarts-comp-mini .echarts-comp-head {
    height: 50px;
    line-height: 50px;
    text-align: left;
    text-indent: 5px;
    display: flex;
    justify-content: space-between;
}

.echarts-comp-mini .echarts-comp-head .head-title {
    display: flex;
    font-weight: 500;
}

.echarts-comp-mini .echarts-comp-head .head-title-icon {
    margin-top: 8px;
}

.echarts-comp-mini .echarts-comp-head .head-title-icon img {
    width: 32px;
    height: 32px;
}

.echarts-comp-mini .echarts-comp-head .head-icon {
    margin-right: 18px;
    cursor: pointer;
}

.echarts-comp-mini .echarts-comp-head .head-icon img {
    width: 12px;
    height: 12px;
}

.echarts-comp-mini .echarts-comp-data {
    height: 259px;
    background-image: linear-gradient(0deg, rgba(168,198,223,0.00) 0%, #A8C6DF 100%);
    border-radius: 0 0 4px 4px;
    overflow: hidden;
}

.echart-layer-container {
    width: 100%;
    height: 100%;
    background: rgba(44,56,71,0.80);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    /* display: none; */
}

.echart-layer-container .echart-container {
    background: #FFFFFF;
    border: 1px solid rgba(255,255,255,0.04);
    box-shadow: 0 0 3px 0 rgba(0,0,0,0.17), inset 0 -1px 0 0 rgba(255,255,255,0.08);
    border-radius: 12px;
    border-radius: 12px;
    width: 1240px;
    height: 826.7px;
    margin: 111.3px auto 0;
}

.echart-layer-container .echart-container .echart-head {
    height: 133.4px;
    line-height: 133.4px;
    display: flex;
    justify-content: space-between;
}

.echart-layer-container .echart-container .echart-head .head-title {
    display: flex;
    font-weight: 500;
}

.echart-layer-container .echart-container .echart-head .head-title-icon {
    width: 85.3px;
    height: 85.3px;
    margin: 27.8px 0 0 30px;
}
.echart-layer-container .echart-container .echart-head .head-title-icon img {
    width: 100%;
    height: 100%;
}
.echart-layer-container .echart-container .echart-head .head-title-text {
    font-family: SourceHanSansSC-Medium;
    font-size: 19px;
    color: #243449;
    letter-spacing: 0;
    margin-left:  26.7px;
}

.echart-layer-container .echart-container .echart-head .head-icon {
    margin-right: 30px;
    margin-top: 10px;
}

.echart-layer-container .echart-container .echarts-comp-data {
    width: 100%;
    height: 690.7px;
    background-image: linear-gradient(0deg, rgba(168,198,223,0.00) 0%, #A8C6DF 100%);
    border-radius: 0 0 4px 4px;
}

</style>