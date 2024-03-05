<template>
    <div class="marketrisk-report07" style="background-color: #fff; padding: 40px 20px 20px 20px !important; width: 792px; height: 1122px;">
        <v-row style="border-top: 2px solid #000 !important; margin: 0px;">
            <v-col style="padding: 0px;">
                <p style="font-size: 19px; font-weight: 900; margin: 30px 0px 15px 0px;">Valuation</p>
                <v-row style="margin: 0px; padding-bottom: 32px;">
                    <v-col cols="6" style="padding: 0px 20px 0px 0px; font-size: 12px;">
                        <p>Assets and securities that become expensive or cheap relative to their long-term
norm can be risky simply because of valuation. Stretched valuations may be
indicative of elevated conditional risk in the market, but the short-term correlation
between valuation and return is inconsistent and therefore difficult to forecast.
Valuation itself is sometimes an elusive concept to capture.</p>
                        <p>The chart illustrates this through the compensation for risk that investors receive as
the earnings yield or credit spread relative to U.S. 10-year Treasury yield. The chart
suggests that equity valuations are within or near the historical interquartile range,
implying fair compensation for risk-taking. By contrast, relatively risky bonds show
some stretched valuations with spreads at the narrow end of the long-term
historical distribution. We see valuation risk overall as higher now compared with Q1
because of the wide range of potential outcomes beyond the restart. Potential
returns in line with or below historical median levels is probably insufficient for such
a wide range of outcomes. </p>
                    </v-col>
                    <v-col cols="6" style="padding: 0px 0px 0px 20px; font-size: 12px;">
                        <p>Historically low interest rates – especially real yields – are the core justification for
current asset valuations. But whether low rates persist will depend crucially on the
interplay between interest rates, inflation and debt following the policy revolution
in response to the Covid-19 shock. For more see Testing debt tolerance from
February 2021.</p>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row style="border-top: 2px solid #000 !important; margin: 0px;">
            <v-col style="padding: 0px;">
                <p style="font-size: 19px; font-weight: 900; margin: 30px 0px 15px 0px;">Historical distribution of equity and bond yields</p>
                <p style="margin-bottom: 0px; font-size: 12px;">Long-term distribution of equity earnings yields and credit relative to 10-year government bond yields</p>
            </v-col>
            <v-col class="pa-0" cols="12">
                <figure class="highcharts-figure">
                    <div id="boxPlotValuation"></div>
                </figure>
            </v-col>
            <v-col style="padding: 0px;">
                <p style="font-size: 12px; margin: 10px 0px 0px 0px !important;">Index data provided for illustrative purposes only. Indices are unmanaged and it is not possible to invest directly in an index</p>
                <p style="font-size: 6px !important; color: #808080; margin: 10px 0px 0px 0px !important;">Source: BlackRock Risk and Quantitative Analysis and BlackRock Investment Institute, with data from Bloomberg and Refinitiv Datastream, September 2021. Notes: Correlation is based on a short-term (40 day) half-life using 252 days of data. Indexes used are the Bloomberg Barclays
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
Highcharts.SVGRenderer.prototype.symbols.dash = function (x, y, w, h) {
return [
'M', x, y+h/2,
'L', x+w, y+h/2,
'z'];
};
if (Highcharts.VMLRenderer) {
Highcharts.VMLRenderer.prototype.symbols.dash = Highcharts.SVGRenderer.prototype.symbols.dash;
}
var premiaURL = "/blk-corp-assets/images/tools/blackrock-investment-institute/";

import Vue from 'vue';
import axios from 'axios';
import meta from '@/api/meta';

import chartButton from '@/assets/images/view-interactive-chart-button.png';

import Highcharts from 'highcharts';
import highchartsDumbbell from "highcharts/modules/dumbbell";
import HC_more from "highcharts/highcharts-more";

import moment from 'moment';

