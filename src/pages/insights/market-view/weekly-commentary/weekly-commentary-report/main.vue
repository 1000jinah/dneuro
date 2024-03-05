<template>
    <div id="weekreport">
        <div class="weekreport1" id="weekreport1">
            <v-row style="margin: 0px;">
                <v-col cols="12" class="top" style="padding: 0px;">
                    <img :src="img.logo" style="width:113px; height:32px; margin-left:0px; margin-bottom:10px;">
                    <div style="width:100%; height:15px; background-color:#000; margin-bottom:30px;"></div>
                    <p class="menu-title" style="margin-bottom: 0px;">
                        WEEKLY COMMENATRY
                    </p>
                    <p class="menu-sub-title">
                        June 21, 2021
                    </p>
                </v-col>
                <v-col cols="12" style="padding: 0px;">
                    <v-row style="padding:0px; margin:0px;">
                        <v-col cols="8" style="padding:0px;">
                            <p style="font-size:19px; padding-top: 19px; margin-bottom:8px; font-weight:900;">Thought of the Week</p>
                            <span style="font-size:12px;">
                                Stock-bond correlations remained positive in 2Q22, as both equities and fixed income delivered
                                negative returns through the end of the second quarter. Tighter monetary policy from the Federal
                                Reserve along with persistently high inflation, continued supply chain bottlenecks and the conflict
                                in Ukraine hurt investors across both asset classes. In contrast, com modities finished 1H22 up 18.4% due
                                to the surge in food and energy prices.
                            </span>
                            <p style="font-size: 8px; color: #fd3f01; margin-top:9.6px; margin-bottom:9px;">1H22 Asset Class Return</p>
                            <div>
                                <p style="font-size:2px; margin-bottom: 3px; margin-left:350px;">Total Return, U.S. Dollar</p>
                                <div id="column" style="width:95%;"></div>
                            </div>
                        </v-col>
                        <v-col cols="4" style="padding:0px; margin-top: 7.4px;">
                            <div style="width:240px; background-color:#000; padding:25px 12px 0px 12px; color:#fff; float:right;">
                                <p style="font-size:16px; color:#fff; font-weight:900; margin-bottom:10px;">The Week in Review</p>
                                <ul class="ul-style">
                                    <li style="font-size:10px;">Flash Mfg. PMI fell to 51.2 from 53.6</li>
                                    <li style="font-size:10px;">lash Svcs. PMI fell to 51.6 from 53.4</li>
                                    <li style="font-size:10px;">Existing home sales fell to 5.4m from 5.6m SAAR</li>
                                </ul>
                                <p style="font-size:16px; color:#fff; font-weight:900; margin-bottom:10px;">The Week Ahead</p>
                                <ul class="ul-style" style="padding-bottom:80px;">
                                    <li style="font-size:10px;">Headline and core PCE</li>
                                    <li style="font-size:10px;">ISM June PMIs</li>
                                    <li style="font-size:10px;">Case-Shiler Home Price Index</li>
                                </ul>
                            </div>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" style="padding: 0px;">
                    <p style="font-size:19px; margin-bottom:15px; font-weight:900;">Weekly Data Center</p>
                    <v-row style="margin:0px 0px 13px 0px; padding:0px;">
                        <v-col cols="8" style="padding: 0px 9px 0px 0px;">
                            <p style="font-size:6px; float:right; margin-bottom:4.5px;">Index Returns (%)</p>
                            <table class="report-table">
                                <colgroup>
                                    <col style="width: 50%" />
                                    <col style="width: 8%" />
                                    <col style="width: 8%" />
                                    <col style="width: 8%" />
                                    <col style="width: 8%" />
                                    <col style="width: 8%" />
                                    <col style="width: 10%" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>Equities</th>
                                        <th>Level</th>
                                        <th>1week</th>
                                        <th>QTD</th>
                                        <th>YTD</th>
                                        <th>1Year</th>
                                        <th>3-yr.Cum</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item, idx) in 7" :key="'keyRates' + idx">
                                        <td>S&P500</td>
                                        <td>3825</td>
                                        <td>-2.18</td>
                                        <td>1.06</td>
                                        <td>-19.11</td>
                                        <td>1.06</td>
                                        <td>-19.11</td>
                                    </tr>
                                </tbody>
                            </table>
                        </v-col>
                        <v-col cols="4" style="padding:0px;">
                            <p style="font-size:6px; float:right; margin-bottom:4.5px;">Index Characteristics</p>
                            <table class="report-table-1">
                                <colgroup>
                                    <col style="width: 25%" />
                                    <col style="width: 20%" />
                                    <col style="width: 25%" />
                                    <col style="width: 30%" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>NTM P/E</th>
                                        <th>P/B</th>
                                        <th>Div.Yid</th>
                                        <th>Mkt.Cap (bn)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item, idx) in 7" :key="'equities' + idx">
                                        <td>38.68</td>
                                        <td>35.68</td>
                                        <td>35.68</td>
                                        <td>35.68</td>
                                    </tr>
                                </tbody>
                            </table>
                        </v-col>
                    </v-row>
                    <v-row style="margin:0px 0px 13px 0px; padding:0px;">
                        <v-col cols="8" style="padding: 0px 9px 0px 0px;">
                            <table class="report-table">
                                <colgroup>
                                    <col style="width: 50%" />
                                    <col style="width: 8%" />
                                    <col style="width: 8%" />
                                    <col style="width: 8%" />
                                    <col style="width: 8%" />
                                    <col style="width: 8%" />
                                    <col style="width: 10%" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>Equities</th>
                                        <th>Level</th>
                                        <th>1week</th>
                                        <th>QTD</th>
                                        <th>YTD</th>
                                        <th>1Year</th>
                                        <th>3-yr.Cum</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item, idx) in 4" :key="'keyRates' + idx">
                                        <td>S&P500</td>
                                        <td>3825</td>
                                        <td>-2.18</td>
                                        <td>1.06</td>
                                        <td>-19.11</td>
                                        <td>1.06</td>
                                        <td>-19.11</td>
                                    </tr>
                                </tbody>
                            </table>
                        </v-col>
                        <v-col cols="4" style="padding:0px;">
                            <table class="report-table-2">
                                <colgroup>
                                    <col style="width: 30%" />
                                    <col style="width: 20%" />
                                    <col style="width: 20%" />
                                    <col style="width: 30%" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item, idx) in 4" :key="'equities' + idx">
                                        <td>38.68</td>
                                        <td>35.68</td>
                                        <td>35.68</td>
                                        <td>35.68</td>
                                    </tr>
                                </tbody>
                            </table>
                        </v-col>
                    </v-row>
                    <v-row style="margin:0px; padding:0px;">
                        <v-col cols="8" style="padding: 0px 9px 0px 0px;">
                            <table class="report-table">
                                <colgroup>
                                    <col style="width: 50%" />
                                    <col style="width: 8%" />
                                    <col style="width: 8%" />
                                    <col style="width: 8%" />
                                    <col style="width: 8%" />
                                    <col style="width: 8%" />
                                    <col style="width: 10%" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>Equities</th>
                                        <th>Level</th>
                                        <th>1week</th>
                                        <th>QTD</th>
                                        <th>YTD</th>
                                        <th>1Year</th>
                                        <th>3-yr.Cum</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item, idx) in 9" :key="'keyRates' + idx">
                                        <td>S&P500</td>
                                        <td>3825</td>
                                        <td>-2.18</td>
                                        <td>1.06</td>
                                        <td>-19.11</td>
                                        <td>1.06</td>
                                        <td>-19.11</td>
                                    </tr>
                                </tbody>
                            </table>
                        </v-col>
                        <v-col cols="4" style="padding:0px;">
                            <table class="report-table-2">
                                <colgroup>
                                    <col style="width: 30%" />
                                    <col style="width: 20%" />
                                    <col style="width: 20%" />
                                    <col style="width: 30%" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item, idx) in 9" :key="'equities' + idx">
                                        <td>38.68</td>
                                        <td>35.68</td>
                                        <td>35.68</td>
                                        <td>35.68</td>
                                    </tr>
                                </tbody>
                            </table>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </div>
        <div class="weekreport2" id="weekreport2">
            <v-row style="margin: 10px 10px 0px 10px; border-top:2px solid #000; padding:10px;">
                <v-col cols="4" style="padding:0px 47px 0px 0px; margin-top:10px">
                    <p style="font-size:19px; font-weight:900; margin-bottom:15px;">Style Return</p>
                    <p style="font-size:16px; padding-bottom:14.5px; border-bottom:1px solid #000; color:#fd3f01; font-weight:900;">1 Week</p>
                    <div id="heatMapWeek0"></div>
                    <p style="font-size:16px; padding-bottom:14.5px; border-bottom:1px solid #000; color:#fd3f01; font-weight:900;">YTD</p>
                    <div id="heatMapWeek1"></div>
                </v-col>
                <v-col cols="8" style="padding:0px; margin-top:10px; margin-bottom: 66px;">
                    <p style="font-size:19px; font-weight:900; margin-bottom:15px;">S&P 500 Sector Returns</p>
                    <p style="font-size:16px; padding-bottom:0px; margin-bottom:14.5px; color:#fd3f01; font-weight:900;">1 Week</p>
                    <div id="returnColumn0" style="margin-bottom:40px;"></div>
                    <p style="font-size:19px; font-weight:900; margin-bottom:15px;">S&P 500 Sector Returns</p>
                    <p style="font-size:16px; padding-bottom:0px; margin-bottom:14.5px; color:#fd3f01; font-weight:900;">YTD</p>
                    <div id="returnColumn1"></div>
                </v-col>
                <p style="font-size:19px; font-weight:900; margin-bottom: 15px;">Market Insights</p>
            </v-row>
            <v-row style="margin: 0px; background-color: #f3f3f3; padding:15px 4px 40px 15px; ">
                <v-col cols="12" style="padding:0px; font-size:8px; color:#808080; margin-bottom: 20px;">
                    Chart of the Week: Source: Bloomberg, FactSet, FTSE Russell, MSCI,NAREIT, Standard and Poor's, Dneuro. Thought of the week: Source: Bloomberg, FactSet, FTSE Russell,MSCI, NAREIT, Standard and Poor's, Dneuro.
                    Abbreviations: Cons. Sent.: University of Michigan Consumer Sentiment Index; CPI: Consumer Price Index; EIA: Energy Information Agency; FHFA HPI: - Federal Housing Finance Authority House Price Index; FOMC:
                    Federal Open Market Committee; GDP: gross domestic product; HPI: Home Price Index; HMI: Housing Market Index; ISM Mfg. Index: Institute for Supply Management Manufacturing Index; PCE: Personal consumption
                    expenditures; Philly Fed Survey: Philadelphia Fed Business Outlook Survey; PMI: Purchasing Managers' Manufacturing Index; PPI: Producer Price Index; SAAR: Seasonally Adjusted Annual Rate Equity Price Levels and
                    Returns: All returns represent total return for stated period. Index: S&P 500; provided by: Standard & Poor’s. Index: Dow Jones Industrial 30 (The Dow Jones is a price-weighted index composing of 30 widely-traded
                    blue chip stocks.) ; provided by: S&P Dow Jones Indices LLC. Index: Russell 2000; provided by: Russell Investments. Index: Russell 1000 Growth; provided by: Russell Investments. Index: Russell 1000 Value; provided by
                    Russell Investments. Index: MSCI – EAFE; provided by: MSCI – gross official pricing. Index: MSCI – EM; provided by: MSCI – gross official pricing. Index: Nasdaq Composite; provided by: NASDAQ OMX Group. MSCI EAFE is
                    a Morgan Stanley Capital International Index that is designed to measure the performance of the developed stock markets of Europe, Australasia, and the Far East.Bond Returns: All returns represent total return. Index:
                    Bloomberg US Aggregate; provided by: Bloomberg Capital. Index: Bloomberg Investment Grade Credit; provided by: Bloomberg Capital. Index: Bloomberg Municipal Bond 10 Yr; provided by: Blomberg Capital. Index:
                    Bloomberg Capital High Yield Index; provided by: Bloomberg Capital. Key Interest Rates: 2 Year Treasury, FactSet; 10 Year Treasury, FactSet; 30 Year Treasury, FactSet; 10 Year German Bund, FactSet. 3 Month LIBOR,
                    British Bankers’ Association; 3 Month EURIBOR, European Banking Federation; 6 Month CD, Federal Reserve; 30 Year Mortgage, Mortgage Bankers Association (MBA); Prime Rate: Federal Reserve. Commodities: Gold,
                    FactSet; Crude Oil (WTI), FactSet; Gasoline, FactSet; Natural Gas, FactSet; Silver, FactSet; Copper, FactSet; Corn, FactSet. Bloomberg Commodity Index (BBG Idx), Bloomberg Finance L.P. Currency: Dollar per Pound,
                    FactSet; Dollar per Euro, FactSet; Yen per Dollar, FactSet. S&P Index Characteristics: Dividend yield provided by FactSet Pricing database. Fwd. P/E is a bottom-up weighted harmonic average using First Call Mean
                    estimates for the "Next 12 Months" (NTM) period. Market cap is a bottom-up weighted average based on share information from Compustat and price information from FactSet's Pricing database as provided by Standard
                    & Poor's. MSCI Index Characteristics: Dividend yield provided by FactSet Pricing database. Fwd. P/E is a bottom-up weighted harmonic average for the "Next 12 Months" (NTM) period. Market cap is a bottomup weighted
                    average based on share information from MSCI and Price information from FactSet's Pricing database as provided by MSCI. Russell 1000 Value Index, Russell 1000 Growth Index, and Russell 2000 Index Characteristics:
                    Trailing P/E is provided directly by Russell. Fwd. P/E is a bottom-up weighted harmonic average using First Call Mean estimates for the "Next 12 Months" (NTM) period. Market cap is a bottom-up weighted average based
                    on share information from Compustat and price information from FactSet's Pricing database as provided by Russell. Sector Returns: Sectors are based on the GICS methodology. Return data are calculated by FactSet
                    using constituents and weights as provided by Standard & Poor’s. Returns are cumulative total return for stated period, including reinvestment of dividends. Style Returns: Style box returns based on Russell Indexes with
                    the exception of the Large-Cap Blend box, which reflects the S&P 500Index. All values are cumulative total return for stated period including the reinvestment of dividends. The Index used from L to R, top to bottom are:
                    Russell 1000 Value Index (Measures the performance of those Russell 1000 companies with lower price-tobook ratios and lower forecasted growth values), S&P 500 Index (Index represents the 500 Large Cap portion of
                    the stock market, and is comprised of 500 stocks as selected by the S&P Index Committee), Russell 1000 Growth Index (Measures the performance of those Russell 1000 companies with higher price-to-book ratios and
                    higher forecasted growth values), Russell Mid Cap Value Index (Measures the performance of those Russell Mid Cap companies with lower price-to-book ratios and lower forecasted growth values), Russell Mid Cap Index
                    (The Russell Midcap Index includes the smallest 800 securities in the Russell 1000), Russell Mid Cap Growth Index (Measures the performance of those Russell Mid Cap companies with higher price-to-book ratios and
                    higher forecasted growth values), Russell 2000 Value Index (Measures the performance of those Russell 2000 companies with lower price-to-book ratios and lower forecasted growth values), Russell 2000 Index (The
                    Russell 2000includes the smallest 2000 securities in the Russell 3000), Russell 2000 Growth Index (Measures the performance of those Russell 2000 companies with higher price-to-book ratios and higher forecasted
                    growth values).
                </v-col>
                <img :src="img.logo" style="width:113px; height:32px; margin-left:0px; margin-bottom:10px;">
            </v-row>
        </div>
    </div>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.8.0/html2pdf.bundle.min.js"></script>
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="https://code.highcharts.com/modules/export-data.js"></script>
<script src="https://code.highcharts.com/modules/accessibility.js"></script>
<script src="https://code.highcharts.com/modules/data.js"></script>
<script src="https://code.highcharts.com/stock/indicators/indicators.js"></script>
<script src="https://code.highcharts.com/highcharts-more.js"></script>

