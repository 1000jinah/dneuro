<template>
    <div class="market-risk-monitor" id="market-risk-monitor">
        <iframe id="insightReport" width="0" height="0" frameborder="0"></iframe>
        <v-row class="ma-0">
            <v-row class="ma-0 bg-white">
                <!-- <div class=""> -->
                <v-col cols="12" class="top">
                    <div class="wrapper-1920">
                        <div class="menu-title-line"></div>
                        <p class="menu-title">Market Risk Monitor</p>
                        <p class="menu-sub-title">Investment Institute | {{ this.data.titleMonth }} {{ this.data.titleYear }}</p>
                        <div class="d-flex">
                            <button class="menu-title-button" @click="$router.push({ path: '/insights/market-view/market-risk/list' })">Dneuro Investment Institute</button>
                            <div class="d-flex justify-center" style="align-items: center">
                                <U class="menu-title-button-print pr-2" @click="reportPdf()">Print Report</U>
                                <img :src="img.printreport" class="justify-center align-center" style="width: 21.4px; height: 19px" />
                            </div>
                        </div>
                    </div>
                </v-col>
                <!-- </div> -->
            </v-row>
            <v-row class="middle pa-0 ma-0">
                <div class="wrapper-1920">
                    <div id="middle-main-text">
                        <p class="middle-main-text">{{ data.apiData.summary.title }}</p>
                    </div>
                    <div>
                        <ul>
                            <template v-for="(data, idx) in data.apiData.summary.body">
                                <li class="middle-sub-text" :key="idx">{{ data }}</li>
                            </template>
                        </ul>
                        <U class="middle-fotter-text">Read More</U>
                    </div>
                </div>
            </v-row>
            <v-row class="tab-content ma-0 pa-0">
                <div class="wrapper-1920">
                    <v-col cols="12" class="pa-0 border-gray-bottom">
                        <v-tabs class="ai-tabs" v-model="data.tabValue" show-arrows>
                            <v-tab v-for="tab of tabs" :value="tab.vlaue" :key="tab.value" class="ai-tab" @click="tabValue(tab.value)" style="text-transform: capitalize;">
                                {{ tab.name }}
                            </v-tab>
                        </v-tabs>
                    </v-col>
                    <!-- 탭1 -->
                    <v-row v-if="data.tabValue == 0" class="tab-desc">
                        <v-col cols="12" class="pa-0 ma-3">
                            <span class="font-color-orange font-size-21">Introduction</span>
                        </v-col>
                        <v-col cols="12" class="pa-0 ma-3">
                            <p class="font-size-21 mb-10">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p class="font-size-21 mb-10">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p class="font-size-21 mb-10">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur.
                            </p>
                        </v-col>
                        <v-col cols="12" class="py-0">
                            <div class="d-flex justify-end pb-10p">
                                <span class="mr-6 font-size-14"><img :src="img.insightHighIcon" style="cursor: pointer; margin-right: 5px; width: 18px; height: 12px" />High / Rising</span>
                                <span class="mr-6 font-size-14"
                                    ><img :src="img.insightNeutralIcon" style="cursor: pointer; margin-right: 5px; width: 18px; height: 6px; margin-bottom: 2px" />Neutral / Unchanged</span
                                >
                                <span class="font-size-14"><img :src="img.insightLowIcon" style="cursor: pointer; margin-right: 5px; width: 18px; height: 12px; margin-top: 2px" />Low / Falling</span>
                            </div>
                            <table style="width: 100%">
                                <thead>
                                    <tr style="text-align: left">
                                        <th style="width: 50%">Element of risk</th>
                                        <th style="width: 38%" class="text-left">Level</th>
                                        <th style="width: 12%" class="text-left">Direction of change</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="text-left">Volatility</td>
                                        <td class="text-left">
                                            <img
                                                :src="
                                                    data.apiData.volatility.data.level == 0
                                                        ? img.insightNeutralIcon
                                                        : data.apiData.volatility.data.level >= 1
                                                        ? img.insightHighIcon
                                                        : data.apiData.volatility.data.level <= -1
                                                        ? img.insightLowIcon
                                                        : ''
                                                "
                                                style="cursor: pointer"
                                            />
                                        </td>
                                        <td class="text-left">
                                            <img
                                                :src="
                                                    data.apiData.volatility.data.direction == 0
                                                        ? img.insightNeutralIcon
                                                        : data.apiData.volatility.data.direction >= 1
                                                        ? img.insightHighIcon
                                                        : data.apiData.volatility.data.direction <= -1
                                                        ? img.insightLowIcon
                                                        : ''
                                                "
                                                style="cursor: pointer"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-left">Concentration</td>
                                        <td class="text-left">
                                            <img
                                                :src="
                                                    data.apiData.concentration.data.level == 0
                                                        ? img.insightNeutralIcon
                                                        : data.apiData.concentration.data.level >= 1
                                                        ? img.insightHighIcon
                                                        : data.apiData.concentration.data.level <= -1
                                                        ? img.insightLowIcon
                                                        : ''
                                                "
                                                style="cursor: pointer"
                                            />
                                        </td>
                                        <td class="text-left">
                                            <img
                                                :src="
                                                    data.apiData.concentration.data.direction == 0
                                                        ? img.insightNeutralIcon
                                                        : data.apiData.concentration.data.direction >= 1
                                                        ? img.insightHighIcon
                                                        : data.apiData.concentration.data.direction <= -1
                                                        ? img.insightLowIcon
                                                        : ''
                                                "
                                                style="cursor: pointer"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-left">Regime</td>
                                        <td class="text-left">
                                            <img
                                                :src="
                                                    data.apiData.regime.data.level == 0
                                                        ? img.insightNeutralIcon
                                                        : data.apiData.regime.data.level >= 1
                                                        ? img.insightHighIcon
                                                        : data.apiData.regime.data.level <= -1
                                                        ? img.insightLowIcon
                                                        : ''
                                                "
                                                style="cursor: pointer"
                                            />
                                        </td>
                                        <td class="text-left">
                                            <img
                                                :src="
                                                    data.apiData.regime.data.direction == 0
                                                        ? img.insightNeutralIcon
                                                        : data.apiData.regime.data.direction >= 1
                                                        ? img.insightHighIcon
                                                        : data.apiData.regime.data.direction <= -1
                                                        ? img.insightLowIcon
                                                        : ''
                                                "
                                                style="cursor: pointer"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-left">Persistence</td>
                                        <td class="text-left">
                                            <img
                                                :src="
                                                    data.apiData.persistence.data.level == 0
                                                        ? img.insightNeutralIcon
                                                        : data.apiData.persistence.data.level >= 1
                                                        ? img.insightHighIcon
                                                        : data.apiData.persistence.data.level <= -1
                                                        ? img.insightLowIcon
                                                        : ''
                                                "
                                                style="cursor: pointer"
                                            />
                                        </td>
                                        <td class="text-left">
                                            <img
                                                :src="
                                                    data.apiData.persistence.data.direction == 0
                                                        ? img.insightNeutralIcon
                                                        : data.apiData.persistence.data.direction >= 1
                                                        ? img.insightHighIcon
                                                        : data.apiData.persistence.data.direction <= -1
                                                        ? img.insightLowIcon
                                                        : ''
                                                "
                                                style="cursor: pointer"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-left">Valuation / Risk-premia</td>
                                        <td class="text-left">
                                            <img
                                                :src="
                                                    data.apiData.valuation.data.level == 0
                                                        ? img.insightNeutralIcon
                                                        : data.apiData.valuation.data.level >= 1
                                                        ? img.insightHighIcon
                                                        : data.apiData.valuation.data.level <= -1
                                                        ? img.insightLowIcon
                                                        : ''
                                                "
                                                style="cursor: pointer"
                                            />
                                        </td>
                                        <td class="text-left">
                                            <img
                                                :src="
                                                    data.apiData.valuation.data.direction == 0
                                                        ? img.insightNeutralIcon
                                                        : data.apiData.valuation.data.direction >= 1
                                                        ? img.insightHighIcon
                                                        : data.apiData.valuation.data.direction <= -1
                                                        ? img.insightLowIcon
                                                        : ''
                                                "
                                                style="cursor: pointer"
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </v-col>
                        <v-col cols="12" class="mt-40p py-0">
                            <div class="backgrond-color-white-tree pa-5 d-flex justify-start align-center">
                                <p class="pa-0 ma-0 font-size-18">
                                    Notes: This material represents BII's assessment of the market environment as of October 2021 and is not intended to be a forecast of future events or a guarantee
                                    of future results. This information should not be relied upon by the reader as research or investment advice regarding any funds, strategy or security in
                                    particular.
                                </p>
                            </div>
                        </v-col>
                        <v-col cols="12">
                            <div class="gray-line"></div>
                        </v-col>
                        <v-col>
                            <p class="font-color-orange font-size-21 mb-10">Key Takeaways</p>
                            <template v-for="(data, idx) in data.apiData.volatility.key_takeaways">
                                <p class="font-size-21 mb-10" :key="idx">{{ data }}</p>
                            </template>
                        </v-col>
                    </v-row>
                    <!-- 탭2 -->
                    <v-row v-if="data.tabValue == 1" class="tab-desc">
                        <v-col cols="12" class="pa-0">
                            <template v-for="(data, idx) in data.apiData.volatility.key_takeaways">
                                <p class="font-size-21 mb-10" :key="idx">{{ data }}</p>
                            </template>
                        </v-col>
                        <v-col cols="12" class="pa-0 py-10">
                            <span class="font-color-orange font-size-21">{{ data.apiData.volatility.chart_title }}</span>
                        </v-col>
                        <v-col cols="12" class="pa-0">
                            <v-row class="ma-0">
                                <v-col id="boxPlotSize" xl="4" cols="12" class="pa-0">
                                    <div><p class="text-gray-18 ma-0 mb-10">Historical distribution of volatility</p></div>
                                    <div id="boxPlotFirst" class="boxplot-chart-custom"></div>
                                </v-col>
                                <v-col xl="8" cols="12" class="pr-0 py-0" :class="$vuetify.breakpoint.xlOnly ? 'pl-10' : 'pl-0'">
                                    <div class="mr-3"><p class="text-gray-18 ma-0 mb-10">Volatility through time</p></div>
                                    <div class="mr-3" id="dataChart"></div>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="12" class="mt-7">
                            <div class="backgrond-color-white-tree pa-5 d-flex justify-start align-center">
                                <p class="pa-0 ma-0 font-size-18">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </v-col>
                        <v-col cols="12">
                            <div class="gray-line"></div>
                        </v-col>
                        <v-col>
                            <p class="font-color-orange font-size-21 mb-10">Key Takeaways</p>
                            <p class="font-size-21 mb-10">
                                The correlations chart shows a range of assets as represented by their respective indexes. These assets include bonds and equities of various kinds, and others such as
                                commodities. In times of stress, returns of different asset classes tend to be highly correlated, implying a lack of diversification.
                            </p>
                            <p class="font-size-21 mb-10">
                                Correlations are generally medium to high. The correlation of EM and investment grade debt with DM government debt is on the high side, showing the duration risk from
                                any push higher in long-term yields. That has been reflected in total returns this year. At the same time, the typically negative correlation in returns between DM
                                equities and government debt is closer to zero now, suggesting reduced diversification for muti-asset portfolios.
                            </p>
                        </v-col>
                    </v-row>
                    <!-- 탭3 -->
                    <v-row v-if="data.tabValue == 2" class="tab-desc">
                        <v-col cols="12" class="pa-0 ma-3">
                            <template v-for="(data, idx) in data.apiData.concentration.key_takeaways">
                                <p class="font-size-21 mb-10" :key="idx">{{ data }}</p>
                            </template>
                        </v-col>
                        <v-col cols="12" class="pa-0 ma-3">
                            <span class="font-color-orange font-size-21">{{ data.apiData.concentration.chart_title }}</span>
                            <p class="text-gray-18 py-5 ma-0">Percentile of currnet correlation versus 5-year history</p>
                        </v-col>
                        <v-col id="heatmapSize" cols="12" class="ma-0 pa-0">
                            <figure class="highcharts-figure justify-center">
                                <div style="justify-content: center; display: flex" name="heatmap" id="heatmap"></div>
                            </figure>
                        </v-col>
                        <v-col cols="12" class="pt-10 ma-0">
                            <div class="backgrond-color-white-tree pa-5 justify-start align-center">
                                <p class="pa-0 ma-0 chart-desc-main font-size-18">
                                    Index data provided for illustrative purposes only. Indices are unmanaged and it is not possible to invest directly in an index.
                                </p>
                                <p class="mt-4 mb-0 font-size-18">Source: BlackRock Risk and Quantitative Analysis and BlackRock</p>
                            </div>
                        </v-col>
                        <v-col cols="12">
                            <div class="gray-line"></div>
                        </v-col>
                        <v-col>
                            <p class="font-color-orange font-size-21 mb-10">Key Takeaways</p>
                            <template v-for="(data, idx) in data.apiData.concentration.key_takeaways">
                                <p class="font-size-21 mb-10" :key="idx">{{ data }}</p>
                            </template>
                        </v-col>
                    </v-row>
                    <!-- 탭4 -->
                    <v-row v-if="data.tabValue == 3" class="tab-desc">
                        <v-col cols="12" class="pa-0 ma-3">
                            <template v-for="(data, idx) in data.apiData.regime.key_takeaways">
                                <p class="font-size-21 mb-10" :key="idx">{{ data }}</p>
                            </template>
                        </v-col>
                        <v-col cols="12" class="pa-0 ma-3">
                            <span class="font-color-orange font-size-21">{{ data.apiData.regime.chart_title }}</span>
                        </v-col>
                        <div id="splineSize" class="spline">
                            <figure>
                                <div style="justify-content: center; display: flex" name="spline" id="spline"></div>
                            </figure>
                        </div>
                        <v-col cols="12">
                            <div class="gray-line"></div>
                        </v-col>
                        <v-col>
                            <p class="font-color-orange font-size-21 mb-10">Key Takeaways</p>
                            <template v-for="(data, idx) in data.apiData.regime.key_takeaways">
                                <p class="font-size-21 mb-10" :key="idx">{{ data }}</p>
                            </template>
                        </v-col>
                    </v-row>
                    <!-- 탭5 -->
                    <!-- <v-row v-if="data.tabValue == 4" class="tab-desc">
                        <v-col cols="12" class="pa-0 ma-3">
                            <template v-for="(data, idx) in data.apiData.valuation.key_takeaways">
                                <p class="font-size-21 mb-10" :key="idx">{{ data }}</p>
                            </template>
                        </v-col>
                        <v-col cols="12" class="pa-0 ma-3">
                            <span class="font-color-orange font-size-21">{{ data.apiData.valuation.chart_title }}</span>
                        </v-col>
                        <v-col cols="12">
                            <figure class="highcharts-figure justify-center">
                                <div style="justify-content: center; display: flex" id="areaFirstChart"></div>
                            </figure>
                        </v-col>
                        <v-col cols="12">
                            <div class="gray-line"></div>
                        </v-col>
                        <v-col>
                            <p class="font-color-orange font-size-21 mb-10">Key Takeaways</p>
                            <p class="font-size-21 mb-10">
                                The correlations chart shows a range of assets as represented by their respective indexes. These assets include bonds and equities of various kinds, and others such as
                                commodities. In times of stress, returns of different asset classes tend to be highly correlated, implying a lack of diversification.
                            </p>
                            <p class="font-size-21 mb-10">
                                Correlations are generally medium to high. The correlation of EM and investment grade debt with DM government debt is on the high side, showing the duration risk from any
                                push higher in long-term yields. That has been reflected in total returns this year. At the same time, the typically negative correlation in returns between DM equities and
                                government debt is closer to zero now, suggesting reduced diversification for muti-asset portfolios.
                            </p>
                        </v-col>
                    </v-row>
                    -->
                    <!-- 탭6 -->
                    <v-row v-if="data.tabValue == 4" class="tab-desc">
                        <v-col cols="12" class="pa-0 ma-3">
                            <p class="font-size-21 mb-10">
                                Assets and securities that become expensive or cheap relative to their long-term norm can be risky simply because of valuation. Stretched valuations may be indicative
                                of elevated conditional risk in the market, but the short-term correlation between valuation and return is inconsistent and therefore difficult to forecast. Valuation
                                itself is sometimes an elusive concept to capture.
                            </p>
                            <p class="font-size-21 mb-10">
                                The chart illustrates this through the compensation for risk that investors receive as the earnings yield or credit spread relative to U.S. 10-year Treasury yield. The
                                chart suggests that equity valuations are within or near the historical interquartile range, implying fair compensation for risk-taking. By contrast, relatively risky
                                bonds show some stretched valuations with spreads at the narrow end of the long-term historical distribution. We see valuation risk overall as higher now compared with
                                Q1 because of the wide range of potential outcomes beyond the restart. Potential returns in line with or below historical median levels is probably insufficient for
                                such a wide range of outcomes.
                            </p>
                            <p class="font-size-21 mb-10">
                                Historically low interest rates – especially real yields – are the core justification for current asset valuations. But whether low rates persist will depend crucially
                                on the interplay between interest rates, inflation and debt following the policy revolution in response to the Covid-19 shock. For more see Testing debt tolerance from
                                February 2021.
                            </p>
                        </v-col>
                        <v-col cols="12" class="pa-0 ma-3">
                            <span class="font-color-orange font-size-21">{{ data.apiData.valuation.chart_title }}</span>
                        </v-col>
                        <v-col id="boxPlotValuationSize" cols="12" class="ma-0 pa-0">
                            <figure class="highcharts-figure justify-center">
                                <div id="boxPlotValuation"></div>
                            </figure>
                        </v-col>
                        <v-col cols="12" class="ma-0 pt-10">
                            <div class="backgrond-color-white-tree pa-5 justify-start align-center">
                                <p class="pa-0 ma-0 chart-desc-main font-size-18">
                                    Index data provided for illustrative purposes only. Indices are unmanaged and it is not possible to invest directly in an index. Past performance is not a reliable
                                    indicator of future results.
                                </p>
                                <p class="mt-4 mb-0 font-size-18">
                                    Sources: BlackRock Risk and Quantitative Analysis and BlackRock Investment Institute, with data from Bloomberg and Refinitiv, October 2021. Notes: The chart shows
                                    the long-term distribution of cyclicaily adjusted earnings yields for major global equity markets relative to the 10-year government bond yield in those markets.
                                    For fixed income we use yield spreads versus government bonds. Indices used are: S&P 500, Japan TOPIX, MSCI Europe, FTSE All-Share, MSCI Emerging Markets, Bloomberg
                                    Barclays US and European High Yield, JP Morgan EMBI index. Valuation Period is based on data since 2000.
                                </p>
                            </div>
                        </v-col>
                        <v-col cols="12">
                            <div class="gray-line"></div>
                        </v-col>
                        <v-col>
                            <p class="font-color-orange font-size-21 mb-10">Key Takeaways</p>
                            <template v-for="(data, idx) in data.apiData.valuation.key_takeaways">
                                <p class="font-size-21 mb-10" :key="idx">{{ data }}</p>
                            </template>
                        </v-col>
                    </v-row>
                </div>
            </v-row>
        </v-row>
    </div>
