<template>
    <div class='movingInfo'>
        <!-- <video class='stream' :src='videoUrl' loop autoplay/>
        <div class='tab'>
            <div 
            :class='["tabItem", {disabled: tab.disabled, active: idx===currentTab}]' 
            v-for='(tab, idx) in tabs' 
            :key='idx'
            @click.stop='tabClick(idx)'
            >{{tab.name}}</div>
        </div>
        <div class='title'>{{name}}</div>
        <div class='infoList' v-if='currentTab === 0 || currentTab === 1'>
            <div class='infoItem' v-for='(txt, idx) in txts' :key='idx'>{{txt}}</div>
        </div>
        <div class='infoList' v-if='currentTab === 2'>
            <div class='infoItem'>出发坐标： {{JSON.stringify(depart)}}</div>
            <div class='infoItem'>当前坐标： {{JSON.stringify(currentPos)}}</div>
            <div class='infoItem'>演习现场坐标： {{JSON.stringify(dest)}}</div>
            <div class='infoItem'>行进时间： {{minutes2Str(timeTraveled)}}</div>
            <div class='infoItem'>已行经： {{distanceTraveled}}km</div>
            <div class='infoItem'>距现场距离： {{distanceLeft}}km</div>
            <div class='infoItem'>预计尚需： {{minutes2Str(timeLeft)}}</div>
        </div> -->
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>