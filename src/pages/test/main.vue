<template>
    <div>
        <!-- 수평 막대 차트 (fill 패턴, margin 거리) -->
        <v-row>
            <v-col cols="12">
                <figure class="highcharts-figure">
                    <div id="container"></div>
                </figure>
            </v-col>
        </v-row>
        <!-- 날짜 및 datepicker 제외한 stock 차트 -->
        <v-row>
            <v-col>
                <figure class="highcharts-figure">
                    <div id="dataChart"></div>
                </figure>
            </v-col>
        </v-row>
        <!-- vue stock 차트 -->
        <v-row class="pt-10">
            <v-col>
                <div id="test"><chartTest></chartTest></div>
            </v-col>
        </v-row>
        <!-- 파이 차트 (dataLabel 제거, 0,360 값) -->
        <v-row>
            <v-col>
                <figure class="highcharts-figure">
                    <div id="pie"></div>
                </figure>
            </v-col>
        </v-row>
        <!-- 중간 막대 차트 (필요없는 값, label, context button 제거) -->
        <v-row>
            <v-col>
                <figure class="highcharts-figure">
                    <div id="centerBar"></div>
                </figure>
            </v-col>
        </v-row>
        <!-- area 차트 -->
        <v-row>
            <figure class="highcharts-figure">
                <div id="areaChart"></div>
            </figure>
        </v-row>
        <!-- boxplot 차트 -->
        <v-row>
            <figure class="highcharts-figure">
                <div id="box-plot-first"></div>
            </figure>
        </v-row>
    </div>
</template>

<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="https://code.highcharts.com/modules/export-data.js"></script>
<script src="https://code.highcharts.com/modules/accessibility.js"></script>
<script src="https://code.highcharts.com/modules/data.js"></script>
<script lang="ts">
import Vue from 'vue';
import searchImg from '@/assets/images/searchImg.png';
import toggleButton from '@/pages/components/toggle-button.vue';
import chartTest from '@/pages/components/chart.vue';
import HighchartsMore from 'highcharts/highcharts-more';

HighchartsMore(Highcharts);

import Highcharts from 'highcharts';
import pattern from 'highcharts/modules/pattern-fill';

