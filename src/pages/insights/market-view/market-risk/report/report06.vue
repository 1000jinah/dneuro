<template>
    <div class="marketrisk-report06">
        <v-row class="ma-0 bt">
            <v-col class="pa-0">
                <p class="main-text">Persistence</p>
                <v-row class="ma-0 pb-8 sub-text">
                    <v-col cols="6" class="pr-5 pl-0 pb-0 pt-0">
                        <p>Sometimes asset returns move far from where they started on very low volatility.
When asset returns trend for an extended period, standard risk measures such as
volatility fail to capture the risk associated with these moves. Monitoring trending
market drivers – such as size and value, or oil prices – make it possible to gauge this
risk over time.</p>
                        <p>The persistence chart shows the extent to which these market drivers explain one-
year price momentum in global equities. For instance, it was the oil price that drove
the equity market when crude prices plunged in 2015-2016 and again last year
when oil prices went negative (see the green bars in the chart). Since 2018, it has
been the systematic underperformance of value stocks and lately the
outperformance of low-volatility stocks. </p>
                    </v-col>
                    <v-col cols="6" class="pl-5 sub-text">
                        <p>Higher overall persistence risk – when the bars in the chart are higher – shows that
there is a greater amount of momentum behind a certain theme and the potential
for a swifter fall in equity markets if that investment theme loses popularity. Overall
persistence risk has dipped during the course of 2021. Value and volatility have
been the main drivers of global equities over the last 12 months, though both fell in
significance in the third quarter and are now some way below pre-Covid levels.
Value is not nearly as much of a drag on performance as before. Oil grew in
significance in September, although the size of the increase pales in comparison to
the one experienced when oil prices turned negative in April 2020. Overall, the lack
of a strong driver suggests less risk that one of these drivers could power a sharp
reversal in risk assets.</p>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row class="ma-0 bt">
            <v-col class="pa-0">
                <p class="main-text">Market drivers of global equity performance</p>
                <p class="sub-text mb-0">Persistence in market themes, 2011-2021 </p>
            </v-col>
            <v-col class="pa-0" cols="12">
                <figure class="highcharts-figure">
                    <div id="areaChart"></div>
                </figure>
            </v-col>
            <v-col class="pa-0">
                <p class="sub-text">Index data provided for illustrative purposes only. Indices are unmanaged and it is not possible to invest directly in an index</p>
                <p class="sub-text-small">Source: BlackRock Risk and Quantitative Analysis and BlackRock Investment Institute, with data from Bloomberg and Refinitiv Datastream, September 2021. Notes: Correlation is based on a short-term (40 day) half-life using 252 days of data. Indexes used are the Bloomberg Barclays
World Govt Inflation Linked bonds TR USD for index-linked debt; Citi WGBI 7-10yr local currency for DM gov debt; Bloomberg Barclays Global Aggregate Corporate Total Return Index USD for IG debt; J.P. Morgan EMBI Plus Composite USD for EM gov debt; Bloomberg Barclays U.S.
Corporate High Yield Total Return Index for HY debt; MSCI World Gross Total Return Index local currency for DM equity; MSCIDaily TR Gross Small Cap World USD for DM small cap equity; MSCI Daily TR Gross EM USD for EM equity. For private markets, we use the S&P Listed Private
Equity Total Return Index USD for listed private equity, the S&P Global Infrastructure Total Return USD for Infrastructure and the FTSE EPRA NAREIT Developed TR USD for property. For commodities, we use the Bloomberg Commodities Index. The upper diagonal shows the current
cross-asset correlation based on 252 days of data, with more weight put on the last 40 days because that timeframe is consistent with our models for measuring short-term risk. The closer the number is to zero (either positive or negative), the weaker the correlation
(see numbers in green). A higher number (positive or negative) indicates a strong correlation between asset classes (see the numbers in dark red). The lower diagonal is the percentile rank of this correlation over a five-year period. A green percentage number indicates that the current
correlation is close to its five-year average</p>
            </v-col>
        </v-row>
        <v-row class="ma-0">
            <v-col cols="12" class="pa-0 d-flex justify-end">
                <img class="chart-button" :src="img.chartButton"/>
            </v-col>
        </v-row>
    </div>
</template>

