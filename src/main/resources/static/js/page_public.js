$(function () {
    loadAttckMap()

    //safeProduct
    var colorList = ['#73DDFF', '#73ACFF', '#FDD56A', '#FDB36A', '#FD866A', '#9E87FF', '#58D5FF']

    echarts.init(document.getElementById("machineType")).setOption({

        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            icon: 'circle',
            right: '15',
            top: '5',
            bottom: '5',
            itemGap: 8,
            data: ['类型一', '类型二', '类型三', '类型四', '类型五'],
            textStyle: {
                color: '#fft'
            }
        },
        series: [{
            type: 'pie',
            center: ['30%', '50%'],
            radius: ['44%', '65%'],
            clockwise: true,
            avoidLabelOverlap: true,
            hoverOffset: 15,
            itemStyle: {
                normal: {
                    color: function (params) {
                        return colorList[params.dataIndex]
                    }
                }
            },
            label: {
                normal: {
                    show: false

                }
            },
            labelLine: {
                normal: {
                    show: false,

                    length: 20,
                    length2: 30,
                    lineStyle: {
                        width: 1
                    }
                }
            },
            data: [{
                'name': '类型一',
                'value': 5600
            }, {
                'name': '类型二',
                'value': 3600
            }, {
                'name': '类型三',
                'value': 1500
            }, {
                'name': '类型四',
                'value': 2000
            }, {
                'name': '类型五',
                'value': 899
            }],
        }]
    })

    //attackIpTop10
    echarts.init(document.getElementById("attackIpTop10")).setOption({
        tooltip: {},
        grid: {
            left: '1%',
            right: '4%',
            bottom: '6%',
            top: 30,
            padding: '0 0 10 0',
            containLabel: true,
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: true,//坐标轴两边留白
                data: ["191.168.19.99", "191.168.43.24", "191.168.19.39", "191.168.66.13", "191.168.10.19", "191.168.19.99", "191.168.19.99", "191.168.19.99", "191.168.66.99", "191.168.19.43"],
                axisLabel: { //坐标轴刻度标签的相关设置。
                    interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
                    rotate: "-20",
                    margin: 15,
                    textStyle: {
                        color: '#fafafa',
                        fontStyle: 'normal',
                        fontFamily: '微软雅黑',
                        fontSize: 12,
                    }
                },
                axisTick: {//坐标轴刻度相关设置。
                    show: false,
                },
                axisLine: {//坐标轴轴线相关设置
                    lineStyle: {
                        color: '#4c647c',
                        opacity: 0.2
                    }
                },
                splitLine: { //坐标轴在 grid 区域中的分隔线。
                    show: false,
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                splitNumber: 5,
                axisLabel: {
                    textStyle: {
                        color: '#fafafa',
                        fontStyle: 'normal',
                        fontFamily: '微软雅黑',
                        fontSize: 12,
                    }
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: ['#000'],
                        opacity: 0.06
                    }
                }

            }
        ],
        series: [
            {
                // name:seriesName1,
                type: 'bar',
                data: [300, 254, 236, 130, 129, 115, 77, 69, 49, 32],
                barWidth: 10,
                barGap: 0,//柱间距离
                itemStyle: {//图形样式
                    normal: {
                        barBorderRadius: 20,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 1, color: 'rgb(29, 141, 211)'
                        }, {
                            offset: 0, color: 'rgb(56, 206, 191)'
                        }], false),
                    },
                },
            }
        ]
    })


    //告警趋势
    var myChart = echarts.init(document.getElementById("chart04")); // myChart.clear();
    myChart.setOption({
        "title": {
            "text": "",
            "textStyle": {
                "fontWeight": "normal",
                "fontSize": 11,
                "color": "#9cc8f6"
            },
            "left": "6%"
        },
        "tooltip": {
            "trigger": "axis",
            "axisPointer": {
                "lineStyle": {
                    "color": "#0c9cf0"
                }
            }
        },
        "grid": {
            "left": "0%",
            "right": "-6%",
            "bottom": 10,
            "top": "25",
            "containLabel": true
        },
        "xAxis": [{
            "type": "category",
            "boundaryGap": false,
            "axisLine": {
                "lineStyle": {
                    "color": "#0c9cf0"
                }
            },
            "axisLabel": {
                "color": "#9cc8f6"
            },
            "data": ["2019-09-15 13:46:06", "2019-09-15 16:10:06", "2019-09-15 18:34:06", "2019-09-15 20:58:06", "2019-09-15 23:22:06", "2019-09-16 01:46:06", "2019-09-16 04:10:06", "2019-09-16 06:34:06", "2019-09-16 08:58:06", "2019-09-16 11:22:06", "2019-09-16 13:46:06"]
        }],
        "yAxis": [{
            "type": "value",
            "name": "",
            "minInterval": 1,
            "axisTick": {
                "lineStyle": {
                    "color": "rgba(12, 156, 240, 0.2)"
                }
            },
            "axisLine": {
                "lineStyle": {
                    "color": "#0c9cf0"
                }
            },
            "axisLabel": {
                "margin": 10,
                "color": "#9cc8f6",
                "textStyle": {
                    "fontSize": 10
                },
                // "formatter":htool.nFormatter
            },
            "splitLine": {
                "lineStyle": {
                    "colo": "rgba(12, 156, 240, 0.2)"
                }
            }
        }],
        "color": ["#49dff0", "#034079", "#6f81da", "#00ffb4"],
        "series": [{
            "name": "告警量",
            "type": "line",
            "smooth": "true",
            "symbol": "circle",
            "symbolSize": 8,
            "showSymbol": true,
            "lineStyle": {
                "normal": {
                    "width": 2
                }
            },
            "areaStyle": {
                "normal": {
                    "shadowColor": "rgba(0, 0, 0, 1)",
                    "shadowBlur": 10
                }
            },
            "itemStyle": {
                "normal": {
                    "borderColor": "rgba(0, 136, 212, 0.2)",
                    "borderWidth": 12
                }
            },
            "data": [900, 846, 1000, 0, 0, 100, 444, 359, 694, 1000, 0]
        }],
        // "legend": {
        //   "data": ["安全预警", "攻击入侵", "恶意代码", "信息危害", "信息刺探"],
        //   "textStyle": {
        //     "color": "#9cc8f6"
        //   },
        //   left: "right",
        //   itemWidth: 10
        // }
    });

    //存储空间利用率TOP5   spaceTop5

    echarts.init(document.getElementById("spaceTop5")).setOption({
        "grid": {"left": "5%", "bottom": 0, "top": 15, "containLabel": true},
        "tooltip": {},
        "xAxis": [{
            "type": "value",
            "minInterval": 1,
            "axisTick": {"show": false},
            "axisLabel": {"show": false, "interval": 0, "textStyle": {"color": "#9cc8f6"}},
            "axisLine": {"show": false, "lineStyle": {"color": "#0c9cf0"}},
            "splitLine": {"show": false, "lineStyle": {"type": "dashed", "color": "rgba(12, 156, 240, 0.3)"}}
        }],
        "yAxis": [{
            "type": "category",
            "triggerEvent": true,
            "axisLabel": {"interval": 0, "textStyle": {"fontSize": 11, "color": "#9cc8f6"}},
            "axisTick": {"show": false},
            "axisLine": {"show": false, "lineStyle": {"color": "#0c9cf0"}},
            "splitLine": {"show": false, "lineStyle": {"type": "dashed", "color": "rgba(12, 156, 240, 0.3)"}},
            "data": ["192.168.19.58", "192.168.56.44", "192.168.19.50", "192.168.56.58", "192.168.19.110"]
        }],
        "series": [{
            "type": "bar",
            "barWidth": 9,
            "barMinHeight": 10,
            "itemStyle": {
                "normal": {
                    "show": true,
                    "color": {
                        "type": "linear",
                        "colorStops": [{"offset": 1, "color": "rgba(20, 181, 255,0.5)"}, {
                            "offset": 0,
                            "color": "rgba(0, 181, 255,0.0)"
                        }]
                    },
                    "barBorderRadius": [0, 0, 0, 0],
                    "borderWidth": 1,
                    "borderColor": "rgba(0, 181, 255,1)"
                }
            },
            "label": {"normal": {"show": true, "position": "right", "textStyle": {"color": "#feb61c", "fontSize": 10}}},
            "barGap": "0%",
            "barCategoryGap": "20%",
            "barMaxWidth": "16px",
            "data": [114, 286, 295, 302, 328],
            "name": "通报次数"
        }]
    });
})

