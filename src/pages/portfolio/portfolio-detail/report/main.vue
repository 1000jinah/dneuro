<template>
    <div id="save_certificate">
        <div class="portfolio-report">
            <v-row style="margin: 0px; padding-bottom: 30px">
                <v-col cols="12" style="padding: 0px">
                    <div class="title-line"></div>
                    <p class="menu-title">ISAHRES GLOBAL<br />INFRASTRUCTURE</p>
                    <p class="menu-sub-title" style="padding: 0px; margin: 0px">AI Portfolios / Code l As of April 30, 2021</p>
                </v-col>
            </v-row>
            <div>
                <v-divider class="middle-line"></v-divider>
            </div>
            <v-row style="padding-top: 4px; margin: 0px">
                <div style="width: 65% !important" class="middle-vertical-line">
                    <v-col style="padding-left: 0px">
                        <p class="middle-main-text">Why investment iShares Global Infrastructure?</p>
                        <div style="margin-bottom: 25px; padding-left: 12px">
                            <li class="font-size-12">Exposure to investment grade municipal bonds that mature in 2022.</li>
                            <li class="font-size-12">
                                Combine the define maturity and regular income distribution characteristics of a bond<br />
                                with the transparency and tradability of a stock.
                            </li>
                            <li class="font-size-12">Use to seek tax-exempt income, build a bond ladder, and manage interest rate risk.</li>
                        </div>
                        <div style="margin: 8px">
                            <v-col cols="12" style="padding: 0px">
                                <v-row class="font-size-12" style="border-bottom: 1px solid #b3b3b3; margin: 0px; padding-top: 8px; padding-bottom: 8px">
                                    <v-col cols="6" style="padding-left: 12px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px">
                                        <span>Cumulative Return</span>
                                    </v-col>
                                    <v-col cols="6" style="padding: 0px 12px 0px 0px; text-align: right !important">
                                        <span class="color-gray">92.32%</span>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="12" style="padding: 0px">
                                <v-row class="font-size-12" style="border-bottom: 1px solid #b3b3b3; margin: 0px; padding-top: 8px; padding-bottom: 8px">
                                    <v-col cols="6" style="padding: 0px 0px 0px 12px">
                                        <span>Annualized Return</span>
                                    </v-col>
                                    <v-col cols="6" style="padding: 0px 12px 0px 0px; text-align: right !important">
                                        <span class="color-gray">5.71%</span>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="12" style="padding: 0px">
                                <v-row class="font-size-12" style="border-bottom: 1px solid #b3b3b3; margin: 0px; padding-top: 8px; padding-bottom: 8px">
                                    <v-col cols="6" style="padding: 0px 0px 0px 12px">
                                        <span>Sharpe Index</span>
                                    </v-col>
                                    <v-col cols="6" style="padding: 0px 12px 0px 0px; text-align: right !important">
                                        <span class="color-gray">{{ data.priceCalc.SharpeRatio ? Math.round(data.priceCalc.SharpeRatio * 100) / 100 : '' }}</span>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="12" style="padding: 0px">
                                <v-row class="font-size-12" style="border-bottom: 1px solid #b3b3b3; margin: 0px; padding-top: 8px; padding-bottom: 8px">
                                    <v-col cols="6" style="padding: 0px 0px 0px 12px">
                                        <span>Annualized Volatility</span>
                                    </v-col>
                                    <v-col cols="6" style="padding: 0px 12px 0px 0px; text-align: right !important">
                                        <span class="color-gray">5.71%</span>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="12" style="padding: 0px">
                                <v-row class="font-size-12" style="border-bottom: 1px solid #b3b3b3; margin: 0px; padding-top: 8px; padding-bottom: 8px">
                                    <v-col cols="6" style="padding: 0px 0px 0px 12px">
                                        <span>Maximum drawdown</span>
                                    </v-col>
                                    <v-col cols="6" style="padding: 0px 12px 0px 0px; text-align: right !important">
                                        <span class="color-gray">{{ data.priceCalc.MaxDrawdown ? Math.round(data.priceCalc.MaxDrawdown * 100) / 100 + '%' : '0%' }}</span>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </div>
                        <div style="margin-top: 30px">
                            <p class="middle-main-text" style="margin: 0px !important">Growth of Hypothetical $10,000</p>
                        </div>
                        <v-col cols="12" style="padding: 0px; margin: 0px">
                            <div id="performanceChart"></div>
                        </v-col>
                        <div style="margin-right: 8px">
                            <v-col cols="12" class="chart-bottom-text bg-white-two">
                                <p style="margin-bottom: 0px">
                                    Compound growth calculations are used only for the purpose of illustrating the effects of compound growth and are not intended to reflect future value of any mutual
                                    fund or returns on investment in any mutual fund.
                                </p>
                            </v-col>
                        </div>
                    </v-col>
                </div>
                <div style="width: 35% !important">
                    <v-col cols="12">
                        <p class="middle-main-text" style="margin-bottom: 16px">Risk Rating</p>
                        <div class="w-100">
                            <div style="width: 40%; display: inline-block">
                                <span style="font-size: 10px">Low</span>
                            </div>
                            <div style="width: 22%; display: inline-block">
                                <span style="font-size: 10px">Medium</span>
                            </div>
                            <div style="width: 33%; display: inline-block; text-align: right">
                                <span style="font-size: 10px">High</span>
                            </div>
                        </div>
                        <template v-if="data.strategy.riskLevel == 1">
                            <img :src="img.riskRating1Img" class="w-100" />
                        </template>
                        <template v-else-if="data.strategy.riskLevel == 2">
                            <img :src="img.riskRating2Img" class="w-100" />
                        </template>
                        <template v-else-if="data.strategy.riskLevel == 3">
                            <img :src="img.riskRating3Img" class="w-100" />
                        </template>
                        <template v-else-if="data.strategy.riskLevel == 4">
                            <img :src="img.riskRating4Img" class="w-100" />
                        </template>
                        <template v-else-if="data.strategy.riskLevel == 5">
                            <img :src="img.riskRating5Img" class="w-100" />
                        </template>
                    </v-col>

                    <v-col cols="12" style="padding-bottom: 0px">
                        <p class="middle-main-text" style="margin: 0px">Key Facts</p>
                    </v-col>
                    <div style="margin: 8px">
                        <v-col cols="12" style="padding: 0px">
                            <v-row class="font-size-12" style="border-bottom: 1px solid #b3b3b3; margin: 0px; padding-top: 8px; padding-bottom: 8px">
                                <v-col cols="6" style="padding: 0px 0px 0px 12px">
                                    <span>Investment Target</span>
                                </v-col>
                                <v-col cols="6" class="" style="padding: 0px 12px 0px 0px; text-align: right !important">
                                    <span class="color-gray">{{ data.strategy.target }}</span>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="12" style="padding: 0px">
                            <v-row class="font-size-12" style="border-bottom: 1px solid #b3b3b3; margin: 0px; padding-top: 8px; padding-bottom: 8px">
                                <v-col cols="6" style="padding: 0px 0px 0px 12px">
                                    <span>Asset Group</span>
                                </v-col>
                                <v-col cols="6" class="" style="padding: 0px 12px 0px 0px; text-align: right !important">
                                    <span class="color-gray">{{ data.strategy.assetClass }}</span>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="12" style="padding: 0px">
                            <v-row class="font-size-12" style="border-bottom: 1px solid #b3b3b3; margin: 0px; padding-top: 8px; padding-bottom: 8px">
                                <v-col cols="6" style="padding: 0px 0px 0px 12px">
                                    <span>Asset Class</span>
                                </v-col>
                                <v-col cols="6" class="" style="padding: 0px 12px 0px 0px; text-align: right !important">
                                    <span class="color-gray">{{ data.strategy.assetClass }}</span>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="12" style="padding: 0px">
                            <v-row class="font-size-12" style="border-bottom: 1px solid #b3b3b3; margin: 0px; padding-top: 8px; padding-bottom: 8px">
                                <v-col cols="6" style="padding: 0px 0px 0px 12px">
                                    <span>Market</span>
                                </v-col>
                                <v-col cols="6" class="" style="padding: 0px 12px 0px 0px; text-align: right !important">
                                    <span class="color-gray">{{ data.strategy.market }}</span>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="12" style="padding: 0px">
                            <v-row class="font-size-12" style="border-bottom: 1px solid #b3b3b3; margin: 0px; padding-top: 8px; padding-bottom: 8px">
                                <v-col cols="6" style="padding: 0px 0px 0px 12px">
                                    <span>Maximum drawdown</span>
                                </v-col>
                                <v-col cols="6" class="" style="padding: 0px 12px 0px 0px; text-align: right !important">
                                    <span class="color-gray">{{ data.priceCalc.MaxDrawdown ? Math.round(data.priceCalc.MaxDrawdown * 100) / 100 + '%' : '0%' }}</span>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="12" style="padding: 0px">
                            <v-row class="font-size-12" style="border-bottom: 1px solid #b3b3b3; margin: 0px; padding-top: 8px; padding-bottom: 8px">
                                <v-col cols="6" style="padding: 0px 0px 0px 12px">
                                    <span>Closing Price</span>
                                </v-col>
                                <v-col cols="6" class="" style="padding: 0px 12px 0px 0px; text-align: right !important">
                                    <span class="color-gray">$230,000</span>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="12" style="padding: 0px">
                            <v-row class="font-size-12" style="border-bottom: 1px solid #b3b3b3; margin: 0px; padding-top: 8px; padding-bottom: 8px">
                                <v-col cols="6" style="padding: 0px 0px 0px 12px">
                                    <span>Fund Inception</span>
                                </v-col>
                                <v-col cols="6" class="" style="padding: 0px 12px 0px 0px; text-align: right !important">
                                    <span class="color-gray">{{ data.strategy.inceptionDate }}</span>
                                </v-col>
                            </v-row>
                        </v-col>
                    </div>
                    <v-col cols="12" class="pb-0">
                        <p class="middle-main-text" style="margin: 0px !important">Advisory Fee</p>
                    </v-col>
                    <div style="margin: 8px">
                        <v-col cols="12" style="padding: 0px">
                            <v-row class="font-size-12" style="border-bottom: 1px solid #b3b3b3; margin: 0px; padding-top: 8px; padding-bottom: 8px">
                                <v-col cols="6" style="padding: 0px 0px 0px 12px">
                                    <span>Advisory Fee</span>
                                </v-col>
                                <v-col cols="6" class="" style="padding: 0px 12px 0px 0px; text-align: right !important">
                                    <span class="color-gray">20</span>
                                </v-col>
                            </v-row>
                        </v-col>
                    </div>
                </div>
            </v-row>
        </div>

        <!-- 2 -->
        <div class="portfolio-report-second">
            <v-divider class="middle-line"></v-divider>
            <v-row style="margin-left: 0px; margin-right: 0px; margin-top: 0px">
                <v-col cols="12" style="padding-top: 30px; padding-bottom: 12px; padding-left: 0px">
                    <p class="main-text" style="margin: 0px">Performance (%)</p>
                </v-col>
                <v-row style="margin: 0px">
                    <v-col cols="12" style="padding: 0px">
                        <v-tabs-items v-model="tab.performanceTab">
                            <v-tab-item>
                                <table class="calendar-table" style="width: 100%; border-top: 1px solid #000; font-size: 10px" cellspacing="0">
                                    <thead>
                                        <tr style="height: 20px">
                                            <th style="border-bottom: 1px solid #b3b3b3"></th>
                                            <th style="border-bottom: 1px solid #b3b3b3">1M</th>
                                            <th style="border-bottom: 1px solid #b3b3b3">3M</th>
                                            <th style="border-bottom: 1px solid #b3b3b3">6M</th>
                                            <th style="border-bottom: 1px solid #b3b3b3">YTD</th>
                                            <th style="border-bottom: 1px solid #b3b3b3">1y</th>
                                            <th style="border-bottom: 1px solid #b3b3b3">3y</th>
                                            <th style="border-bottom: 1px solid #b3b3b3">5y</th>
                                            <th style="border-bottom: 1px solid #b3b3b3">10y</th>
                                            <th style="border-bottom: 1px solid #b3b3b3">incept</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style="height: 30px">
                                            <td style="border-bottom: 1px solid #b3b3b3; text-align: left; font-weight: bold">NAV</td>
                                            <td style="border-bottom: 1px solid #b3b3b3; text-align: center; font-weight: bold" class="color-gray">
                                                {{ data.priceCalc.M1 ? Math.round(data.priceCalc.M1 * 100) / 100 : '-' }}
                                            </td>
                                            <td style="border-bottom: 1px solid #b3b3b3; text-align: center; font-weight: bold" class="color-gray">
                                                {{ data.priceCalc.M3 ? Math.round(data.priceCalc.M3 * 100) / 100 : '-' }}
                                            </td>
                                            <td style="border-bottom: 1px solid #b3b3b3; text-align: center; font-weight: bold" class="color-gray">
                                                {{ data.priceCalc.M6 ? Math.round(data.priceCalc.M6 * 100) / 100 : '-' }}
                                            </td>
                                            <td style="border-bottom: 1px solid #b3b3b3; text-align: center; font-weight: bold" class="color-gray">
                                                {{ data.priceCalc.YTD ? Math.round(data.priceCalc.YTD * 100) / 100 : '-' }}
                                            </td>
                                            <td style="border-bottom: 1px solid #b3b3b3; text-align: center; font-weight: bold" class="color-gray">
                                                {{ data.priceCalc.Y1 ? Math.round(data.priceCalc.Y1 * 100) / 100 : '-' }}
                                            </td>
                                            <td style="border-bottom: 1px solid #b3b3b3; text-align: center; font-weight: bold" class="color-gray">
                                                {{ data.priceCalc.Y3 ? Math.round(data.priceCalc.Y3 * 100) / 100 : '-' }}
                                            </td>
                                            <td style="border-bottom: 1px solid #b3b3b3; text-align: center; font-weight: bold" class="color-gray">
                                                {{ data.priceCalc.Y5 ? Math.round(data.priceCalc.Y5 * 100) / 100 : '-' }}
                                            </td>
                                            <td style="border-bottom: 1px solid #b3b3b3; text-align: center; font-weight: bold" class="color-gray">
                                                {{ data.priceCalc.Y10 ? Math.round(data.priceCalc.Y10 * 100) / 100 : '-' }}
                                            </td>
                                            <td style="border-bottom: 1px solid #b3b3b3; text-align: center; font-weight: bold" class="color-gray">
                                                {{ data.priceCalc.CumReturn ? Math.round(data.priceCalc.CumReturn * 100) / 100 : '-' }}
                                            </td>
                                        </tr>
                                        <tr style="height: 30px">
                                            <td style="border-bottom: 1px solid #b3b3b3; text-align: left; font-weight: bold">Benchmark</td>
                                            <td style="border-bottom: 1px solid #b3b3b3; text-align: center; font-weight: bold">
                                                {{ data.bmPriceCalc.M1 ? Math.round(data.bmPriceCalc.M1 * 100) / 100 : '-' }}
                                            </td>
                                            <td style="border-bottom: 1px solid #b3b3b3; text-align: center; font-weight: bold">
                                                {{ data.bmPriceCalc.M3 ? Math.round(data.bmPriceCalc.M3 * 100) / 100 : '-' }}
                                            </td>
                                            <td style="border-bottom: 1px solid #b3b3b3; text-align: center; font-weight: bold">
                                                {{ data.bmPriceCalc.M6 ? Math.round(data.bmPriceCalc.M6 * 100) / 100 : '-' }}
                                            </td>
                                            <td style="border-bottom: 1px solid #b3b3b3; text-align: center; font-weight: bold">
                                                {{ data.bmPriceCalc.YTD ? Math.round(data.bmPriceCalc.YTD * 100) / 100 : '-' }}
                                            </td>
                                            <td style="border-bottom: 1px solid #b3b3b3; text-align: center; font-weight: bold">
                                                {{ data.bmPriceCalc.Y1 ? Math.round(data.bmPriceCalc.Y1 * 100) / 100 : '-' }}
                                            </td>
                                            <td style="border-bottom: 1px solid #b3b3b3; text-align: center; font-weight: bold">
                                                {{ data.bmPriceCalc.Y3 ? Math.round(data.bmPriceCalc.Y3 * 100) / 100 : '-' }}
                                            </td>
                                            <td style="border-bottom: 1px solid #b3b3b3; text-align: center; font-weight: bold">
                                                {{ data.bmPriceCalc.Y5 ? Math.round(data.bmPriceCalc.Y5 * 100) / 100 : '-' }}
                                            </td>
                                            <td style="border-bottom: 1px solid #b3b3b3; text-align: center; font-weight: bold">
                                                {{ data.bmPriceCalc.Y10 ? Math.round(data.bmPriceCalc.Y10 * 100) / 100 : '-' }}
                                            </td>
                                            <td style="border-bottom: 1px solid #b3b3b3; text-align: center; font-weight: bold">
                                                {{ data.bmPriceCalc.CumReturn ? Math.round(data.priceCalc.CumReturn * 100) / 100 : '-' }}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </v-tab-item>
                            <v-tab-item>
                                <span>2</span>
                            </v-tab-item>
                            <v-tab-item>
                                <span>3</span>
                            </v-tab-item>
                        </v-tabs-items>
                    </v-col>

                    <div class="chart-ex-text" style="margin-top: 16px">
                        <p style="margin: 0px">
                            ETFs provide an opportunity-searching approach to popular investment topics and breakthrough innovations. Target medium to high school (5) risk levels with a historical
                            portfolio volatility level of 10% vs. mid to late (15-19%).
                        </p>
                    </div>
                </v-row>
            </v-row>
            <v-row style="margin-left: 0px; margin-right: 0px; margin-top: 0px">
                <v-col cols="12" style="padding-top: 30px; padding-bottom: 10px; padding-left: 0px">
                    <p class="main-text" style="margin: 0px">Calendar Returns (%)</p>
                </v-col>
                <v-col cols="12" style="padding: 0px">
                    <v-tabs-items v-model="tab.performanceTab">
                        <v-tab-item>
                            <table class="calendar-table" cellspacing="0" style="width: 100%; border-top: 1px solid #000; font-size: 10px">
                                <thead>
                                    <tr style="height: 20px">
                                        <th style="border-bottom: 1px solid #b3b3b3"></th>
                                        <th style="border-bottom: 1px solid #b3b3b3">2017</th>
                                        <th style="border-bottom: 1px solid #b3b3b3">2018</th>
                                        <th style="border-bottom: 1px solid #b3b3b3">2019</th>
                                        <th style="border-bottom: 1px solid #b3b3b3">2020</th>
                                        <th style="border-bottom: 1px solid #b3b3b3">2021</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style="height: 30px">
                                        <td style="border-bottom: 1px solid #b3b3b3; text-align: left; font-weight: bold">Returns</td>
                                        <td style="border-bottom: 1px solid #b3b3b3; text-align: center; font-weight: bold" class="color-gray">0.12</td>
                                        <td style="border-bottom: 1px solid #b3b3b3; text-align: center; font-weight: bold" class="color-gray">2.02</td>
                                        <td style="border-bottom: 1px solid #b3b3b3; text-align: center; font-weight: bold" class="color-gray">2.05</td>
                                        <td style="border-bottom: 1px solid #b3b3b3; text-align: center; font-weight: bold" class="color-gray">0.12</td>
                                        <td style="border-bottom: 1px solid #b3b3b3; text-align: center; font-weight: bold" class="color-gray">0.12</td>
                                    </tr>
                                </tbody>
                            </table>
                        </v-tab-item>
                        <v-tab-item>
                            <span>2</span>
                        </v-tab-item>
                        <v-tab-item>
                            <span>3</span>
                        </v-tab-item>
                    </v-tabs-items>
                </v-col>
                <v-col cols="12" style="padding: 0px; margin-top: 30px">
                    <v-divider class="middle-line"></v-divider>
                </v-col>
                <div style="width: 65% !important">
                    <v-row style="margin-left: 0px; margin-right: 0xp; margin-top: 20px">
                        <v-col cols="6" style="min-height: 200px; padding: 0px">
                            <v-col cols="12" class="text-center" style="padding-top: 0px; padding-bottom: 0px">
                                <p class="main-text" style="margin: 0px">Asset Allocation</p>
                                <p class="sub-text" style="margin: 0px">% of net assets</p>
                            </v-col>
                            <div id="assetChart" style="min-height: 240px"></div>
                        </v-col>
                        <v-col cols="6" style="min-height: 200px; padding: 0px">
                            <v-col cols="12" class="text-center" style="padding-top: 0px; padding-bottom: 0px">
                                <p class="main-text" style="margin: 0px">Sector Allocation</p>
                                <p class="sub-text" style="margin: 0px">% of net assets</p>
                            </v-col>
                            <div id="sectorChart" style="min-height: 240px"></div>
                        </v-col>
                    </v-row>
                </div>
                <div style="width: 35% !important; padding: 0px; z-index: 99" class="bg-white-three">
                    <v-row style="margin-left: 0px; margin-right: 0px; padding: 0px">
                        <v-col cols="12" style="margin-top: 20px">
                            <p class="main-text" style="margin: 0px">Top 10 Holdings (%)</p>
                        </v-col>
                    </v-row>
                    <div style="margin: 8px">
                        <v-col cols="12" style="padding: 0px">
                            <v-row class="font-size-12" style="border-bottom: 1px solid #b3b3b3; margin: 0px; padding-bottom: 4px">
                                <v-col cols="9" style="padding: 0px 0px 0px 12px">
                                    <span>AAPL INC</span>
                                </v-col>
                                <v-col cols="3" style="padding: 0px 12px 0px 0px; text-align: right !important">
                                    <span class="color-gray">6.04</span>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="12" style="padding: 0px">
                            <v-row class="font-size-12" style="border-bottom: 1px solid #b3b3b3; margin: 0px; padding-bottom: 4px">
                                <v-col cols="9" style="padding: 0px 0px 0px 12px">
                                    <span>AMAZON COM INC</span>
                                </v-col>
                                <v-col cols="3" style="padding: 0px 12px 0px 0px; text-align: right !important">
                                    <span class="color-gray">3.73</span>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="12" style="padding: 0px">
                            <v-row class="font-size-12" style="border-bottom: 1px solid #b3b3b3; margin: 0px; padding-bottom: 4px">
                                <v-col cols="9" style="padding: 0px 0px 0px 12px">
                                    <span>TESLA INC</span>
                                </v-col>
                                <v-col cols="3" style="padding: 0px 12px 0px 0px; text-align: right !important">
                                    <span class="color-gray">2.35</span>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="12" style="padding: 0px">
                            <v-row class="font-size-12" style="border-bottom: 1px solid #b3b3b3; margin: 0px; padding-bottom: 4px">
                                <v-col cols="9" style="padding: 0px 0px 0px 12px">
                                    <span>ALPHABET INC CLASS A</span>
                                </v-col>
                                <v-col cols="3" style="padding: 0px 12px 0px 0px; text-align: right !important">
                                    <span class="color-gray">2.19</span>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="12" style="padding: 0px">
                            <v-row class="font-size-12" style="border-bottom: 1px solid #b3b3b3; margin: 0px; padding-bottom: 4px">
                                <v-col cols="9" style="padding: 0px 0px 0px 12px">
                                    <span>ALPHABET INC CLASS B</span>
                                </v-col>
                                <v-col cols="3" style="padding: 0px 12px 0px 0px; text-align: right !important">
                                    <span class="color-gray">1.78</span>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="12" style="padding: 0px">
                            <v-row class="font-size-12" style="border-bottom: 1px solid #b3b3b3; margin: 0px; padding-bottom: 4px">
                                <v-col cols="9" style="padding: 0px 0px 0px 12px">
                                    <span>NVIDIA CORP</span>
                                </v-col>
                                <v-col cols="3" style="padding: 0px 12px 0px 0px; text-align: right !important">
                                    <span class="color-gray">6.04</span>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="12" style="padding: 0px">
                            <v-row class="font-size-12" style="border-bottom: 1px solid #b3b3b3; margin: 0px; padding-bottom: 4px">
                                <v-col cols="9" style="padding: 0px 0px 0px 12px">
                                    <span>BERKSHIRE HATHAWAY INC CLASS B</span>
                                </v-col>
                                <v-col cols="3" style="padding: 0px 12px 0px 0px; text-align: right !important">
                                    <span class="color-gray">3.73</span>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="12" style="padding: 0px">
                            <v-row class="font-size-12" style="border-bottom: 1px solid #b3b3b3; margin: 0px; padding-bottom: 4px">
                                <v-col cols="9" style="padding: 0px 0px 0px 12px">
                                    <span>META PLATFORMS INC CLASS A</span>
                                </v-col>
                                <v-col cols="3" style="padding: 0px 12px 0px 0px; text-align: right !important">
                                    <span class="color-gray">2.35</span>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="12" style="padding: 0px">
                            <v-row class="font-size-12" style="border-bottom: 1px solid #b3b3b3; margin: 0px; padding-bottom: 4px">
                                <v-col cols="9" style="padding: 0px 0px 0px 12px">
                                    <span>UNITEDHEALTH GROUP INC</span>
                                </v-col>
                                <v-col cols="3" style="padding: 0px 12px 0px 0px; text-align: right !important">
                                    <span class="color-gray">2.19</span>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="12" style="padding: 0px">
                            <v-row class="font-size-12" style="border-bottom: 1px solid #b3b3b3; margin: 0px; padding-bottom: 4px">
                                <v-col cols="9" style="padding: 0px 0px 0px 12px">
                                    <span>MICROSOFT CORP</span>
                                </v-col>
                                <v-col cols="3" style="padding: 0px 12px 0px 0px; text-align: right !important">
                                    <span class="color-gray">1.78</span>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="12" class="bg-black" style="padding: 0px">
                            <v-row class="font-size-12" style="border-bottom: 1px solid #b3b3b3; margin: 0px; padding-bottom: 4px">
                                <v-col cols="9" style="padding: 0px 0px 0px 12px">
                                    <span style="color: white">Total allocation in top holdings</span>
                                </v-col>
                                <v-col cols="3" style="padding: 0px 12px 0px 0px; text-align: right !important">
                                    <span style="color: white">35.6</span>
                                </v-col>
                            </v-row>
                        </v-col>
                    </div>
                </div>
                <v-divider class="middle-line"></v-divider>
            </v-row>
            <v-row style="margin-left: 0px; margin-right: 0px; margin-top: 30px">
                <v-col cols="12">
                    <p class="main-text" style="margin: 0px">Historican Allocation (%)</p>
                </v-col>
                <v-col cols="12" style="min-height: 200px; padding: 0px">
                    <div id="historicalChart" style="min-height: 250px"></div>
                    <div class="chart-ex-text">
                        <p style="margin: 0px">
                            ETFs provide an opportunity-searching approach to popular investment topics and breakthrough innovations. Target medium to high school (5) risk levels with a historical
                            portfolio volatility level of 10% vs. mid to late (15-19%).
                        </p>
                    </div>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="https://code.highcharts.com/modules/export-data.js"></script>
