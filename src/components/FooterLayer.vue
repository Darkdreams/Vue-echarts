<template>
    <div class="footer-layer">
        <div class="event-mod">
            <div class="button button-1">
                <img src="./image/symbols-notifications-dock-situation-icon.png">
            </div>
            <div class="button button-2">
                <img src="./image/symbols-icons-icon-maps-42px.png">
            </div>
            <div class="button button-3">
                <img src="./image/symbols-icons-icon-maps-42px.png">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.footer-layer {
    width: 100%;
    height: 60px;
    position: fixed;
    bottom: 0;
    left: 0;
    cursor: pointer;
    background-color: red;
}

.event-mod {
    width: 200px;
    height: 200px;
    margin: -30px auto;
    border-radius: 50%;
    background: rgba(63,83,110,0.40);
    border: 1px solid #243449;
    position: relative;
}

.button {
    width: 64px;
    height: 64px;
    background: #FFFFFF;
    border: 1px solid #243449;
    border-radius: 32px;
    border-radius: 32px;
    position: absolute;
    top: 0;
}

.button img {
    width: 100%;
    height: 100%;
    /* margin-top: 16px; */
}

.button-1 {
    left: -30px;
    top: 35px;
}

.button-2 {
    left: 66px;
    top: -35px;
}

.button-3 {
    right: -30px;
    top: 35px;
}
</style>