<script lang="ts">
import Vue from 'vue';
import logo from '@/assets/images/logo.png';
import moment from 'moment';
import html2pdf from 'html2pdf.js';
import store from '@/config/store';

import Highcharts from 'highcharts';
import pattern from 'highcharts/modules/pattern-fill';
import more from 'highcharts/highcharts-more.src';
import HighchartsHeatMap from 'highcharts/modules/heatmap.js';
require('highcharts/highcharts-more')(Highcharts);
HighchartsHeatMap(Highcharts);

pattern(Highcharts);
export default Vue.extend({
    components: {},
    data() {
        return {
            img: {
                logo,
            },
        };
    },

    methods: {
        async savePDF() {
            window.scrollTo(0, 0);

            let content = document.querySelector('#weekreport');
            const opt = {
                margin: 0,
                filename: 'weekly-report.pdf',
                enableLinks: false,
                pagebreak: {
                    avoid: ['tr'],
                    mode: ['css', 'legacy'],
                },
                image: { type: 'jpeg', quality: 1 },
                html2canvas: {
                    scrollY: 0,
                    scrollX: 0,
                    scale: 4,
                    dpi: 600,
                    letterRendering: true,
                    allowTaint: true,
                },
                jsPDF: {
                    orientation: 'portrait',
                    unit: 'mm',
                    format: 'a4',
                    compressPDF: true,
                },
            };

            html2pdf()
                .from(content)
                .set(opt)
                .toPdf()
                .get('pdf')
                .then((pdf: any) => {
                    const totalPages = pdf.internal.getNumberOfPages();
                    for (let i = 1; i < totalPages + 1; i += 1) {
                        pdf.setPage(i);
                        pdf.setFontSize(10);
                        pdf.setTextColor(0);
                        pdf.text(`-${i}-`, pdf.internal.pageSize.getWidth() / 2.25, pdf.internal.pageSize.getHeight() - 5);
                    }
                    pdf.deletePage(totalPages);
                })
                .save();
        },

        async pdf() {
            const self = this;
            const sleep = (delay: any) => new Promise((resolve) => setTimeout(resolve, delay));
            await sleep(1000);
            store.commit('app/SET_LOADING', true);
            this.$nextTick(async () => {
                await self.savePDF();
                await sleep(1000);
                await self.close();
            });
            store.commit('app/SET_LOADING', false);
        },

        async setColumnChart() {
            var category = ['Comdty.','Cash','U.S. Fixed \n Income','Global \n High Yield','EM \n Equity','DM \n Equity','REITs','U.S. \n Large Cap','U.S. \n Small Cap'];
            var plotlines = [];
            for(var i = 0; i < category.length; i++) {
                var pline = {
                    color: '#b3b3b3',
                    width: 1,
                    value: -0.5 + i,
                    label: {
                        verticalAlign: 'top',
                        style: {
                            fontWeight: 'bold',
                            color: '#000',
                            top:'0px',
                        },
                    },
                };
                plotlines.push(pline);
            }

            var lastLine = {
                color: '#b3b3b3',
                width: 1,
                value: category.length - 0.5,
            };
            plotlines.push(lastLine);

            Highcharts.chart('column', {
                chart: {
                    type: 'column',
                    events: {
                        render: function () {
                            const chart = this,
                            startX = 0,
                            startY = 0,
                            endX = chart.chartWidth,
                            endY = startY;

                            if (!chart.customLine) {
                                chart.customLine = chart.renderer
                                .path(['M', startX, startY, 'L', endX, endY])
                                .attr({
                                'stroke-width': 4,
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
                    height: 130,
                    animation: false,
                },
                title: {
                    text: '',
                },
                credits: {
                    enabled: false,
                },
                xAxis: {
                    categories: category,
                    labels: {
                        style: {
                            color:'#000',
                            fontSize: '4px'
                        },
                        rotation: 0,
                        useHTML:true,
                        formatter:function(){
                            return '<div style="text-align:center; font-size:4px;">' + this.value.toString().replace('\n','<br/>') + '</diV>'
                        },
                    },
                    lineColor: '#000',
                    lineWidth: 2,
                    plotLines: plotlines,
                },
                yAxis: {
                    title: {
                        enabled: false,
                    },
                    gridLineColor: 'transparent',
                    plotLines: [
                        {
                            color: '#000',
                            width: 1,
                            value: 0,
                        },
                    ],
                    labels: {
                        enabled: true,
                        style: {
                            color:'#b3b3b3',
                            fontSize: '4px'
                        },
                        format: '{value:,.0f}%',
                    },
                    lineColor: '#b3b3b3',
                    lineWidth: 1,
                },
                accessibility: {
                    point: {
                        valueSuffix: '%',
                    },
                },
                tooltip: {
                    enabled: false,
                },
                legend: {
                    enabled: false,
                    align: 'right',
                    verticalAlign: 'top',
                    y: -15,
                },
                plotOptions: {
                    column: {
                        borderColor: '#000000',
                        dataLabels: {
                            enabled: true,
                            style: {
                                fontSize: '4px',
                            },
                            format: '{y}%',
                        },
                    },
                    series: {
                        pointWidth: 10,
                        states: {
                            hover: {
                                enabled: false,
                            },
                        },
                    },
                },
                series: [
                    {
                        name: 'YTD',
                        data: [5, 3, 4, 7, 2, 5, 3, -4, 7],
                        color: '#ff754b'
                    },
                ]
            });
        },

        async setHeatMapchart() {
            var color = ['#fd3f01', '#fec90e'];
            var fontColor = ['#fff', '#000'];
            for(let i = 0; i < 2; i++){
                Highcharts.chart('heatMapWeek' + i, {
                    chart: {
                        type: 'heatmap',
                        height:200,
                        animation: false,
                    },
                    title: {
                        text: '',
                    },
                    credits: { enabled: false },
                    xAxis: {
                        opposite: true,
                        categories: ['V', 'B', 'G'],
                        lineWidth: 0,
                        labels: {
                            style: {
                                color:'#b3b3b3',
                                fontSize: '10px'
                            },
                        },
                    },
                    yAxis: {
                        gridLineColor: 'transparent',
                        categories: ['S', 'M', 'L'],
                        title: null,
                        reversed: false,
                        labels: {
                            style: {
                                color:'#b3b3b3',
                                fontSize: '10px'
                            },
                        },
                    },
                    legend: {
                        enabled: false,
                    },
                    tooltip: {
                        enabled: false,
                    },
                    plotOptions: {
                        series: {
                            dataLabels: {
                                enabled: true,
                                style: {
                                    color: fontColor[i],
                                    fontSize: '10px',
                                    textOutline: 'none',
                                },
                            },
                            rowsize: 0.8,
                            colsize: 0.8,
                            borderColor: '#000000',
                            borderWidth: 1,
                            states: {
                                inactive: {
                                    opacity: 1
                                },
                                hover: {
                                    enabled: false,
                                }
                            },
                        }
                    },
                    series: [
                        {
                            name: '1 Week',
                            pointPadding: 1,
                            color: color[i],
                            dataLabels: {
                                style: {
                                    color: fontColor[i],
                                    fontSize: '10px'
                                },
                            },
                            data: [
                                [0, 0, 4],
                                [0, 1, 4.9],
                                [0, 2, 5.3],
                                [1, 0, 6],
                                [1, 1,6],
                                [1, 2, 6.5],
                                [2, 0, 8.4],
                                [2, 1, 8.6],
                                [2, 2, 7.9],
                            ]
                        }
                    ],
                });
            }
        },

        async setReturnColumnChart() {
            var category = ['Utilities.','Energy','Health \n Care','Consumer \n Staples','Real \n Estate','Industrials','Financials'];
            var plotlines = [];
            for(var i = 0; i < category.length + 1; i++) {
                var pline = {
                    color: '#b3b3b3',
                    width: 1,
                    value: -0.5 + i,
                };
                plotlines.push(pline);
            }

            for(let i = 0; i < 2; i += 1) {
                Highcharts.chart('returnColumn' + i, {
                    chart: {
                        type: 'column',
                        events: {
                            render: function () {
                                const chart = this,
                                startX = 0,
                                startY = 0,
                                endX = chart.chartWidth,
                                endY = startY;

                                if (!chart.customLine) {
                                    chart.customLine = chart.renderer
                                    .path(['M', startX, startY, 'L', endX, endY])
                                    .attr({
                                    'stroke-width': 2,
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
                        height: 120,
                        animation: false,
                    },
                    title: {
                        text: '',
                    },
                    credits: {
                        enabled: false,
                    },
                    xAxis: {
                        categories: category,
                        labels: {
                            style: {
                                color:'#000',
                                fontSize: '10px',
                            },
                            useHTML:true,
                            formatter:function(){
                                return '<div style="text-align:center;">' + this.value.toString().replace('\n','<br/>') + '</diV>'
                            },
                        },
                        lineColor: '#000',
                        lineWidth: 1,
                        plotLines: plotlines,
                    },
                    yAxis: {
                        title: {
                            enabled: false,
                        },
                        gridLineColor: 'transparent',
                        plotLines: [
                            {
                                color: '#000',
                                width: 1,
                                value: 0,
                            },
                        ],
                        labels: {
                            enabled: true,
                            style: {
                                color:'#b3b3b3',
                                fontSize: '10px'
                            },
                            format: '{value:,.0f}%',
                        },
                        lineColor: '#b3b3b3',
                        lineWidth: 1,
                    },
                    accessibility: {
                        point: {
                            valueSuffix: '%',
                        },
                    },
                    legend: {
                        enabled: false,
                        align: 'right',
                        verticalAlign: 'top',
                        y: -15,
                    },
                    tooltip: {
                        enabled: false,
                    },
                    plotOptions: {
                        column: {
                            borderColor: '#000000',
                            dataLabels: {
                                enabled: true,
                                style: {
                                    fontSize: '10px',
                                },
                                format: '{y}%',
                            },
                        },
                        series: {
                            pointWidth: 20,
                        },
                    },
                    series: [
                        {
                            name: 'YTD',
                            data: [5, 3, -4, 7, 2, 5, 3],
                            color: '#ff754b'
                        },
                    ]
                });
            }
        },

        // test: async function(){
        //     store.commit("app/SET_LOADING", true);
        //     await this.setColumnChart();
        //     await this.setHeatMapchart();
        //     await this.setReturnColumnChart();
        //     this.$nextTick(async function() {
        //         await this.savePDF();
        //     });
        //     store.commit('app/SET_LOADING', false);
        // },
        close: function () {
            window.parent.postMessage({ success: 'success' }, '*');
        },

        async setChart() {
            this.setColumnChart();
            this.setHeatMapchart();
            this.setReturnColumnChart();
        }
    },

    async mounted() {
        await this.setChart()
        await this.pdf();
    },

    watch: {},
});
</script>

<style>
.weekreport1{
    background-color: #fff;
    width: 210mm;
    min-height: 297mm;
    padding: 10px;
}

.weekreport1 .top {
    width: 100%;
    background-color: #fff;
}

.weekreport1 .menu-title {
    font-size: 46px !important;
    font-weight: 900;
    color: #000;
    line-height: 1.09;
    margin-bottom: 10px;
}

.weekreport1 .menu-sub-title {
    font-size: 22px !important;
    font-weight: normal;
    color: #000;
    padding-bottom: 30px;
    border-bottom: 2px solid #000;
    margin-bottom: 0px;
}

.weekreport1 .middle {
    width: 100%;
    object-fit: contain;
    padding-top: 8px;
    background-color: #fff;
}

.weekreport1 .ul-style {
    color:#fff;
    font-size:10px;
    margin-bottom: 19px;
    padding-left:10px;
}

.weekreport1 table {
    border-collapse: collapse;
    font-size: 10px;
    width: 100%;
}

.weekreport1 .font-size-2 {
    font-size: 2px;
}

/* table */
.weekreport1 .report-table th:first-child {
    text-align: left;
    padding-left:0px;
}

.weekreport1 .report-table td:first-child {
    text-align: left;
    color: #000;
    font-weight: bold;
    padding-left:0px;
}

.weekreport1 .report-table th {
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    text-align: right;
    padding: 4.5px 0px;
}

.weekreport1 .report-table td {
    border-bottom: 1px solid #b3b3b3;
    text-align: right;
    color: #808080;
    padding: 1.5px 0px;
}

.weekreport1 .report-table-1 th:first-child {
    text-align: left;
    padding-left:0px;
}

.weekreport1 .report-table-1 th:last-child {
    text-align: right;
    padding:4px 0px;
}

.weekreport1 .report-table-1 th {
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    text-align: right;
    padding: 4.5px 0px;
}

.weekreport1 .report-table-1 td {
    border-bottom: 1px solid #b3b3b3;
    text-align: right;
    padding: 1.5px 0px;
    color: #808080;
}

.weekreport1 .report-table-2 th {
    text-align: right;
    padding: 13px 0px;
}

.weekreport1 .report-table-2 td {
    border-bottom: 1px solid #b3b3b3;
    text-align: right;
    color: #808080;
    padding: 1.5px 0px;
}

.weekreport2{
    background-color: #fff;
    width: 210mm;
    min-height: 297mm;
}

@media screen and (max-width: 1263px) {
}

@media screen and (max-width: 959px) {
}
</style>
