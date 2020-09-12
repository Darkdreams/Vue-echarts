<template>
    <div id="map"></div>
</template>

<script>
import Echart from 'echarts'
import mapboxgl from 'mapbox-gl';
import EchartLayer from 'echartslayer';
// var EchartLayer = require('echartslayer');
console.log(EchartLayer)

export default {
    data() {
        return {
            token: "pk.eyJ1IjoiZGFya2RyZWFtcyIsImEiOiJja2V1cjk0a2czeG11MnZucDBwem51Mjd3In0.Lem4yFSwDfMU-s1X6sLunw",
            option: {
                GLMap: { //Must

                },
                series: [{
                    coordinateSystem: 'GLMap',
                }]
            }
        }
    },
    methods: {

    },
    mounted() {
        mapboxgl.accessToken = this.token;

        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
            center: [114.6533203125, 40.38002840251183], // starting position [lng, lat]
            zoom: 9 // starting zoom
        });

        var echartslayer = new EchartLayer(map);
        echartslayer.Echart.setOption(option);
        
    },
    created() {
        
    }
}
</script>

<style scoped>
    /* @import url("https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"); */
    #map {
        width: 100%;
        height: 800px;
        border:1px red solid;
    }
</style>