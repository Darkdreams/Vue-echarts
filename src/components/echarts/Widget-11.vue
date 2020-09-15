<template>
    <div id="main11"></div>
</template>

<script>
let myChart = ''

export default {
    props: {
        width: Number
    },
    data: function(){
        return {
            data1: [
                {name: '拉萨', value: 10},
                {name: '福州', value: 10},
                {name: '南宁', value: 11},
                {name: '广州', value: 11},
                {name: '太原', value: 12},
                {name: '昆明', value: 12},
                {name: '海口', value: 13},
                {name: '沈阳', value: 13},
                {name: '长春', value: 14},
                {name: '银川', value: 14},
                {name: '南昌', value: 15},
                {name: '西宁', value: 15},
                {name: '呼和浩特', value: 15},
                {name: '成都', value: 15},
                {name: '西安', value: 11},
                {name: '南京', value: 11},
                {name: '贵阳', value: 12},
                {name: '乌鲁木齐', value: 12},
                {name: '杭州', value: 13},
                {name: '济南', value: 20},
                {name: '兰州', value: 21},
                {name: '郑州', value: 22},
                {name: '哈尔滨', value: 23},
                {name: '石家庄', value: 21},
                {name: '长沙', value: 11},
                {name: '合肥', value: 11},
                {name: '武汉', value: 12},
            ],
            geoCoordMap: {
                '拉萨':[91.11,29.97],
                '福州':[119.3,26.08],
                '南宁':[108.33,22.84],
                '广州':[113.23,23.16],
                '太原':[112.53,37.87],
                '昆明':[102.73,25.04],
                '海口':[110.35,20.02],
                '沈阳':[123.38,41.8],
                '长春':[125.35,43.88],
                '银川':[106.27,38.47],
                '南昌':[115.89,28.68],
                '西宁':[101.74,36.56],
                '呼和浩特':[111.65,40.82],
                '成都':[104.06,30.67],
                '西安':[108.95,34.27],
                '南京':[118.78,32.04],
                '贵阳':[106.71,26.57],
                '乌鲁木齐':[87.68,43.77],
                '杭州':[120.19,30.26],
                '济南':[117,36.65],
                '兰州':[103.73,36.03],
                '郑州':[113.65,34.76],
                '哈尔滨':[126.63,45.75],
                '石家庄':[114.48,38.03],
                '长沙':[113,28.21],
                '合肥':[117.27,31.86],
                '武汉':[114.31,30.52],
            }
        }
    },

    methods: {
        convertData: function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = this.geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        },
        draw: function(){
            const {$echarts, data1, geoCoordMap} = this

            myChart = $echarts.init(document.getElementById("main11"))

            let option = {
                title: {
                    // text: '全国各省兵力',
                    left: 'center'
                },
                tooltip : {
                    trigger: 'item'
                },
                bmap: {
                    center: [104.114129, 37.550339],
                    zoom: 5,
                    roam: true,
                    mapStyle: {
                        styleJson: [{
                            'featureType': 'water',
                            'elementType': 'all',
                            'stylers': {
                                'color': '#d1d1d1'
                            }
                        }, {
                            'featureType': 'land',
                            'elementType': 'all',
                            'stylers': {
                                'color': '#f3f3f3'
                            }
                        }, {
                            'featureType': 'railway',
                            'elementType': 'all',
                            'stylers': {
                                'visibility': 'off'
                            }
                        }, {
                            'featureType': 'highway',
                            'elementType': 'all',
                            'stylers': {
                                'color': '#fdfdfd'
                            }
                        }, {
                            'featureType': 'highway',
                            'elementType': 'labels',
                            'stylers': {
                                'visibility': 'off'
                            }
                        }, {
                            'featureType': 'arterial',
                            'elementType': 'geometry',
                            'stylers': {
                                'color': '#fefefe'
                            }
                        }, {
                            'featureType': 'arterial',
                            'elementType': 'geometry.fill',
                            'stylers': {
                                'color': '#fefefe'
                            }
                        }, {
                            'featureType': 'poi',
                            'elementType': 'all',
                            'stylers': {
                                'visibility': 'off'
                            }
                        }, {
                            'featureType': 'green',
                            'elementType': 'all',
                            'stylers': {
                                'visibility': 'off'
                            }
                        }, {
                            'featureType': 'subway',
                            'elementType': 'all',
                            'stylers': {
                                'visibility': 'off'
                            }
                        }, {
                            'featureType': 'manmade',
                            'elementType': 'all',
                            'stylers': {
                                'color': '#d1d1d1'
                            }
                        }, {
                            'featureType': 'local',
                            'elementType': 'all',
                            'stylers': {
                                'color': '#d1d1d1'
                            }
                        }, {
                            'featureType': 'arterial',
                            'elementType': 'labels',
                            'stylers': {
                                'visibility': 'off'
                            }
                        }, {
                            'featureType': 'boundary',
                            'elementType': 'all',
                            'stylers': {
                                'color': '#fefefe'
                            }
                        }, {
                            'featureType': 'building',
                            'elementType': 'all',
                            'stylers': {
                                'color': '#d1d1d1'
                            }
                        }, {
                            'featureType': 'label',
                            'elementType': 'labels.text.fill',
                            'stylers': {
                                'color': '#999999'
                            }
                        }]
                    }
                },
                series : [
                    {
                        // name: 'pm2.5',
                        type: 'scatter',
                        coordinateSystem: 'bmap',
                        data: this.convertData(data1),
                        symbolSize: function (val) {
                            return val[2];
                        },
                        encode: {
                            value: 2
                        },
                        label: {
                            formatter: '{b}',
                            position: 'right',
                            show: false
                        },
                        itemStyle: {
                            color: 'rgba(255, 0,0,1)'
                        },
                        emphasis: {
                            label: {
                                show: true
                            }
                        }
                    }
                    ,
                    {
                        name: 'Top 5',
                        type: 'effectScatter',
                        coordinateSystem: 'bmap',
                        data: this.convertData(data1.sort(function (a, b) {
                            return b.value - a.value;
                        }).slice(0, 6)),
                        symbolSize: function (val) {
                            return val[2];
                        },
                        encode: {
                            value: 2
                        },
                        showEffectOn: 'render',
                        rippleEffect: {
                            brushType: 'stroke'
                        },
                        hoverAnimation: true,
                        label: {
                            formatter: '{b}',
                            position: 'right',
                            show: true
                        },
                        itemStyle: {
                            color: 'rgba(255, 0, 0, 1)',
                            shadowBlur: 10,
                            shadowColor: '#333'
                        },
                        zlevel: 1
                    }
                ]
            };
            
            myChart.setOption(option)
            const roam = false
            if(this.width <= 470) {
                option.bmap.roam = roam
                myChart.setOption(option, false)
            }
        }
    },

    mounted: function() {
        let loadBmap = new Promise((resolve, reject) => {
            if (window.Bmap) return resolve(window.Bmap);

            window.onBMapCallback = function() {
                window.onBMapCallback = undefined;
                resolve(BMap);
            }
            
            const s = document.createElement('script');
            s.type = 'text/javascript';
            s.src = 'http://api.map.baidu.com/api?v=3.0&ak=47YePekvL1id2GcOHHNuG29RV1mrsDQF&callback=onBMapCallback';
            s.onerror = reject;
            document.body.appendChild(s);
        })
        loadBmap.then(() => {
            this.draw()
        })
    },
}
</script>

<style scoped>
#main11 {
    width: 100%;
    height: 100%;
}
</style>