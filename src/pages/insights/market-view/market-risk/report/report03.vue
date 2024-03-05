<template>
    <div class="marketrisk-report03" style="background-color: #fff; padding: 40px 20px 20px 20px !important; width: 792px; height: 1122px;">
        <v-row style="border-top: 2px solid #000 !important; margin: 0px;">
            <v-col style="padding: 0px;">
                <p style="font-size: 19px; font-weight: 900; margin: 30px 0px 15px 0px;">Volatility</p>
                <v-row style="margin: 0px; padding-bottom: 24px; font-size: 12px;">
                    <v-col cols="6" style="padding: 0px 20px 0px 0px;">
                        <p style="margin: 0px 0px 15px 0px !important;">Expected volatility is a strong indicator of the risk of an asset. Volatility can be
measured in different ways, but most often it involves tracking the standard
deviation of returns over some sample period and capturing the dispersion – or
potential dispersion of returns – over time. The biggest challenge in forecasting
volatility is the speed with which it can change. Sometimes it surges rapidly, and the
magnitude can be very large. As a result, the risks of assets and portfolios can
change significantly, even when the underlying holdings are static.</p>
                        <p>The volatility chart shows the evolution of S&P 500 and U.S. Treasury implied
volatility – the VIX and the MOVE indexes respectively. Implied volatility is the
option market’s pricing of future volatility. The two markets have historically been
correlated during periods of systemic risk, such as in 2008.</p>
                    </v-col>
                    <v-col cols="6" style="padding: 0px 0px 0px 20px; font-size: 12px;">
                        <p>The VIX index has retreated after climbing in September during the equity
market retreat. It still remains below the levels seen earlier this year and has
gradually started to return to pre-Covid levels. The repeated, if short-lived, spikes
during the year highlight the underlying nervousness about what comes beyond the
economic restart and the potential for a wide range of outcomes. The MOVE index
– a measure of bond market volatility – remains subdued even with the climb in U.S.
Treasury yields in recent weeks. That perhaps reflects how central bank purchases
of government bonds are helping limit interest rate volatility, helping underpin risk
assets. </p>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row style="border-top: 2px solid #000 !important; margin: 0px;">
            <v-col style="padding: 0px;">
                <p style="font-size: 19px; font-weight: 900; margin: 30px 0px 15px 0px;">Volatility Through Time</p>
                <p style="font-size: 12px;">US equity and Treasury implied volatility, 1990-2021 </p>
            </v-col>
            <v-col cols="12" style="padding: 0px;">
                <figure class="highcharts-figure">
                    <div id="dataChart"></div>
                </figure>
            </v-col>
            <v-col style="padding: 0px;">
                <p style="font-size: 12px; margin: 0px 0px 10px 0px !important;">Index data provided for illustrative purposes only. Indices are unmanaged and it is not possible to invest directly in an index</p>
                <p style="font-size: 6px; color: #808080;">Sources: BlackRock Risk and Quantitative Analysis and BlackRock Investment Institute, with data from Bloomberg and Bank of America Merrill Lynch, October 2021. Notes: Charts based on the Chicago Board Options Exchange Volatility Index (VIX) and the Merrill Option Volatility
Expectations (MOVE)© indices.</p>
            </v-col>
        </v-row>
    </div>
</template>

<script src="https://code.highcharts.com/highcharts.js"></script>
<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import meta from '@/api/meta';

import chartButton from '@/assets/images/view-interactive-chart-button.png';

