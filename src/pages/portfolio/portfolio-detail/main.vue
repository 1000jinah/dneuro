<template>
    <div class="theme-portfolio">
        <iframe id="reportProduct" width="0" height="0" frameborder="0"></iframe>
        <iframe id="reportSheet" width="0" height="0" frameborder="0"></iframe>
        <v-row class="top wrapper-1920">
            <v-col cols="12" class="pa-0">
                <div class="title-line"></div>
                <p class="menu-title">
                    {{ data.strategy.name }}
                </p>
                <p class="menu-sub2-title" :class="!$vuetify.breakpoint.lgAndUp ? 'mb-10' : 'mb-20'">
                    {{ data.strategy.strategyCategory + ' Portfolios' }}
                </p>
                <v-row class="ma-0">
                    <v-col class="pa-0" cols="12">
                        <button type="button" class="btn-hover-orange">Add to Compare</button>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row class="middle ma-0">
            <v-col cols="12" class="pa-0 tab-area wrapper-1920" v-if="!flag.scroll">
                <v-tabs class="portfolio-tabs" show-arrows v-model="activeTab">
                    <v-tab class="portfolio-tab" id="overview-link" @click="moveTag('overview')">
                        <a href="javascript:void(0);">Overview</a>
                    </v-tab>
                    <v-tab class="portfolio-tab" id="performance-link" @click="moveTag('performance')">
                        <a href="javascript:void(0);">Performance</a>
                    </v-tab>
                    <v-tab class="portfolio-tab" id="holdings-link" @click="moveTag('holdings')">
                        <a href="javascript:void(0);">Holdings</a>
                    </v-tab>
                    <v-tab class="portfolio-tab" id="historical-link" @click="moveTag('historical')">
                        <a href="javascript:void(0);">Historical</a>
                    </v-tab>
                    <v-tab class="portfolio-tab" id="fees-link" @click="moveTag('fees')">
                        <a href="javascript:void(0);">Fees</a>
                    </v-tab>
                    <v-tab class="portfolio-tab" id="literature-link" @click="moveTag('literature')">
                        <a href="javascript:void(0);">Literature</a>
                    </v-tab>
                </v-tabs>
            </v-col>
            <v-col cols="12" class="portfolio-box">
                <v-row class="wrapper-1920 h-100">
                    <v-col md="3" cols="6" class="pa-0 overview-area">
                        <div class="vertical-center align-start">
                            <p class="white--text mb-0" :class="$vuetify.breakpoint.mdAndDown ? 'font-size-24' : 'font-size-36'">
                                {{ data.priceCalc.AnnReturn ? Math.round(data.priceCalc.AnnReturn * 100) / 100 + '%' : '0%' }}
                                <strong class="font-weight-200 ml-5" :class="$vuetify.breakpoint.mdAndDown ? ['font-size-14', 'ml-2'] : ['font-size-24', 'ml-5']"
                                    >/ {{ data.bmPriceCalc.AnnReturn ? Math.round(data.bmPriceCalc.AnnReturn * 100) / 100 + '%' : '0%' }}</strong
                                >
                            </p>
                            <v-divider class="color-gray line" />
                            <p class="color-gray mb-0 font-weight-light" :class="$vuetify.breakpoint.mdAndDown ? 'font-size-16' : 'font-size-24'">Annualized Earning<br />/ Benchmark</p>
                        </div>
                    </v-col>
                    <v-col md="3" cols="6" class="pa-0 overview-area">
                        <div class="vertical-center align-start">
                            <p class="white--text mb-0" :class="$vuetify.breakpoint.mdAndDown ? 'font-size-24' : 'font-size-36'">
                                {{ data.priceCalc.AnnVolatility ? Math.round(data.priceCalc.AnnVolatility * 100) / 100 + '%' : '0%' }}
                                <strong class="font-weight-200" :class="$vuetify.breakpoint.mdAndDown ? ['font-size-14', 'ml-2'] : ['font-size-24', 'ml-5']"
                                    >/ {{ data.bmPriceCalc.AnnVolatility ? Math.round(data.bmPriceCalc.AnnVolatility * 100) / 100 + '%' : '0%' }}</strong
                                >
                            </p>
                            <v-divider class="color-gray line" />
                            <p class="color-gray mb-0 font-weight-light" :class="$vuetify.breakpoint.mdAndDown ? 'font-size-16' : 'font-size-24'">Annualized Variable<br />/ Benchmark</p>
                        </div>
                    </v-col>
                    <v-col md="3" cols="6" class="pa-0 overview-area">
                        <div class="vertical-center align-start">
                            <p class="white--text mb-0" :class="$vuetify.breakpoint.mdAndDown ? 'font-size-24' : 'font-size-36'">
                                {{ data.priceCalc.SharpeRatio ? Math.round(data.priceCalc.SharpeRatio * 100) / 100 : '' }}
                                <strong class="font-weight-200" :class="$vuetify.breakpoint.mdAndDown ? ['font-size-16', 'ml-2'] : ['font-size-24', 'ml-5']"
                                    >/ {{ data.bmPriceCalc.SharpeRatio ? Math.round(data.bmPriceCalc.SharpeRatio * 100) / 100 : '' }}</strong
                                >
                            </p>
                            <v-divider class="color-gray line" />
                            <p class="color-gray mb-0 font-weight-light" :class="$vuetify.breakpoint.mdAndDown ? 'font-size-16' : 'font-size-24'">Sharp Index<br />/ Benchmark</p>
                        </div>
                    </v-col>
                    <v-col md="3" cols="6" class="pa-0 overview-area">
                        <div class="vertical-center align-start">
                            <p class="white--text mb-0" :class="$vuetify.breakpoint.mdAndDown ? 'font-size-24' : 'font-size-36'">
                                {{ data.priceCalc.MaxDrawdown ? Math.round(data.priceCalc.MaxDrawdown * 100) / 100 + '%' : '0%' }}
                                <strong class="font-weight-200" :class="$vuetify.breakpoint.mdAndDown ? ['font-size-14', 'ml-2'] : ['font-size-24', 'ml-5']"
                                    >/ {{ data.bmPriceCalc.MaxDrawdown ? Math.round(data.bmPriceCalc.MaxDrawdown * 100) / 100 + '%' : '0%' }}</strong
                                >
                            </p>
                            <v-divider class="color-gray line" />
                            <p class="color-gray mb-0 font-weight-light" :class="$vuetify.breakpoint.mdAndDown ? 'font-size-16' : 'font-size-24'">Maximum Decline<br />/ Benchmark</p>
                        </div>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row class="ma-0 center" v-if="flag.scroll">
            <v-col cols="12" class="pa-0 tab-area wrapper-1920">
                <v-tabs class="portfolio-tabs" show-arrows v-model="activeTab">
                    <v-tab class="portfolio-tab" id="scroll-overview-link" @click="moveTag('overview')">
                        <a href="javascript:void(0);">Overview</a>
                    </v-tab>
                    <v-tab class="portfolio-tab" id="scroll-performance-link" @click="moveTag('performance')">
                        <a href="javascript:void(0);">Performance</a>
                    </v-tab>
                    <v-tab class="portfolio-tab" id="scroll-holdings-link" @click="moveTag('holdings')">
                        <a href="javascript:void(0);">Holdings</a>
                    </v-tab>
                    <v-tab class="portfolio-tab" id="scroll-historical-link" @click="moveTag('historical')">
                        <a href="javascript:void(0);">Historical</a>
                    </v-tab>
                    <v-tab class="portfolio-tab" id="scroll-fees-link" @click="moveTag('fees')">
                        <a href="javascript:void(0);">Fees</a>
                    </v-tab>
                    <v-tab class="portfolio-tab" id="scroll-literature-link" @click="moveTag('literature')">
                        <a href="javascript:void(0);">Literature</a>
                    </v-tab>
                </v-tabs>
            </v-col>
        </v-row>
        <v-row class="bottom">
            <v-col cols="12" class="area01 area wrapper-1920" id="overview-section">
                <p class="menu-sub-title font-weight-black mb-20">OVERVIEW</p>
                <v-row class="mx-0 mt-0 mb-20">
                    <v-col cols="12" md="6" class="pa-0" :class="$vuetify.breakpoint.lgAndUp ? '' : 'mb-10'" style="padding-right: 67px !important">
                        <p class="area-subtitle mb-10">Portfolio Design</p>
                        <p class="font-size-24 color-black mb-10">
                            Apply Short-term themed strategies. Targets attractive risk-adjusted returns, stock dicersification and inflation hedges through tactical buying strategies.
                        </p>
                    </v-col>
                    <v-col cols="12" md="6" class="pa-0">
                        <p class="area-subtitle mb-10">Approach</p>
                        <p class="font-size-24 color-black mb-10">
                            ETF provides opportunity exploratory access to popular investment topics and unconventional innovations. Implement a systematic, model-based process that takes into account
                            the current level of market risk as well as the momentum of asset prices when building a portfolio.
                        </p>
                    </v-col>
                </v-row>
                <p class="area-subtitle mb-10">Key Facts</p>
                <p class="font-size-18 color-gray-two mb-5">As of Mar 30, 2022</p>
                <v-row class="ma-0 mb-10">
                    <v-col cols="12" md="6" class="pa-0" :style="$vuetify.breakpoint.mdAndDown ? '' : 'padding-right: 30px !important;'">
                        <v-row class="ma-0 font-size-18 py-5" style="border-bottom: 1px solid #b3b3b3">
                            <v-col cols="6" class="pa-0">
                                <span class="font-weight-bold">Risk Level</span>
                            </v-col>
                            <v-col cols="6" class="pa-0 d-table">
                                <v-rating
                                    full-icon="mdi-checkbox-blank-circle"
                                    empty-icon="mdi-checkbox-blank-circle-outline"
                                    icon-label="custom icon label text {0} of {1}"
                                    class="d-table-cell v-align-middle text-right"
                                    readonly
                                    :value="data.strategy.riskLevel"
                                ></v-rating>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12" md="6" class="pa-0" :style="$vuetify.breakpoint.mdAndDown ? '' : 'padding-left: 30px !important;'">
                        <v-row class="ma-0 font-size-18 py-5" style="border-bottom: 1px solid #b3b3b3">
                            <v-col cols="6" class="pa-0">
                                <span class="font-weight-bold">Market</span>
                            </v-col>
                            <v-col cols="6" class="pa-0 text-right">
                                <span class="color-gray">{{ data.strategy.market || '-' }}</span>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12" md="6" class="pa-0" :style="$vuetify.breakpoint.mdAndDown ? '' : 'padding-right: 30px !important;'">
                        <v-row class="ma-0 font-size-18 py-5" style="border-bottom: 1px solid #b3b3b3">
                            <v-col cols="6" class="pa-0">
                                <span class="font-weight-bold">Investment Target</span>
                            </v-col>
                            <v-col cols="6" class="pa-0 text-right">
                                <span class="color-gray">{{ data.strategy.target || '-' }}</span>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12" md="6" class="pa-0" :style="$vuetify.breakpoint.mdAndDown ? '' : 'padding-left: 30px !important;'">
                        <v-row class="ma-0 font-size-18 py-5" style="border-bottom: 1px solid #b3b3b3">
                            <v-col cols="6" class="pa-0">
                                <span class="font-weight-bold">Inception</span>
                            </v-col>
                            <v-col cols="6" class="pa-0 text-right">
                                <span class="color-gray">{{ data.strategy.inceptionDate || '-' }}</span>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12" md="6" class="pa-0" :style="$vuetify.breakpoint.mdAndDown ? '' : 'padding-right: 30px !important;'">
                        <v-row class="ma-0 font-size-18 py-5" style="border-bottom: 1px solid #b3b3b3">
                            <v-col cols="6" class="pa-0">
                                <span class="font-weight-bold">Asset Group</span>
                            </v-col>
                            <v-col cols="6" class="pa-0 text-right">
                                <span class="color-gray">{{ data.strategy.assetClass || '-' }}</span>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12" md="6" class="pa-0" :style="$vuetify.breakpoint.mdAndDown ? '' : 'padding-left: 30px !important;'"> </v-col>
                    <v-col cols="12" md="6" class="pa-0" :style="$vuetify.breakpoint.mdAndDown ? '' : 'padding-right: 30px !important;'">
                        <v-row class="ma-0 font-size-18 py-5" style="border-bottom: 1px solid #b3b3b3">
                            <v-col cols="6" class="pa-0">
                                <span class="font-weight-bold">Advisory Fee</span>
                            </v-col>
                            <v-col cols="6" class="pa-0 text-right">
                                <span class="color-gray">{{ data.strategy.advisoryFee || '-' }}</span>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12" md="6" class="pa-0" :style="$vuetify.breakpoint.mdAndDown ? '' : 'padding-left: 30px !important;'"> </v-col>
                </v-row>
                <div class="w-100 bg-white-two font-size-18" style="padding: 25px 19px; line-height: 25px">
                    This information must be preceded or accompanied by a current prospectus. For standardized performance, please see the Performance section above.
                </div>
            </v-col>
            <div class="w-100">
                <v-divider class="ma-auto gray-divider"></v-divider>
            </div>
            <v-col cols="12" class="area02 area wrapper-1920" id="performance-section">
                <p class="menu-sub-title font-weight-black mb-20">PERFORMANCE</p>
                <v-row class="mx-0 mt-0 mb-20">
                    <v-col cols="12" class="pa-0 mb-10">
                        <p class="area-subtitle mb-10">Historical NAVs</p>
                        <div id="performanceChart"></div>
                    </v-col>
                    <v-col cols="12" class="color-black font-size-18 bg-white-two" style="padding: 25px 19px; line-height: 31.5px">
                        <p>
                            The Hypothethical Growth of $10,000 chart reflects a hyppothetical $10,000 investment and asuumes reinvestment of dividends and capital gains. Fund expenses, including
                            management fees and other expenses were deducted.
                        </p>
                        <p class="mb-0">
                            The performance quoted represents past performnace and does not guarantee future results. Investment return and principal value of an investment will fluctuate so that an
                            investor's shares. when sold or redeemed, may be worth more or less than the original cost. Current performance may be lower or higher than the performance quoted, and
                            numbers may reflect small variances due to rounding. Standardized performance and performance data current to the most recent month end may be found in the Performance
                            section.
                        </p>
                    </v-col>
                </v-row>
                <p class="area-subtitle mb-5">Growth of Hypothetical Performance</p>
                <v-row class="mx-0 mt-0 mb-20">
                    <v-col cols="12" lg="6" class="pa-0" style="padding-right: 31px !important">
                        <v-row class="ma-0 font-size-18 py-5" style="border-bottom: 1px solid #b3b3b3">
                            <v-col cols="6" class="pa-0">
                                <span>Annualized Yield</span>
                                <img :src="img.announceBlackImg" />
                            </v-col>
                            <v-col cols="6" class="pa-0 text-right">
                                <span class="color-gray">{{ data.priceCalc.AnnReturn ? Math.round(data.priceCalc.AnnReturn * 100) / 100 + '%' : '0%' }}</span>
                            </v-col>
                        </v-row>
                        <v-row class="ma-0 font-size-18 py-5" style="border-bottom: 1px solid #b3b3b3">
                            <v-col cols="6" class="pa-0">
                                <span>Standard Deviation (3y)</span>
                                <img :src="img.announceBlackImg" />
                            </v-col>
                            <v-col cols="6" class="pa-0 text-right">
                                <span class="color-gray">{{ data.priceCalc.AnnVolatility ? Math.round(data.priceCalc.AnnVolatility * 100) / 100 + '%' : '0%' }}</span>
                            </v-col>
                        </v-row>
                        <v-row class="ma-0 font-size-18 py-5" style="border-bottom: 1px solid #b3b3b3">
                            <v-col cols="6" class="pa-0">
                                <span>Number of Holdings</span>
                                <img :src="img.announceBlackImg" />
                            </v-col>
                            <v-col cols="6" class="pa-0 text-right">
                                <span class="color-gray">{{ data.strategy.assetCount || '-' }}</span>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row class="ma-0 mb-20">
                    <v-col cols="12" class="pa-0">
                        <p class="area-subtitle mb-10">Returns</p>
                        <v-row class="ma-0">
                            <v-col cols="12" class="pa-0 mb-10" style="border-bottom: 1px solid #e8e8e8">
                                <v-tabs class="d-table-cell v-align-bottom performance-tabs" v-model="tab.performanceTab">
                                    <v-tab class="performance-tab">Cumulative</v-tab>
                                    <v-tab class="performance-tab">Calendar Year</v-tab>
                                </v-tabs>
                            </v-col>
                            <v-col cols="12" class="pa-0">
                                <v-tabs-items v-model="tab.performanceTab">
                                    <v-tab-item>
                                        <div class="text-right mb-10p">
                                            <p class="mb-0 mr-3 d-inline-flex font-size-18 color-gray-two v-align-bottom">as of</p>
                                            <custom-select-component
                                                :options="data.dateArr.returns"
                                                @input="changeSelect"
                                                areaClass="v-align-sub"
                                                selectClass="search-select"
                                                itemsClass="search-items"
                                            >
                                            </custom-select-component>
                                        </div>
                                        <table class="performance-table" cellspacing="0">
                                            <colgroup>
                                                <col width="50%" />
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th>YTD</th>
                                                    <th>1m</th>
                                                    <th>3m</th>
                                                    <th>6m</th>
                                                    <th>1y</th>
                                                    <th>3y</th>
                                                    <th>5y</th>
                                                    <th>10y</th>
                                                    <th class="text-right pr-5">Incept.</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Total Return(%)</td>
                                                    <td>{{ data.priceCalc.YTD ? Math.round(data.priceCalc.YTD * 100) / 100 : '-' }}</td>
                                                    <td>{{ data.priceCalc.M1 ? Math.round(data.priceCalc.M1 * 100) / 100 : '-' }}</td>
                                                    <td>{{ data.priceCalc.M3 ? Math.round(data.priceCalc.M3 * 100) / 100 : '-' }}</td>
                                                    <td>{{ data.priceCalc.M6 ? Math.round(data.priceCalc.M6 * 100) / 100 : '-' }}</td>
                                                    <td>{{ data.priceCalc.Y1 ? Math.round(data.priceCalc.Y1 * 100) / 100 : '-' }}</td>
                                                    <td>{{ data.priceCalc.Y3 ? Math.round(data.priceCalc.Y3 * 100) / 100 : '-' }}</td>
                                                    <td>{{ data.priceCalc.Y5 ? Math.round(data.priceCalc.Y5 * 100) / 100 : '-' }}</td>
                                                    <td>{{ data.priceCalc.Y10 ? Math.round(data.priceCalc.Y10 * 100) / 100 : '-' }}</td>
                                                    <td class="text-right pr-5">{{ data.priceCalc.CumReturn ? Math.round(data.priceCalc.CumReturn * 100) / 100 : '-' }}</td>
                                                </tr>
                                                <tr>
                                                    <td>Benchmark(%)</td>
                                                    <td>{{ data.bmPriceCalc.YTD ? Math.round(data.bmPriceCalc.YTD * 100) / 100 : '-' }}</td>
                                                    <td>{{ data.bmPriceCalc.M1 ? Math.round(data.bmPriceCalc.M1 * 100) / 100 : '-' }}</td>
                                                    <td>{{ data.bmPriceCalc.M3 ? Math.round(data.bmPriceCalc.M3 * 100) / 100 : '-' }}</td>
                                                    <td>{{ data.bmPriceCalc.M6 ? Math.round(data.bmPriceCalc.M6 * 100) / 100 : '-' }}</td>
                                                    <td>{{ data.bmPriceCalc.Y1 ? Math.round(data.bmPriceCalc.Y1 * 100) / 100 : '-' }}</td>
                                                    <td>{{ data.bmPriceCalc.Y3 ? Math.round(data.bmPriceCalc.Y3 * 100) / 100 : '-' }}</td>
                                                    <td>{{ data.bmPriceCalc.Y5 ? Math.round(data.bmPriceCalc.Y5 * 100) / 100 : '-' }}</td>
                                                    <td>{{ data.bmPriceCalc.Y10 ? Math.round(data.bmPriceCalc.Y10 * 100) / 100 : '-' }}</td>
                                                    <td class="text-right pr-5">{{ data.bmPriceCalc.CumReturn ? Math.round(data.bmPriceCalc.CumReturn * 100) / 100 : '-' }}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </v-tab-item>
                                    <v-tab-item>
                                        <table class="performance-table" cellspacing="0">
                                            <colgroup>
                                                <col width="65%" />
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th>2017</th>
                                                    <th>2018</th>
                                                    <th>2019</th>
                                                    <th>2020</th>
                                                    <th>2021</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Total Return(%)</td>
                                                    <td>2.02</td>
                                                    <td>2.36</td>
                                                    <td>2.13</td>
                                                    <td>2.05</td>
                                                    <td>1.92</td>
                                                </tr>
                                                <tr>
                                                    <td>Benchmark(%)</td>
                                                    <td>2.19</td>
                                                    <td>1.02</td>
                                                    <td>2.52</td>
                                                    <td>2.42</td>
                                                    <td>3.18</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </v-tab-item>
                                </v-tabs-items>
                            </v-col>
                        </v-row>
                        <div class="w-100 bg-white-two color-black font-size-18" style="padding: 25px 19px; line-height: 31.5px">
                            The performance quoted represents past performnace and does not guarantee future results. Investment return and principle value of an investment will fluctuate so that an
                            investor's shares, when sold or redeemed, may be worth more or less than the original cost. Currnet performance may be lower or higher than the performance quoted.
                        </div>
                    </v-col>
                </v-row>
            </v-col>
            <div class="w-100">
                <v-divider class="ma-auto gray-divider"></v-divider>
            </div>
            <v-col cols="12" class="area04 area" id="holdings-section" style="border-bottom: 0px !important">
                <v-row class="px-150p wrapper-1920 mb-120p">
                    <p class="menu-sub-title font-weight-black mb-20">HOLDINGS</p>
                    <v-col cols="12" class="pa-0">
                        <p class="area-subtitle mb-10">Exposure Breackdown</p>
                    </v-col>
                    <v-col cols="12" md="6" class="pa-0">
                        <figure class="highcharts-figure">
                            <template v-if="data.holdingsAssetData.length > 0">
                                <div id="assetChart"></div>
                            </template>
                            <template v-else>
                                <div class="text-center d-table w-100 chart-none">
                                    <strong class="font-size-40 d-table-cell v-align-middle">-</strong>
                                </div>
                            </template>
                        </figure>
                        <div class="text-center">
                            <p class="mb-5 font-size-24 color-black font-weight-bold">Asset Allocation (% of net worth)</p>
                            <v-row class="ma-0 justify-center" v-for="(item, idx) in data.holdingsAssetData" :key="idx">
                                <v-col md="4" cols="6" class="py-0 pr-0 text-left" :class="$vuetify.breakpoint.mdAndDown ? 'pl-5' : 'pl-15'">
                                    <button
                                        type="button"
                                        class="mr-10p mt-5 mb-5"
                                        style="width: 18px; height: 18px; border-radius: 9px"
                                        :style="`background-color: ${chart.colorArr[idx % 4]}`"
                                    ></button>
                                    <span class="font-size-24 color-black">{{ item.assetClassName }}</span>
                                </v-col>
                                <v-col md="3" cols="6" class="py-0 pl-0 pr-15 text-right mt-14p mb-3">
                                    <span class="font-size-24 color-black">{{ ((Math.round(item.assetClassSum * 10000) / 10000) * 100).toFixed(2) }}%</span>
                                </v-col>
                            </v-row>
                        </div>
                    </v-col>
                    <v-col cols="12" md="6" class="pa-0">
                        <figure class="highcharts-figure">
                            <template v-if="data.holdingsSectorData.length > 0">
                                <div id="sectorChart"></div>
                            </template>
                            <template v-else>
                                <div class="text-center d-table w-100 chart-none">
                                    <strong class="font-size-40 d-table-cell v-align-middle">-</strong>
                                </div>
                            </template>
                        </figure>
                        <div class="text-center">
                            <p class="mb-5 font-size-24 color-black font-weight-bold">Sector Allocation (% of net worth)</p>
                            <v-row class="ma-0 justify-center" v-for="(item, idx) in data.holdingsSectorData" :key="idx">
                                <v-col md="4" cols="6" class="py-0 pr-0 text-left" :class="$vuetify.breakpoint.mdAndDown ? 'pl-5' : 'pl-15'">
                                    <button
                                        type="button"
                                        class="mr-10p mt-5 mb-5"
                                        style="width: 18px; height: 18px; border-radius: 9px"
                                        :style="`background-color: ${chart.colorArr[idx % 4]}`"
                                    ></button>
                                    <span class="font-size-24 color-black">{{ item.sectorName }}</span>
                                </v-col>
                                <v-col md="3" cols="6" class="py-0 pl-0 pr-15 text-right mt-14p mb-3">
                                    <span class="font-size-24 color-black">{{ ((Math.round(item.assetClassSum * 10000) / 10000) * 100).toFixed(2) }}%</span>
                                </v-col>
                            </v-row>
                        </div>
                    </v-col>
                </v-row>
                <v-row class="ma-0 bg-white-three">
                    <div class="wrapper-1920 py-10 px-150p">
                        <v-row class="ma-0">
                            <v-col cols="12" md="6" class="pa-0" :class="$vuetify.breakpoint.mdAndDown ? 'mb-4' : ''">
                                <input type="text" class="holdings-search-box" placeholder="Filter list by keyword" />
                            </v-col>
                            <v-col cols="12" md="6" class="pa-0">
                                <div class="text-right">
                                    <p class="mb-0 mr-3 d-inline-flex font-size-18 color-gray-two v-align-bottom">as of</p>
                                    <custom-select-component :options="data.dateArr.returns" @input="changeSelect" areaClass="v-align-sub" selectClass="search-select" itemsClass="search-items">
                                    </custom-select-component>
                                </div>
                            </v-col>
                        </v-row>
                        <v-col cols="12" class="pa-0" style="margin-top: 13px; margin-bottom: 66px">
                            <table class="holdings-table" cellspacing="0">
                                <colgroup>
                                    <col width="10%" />
                                    <col width="40%" />
                                    <col width="16.666%" />
                                    <col width="16.666%" />
                                    <col width="16.666%" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th class="text-left">
                                            Ticker
                                            <img :src="img.arrowDownImg" class="v-align-middle" />
                                        </th>
                                        <th class="text-left">
                                            Name
                                            <img :src="img.arrowDownImg" class="v-align-middle" />
                                        </th>
                                        <th class="text-right">
                                            Sector
                                            <img :src="img.arrowDownImg" class="v-align-middle" />
                                        </th>
                                        <th class="text-right">
                                            Asset Class
                                            <img :src="img.arrowDownImg" class="v-align-middle" />
                                        </th>
                                        <th class="text-right">
                                            Weight (%)
                                            <img :src="img.arrowDownImg" class="v-align-middle" />
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item, idx) in data.strategyAssetList.dataTable.items" :key="'holding-list' + idx">
                                        <td class="color-black text-left" style="font-weight: 600">{{ item.assetCode || '-' }}</td>
                                        <td class="color-black text-left" style="font-weight: 600">{{ item.assetName || '-' }}</td>
                                        <td class="color-gray text-right">{{ item.sectorName || '-' }}</td>
                                        <td class="color-gray text-right">{{ item.assetClassName || '-' }}</td>
                                        <td class="color-gray text-right">{{ item.weight ? (Math.round(item.weight * 10000) / 10000) * 100 : '0' }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </v-col>
                        <v-col cols="12" class="pa-0">
                            <v-row class="ma-0 mb-12" justify="center">
                                <v-col cols="12" md="6" class="pa-0 text-center">
                                    <div class="page-control-box" v-if="data.strategyAssetList.dataTable.serverItemsLength > 0">
                                        <div class="page-control-box-in">
                                            <a
                                                href="javascript:void(0);"
                                                class="pt-1 prev-btn block img-box mr-15p"
                                                @click="data.strategyAssetList.pagination.hasPrevious ? data.strategyAssetList.pagination.pageStart - 1 : ''"
                                            >
                                                <img :src="img.arrowLeftImg" alt="" />
                                            </a>
                                            <template v-for="(item, idx) in data.strategyAssetList.pageList">
                                                <a
                                                    :key="'strategyAssetPage' + idx"
                                                    href="javascript:void(0);"
                                                    :class="data.strategyAssetList.dataTable.page == item ? 'active' : ''"
                                                    class="number block"
                                                    @click="data.strategyAssetList.dataTable.page = item"
                                                    >{{ item }}</a
                                                >
                                            </template>
                                            <a
                                                href="javascript:void(0);"
                                                class="pt-1 next-btn block img-box ml-15p"
                                                @click="data.strategyAssetList.pagination.hasNext ? data.strategyAssetList.pagination.pageEnd + 1 : ''"
                                            >
                                                <img :src="img.arrowRightImg" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                </v-col>
                            </v-row>
                            <div class="w-100 font-size-18 color-black bg-white-two" style="padding: 25px 19px">
                                <p style="line-height: 31.5px">
                                    The values shown for “market value,” “weight,” and “notional value” (the “calculated values”) are based off of a price provided by a third-party pricing vendor for
                                    the portfolio holding and do not reflect the impact of systematic fair valuation (“the vendor price”). The vendor price is not necessarily the price at which the
                                    Fund values the portfolio holding for the purposes of determining its net asset value (the “valuation price”). Additionally, where applicable, foreign currency
                                    exchange rates with respect to the portfolio holdings denominated in non-U.S. currencies for the valuation price will be generally determined as of the close of
                                    business on the New York Stock Exchange, whereas for the vendor price will be generally determined as of 4 p.m. London. The calculated values may have been
                                    different if the valuation price were to have been used to calculate such values. The vendor price is as of the most recent date for which a price is available and
                                    may not necessarily be as of the date shown above.
                                </p>
                                <p>Please see the “Determination of Net Asset Value” section of each Fund’s prospectus for additional information on the Fund’s valuation policies and procedures.</p>
                            </div>
                        </v-col>
                    </div>
                </v-row>
            </v-col>
            <div class="w-100">
                <v-divider class="ma-auto gray-divider"></v-divider>
            </div>
            <v-col cols="12" class="area05 area wrapper-1920" id="historical-section">
                <p class="menu-sub-title font-weight-black mb-20">HISTORICAL</p>
                <v-row class="ma-0">
                    <p class="area-subtitle mb-10">Recommended Portfolio (Past)</p>
                    <v-col cols="12" class="pa-0">
                        <figure class="highcharts-figure mb-10">
                            <div id="historicalChart"></div>
                        </figure>
                        <p class="font-size-18 color-black font-weight-light">
                            ※ETFs provide an opportunity-searching approach to popular investment topics and breakthrough innovations.<br />
                            Target medium to high school (5) risk levels with a historical portfolio volatility level of 10% vs. mid to late (15-19%).
                        </p>
                    </v-col>
                </v-row>
            </v-col>
            <div class="w-100">
                <v-divider class="ma-auto gray-divider"></v-divider>
            </div>
            <v-col cols="12" class="area06 area wrapper-1920" id="fees-section">
                <p class="menu-sub-title font-weight-black mb-20">FEES</p>
                <v-row class="ma-0">
                    <v-col cols="12" md="6" class="pa-0">
                        <v-row class="ma-0 px-5 pb-5 font-size-18" style="border-bottom: 1px solid #b3b3b3">
                            <v-col cols="6" class="text-left pa-0">
                                <span class="color-black">Management Fee</span>
                            </v-col>
                            <v-col cols="6" class="text-right pa-0">
                                <span class="color-gray">{{ data.strategy.advisoryFee || '-' }}</span>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>
            <div class="w-100">
                <v-divider class="ma-auto gray-divider"></v-divider>
            </div>
            <v-col cols="12" class="area07 area wrapper-1920" id="literature-section">
                <p class="menu-sub-title font-weight-black mb-51p">LITERATURE</p>
                <v-row class="ma-0">
                    <v-col cols="12" md="6" class="py-0 pl-0" :class="$vuetify.breakpoint.mdAndDown ? 'pr-0' : 'pr-30p'">
                        <v-row class="ma-0 font-size-24 pa-5 literature-div cursor--pointer" style="border-bottom: 1px solid #b3b3b3">
                            <v-col cols="8" md="6" class="pa-0" @click="reportProduct">
                                <img :src="img.pdfIconImg" class="v-align-middle" />
                                <p class="mb-0 d-inline-flex v-align-middle" style="font-weight: 600" :class="$vuetify.breakpoint.mdAndDown ? 'ml-7' : 'ml-17'">Product List</p>
                            </v-col>
                            <v-col cols="4" md="6" class="pa-0 d-flex justify-end align-center" @click="reportProduct">
                                <img :src="img.arrowRightImg" />
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12" md="6" class="py-0 pr-0" :class="$vuetify.breakpoint.mdAndDown ? 'pl-0' : 'pl-30p'">
                        <v-row class="ma-0 font-size-24 pa-5 literature-div cursor--pointer" style="border-bottom: 1px solid #b3b3b3">
                            <v-col cols="8" md="6" class="pa-0" @click="reportSheet">
                                <img :src="img.pdfIconImg" class="v-align-middle" />
                                <p class="mb-0 d-inline-flex v-align-middle" style="font-weight: 600" :class="$vuetify.breakpoint.mdAndDown ? 'ml-7' : 'ml-17'">Fact Sheet</p>
                            </v-col>
                            <v-col cols="4" md="6" class="pa-0 d-flex justify-end align-center" @click="reportSheet">
                                <img :src="img.arrowRightImg" />
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/data.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="https://code.highcharts.com/modules/export-data.js"></script>
<script src="https://code.highcharts.com/modules/accessibility.js"></script>

<script lang="ts">
import Vue from 'vue';
import moment from 'moment';
import Highcharts from 'highcharts';
import Stock from 'highcharts/modules/stock';
import store from '@/config/store';
import meta from '@/api/meta';

import searchImg from '@/assets/images/searchImg.png';
import announceBlackImg from '@/assets/images/icon_announcement_black.png';
import announceWhiteImg from '@/assets/images/icon_announcement_white.png';
import pdfIconImg from '@/assets/images/icon_pdf.png';
import arrowDownImg from '@//assets/images/icon_arrow_down_small.png';
import arrowLeftImg from '@//assets/images/icon_arrow_left_big.png';
import arrowRightImg from '@//assets/images/icon_arrow_right_big.png';

Stock(Highcharts);

export default Vue.extend({
    data() {
        return {
            scrollPosition: 0,
            activeTab: 0,
            flag: {
                scroll: false,
            },
            img: {
                searchImg,
                pdfIconImg,
                arrowLeftImg,
                arrowRightImg,
                arrowDownImg,
                announceBlackImg,
                announceWhiteImg,
            },
            tab: {
                performanceTab: 0,
                growthTab: 0,
            },
            chart: {
                colorArr: [] as any,
            },
            data: {
                strategyId: 0,
                strategy: {
                    name: '',
                    strategyCategory: '',
                } as any,
                strategyAssetList: {
                    dataTable: {
                        items: [],
                        serverItemsLength: 0,
                        page: 1,
                        itemsPerPage: 10,
                    },
                    pagination: {},
                    pageList: [] as any,
                    searchName: null,
                },
                priceCalc: {} as any,
                bmPriceCalc: {} as any,
                holdingsAssetData: [] as any,
                holdingsSectorData: [] as any,
                returns: '1',
                dateArr: {
                    returns: [
                        { text: 'Apr 30, 2022', value: '1' },
                        { text: 'Mar 31, 2022', value: '2' },
                        { text: 'Dec 31, 2029', value: '3' },
                    ],
                },
            },
        };
    },
    watch: {
        'data.strategyAssetList.dataTable.page'(item: number) {},
    },
    methods: {
        async getStrategy() {
            const strategy = (
                await meta.api.common.strategy.getStrategy({
                    id: this.data.strategyId,
                })
            ).data;

            if (strategy == null || strategy == '') {
                store.commit('app/SET_LOADING', false);
                await meta.alert('존재하지 않는 포트폴리오입니다.');
                this.$router.push('/');
                return;
            }

            this.data.strategy = strategy;

            this.data.priceCalc = strategy.priceCalcList[strategy.name];
            this.data.bmPriceCalc = strategy.bmPriceCalcList[strategy.name];
        },
        setPerformanceChart() {
            let i = 0;

            let bmPriceDate = [];
            let priceDate = [];

            const dateList = this.data.strategy.date.split(',');
            const priceList = this.data.strategy.price.split(',');
            const bmPriceList = this.data.strategy.bmPrice.split(',');

            for (i = 0; i < bmPriceList.length; i += 1) {
                const date = new Date(dateList[i]);
                bmPriceDate.push([Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()), Math.round(Number(bmPriceList[i]) * 100) / 100]);
            }

            for (i = 0; i < priceList.length; i += 1) {
                const date = new Date(dateList[i]);
                priceDate.push([Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()), Math.round(Number(priceList[i]) * 100) / 100]);
            }

            Highcharts.setOptions({
                lang: {
                    rangeSelectorTo: 'To',
                    rangeSelectorZoom: '',
                },
            });

            Highcharts.chart('performanceChart', {
                chart: {
                    events: {
                        render: function () {
                            const chart = this as any,
                                startX = 0,
                                startY = 40,
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
                    spacingRight: 0,
                    spacingLeft: 0,
                },
                exporting: {
                    // 상단 context menu 제거
                    enabled: false,
                },
                title: {
                    text: '',
                },
                credits: { enabled: false }, // 하단 highchart.com 글씨 삭제
                xAxis: {
                    type: 'datetime',
                    tickColor: '#000',
                    tickInterval: 24 * 60 * 60 * 1000 * 125,
                    labels: {
                        formatter: function () {
                            return Highcharts.dateFormat('%b %d, %Y', Number(this.value));
                        },
                        style: {
                            color: '#000',
                            fontSize: '18px',
                        },
                    },
                    // lineColor: '#000',
                    // lineWidth: 1,
                },
                yAxis: {
                    labels: {
                        format: '{value:,.0f}',
                    },
                    title: {
                        text: '',
                    },
                },
                scrollbar: {
                    enabled: false,
                },
                rangeSelector: {
                    enabled: true,
                    inputEnabled: false,
                    dropdown: 'responsive',
                    allButtonsEnabled: false,
                    labelStyle: {
                        display: 'none',
                    },
                    buttonTheme: {
                        fill: 'none',
                        stroke: 'none',
                        'stroke-width': 0,
                        r: 8,
                        style: {
                            color: '#b3b3b3',
                            fontWeight: '900',
                        },
                        states: {
                            hover: {
                                fill: 'none',
                            },
                            select: {
                                fill: 'none',
                                style: {
                                    color: 'black',
                                },
                            },
                        },
                    },
                    x: -80,
                    buttonPosition: {
                        align: 'left',
                        x: 0,
                        y: 0,
                    },
                    buttons: [
                        {
                            type: 'month',
                            count: 1,
                            text: '1m',
                        },
                        {
                            type: 'month',
                            count: 3,
                            text: '3m',
                        },
                        {
                            type: 'month',
                            count: 6,
                            text: '6m',
                        },
                        {
                            type: 'ytd',
                            text: 'YTD',
                        },
                        {
                            type: 'year',
                            count: 1,
                            text: '1y',
                        },
                        {
                            type: 'year',
                            count: 3,
                            text: '3y',
                        },
                        {
                            type: 'year',
                            count: 5,
                            text: '5y',
                        },
                        {
                            type: 'year',
                            count: 10,
                            text: '10y',
                        },
                        {
                            type: 'all',
                            text: 'All',
                        },
                    ],
                },
                responsive: {
                    rules: [
                        {
                            condition: {
                                maxWidth: 550,
                            },
                            chartOptions: {
                                rangeSelector: {
                                    x: 0,
                                    buttonPosition: {
                                        align: 'left',
                                        x: -40,
                                        y: 0,
                                    },
                                },
                            },
                        },
                        {
                            condition: {
                                maxWidth: 730,
                            },
                            chartOptions: {
                                legend: {
                                    y: 0,
                                },
                                chart: {
                                    events: {
                                        render: function () {
                                            const chart = this as any,
                                                startX = 0,
                                                startY = 75,
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
                            },
                        },
                    ],
                },
                tooltip: {
                    shared: true,
                    crosshairs: true,
                    borderColor: '#000',
                    backgroundColor: '#fff',
                    xDateFormat: '%b %e, %Y',
                    useHTML: true,
                    headerFormat: '<table style="border:0px;"><tr><td colspan="2" style="border:0px; height:20px;"><span style="color:#808080; font-size:14px;">{point.key}</span></td></tr>',
                    pointFormat:
                        '<tr><td style="border:0px; height:20px;"><div style="width:11px; height:11px; background-color:{series.color}; border:1px solid #000; border-radius:50%; float:left; margin-top:8px;"></div>' +
                        '<span style="font-size:18px; color:{series.color}; padding-left:10px;">{series.name}</span></td>' +
                        '<td style="border:0px; height:20px;"><span style="font-size:18px; font-weight:bold; padding-left:100px;">${point.y}</span></td></tr>',
                    footerFormat: '</table>',
                    valueDecimals: 2,
                },
                plotOptions: {
                    series: {
                        marker: {
                            enabled: false,
                            fillColor: '#fff',
                            lineWidth: 2,
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
                legend: {
                    layout: 'horizontal',
                    align: 'right',
                    margin: 40,
                    y: -40,
                    verticalAlign: 'top',
                    symbolHeight: 0.001,
                    symbolWidth: 0.001,
                    symbolRadius: 0.001,
                    useHTML: true,
                    labelFormatter: function () {
                        return `<span style="display:flex; place-items: center; gap: 3px;">
                                <div style="background-color: ${this.color}; width:15px; height:15px; border-radius: 50%; float:left; margin-right:5px;"></div>
                                <span>${this.name}</span></span>`;
                    },
                },
                series: [
                    {
                        name: 'Historical NAVs',
                        data: bmPriceDate,
                        color: meta.chart.colorArr[0],
                    },
                    {
                        name: 'Historical Prices',
                        data: priceDate,
                        color: meta.chart.colorArr[1],
                    },
                ],
            });

            // Highcharts.stockChart('performanceChart', {
            //     credits: { enabled: false }, // 하단 highchart.com 글씨 삭제
            //     navigator: {
            //         enabled: false,
            //     },
            //     scrollbar: {
            //         enabled: false,
            //     },
            //     xAxis: {
            //         type: 'datetime',
            //         lineColor: '#000000',
            //         tickColor: '#000000',
            //         tickmarkPlacement: 'on',
            //         tickInterval: 24 * 60 * 60 * 1000 * 20,
            //         labels: {
            //             formatter: function () {
            //                 return Highcharts.dateFormat('%b %d, %Y', Number(this.value));
            //             },
            //             style: {
            //                 color: '#000000',
            //                 fontSize: '18px',
            //                 fontWeight: 'bold',
            //             },
            //         },
            //     },
            //     yAxis: {
            //         opposite: false,
            //         labels: {
            //             style: {
            //                 color: '#b3b3b3',
            //                 fontSize: '18px',
            //                 fontWeight: 'bold',
            //             },
            //         },
            //     },
            //     plotOptions: {
            //         series: {
            //             marker: {
            //                 enabled: false,
            //                 fillColor: '#fff',
            //                 lineWidth: 2,
            //             },
            //         },
            //         area: {
            //             fillColor: {
            //                 linearGradient: {
            //                     x1: 0,
            //                     y1: 0,
            //                     x2: 0,
            //                     y2: 1,
            //                 },
            //                 stops: [
            //                     [0, Highcharts.getOptions().colors[0]],
            //                     [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')],
            //                 ],
            //             },
            //             lineWidth: 1,
            //             states: {
            //                 hover: {
            //                     lineWidth: 1,
            //                 },
            //             },
            //         },
            //     },
            //     tooltip: {
            //         split: false,
            //         shared: false,
            //         crosshairs: false,
            //         borderColor: '#000',
            //         backgroundColor: '#fff',
            //         xDateFormat: '%b %e, %Y',
            //         useHTML: true,
            //         pointFormat:
            //             '<table style="border:0px;">' +
            //             '<tr><td style="border:0px; height:20px;"><div style="width:11px; height:11px; background-color:{series.color}; border:1px solid #000; border-radius:50%; float:left; margin-top:8px;"></div>' +
            //             '<span style="font-size:18px; color:{series.color}; padding-left:10px;">{series.name}</span></td>' +
            //             '<td style="border:0px; height:20px;"><span style="font-size:18px; font-weight:bold; padding-left:50px;">${point.y}</span></td></tr>' +
            //             '</table>',
            //     },
            //     legend: {
            //         enabled: true,
            //         // verticalAlign: 'top',
            //         // align: 'right',
            //     },
            //     rangeSelector: {
            //         buttonTheme: {
            //             // styles for the buttons
            //             states: {
            //                 hover: {},
            //                 select: {
            //                     fill: '#039',
            //                     style: {
            //                         color: 'white',
            //                     },
            //                 },
            //                 // disabled: { ... }
            //             },
            //         },
            //         inputBoxBorderColor: 'gray',
            //         inputBoxWidth: 184,
            //         inputBoxHeight: 29,
            //         inputStyle: {
            //             fontSize: '18px',
            //             color: '#000000',
            //             fontWeight: 'bold',
            //         },
            //         labelStyle: {
            //             color: '#000000',
            //             fontWeight: 'bold',
            //         },
            //         selected: 1,
            //     },
            //     series: [
            //         {
            //             name: 'Historical NAVs',
            //             data: bmPriceDate,
            //             color: meta.chart.colorArr[0],
            //         },
            //         {
            //             name: 'Historical Prices',
            //             data: priceDate,
            //             color: meta.chart.colorArr[1],
            //         },
            //     ],
            // });
        },
        async setHoldingsChart() {
            const assetData = (await meta.api.common.strategyHoldings.getHoldingsAssetClassSumByMaxDate(this.data.strategyId)).data;
            const sectorData = (await meta.api.common.strategyHoldings.getHoldingsSectorSumByMaxDate(this.data.strategyId)).data;

            let assetTemp: any = [];
            let sectorTemp: any = [];

            this.data.holdingsAssetData = assetData;
            this.data.holdingsSectorData = sectorData;

            assetData.forEach((e: any, idx: number) => {
                assetTemp.push({ name: e.assetClassName, color: meta.chart.colorArr[idx % 4], y: Number(((Math.round(e.assetClassSum * 10000) / 10000) * 100).toFixed(2)) });
            });

            sectorData.forEach((e: any, idx: number) => {
                sectorTemp.push({ name: e.sectorName, color: meta.chart.colorArr[idx % 4], y: Number(((Math.round(e.sectorSum * 10000) / 10000) * 100).toFixed(2)) });
            });

            this.$nextTick(() => {
                if (this.data.holdingsAssetData.length > 0) {
                    Highcharts.chart('assetChart', {
                        credits: { enabled: false }, // 하단 highchart.com 글씨 삭제
                        legend: {
                            enabled: false,
                            // title:{
                            //     text:'<div style="font-size: 18px; font-weight: bold;">' +'Asset Allocation (% of net worth)' + '</div>',
                            // },
                            // align: 'center',
                            // symbolWidth: 18,
                            // layout: 'vertical',
                            // useHTML: true,
                            // labelFormatter: function () {
                            //     let name = this.name.length > 20 ? this.name.substr(0, 20) + '...' : this.name;
                            //     return '<div style="font-size:16px; width: 240px; display: flex;"><div style="float:left; width: 50%">' + `${name}` + '</div><div style="float:right; position: absolute; right: 0;">' + `${this.y}%` + '</div></div>'
                            // },
                            // itemMarginTop: 20,
                            // itemMarginBottom: 20,
                        },
                        title: {
                            text: '',
                        },
                        tooltip: {
                            valueSuffix: '%',
                        },
                        accessibility: {
                            point: {
                                valueSuffix: '%',
                            },
                        },
                        exporting: {
                            // 상단 context menu 제거
                            enabled: false,
                        },
                        plotOptions: {
                            pie: {
                                borderColor: '#000000',
                                dataLabels: {
                                    enabled: false,
                                },
                                startAngle: 0,
                                endAngle: 360,
                                center: ['50%', '50%'],
                                size: 328,
                                showInLegend: true,
                            },
                        },
                        series: [
                            {
                                showInLegend: true,
                                type: 'pie',
                                innerSize: '50%',
                                data: assetTemp,
                            },
                        ],
                    });
                }

                if (this.data.holdingsSectorData.length > 0) {
                    Highcharts.chart('sectorChart', {
                        credits: { enabled: false }, // 하단 highchart.com 글씨 삭제
                        legend: {
                            enabled: false,
                            // title:{
                            //     text:'<div style="font-size: 18px; font-weight: bold;">' +'Sector Allocation (% of net worth)' + '</div>',
                            // },
                            // align: 'center',
                            // symbolWidth: 18,
                            // layout: 'vertical',
                            // useHTML: true,
                            // labelFormatter: function () {
                            //     let name = this.name.length > 20 ? this.name.substr(0, 20) + '...' : this.name;
                            //     return '<div style="font-size:16px; width: 240px; display: flex;"><div style="float:left; width: 50%">' + `${name}` + '</div><div style="float:right; position: absolute; right: 0;">' + `${this.y}%` + '</div></div>'
                            // },
                            // itemMarginTop: 20,
                            // itemMarginBottom: 20,
                        },
                        title: {
                            text: '',
                        },
                        tooltip: {
                            valueSuffix: '%',
                        },
                        accessibility: {
                            point: {
                                valueSuffix: '%',
                            },
                        },
                        exporting: {
                            // 상단 context menu 제거
                            enabled: false,
                        },
                        plotOptions: {
                            pie: {
                                borderColor: '#000000',
                                dataLabels: {
                                    enabled: false,
                                },
                                // startAngle: 0,
                                // endAngle: 360,
                                center: ['50%', '50%'],
                                size: 328,
                                showInLegend: true,
                            },
                        },
                        series: [
                            {
                                showInLegend: true,
                                type: 'pie',
                                innerSize: '50%',
                                data: sectorTemp,
                            },
                        ],
                    });
                }
            });
        },
        async setHoldingsAssetList() {
            let pageList = [];
            let i = 0;

            const { data } = await meta.api.common.strategyHoldings.getHoldingsAssetList({
                page: this.data.strategyAssetList.dataTable.page,
                rowSize: this.data.strategyAssetList.dataTable.itemsPerPage,
                id: this.data.strategyId,
            });

            this.data.strategyAssetList.pagination = data;
            this.data.strategyAssetList.dataTable.serverItemsLength = data.totalRows;

            for (i = data.pageStart; i <= data.pageEnd; i++) {
                pageList.push(i);
            }

            this.data.strategyAssetList.pageList = pageList;
            this.data.strategyAssetList.dataTable.items = data.items;
        },
        async setHistoricalChart() {
            const { data } = await meta.api.common.strategyHoldings.getHoldingsAssetListGroupByAssetClass(this.data.strategyId);
            let dataSet = [] as any;
            let categoryArr = [] as any;

            data.forEach((x: any, idx: number) => {
                const dateArr = x.dateArr.split(',');
                const weightArr = x.weightArr.split(',');
                const tmpArr = [];
                let i = 0;

                for (i = 0; i < dateArr.length; i += 1) {
                    const date = new Date(dateArr[i]);
                    tmpArr.push([Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()), (Math.round(Number(weightArr[i]) * 10000) / 10000) * 100]);
                    categoryArr.push(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
                }

                dataSet.push({ name: x.assetClassName, color: meta.chart.colorArr[idx % 4], data: tmpArr });
            });

            Highcharts.chart('historicalChart', {
                chart: {
                    type: 'area',
                    events: {
                        load: function () {
                            let div = this.xAxis[0] as any;

                            let labelGroup = div.labelGroup.element;

                            labelGroup.style.transform = 'translate(30px, 10px)';

                            let list = labelGroup.children;

                            for (let i = 0; i < list.length; i += 1) {
                                list[i].style.transform = 'rotate(0deg)';
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
                subtitle: {
                    text: '',
                },
                accessibility: {
                    point: {
                        valueDescriptionFormat: '{index}. {point.category}, {point.y}%.',
                    },
                },
                xAxis: {
                    type: 'datetime',
                    categories: categoryArr,
                    lineColor: '#000000',
                    tickColor: '#000000',
                    tickmarkPlacement: 'on',
                    tickInterval: 1,
                    allowDecimals: false,
                    useHTML: true,
                    labels: {
                        formatter() {
                            const chart: any = this.chart,
                                date = new Date(this.value),
                                self: any = this;

                            if (date.getFullYear() !== chart.lastYear) {
                                chart.lastYear = date.getFullYear();
                                return Highcharts.dateFormat('%Y', self.value);
                            }
                        },
                        style: {
                            color: '#000',
                            fontSize: '18px',
                            fontWeight: 600,
                        },
                    },
                },
                yAxis: [
                    {
                        lineWidth: 0,
                        gridLineColor: '#e8e8e8',
                        title: {
                            text: '',
                        },
                        max: 100,
                        labels: {
                            formatter: function () {
                                //Add percent sign to first value
                                if (this.isLast == true) {
                                    return this.value + '%';
                                } else {
                                    return this.value;
                                }
                            },
                            style: {
                                color: '#b3b3b3',
                                fontSize: '18px',
                            },
                        },
                    },
                ],
                tooltip: {
                    // shared: true,
                    // crosshairs: true,
                    xDateFormat: '%b.%d, %Y ',
                    valueSuffix: '%',
                    valueDecimals: 1,
                    style: {
                        fontSize: '13.5px',
                        color: '#000000',
                    },
                },
                // tooltip: {
                //     pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} millions)<br/>',
                // },
                legend: {
                    align: 'right',
                    verticalAlign: 'top',
                },
                plotOptions: {
                    size: '100%',
                    area: {
                        stacking: 'normal',
                        lineColor: '#000000',
                        lineWidth: 0.4,
                        marker: {
                            enabled: false,
                        },
                    },
                    column: {
                        stacking: 'normal',
                        pointPadding: 0,
                        groupPadding: 0,
                        borderWidth: 0,
                    },
                },
                series: dataSet,
            });
        },
        async reportProduct() {
            this.$store.commit('app/SET_LOADING', true);
            let reportProduct = (document.getElementById('reportProduct').src = '/reports/get-invested');

            window.addEventListener('message', (e) => {
                if (e.data.success === 'success') {
                    this.$store.commit('app/SET_LOADING', false);
                }
            });
        },
        async reportSheet() {
            this.$store.commit('app/SET_LOADING', true);
            let reportProduct = (document.getElementById('reportSheet').src = '/portfolios/portfolio-detail/report?strategyId=' + this.data.strategyId);

            window.addEventListener('message', (e) => {
                if (e.data.success === 'success') {
                    this.$store.commit('app/SET_LOADING', false);
                }
            });
        },
        moveTag(name: any) {
            const section: any = document.getElementById(name + '-section');
            window.scrollBy({ top: section.getBoundingClientRect().top - 100, behavior: 'smooth' });
        },
        async handleScroll() {
            this.scrollPosition = window.scrollY || document.documentElement.scrollTop;
            if (this.scrollPosition <= 600) {
                this.flag.scroll = false;
            } else {
                this.flag.scroll = true;
            }
        },
        changeSelect(data) {
            console.log(data);
        },
    },
    async mounted() {
        window.addEventListener('scroll', this.handleScroll);
        const strategyId = this.$route.query.strategyId as string;

        if (!strategyId || Number.isNaN(Number(strategyId))) {
            await meta.alert('잘못된 접근입니다.');
            this.$router.push('/');
            return;
        }
        this.data.strategyId = Number(strategyId);

        store.commit('app/SET_LOADING', true);
        await this.getStrategy();
        await this.setHoldingsAssetList();
        await this.setPerformanceChart();
        await this.setHoldingsChart();
        await this.setHistoricalChart();
        this.chart.colorArr = meta.chart.colorArr;
        store.commit('app/SET_LOADING', false);
    },
});
</script>

<style>
.theme-portfolio .search-select {
    width: 100%;
}

.v-select__selection--comma {
    padding-left: 10px;
}

.theme-portfolio .gray-divider {
    border: 5px solid #f3f3f3;
    max-width: calc(100% - 300px);
}

.theme-portfolio .menu-title {
    font-size: 64px !important;
    font-weight: 900;
    color: #000;
}

.theme-portfolio .menu-sub-title {
    font-size: 48px !important;
    font-weight: bold;
    color: #000;
}

.theme-portfolio .menu-sub2-title {
    font-size: 24px !important;
    color: #000;
}

.theme-portfolio .highcharts-range-selector {
    background-color: #fff;
}

.theme-portfolio .top {
    width: 100%;
    padding: 120px 150px;
    background-color: #fff;
}

.theme-portfolio .top button {
    width: 196px;
    height: 48px;
    color: #fff;
    background: #000;
    font-size: 20px;
}

.theme-portfolio .top .title-line {
    width: 72px;
    height: 12px;
    margin-bottom: 25px;
    background-color: #fd3f01;
}

.theme-portfolio .middle .tab-area {
    padding: 0 150px !important;
}

.theme-portfolio .middle .portfolio-tabs > div {
    background-color: inherit;
}

.theme-portfolio .middle .portfolio-tabs .v-tabs-slider-wrapper {
    height: 4px !important;
}

.theme-portfolio .middle .portfolio-tabs .v-tabs-slider-wrapper .v-tabs-slider {
    color: #000;
}

.theme-portfolio .middle .portfolio-tab a {
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 0px;
    color: #b3b3b3 !important;
    text-transform: none !important;
    line-height: 0px;
}

.theme-portfolio .middle .portfolio-tab.v-tab--active a {
    color: #000 !important;
    font-weight: 900;
}

.theme-portfolio .middle .portfolio-box {
    width: 100%;
    background-color: #000;
}

.theme-portfolio .middle .portfolio-box > div {
    padding: 70px 150px;
}

.theme-portfolio .middle .portfolio-box .line {
    border: 1px solid #808080;
    width: 300px;
    margin: 25px 0px;
}

/* .theme-portfolio .middle .portfolio-box .overview-area {
    flex: 1 0 20%;
} */

.theme-portfolio .center {
    position: fixed;
    width: 100%;
    z-index: 1;
    top: 95px;
    border-bottom: 1px solid #b3b3b3;
    background-color: #fff;
    padding-top: 30px;
}

.theme-portfolio .center .tab-area {
    padding: 0 150px !important;
}

.theme-portfolio .center .portfolio-tabs > div {
    background-color: inherit;
}

.theme-portfolio .center .portfolio-tabs .v-tabs-slider-wrapper {
    height: 4px !important;
}

.theme-portfolio .center .portfolio-tabs .v-tabs-slider-wrapper .v-tabs-slider {
    color: #000;
}

.theme-portfolio .center .portfolio-tab a {
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 0px;
    color: #b3b3b3 !important;
    text-transform: none !important;
    line-height: 0px;
}

.theme-portfolio .center .portfolio-tab.v-tab--active a {
    color: #000 !important;
    font-weight: 900;
}

.theme-portfolio .bottom {
    padding-bottom: 137.5px;
    background-color: #fff;
    margin: 0px;
}

.theme-portfolio .bottom .area-subtitle {
    font-size: 24px;
    color: #fd3f01;
    font-weight: 900;
}

.theme-portfolio .bottom .area {
    padding: 120px 150px;
}

.theme-portfolio .bottom .area02 .performance-tabs > div {
    background-color: inherit;
}

.theme-portfolio .bottom .area02 .performance-tabs .v-tabs-slider-wrapper {
    height: 4px !important;
}

.theme-portfolio .bottom .area02 .performance-tabs .v-tabs-slider-wrapper .v-tabs-slider {
    color: #000;
}

.theme-portfolio .bottom .area02 .performance-tab {
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 0px;
    color: #b3b3b3 !important;
    text-transform: none !important;
}

.theme-portfolio .bottom .area02 .performance-tab.v-tab--active {
    color: #000 !important;
    font-weight: 900;
}

.theme-portfolio .bottom .area02 .performance-table {
    width: 100%;
    border-top: 1px solid #000;
    font-size: 18px;
}

.theme-portfolio .bottom .area02 .performance-table thead tr {
    height: 40px;
}

.theme-portfolio .bottom .area02 .performance-table thead tr th {
    border-bottom: 1px solid #b3b3b3;
}

.theme-portfolio .bottom .area02 .performance-table tbody tr {
    height: 57px;
    color: #808080;
}

.theme-portfolio .bottom .area02 .performance-table tbody tr:hover {
    background-color: #ff754b;
    color: #000;
}

.theme-portfolio .bottom .area02 .performance-table tbody tr td {
    border-bottom: 1px solid #b3b3b3;
    text-align: center;
    font-weight: bold;
}

.theme-portfolio .bottom .area02 .performance-table tbody tr:nth-last-child(1) td {
    border-bottom: 0px;
}

.theme-portfolio .bottom .area02 .performance-table tbody tr td:nth-child(1) {
    text-align: left;
    padding-left: 12px;
}

.theme-portfolio .bottom .area04 {
    padding: 120px 0px !important;
}

.theme-portfolio .bottom .area04 .holdings-search-box {
    position: relative;
    border: 1px solid #000;
    color: #000;
    width: 100%;
    max-width: 479px;
    height: 29px;
    padding-left: 10px;
    background: url('/src/assets/images/magnify-glass.png') no-repeat 100% 50%;
    background-position: right 10px center;
}

.theme-portfolio .bottom .area04 .holdings-search-box::placeholder {
    color: #b3b3b3;
}

.theme-portfolio .bottom .area04 .holdings-table {
    width: 100%;
    border-top: 1px solid #000;
    font-size: 18px;
}

.theme-portfolio .bottom .area04 .holdings-table thead tr {
    height: 44px;
}

.theme-portfolio .bottom .area04 .holdings-table tbody tr {
    height: 55.5px;
}

.theme-portfolio .bottom .area04 .holdings-table tbody tr td {
    border-top: 1px solid #b3b3b3;
}

.theme-portfolio .bottom .area04 .holdings-table thead tr th:nth-child(1) {
    padding-left: 19px;
}

.theme-portfolio .bottom .area04 .holdings-table thead tr th:nth-last-child(1) {
    padding-right: 19px;
}

.theme-portfolio .bottom .area04 .holdings-table tbody tr td:nth-child(1) {
    padding-left: 19px;
}

.theme-portfolio .bottom .area04 .holdings-table tbody tr td:nth-last-child(1) {
    padding-right: 19px;
}

.theme-portfolio .bottom .area04 .holdings-table tbody tr:hover {
    background-color: #ff754b;
}

.theme-portfolio .bottom .area04 .holdings-table tbody tr:hover td {
    color: #000 !important;
}

.theme-portfolio .bottom .area07 {
    padding: 120px 150px 0px 150px;
}

.theme-portfolio .bottom .area07 .literature-div:hover {
    background-color: #f3f3f3;
}

/** rating 관련 클래스 */
.v-rating .v-icon {
    font-size: 18px;
    padding: 0rem;
}

.v-application .primary--text {
    color: #fd3f01 !important;
}

.theme-portfolio .chart-none {
    height: 400px;
}

.theme-portfolio .select-text {
    font-size: 18px;
    font-weight: bold;
    color: #000;
}

.theme-portfolio .v-list-item {
    font-size: 18px !important;
    font-weight: 600;
    color: #000;
    padding: 0 9px !important;
}

.theme-portfolio .mdi-checkbox-blank-circle-outline::before {
    content: '\F0130';
    color: #e8e8e8;
    background-color: #e8e8e8;
    border-radius: 10px;
    font-size: 16px;
    margin-right: 2px;
}

@media screen and (max-width: 1600px) {
    .theme-portfolio .menu-title {
        font-size: 48px !important;
    }

    .theme-portfolio .top {
        padding: 60px 80px;
    }

    .theme-portfolio .middle .tab-area {
        padding: 0 80px !important;
    }

    .theme-portfolio .middle .portfolio-box {
        padding: 80px !important;
    }

    .theme-portfolio .middle .portfolio-box .line {
        border: 1px solid #808080;
        width: 200px;
        margin: 25px 0px;
    }

    .theme-portfolio .center .tab-area {
        padding: 0 80px !important;
    }

    .theme-portfolio .center .portfolio-box {
        padding: 80px !important;
    }

    .theme-portfolio .center .portfolio-box .line {
        border: 1px solid #808080;
        width: 200px;
        margin: 25px 0px;
    }

    .theme-portfolio .bottom .area {
        padding: 60px 80px;
    }
}

@media screen and (max-width: 1440px) {
    .theme-portfolio .menu-title {
        font-size: 42px !important;
    }

    .theme-portfolio .middle .portfolio-box {
        padding: 60px !important;
    }

    .theme-portfolio .center {
        top: 55px;
    }

    .theme-portfolio .middle .portfolio-box > div {
        padding: 60px 80px !important;
    }
}

@media screen and (max-width: 1263px) {
    .theme-portfolio .gray-divider {
        border: 5px solid #f3f3f3;
        max-width: calc(100% - 160px);
    }

    .theme-portfolio .mb-20 {
        margin-bottom: 50px !important;
    }

    .theme-portfolio .mb-10 {
        margin-bottom: 30px !important;
    }

    .theme-portfolio .menu-title {
        font-size: 36px !important;
    }

    .theme-portfolio .menu-sub-title {
        font-size: 36px !important;
    }

    .theme-portfolio .menu-sub2-title {
        font-size: 20px !important;
    }

    .theme-portfolio .px-150p {
        padding-right: 80px !important;
        padding-left: 80px !important;
    }

    .theme-portfolio .top {
        padding: 30px 80px;
    }

    .theme-portfolio .top button {
        width: 150px;
        font-size: 16px;
    }

    .theme-portfolio .middle .tab-area {
        padding: 0 80px !important;
    }

    .theme-portfolio .middle .portfolio-box {
        padding: 80px;
    }

    .theme-portfolio .middle .portfolio-box .line {
        width: 160px;
    }

    .theme-portfolio .center .tab-area {
        padding: 0 80px !important;
    }

    .theme-portfolio .center .portfolio-box {
        padding: 80px;
    }

    .theme-portfolio .center .portfolio-box .line {
        width: 160px;
    }

    .theme-portfolio .bottom {
        padding-bottom: 0px;
    }

    .theme-portfolio .bottom .area {
        padding: 50px 80px;
    }

    .theme-portfolio .bottom .area02 .performance-tab {
        font-size: 20px;
    }

    .theme-portfolio .bottom .area04 {
        padding: 50px 0px !important;
    }
}

@media screen and (max-width: 959px) {
    .theme-portfolio .menu-title {
        font-size: 32px !important;
    }

    .theme-portfolio .menu-sub-title {
        font-size: 30px !important;
    }

    .theme-portfolio .menu-sub2-title {
        font-size: 20px !important;
    }

    .theme-portfolio .gray-divider {
        max-width: calc(100% - 40px);
    }

    .theme-portfolio .mb-20 {
        margin-bottom: 30px !important;
    }

    .theme-portfolio .mb-10 {
        margin-bottom: 20px !important;
    }

    .theme-portfolio .px-150p {
        padding-right: 20px !important;
        padding-left: 20px !important;
    }

    .theme-portfolio .top {
        padding: 30px 20px !important;
    }

    .theme-portfolio .center .tab-area {
        padding: 0 20px !important;
    }

    .theme-portfolio .center .portfolio-tab a {
        font-size: 16px;
    }

    .theme-portfolio .middle .portfolio-box > div {
        padding: 30px !important;
    }

    .theme-portfolio .middle .portfolio-box {
        padding: 20px !important;
    }

    .theme-portfolio .middle .portfolio-tab a {
        font-size: 16px;
    }

    .theme-portfolio .middle .tab-area {
        padding: 0 20px !important;
    }

    .theme-portfolio .middle .portfolio-box .line {
        width: 145px !important;
        margin: 15px 0px !important;
    }

    .theme-portfolio .middle .portfolio-box .overview-area {
        flex: 1 0 50%;
        margin-bottom: 10px;
    }

    .theme-portfolio .bottom .area {
        padding: 30px 20px;
    }

    .theme-portfolio .bottom .area02 .performance-table {
        font-size: 12px;
    }

    .theme-portfolio .bottom .area02 .performance-table th {
        padding: 4px !important;
    }

    .theme-portfolio .bottom .area02 .performance-table td {
        padding: 4px !important;
    }

    .theme-portfolio .bottom .area04 .holdings-table {
        font-size: 12px;
    }

    .theme-portfolio .bottom .area04 .holdings-table th {
        padding: 4px !important;
    }

    .theme-portfolio .bottom .area04 .holdings-table td {
        padding: 4px !important;
    }
}
</style>