</template>

<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/highcharts-more.js"></script>
<script src="https://code.highcharts.com/highcharts-3d.js"></script>

<script src="https://code.highcharts.com/modules/pareto.js"></script>
<script src="https://code.highcharts.com/modules/sunburst.js"></script>
<script src="https://code.highcharts.com/modules/drilldown.js"></script>
<script src="https://code.highcharts.com/modules/pattern-fill.js"></script>
<script src="https://code.highcharts.com/modules/series-label.js"></script>
<script src="https://code.highcharts.com/modules/dumbbell.js"></script>

<script src="https://code.highcharts.com/stock/highstock.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="https://code.highcharts.com/modules/export-data.js"></script>
<script src="https://code.highcharts.com/modules/accessibility.js"></script>
<script src="https://code.highcharts.com/modules/data.js"></script>

<script lang="ts">
Highcharts.SVGRenderer.prototype.symbols.dash = function (x, y, w, h) {
    return ['M', x, y + h / 2, 'L', x + w, y + h / 2, 'z'];
};
if (Highcharts.VMLRenderer) {
    Highcharts.VMLRenderer.prototype.symbols.dash = Highcharts.SVGRenderer.prototype.symbols.dash;
}
var premiaURL = '/blk-corp-assets/images/tools/blackrock-investment-institute/';

