<template>
    <div class="marketrisk-report05" style="background-color: #fff; padding: 40px 20px 20px 20px !important; width: 792px; height: 1122px;">
        <v-row style="border-top: 2px solid #000 !important; margin: 0px;">
            <v-col style="padding: 0px;">
                <p style="font-size: 19px; font-weight: 900; margin: 30px 0px 15px 0px;">Regime</p>
                <v-row style="margin: 0px; padding-bottom: 32px; font-size: 12px;">
                    <v-col cols="6" style="padding: 0px 20px 0px 0px;">
                        <p>The regime map is a two-dimensional representation of the market risk
environment in which we plot the market risk sentiment and the strength of asset
correlations. Positive risk sentiment implies that, in broad terms, riskier assets are
outperforming assets perceived as lower risk, such as government bonds.
Negative risk sentiment implies that riskier assets are underperforming low-risk
assets. Increasing correlations might suggest a market-wide response to a common
underlying theme, such as the 2013 “taper tantrum.”</p>
                        <p>The possibility of rapid changes in short-term asset correlations can make it difficult
for investors to ensure portfolios are appropriately positioned for the immediate
future. When there is greater correlation among assets (represented by the right
side of the regime map), it is harder to diversify and risk is greater.
When asset prices are less correlated (the left side of the map), investors have more
opportunities to diversify their portfolios.</p>
                    </v-col>
                    <v-col cols="6" style="padding: 0px 0px 0px 20px; font-size: 12px;">
                        <p style="padding-bottom: 40px;">When the location of both series – risk sentiment and asset correlation – on the map