//表格数据填充
function initDataTable(){
    let data = {};
    $('#mytab').bootstrapTable({
        url: "",//数据源
        dataField: "rows",//服务端返回数据键值 就是说记录放的键值是rows，分页时使用总记录数的键值为total
        height: function tableHeight() {
            return $(window).height() - 50;
        },//高度调整
        search: true,//是否搜索
        pagination: true,//是否分页
        pageSize: 20,//单页记录数
        pageList: [5, 10, 20, 50],//分页步进值
        sidePagination: "server",//服务端分页
        contentType: "application/x-www-form-urlencoded",//请求数据内容格式 默认是 application/json 自己根据格式自行服务端处理
        dataType: "json",//期待返回数据类型
        method: "post",//请求方式
        searchAlign: "left",//查询框对齐方式
        queryParamsType: "limit",//查询参数组织方式
        queryParams: function getParams(params) {
            //params obj
            params.other = "otherInfo";
            return params;
        },
        searchOnEnterKey: false,//回车搜索
        showRefresh: true,//刷新按钮
        showColumns: true,//列选择按钮
        buttonsAlign: "left",//按钮对齐方式
        toolbar: "#toolbar",//指定工具栏
        toolbarAlign: "right",//工具栏对齐方式
        columns: [
            {
                title: "全选",
                field: "select",
                checkbox: true,
                width: 20,//宽度
                align: "center",//水平
                valign: "middle"//垂直
            },
            {
                title: "ID",//标题
                field: "id",//键名
                sortable: true,//是否可排序
                order: "desc"//默认排序方式
            },
            {
                field: "name",
                title: "NAME",
                sortable: true,
                titleTooltip: "this is name"
            },
            {
                field: "age",
                title: "AGE",
                sortable: true,
            },
            {
                field: "info",
                title: "INFO[using-formatter]",
                formatter: 'infoFormatter',//对本列数据做格式化
            }
        ],
        onClickRow: function(row, $element) {
            //$element是当前tr的jquery对象
            $element.css("background-color", "green");
        },//单击row事件
        locale: "zh-CN", //中文支持
        detailView: false, //是否显示详情折叠
        detailFormatter: function(index, row, element) {
            var html = '';
            $.each(row, function(key, val){
                html += "<p>" + key + ":" + val +  "</p>"
            });
            return html;
        }
    });
}

