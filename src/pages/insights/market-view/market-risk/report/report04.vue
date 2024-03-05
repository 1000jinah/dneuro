<template>
    <div class="marketrisk-report04" style="background-color: #fff; padding: 40px 20px 20px 20px !important; width: 792px; height: 1122px;">
        <v-row style="border-top: 2px solid #000 !important; margin: 0px;">
            <v-col style="padding: 0px;">
                <p style="font-size: 19px; font-weight: 900; margin: 30px 0px 15px 0px;">Concentration</p>
                <v-row style="margin: 0px; padding-bottom: 32px; font-size: 12px;">
                    <v-col cols="6" style="padding: 0px 20px 0px 0px;">
                        <p>The inter-relationship between assets is as important as the volatility of individual
assets. Diversification is a key element of portfolio risk. Like volatility, correlations
can change a great deal over time. Sometimes this change is slow; other times it
can be very rapid and subject to jumps. This can induce enormous changes in
portfolio risk.</p>
                        <p>The correlations chart shows a range of assets as represented by their respective
indexes. These assets include bonds and equities of various kinds, and others such
as commodities. In times of stress, returns of different asset classes tend to be
highly correlated, implying a lack of diversification. </p>
                    </v-col>
                    <v-col cols="6" style="padding: 0px 0px 0px 20px;">
                        <p>Correlations are generally medium to high. The correlation of EM and investment
grade debt with DM government debt is on the high side, showing the duration risk
from any push higher in long-term yields. That has been reflected in total returns
this year. At the same time, the typically negative correlation in returns between
DM equities and government debt is closer to zero now, suggesting reduced
diversification for multi-asset portfolios. </p>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row style="border-top: 2px solid #000 !important; margin: 0px;">
            <v-col style="padding: 0px;">
                <p style="font-size: 19px; font-weight: 900; margin: 30px 0px 15px 0px;">Correlation Across Asset Classes</p>
                <p style="margin-bottom: 0px; font-size: 12px;">Current correlations and correlations versus history, September 2021</p>
            </v-col>
            <v-col  cols="12" style="padding: 0px;">
                <figure class="highcharts-figure">
                    <div id="heatmap"></div>
                </figure>
            </v-col>
            <v-col style="padding: 0px;">
                <p style="font-size: 12px; margin: 10px 0px 0px 0px !important;">Index data provided for illustrative purposes only. Indices are unmanaged and it is not possible to invest directly in an index</p>
                <p style="font-size: 5px; color: #808080; margin: 10px 0px 0px 0px !important;">Source: BlackRock Risk and Quantitative Analysis and BlackRock Investment Institute, with data from Bloomberg and Refinitiv Datastream, September 2021. Notes: Correlation is based on a short-term (40 day) half-life using 252 days of data. Indexes used are the Bloomberg Barclays
World Govt Inflation Linked bonds TR USD for index-linked debt; Citi WGBI 7-10yr local currency for DM gov debt; Bloomberg Barclays Global Aggregate Corporate Total Return Index USD for IG debt; J.P. Morgan EMBI Plus Composite USD for EM gov debt; Bloomberg Barclays U.S.
Corporate High Yield Total Return Index for HY debt; MSCI World Gross Total Return Index local currency for DM equity; MSCIDaily TR Gross Small Cap World USD for DM small cap equity; MSCI Daily TR Gross EM USD for EM equity. For private markets, we use the S&P Listed Private
Equity Total Return Index USD for listed private equity, the S&P Global Infrastructure Total Return USD for Infrastructure and the FTSE EPRA NAREIT Developed TR USD for property. For commodities, we use the Bloomberg Commodities Index. The upper diagonal shows the current
cross-asset correlation based on 252 days of data, with more weight put on the last 40 days because that timeframe is consistent with our models for measuring short-term risk. The closer the number is to zero (either positive or negative), the weaker the correlation
(see numbers in green). A higher number (positive or negative) indicates a strong correlation between asset classes (see the numbers in dark red). The lower diagonal is the percentile rank of this correlation over a five-year period. A green percentage number indicates that the current
correlation is close to its five-year average</p>
            </v-col>
        </v-row>
    </div>
</template>

<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/highcharts-more.js"></script>
<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import meta from '@/api/meta';

import chartButton from '@/assets/images/view-interactive-chart-button.png';

import HighchartsHeatMap from 'highcharts/modules/heatmap.js';
import Highcharts from 'highcharts';

HighchartsHeatMap(Highcharts);