is relatively stable, forecasting risk and return is easier. But when market conditions
are volatile and the location of both series varies rapidly, anticipating risk and return
can be significantly more challenging. The map shows we remain in an environment
of lower asset correlation and high risk sentiment overall, so investors are being
rewarded for taking risk. This is in line our pro-risk stance on a tactical horizon,
which is supported by a broadening global economic restart and still negative real
interest rates. See our Global Outlook published in September 2021.</p>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row style="border-top: 2px solid #000 !important; margin: 0px;">
            <v-col style="padding: 0px;">
                <p style="font-size: 19px; font-weight: 900; margin: 30px 0px 15px 0px;">Concentration and risk appetite</p>
                <p style="margin-bottom: 0px; font-size: 12px;">Market risk sentiment and strength of asset correlations 2020-2021</p>
            </v-col>
            <v-col style="padding: 0px;" cols="12">
                <figure class="highcharts-figure">
                    <div id="spline"></div>
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
            data:{
                spline: {
                    correlation: [],
                    riskSentiment: [],
                    correlationDate: [],
                    date: [],
                },
                apiData:{
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
            },
            chart: {
                boxPlotFirst: 'test',
                splineProtoType: null as any,
            },
        };
    },
    watch: {
    },
    methods: {
        async riskMonitor() {
            this.data.apiData = this.val;

            this.data.spline.date = [];
            var i = 0,
                j = 0,
                k = 0,
                r = 0;
            const correlation = this.data.apiData.regime.data.trend.asset_correlation;
            const riskSentiment = this.data.apiData.regime.data.trend.risk_sentiment;

            var riskSentimentData = Object.keys(correlation).sort();
            var correlationData = Object.keys(correlation).sort();
            var correlationDateList = [],
                correlationDate = [],
                correlationTotal = [];

            var f = 0,
                name = {},
                visible = false,
                data = new Date(),
                nowYear = data.getFullYear(),
                aYearAgo = data.getFullYear() -1,
                correlationDateList = [aYearAgo, nowYear],
                chartColor = ['#ff754b', '#2e9875'];
            for (f = 0; f < correlationDateList.length; f++) {
                var data = [];
                for (i = 0; i < correlationData.length; i++) {
                    const correlationDataList = correlationData[i];
                    const riskDataList = riskSentimentData[i];
                    let correlationDateVal = correlationData[i].replace('T', '').replace(/\-/g, '').split(':')[0];
                    let correlationVal = correlation[correlationDataList] as any;
                    let riskVal = riskSentiment[riskDataList] as any;
                    var dataYear = correlationDataList.substr(0, 4);
                    if (correlationDateList[f] == dataYear) {
                        data.push({ x: correlationVal, y: riskVal, z: correlationData[i] });
                    }
                }

                if (correlationDateList[f] == correlationDateList.lastItem || correlationDateList[f] == correlationDateList.lastItem - 1) {
                    console.log(correlationDateList.lastItem)
                    visible = true;
                }
                var objec = { index: f, name: correlationDateList[f], data: data, visible: visible, color: chartColor[f], customShowRectSymbol: true};
                this.data.spline.date.push(objec);
            }

            const splineSize = document.getElementsByName('spline') as any;
            var splineWidth = 750,
                splineHeight = 333;

            var SplineSeries = Highcharts.seriesTypes.spline;

            this.chart.splineProtoType = SplineSeries.prototype.drawGraph;

            // override the drawLine method
            var splineDrawGraph = SplineSeries.prototype.drawGraph;

            SplineSeries.prototype.drawGraph = function () {
                var arrowLength = 10,
                    arrowWidth = 6,
                    series = this,
                    segments = series.points,
                    path = [];

                if (segments.length > 0) {
                    let lastPoint = segments[segments.length - 1];
                    let nextLastPoint = segments[segments.length - 2];
                    let angle = Math.atan((lastPoint.plotX - nextLastPoint.plotX) / (lastPoint.plotY - nextLastPoint.plotY));

                    if (angle < 0) {
                        angle = Math.PI + angle;
                    }

                    // call the original method
                    splineDrawGraph.apply(series, arguments);

                    // last point
                    path.push('M', lastPoint.plotX, lastPoint.plotY);
                    if (lastPoint.plotX > nextLastPoint.plotX) {
                        // to the right
                        path.push('L', lastPoint.plotX + arrowWidth * Math.cos(angle), lastPoint.plotY - arrowWidth * Math.sin(angle));
                        path.push(lastPoint.plotX + arrowLength * Math.sin(angle), lastPoint.plotY + arrowLength * Math.cos(angle));
                        path.push(lastPoint.plotX - arrowWidth * Math.cos(angle), lastPoint.plotY + arrowWidth * Math.sin(angle), 'Z');
                    } else {
                        // to the left
                        path.push('L', lastPoint.plotX - arrowWidth * Math.cos(angle), lastPoint.plotY + arrowWidth * Math.sin(angle));
                        path.push(lastPoint.plotX - arrowLength * Math.sin(angle), lastPoint.plotY - arrowLength * Math.cos(angle));
                        path.push(lastPoint.plotX + arrowWidth * Math.cos(angle), lastPoint.plotY - arrowWidth * Math.sin(angle), 'Z');
                    }

                    series.chart.renderer
                        .path(path)
                        .attr({
                            fill: series.color,
                        })
                        .add(series.group);
                }
            };
            (function (H) {
                H.wrap(H.seriesTypes.line.prototype, 'drawLegendSymbol', function (proceed, stackingParam) {
                    if (this.userOptions.customShowRectSymbol == true) {
                        H.seriesTypes.column.prototype.drawLegendSymbol.apply(this, Array.prototype.slice.call(arguments, 1));
                    } else {
                        proceed.apply(this, Array.prototype.slice.call(arguments, 1));
                    }
                });
            })(Highcharts);
            Highcharts.chart('spline', {
                chart: {
                    type: 'spline',
                    animation: false,
                    height: splineHeight,
                    events: {
                        load: function () {
                            const chart = this,
                                offset = 75,
                                topMargin = 20;
                            chart.renderer
                                .text('More +', chart.chartWidth - offset, chart.chartHeight + topMargin - offset + 50)
                                .css({
                                    color: 'orange',
                                    fontWeight: 'bold',
                                })
                                .add();
                            chart.renderer
                                .text('- Less', offset - 65, chart.chartHeight + topMargin - 40)
                                .attr({
                                    rotation: -90,
                                })
                                .css({
                                    color: 'orange',
                                    fontWeight: 'bold',
                                })
                                .add();
                            chart.renderer
                                .text('- Less', offset - 65, chart.chartHeight + topMargin - offset + 50)
                                .css({
                                    color: 'green',
                                    fontWeight: 'bold',
                                })
                                .add();
                            chart.renderer
                                .text('More +', offset - 65, offset + topMargin)
                                .attr({
                                    rotation: -90,
                                })
                                .css({
                                    color: 'green',
                                    fontWeight: 'bold',
                                })
                                .add();

                            const startX = 0,
                                startY = 75,
                                endX = chart.chartWidth,
                                endY = startY,
                                yAxisZero = chart.yAxis[0].translate(0);

                            if (!chart.customLine) {
                                chart.customLine = chart.renderer
                                    .path(['M', startX, startY - 30, 'L', endX, endY - 30])
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
                credits: {
                    enabled: false,
                }, // 하단 highchart.com 글씨 삭제
                exporting: {
                    // 상단 context menu 제거
                    enabled: false,
                },
                title: {
                    text: '',
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
                plotOptions: {
                    series: {
                        animation: false
                    },
                    spline: {
                        events: {
                            legendItemClick: function (e) {
                                const chart = this.chart;
                                const chartClick = e.target.chart,
                                    index = e.target.index,
                                    series = chartClick.series[index];
                                if (!series.visible) {
                                    const options = series.options;
                                    series.remove();
                                    options.visible = !options.visible;
                                    chartClick.addSeries(options);
                                    return false;
                                }
                            },
                        },
                        states: {
                            inactive: {
                                opacity: 1,
                            },
                        },
                        dataLabels: {
                            enabled: true,
                            align: 'left',
                            useHTML: true,
                            y: 15,
                            x: -5,
                            allowOverlap: true,
                            formatter: function () {
                                if (this.series.data[this.series.data.length - 1].visible == true) {
                                    if (this.x === this.series.data[this.series.data.length - 1].category) {
                                        return '<p style="color:' + this.series.data[this.series.data.length - 1].color + '; font-size: 10px; font-weight: 900;">' + this.series.name + '</p>';
                                    }
                                }
                                return null;
                            },
                        },
                        marker: {
                            enabled: false,
                        },
                    },
                    scatter: {
                        dataLabels: {
                            enabled: true,
                            y: -5,
                            formatter: function () {
                                return this.key;
                            },
                        },
                    },
                },
                tooltip: {
                    formatter: function () {
                        const date = new Date(this.point.z);
                        return Highcharts.dateFormat('%b %d, %Y', Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
                    },
                },
                xAxis: {
                    type: 'datetime',
                    gridLineWidth: 0,
                    min: -3,
                    max: 3,
                    lineWidth: 1,
                    lineColor: '#b3b3b3',
                    offset: -1 * (0.4 * splineHeight),
                    labels: {
                        enabled: false,
                    },
                    title: {
                        text: 'Asset correlation',
                        y: 0.4 * splineHeight,
                        x: 5,
                        style: {
                            fontSize: '10px',
                            fontWeight: 'bold',
                        },
                    },
                },
                yAxis: {
                    gridLineWidth: 0,
                    min: -3,
                    max: 3,
                    lineWidth: 1,
                    lineColor: '#b3b3b3',
                    offset: -1 * (splineWidth / 2) +13,
                    labels: {
                        enabled: false,
                    },
                    title: {
                        text: 'Risk sentiment',
                        x: -1 * (splineWidth / 2) +13,
                        y: 1,
                        style: {
                            fontSize: '10px',
                            fontWeight: 'bold',
                        },
                    },
                },
                series: this.data.spline.date,
            });
            SplineSeries.prototype.drawGraph = this.chart.splineProtoType;
            this.msg= true;
            this.$emit("messagConcentration", this.msg);
        },
    },
    mounted(){
        this.riskMonitor();
    }
});

</script>

<style>
.marketrisk-report05{
    background-color: #fff;
    padding: 20px !important;
    width: 792px;
    height: 1122px;
}

.marketrisk-report05 .bt{
    border-top: 2px solid #000 !important;
}

.marketrisk-report05 .main-text {
    font-size: 19px;
    font-weight: 900;
    margin: 30px 0px 15px 0px;
}

.marketrisk-report05 .sub-text {
    font-size: 12px;
}

.marketrisk-report05 .sub-text-small {
    font-size: 6px !important;
    color:  #808080;
}

.marketrisk-report05 .chart-button {
    width: 142px;
    height: 29px;
}
</style>