//攻击地图
function loadAttckMap() {


    data = [{
        "id": 0,
        "startTime": 0,
        "endTime": 0,
        "durationTime": 0,
        "srcArea": null,
        "srcIp": "110.17.71.141",
        "srcName": "包头",
        "srcLocX": "109.822205",
        "srcLocY": "40.652206",
        "srcCountryCode": "CN",
        "desIp": "113.117.15.111",
        "destName": "广州",
        "destLocX": "113.25",
        "destLocY": "23.1167",
        "desCountryCode": null,
        "port": null,
        "attackTimes": 7000,
        "attackType": "/spy",
        "attackTypeName": "信息刺探",
        "createTime": 0,
        "standby1": 0,
        "standby2": "/all",
        "standby3": null,
        "createTimeStr": null
    }, {
        "id": 0,
        "startTime": 0,
        "endTime": 0,
        "durationTime": 0,
        "srcArea": null,
        "srcIp": "113.117.15.111",
        "srcName": "广州",
        "srcLocX": "113.25",
        "srcLocY": "23.1167",
        "srcCountryCode": "CN",
        "desIp": "123.175.157.15",
        "destName": "西安",
        "destLocX": "108.92859",
        "destLocY": "34.2583",
        "desCountryCode": null,
        "port": null,
        "attackTimes": 7,
        "attackType": "/spy",
        "attackTypeName": "信息刺探",
        "createTime": 0,
        "standby1": 0,
        "standby2": "/all",
        "standby3": null,
        "createTimeStr": null
    }, {
        "id": 0,
        "startTime": 0,
        "endTime": 0,
        "durationTime": 0,
        "srcArea": null,
        "srcIp": "123.175.157.15",
        "srcName": "西安",
        "srcLocX": "108.92859",
        "srcLocY": "34.2583",
        "srcCountryCode": "CN",
        "desIp": "112.117.15.111",
        "destName": "昆明",
        "destLocX": "102.71829",
        "destLocY": "25.038895",
        "desCountryCode": null,
        "port": null,
        "attackTimes": 7,
        "attackType": "/malware",
        "attackTypeName": "恶意代码",
        "createTime": 0,
        "standby1": 0,
        "standby2": "/all",
        "standby3": null,
        "createTimeStr": null
    }, {
        "id": 0,
        "startTime": 0,
        "endTime": 0,
        "durationTime": 0,
        "srcArea": null,
        "srcIp": "110.17.71.141",
        "srcName": "包头",
        "srcLocX": "109.822205",
        "srcLocY": "40.652206",
        "srcCountryCode": "CN",
        "desIp": "123.175.157.15",
        "destName": "西安",
        "destLocX": "108.92859",
        "destLocY": "34.2583",
        "desCountryCode": null,
        "port": null,
        "attackTimes": 7,
        "attackType": "/spy",
        "attackTypeName": "信息刺探",
        "createTime": 0,
        "standby1": 0,
        "standby2": "/all",
        "standby3": null,
        "createTimeStr": null
    }, {
        "id": 0,
        "startTime": 0,
        "endTime": 0,
        "durationTime": 0,
        "srcArea": null,
        "srcIp": "121.6.63.63",
        "srcName": "新加坡",
        "srcLocX": "103.85651",
        "srcLocY": "1.2855072",
        "srcCountryCode": "SG",
        "desIp": "111.197.221.3",
        "destName": "北京",
        "destLocX": "116.388306",
        "destLocY": "39.928894",
        "desCountryCode": null,
        "port": null,
        "attackTimes": 6,
        "attackType": "/malware",
        "attackTypeName": "恶意代码",
        "createTime": 0,
        "standby1": 0,
        "standby2": "/all",
        "standby3": null,
        "createTimeStr": null
    }, {
        "id": 0,
        "startTime": 0,
        "endTime": 0,
        "durationTime": 0,
        "srcArea": null,
        "srcIp": "158.38.122.122",
        "srcName": "挪威",
        "srcLocX": "10.416702",
        "srcLocY": "63.416702",
        "srcCountryCode": "NO",
        "desIp": "115.231.54.13",
        "destName": "宁波",
        "destLocX": "121.5495",
        "destLocY": "29.878204",
        "desCountryCode": null,
        "port": null,
        "attackTimes": 6,
        "attackType": "/malware",
        "attackTypeName": "恶意代码",
        "createTime": 0,
        "standby1": 0,
        "standby2": "/all",
        "standby3": null,
        "createTimeStr": null
    }, {
        "id": 0,
        "startTime": 0,
        "endTime": 0,
        "durationTime": 0,
        "srcArea": null,
        "srcIp": "110.17.71.141",
        "srcName": "包头",
        "srcLocX": "109.822205",
        "srcLocY": "40.652206",
        "srcCountryCode": "CN",
        "desIp": "123.175.157.15",
        "destName": "西安",
        "destLocX": "108.92859",
        "destLocY": "34.2583",
        "desCountryCode": null,
        "port": null,
        "attackTimes": 6,
        "attackType": "/spy",
        "attackTypeName": "信息刺探",
        "createTime": 0,
        "standby1": 0,
        "standby2": "/all",
        "standby3": null,
        "createTimeStr": null
    }, {
        "id": 0,
        "startTime": 0,
        "endTime": 0,
        "durationTime": 0,
        "srcArea": null,
        "srcIp": "1.197.153.49",
        "srcName": "郑州",
        "srcLocX": "113.5325",
        "srcLocY": "34.683594",
        "srcCountryCode": "CN",
        "desIp": "111.197.221.3",
        "destName": "北京",
        "destLocX": "116.388306",
        "destLocY": "39.928894",
        "desCountryCode": null,
        "port": null,
        "attackTimes": 6,
        "attackType": "/spy",
        "attackTypeName": "信息刺探",
        "createTime": 0,
        "standby1": 0,
        "standby2": "/all",
        "standby3": null,
        "createTimeStr": null
    }, {
        "id": 0,
        "startTime": 0,
        "endTime": 0,
        "durationTime": 0,
        "srcArea": null,
        "srcIp": "123.175.157.175",
        "srcName": "西安",
        "srcLocX": "108.92859",
        "srcLocY": "34.2583",
        "srcCountryCode": "CN",
        "desIp": "192.168.56.19",
        "destName": "北京",
        "destLocX": "116.388306",
        "destLocY": "39.928894",
        "desCountryCode": null,
        "port": null,
        "attackTimes": 6,
        "attackType": "/spy",
        "attackTypeName": "信息刺探",
        "createTime": 0,
        "standby1": 0,
        "standby2": "/all",
        "standby3": null,
        "createTimeStr": null
    }, {
        "id": 0,
        "startTime": 0,
        "endTime": 0,
        "durationTime": 0,
        "srcArea": null,
        "srcIp": "118.197.29.29",
        "srcName": "北京",
        "srcLocX": "116.388306",
        "srcLocY": "39.928894",
        "srcCountryCode": "CN",
        "desIp": "110.17.71.41",
        "destName": "包头",
        "destLocX": "109.822205",
        "destLocY": "40.652206",
        "desCountryCode": null,
        "port": null,
        "attackTimes": 6,
        "attackType": "/spy",
        "attackTypeName": "信息刺探",
        "createTime": 0,
        "standby1": 0,
        "standby2": "/all",
        "standby3": null,
        "createTimeStr": null
    }, {
        "id": 0,
        "startTime": 0,
        "endTime": 0,
        "durationTime": 0,
        "srcArea": null,
        "srcIp": "123.185.93.35",
        "srcName": "沈阳",
        "srcLocX": "123.4328",
        "srcLocY": "41.792206",
        "srcCountryCode": "CN",
        "desIp": "118.115.113.9",
        "destName": "成都",
        "destLocX": "104.06671",
        "destLocY": "30.666702",
        "desCountryCode": null,
        "port": null,
        "attackTimes": 6,
        "attackType": "/att",
        "attackTypeName": "攻击入侵",
        "createTime": 0,
        "standby1": 0,
        "standby2": "/all",
        "standby3": null,
        "createTimeStr": null
    }, {
        "id": 0,
        "startTime": 0,
        "endTime": 0,
        "durationTime": 0,
        "srcArea": null,
        "srcIp": "110.17.71.141",
        "srcName": "包头",
        "srcLocX": "109.822205",
        "srcLocY": "40.652206",
        "srcCountryCode": "CN",
        "desIp": "113.117.15.111",
        "destName": "广州",
        "destLocX": "113.25",
        "destLocY": "23.1167",
        "desCountryCode": null,
        "port": null,
        "attackTimes": 6,
        "attackType": "/spy",
        "attackTypeName": "信息刺探",
        "createTime": 0,
        "standby1": 0,
        "standby2": "/all",
        "standby3": null,
        "createTimeStr": null
    }, {
        "id": 0,
        "startTime": 0,
        "endTime": 0,
        "durationTime": 0,
        "srcArea": null,
        "srcIp": "112.115.104.104",
        "srcName": "昆明",
        "srcLocX": "102.71829",
        "srcLocY": "25.038895",
        "srcCountryCode": "CN",
        "desIp": "125.38.92.123",
        "destName": "天津",
        "destLocX": "117.1767",
        "destLocY": "39.142197",
        "desCountryCode": null,
        "port": null,
        "attackTimes": 6,
        "attackType": "/att",
        "attackTypeName": "攻击入侵",
        "createTime": 0,
        "standby1": 0,
        "standby2": "/all",
        "standby3": null,
        "createTimeStr": null
    }, {
        "id": 0,
        "startTime": 0,
        "endTime": 0,
        "durationTime": 0,
        "srcArea": null,
        "srcIp": "113.129.47.226",
        "srcName": "济南",
        "srcLocX": "116.99719",
        "srcLocY": "36.668304",
        "srcCountryCode": "CN",
        "desIp": "115.231.54.13",
        "destName": "宁波",
        "destLocX": "121.5495",
        "destLocY": "29.878204",
        "desCountryCode": null,
        "port": null,
        "attackTimes": 6,
        "attackType": "/spy",
        "attackTypeName": "信息刺探",
        "createTime": 0,
        "standby1": 0,
        "standby2": "/all",
        "standby3": null,
        "createTimeStr": null
    }, {
        "id": 0,
        "startTime": 0,
        "endTime": 0,
        "durationTime": 0,
        "srcArea": null,
        "srcIp": "112.123.54.22",
        "srcName": "合肥",
        "srcLocX": "117.28079",
        "srcLocY": "31.863907",
        "srcCountryCode": "CN",
        "desIp": "112.109.181.133",
        "destName": "漳州",
        "destLocX": "117.65561",
        "destLocY": "24.513306",
        "desCountryCode": null,
        "port": null,
        "attackTimes": 6,
        "attackType": "/att",
        "attackTypeName": "攻击入侵",
        "createTime": 0,
        "standby1": 0,
        "standby2": "/all",
        "standby3": null,
        "createTimeStr": null
    }, {
        "id": 0,
        "startTime": 0,
        "endTime": 0,
        "durationTime": 0,
        "srcArea": null,
        "srcIp": "123.146.174.133",
        "srcName": "重庆",
        "srcLocX": "106.552795",
        "srcLocY": "29.562805",
        "srcCountryCode": "CN",
        "desIp": "123.166.156.156",
        "destName": "哈尔滨",
        "destLocX": "126.649994",
        "destLocY": "45.75",
        "desCountryCode": null,
        "port": null,
        "attackTimes": 6,
        "attackType": "/spy",
        "attackTypeName": "信息刺探",
        "createTime": 0,
        "standby1": 0,
        "standby2": "/all",
        "standby3": null,
        "createTimeStr": null
    }, {
        "id": 0,
        "startTime": 0,
        "endTime": 0,
        "durationTime": 0,
        "srcArea": null,
        "srcIp": "110.17.71.141",
        "srcName": "包头",
        "srcLocX": "109.822205",
        "srcLocY": "40.652206",
        "srcCountryCode": "CN",
        "desIp": "118.197.145.110",
        "destName": "北京",
        "destLocX": "116.388306",
        "destLocY": "39.928894",
        "desCountryCode": null,
        "port": null,
        "attackTimes": 6,
        "attackType": "/malware",
        "attackTypeName": "恶意代码",
        "createTime": 0,
        "standby1": 0,
        "standby2": "/all",
        "standby3": null,
        "createTimeStr": null
    }, {
        "id": 0,
        "startTime": 0,
        "endTime": 0,
        "durationTime": 0,
        "srcArea": null,
        "srcIp": "123.175.157.15",
        "srcName": "西安",
        "srcLocX": "108.92859",
        "srcLocY": "34.2583",
        "srcCountryCode": "CN",
        "desIp": "112.117.15.111",
        "destName": "昆明",
        "destLocX": "102.71829",
        "destLocY": "25.038895",
        "desCountryCode": null,
        "port": null,
        "attackTimes": 6,
        "attackType": "/malware",
        "attackTypeName": "恶意代码",
        "createTime": 0,
        "standby1": 0,
        "standby2": "/all",
        "standby3": null,
        "createTimeStr": null
    }, {
        "id": 0,
        "startTime": 0,
        "endTime": 0,
        "durationTime": 0,
        "srcArea": null,
        "srcIp": "113.117.15.111",
        "srcName": "广州",
        "srcLocX": "113.25",
        "srcLocY": "23.1167",
        "srcCountryCode": "CN",
        "desIp": "123.175.157.15",
        "destName": "西安",
        "destLocX": "108.92859",
        "destLocY": "34.2583",
        "desCountryCode": null,
        "port": null,
        "attackTimes": 6,
        "attackType": "/spy",
        "attackTypeName": "信息刺探",
        "createTime": 0,
        "standby1": 0,
        "standby2": "/all",
        "standby3": null,
        "createTimeStr": null
    }, {
        "id": 0,
        "startTime": 0,
        "endTime": 0,
        "durationTime": 0,
        "srcArea": null,
        "srcIp": "141.38.108.76",
        "srcName": "德国",
        "srcLocX": "9.490997",
        "srcLocY": "51.2993",
        "srcCountryCode": "DE",
        "desIp": "192.168.56.19",
        "destName": "北京",
        "destLocX": "116.388306",
        "destLocY": "39.928894",
        "desCountryCode": null,
        "port": null,
        "attackTimes": 6,
        "attackType": "/spy",
        "attackTypeName": "信息刺探",
        "createTime": 0,
        "standby1": 0,
        "standby2": "/all",
        "standby3": null,
        "createTimeStr": null
    }, {
        "id": 0,
        "startTime": 0,
        "endTime": 0,
        "durationTime": 0,
        "srcArea": null,
        "srcIp": "112.115.104.104",
        "srcName": "昆明",
        "srcLocX": "102.71829",
        "srcLocY": "25.038895",
        "srcCountryCode": "CN",
        "desIp": "125.38.92.123",
        "destName": "天津",
        "destLocX": "117.1767",
        "destLocY": "39.142197",
        "desCountryCode": null,
        "port": null,
        "attackTimes": 5,
        "attackType": "/att",
        "attackTypeName": "攻击入侵",
        "createTime": 0,
        "standby1": 0,
        "standby2": "/all",
        "standby3": null,
        "createTimeStr": null
    }, {
        "id": 0,
        "startTime": 0,
        "endTime": 0,
        "durationTime": 0,
        "srcArea": null,
        "srcIp": "123.175.157.175",
        "srcName": "西安",
        "srcLocX": "108.92859",
        "srcLocY": "34.2583",
        "srcCountryCode": "CN",
        "desIp": "192.168.56.19",
        "destName": "北京",
        "destLocX": "116.388306",
        "destLocY": "39.928894",
        "desCountryCode": null,
        "port": null,
        "attackTimes": 5,
        "attackType": "/spy",
        "attackTypeName": "信息刺探",
        "createTime": 0,
        "standby1": 0,
        "standby2": "/all",
        "standby3": null,
        "createTimeStr": null
    }, {
        "id": 0,
        "startTime": 0,
        "endTime": 0,
        "durationTime": 0,
        "srcArea": null,
        "srcIp": "141.38.108.76",
        "srcName": "德国",
        "srcLocX": "9.490997",
        "srcLocY": "51.2993",
        "srcCountryCode": "DE",
        "desIp": "192.168.56.19",
        "destName": "北京",
        "destLocX": "116.388306",
        "destLocY": "39.928894",
        "desCountryCode": null,
        "port": null,
        "attackTimes": 5,
        "attackType": "/spy",
        "attackTypeName": "信息刺探",
        "createTime": 0,
        "standby1": 0,
        "standby2": "/all",
        "standby3": null,
        "createTimeStr": null
    }, {
        "id": 0,
        "startTime": 0,
        "endTime": 0,
        "durationTime": 0,
        "srcArea": null,
        "srcIp": "113.117.15.111",
        "srcName": "广州",
        "srcLocX": "113.25",
        "srcLocY": "23.1167",
        "srcCountryCode": "CN",
        "desIp": "123.175.157.15",
        "destName": "西安",
        "destLocX": "108.92859",
        "destLocY": "34.2583",
        "desCountryCode": null,
        "port": null,
        "attackTimes": 5,
        "attackType": "/spy",
        "attackTypeName": "信息刺探",
        "createTime": 0,
        "standby1": 0,
        "standby2": "/all",
        "standby3": null,
        "createTimeStr": null
    }, {
        "id": 0,
        "startTime": 0,
        "endTime": 0,
        "durationTime": 0,
        "srcArea": null,
        "srcIp": "11.19.51.10",
        "srcName": "美国",
        "srcLocX": "-97.822",
        "srcLocY": "37.751007",
        "srcCountryCode": "US",
        "desIp": "115.231.54.13",
        "destName": "宁波",
        "destLocX": "121.5495",
        "destLocY": "29.878204",
        "desCountryCode": null,
        "port": null,
        "attackTimes": 5,
        "attackType": "/spy",
        "attackTypeName": "信息刺探",
        "createTime": 0,
        "standby1": 0,
        "standby2": "/all",
        "standby3": null,
        "createTimeStr": null
    }, {
        "id": 0,
        "startTime": 0,
        "endTime": 0,
        "durationTime": 0,
        "srcArea": null,
        "srcIp": "1.197.153.49",
        "srcName": "郑州",
        "srcLocX": "113.5325",
        "srcLocY": "34.683594",
        "srcCountryCode": "CN",
        "desIp": "111.197.221.3",
        "destName": "北京",
        "destLocX": "116.388306",
        "destLocY": "39.928894",
        "desCountryCode": null,
        "port": null,
        "attackTimes": 5,
        "attackType": "/spy",
        "attackTypeName": "信息刺探",
        "createTime": 0,
        "standby1": 0,
        "standby2": "/all",
        "standby3": null,
        "createTimeStr": null
    }, {
        "id": 0,
        "startTime": 0,
        "endTime": 0,
        "durationTime": 0,
        "srcArea": null,
        "srcIp": "113.129.47.226",
        "srcName": "济南",
        "srcLocX": "116.99719",
        "srcLocY": "36.668304",
        "srcCountryCode": "CN",
        "desIp": "115.231.54.13",
        "destName": "宁波",
        "destLocX": "121.5495",
        "destLocY": "29.878204",
        "desCountryCode": null,
        "port": null,
        "attackTimes": 5,
        "attackType": "/spy",
        "attackTypeName": "信息刺探",
        "createTime": 0,
        "standby1": 0,
        "standby2": "/all",
        "standby3": null,
        "createTimeStr": null
    }, {
        "id": 0,
        "startTime": 0,
        "endTime": 0,
        "durationTime": 0,
        "srcArea": null,
        "srcIp": "110.17.71.141",
        "srcName": "包头",
        "srcLocX": "109.822205",
        "srcLocY": "40.652206",
        "srcCountryCode": "CN",
        "desIp": "118.197.145.110",
        "destName": "北京",
        "destLocX": "116.388306",
        "destLocY": "39.928894",
        "desCountryCode": null,
        "port": null,
        "attackTimes": 5,
        "attackType": "/malware",
        "attackTypeName": "恶意代码",
        "createTime": 0,
        "standby1": 0,
        "standby2": "/all",
        "standby3": null,
        "createTimeStr": null
    }, {
        "id": 0,
        "startTime": 0,
        "endTime": 0,
        "durationTime": 0,
        "srcArea": null,
        "srcIp": "112.115.104.104",
        "srcName": "昆明",
        "srcLocX": "102.71829",
        "srcLocY": "25.038895",
        "srcCountryCode": "CN",
        "desIp": "123.185.93.35",
        "destName": "沈阳",
        "destLocX": "123.4328",
        "destLocY": "41.792206",
        "desCountryCode": null,
        "port": null,
        "attackTimes": 5,
        "attackType": "/sec",
        "attackTypeName": "安全预警",
        "createTime": 0,
        "standby1": 0,
        "standby2": "/all",
        "standby3": null,
        "createTimeStr": null
    }, {
        "id": 0,
        "startTime": 0,
        "endTime": 0,
        "durationTime": 0,
        "srcArea": null,
        "srcIp": "1.197.153.49",
        "srcName": "郑州",
        "srcLocX": "113.5325",
        "srcLocY": "34.683594",
        "srcCountryCode": "CN",
        "desIp": "115.231.54.13",
        "destName": "宁波",
        "destLocX": "121.5495",
        "destLocY": "29.878204",
        "desCountryCode": null,
        "port": null,
        "attackTimes": 5,
        "attackType": "/malware",
        "attackTypeName": "恶意代码",
        "createTime": 0,
        "standby1": 0,
        "standby2": "/all",
        "standby3": null,
        "createTimeStr": null
    }, {
        "id": 0,
        "startTime": 0,
        "endTime": 0,
        "durationTime": 0,
        "srcArea": null,
        "srcIp": "112.123.54.22",
        "srcName": "合肥",
        "srcLocX": "117.28079",
        "srcLocY": "31.863907",
        "srcCountryCode": "CN",
        "desIp": "112.109.181.133",
        "destName": "漳州",
        "destLocX": "117.65561",
        "destLocY": "24.513306",
        "desCountryCode": null,
        "port": null,
        "attackTimes": 5,
        "attackType": "/att",
        "attackTypeName": "攻击入侵",
        "createTime": 0,
        "standby1": 0,
        "standby2": "/all",
        "standby3": null,
        "createTimeStr": null
    }];
    var line = new Array();
    var srcSpot = new Array();
    var desSpot = new Array();


    for (var i = 0; i < data.length; i++) {
        let fromCoord = [data[i].srcLocX, data[i].srcLocY];
        let toCoord = [data[i].destLocX, data[i].destLocY];
        let attackTimes = data[i].attackTimes;
        if (fromCoord && toCoord) {
            line.push({
                // fromName: data[i].srcName,
                // toName: data[i].destName,
                coords: [fromCoord, toCoord],
                value: attackTimes
            });
        }
    }

    for (var _i = 0; _i < data.length; _i++) {
        srcSpot.push({
            "name": data[_i].srcName,
            "value": [data[_i].srcLocX, data[_i].srcLocY, data[_i].attackTimes]
        });
    }

    for (var _i2 = 0; _i2 < data.length; _i2++) {
        desSpot.push({
            "name": data[_i2].destName,
            "value": [data[_i2].destLocX, data[_i2].destLocY]
        });
    }


    echarts.init(document.getElementById("worldMap")).setOption({
        "tooltip": {
            "trigger": "item",
            "borderColor": "#FFFFCC",
            "showDelay": 0,
            "hideDelay": 0,
            "enterable": true,
            "transitionDuration": 0,
            "extraCssText": "z-index:100",
            "formatter": function formatter(value) {
                return value.name;
            }
        },
        "geo": {
            "map": "world",
            "zoom": 1.9,
            "left": "0%",
            "label": {
                "emphasis": {
                    "show": false
                }
            },
            "roam": false,
            "layoutCenter": ["48%", "52%"],
            "layoutSize": "100%",
            "itemStyle": {
                "normal": {
                    "borderColor": "rgb(38, 167, 236)",
                    "areaColor": "#062339"
                },
                "emphasis": {
                    "borderColor": "rgb(38, 167, 236)",
                    "areaColor": "#24303D",
                    "shadowOffsetX": 0,
                    "shadowOffsetY": 0,
                    "shadowBlur": 20,
                    "borderWidth": 1,
                    "shadowColor": "rgba(0, 0, 0, 0.5)"
                }
            }
        },
        "series": [{
            "type": "lines",
            "zlevel": 3,
            "effect": {
                "show": true,
                "period": 4,
                "trailLength": 0.02,
                "symbol": "arrow",
                "symbolSize": 5,
                color: "#05eafa"
            },
            "lineStyle": {
                "normal": {
                    "width": 1,
                    "opacity": 0,
                    "curveness": 0.3
                }
            },
            "data": line
        }, {
            "type": "effectScatter",
            "coordinateSystem": "geo",
            "zlevel": 2,
            "rippleEffect": {
                "period": 4,
                "brushType": "stroke",
                "scale": 4
            },
            "label": {
                "normal": {
                    "show": false,
                    "position": "right",
                    "offset": [5, 0],
                    "fontSize": 13
                },
                "emphasis": {
                    "show": false
                }
            },
            "symbol": "circle",
            "symbolSize": 10,
            itemStyle: {
                normal: {
                    color: "#05eafa"
                }
            },
            "data": srcSpot
        }, {
            "type": "scatter",
            "coordinateSystem": "geo",
            "zlevel": 2,
            "rippleEffect": {
                "period": 4,
                "brushType": "stroke",
                "scale": 4
            },
            "label": {
                "normal": {
                    "show": false,
                    "position": "right",
                    "color": "#00eaff",
                    "formatter": "{b}",
                    "textStyle": {
                        "color": "#00eaff"
                    }
                },
                "emphasis": {
                    "show": false
                }
            },
            itemStyle: {
                normal: {
                    color: "#ff9800"
                }
            },
            "symbol": "pin",
            "symbolSize": 20,
            "data": desSpot
        }]
    });
}