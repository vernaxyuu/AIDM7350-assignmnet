$(window).load(function(){$(".loading").fadeOut()})  
$(function () {
    echarts_1()
    echarts_2()
    function echarts_1() {
        var myChart = echarts.init(document.getElementById('echart1'));
        option = {
            title: {
                text: 'Prevalence of autism spectrum disorders in the United States',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 16,
                    color: '#F1F1F3'
                },
                left: '6%'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#57617B'
                    }
                }
            },
            legend: {
                icon: 'rect',
                itemWidth: 14,
                itemHeight: 5,
                itemGap: 13,
                data: ['Prevalence rate/%'],
                right: '4%',
                textStyle: {
                    fontSize: 12,
                    color: '#F1F1F3'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLine: {
                    lineStyle: {
                        color: '#57617B'
                    }
                },
                data: ['2004', '2006', '2008', '2010', '2012', '2014', '2016', '2018', '2020', '2022']
            }],
            yAxis: [{
                type: 'value',
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#57617B'
                    }
                },
                axisLabel: {
                    margin: 10,
                    textStyle: {
                        fontSize: 14
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255, 68, 68, 0)'
                    }
                }
            }],
            series: [{
                name: 'Prevalence rate/%',
                type: 'line',
                smooth: true,
                lineStyle: {
                    
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(255, 68, 68)'
                        }, {
                            offset: 1.0,
                            color: 'rgba(137, 189, 27)'
                        }], false),
                        width: 1
                        
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(255, 68, 68)'
                        }, {
                            offset: 1.0,
                            color: 'rgba(137, 189, 27, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgb(137,189,27)'
                    }
                },
                data: [0.60,0.67,0.80,0.90,1.10,1.40,1.40,1.70,1.90,2.30]
            },]
        };
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

        function echarts_2() {
            var myChart = echarts.init(document.getElementById('echart2'));
            option = {
                "grid": {
                    "left": "6%",
                    "top": "10%",
                    "right": "3%",
                    "bottom": "15%"
                },
                "legend": {
                    "data": [
                        "Attention deficit hyperactivity disorder",
                        "Anxiety disorder",
                        "Oppositional defiant disorder",
                        "Depressive disorder",
                        "Tic disorder"
                    ],
                    "top": "92%",
                    "icon": "circle",
                    "textStyle": {
                        "color": "#0DCAD2"
                    }
                },
                "color": [
                    "#534EE1",
                    "#ECD64F",
                    "#00E4F0",
                    "#44D16D",
                    "#124E91",
                    "#BDC414",
                    "#C8CCA5"
                ],
                "tooltip": {
                    "position": "top",
                },
                "xAxis": {
                    "type": "category",
                    "data": [
                        "Attention deficit hyperactivity disorder",
                        "Anxiety disorder",
                        "Oppositional defiant disorder",
                        "Depressive disorder",
                        "Tic disorder"
                    ],
                    "axisLabel": {
                        "show": false,
                        "color": "#999999",
                        "fontSize": 16
                    },
                    "axisTick": {
                        "show": false
                    },
                    "axisLine": {
                        "show": false
                    },
                    "splitLine": {
                        "show": false
                    }
                },
                "yAxis": {
                    "type": "value",
                    "axisLabel": {
                        "show": false,
                        "color": "#999999",
                        "fontSize": 16
                    },
                    "axisTick": {
                        "show": false
                    },
                    "axisLine": {
                        "show": false
                    },
                    "splitLine": {
                        "show": false
                    }
                },
                "series": [{
                        "name": "Attention deficit hyperactivity disorder",
                        "data": [
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0
                        ],
                        "stack": "a",
                        "type": "bar"
                    },
                    {
                        "name": "Anxiety disorder",
                        "data": [
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0
                        ],
                        "stack": "a",
                        "type": "bar"
                    },
                    {
                        "name": "Oppositional defiant disorder",
                        "data": [
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0
                        ],
                        "stack": "a",
                        "type": "bar"
                    },
                    {
                        "name": "Depressive disorder",
                        "data": [
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0
                        ],
                        "stack": "a",
                        "type": "bar"
                    },
                    {
                        "name": "Tic disorder",
                        "data": [
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0
                        ],
                        "stack": "a",
                        "type": "bar"
                    },
                    {
                        "type": "pictorialBar",
                        "data": [{
                                "name": "",
                                "value": 6.4,
                                "label": {
                                    "show": true,
                                    "position": "top",
                                    formatter: function(params) {
                                        var index = params.dataIndex;
                                        var str = "{c|" + params.value + "%}";
                                        return str;
                                    },
                                    "rich": {
                                        "a": {
                                            "fontSize": 18,
                                            "color": "#534EE1",
                                            "align": "center",
                                            "height": 40
                                        },
                                        "c": {
                                            "fontSize": 18,
                                            "color": "#fff",
                                            "padding": [
                                                -2,
                                                0,
                                                2,
                                                0
                                            ],
                                            "align": "center",
                                            "verticalAlign": "bottom",
                                            "height": 50,
                                            "lineHeight": 40,
                                            "width": 100
                                        }
                                    }
                                },
                                "itemStyle": {
                                    "normal": {
                                        "color": {
                                            "type": "linear",
                                            "x": 0,
                                            "y": 0,
                                            "x2": 0,
                                            "y2": 1,
                                            "colorStops": [{
                                                    "offset": 0,
                                                    "color": "rgba(83,78,225,1)"
                                                },
                                                {
                                                    "offset": 1,
                                                    "color": "rgba(83,78,225,0)"
                                                }
                                            ],
                                            "global": false
                                        }
                                    }
                                }
                            },
                            {
                                "name": "",
                                "value": 4.7,
                                "label": {
                                    "show": true,
                                    "position": "top",
                                     formatter: function(params) {
                                        var index = params.dataIndex;
                                        var str = "{c|" + params.value + "%}";
                                        return str;
                                    },
                                    "rich": {
                                        "a": {
                                            "fontSize": 18,
                                            "color": "#ECD64F",
                                            "align": "center",
                                            "height": 40
                                        },
                                        "c": {
                                            "fontSize": 18,
                                            "color": "#fff",
                                            "padding": [
                                                -4,
                                                0,
                                                8,
                                                0
                                            ],
                                            "align": "center",
                                            "verticalAlign": "bottom",
                                            "height": 45,
                                            "lineHeight": 40,
                                            "width": 100
                                        }
                                    }
                                },
                                "itemStyle": {
                                    "normal": {
                                        "color": {
                                            "type": "linear",
                                            "x": 0,
                                            "y": 0,
                                            "x2": 0,
                                            "y2": 1,
                                            "colorStops": [{
                                                    "offset": 0,
                                                    "color": "rgba(236,214,79,1)"
                                                },
                                                {
                                                    "offset": 1,
                                                    "color": "rgba(236,214,79,0)"
                                                }
                                            ],
                                            "global": false
                                        }
                                    }
                                }
                            },
                            {
                                "name": "",
                                "value": 3.6,
                                "label": {
                                    "show": true,
                                    "position": "top",
                                     formatter: function(params) {
                                        var index = params.dataIndex;
                                        var str = "{c|" + params.value + "%}";
                                        return str;
                                    },
                                    "rich": {
                                        "a": {
                                            "fontSize": 18,
                                            "color": "#00E4F0",
                                            "align": "center",
                                            "height": 40
                                        },
                                        "c": {
                                            "fontSize": 18,
                                            "color": "#fff",
                                            "padding": [
                                                -4,
                                                0,
                                                8,
                                                0
                                            ],
                                
                                            "align": "center",
                                            "verticalAlign": "bottom",
                                            "height": 45,
                                            "lineHeight": 40,
                                            "width": 100
                                        }
                                    }
                                },
                                "itemStyle": {
                                    "normal": {
                                        "color": {
                                            "type": "linear",
                                            "x": 0,
                                            "y": 0,
                                            "x2": 0,
                                            "y2": 1,
                                            "colorStops": [{
                                                    "offset": 0,
                                                    "color": "rgba(0,228,240,1)"
                                                },
                                                {
                                                    "offset": 1,
                                                    "color": "rgba(0,228,240,0)"
                                                }
                                            ],
                                            "global": false
                                        }
                                    }
                                }
                            },
                            {
                                "name": "",
                                "value": 3.0,
                                "label": {
                                    "show": true,
                                     formatter: function(params) {
                                        var index = params.dataIndex;
                                        var str = "{c|" + params.value + "%}";
                                        return str;
                                    },
                                    "position": "top",
                                    "rich": {
                                        "a": {
                                            "fontSize": 18,
                                            "color": "#44D16D",
                                            "align": "center",
                                            "height": 40
                                        },
                                        "c": {
                                            "fontSize": 18,
                                            "color": "#fff",
                                            "padding": [
                                                -4,
                                                0,
                                                8,
                                                0
                                            ],
                            
                                            "align": "center",
                                            "verticalAlign": "bottom",
                                            "height": 45,
                                            "lineHeight": 40,
                                            "width": 100
                                        }
                                    }
                                },
                                "itemStyle": {
                                    "normal": {
                                        "color": {
                                            "type": "linear",
                                            "x": 0,
                                            "y": 0,
                                            "x2": 0,
                                            "y2": 1,
                                            "colorStops": [{
                                                    "offset": 0,
                                                    "color": "rgba(68,209,109,1)"
                                                },
                                                {
                                                    "offset": 1,
                                                    "color": "rgba(68,209,109,0)"
                                                }
                                            ],
                                            "global": false
                                        }
                                    }
                                }
                            },
                            {
                                "name": "",
                                "value": 2.5,
                                "label": {
                                    "show": true,
                                    "position": "top",
                                     formatter: function(params) {
                                        var index = params.dataIndex;
                                        var str = "{c|" + params.value + "%}";
                                        return str;
                                    },
                                    "rich": {
                                        
                                        "c": {
                                            "fontSize": 18,
                                            "color": "#fff",
                                            "padding": [
                                                -4,
                                                0,
                                                8,
                                                0
                                            ],
                                            
                                            "align": "center",
                                            "verticalAlign": "bottom",
                                            "height": 45,
                                            "lineHeight": 40,
                                            "width": 100
                                        }
                                    }
                                },
                                "itemStyle": {
                                    "normal": {
                                        "color": {
                                            "type": "linear",
                                            "x": 0,
                                            "y": 0,
                                            "x2": 0,
                                            "y2": 1,
                                            "colorStops": [{
                                                    "offset": 0,
                                                    "color": "rgba(18,78,145,1)"
                                                },
                                                {
                                                    "offset": 1,
                                                    "color": "rgba(18,78,145,0)"
                                                }
                                            ],
                                            "global": false
                                        }
                                    }
                                }
                            },
            
                        ],
                        "stack": "a",
                        "symbol": "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z"
                    }
                ]
            };
            myChart.setOption(option);
            window.addEventListener("resize",function(){
                myChart.resize();
            });
        }

    })