pattern(Highcharts);
export default Vue.extend({
    components: {
        chartTest,
    },
    data() {
        return {

        };
    },
    methods: {
        //stock차트
        handler() {
            var args = arguments;
            for (var arg of args) {
                if (arg instanceof Function) {
                arg();
                }
            }
        },
    },
    mounted() {
        // 수평 막대 차트 (fill 패턴, margin 거리)
        Highcharts.chart('container', {
            chart: {
                type: 'bar'
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: ['Information Technology', 'Health Care', 'Consumer Discretionary', 'Financials',
                    'Communication', 'Industrials', 'Consumer Staples', 'Energy', 'Utilities', 'Real Estate',
                    'Materials', 'Cash and / or Derivatives'
                ],
                labels: {
                    x: -200,
                    style: {
                        paddingRight: 200
                    }
                },
                title: {
                    text: null,
                },
            },
            yAxis: {
                title: {
                    text: ''
                },
                labels: {
                    enabled:false,
                },
            },
            tooltip: {
                valueSuffix: ''
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        inside: true,
                        align: 'left',
                        enabled: true,
                        overflow: 'allow',
                        crop: false,
                        x: -40
                    }
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: -40,
                y: 80,
                floating: true,
                borderWidth: 1,
                backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
                shadow: true
            },
            credits: {
                enabled: false
            },
            defs: {
                patterns: [
                {
                    id: "custom-pattern",
                    path: {
                    d: "M 0 0 L 10 10 M 9 -1 L 11 1 M -1 9 L 1 11",
                    stroke: "red",
                    strokeWidth: 3
                    }
                }
                ]
            },
            series: [{
                color: {
                    pattern: { // 체크 패턴
                        path: {
                            d: 'M 0 0 L 6 6 M 5 -1 L 7 1 M -1 5 L 1 7',
                            strokeWidth: 3
                        },
                        height: 6,
                        width: 6,
                        r: 4,
                        color: '#00994C'
                    }
                },
                showInLegend: false,
                data: [27.95, 13.51, 12.11, 11.29, 9.36, 7.83, 5.96, 3.85, 2.66, 2.66, 2.61, 0.21],
            }]
        });

        // 날짜 및 datepicker 제외한 stock 차트
        Highcharts.chart('dataChart', {
            credits: {enabled: false}, // 하단 highchart.com 글씨 삭제
            chart: {
                zoomType: 'x'
            },
            title: {
                text: ''
            },
            xAxis: {
                labels: {
                    formatter: function() {
                        return Highcharts.dateFormat('%e. %b', new Date());
                    }
                },
                title: {
                    text: null
                }
            },
            yAxis: {
                title: {
                    text: ''
                },
                labels: {
                    format:'{value}%'
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    marker: {
                        enabled: false
                    }
                },
                area: {
                    fillColor: {
                        linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                        },
                        stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                        lineWidth: 1
                        }
                    },
                }
            },

            series: [{
                color: '#FF8000',
                data: [
                    0.8446, 0.8445, 0.8444, 0.8451, 0.8418, 0.8264, 0.8258, 0.8232,
                    0.8233, 0.8258, 0.8283, 0.8278, 0.8256, 0.8292, 0.8239, 0.8239,
                    0.8245, 0.8265, 0.8261, 0.8269, 0.8273, 0.8244, 0.8244, 0.8172,
                    0.8139, 0.8146, 0.8164, 0.82,   0.8269, 0.8269, 0.8269, 0.8258,
                    0.8247, 0.8286, 0.8289, 0.8316, 0.832,  0.8333, 0.8352, 0.8357,
                    0.7811, 0.7833, 0.7849, 0.7819, 0.7809, 0.7809, 0.7827, 0.7848,
                    0.785,  0.7873, 0.7894, 0.7907, 0.7909, 0.7947, 0.7987, 0.799,
                    0.7927, 0.79,   0.7878, 0.7878, 0.7907, 0.7922, 0.7937, 0.786,
                    0.7158, 0.714,  0.7119, 0.7129, 0.7129, 0.7049, 0.7095
                ],
            }]
            });

        // 파이 차트 (dataLabel 제거, 0,360 값)
        Highcharts.chart('pie', {
            credits: {enabled: false}, // 하단 highchart.com 글씨 삭제
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: 0,
                plotShadow: false
            },
            legend: {
                title:{
                    text:'<div style="font-size: 18px; font-weight: bold;">' +'Asset Allocation (% of net worth)' + '</div>',
                },
                align: 'center',
                symbolWidth: 20,
                width: 300,
                layout: 'vertical',
                useHTML: true,
                labelFormatter: function () {
                    let name = this.name.length > 20 ? this.name.substr(0, 20) + '...' : this.name;
                    console.log(this)
                    return '<div style="font-size:16px; width: 240px; display: flex;"><div style="float:left; width: 50%">' + `${name}` + '</div><div style="float:right; position: absolute; right: 0;">' + `${this.y}%` + '</div></div>'
                },
                itemMarginTop: 20,
                itemMarginBottom: 20,
                y: 30,
            },
            title: {
                text: '',
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            exporting: { // 상단 context menu 제거
                enabled: false
            },
            plotOptions: {
                pie: {
                    borderColor: '#000000',
                    dataLabels: {
                        enabled: false,
                    },
                    startAngle: 0,
                    endAngle: 360,
                    center: ['50%'],
                    size: '80%',
                    showInLegend: true
                }
            },
            series: [{
                showInLegend: true,
                type: 'pie',
                name: 'Browser share',
                innerSize: '50%',
                data: [
                    ['Chrome', 60],
                    ['Firefox', 40],
                ]
            }]
        });

        //중간 막대 차트 (필요없는 값, label, context button 제거)
        var categories = [
            '0', '1', '2', '3', '4'
        ];

        Highcharts.chart('centerBar', {
            credits: {enabled: false}, // 하단 highchart.com 글씨 삭제
            chart: {
                type: 'bar'
            },
            title: {
                text: ''
            },
            legend: {
                enabled: false
            },
            exporting: { // 상단 context menu 제거
                enabled: false
            },
            accessibility: {
                point: {
                    valueDescriptionFormat: '{index}. Age {xDescription}, {value}%.'
                }
            },
            xAxis: [{
                categories: categories,
                reversed: false,
                labels: {
                    enabled: false, // disable labels
                    step: 50
                },
                accessibility: {
                    description: 'Age (male)'
                }
            }, { // mirror axis on right side
                opposite: true,
                reversed: false,
                categories: categories,
                linkedTo: 0,
                labels: {
                    enabled: false, // disable labels
                    step: 50
                },
                accessibility: {
                    description: 'Age (female)'
                }
            }],
            yAxis: {
                max: 100,
                min: -100,
                title: {
                    text: null
                },
                labels: {
                    formatter: function () {
                        return Math.abs(this.value);
                    }
                },
                accessibility: {
                    description: 'Percentage population',
                    rangeDescription: 'Range: 0 to 5%'
                }
            },

            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },

            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' +
                    'Population: ' + Highcharts.numberFormat(Math.abs(this.point.y), 1) + '%';
                }
            },

            series: [{
                name: 'Male',
                data: [
                -42.2, -32.1, -72.2, -32.4, -12.7, -63.0
                ]
            }, {
                name: 'Female',
                data: [
                52.1, 12.0, 32.1, 72.3, 92.6, 22.9
                ]
            }]
        });

        //area 차트
        Highcharts.chart('areaChart', {
            chart: {
                type: 'area'
            },
            credits: {enabled: false}, // 하단 highchart.com 글씨 삭제
            exporting: { // 상단 context menu 제거
                enabled: false
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            accessibility: {
                point: {
                valueDescriptionFormat: '{index}. {point.category}, {point.y:,.0f} millions, {point.percentage:.1f}%.'
                }
            },
            xAxis: {
                categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
                tickmarkPlacement: 'on',
                title: {
                enabled: false
                }
            },
            yAxis: {
                labels: {
                format: '{value}%'
                },
                title: {
                enabled: false
                }
            },
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} millions)<br/>',
            },
            legend: {
                align: 'right',
                verticalAlign: 'top',
            },
            plotOptions: {
                area: {
                    stacking: 'percent',
                    lineColor: '#000000',
                    lineWidth: 1,
                    marker: {
                        enabled: false
                    },
                },
            },
            series: [
            {
                name: 'Oceania',
                data: [70, 88, 61, 77, 90, 82, 79],
                color: '#ffffff',
            }, {
                name: 'Asia',
                data: [502, 635, 809, 947, 1402, 3634, 5268],
                color: '#FF8000',
            }, {
                name: 'Africa',
                data: [106, 107, 111, 133, 221, 767, 1766],
                color: '#FFFF00',
            }, {
                name: 'Europe',
                data: [163, 203, 276, 408, 547, 729, 628],
                color: '#00994C',
            }, {
                name: 'America',
                data: [18, 31, 54, 156, 339, 818, 1201],
                color: '#66FFB2',
            }]
        });

        // boxplot 차트
        Highcharts.chart('box-plot-first', {
            chart: {
                type: 'boxplot',
                width: 211,
            },
            credits: {enabled: false}, // 하단 highchart.com 글씨 삭제
            exporting: { // 상단 context menu 제거
                enabled: false
            },
            title: {
                text: ''
            },

            legend: {
                enabled: false
            },

            xAxis: {
                categories: ['VIX'],
                title: {
                text: ''
                }
            },

            yAxis: {
                title: {
                text: 'VIX Index'
                },
            },
            plotOptions: {
                boxplot: {
                    fillColor: '#F0F0E0',
                    lineWidth: 2,
                    medianColor: '#000',
                    medianWidth: 2,
                    medianColor: 'green',
                    medianLength: 20,
                    stemColor: '#000',
                    stemWidth: 2,
                    whiskerColor: '#3D9200',
                    whiskerLength: '0%',
                }
            },
            series: [{
                name: 'Observations',
                color: 'black',
                fillColor: 'yellow',
                data: [
                [760, 801, 870, 895, 965]
                ],
                tooltip: {
                headerFormat: '<em>Experiment No {point.key}</em><br/>'
                }
            }, {
                name: 'Outliers',
                color: '#000',
                type: 'scatter',
                data: [
                [0, 814]
                ],
                marker: {
                fillColor: 'orange',
                lineWidth: 1,
                lineColor: 'black',
                radius: 8
                },
                tooltip: {
                pointFormat: 'Observation: {point.y}'
                }
            }]

        });

    }
});
</script>

<style>

</style>
