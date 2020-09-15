<template>
    <div 
        class="footer-layer"
        :class="this.hover ? 'hoverEvent' : ''"
        @mouseenter="enter()" 
        @mouseleave="leave()"
    >
        <div class="event-mod">
            <div 
                @click="tab = 0" 
                :class="{active:tab == 0}"
                class="icon icon-1"
            >
                <!-- <div class="item"></div> -->
            </div>
            <div 
                @click="tab = 1" 
                :class="{active:tab == 1}"
                class="icon icon-2"
            >
                <div v-if="tab == 1">
                    <div class="icon-2-1">
                        <img src="/image/symbols-icons-icon-armed-police-force.png">
                    </div>
                    <div class="icon-2-2">
                        <img src="/image/symbols-icons-icon-exercise-site.png">
                    </div>
                </div>
            </div>
            <div 
                @click="tab = 2" 
                :class="{active:tab == 2}"
                class="icon icon-3"
            >
                <!-- <div class="item"></div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            active: false,
            tab: '4',
            hover: false
        }
    },

    methods: {
        enter(){
            this.hover = true
            console.log("移入")
        },
        leave(){
            this.hover = false
            console.log("移出")
        }

    }
}
</script>

<style scoped>
.footer-layer {
    width: 100%;
    height: 60px;
    position: fixed;
    bottom: 0;
    left: 0;
    transition: bottom 1s;
}

.hoverEvent .event-mod {
    bottom: 0;
}

.event-mod {
    width: 200px;
    height: 100px;
    height: 200px;
    margin: -30px auto;
    /* border-radius: 50%; */
    /* background: rgba(63,83,110,0.40); */
    /* border: 1px solid #243449; */
    position: relative;
    bottom: -130px;
    transition: bottom 1s;
    background: url('/image/symbols-round-dock-combined-shape.png') top center no-repeat;
    background-size: 200px 100px;
}

.icon {
    width: 64px;
    height: 64px;
    /* background: #FFFFFF; */
    border: 1px solid #243449;
    border-radius: 32px;
    position: absolute;
    top: 0;
    border-radius: 50%;
    /* background-position: center center;
    background-repeat: no-repeat; */
    cursor: pointer;
}

.icon.icon-1 {
    left: -30px;
    top: 35px;
    background: #FFFFFF url('/image/symbols-icons-icon-situation-42px-blue.png') center center no-repeat;
    background-size: 32px 32px;

}

.icon.icon-2 {
    left: 62px;
    top: -35px;
    background: #FFFFFF url('/image/symbols-icons-icon-maps-42px.png') center center no-repeat;
    background-size: 32px 32px;
}

.icon.icon-3 {
    right: -30px;
    top: 35px;
    background: #FFFFFF url('/image/symbols-icons-icon-video-42px-blue.png') center center no-repeat;
    background-size: 32px 32px;
}

.active {
    background: rgba(36,52,73,0.80);
    border: 1px solid #243449;
    /* border-radius: 32px;
    border-radius: 32px; */
} 

.active.icon-1 {
    background: rgba(36,52,73,0.80) url('/image/symbols-icons-icon-situation-42px-white.png') center center no-repeat; 
    background-size: 32px 32px;
}

.active.icon-2 {
    background: rgba(36,52,73,0.80) url('/image/symbols-icons-icon-maps-white-42px.png') center center no-repeat; 
    background-size: 32px 32px;
}

.active.icon-3 {
    background: rgba(36,52,73,0.80) url('/image/symbols-icons-icon-video-42px-white.png') center center no-repeat; 
    background-size: 32px 32px;
}

.icon-2-1 {
    width: 36px;
    height: 36px;
    background: url('/image/symbols-icons-icon-star-green-42px.png') center center no-repeat;
    border-radius: 50%;
    position: absolute;
    top: 30px;
    left: -45px;
}

.icon-2-2 {
    width: 36px;
    height: 36px;
    background: url('/image/symbols-icons-icon-star-orange-42px-.png') center center no-repeat;
    border-radius: 50%;
    position: absolute;
    top: 30px;
    right: -45px;
}

.icon-2-1 img {
    width: 14.7px;
    height: 28px;
    margin: 5px auto 0;
}

.icon-2-2 img {
    width: 50%;
    height: 50%;
    margin: 10px auto 0;
    
}
</style>