<script src="https://code.highcharts.com/modules/accessibility.js"></script>
<script src="https://code.highcharts.com/modules/data.js"></script>

<script lang="ts">
import Vue from 'vue';
import moment from 'moment';
import Highcharts from 'highcharts';
import Stock from 'highcharts/modules/stock';
import store from '@/config/store';
import meta from '@/api/meta';

import html2pdf from 'html2pdf.js';

import searchImg from '@/assets/images/searchImg.png';
import announceBlackImg from '@/assets/images/icon_announcement_black.png';
import announceWhiteImg from '@/assets/images/icon_announcement_white.png';
import pdfIconImg from '@/assets/images/icon_pdf.png';
import arrowDownImg from '@//assets/images/icon_arrow_down_small.png';
import arrowLeftImg from '@//assets/images/icon_arrow_left_big.png';
import arrowRightImg from '@//assets/images/icon_arrow_right_big.png';
import riskRating1Img from '@/assets/images/icon_riskrating_1.png';
import riskRating2Img from '@/assets/images/icon_riskrating_2.png';
import riskRating3Img from '@/assets/images/icon_riskrating_3.png';
import riskRating4Img from '@/assets/images/icon_riskrating_4.png';
import riskRating5Img from '@/assets/images/icon_riskrating_5.png';