<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/highcharts-more.js"></script>
<script lang="ts">
import Vue from 'vue';
import chartButton from '@/assets/images/view-interactive-chart-button.png';

import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';

HighchartsMore(Highcharts);
export default Vue.extend({
    data() {
        return {
            img:{
                chartButton,
            }
        };
    },
    watch: {
    },
    methods: {
    },
    mounted(){
        const date = new Date(2018, 0, 1);
        const dates = [];
        const lastYear = 2022;

        let data1 = [];
        let data2 = [];
        let data3 = [];

        while (date.getFullYear() <= lastYear) {
            dates.push(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));

            data1.push(Math.floor(Math.random() * 5) + 1);
            data2.push(Math.floor(Math.random() * 5) + 1);
            data3.push(Math.floor(Math.random() * 5) + 1);

            date.setDate(date.getDate() + 1);
        }

        Highcharts.chart('areaChart', {
            chart: {
                type: 'area',
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
                        chart.customLine = chart.renderer.path(['M', startX, startY, 'L', endX, endY]).attr({
                            'stroke-width': 2,
                            stroke: 'black',
                        }).add();
                        } else {
                        chart.customLine.attr({
                            d: ['M', startX, startY, 'L', endX, endY]
                        });
                        }
                    }
                },
            },
            credits: {enabled: false}, // 하단 highchart.com 글씨 삭제
            exporting: { // 상단 context menu 제거
                enabled: false
            },
            legend: {
                align: 'right',
                    verticalAlign: 'top',
                enabled: true,
                margin: 40,
                itemStyle: {
                    fontSize: '13px',
                    fontWeight: 'normal',
                    fontFamily: 'BLKFort-Book, Arial, Sans-Serif',
                    color: '#000000',
                },
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            accessibility: {
                point: {
                    valueDescriptionFormat: '{index}. {point.category}, {point.percentage:.1f}%.'
                }
            },
            xAxis: {
                type: 'datetime',
                categories: dates,
                lineColor: '#000000',
                tickColor: '#000000',
                tickmarkPlacement: 'on',
                tickInterval: 1,
                allowDecimals: false,
                labels: {
                    formatter() {
                        const chart = this.chart,
                        date = new Date(this.value);

                        if (date.getFullYear() !== chart.lastYear) {
                        chart.lastYear = date.getFullYear();
                        return Highcharts.dateFormat('%Y', this.value);
                        }
                    },
                },
            },
            yAxis: [{
                lineWidth: 0,
                gridLineColor: '#000000',
                title: {
                    text: 'VIX Index',
                    style: {
                        fontSize: '13px',
                        color: '#000000',
                    },
                },
                labels: {
                formatter: function() {
                    //Add percent sign to first value
                    if (this.isLast == true) {
                        return this.value + "%";
                    } else {
                        return this.value;
                    }
                }
                }
            }],
            tooltip: {
                // shared: true,
                // crosshairs: true,
                xDateFormat: '%b.%d, %Y ',
                valueSuffix: '%',
                valueDecimals: 1,
                style: {
                fontSize: '13.5px',
                color: '#000000'
                }
            },
            plotOptions: {
                animation: false,
                area: {
                    stacking: 'percent',
                    lineColor: '#000000',
                    lineWidth: 1,
                    marker: {
                        enabled: false
                    },
                },
            },
            series: [{
                name: 'Oceania',
                data: data1,
                color: '#ff754b',
            }, {
                name: 'Asia',
                data: data2,
                color: '#FF8000',
            }, {
                name: 'Africa',
                data: data3,
                color: '#2e9875',
            }, ]
        });
    }
});

</script>

<style>
.marketrisk-report06{
    background-color: #fff;
    padding: 20px !important;
    width: 792px;
    height: 1122px;
}

.marketrisk-report06 .bt{
    border-top: 2px solid #000 !important;
}

.marketrisk-report06 .main-text {
    font-size: 19px;
    font-weight: 900;
    margin: 30px 0px 15px 0px;
}

.marketrisk-report06 .sub-text {
    font-size: 12px;
}

.marketrisk-report06 .sub-text-small {
    font-size: 6px !important;
    color:  #808080;
}

.marketrisk-report06 .chart-button {
    width: 142px;
    height: 29px;
}
</style>
