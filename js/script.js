Highcharts.chart('container1', {

    chart: {
        type: 'line',
        backgroundColor: '#f0fff4'  // 設定背景顏色
    },

    title: {
        text: '台灣各主要城市平均氣溫',
        align: 'left'
    },

    subtitle: {
        text: 'By 盧柏安. Source: <a href="https://www.cwa.gov.tw/V8/C/" target="_blank">交通部中央氣象署</a>.',
        align: 'left'
    },

    yAxis: {
        title: {
            text: '平均溫度'
        }
    },

    xAxis: {
        title: {
            text: '月份'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 1
        }
    },

    series: [{
        name: '臺北',
        data: [
            16.4,
            16.9,
            18.8,
            22.3,
            25.6,
            28.2,
            29.9,
            29.5,
            27.7,
            24.6,
            21.9,
            18.2,
        ]
    }, {
        name: '臺中',
        data: [
            17.0,
            17.7,
            20.1,
            23.5,
            26.4,
            28.1,
            28.9,
            28.4,
            27.8,
            25.5,
            22.6,
            18.7,
        ]
    }, {
        name: '新竹',
        data: [
            15.7,
            16.0,
            18.0,
            21.9,
            25.2,
            27.9,
            29.3,
            28.9,
            27.3,
            24.4,
            21.5,
            17.7,
        ]
    },{
        name: '高雄',
        data: [
            19.7,
            20.7,
            23.0,
            25.7,
            27.8,
            28.9,
            29.4,
            28.9,
            28.5,
            26.9,
            24.5,
            21.2,
        ]
    },],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});

Highcharts.chart('container2', {
    
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
        type: 'line',
        backgroundColor: '#f0fff4' 
    },
    title: {
        text: '臺北主要天氣型態',
        align: 'center',
        verticalAlign: 'middle',
        y: 60,
        style: {
            fontSize: '1.1em'
        }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%'],
            size: '150%'
        }
    },
    series: [{
        type: 'pie',
        name: '臺北主要天氣型態',
        innerSize: '50%',
        data: [
            ['晴朗或多雲', 55],
            ['降雨', 15],
            ['陰天', 30],
        ]
    }]
});

Highcharts.chart('container3', {
    
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
        type: 'line',
        backgroundColor: '#f0fff4' 
    },
    title: {
        text: '臺中主要天氣型態',
        align: 'center',
        verticalAlign: 'middle',
        y: 60,
        style: {
            fontSize: '1.1em'
        }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%'],
            size: '150%'
        }
    },
    series: [{
        type: 'pie',
        name: '臺中主要天氣型態',
        innerSize: '50%',
        data: [
            ['晴朗或多雲', 58],
            ['降雨', 20],
            ['陰天', 22],
        ]
    }]
});

Highcharts.chart('container4', {
    
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
        type: 'line',
        backgroundColor: '#f0fff4' 
    },
    title: {
        text: '高雄主要天氣型態',
        align: 'center',
        verticalAlign: 'middle',
        y: 60,
        style: {
            fontSize: '1.1em'
        }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%'],
            size: '150%'
        }
    },
    series: [{
        type: 'pie',
        name: '高雄主要天氣型態',
        innerSize: '50%',
        data: [
            ['晴朗或多雲', 65],
            ['降雨', 15],
            ['陰天', 20],
        ]
    }]
});