Stock(Highcharts);

export default Vue.extend({
    data() {
        return {
            img: {
                searchImg,
                pdfIconImg,
                arrowLeftImg,
                arrowRightImg,
                arrowDownImg,
                announceBlackImg,
                announceWhiteImg,
                riskRating1Img,
                riskRating2Img,
                riskRating3Img,
                riskRating4Img,
                riskRating5Img,
            },
            tab: {
                performanceTab: 0,
                growthTab: 0,
            },
            chartOptions: {
                credits: { enabled: false }, // 하단 highchart.com 글씨 삭제
                navigator: {
                    enabled: false,
                },
                scrollbar: {
                    enabled: false,
                },
                rangeSelector: {
                    selected: 1,
                },
                title: {},
                series: [
                    {
                        animation: false,
                        name: 'AAPL',
                        data: [10, 20, 10, 23, 65, 121, 44, 66, 98, 30, 32, 56, 25, 12, 53],
                        pointStart: Date.UTC(2021, 1, 1),
                        pointInterval: 100000 * 3600 * 24,
                        tooltip: {
                            valueDecimals: 2,
                        },
                    },
                ],
            },
            data: {
                strategyId: 0,
                strategy: {} as any,
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
            },
        };
    },
    watch: {},
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
                this.close();
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
                    // Pre-v9 legacy settings
                    rangeSelectorTo: 'To',
                },
            });

            Highcharts.stockChart('performanceChart', {
                credits: { enabled: false }, // 하단 highchart.com 글씨 삭제
                chart: {
                    animation: false,
                    height: 300,
                },
                navigator: {
                    enabled: false,
                },
                scrollbar: {
                    enabled: false,
                },
                plotOptions: {
                    series: {
                        animation: false,
                    },
                },
                xAxis: {
                    type: 'datetime',
                    lineColor: '#000000',
                    tickColor: '#000000',
                    tickmarkPlacement: 'on',
                    tickInterval: 24 * 60 * 60 * 1000 * 20,
                    labels: {
                        formatter: function () {
                            return Highcharts.dateFormat('%b %d, %Y', Number(this.value));
                        },
                        style: {
                            color: '#000000',
                            fontSize: '10px',
                            fontWeight: 'bold',
                        },
                    },
                },
                yAxis: {
                    opposite: false,
                    title: {
                        text: '',
                    },
                    labels: {
                        format: '{value}$',
                    },
                },
                tooltip: {
                    split: false,
                    shared: false,
                    xDateFormat: '%b.%d, %Y ',
                },
                legend: {
                    enabled: true,
                },
                rangeSelector: {
                    enabled: false,
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
        },
        async setHoldingsChart() {
            const assetData = (await meta.api.common.strategyHoldings.getHoldingsAssetClassSumByMaxDate(this.data.strategyId)).data;
            const sectorData = (await meta.api.common.strategyHoldings.getHoldingsSectorSumByMaxDate(this.data.strategyId)).data;

            let assetTemp: any = [];
            let sectorTemp: any = [];

            this.data.holdingsAssetData = assetData;
            this.data.holdingsSectorData = sectorData;

            assetData.forEach((e: any, idx: number) => {
                assetTemp.push({ name: e.assetClassName, color: meta.chart.colorArr[idx % 4], y: (Math.round(e.assetClassSum * 10000) / 10000) * 100 });
            });

            sectorData.forEach((e: any, idx: number) => {
                sectorTemp.push({ name: e.sectorName, color: meta.chart.colorArr[idx % 4], y: (Math.round(e.sectorSum * 10000) / 10000) * 100 });
            });

            Highcharts.chart('assetChart', {
                credits: { enabled: false }, // 하단 highchart.com 글씨 삭제
                chart: {
                    animation: false,
                    plotBackgroundColor: null,
                    plotBorderWidth: 0,
                    plotShadow: false,
                    width: 200,
                },
                legend: {
                    title: {
                        text: '',
                    },
                    align: 'center',
                    symbolWidth: 20,
                    width: 300,
                    layout: 'vertical',
                    useHTML: true,
                    labelFormatter: function () {
                        let name = this.name.length > 20 ? this.name.substr(0, 20) + '...' : this.name;
                        return (
                            '<div style="display: flex; justify-content: center;"><div style="font-size:10px; width: 130px; display:flex;"><div style="width: 50%; display:flex; justify-content: start;"><p style="margin: 0px;">' +
                            `${name}` +
                            '</p></div><div style="width: 50%; display:flex; justify-content: end;"><p style="margin: 0px;">' +
                            `${this.y}` +
                            '</p></div></div></div>'
                        );
                    },
                    x: 55,
                    y: 10,
                },
                title: {
                    text: '',
                },
                tooltip: {
                    pointFormat: '{series.data.name}: <b>{point.percentage:.1f}%</b>',
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
                    series: {
                        animation: false,
                    },
                    pie: {
                        borderColor: '#000000',
                        dataLabels: {
                            enabled: false,
                        },
                        startAngle: 0,
                        endAngle: 360,
                        center: ['50%', '29%'],
                        size: 120,
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

            Highcharts.chart('sectorChart', {
                credits: { enabled: false }, // 하단 highchart.com 글씨 삭제
                chart: {
                    animation: false,
                    plotBackgroundColor: null,
                    plotBorderWidth: 0,
                    plotShadow: false,
                    width: 200,
                },
                legend: {
                    title: {
                        text: '',
                    },
                    align: 'center',
                    symbolWidth: 20,
                    width: 300,
                    layout: 'vertical',
                    useHTML: true,
                    labelFormatter: function () {
                        let name = this.name.length > 20 ? this.name.substr(0, 20) + '...' : this.name;
                        return (
                            '<div style="display: flex; justify-content: center;"><div style="font-size:10px; width: 130px; display:flex;"><div style="width: 50%; display:flex; justify-content: start;"><p style="margin: 0px;">' +
                            `${name}` +
                            '</p></div><div style="width: 50%; display:flex; justify-content: end;"><p style="margin: 0px;">' +
                            `${this.y}` +
                            '</p></div></div></div>'
                        );
                    },
                    x: 55,
                    y: 10,
                },
                title: {
                    text: '',
                },
                tooltip: {
                    pointFormat: '<strong>{series.data.name} {point.percentage:.1f}%</strong>',
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
                    series: {
                        animation: false,
                    },
                    pie: {
                        borderColor: '#000000',
                        dataLabels: {
                            enabled: false,
                        },
                        startAngle: 0,
                        endAngle: 360,
                        center: ['50%', '31%'],
                        size: 120,
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

            document.getElementById('assetChart').getElementsByTagName('div')[0].style.margin = 'auto';
            document.getElementById('sectorChart').getElementsByTagName('div')[0].style.margin = 'auto';
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
                    animation: false,
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
                        valueDescriptionFormat: '{index}. {point.category}, {point.percentage:.1f}%.',
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
                    labels: {
                        rotation: 0,
                        formatter() {
                            const chart: any = this.chart,
                                date = new Date(this.value),
                                self: any = this;

                            if (date.getFullYear() !== chart.lastYear) {
                                chart.lastYear = date.getFullYear();
                                return Highcharts.dateFormat('%Y', self.value);
                            }
                        },
                    },
                },
                yAxis: [
                    {
                        lineWidth: 0,
                        gridLineColor: '#000000',
                        title: {
                            text: '',
                        },
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
                                fontSize: '14px',
                            },
                        },
                        max: 100,
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
                    series: {
                        animation: false,
                    },
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
        async savePDF() {
            window.scrollTo(0, 0);

            let content = document.querySelector('#save_certificate');
            const opt = {
                margin: 0,
                filename: 'portfolio.pdf',
                enableLinks: false,
                pageBreak: { mode: 'css', after: '.break-page' },
                image: { type: 'jpeg', quality: 1 },
                html2canvas: {
                    useCORS: true,
                    scrollY: 0,
                    scrollX: 0,
                    scale: 1,
                    dpi: 600,
                    letterRendering: true,
                    allowTaint: true,
                },
                jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4', compressPDF: true },
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
                        pdf.text('-' + i + '-', pdf.internal.pageSize.getWidth() / 2.25, pdf.internal.pageSize.getHeight() - 0.5);
                    }
                })
                .save();
        },
        async pdf() {
            const self = this;
            const sleep = (delay: any) => new Promise((resolve) => setTimeout(resolve, delay));
            await sleep(1500);
            store.commit('app/SET_LOADING', true);

            this.$nextTick(async () => {
                await self.savePDF();
                await sleep(500);
                await self.close();
            });
            store.commit('app/SET_LOADING', false);
        },
        close() {
            window.parent.postMessage({ success: 'success' }, '*');
        },
    },
    async mounted() {
        const strategyId = this.$route.query.strategyId as string;

        this.data.strategyId = Number(strategyId);

        store.commit('app/SET_LOADING', true);
        await this.getStrategy();
        await this.setPerformanceChart();
        await this.setHoldingsChart();
        await this.setHistoricalChart();
        await this.pdf();
        store.commit('app/SET_LOADING', false);
    },
});
</script>

<style scoped>
.portfolio-report {
    width: 792px;
    height: 1122px;
    padding: 40px 20px 20px 20px !important;
}

.portfolio-report .title-line {
    border: 15px solid #000;
    margin-bottom: 30px !important;
}

.portfolio-report .menu-title {
    font-size: 46px;
    font-weight: 900;
}

.portfolio-report .menu-sub-title {
    font-size: 22px;
}

.portfolio-report .middle-line {
    border: 2px solid #000;
}

.portfolio-report .middle-main-text {
    font-size: 19px;
    font-weight: 800;
}

.portfolio-report .middle-vertical-line {
    border-right: 2px solid #000;
}

.portfolio-report .mt-30 {
    margin-top: 30px !important;
}

.portfolio-report .chart-bottom-text {
    padding: 10px 8px 10px 8px;
    font-size: 10px;
}

.portfolio-report-second {
    width: 792px;
    height: 1122px;
    padding: 40px 20px 20px 20px !important;
}

.portfolio-report-second .middle-line {
    border: 2px solid #000;
}

.portfolio-report-second .main-text {
    font-size: 19px;
    font-weight: 800;
}

.portfolio-report-second .sub-text {
    font-size: 11px;
}

.portfolio-report-second .performance-table {
    width: 100%;
    border-top: 1px solid #000;
    font-size: 10px;
}

.portfolio-report-second .performance-table thead tr {
    height: 20px;
}

.portfolio-report-second .performance-table thead tr th {
    border-bottom: 1px solid #b3b3b3;
}

.portfolio-report-second .performance-table tbody tr {
    height: 30px;
}

.portfolio-report-second .performance-table tbody tr td {
    border-bottom: 1px solid #b3b3b3;
    text-align: center;
    font-weight: bold;
}

.portfolio-report-second .performance-table tbody tr td:nth-child(1) {
    text-align: left;
    padding-left: 12px;
}

.portfolio-report-second .calendar-table {
    width: 100%;
    border-top: 1px solid #000;
    font-size: 10px;
}

.portfolio-report-second .calendar-table thead tr {
    height: 20px;
}

.portfolio-report-second .calendar-table thead tr th {
    border-bottom: 1px solid #b3b3b3;
}

.portfolio-report-second .calendar-table tbody tr {
    height: 30px;
}

.portfolio-report-second .calendar-table tbody tr td {
    border-bottom: 1px solid #b3b3b3;
    text-align: center;
    font-weight: bold;
}

.portfolio-report-second .calendar-table tbody tr td:nth-child(1) {
    text-align: left;
    padding-left: 12px;
}

.portfolio-report-second .chart-ex-text {
    font-size: 10px;
    padding: 10px;
    background: #e8e8e8;
    color: #000;
}

.mt-30p {
    margin-top: 30px !important;
}

.break-page {
    break-after: page;
}
</style>