HC_more(Highcharts);
highchartsDumbbell(Highcharts);

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
                apiData: {
                    data: null,
                    summary: {},
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
    watch: {
    },
    methods: {
        async riskMonitor(){
            this.data.apiData = this.val;

            const valuationEquity = this.data.apiData.valuation.data.Equity,
                valuationFixedIncome = this.data.apiData.valuation.data.FixedIncome;

            const valuationEmEquityData = this.data.apiData.valuation.data.Equity['EM Equity'];
            const valuationEuropeEquityData = this.data.apiData.valuation.data.Equity['Europe Equity'];
            const valuationJapanEquityData = this.data.apiData.valuation.data.Equity['Japan Equity'];
            const valuationUkEquityData = this.data.apiData.valuation.data.Equity['UK Equity'];
            const valuationUsEquityData = this.data.apiData.valuation.data.Equity['US Equity'];

            const valuationEmergyingFixedIncomeData = this.data.apiData.valuation.data.FixedIncome['Emergying Market Bond'];
            const valuationEuropeanFixedIncomeData = this.data.apiData.valuation.data.FixedIncome['European High Yield'];
            const valuationUsFixedIncomeData = this.data.apiData.valuation.data.FixedIncome['US High Yield'];

            Highcharts.seriesTypes.dumbbell.prototype.drawLegendSymbol = Highcharts.seriesTypes.line.prototype.drawLegendSymbol;

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

            Highcharts.chart('boxPlotValuation', {
                chart: {
                    type: 'column',
                    animation: false,
                    width: 750,
                    height: 300,
                    events: {
                        render() {
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
                credits: { enabled: false }, // 하단 highchart.com 글씨 삭제
                exporting: {
                    // 상단 context menu 제거
                    enabled: false,
                },
                title: {
                    text: '',
                },
                credits: {
                    enabled: false,
                },
                xAxis: {
                    lineColor: '#000000',
                    tickColor: '#000000',
                    categories: [
                        'U.S.<br>equities',
                        'Japan<br>equities',
                        ' Europe<br>equities',
                        'UK<br>equities',
                        'EM<br>equities',
                        'U.S. high yield',
                        'European high<br/>Yield',
                        'Emerging<br/>market bonds',
                    ],
                    labels: {
                        style: {
                            fontSize: 10,
                            fontFamily: 'BLKFort-Book, AvenirNextRegular, Arial, Sans-Serif',
                            color: '#000000',
                        },
                    },
                    plotLines: [
                        {
                            color: '#000000',
                            width: 1,
                            value: 4.5,
                            zIndex: 50,
                            label: {
                                style: {
                                    fontSize: 10,
                                    fontWeight: 'bold',
                                    fontFamily: 'BLKFort-Book, AvenirNextRegular, Arial, Sans-Serif',
                                    color: '#000000',
                                },
                                rotation: 0,
                                text: '',
                                verticalAlign: 'top',
                                textAlign: 'center',
                                y: -10,
                                x: -110,
                            },
                        },
                    ],
                },
                yAxis: {
                    startOnTick: false,
                    gridLineColor: '#b3b3b3',
                    plotLines: [
                        {
                            color: '#000000',
                            width: 1,
                            value: 0,
                            zIndex: 1,
                        },
                    ],
                    labels: {
                        format: '{value}%',
                        style: {
                            fontSize: 10,
                            fontFamily: 'BLKFort-Book, AvenirNextRegular, Arial, Sans-Serif',
                            color: '#b3b3b3',
                        },
                    },
                    title: {
                        text: 'Expensive   Cheaper',
                        style: {
                            fontSize: 10,
                            color: '#b3b3b3',
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
                tooltip: {
                    useHTML: true,
                    shared: true,
                },
                plotOptions: {
                    series:{
                        animation: false,
                    },
                    column: {
                        stacking: 'normal',
                    },
                },
                series: [
                    {
                        type: 'dumbbell',
                        name: '5th to 95th Percentile',
                        color: '#000000',
                        data: [
                            [valuationEmEquityData['5'], valuationEmEquityData['95']],
                            [valuationEuropeEquityData['5'], valuationEuropeEquityData['95']],
                            [valuationJapanEquityData['5'], valuationJapanEquityData['95']],
                            [valuationUkEquityData['5'], valuationUkEquityData['95']],
                            [valuationUsEquityData['5'], valuationUsEquityData['95']],
                            [valuationEmergyingFixedIncomeData['5'], valuationEmergyingFixedIncomeData['95']],
                            [valuationEuropeanFixedIncomeData['5'], valuationEuropeanFixedIncomeData['95']],
                            [valuationUsFixedIncomeData['5'], valuationUsFixedIncomeData['95']],
                        ],
                        marker: {
                            enabled: false,
                        },
                        lineWidth: 2,
                        states: {
                            hover: {
                                lineWidth: 0,
                            },
                        },
                        enableMouseTracking: false,
                    },
                    {
                        data: [
                            Number(valuationEmEquityData['75']) - Number(valuationEmEquityData['25']),
                            Number(valuationEuropeEquityData['75']) - Number(valuationEuropeEquityData['25']),
                            Number(valuationJapanEquityData['75']) - Number(valuationJapanEquityData['25']),
                            Number(valuationUkEquityData['75']) - Number(valuationUkEquityData['25']),
                            Number(valuationUsEquityData['75']) - Number(valuationUsEquityData['25']),
                            Number(valuationEmergyingFixedIncomeData['75']) - Number(valuationEmergyingFixedIncomeData['25']),
                            Number(valuationEuropeanFixedIncomeData['75']) - Number(valuationEuropeanFixedIncomeData['25']),
                            Number(valuationUsFixedIncomeData['75']) - Number(valuationUsFixedIncomeData['25']),
                        ],
                        color: 'rgb(255,230,127)',
                        borderColor: '#303030',
                        zIndex: 77,
                        pointWidth: 40,
                        marker: {
                            symbol: 'square',
                        },
                        showInLegend: false,
                        linkedTo: 'inter',
                    },
                    {
                        name: 'Interquartile range',
                        showInLegend: true,
                        type: 'scatter',
                        id: 'inter',
                        color: 'rgb(255,230,127)',
                        marker: {
                            radius: 10,
                            symbol: 'square',
                        },
                    },
                    {
                        name: 'Q1',
                        showInLegend: false,
                        enableMouseTracking: false,
                        data: [
                            valuationEmEquityData['25'],
                            valuationEuropeEquityData['25'],
                            valuationJapanEquityData['25'],
                            valuationUkEquityData['25'],
                            valuationUsEquityData['25'],
                            valuationEmergyingFixedIncomeData['25'],
                            valuationEuropeanFixedIncomeData['25'],
                            valuationUsFixedIncomeData['25'],
                        ],
                        color: 'rgba(100,100,100,0)',
                    },
                    {
                        name: 'Median',
                        type: 'spline',
                        lineWidth: 2,
                        lineColor: 'transparent',
                        states: {
                            hover: {
                                enabled: false,
                                lineWidth: 0,
                            },
                        },
                        color: 'rgb(0,139,92)',
                        showInLegend: false,
                        marker: {
                            lineColor: 'rgb(0,139,92)',
                            lineWidth: 3,
                            radius: 9,
                            symbol: 'dash',
                        },
                        zIndex: 88,
                        data: [
                            valuationEmEquityData['50'],
                            valuationEuropeEquityData['50'],
                            valuationJapanEquityData['50'],
                            valuationUkEquityData['50'],
                            valuationUsEquityData['50'],
                            valuationEmergyingFixedIncomeData['50'],
                            valuationEuropeanFixedIncomeData['50'],
                            valuationUsFixedIncomeData['50'],
                        ],
                        linkedTo: 'median',
                    },
                    {
                        id: 'median',
                        color: 'rgb(0,139,92)',
                        name: 'Median',
                        showInLegend: true,
                        type: 'line',
                        marker: {
                            radius: 0,
                        },
                    },
                    {
                        name: 'Latest Quarter Average ',
                        type: 'spline',
                        showInLegend: true,
                        lineWidth: 0,
                        states: {
                            hover: {
                                enabled: false,
                                lineWidth: 0,
                            },
                        },
                        marker: {
                            radius: 6,
                            symbol: 'circle',
                        },
                        color: '#ff754b',
                        zIndex: 99,
                        data: [
                            valuationEmEquityData['latest'],
                            valuationEuropeEquityData['latest'],
                            valuationJapanEquityData['latest'],
                            valuationUkEquityData['latest'],
                            valuationUsEquityData['latest'],
                            valuationEmergyingFixedIncomeData['latest'],
                            valuationEuropeanFixedIncomeData['latest'],
                            valuationUsFixedIncomeData['latest'],
                        ],
                    },
                ],
            });
            this.msg= true;
            this.$emit("messageHistorical", this.msg);
        }
    },
    mounted(){
        this.riskMonitor();
        // Highcharts.seriesTypes.dumbbell.prototype.drawLegendSymbol = Highcharts.seriesTypes.line.prototype.drawLegendSymbol;
    }
});

</script>

<style>
.marketrisk-report07{
    background-color: #fff;
    padding: 20px !important;
    width: 792px;
    height: 1122px;
}

.marketrisk-report07 .bt{
    border-top: 2px solid #000 !important;
}

.marketrisk-report07 .main-text {
    font-size: 19px;
    font-weight: 900;
    margin: 30px 0px 15px 0px;
}

.marketrisk-report07 .sub-text {
    font-size: 12px;
}

.marketrisk-report07 .sub-text-small {
    font-size: 6px !important;
    color:  #808080;
}

.marketrisk-report07 .chart-button {
    width: 142px;
    height: 29px;
}
</style>