export default Vue.extend({
    props: {
        val: Object,
    },
    data() {
        return {
            msg: null,
            img:{
                chartButton,
            },
            data:{
                heatmap: {
                    category: [],
                    high: [],
                    middle: [],
                    low: [],
                },
                apiData: {
                    volatility: {
                        data: {
                            direction: null,
                            level: null,
                        },
                    },
                    concentration: {
                        data: {
                            direction: null,
                            level: null,
                        },
                    },
                    regime: {
                        data: {
                            direction: null,
                            level: null,
                        },
                    },
                    persistence: {
                        data: {
                            direction: null,
                            level: null,
                        },
                    },
                    valuation: {
                        data: {
                            direction: null,
                            level: null,
                        },
                    },
                }
            }
        };
    },
    watch: {
    },
    methods: {
        async riskMonitor() {
            this.data.apiData = this.val;

            this.data.heatmap.category = this.data.apiData.concentration.data.indexes.reverse();

            const heatmapEwm = this.data.apiData.concentration.data.correlation_latest;
            const heatmapRank = this.data.apiData.concentration.data.correlation_rank;
            var z = 0,
                x = 0,
                q = 0,
                w = 0,
                heatmapValue = new Array(),
                test = ['Commodities', 'DM Equity', 'DM Govt Bond', 'EM Equity', 'EM Govt Bond', 'HY Bond', 'IG Bond', 'Inflation-linked Debt'];
            for (z = 0; z <= this.data.apiData.concentration.data.indexes.length - 1; z++) {
                const heatmapEwmValue = heatmapEwm[test[z]];
                heatmapValue[z] = new Array();
                for (x = 0; x <= this.data.apiData.concentration.data.indexes.length - 1; x++) {
                    const heatmapEwmValues = heatmapEwmValue[test[x]];
                    heatmapValue[z].push([z, x, heatmapEwmValues.toFixed(2), '#FEF1C1']);
                }
            }

            for (q = 0; q <= this.data.apiData.concentration.data.indexes.length - 1; q++) {
                const heatmapRankValue = heatmapRank[test[q]];
                for (w = 0; w <= this.data.apiData.concentration.data.indexes.length - 1; w++) {
                    const heatmapRankValues = heatmapRankValue[test[w]];
                    if (q < w) {
                        break;
                    } else {
                        heatmapValue[q][w] = [];
                        heatmapValue[q][w].push(q, w, heatmapRankValues.toFixed(2), '#FFDBD1');
                    }
                }
            }

            (heatmapValue[0][0] = []),
            (heatmapValue[1][1] = []),
            (heatmapValue[2][2] = []),
            (heatmapValue[3][3] = []),
            (heatmapValue[4][4] = []),
            (heatmapValue[5][5] = []),
            (heatmapValue[6][6] = []),
            (heatmapValue[7][7] = []),
            heatmapValue.forEach((arr: any) => {
                arr.forEach((value: any) => {
                    if (value[2] >= 0.7) {
                        this.data.heatmap.high.push(value);
                    } else if (value[2] >= 0.3 && value[2] < 0.7) {
                        this.data.heatmap.middle.push(value);
                    } else if (value[2] < 0.3) {
                        this.data.heatmap.low.push(value);
                    }
                });
            });

            let chartMargin = 0,
                font14 = null;
            if (document.documentElement.scrollWidth > 1263) {
                chartMargin = 300;
                font14 = 14;
            } else if (document.documentElement.scrollWidth <= 1263 && document.documentElement.scrollWidth > 959) {
                chartMargin = 150;
                font14 = 13;
            } else if (document.documentElement.scrollWidth <= 959) {
                chartMargin = 50;
                font14 = 12;
            }

            Highcharts.chart('heatmap', {
                chart: {
                    type: 'heatmap',
                    height: 400,
                    events: {
                        load: function () {
                            const chart = this;
                            chart.series.forEach((series) => {
                                series.points.forEach((point) => {
                                    if (point.color === '#FFDBD1') {
                                        point.update(
                                            {
                                                dataLabels: {
                                                    format: '{point.value}',
                                                },
                                            },
                                            false
                                        );
                                    }
                                });
                            });
                            chart.redraw();
                        },
                        render: function () {
                            const chart = this,
                                legend = chart.legend,
                                legendMargin = legend.options.margin ? legend.options.margin - legend.padding : 0,
                                startX = 0,
                                startY = legend.group.translateY + legend.legendHeight + legendMargin / 2,
                                endX = chart.chartWidth,
                                endY = startY;

                            if (!chart.customLine) {
                                chart.customLine = chart.renderer
                                    .path(['M', startX, startY, 'L', endX, endY])
                                    .attr({
                                        'stroke-width': 1,
                                        stroke: 'black',
                                    })
                                    .add();
                            } else {
                                chart.customLine.attr({
                                    d: ['M', startX, startY, 'L', endX, endY],
                                });
                            }
                        },
                    },
                },
                legend: {
                    align: 'right',
                    verticalAlign: 'top',
                    enabled: true,
                    margin: 10,
                    itemStyle: {
                        fontSize: 10,
                        fontWeight: 'normal',
                        fontFamily: 'BLKFort-Book, Arial, Sans-Serif',
                        color: '#000000',
                    },
                },
                title: {
                    text: '',
                },
                credits: {
                    enabled: false,
                }, // 하단 highchart.com 글씨 삭제
                exporting: {
                    // 상단 context menu 제거
                    enabled: false,
                },
                xAxis: {
                    opposite: true,
                    tickWidth: 0,
                    lineWidth: 0,
                    categories: this.data.heatmap.category,
                    labels: {
                        rotation: 90,
                        style: {
                            fontSize: 10,
                            fontWeight: 'bold',
                            color: '#000',
                        },
                    },
                },
                yAxis: {
                    categories: this.data.heatmap.category,
                    title: null,
                    reversed: true,
                    labels: {
                        style: {
                            fontSize: 10,
                            fontWeight: 'bold',
                            color: '#000',
                        },
                    },
                },

                tooltip: {
                    formatter: function () {
                        return '<b>' + this.point.value + '</b>';
                    },
                },
                plotOptions: {
                    series: {
                        animation: false,
                    },
                    heatmap: {
                        borderWidth: 1,
                        borderColor: '#fff',
                        dataLabels: {
                            enabled: true,
                            format: '{point.value}%',
                        },
                        keys: ['x', 'y', 'value', 'color'],
                        states: {
                            inactive: {
                                opacity: 1,
                            },
                            hover: {
                                brightness: -0.1, // darken
                            },
                        },
                    },
                },
                series: [
                    {
                        color: '#fff',
                        borderWidth: 1,
                        borderColor: '#fff',
                        dataLabels: {
                            enabled: true,
                            format: '{point.value}',
                        },
                        name: 'White',
                        showInLegend: false,
                        data: [
                            [0, 0, 1],
                            [1, 1, 1],
                            [2, 2, 1],
                            [3, 3, 1],
                            [4, 4, 1],
                            [5, 5, 1],
                            [6, 6, 1],
                            [7, 7, 1],
                        ],
                    },
                    {
                        name: 'High',
                        color: '#3e7ad3',
                        borderWidth: 1,
                        borderColor: '#fff',
                        dataLabels: {
                            color: '#3e7ad3',
                            style: {
                                textOutline: false,
                            },
                        },
                        data: this.data.heatmap.high,
                    },
                    {
                        name: 'Medium to High',
                        color: '#ff754b',
                        borderWidth: 1,
                        borderColor: '#fff',
                        dataLabels: {
                            color: '#ff754b',
                            style: {
                                textOutline: false,
                            },
                            format: '{point.value}%',
                        },
                        data: this.data.heatmap.middle,
                    },
                    {
                        name: 'Low',
                        color: '#2e9875',
                        borderWidth: 1,
                        borderColor: '#fff',
                        dataLabels: {
                            color: '#2e9875',
                            style: {
                                textOutline: false,
                            },
                        },
                        data: this.data.heatmap.low,
                    },
                ],
            });
            this.msg= true;
            this.$emit("messageCorrelation", this.msg);
        },
    },
    mounted(){
        this.riskMonitor();
    }
});

</script>

<style>
.marketrisk-report04{
    background-color: #fff;
    padding: 20px !important;
    width: 792px;
    height: 1122px;
}

.marketrisk-report04 .bt{
    border-top: 2px solid #000 !important;
}

.marketrisk-report04 .main-text {
    font-size: 19px;
    font-weight: 900;
    margin: 30px 0px 15px 0px;
}

.marketrisk-report04 .sub-text-small {
    font-size: 5px;
    color: #808080;
}

.marketrisk-report04 .sub-text {
    font-size: 12px;
}

.marketrisk-report04 .chart-button {
    width: 142px;
    height: 29px;
}
</style>