import Highcharts from 'highcharts';

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
            data: {
                dataChart: {
                    moveDate: [],
                    moveValue: [],
                    vixDate: [],
                    vixValue: [],
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
                },
            }
        };
    },
    methods: {
        async riskMonitor() {
            this.data.apiData = this.val;
            const movePrice = this.val.volatility.data.price[Object.keys(this.val.volatility.data.price)[0]],
                vixPrice = this.val.volatility.data.price[Object.keys(this.val.volatility.data.price)[1]];
            this.data.dataChart.moveDate = Object.keys(movePrice).sort();
            this.data.dataChart.vixDate = Object.keys(vixPrice).sort();

            const moveDateLength = this.data.dataChart.moveDate.length;
            for (i = 0; i < moveDateLength; i++) {
                const data = this.data.dataChart.moveDate[i];
                const date = new Date(data.split('T')[0]);
                let movePriceVal = movePrice[data] as any;

                if (movePriceVal != null && movePriceVal != 'null' && movePriceVal != '') {
                    this.data.dataChart.moveValue.push([Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()), movePriceVal]);
                }
            }
            let i=0;

            const vixDateLength = this.data.dataChart.moveDate.length;
            for (i = 0; i < vixDateLength; i++) {
                const data = this.data.dataChart.vixDate[i];
                const date = new Date(data.split('T')[0]);
                let vixPriceVal = vixPrice[data] as any;

                if (vixPriceVal != null && vixPriceVal != 'null' && vixPriceVal != '') {
                    this.data.dataChart.vixValue.push([Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()), vixPriceVal]);
                }
            }

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

            (function (H) {
                H.wrap(H.seriesTypes.line.prototype, 'drawLegendSymbol', function (proceed, stackingParam) {
                    if (this.userOptions.customShowRectSymbol == true) {
                        H.seriesTypes.column.prototype.drawLegendSymbol.apply(this, Array.prototype.slice.call(arguments, 1));
                    } else {
                        proceed.apply(this, Array.prototype.slice.call(arguments, 1));
                    }
                });
            })(Highcharts);
            Highcharts.chart('dataChart', {
                credits: { enabled: false }, // 하단 highchart.com 글씨 삭제
                navigator: {
                    enabled: false,
                },
                scrollbar: {
                    enabled: false,
                },
                chart: {
                    marginRight: 30,
                    zoomType: 'x',
                    height: 300,
                    events: {
                        render(e) {
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
                title: {
                    text: '',
                },
                tooltip: {
                    split: false,
                    shared: false,
                    xDateFormat: '%b.%d, %Y ',
                    valueDecimals: 2,
                },
                xAxis: {
                    type: 'datetime',
                    tickmarkPlacement: 'on',
                    labels: {
                        overflow: 'allow',
                        tickInterval: 24 * 60 * 60 * 1000 * 20,
                        style: {
                            fontSize: 10,
                            color: '#000000',
                        },
                        formatter: function () {
                            return Highcharts.dateFormat('%b, %Y', Number(this.value));
                        },
                    },
                    title: {
                        text: null,
                    },
                },
                yAxis: [
                    {
                        title: {
                            text: 'VIX Index',
                            style: {
                                fontSize: 10,
                                fontWeight: 'bold',
                                color: '#b3b3b3',
                            },
                        },
                    },
                    {
                        gridLineWidth: 0,
                        opposite: true,
                        title: {
                            text: 'MOVE Index',
                            style: {
                                fontSize: 10,
                                fontWeight: 'bold',
                                color: '#b3b3b3',
                            },
                        },
                        labels: {
                            align: 'right',
                        },
                    },
                ],
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
                plotOptions: {
                    series: {
                        animation: false,
                        marker: {
                            enabled: false,
                            // symbol: 'circle',
                            // radius: 12,
                        },
                    },
                    area: {
                        fillColor: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1,
                            },
                            stops: [
                                [0, Highcharts.getOptions().colors[0]],
                                [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')],
                            ],
                        },
                        lineWidth: 1,
                        states: {
                            hover: {
                                lineWidth: 1,
                            },
                        },
                    },
                },
                series: [
                    {
                        name: 'VIX',
                        color: '#ffd600',
                        data: this.data.dataChart.vixValue,
                        showInLegend: true,
                        customShowRectSymbol: true,
                    },
                    {
                        name: 'MOVE',
                        color: '#ff754b',
                        data: this.data.dataChart.moveValue,
                        showInLegend: true,
                        customShowRectSymbol: true,
                    },
                ],
            });
            this.msg= true;
            this.$emit("messageVolatility", this.msg);
        },
    },
    mounted() {
        this.riskMonitor();
    }
});

</script>

<style>
.marketrisk-report03{
    background-color: #fff;
    padding: 20px !important;
    width: 792px;
    height: 1122px;
}

.marketrisk-report03 .bt{
    border-top: 2px solid #000 !important;
}

.marketrisk-report03 .main-text {
    font-size: 19px;
    font-weight: 900;
    margin: 30px 0px 15px 0px;
}

.marketrisk-report03 .sub-text {
    font-size: 12px;
}

.marketrisk-report03 .sub-text-small {
    font-size: 6px;
    color: #808080;
}

.marketrisk-report03 .chart-button {
    width: 142px;
    height: 29px;
}
</style>