import Vue from 'vue';
import axios from 'axios';
import meta from '@/api/meta';
import $ from 'jquery';

import HighchartsHeatMap from 'highcharts/modules/heatmap.js';
import Highcharts from 'highcharts';
import instituteButton from '@/assets/images/investment-institute-button.png';
import insightLowIcon from '@/assets/images/insight-low-icon.png';
import insightHighIcon from '@/assets/images/insight-high-icon.png';
import insightNeutralIcon from '@/assets/images/insight-neutral-icon.png';
import highchartsDumbbell from 'highcharts/modules/dumbbell';
import HC_more from 'highcharts/highcharts-more';

import toggleButton from '@/pages/components/toggle-button.vue';

import printreport from '@/assets/images/printreport.png';

HC_more(Highcharts);
highchartsDumbbell(Highcharts);
HighchartsHeatMap(Highcharts);

export default Vue.extend({
    components: {
        toggleButton,
    },
    data() {
        return {
            columnSymbol: null,
            lineSymbol: null,
            dumbbellSymbol: null,
            dataTest: [],
            dateTest: [],
            img: {
                instituteButton,
                insightNeutralIcon,
                insightHighIcon,
                insightLowIcon,
                printreport,
            },
            style: '',
            styles: {
                on: 'ON',
                off: 'OFF',
            },
            toggle: true,
            tabs: [
                { value: 0, name: 'Introduction' },
                { value: 1, name: 'Volatility' },
                { value: 2, name: 'Concentration' },
                { value: 3, name: 'The regime map' },
                // { value: 4, name: 'Persistence' },
                { value: 4, name: 'Valuation' },
            ],
            data: {
                pageWidth: document.documentElement.scrollWidth,
                titleYear: null,
                titleMonth: null,
                heatmap: {
                    category: [],
                    high: [],
                    middle: [],
                    low: [],
                },
                dataChart: {
                    moveDate: [],
                    moveValue: [],
                    vixDate: [],
                    vixValue: [],
                },
                boxPlot: {
                    boxPlot5: {
                        vixIndex: null,
                        moveIndex: null,
                    },
                    boxPlot25: {
                        vixIndex: null,
                        moveIndex: null,
                    },
                    boxPlot50: {
                        vixIndex: null,
                        moveIndex: null,
                    },
                    boxPlot75: {
                        vixIndex: null,
                        moveIndex: null,
                    },
                    boxPlot95: {
                        vixIndex: null,
                        moveIndex: null,
                    },
                    boxPlotLatest: {
                        vixIndex: null,
                        moveIndex: null,
                    },
                    boxPlotRange: {
                        vixIndex: null,
                        moveIndex: null,
                    },
                },
                // valuationBoxPlot:{
                //     equity: {
                //         em: {

                //         }
                //     },
                //     fixedIncome: null,
                // },
                spline: {
                    correlation: [],
                    riskSentiment: [],
                    correlationDate: [],
                    date: [],
                },
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
                tabValue: 0,
            },
            chart: {
                boxPlotFirst: 'test',
                splineProtoType: null as any,
                heatmap: null as any,
                boxPlotVal: null as any,
            },
        };
    },
    watch: {
        'data.tabValue': {
            async handler(n) {
                this.chartDraw();
            },
        },
    },
    methods: {
        async reportPdf() {
            this.$store.commit('app/SET_LOADING', true);
            let reportProduct = (document.getElementById('insightReport').src = '/insights/market-view/market-risk/monitor-report-total');

            window.addEventListener('message', (e) => {
                if (e.data.success === 'success') {
                    this.$store.commit('app/SET_LOADING', false);
                }
            });
        },
        async riskMonitor() {
            this.$store.commit('app/SET_LOADING', true);
            const marketRiskMonitor = (
                await meta.api.common.insights.getMarketRiskMonitor({
                    page: 1,
                    rowSize: 100000,
                    sort: ['id,asc'],
                })
            ).data;
            this.$store.commit('app/SET_LOADING', false);

            this.data.apiData = marketRiskMonitor;

            var titleDate = new Date(this.data.apiData.date.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')).toDateString().split(' ');
            this.data.titleYear = titleDate[3];
            this.data.titleMonth = titleDate[1];
            this.data.heatmap.category = this.data.apiData.concentration.data.indexes.reverse();
        },
        async tabValue(idx: number) {
            this.data.tabValue = idx;
        },
        async chartDraw() {
            let self = this;
            if (this.data.tabValue == 1) {
                const movePrice = this.data.apiData.volatility.data.price[Object.keys(this.data.apiData.volatility.data.price)[0]],
                    vixPrice = this.data.apiData.volatility.data.price[Object.keys(this.data.apiData.volatility.data.price)[1]];
                this.data.dataChart.moveDate = Object.keys(movePrice).sort();
                this.data.dataChart.vixDate = Object.keys(vixPrice).sort();

                const boxPlot5 = this.data.apiData.volatility.data.percentile['5'];
                const boxPlot25 = this.data.apiData.volatility.data.percentile['25'];
                const boxPlot50 = this.data.apiData.volatility.data.percentile['50'];
                const boxPlot75 = this.data.apiData.volatility.data.percentile['75'];
                const boxPlot95 = this.data.apiData.volatility.data.percentile['95'];
                const boxPlotLatest = this.data.apiData.volatility.data.percentile['latest'];

                //과장님이 MoveIndex값 넣어주시면 주석 해제
                this.data.boxPlot.boxPlot5.vixIndex = boxPlot5['VIX Index'];
                this.data.boxPlot.boxPlot25.vixIndex = boxPlot25['VIX Index'];
                this.data.boxPlot.boxPlot50.vixIndex = boxPlot50['VIX Index'];
                this.data.boxPlot.boxPlot75.vixIndex = boxPlot75['VIX Index'];
                this.data.boxPlot.boxPlot95.vixIndex = boxPlot95['VIX Index'];
                this.data.boxPlot.boxPlotLatest.vixIndex = boxPlotLatest['VIX Index'];
                this.data.boxPlot.boxPlotRange.vixIndex = Number(this.data.boxPlot.boxPlot75.vixIndex) - Number(this.data.boxPlot.boxPlot25.vixIndex);

                this.data.boxPlot.boxPlot5.moveIndex = boxPlot5['MOVE Index'];
                this.data.boxPlot.boxPlot25.moveIndex = boxPlot25['MOVE Index'];
                this.data.boxPlot.boxPlot50.moveIndex = boxPlot50['MOVE Index'];
                this.data.boxPlot.boxPlot75.moveIndex = boxPlot75['MOVE Index'];
                this.data.boxPlot.boxPlot95.moveIndex = boxPlot95['MOVE Index'];
                this.data.boxPlot.boxPlotLatest.moveIndex = boxPlotLatest['MOVE Index'];
                this.data.boxPlot.boxPlotRange.moveIndex = Number(this.data.boxPlot.boxPlot75.moveIndex) - Number(this.data.boxPlot.boxPlot25.moveIndex);

                var i = 0,
                    j = 0;

                const moveDateLength = this.data.dataChart.moveDate.length;
                for (i = 0; i < moveDateLength; i++) {
                    const data = this.data.dataChart.moveDate[i];
                    const date = new Date(data.split('T')[0]);
                    let movePriceVal = movePrice[data] as any;

                    if (movePriceVal != null && movePriceVal != 'null' && movePriceVal != '') {
                        this.data.dataChart.moveValue.push([Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()), movePriceVal]);
                    }
                }

                const vixDateLength = this.data.dataChart.moveDate.length;
                for (i = 0; i < vixDateLength; i++) {
                    const data = this.data.dataChart.vixDate[i];
                    const date = new Date(data.split('T')[0]);
                    let vixPriceVal = vixPrice[data] as any;

                    if (vixPriceVal != null && vixPriceVal != 'null' && vixPriceVal != '') {
                        this.data.dataChart.vixValue.push([Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()), vixPriceVal]);
                    }
                }

                this.$nextTick(async function () {
                    await self.volatilityChart();
                });
            } else if (this.data.tabValue == 2) {
                const heatmapEwm = this.data.apiData.concentration.data.correlation_latest;
                const heatmapRank = this.data.apiData.concentration.data.correlation_rank;
                var z = 0,
                    x = 0,
                    q = 0,
                    w = 0,
                    heatmapValue = new Array(),
                    heatmapList = ['Commodities', 'DM Equity', 'DM Govt Bond', 'EM Equity', 'EM Govt Bond', 'HY Bond', 'IG Bond', 'Inflation-linked Debt'],
                    statesEwm = { hover: { color: '#FFC3B3'}},
                    statesRank = { hover: { color: '#FEE68C'}};
                for (z = 0; z <= this.data.apiData.concentration.data.indexes.length - 1; z++) {
                    const heatmapEwmValue = heatmapEwm[heatmapList[z]];
                    heatmapValue[z] = new Array();
                    for (x = 0; x <= this.data.apiData.concentration.data.indexes.length - 1; x++) {
                        const heatmapEwmValues = heatmapEwmValue[heatmapList[x]];
                        heatmapValue[z].push([z, x, heatmapEwmValues.toFixed(2), '#FEF1C1', statesRank]);
                    }
                }

                for (q = 0; q <= this.data.apiData.concentration.data.indexes.length - 1; q++) {
                    const heatmapRankValue = heatmapRank[heatmapList[q]];
                    for (w = 0; w <= this.data.apiData.concentration.data.indexes.length - 1; w++) {
                        const heatmapRankValues = heatmapRankValue[heatmapList[w]];
                        if (q < w) {
                            break;
                        } else {
                            heatmapValue[q][w] = [];
                            heatmapValue[q][w].push(q, w, heatmapRankValues.toFixed(2), '#FFDBD1', statesEwm);
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

                this.$nextTick(async function () {
                    await self.concentrationChart();
                });
            } else if (this.data.tabValue == 3) {
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

                for (j = 0; j < correlationData.length; j++) {
                    const data = correlationData[j];
                    let correlationDateVal = new Date(correlationData[j]).getFullYear();
                    correlationDate.push(correlationDateVal);
                    correlationTotal.push({ date: correlationDateVal, data: correlation[j] });
                }
                correlationDateList = [...new Set(correlationDate)];

                var f = 0,
                    name = {},
                    visible = false;
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
                            data.push({ x: correlationVal, y: riskVal, z: correlationData[i], marker: { enabled: false, symbol: 'circle' } });
                        }
                    }

                    // data[0].marker = {
                    //     enabled: true,
                    // };

                    // data[data.length - 1].marker = {
                    //     enabled: true,
                    // };

                    if (correlationDateList[f] == correlationDateList.lastItem || correlationDateList[f] == correlationDateList.lastItem - 1) {
                        visible = true;
                    }
                    var objec = { index: f, name: correlationDateList[f], data: data, visible: visible, animation: { duration: 4000 } };
                    this.data.spline.date.push(objec);
                }
                this.data.spline.date.push({ name: 'Clear All', data: [] });
                this.$nextTick(async function () {
                    await self.theRegimeMapChart();
                });
            } else if (this.data.tabValue == 4) {
                this.$nextTick(async function () {
                    await self.valuationChart();
                });
            }
            // else if (this.data.tabValue == 4) {
            //     this.$nextTick(async function () {
            //         await self.persistenceChart();
            //     });
            // }
        },

        async toggleData(data) {
            if (data === 'on') {
                this.toggle = true;
            } else {
                this.toggle = false;
            }
        },

        async volatilityChart() {
            let chartMargin = 0,
                font14 = null,
                legendWidth = null;
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
            //첫번째
            Highcharts.chart('boxPlotFirst', {
                chart: {
                    type: 'column',
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
                        load: function() {
                            var chart = this,
                            legend = chart.legend,
                            legendMaxWidth =
                                Highcharts.relativeLength(legend.options.maxWidth, 1) * chart.chartWidth;

                            /*if (legend.legendWidth > legendMaxWidth) {
                            legend.update({
                                width: legend.options.maxWidth
                            });
                            }*/
                        }
                    },
                },
                credits: {
                    enabled: false,
                },
                exporting: {
                    enabled: false,
                },
                title: {
                    text: '',
                },
                xAxis: [
                    {
                        width: '30%',
                        left: 70,
                        offset: 0,
                        lineColor: '#000000',
                        tickColor: '#000000',
                        categories: ['VIX'],
                        labels: {
                            autoRotation: false,
                            overflow: 'allow',
                            style: {
                                fontSize: font14,
                                color: '#000',
                            },
                        },
                    },
                    {
                        width: '30%',
                        left: '68%',
                        offset: 0,
                        lineColor: '#000000',
                        tickColor: '#000000',
                        categories: ['MOVE'],
                        labels: {
                            autoRotation: false,
                            overflow: 'allow',
                            style: {
                                fontSize: font14,
                                color: '#000',
                            },
                        },
                    },
                ],
                yAxis: [
                    {
                        width: '30%',
                        left: 70,
                        offset: 0,
                        gridLineColor: '#b3b3b3',
                        min: 0,
                        labels: {
                            style: {
                                fontSize: font14,
                                color: '#b3b3b3',
                            },
                        },
                        title: {
                            text: 'VIX Index',
                            style: {
                                fontSize: font14,
                                fontWeight: 'bold',
                                color: '#000',
                            },
                        },
                    },
                    {
                        width: '30%',
                        left: '68%',
                        offset: 0,
                        gridLineColor: '#b3b3b3',
                        min: 10,
                        labels: {
                            style: {
                                fontSize: font14,
                                color: '#b3b3b3',
                            },
                            format: '{value}%',
                        },
                        title: {
                            text: 'MOVE Index',
                            style: {
                                fontSize: font14,
                                fontWeight: 'bold',
                                color: '#000',
                            },
                        },
                    },
                ],
                legend: {
                    align: 'right',
                    verticalAlign: 'top',
                    enabled: true,
                    margin: 40,
                    maxWidth: '100%',
                    itemStyle: {
                        layout: 'vertical',
                        fontSize: font14,
                        fontWeight: 'normal',
                        fontFamily: 'BLKFort-Book, Arial, Sans-Serif',
                        color: '#000000',
                        textOverflow: "ellipsis",
                    },
                    symbolHeight: 11,
                    symbolWidth: 11,
                    symbolRadius: 0,
                },
                tooltip: {
                    useHTML: true,
                    shared: false,
                    valueDecimals: 2,
                },
                plotOptions: {
                    column: {
                        stacking: 'normal',
                        grouping: false,
                    },
                },
                series: [
                    {
                        xAxis: 1,
                        yAxis: 1,
                        linkedTo: 'test',
                        type: 'line',
                        name: '5th to 95th Percentile',
                        color: '#000000',
                        data: [
                            [0, this.data.boxPlot.boxPlot5.moveIndex],
                            [0, this.data.boxPlot.boxPlot95.moveIndex],
                        ],
                        marker: {
                            enabled: false,
                        },
                        states: {
                            hover: {
                                lineWidth: 0,
                            },
                        },
                        enableMouseTracking: false,
                    },
                    {
                        xAxis: 1,
                        yAxis: 1,
                        linkedTo: 'range',
                        name: 'Interquartile range',
                        data: [this.data.boxPlot.boxPlotRange.moveIndex],
                        color: '#FEC90E',
                        borderColor: '#000000',
                        zIndex: 77,
                        pointWidth: 40,
                    },
                    {
                        xAxis: 1,
                        yAxis: 1,
                        name: 'Q1',
                        showInLegend: false,
                        data: [this.data.boxPlot.boxPlot25.moveIndex],
                        color: 'rgba(100,100,100,0)',
                    },
                    {
                        xAxis: 1,
                        yAxis: 1,
                        linkedTo: 'Median',
                        name: 'Median',
                        type: 'spline',
                        color: '#2E9875',
                        lineWidth: 2,
                        marker: {
                            lineColor: '#2E9875',
                            lineWidth: 2,
                            radius: 9,
                            symbol: 'dash',
                        },
                        zIndex: 88,
                        data: [this.data.boxPlot.boxPlot50.moveIndex],
                    },
                    {
                        xAxis: 1,
                        yAxis: 1,
                        linkedTo: 'latest',
                        name: 'Latest',
                        type: 'spline',
                        marker: {
                            radius: 6,
                            symbol: 'circle',
                        },
                        color: '#ff754b',
                        zIndex: 99,
                        data: [this.data.boxPlot.boxPlotLatest.moveIndex],
                    },
                    {
                        xAxis: 0,
                        yAxis: 0,
                        id: 'test',
                        type: 'line',
                        name: '5th to 95th Percentile',
                        color: '#000000',
                        data: [
                            [0, this.data.boxPlot.boxPlot5.vixIndex],
                            [0, this.data.boxPlot.boxPlot95.vixIndex],
                        ],
                        marker: {
                            enabled: false,
                        },
                        states: {
                            hover: {
                                lineWidth: 0,
                            },
                        },
                        enableMouseTracking: false,
                    },
                    {
                        xAxis: 0,
                        yAxis: 0,
                        id: 'range',
                        name: 'Interquartile range',
                        data: [this.data.boxPlot.boxPlotRange.vixIndex],
                        borderColor: '#000000',
                        color: '#FEC90E',
                        zIndex: 77,
                        pointWidth: 40,
                    },
                    {
                        xAxis: 0,
                        yAxis: 0,
                        name: 'Q1',
                        showInLegend: false,
                        data: [this.data.boxPlot.boxPlot25.vixIndex],
                        color: 'rgba(100,100,100,0)',
                    },
                    {
                        xAxis: 0,
                        yAxis: 0,
                        id: 'Median',
                        name: 'Median',
                        type: 'spline',
                        color: '#2E9875',
                        lineWidth: 2,
                        marker: {
                            lineColor: '#2E9875',
                            lineWidth: 2,
                            radius: 9,
                            symbol: 'dash',
                        },
                        zIndex: 88,
                        data: [this.data.boxPlot.boxPlot50.vixIndex],
                    },
                    {
                        xAxis: 0,
                        yAxis: 0,
                        id: 'latest',
                        name: 'Latest',
                        type: 'spline',
                        marker: {
                            radius: 6,
                            symbol: 'circle',
                        },
                        color: '#ff754b',
                        zIndex: 99,
                        data: [this.data.boxPlot.boxPlotLatest.vixIndex],
                    },
                ],
            });
            // 세번째
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
                    marginRight: 50,
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
                            fontSize: font14,
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
                                fontSize: font14,
                                fontWeight: 'bold',
                                color: '#000000',
                            },
                        },
                    },
                    {
                        gridLineWidth: 0,
                        margin: -40,
                        opposite: true,
                        title: {
                            text: null,
                        },
                        labels: {
                            align: 'right',
                            format: '{value:.,0f}%',
                        },
                        tickPositions: [0, 1, 2, 3, 4],
                    },
                    {
                        gridLineWidth: 0,
                        opposite: true,
                        title: {
                            margin: 25,
                            text: 'MOVE Index',
                            style: {
                                align: 'right',
                                fontSize: font14,
                                fontWeight: 'bold',
                                color: '#000000',
                            },
                        },
                    },
                ],
                legend: {
                    align: 'right',
                    verticalAlign: 'top',
                    enabled: true,
                    margin: 40,
                    itemStyle: {
                        layout: 'vertical',
                        fontSize: font14,
                        fontWeight: 'normal',
                        fontFamily: 'BLKFort-Book, Arial, Sans-Serif',
                        color: '#000000',
                    },
                },
                plotOptions: {
                    series: {
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
                        color: '#FEC90E',
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
            this.data.dataChart.moveValue = [];
            this.data.dataChart.vixValue = [];
            Highcharts.seriesTypes.line.prototype.drawLegendSymbol = this.lineSymbol;
        },

        async concentrationChart() {
            let chartMargin = 0,
                font14 = null;
            if (document.documentElement.scrollWidth > 1263) {
                chartMargin = 300;
                font14 = 18;
            } else if (document.documentElement.scrollWidth <= 1263 && document.documentElement.scrollWidth > 959) {
                chartMargin = 150;
                font14 = 14;
            } else if (document.documentElement.scrollWidth <= 959) {
                chartMargin = 50;
                font14 = 11;
            }

            this.chart.heatmap = Highcharts.chart('heatmap', {
                chart: {
                    type: 'heatmap',
                    width: document.documentElement.scrollWidth - chartMargin,
                    height: 600,
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
                                            false,
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
                },
                legend: {
                    align: 'right',
                    verticalAlign: 'top',
                    enabled: true,
                    margin: 40,
                    itemStyle: {
                        fontSize: font14,
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
                            fontSize: font14,
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
                            fontSize: font14,
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
                    heatmap: {
                        borderWidth: 1,
                        borderColor: '#fff',
                        dataLabels: {
                            enabled: true,
                            format: '{point.value}%',
                        },
                        keys: ['x', 'y', 'value', 'color', 'states'],
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
                            style: {
                                textOutline: false,
                                fontSize: font14,
                            },
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
                            style: {
                                color: '#3e7ad3',
                                textOutline: false,
                                fontSize: font14,
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
                            format: '{point.value}%',
                            style: {
                                color: '#ff754b',
                                textOutline: false,
                                fontSize: font14,
                            },
                        },
                        data: this.data.heatmap.middle,
                    },
                    {
                        name: 'Low',
                        color: '#2e9875',
                        borderWidth: 1,
                        borderColor: '#fff',
                        dataLabels: {
                            style: {
                                color: '#2e9875',
                                textOutline: false,
                                fontSize: font14,
                            },
                        },
                        data: this.data.heatmap.low,
                    },
                ],
            });
        },

        async theRegimeMapChart() {
            const splineSize = document.getElementsByName('spline') as any;
            var splineWidth = document.documentElement.scrollWidth - 300,
                splineHeight = 900,
                font14 = null;

            var SplineSeries = Highcharts.seriesTypes.spline;

            this.chart.splineProtoType = SplineSeries.prototype.drawGraph;

            // override the drawLine method
            var splineDrawGraph = SplineSeries.prototype.drawGraph;

            if (document.documentElement.scrollWidth > 1263) {
                font14 = 18;
            } else if (document.documentElement.scrollWidth <= 1263 && document.documentElement.scrollWidth > 959) {
                font14 = 14;
            } else if (document.documentElement.scrollWidth <= 959) {
                font14 = 11;
            }

            SplineSeries.prototype.drawGraph = function () {
                var arrowLength = 15,
                    arrowWidth = 8,
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

            Highcharts.chart('spline', {
                chart: {
                    margin: 75,
                    type: 'spline',
                    reflow: false,
                    animation: {
                        duration: 4000,
                    },
                    height: splineHeight,
                    events: {
                        load: function () {
                            const chart = this,
                                offset = 75,
                                topMargin = 50;
                            chart.renderer
                                .text('More +', chart.chartWidth - offset, chart.chartHeight + topMargin - offset + 23)
                                .css({
                                    color: 'orange',
                                    fontWeight: 'bold',
                                    fontSize: font14,
                                })
                                .add();
                            chart.renderer
                                .text('- Less', offset - 60, chart.chartHeight + topMargin - offset)
                                .attr({
                                    rotation: -90,
                                })
                                .css({
                                    color: 'orange',
                                    fontWeight: 'bold',
                                    fontSize: font14,
                                })
                                .add();
                            chart.renderer
                                .text('- Less', offset - 50, chart.chartHeight + topMargin - offset + 23)
                                .css({
                                    color: 'green',
                                    fontWeight: 'bold',
                                    fontSize: font14,
                                })
                                .add();
                            chart.renderer
                                .text('More +', offset - 60, offset + topMargin)
                                .attr({
                                    rotation: -90,
                                })
                                .css({
                                    color: 'green',
                                    fontWeight: 'bold',
                                    fontSize: font14,
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
                    enabled: true,
                    symbolPadding: 0,
                    symbolWidth: 0,
                    symbolHeight: 0,
                    squareSymbol: false,
                    align: 'right',
                    verticalAlign: 'top',
                },
                plotOptions: {
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
                                chart.series.find((series) => series.name === 'Clear all').setVisible(true);
                                if (this.name === 'Clear all') {
                                    chart.series.forEach((series) => series.setVisible(false));
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
                                        return '<p style="color:' + this.series.data[this.series.data.length - 1].color + '; font-size: 18px; font-weight: 900;">' + this.series.name + '</p>';
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
                    offset: -1 * (splineHeight / 2 - 75),
                    labels: {
                        enabled: false,
                    },
                    title: {
                        text: 'Asset correlation',
                        y: 0.4 * splineHeight + 20,
                        x: 5,
                        style: {
                            fontSize: font14,
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
                    offset: -1 * (splineWidth / 2 -87),
                    labels: {
                        enabled: false,
                    },
                    title: {
                        text: 'Risk sentiment',
                        x: -1 * (splineWidth / 2 - 50),
                        y: 0,
                        style: {
                            fontSize: font14,
                            fontWeight: 'bold',
                        },
                    },
                },
                series: this.data.spline.date,
            });

            SplineSeries.prototype.drawGraph = this.chart.splineProtoType;
        },

        // async persistenceChart() {
        //     const date = new Date(2018, 0, 1);
        //     const dates = [];
        //     const lastYear = 2022;

        //     let data1 = [];
        //     let data2 = [];
        //     let data3 = [];

        //     while (date.getFullYear() <= lastYear) {
        //         dates.push(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));

        //         data1.push(Math.floor(Math.random() * 5) + 1);
        //         data2.push(Math.floor(Math.random() * 5) + 1);
        //         data3.push(Math.floor(Math.random() * 5) + 1);

        //         date.setDate(date.getDate() + 1);
        //     }
        //     //첫번째
        //     Highcharts.chart('areaFirstChart', {
        //         chart: {
        //             type: 'area',
        //             width: 1540,
        //             height: 760,
        //             events: {
        //                 render() {
        //                     const chart = this,
        //                         legend = chart.legend,
        //                         legendMargin = legend.options.margin ? legend.options.margin - legend.padding : 0,
        //                         startX = 0,
        //                         startY = legend.group.translateY + legend.legendHeight + legendMargin / 2,
        //                         endX = chart.chartWidth,
        //                         endY = startY;
        //                     if (!chart.customLine) {
        //                         chart.customLine = chart.renderer
        //                             .path(['M', startX, startY, 'L', endX, endY])
        //                             .attr({
        //                                 'stroke-width': 2,
        //                                 stroke: 'black',
        //                             })
        //                             .add();
        //                     } else {
        //                         chart.customLine.attr({
        //                             d: ['M', startX, startY, 'L', endX, endY],
        //                         });
        //                     }
        //                 },
        //             },
        //         },
        //         credits: { enabled: false }, // 하단 highchart.com 글씨 삭제
        //         exporting: {
        //             // 상단 context menu 제거
        //             enabled: false,
        //         },
        //         legend: {
        //             align: 'right',
        //             verticalAlign: 'top',
        //             enabled: true,
        //             margin: 40,
        //             itemStyle: {
        //                 fontSize: '13px',
        //                 fontWeight: 'normal',
        //                 fontFamily: 'BLKFort-Book, Arial, Sans-Serif',
        //                 color: '#000000',
        //             },
        //         },
        //         title: {
        //             text: '',
        //         },
        //         subtitle: {
        //             text: '',
        //         },
        //         accessibility: {
        //             point: {
        //                 valueDescriptionFormat: '{index}. {point.category}, {point.percentage:.1f}%.',
        //             },
        //         },
        //         xAxis: {
        //             type: 'datetime',
        //             categories: dates,
        //             lineColor: '#000000',
        //             tickColor: '#000000',
        //             tickmarkPlacement: 'on',
        //             tickInterval: 1,
        //             allowDecimals: false,
        //             labels: {
        //                 formatter() {
        //                     const chart = this.chart,
        //                         date = new Date(this.value);

        //                     if (date.getFullYear() !== chart.lastYear) {
        //                         chart.lastYear = date.getFullYear();
        //                         return Highcharts.dateFormat('%Y', this.value);
        //                     }
        //                 },
        //             },
        //         },
        //         yAxis: [
        //             {
        //                 top: '0%',
        //                 height: '45%',
        //                 lineWidth: 0,
        //                 gridLineColor: '#000000',
        //                 title: {
        //                     text: 'VIX Index',
        //                     style: {
        //                         fontSize: '13px',
        //                         color: '#000000',
        //                     },
        //                 },
        //                 labels: {
        //                     formatter: function () {
        //                         //Add percent sign to first value
        //                         if (this.isLast == true) {
        //                             return this.value + '%';
        //                         } else {
        //                             return this.value;
        //                         }
        //                     },
        //                 },
        //             },
        //             {
        //                 top: '50%',
        //                 height: '50%',
        //                 lineWidth: 0,
        //                 gridLineColor: '#000000',
        //                 title: {
        //                     text: 'Correlation with Momentum',
        //                     style: {
        //                         fontSize: '13px',
        //                         color: '#000000',
        //                     },
        //                 },
        //                 labels: {
        //                     formatter: function () {
        //                         //Add percent sign to first value
        //                         if (this.isLast == true) {
        //                             return this.value + '%';
        //                         } else {
        //                             return this.value;
        //                         }
        //                     },
        //                 },
        //             },
        //         ],
        //         tooltip: {
        //             // shared: true,
        //             // crosshairs: true,
        //             xDateFormat: '%b.%d, %Y ',
        //             valueSuffix: '%',
        //             valueDecimals: 1,
        //             style: {
        //                 fontSize: '13.5px',
        //                 color: '#000000',
        //             },
        //         },
        //         plotOptions: {
        //             area: {
        //                 stacking: 'percent',
        //                 lineColor: '#000000',
        //                 lineWidth: 1,
        //                 marker: {
        //                     enabled: false,
        //                 },
        //             },
        //         },
        //         series: [
        //             {
        //                 name: 'Oceania',
        //                 data: data1,
        //                 color: '#ff754b',
        //             },
        //             {
        //                 name: 'Asia',
        //                 data: data2,
        //                 color: '#FF8000',
        //             },
        //             {
        //                 yAxis: 1,
        //                 name: 'Oceania',
        //                 data: data1,
        //                 color: '#ff754b',
        //             },
        //             {
        //                 yAxis: 1,
        //                 name: 'Asia',
        //                 data: data2,
        //                 color: '#FF8000',
        //             },
        //         ],
        //     });
        //     // 두번째 area
        //     // Highcharts.chart('areaSecondChart', {
        //     //     chart: {
        //     //         type: 'area',
        //     //         width: 1540,
        //     //         height: 380,
        //     //     },
        //     //     credits: {enabled: false}, // 하단 highchart.com 글씨 삭제
        //     //     exporting: { // 상단 context menu 제거
        //     //         enabled: false
        //     //     },
        //     //     title: {
        //     //         text: ''
        //     //     },
        //     //     subtitle: {
        //     //         text: ''
        //     //     },
        //     //     accessibility: {
        //     //         point: {
        //     //             valueDescriptionFormat: '{index}. {point.category}, {point.y:,.0f} millions, {point.percentage:.1f}%.'
        //     //         }
        //     //     },
        //     //     xAxis: {
        //     //         categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
        //     //         tickmarkPlacement: 'on',
        //     //         title: {
        //     //             enabled: false
        //     //         },
        //     //         labels: {
        //     //             style: {
        //     //                 fontSize: '13px',
        //     //                 color: '#000000',
        //     //             },
        //     //         }
        //     //     },
        //     //     yAxis: {
        //     //         labels: {
        //     //             format: '{value}%',
        //     //             style: {
        //     //                 fontSize: '13px',
        //     //                 color: '#000000',
        //     //             },
        //     //         },
        //     //         title: {
        //     //             text: 'Correlation with Momentum',
        //     //             style: {
        //     //                 fontSize: '13px',
        //     //                 color: '#000000',
        //     //             },
        //     //         },
        //     //     },
        //     //     tooltip: {
        //     //         pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} millions)<br/>',
        //     //     },
        //     //     legend: {
        //     //         enabled: false
        //     //     },
        //     //     plotOptions: {
        //     //         area: {
        //     //             stacking: 'percent',
        //     //             lineColor: '#000000',
        //     //             lineWidth: 1,
        //     //             marker: {
        //     //                 enabled: false
        //     //             },
        //     //         },
        //     //     },
        //     //     series: [
        //     //     {
        //     //         name: 'Asia',
        //     //         data: [[1750,502], [1800,635], [1850,809], [1900,947], [1950,1402], [1999,3634], [2050,5268]]
        //     //     }, {
        //     //         name: 'Africa',
        //     //         data: [[1750,106], [1800,107], [1850,111], [1900,133], [1950,221], [1999,767], [2050,1766]]
        //     //     }, {
        //     //         name: 'Europe',
        //     //         data: [[1750,163], [1800,203], [1850,276], [1900,408], [1950,547], [1999,729], [2050,628]]
        //     //     }, {
        //     //         name: 'America',
        //     //         data: [[1750,18], [1800,31], [1850,54], [1900,156], [1950,339], [1999,818], [2050,1201] ]
        //     //     }, {
        //     //         name: 'Oceania',
        //     //         data: [[1750,2], [1800,2], [1850,2], [1900,6], [1950,13], [1999,30], [2050,46]]
        //     //     }]
        //     // });
        // },

        async valuationChart() {
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

            this.dumbbellSymbol = Highcharts.seriesTypes.dumbbell.prototype.drawLegendSymbol;
            this.columnSymbol = Highcharts.seriesTypes.column.prototype.drawLegendSymbol;

            Highcharts.seriesTypes.dumbbell.prototype.drawLegendSymbol = this.lineSymbol;
            Highcharts.seriesTypes.column.prototype.drawLegendSymbol = this.lineSymbol;

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

            this.chart.boxPlotVal = Highcharts.chart('boxPlotValuation', {
                chart: {
                    type: 'column',
                    width: document.documentElement.scrollWidth - chartMargin,
                    height: 360,
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
                xAxis: {
                    lineColor: '#000000',
                    tickColor: '#000000',
                    categories: [
                        'U.S. equities',
                        'Japan equities',
                        'Europe equities',
                        'UK equities',
                        'EM equities',
                        'U.S. high yield',
                        'European high Yield',
                        'Emerging market bonds',
                    ],
                    labels: {
                        style: {
                            fontSize: font14,
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
                                    fontSize: font14,
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
                            fontSize: font14,
                            fontFamily: 'BLKFort-Book, AvenirNextRegular, Arial, Sans-Serif',
                            color: '#b3b3b3',
                        },
                    },
                    title: {
                        text: 'Expensive   Cheaper',
                        style: {
                            fontSize: font14,
                            color: '#b3b3b3',
                        },
                    },
                },
                legend: {
                    align: 'right',
                    verticalAlign: 'top',
                    enabled: true,
                    margin: 40,
                    itemStyle: {
                        fontSize: font14,
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
                        pointWidth: 30,
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
                        color: '#2E9875',
                        showInLegend: false,
                        marker: {
                            lineColor: '#2E9875',
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
                        color: '#2E9875',
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
            Highcharts.seriesTypes.dumbbell.prototype.drawLegendSymbol = this.dumbbellSymbol;
            Highcharts.seriesTypes.column.prototype.drawLegendSymbol = this.columnSymbol;
        },
        chartResize() {
            if (this.data.tabValue == 2) {
                let width = document.getElementById('heatmapSize').offsetWidth;
                let height = width < 950 ? 450 : 600;

                this.chart.heatmap.setSize(width, height, false);
            } else if (this.data.tabValue == 4) {
                let width = document.getElementById('boxPlotValuationSize').offsetWidth;
                let height = 360;

                this.chart.boxPlotVal.setSize(width, height, false);
            }
        },
    },
    mounted() {
        this.riskMonitor();
        this.lineSymbol = Highcharts.seriesTypes.line.prototype.drawLegendSymbol;
        this.dumbbellSymbol = Highcharts.seriesTypes.dumbbell.prototype.drawLegendSymbol;
        this.columnSymbol = Highcharts.seriesTypes.column.prototype.drawLegendSymbol;

        window.addEventListener('resize', this.chartResize);
    },
});
</script>

<style>
.market-risk-monitor .top {
    width: 100%;
    height: 656px;
    background-color: #fff;
    padding: 180px 150px;
    border-bottom: 1px solid #e8e8e8;
    background: url(@/assets/images/insight-top-bg.png) no-repeat center center;
    background-size: cover;
}

.market-risk-monitor .menu-title-line {
    width: 72px;
    height: 12px;
    background-color: #0b89fd;
    margin-bottom: 15px;
}

.market-risk-monitor .top .menu-title {
    font-size: 64px;
    font-weight: 900;
    color: #000;
}

.market-risk-monitor .top .menu-sub-title {
    font-size: 24px;
    color: #000;
    margin-bottom: 70px;
}

.market-risk-monitor .middle {
    width: 100%;
    height: 100%;
    padding: 120px 150px 0px 150px !important;
    background-color: #fff;
}

.market-risk-monitor .middle-main-text {
    width: 100%;
    font-size: 48px;
    font-weight: 900;
}

.market-risk-monitor .middle-sub-text {
    width: 100%;
    font-size: 21px;
    padding-bottom: 40px;
    font-weight: 600;
}

.market-risk-monitor .middle-fotter-text {
    width: 100%;
    font-weight: 900;
    font-size: 21px;
}

.market-risk-monitor .tab-content {
    width: 100%;
    height: 100%;
    padding: 120px 150px 105px 150px !important;
    background-color: #fff;
}

.market-risk-monitor .tab-content .tab-desc {
    padding: 80px 0px 0px 0px !important;
    margin: 0px;
    width: 100%;
}

.tab-content .ai-tabs .v-tabs-slider-wrapper {
    height: 4px !important;
}

.tab-content .ai-tabs .v-tabs-slider-wrapper .v-tabs-slider {
    color: #000;
}

.tab-content .ai-tab {
    background-color: #fff;
    font-size: 16px;
    color: #b3b3b3 !important;
    font-weight: 700;
}

.tab-content .ai-tab.v-tab--active {
    color: #000 !important;
    font-weight: 900;
}

table {
    width: 100%;
    border-top: 2px solid #000;
    border-collapse: collapse;
    table-layout: fixed;
}

th {
    border-bottom: 1px solid #b3b3b3;
    padding: 10px;
    font-size: 18px;
}

td {
    border-bottom: 1px solid #b3b3b3;
    padding: 20px 10px 20px 10px;
    font-size: 18px;
}

th:first-child,
td:first-child {
    border-left: none;
}

.border-white-right {
    border-right: 1px solid #fff;
}

.border-gray-bottom {
    border-bottom: 1px solid rgba(232, 232, 232, 0.8);
}

#middle-main-text {
    margin-bottom: 60px;
}

.font-color-orange {
    color: #fd3f01;
    font-weight: 900;
}

.backgrond-color-white-tree {
    background-color: #e8e8e8;
}

.gray-line {
    background-color: rgba(232, 232, 232, 0.5);
    height: 5px;
    width: 100%;
    margin-top: 120px;
    margin-bottom: 120px;
}

.text-gray-18 {
    font-size: 18px;
    color: #808080;
}

.chart-desc-main {
    font-weight: 900;
}

.highcharts-root {
    display: flex;
    height: 100% !important;
    width: 100% !important;
}

.highcharts-container {
    display: flex;
}

.highcharts-figure {
    display: flex;
    width: 100% !important;
}

.menu-title-button {
    font-size: 21px;
    width: 292px;
    height: 48px;
    background: #000;
    color: #fff;
    font-weight: 700;
}

.menu-title-button-print {
    font-weight: 900;
    padding-left: 43px;
    font-size: 21px;
    cursor: pointer;
}

.top-desc p {
    text-transform: none;
    font-weight: 700;
}

.mt-40p {
    margin-top: 40px;
}

.font-size-21 {
    font-size: 21px !important;
}

#splineButton {
    position: absolute;
    padding-top: 10px;
    z-index: 499;
}

#splineToggleButton {
    display: contents;
}
/*
ul li:before {
    content: "•";
    display: inline-block;
    vertical-align: middle;
    padding: 0px 5px 0px 0px !important;
}
*/

/*chart id*/
#boxPlotSize {
    /* min-width: 500px; */
}

#heatmapSize {
    /* min-width: 500px; */
}

#splineSize {
    min-width: 1579px;
}

@media screen and (max-width: 1263px) {
    .market-risk-monitor .top {
        height: auto;
        padding: 70px 90px;
    }

    .market-risk-monitor .menu-title-line {
        width: 60px;
        height: 11px;
        margin-bottom: 13px;
    }

    .market-risk-monitor .top .menu-title {
        font-size: 59px;
    }

    .market-risk-monitor .top .menu-sub-title {
        font-size: 19px;
        margin-bottom: 60px;
    }

    .menu-title-button {
        font-size: 17px;
        width: 252px !important;
        height: 38px !important;
    }

    .menu-title-button-print {
        padding-left: 40px;
        font-size: 19px;
    }

    .market-risk-monitor .middle {
        height: auto;
        padding: 70px 90px 0px 70px !important;
        background-color: #fff;
    }

    .market-risk-monitor .middle-main-text {
        width: 100%;
        font-size: 43px;
        font-weight: 900;
    }

    .market-risk-monitor .middle-sub-text {
        font-size: 18px;
        padding-bottom: 35px;
    }

    .market-risk-monitor .middle-fotter-text {
        font-weight: 900;
        font-size: 17px;
    }

    .market-risk-monitor .tab-content {
        padding: 70px 90px 105px 70px !important;
    }

    .market-risk-monitor .tab-content .tab-desc {
        padding-top: 60px !important;
    }

    .tab-content .ai-tabs .v-tabs-slider-wrapper {
        height: 3px !important;
    }

    .tab-content .ai-tab {
        background-color: #fff;
        font-size: 14px;
        color: #b3b3b3 !important;
        font-weight: 700;
    }

    th {
        padding: 8px;
        font-size: 15px;
    }

    td {
        padding: 8px;
        font-size: 15px;
    }

    #middle-main-text {
        margin-bottom: 40px;
    }

    .gray-line {
        height: 4px;
        margin-top: 90px;
        margin-bottom: 90px;
    }

    .font-size-21 {
        font-size: 19px !important;
    }

    .text-gray-18 {
        font-size: 16px;
    }
}

@media screen and (max-width: 959px) {
    .market-risk-monitor .top {
        height: auto;
        padding: 20px;
    }

    .market-risk-monitor .menu-title-line {
        width: 50px;
        height: 10px;
        margin-bottom: 11px;
    }

    .market-risk-monitor .top .menu-title {
        font-size: 54px;
    }

    .market-risk-monitor .top .menu-sub-title {
        font-size: 14px;
        margin-bottom: 50px;
    }

    .menu-title-button {
        font-size: 14px;
        width: 212px !important;
        height: 34px !important;
    }

    .market-risk-monitor .middle {
        height: auto;
        padding: 20px 20px 0px 20px !important;
        background-color: #fff;
    }

    .market-risk-monitor .middle-main-text {
        width: 100%;
        font-size: 39px;
        font-weight: 900;
    }

    .market-risk-monitor .middle-sub-text {
        font-size: 14px;
        padding-bottom: 35px;
    }

    .market-risk-monitor .middle-fotter-text {
        font-weight: 900;
        font-size: 13px;
    }

    .market-risk-monitor .tab-content {
        padding: 20px !important;
    }

    .menu-title-button-print {
        padding-left: 38px;
        font-size: 17px;
    }

    .market-risk-monitor .tab-content .tab-desc {
        padding-top: 40px !important;
    }

    .tab-content .ai-tabs .v-tabs-slider-wrapper {
        height: 2px !important;
    }

    .tab-content .ai-tab {
        background-color: #fff;
        font-size: 12px;
        color: #b3b3b3 !important;
        font-weight: 700;
    }

    th {
        padding: 6px;
        font-size: 12px;
    }

    td {
        padding: 8px;
        font-size: 12px;
    }

    #middle-main-text {
        margin-bottom: 20px;
    }

    .gray-line {
        height: 3px;
        margin-top: 50px;
        margin-bottom: 50px;
    }

    .font-size-21 {
        font-size: 14px !important;
    }

    .text-gray-18 {
        font-size: 14px;
    }
}

iframe {
    border: 0px !important;
}

.market-risk-monitor .spline .highcharts-legend-item:last-of-type text {
    text-decoration: underline;
}

/* :nth-child(2) > text */
.market-risk-monitor .boxplot-chart-custom .highcharts-legend-item {
	height: 120px !important;
}

.market-risk-monitor .pb-10p {
    padding-bottom: 10px !important;
}
</style>
