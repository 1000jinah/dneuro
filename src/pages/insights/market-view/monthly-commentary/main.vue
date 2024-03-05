<template>
    <div class="marketview">
        <iframe id="monthly-commentary" width="0" height="0" src="" frameborder="0"></iframe>
        <v-row class="ma-0">
            <div style="background-color: #fff" class="d-flex wrapper-1920">
                <v-col cols="12" md="7" lg="7" class="top">
                    <div style="width: 72px; height: 12px; margin-bottom: 25px; background-color: #0b89fd"></div>
                    <p class="menu-title">Ukraine war to cut growth, up inflation</p>
                    <p class="menu-sub-title">Global Monthly Commentary l April 22, 2022</p>
                    <div class="d-flex">
                        <button class="btn font-weight-bold" @click="$router.push({ path: '/insights/market-view/market-risk/list' })">Dneuro Investment Institute</button>
                        <div class="d-flex justify-center" style="align-items: center">
                            <U class="print pr-2" @click="reportDownload()">Print Report</U>
                            <img :src="img.printreport" class="justify-center align-center" style="width: 21.4px; height: 19px" />
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" md="5" lg="5" class="pa-0" v-if="$vuetify.breakpoint.mdAndUp">
                    <img :src="img.back" style="width: 100%; height: 100%" />
                </v-col>
            </div>
            <div style="background-color: #f3f3f3; width: 100%; border-bottom: 1px solid #000; border-top: 1px solid #000">
                <v-col cols="12" class="middle wrapper-1920">
                    <v-row>
                        <v-col cols="12">
                            <p class="key">
                                Key <br />
                                points
                            </p>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col style="background-color: #f3f3f3" class="ma-0 pa-0">
                    <div class="wrapper-1920">
                        <div class="barx"></div>
                    </div>
                </v-col>
                <v-col cols="12" class="middle-bottom wrapper-1920">
                    <v-row>
                        <v-col cols="12" lg="4" md="4">
                            <p class="key-title font-weight-black mb-25">Macro Impact</p>
                            <span class="key-title">
                                We see the Ukraine war reducing global growth, increasing inflation and putting central banks in a bind. We prefer developed stocks in the inflationary backdrop.
                            </span>
                        </v-col>
                        <v-col cols="12" lg="4" md="4">
                            <p class="key-title font-weight-black mb-25">Market Backdrop</p>
                            <span class="key-title">
                                Stocks led by European bounced from 2022 lows last week, as oil prices came off highs.The European Central Bank accelerated policy nomalization.
                            </span>
                        </v-col>
                        <v-col cols="12" lg="4" md="4">
                            <p class="key-title font-weight-black mb-25">Week Ahead</p>
                            <span class="key-title">
                                The Fed is set to raise its policy rate by 0.25% this week - the first hike since the pandemic started. We still see a historically muted response to inflation.
                            </span>
                        </v-col>
                    </v-row>
                </v-col>
            </div>
            <div style="background-color: #fff; width: 100%">
                <v-col cols="12" class="bottom wrapper-1920">
                    <v-row class="pa-0 ma-0">
                        <v-col cols="12" class="font-size-21">
                            The war in Ukraine has already caused a terrible human toll. We see it extracting a heavy economic price as well, mostly via higher energy costs. This is a major supply
                            shock layered onto an exsiting one, and we see it resulting in higher inflation and lower growth, especially in the euro area. This puts central banks in a blind: Trying to
                            contain inflation will be more costly, and they can't cushion the growth shock. We prefer developed equities in this infaltionary environment.
                        </v-col>
                        <v-col cols="12" class="pa-0">
                            <v-tabs class="marketview-tabs" show-arrows v-model="tab.middleTab">
                                <v-tab class="marketview-tab">Asset Class Views</v-tab>
                                <v-tab class="marketview-tab">2022 Investment Themes</v-tab>
                            </v-tabs>
                        </v-col>
                        <v-col cols="12" class="pa-0">
                            <template v-if="tab.middleTab == 0">
                                <v-row class="row-style">
                                    <v-col cols="12" class="mb-120">
                                        <p class="tab-title">Directional Views</p>
                                        <span class="font-size-18 color-gray">Strategic (long-term) and tactical (6-12 month) views on broad asset classes, March 2022</span>
                                        <v-row>
                                            <v-col cols="12" lg="4" md="4" class="mt-10 pa-0">
                                                <div class="search-box">
                                                    <input type="text" class="input-box" />
                                                    <img :src="img.searchImg" />
                                                </div>
                                            </v-col>
                                            <v-col class="mt-10 pa-0">
                                                <div style="float: right">
                                                    <div class="color-box" style="background-color: #ffd600"></div>
                                                    <div style="float: left; margin-left: 10px" class="mr-5 font-size-14">Underweight</div>
                                                    <div class="color-box" style="background-color: #2e9875"></div>
                                                    <div style="float: left; margin-left: 10px" class="mr-5 font-size-14">Overweight</div>
                                                    <div class="color-box" style="background-color: #e8e8e8"></div>
                                                    <div style="float: left; margin-left: 10px" class="mr-5 font-size-14">Neutral</div>
                                                    <div class="color-box" style="background-color: #000000; width: 10px; height: 10px; margin-top: 5px"></div>
                                                    <div style="float: left; margin-left: 10px" class="mr-5 font-size-14">Previous View</div>
                                                </div>
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col>
                                                <table class="directional">
                                                    <colgroup v-if="$vuetify.breakpoint.smAndDown">
                                                        <col style="width: 20%" />
                                                        <col style="width: 40%" />
                                                        <col style="width: 40%" />
                                                    </colgroup>
                                                    <colgroup v-else>
                                                        <col style="width: 20%" />
                                                        <col style="width: 25%" />
                                                        <col style="width: 25%" />
                                                        <col style="width: 30%" />
                                                    </colgroup>
                                                    <thead>
                                                        <tr>
                                                            <th>Asset</th>
                                                            <th>Strategic View</th>
                                                            <th>Tactical view</th>
                                                            <th :class="$vuetify.breakpoint.smAndDown ? 'tbdisplay' : 'tdisplay'">Commentary</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div>Equities</div>
                                                            </td>
                                                            <td>
                                                                <figure class="highcharts-figure">
                                                                    <div id="column0" class="column"></div>
                                                                </figure>
                                                            </td>
                                                            <td>
                                                                <div id="columnChart0" class="column"></div>
                                                            </td>
                                                            <td :class="$vuetify.breakpoint.smAndDown ? 'tbdisplay' : 'tdisplay'">
                                                                <div class="td-pa">
                                                                    We added to our strategic equities overweight in Feburary. The early 2022 selloff created an opportunity for long-term investors as
                                                                    we see the combination of low real rates, strong growth and resonable valuations as favorable for the asset class. Incorporating
                                                                    climate change in our expected returns brightens the appeal of developed market equities given the large weights of sectors such as
                                                                    tech and healthcare in bechmark indices. Tactically,we are overweight equities amid solid economic fundamentals and historically low
                                                                    real rates.
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr :class="$vuetify.breakpoint.smAndDown ? 'tdisplay' : 'tbdisplay'">
                                                            <td>
                                                                <div>Commentary</div>
                                                            </td>
                                                            <td colspan="2">
                                                                <div class="td-pa">
                                                                    We added to our strategic equities overweight in Feburary. The early 2022 selloff created an opportunity for long-term investors as
                                                                    we see the combination of low real rates, strong growth and resonable valuations as favorable for the asset class. Incorporating
                                                                    climate change in our expected returns brightens the appeal of developed market equities given the large weights of sectors such as
                                                                    tech and healthcare in bechmark indices. Tactically,we are overweight equities amid solid economic fundamentals and historically low
                                                                    real rates.
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div>Equities</div>
                                                            </td>
                                                            <td>
                                                                <figure class="highcharts-figure">
                                                                    <div id="column1" class="column"></div>
                                                                </figure>
                                                            </td>
                                                            <td>
                                                                <figure class="highcharts-figure">
                                                                    <div id="columnChart1" class="column"></div>
                                                                </figure>
                                                            </td>
                                                            <td :class="$vuetify.breakpoint.smAndDown ? 'tbdisplay' : 'tdisplay'">
                                                                <div class="td-pa">
                                                                    We added to our strategic equities overweight in Feburary. The early 2022 selloff created an opportunity for long-term investors as
                                                                    we see the combination of low real rates, strong growth and resonable valuations as favorable for the asset class. Incorporating
                                                                    climate change in our expected returns brightens the appeal of developed market equities given the large weights of sectors such as
                                                                    tech and healthcare in bechmark indices. Tactically,we are overweight equities amid solid economic fundamentals and historically low
                                                                    real rates.
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr :class="$vuetify.breakpoint.smAndDown ? 'tdisplay' : 'tbdisplay'">
                                                            <td>
                                                                <div>Commentary</div>
                                                            </td>
                                                            <td colspan="2">
                                                                <div class="td-pa">
                                                                    We added to our strategic equities overweight in Feburary. The early 2022 selloff created an opportunity for long-term investors as
                                                                    we see the combination of low real rates, strong growth and resonable valuations as favorable for the asset class. Incorporating
                                                                    climate change in our expected returns brightens the appeal of developed market equities given the large weights of sectors such as
                                                                    tech and healthcare in bechmark indices. Tactically,we are overweight equities amid solid economic fundamentals and historically low
                                                                    real rates.
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div>Equities</div>
                                                            </td>
                                                            <td>
                                                                <figure class="highcharts-figure">
                                                                    <div id="column2" class="column"></div>
                                                                </figure>
                                                            </td>
                                                            <td>
                                                                <figure class="highcharts-figure">
                                                                    <div id="columnChart2" class="column"></div>
                                                                </figure>
                                                            </td>
                                                            <td :class="$vuetify.breakpoint.smAndDown ? 'tbdisplay' : 'tdisplay'">
                                                                <div class="td-pa">
                                                                    We added to our strategic equities overweight in Feburary. The early 2022 selloff created an opportunity for long-term investors as
                                                                    we see the combination of low real rates, strong growth and resonable valuations as favorable for the asset class. Incorporating
                                                                    climate change in our expected returns brightens the appeal of developed market equities given the large weights of sectors such as
                                                                    tech and healthcare in bechmark indices. Tactically,we are overweight equities amid solid economic fundamentals and historically low
                                                                    real rates.
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr :class="$vuetify.breakpoint.smAndDown ? 'tdisplay' : 'tbdisplay'">
                                                            <td>
                                                                <div>Commentary</div>
                                                            </td>
                                                            <td colspan="2">
                                                                <div class="td-pa">
                                                                    We added to our strategic equities overweight in Feburary. The early 2022 selloff created an opportunity for long-term investors as
                                                                    we see the combination of low real rates, strong growth and resonable valuations as favorable for the asset class. Incorporating
                                                                    climate change in our expected returns brightens the appeal of developed market equities given the large weights of sectors such as
                                                                    tech and healthcare in bechmark indices. Tactically,we are overweight equities amid solid economic fundamentals and historically low
                                                                    real rates.
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                                <v-row class="row-style">
                                    <v-col cols="12" class="mb-120">
                                        <p class="font-size-24 color-orange mb-6 font-weight-black">Equities</p>
                                        <div style="text-align: right; margin-bottom: 9.5px" class="font-size-14">Change in view: <strong>Previous >> New</strong></div>
                                        <table class="equities">
                                            <colgroup>
                                                <col style="width: 20%" />
                                                <col style="width: 15%" />
                                                <col style="width: 15%" />
                                                <col style="width: 50%" />
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th>Asset</th>
                                                    <th>Underweight</th>
                                                    <th>Overweight</th>
                                                    <th>Commentary</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><p>United States</p></td>
                                                    <td></td>
                                                    <td><div class="color-box-1"></div></td>
                                                    <td>
                                                        <div class="td-pa">
                                                            We are overweight U.S. equities. We see the tech and healthcare sectors offering exposure to structural growth trends, and U.S. small caps
                                                            geared to an expected cyclical upswing in2021.
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><p>Euro Area</p></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>
                                                        <div class="td-pa">
                                                            We are neutral European equities. We believe the broad economic restart later in the year will help narrow the performance gap between this
                                                            market and the rest of the world.
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><p>Japan</p></td>
                                                    <td><div style="background-color: #fd3f01" class="color-box-2"></div></td>
                                                    <td></td>
                                                    <td>
                                                        <div class="td-pa">
                                                            We are underweight Japanese equities. Other Asian economies may be greater beneficiaries of a more predictable U.S. trade policy under a
                                                            Biden administration. A stronger yen amid potential U.S. dollar weakness may weigh on Japanese exporters.
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><p>Emerging Markets</p></td>
                                                    <td></td>
                                                    <td><div class="color-box-1"></div></td>
                                                    <td>
                                                        <div class="td-pa">
                                                            We are overweight EM equities. We see them as principal beneficiaries of a vaccine led global economic upswing in 2021. Other positives: our
                                                            expectation of a flat to weaker U.S. dollar and more stable trade policy under a Biden administration.
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><p>Asia ex-Japan</p></td>
                                                    <td></td>
                                                    <td><div class="color-box-1"></div></td>
                                                    <td>
                                                        <div class="td-pa">
                                                            We are overweight Asia ex Japan equities. Many Asian countries have effectively contained the virus and are further ahead in the economic
                                                            restart. We see the region’s tech orientation allowing it to benefit from structural growth trends.
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><p>UK</p></td>
                                                    <td></td>
                                                    <td><div class="color-box-1"></div></td>
                                                    <td>
                                                        <div class="td-pa">
                                                            We are overweight UK equities. The removal of uncertainty over a Brexit deal should see the risk premium on UK assets attached to that
                                                            outcome erode. We also see UK large caps as a relatively attractive play on the global cyclical recovery as it has lagged peers.
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><p>Momentum</p></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>
                                                        <div class="td-pa">
                                                            We keep momentum at neutral. The factor has become more exposed to cyclicality, could face challenges in the near term as a resurgence in
                                                            Covid 19 cases and a slow start to the vaccination efforts create potential for choppy markets.
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><p>Value</p></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>
                                                        <div class="td-pa">
                                                            We are neutral on value despite recent outperformance. The factor could benefit from an accelerated restart, but we believe that many of the
                                                            cheapest companies across a range of sectors face structural challenges.
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><p>Minimum Volatilityn</p></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>
                                                        <div class="td-pa">
                                                            We turn neutral min vol. Our regional and sectoral preferences warrant a higher exposure to the factor. Min vol’s underperformance has
                                                            brought valuations to more reasonable levels in our view.
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><p>Quality</p></td>
                                                    <td></td>
                                                    <td><div class="color-box-1"></div></td>
                                                    <td>
                                                        <div class="td-pa">
                                                            We are overweight quality. We like tech companies with structural tailwinds and see companies with strong balance sheets and cash flows as
                                                            resilient against a range of outcomes in the pandemic and economy.
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><p>Size</p></td>
                                                    <td></td>
                                                    <td><div class="color-box-1"></div></td>
                                                    <td>
                                                        <div class="td-pa">
                                                            We are overweight the U.S. size factor. We see small and mid cap U.S. companies as a key place where exposure to cyclicality may be rewarded
                                                            amid a vaccine led recovery.
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <p class="font-size-24 color-orange mb-6 font-weight-black">Fixed Income</p>
                                        <div style="text-align: right; margin-bottom: 9.5px" class="font-size-14">Change in view: <strong>Previous >> New</strong></div>
                                        <table class="fixed">
                                            <colgroup>
                                                <col style="width: 20%" />
                                                <col style="width: 15%" />
                                                <col style="width: 15%" />
                                                <col style="width: 50%" />
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th>Asset</th>
                                                    <th>Underweight</th>
                                                    <th>Overweight</th>
                                                    <th>Commentary</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><p>U.S. Treasuries</p></td>
                                                    <td><div class="color-box-2"></div></td>
                                                    <td></td>
                                                    <td>
                                                        <div class="td-pa">
                                                            We are underweight U.S. Treasuries. The accelerated economic restart has sent yields surging, but we prefer to stay underweight as we expect
                                                            short term rates will stay anchored near zero.
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><p>Treasury Inflation-Protected Securities</p></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>
                                                        <div class="td-pa">
                                                            We are neutral TIPS after the sharp rise in inflation expectations since late year. Further increases seem unlikely in the near term. We
                                                            still see inflation pressures building over the medium term due to structural reasons.
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><p>German Bunds</p></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>
                                                        <div class="td-pa">
                                                            We are neutral on bunds. We see the balance of risks shifting back in favor of more monetary policy easing from the European Central Bank as
                                                            the regional economic rebound shows signs of flagging.
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><p>Euro area peripherals</p></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>
                                                        <div class="td-pa">
                                                            We are neutral euro peripheral bond markets. Yields have rallied to near record lows and spreads have narrowed. The ECB supports the market
                                                            but it is not price agnostic its purchases have eased as spreads have narrowed.
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><p>Global Investment Grade</p></td>
                                                    <td><div class="color-box-2"></div></td>
                                                    <td></td>
                                                    <td>
                                                        <div class="td-pa">
                                                            We are underweight investment grade credit. We see little room for further yield spread compression and favor more cyclical exposures such
                                                            as high yield and Asia fixed income.
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><p>Global high yield</p></td>
                                                    <td></td>
                                                    <td><div class="color-box-1"></div></td>
                                                    <td>
                                                        <div class="td-pa">
                                                            We are moderately overweight global high yield. Spreads have narrowed significantly, but we believe the asset class remains an attractive
                                                            source of income in a yield starved world.
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><p>Emerging market hard currency</p></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>
                                                        <div class="td-pa">
                                                            We are neutral hard currency EM debt. We expect it to gain support from the vaccine led global restart and more predictable U.S. trade
                                                            policies.
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><p>Emerging market local currency</p></td>
                                                    <td></td>
                                                    <td><div class="color-box-1"></div></td>
                                                    <td>
                                                        <div class="td-pa">
                                                            We are overweight EM local debt as its year to date underperformance has left valuations more appealing, particularly if U.S. Treasury
                                                            yields and the U.S. dollar stabilize. We see limited contagion to broader EM from selected country specific volatility.
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><p>Asia fixed income</p></td>
                                                    <td></td>
                                                    <td><div class="color-box-1"></div></td>
                                                    <td>
                                                        <div class="td-pa">
                                                            We are overweight Asia fixed income. We see the asset class as attractively valued. Asian countries have done better in containing the virus
                                                            and are further ahead in the economic restart.
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div class="font-size-21 mb-6">
                                            Past performance is not a reliable indicator of current or future results. Indexes are unmanaged and do not account for fees. It is not possible directly is
                                            an index.
                                        </div>
                                        <div class="font-size-14 color-gray">
                                            Note: Views are from a U.S. dollar perspective. This material represents an assessment of the market environment at a specific time and is not intended to
                                            be a forecast or guarantee of future results. This information should not be relied upon as investment advice regarding any particular fund, strategy or
                                            security.
                                        </div>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12">
                                        <p class="tab-title">Key Takeaways</p>
                                        <div class="mb-10 font-size-21">
                                            The correlations chart shows a range of assets as represented by their respective indexes. These assets include bonds and equities of various kinds, and
                                            others such as commodities. In times of stress, returns of different asset classes tend to be highly correlated, implying a lack of diversification.
                                        </div>
                                        <div class="font-size-21">
                                            Correlations are generally medium to high. The correlation of EM and investment grade debt with DM government debt is on the high side, showing the
                                            durationrisk from any push higher in long-term yields. That has been reflected in total returns this year. At the same time, the typically negative
                                            correlation in returns between DM equities and government debt is closer to zero now, suggesting reduced diversification for muti-asset portfolios.
                                        </div>
                                    </v-col>
                                </v-row>
                            </template>
                            <template v-else-if="tab.middleTab == 1">
                                <v-row class="row-style">
                                    <v-col cols="12" class="mb-120">
                                        <p class="tab-title">Investment Themes</p>
                                        <p style="margin-bottom: 40px">
                                            <span style="font-size: 36px; font-weight: bold">01.</span>
                                            <span class="font-size-24 font-weight-black">The new normal</span>
                                        </p>
                                        <ul class="mb-10">
                                            <li class="font-size-21 mb-10">
                                                We see the U.S. and UK leading the developed world’s economic restart – with the euro area catching up - powered by pent-up demand and sky-high excess
                                                savings. The huge growth spurt will be transitory, in our view. This is because a restart is not a recovery: the more activity restarts now, the less
                                                there will be to restart later.
                                            </li>
                                            <li class="font-size-21 mb-10">
                                                Fed officials in June projected higher inflation and moved up the lift-off in policy rates to 2023. We believe this confirmed our new nominal theme –
                                                that interest rates will rise more slowly than in the past in response to higher inflation – as the Fed’s acknowledgement of rising price pressures has
                                                not translated into projections for significantly higher interest rates any time soon.
                                            </li>
                                            <li class="font-size-21 mb-10">
                                                We expect short-term rates will stay anchored near zero, supporting equity valuations. The Fed could be more willing to lean against rising long-term
                                                yields than the past, yet the direction of travel over the next few years is clearly towards higher long-term yields. We see important limits on the
                                                level of yields the global economy can withstand.
                                            </li>
                                            <li class="font-size-21 mb-20">
                                                Market implication: We favor inflation-linked bonds amid inflationary pressures in the medium term. Tactically we prefer to take risk in equities over
                                                credit amid low rates and tight spreads.
                                            </li>
                                        </ul>
                                        <p style="margin-bottom: 40px">
                                            <span style="font-size: 36px; font-weight: bold">02.</span>
                                            <span class="font-size-24 font-weight-black">Globalization rewired</span>
                                        </p>
                                        <ul>
                                            <li class="font-size-21 mb-10">
                                                Covid-19 has accelerated geopolitical transformations such as a bipolar U.S.-China world order and a rewiring of global supply chains, placing greater
                                                weight on resilience.
                                            </li>
                                            <li class="font-size-21 mb-10">
                                                The Biden administration is engaging in strategic competition with China, particularly on technology, and has criticized Beijing on human rights.
                                                Pending legislation in the U.S. would direct large-scale investment to meet the China challenge. We see a case for greater exposure to China-related
                                                assets for potential returns and diversification – and view them as core strategic holdings that are distinct from EM exposures.
                                            </li>
                                            <li class="font-size-21 mb-10">
                                                We expect persistent inflows to Asian assets as we believe many global investors remain underinvested and China’s weight in global indexes grows. Risks
                                                to China-exposed assets include China’s high debt levels and U.S.-China conflicts, but we believe investors are compensated for these risks.
                                            </li>
                                            <li class="font-size-21 mb-20">
                                                Market implication: Strategically we favor deliberate country diversification and above-benchmark China exposures. Tactically we like Asia ex-Japan
                                                equities, and see UK equities as an inexpensive, cyclical exposure.
                                            </li>
                                        </ul>
                                        <p style="margin-bottom: 40px">
                                            <span style="font-size: 36px; font-weight: bold">03.</span>
                                            <span class="font-size-24 font-weight-black">Turbocharged transformations</span>
                                        </p>
                                        <ul>
                                            <li class="font-size-21 mb-10">
                                                The pandemic has added fuel to pre-existing structural trends such as an increased focus on sustainability, rising inequality within and across nations,
                                                and the dominance of e-commerce at the expense of traditional retail.
                                            </li>
                                            <li class="font-size-21 mb-10">The pandemic has focused attention on underappreciated sustainability-related factors and supply chain resilience.</li>
                                            <li class="font-size-21 mb-10">
                                                It has also accelerated “winner takes all” dynamics that have led to the strong performance of a handful of tech giants in recent years. We see tech as
                                                having long-term structural tailwinds despite its increased valuations, yet it could face challenges from higher corporate taxes and tighter regulation
                                                under a united Democratic government.
                                            </li>
                                            <li class="font-size-21">
                                                The pandemic has heightened the focus on inequalities within and across countries due to the varying quality of public health infrastructure –
                                                particularly across EMs – and access to healthcare. We see a risk of social unrest.
                                            </li>
                                        </ul>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12">
                                        <p class="tab-title">Key Takeaways</p>
                                        <div class="mb-10 font-size-21">
                                            The correlations chart shows a range of assets as represented by their respective indexes. These assets include bonds and equities of various kinds, and
                                            others such as commodities. In times of stress, returns of different asset classes tend to be highly correlated, implying a lack of diversification.
                                        </div>
                                        <div class="font-size-21">
                                            Correlations are generally medium to high. The correlation of EM and investment grade debt with DM government debt is on the high side, showing the
                                            durationrisk from any push higher in long-term yields. That has been reflected in total returns this year. At the same time, the typically negative
                                            correlation in returns between DM equities and government debt is closer to zero now, suggesting reduced diversification for muti-asset portfolios.
                                        </div>
                                    </v-col>
                                </v-row>
                            </template>
                        </v-col>
                    </v-row>
                </v-col>
            </div>
        </v-row>
    </div>
</template>

<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="https://code.highcharts.com/modules/export-data.js"></script>
<script src="https://code.highcharts.com/modules/accessibility.js"></script>
<script src="https://code.highcharts.com/modules/data.js"></script>
<script src="https://code.highcharts.com/stock/indicators/indicators.js"></script>
<script src="https://code.highcharts.com/highcharts-more.js"></script>
<script lang="ts">
import Vue from 'vue';
import searchImg from '@/assets/images/searchImg.png';
import arrowRight from '@/assets/images/icon_arrow_right_big.png';
import printreport from '@/assets/images/printreport.png';
import back from '@/assets/images/bg_monthlycommentary.png';

import toggleButton from '@/pages/components/toggle-button.vue';
import chartTest from '@/pages/components/chart.vue';

import Highcharts from 'highcharts';
import pattern from 'highcharts/modules/pattern-fill';
import more from 'highcharts/highcharts-more.src';
require('highcharts/highcharts-more')(Highcharts);

pattern(Highcharts);
export default Vue.extend({
    components: {
        chartTest,
    },
    data() {
        return {
            tab: {
                middleTab: 0,
            },
            img: {
                searchImg,
                arrowRight,
                printreport,
                back,
            },
            data: {},
            tdisplay: 'tdisplay',
            tbdisplay: 'tbdisplay',
        };
    },

    methods: {
        async reportDownload() {
            this.$store.commit('app/SET_LOADING', true);
            document.getElementById('monthly-commentary').style.display = '';
            let reportProduct = (document.getElementById('monthly-commentary').src = '/insights/market-view/monthly-commentary-report');

            window.addEventListener('message', (e) => {
                if (e.data.success === 'success') {
                    document.getElementById('monthly-commentary').style.display = 'none';
                    this.$store.commit('app/SET_LOADING', false);
                }
            });
        },

        async setColumnChart() {
            // Create the chart
            for (let i = 0; i < 3; i++) {
                Highcharts.chart('column' + i, {
                    credits: {
                        enabled: false,
                    }, // 하단 highchart.com 글씨 삭제

                    chart: {
                        type: 'column',
                        height: 100,
                        margin: [0, 0, 5, 0],
                    },

                    title: {
                        text: null,
                    },

                    subtitle: {
                        text: null,
                    },

                    accessibility: {
                        announceNewData: {
                            enabled: true,
                        },
                    },

                    xAxis: {
                        title: {
                            text: '',
                        },
                        labels: {
                            enabled: false,
                        },
                        lineColor: 'transparent', //하단 바닥부분 기준선 삭제
                        tickWidth: 0, //기준선 삭제
                        gridLineWidth: 0, //기준선 삭제
                    },

                    yAxis: {
                        min: 0,
                        max: 4,
                        title: {
                            text: null,
                        },
                        labels: {
                            enabled: false,
                        },
                        lineColor: 'transparent', //하단 바닥부분 기준선 삭제
                        tickWidth: 0, //기준선 삭제
                        gridLineWidth: 0, //기준선 삭제
                    },

                    legend: {
                        enabled: false,
                    },

                    plotOptions: {
                        series: {
                            clip: false,
                            borderColor: '#000000',
                            dataLabels: {
                                enabled: false,
                            },
                            states: {
                                hover: {
                                    enabled: false,
                                },
                            },
                        },
                    },

                    tooltip: {
                        enabled: false,
                        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b><br/>',
                    },

                    series: [
                        {
                            color: {
                                pattern: {
                                    // 체크 패턴
                                    path: {
                                        d: 'M 0 0 L 6 6 M 5 -1 L 7 1 M -1 5 L 1 7',
                                        strokeWidth: 3,
                                    },
                                    height: 6,
                                    width: 6,
                                    r: 4,
                                    color: '#fff',
                                },
                            },
                            name: 'Strategic View',
                            data: [
                                {
                                    name: '1',
                                    y: 1,
                                    color: '#e8e8e8',
                                },
                                {
                                    name: '2',
                                    y: 3,
                                    color: {
                                        pattern: {
                                            // 체크 패턴
                                            path: {
                                                d: 'M 0 0 L 6 6 M 5 -1 L 7 1 M -1 5 L 1 7',
                                                strokeWidth: 3,
                                            },
                                            height: 6,
                                            width: 6,
                                            r: 4,
                                            color: '#ffd600',
                                        },
                                    },
                                    showDataLabel: true,
                                },
                                {
                                    name: '3',
                                    y: 1,
                                    color: '#e8e8e8',
                                },
                                {
                                    name: '4',
                                    y: 1,
                                    color: '#e8e8e8',
                                },
                                {
                                    name: '5',
                                    y: 1,
                                    color: '#e8e8e8',
                                },
                            ],
                        },
                    ],
                });
            }
            for (let i = 0; i < 3; i++) {
                Highcharts.chart('columnChart' + i, {
                    credits: {
                        enabled: false,
                    }, // 하단 highchart.com 글씨 삭제

                    chart: {
                        type: 'column',
                        height: 100,
                        margin: [0, 0, 5, 0],
                    },

                    title: {
                        text: null,
                    },

                    subtitle: {
                        text: null,
                    },

                    accessibility: {
                        announceNewData: {
                            enabled: true,
                        },
                    },

                    xAxis: {
                        title: {
                            text: '',
                        },
                        labels: {
                            enabled: false,
                        },
                        lineColor: 'transparent', //하단 바닥부분 기준선 삭제
                        tickWidth: 0, //기준선 삭제
                        gridLineWidth: 0, //기준선 삭제
                    },

                    yAxis: {
                        min: 0,
                        max: 4,
                        title: {
                            text: null,
                        },
                        labels: {
                            enabled: false,
                        },
                        lineColor: 'transparent',
                        tickWidth: 0,
                        gridLineWidth: 0,
                    },

                    legend: {
                        enabled: false,
                    },

                    plotOptions: {
                        series: {
                            clip: false,
                            borderColor: '#000000',
                            dataLabels: {
                                enabled: true,
                                inside: false,
                                useHTML: true,
                                formatter: function () {
                                    const dataMax = this.series.yAxis.dataMax,
                                        content = `
                                            <div style="
                                                transform: translate(0,0);
                                                font-size: 15px;
                                            ">
                                                +1
                                            </div>
                                         `;
                                    if (this.y === dataMax) return content;
                                },
                            },
                            states: {
                                hover: {
                                    enabled: false,
                                },
                            },
                        },
                    },

                    tooltip: {
                        enabled: false,
                        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b><br/>',
                    },

                    series: [
                        {
                            color: {
                                pattern: {
                                    // 체크 패턴
                                    path: {
                                        d: 'M 0 0 L 6 6 M 5 -1 L 7 1 M -1 5 L 1 7',
                                        strokeWidth: 3,
                                    },
                                    height: 6,
                                    width: 6,
                                    r: 4,
                                    color: '#fff',
                                },
                            },
                            name: 'Strategic View',
                            data: [
                                {
                                    name: '1',
                                    y: 1,
                                    color: '#e8e8e8',
                                },
                                {
                                    name: '2',
                                    y: 2,
                                    color: {
                                        pattern: {
                                            // 체크 패턴
                                            path: {
                                                d: 'M 0 0 L 6 6 M 5 -1 L 7 1 M -1 5 L 1 7',
                                                strokeWidth: 3,
                                            },
                                            height: 6,
                                            width: 6,
                                            r: 4,
                                            color: '#2e9875',
                                        },
                                    },
                                },
                                {
                                    name: '3',
                                    y: 1,
                                    color: '#e8e8e8',
                                },
                                {
                                    name: '4',
                                    y: 1,
                                    color: '#e8e8e8',
                                },
                                {
                                    name: '5',
                                    y: 1,
                                    color: '#e8e8e8',
                                },
                            ],
                        },
                    ],
                });
            }
        },
    },

    mounted() {
        this.setColumnChart();
    },

    watch: {
        'tab.middleTab': function (n) {
            let self = this;

            this.$nextTick(async function () {
                if (n === 0) {
                    await self.setColumnChart();
                }
            });
        },
    },
});
</script>

<style>
/* 전체적인 css */
.marketview .top {
    width: 100%;
    padding: 180px 138px 180px 150px;
    background-color: #fff;
}

.marketview .menu-title {
    font-size: 64px !important;
    font-weight: 900;
    color: #000;
    line-height: 1.09;
    margin-bottom: 25px;
}

.marketview .btn {
    width: 292px;
    height: 48px;
    color: #fff;
    background: #000;
    font-size: 21px;
}

.marketview .menu-sub-title {
    font-size: 24px !important;
    font-weight: normal;
    color: #000;
    margin-bottom: 80px;
}

.marketview .middle {
    width: 100%;
    padding: 80px 150px 40px 150px;
    object-fit: contain;
    background-color: #f3f3f3;
    border-bottom: 0px solid #f3f3f3;
}

.marketview .middle-bottom {
    width: 100%;
    padding: 40px 150px 80px 150px;
    object-fit: contain;
    background-color: #f3f3f3;
}

.marketview .bottom {
    width: 100%;
    padding: 120px 150px;
    object-fit: contain;
    background-color: #fff;
}

/* margin */
.marketview .mb-25 {
    margin-bottom: 25px;
}

.marketview .mb-120 {
    margin-bottom: 120px;
}

.marketview .pl-70 {
    padding-left: 70px;
}

.marketview .pr-70 {
    padding-right: 70px;
}

.marketview .mb-90 {
    margin-bottom: 90px;
}

/* middle */
.marketview .key {
    font-size: 36px;
    font-weight: 900;
}

.marketview .key-title {
    font-size: 21px;
}

.marketview .print {
    font-weight: 900;
    padding-left: 43px;
    font-size: 21px;
    cursor: pointer;
}

/* bottom */
.marketview .bottom .marketview-tabs {
    margin-top: 120px;
    margin-bottom: 80px;
    border-bottom: 1px solid #e8e8e8;
}
.marketview .bottom .marketview-tabs > div {
    background-color: inherit;
}

.marketview .bottom .marketview-tabs .v-tabs-slider-wrapper {
    height: 4px !important;
}

.marketview .bottom .marketview-tabs .v-tabs-slider-wrapper .v-tabs-slider {
    color: #000;
    font-weight: 900;
}

.marketview .bottom .marketview-tab {
    font-size: 24px;
    font-weight: 900;
    white-space: unset;
    letter-spacing: unset;
    color: #b3b3b3 !important;
    text-transform: none !important;
}

.marketview .bottom .marketview-tab.v-tab--active {
    color: #000 !important;
}

.marketview .bottom .tab-title {
    font-size: 24px;
    color: #fd3f01;
    font-weight: 900;
    margin-bottom: 40px;
}

.marketview .bottom .row-style {
    border-bottom: 5px solid #f3f3f3;
    margin-bottom: 120px;
}

.marketview .search-box {
    margin-left: 12px;
    border: 1px solid;
    height: 30px;
    position: relative;
    object-fit: contain;
}

.marketview .input-box {
    height: 29px;
    padding-left: 5px;
    width: 90%;
}

.marketview .search-box img {
    position: absolute;
    right: 10px;
    margin-top: 5px;
}

input:focus {
    outline: none;
}

.marketview table {
    border-collapse: collapse;
    font-size: 18px;
}

.marketview .directional th {
    border-top: 1px solid;
    border-bottom: 1px solid #808080;
    text-align: left;
    padding: 10px;
}

.marketview .directional td {
    border-bottom: 1px solid #808080;
    text-align: left;
    padding: 10px;
}

.marketview .color-box {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    float: left;
}

.marketview .font-size-24 {
    font-size: 24px !important;
}

.marketview .chart .highcharts-root {
    display: flex;
    width: 100% !important;
    height: 100% !important;
}

.marketview .chart .highcharts-container {
    display: flex;
    width: 100% !important;
    height: 100% !important;
}

.marketview .barx {
    border: 1px solid #000;
    width: 255px;
}

.marketview .fixed {
    margin-bottom: 40px;
}

.marketview .fixed th {
    border-top: 1px solid;
    border-bottom: 1px solid #808080;
    text-align: left;
    padding: 10px;
}

.marketview .fixed td {
    border-bottom: 1px solid #808080;
    text-align: left;
    padding: 0px 10px;
}

.marketview .column {
    width: 250px;
}

.marketview .equities {
    margin-bottom: 80px;
}

.marketview .equities th {
    border-top: 1px solid;
    border-bottom: 1px solid #808080;
    text-align: left;
    padding: 10px;
}

.marketview .equities td {
    border-bottom: 1px solid #808080;
    text-align: left;
    padding: 0px 10px;
}

.marketview .color-box-1 {
    width: 30px;
    height: 30px;
    background-color: #ffd600;
    border: 1px solid #000;
    margin-left: 75px;
}

.marketview .color-box-2 {
    width: 30px;
    height: 30px;
    background-color: #fd3f01;
    border: 1px solid #000;
    margin-left: 75px;
}

.cursor {
    cursor: pointer;
}

.marketview .td-pa {
    padding-top: 20px;
    padding-bottom: 20px;
}

.tdisplay {
    display: '';
}

.tbdisplay {
    display: none;
}

@media screen and (max-width: 1263px) {
    .marketview .top {
        height: auto;
        padding: 70px 80px;
    }

    .marketview .menu-title {
        font-size: 48px !important;
        margin-bottom: 15px;
    }

    .marketview .menu-sub-title {
        font-size: 22px !important;
        margin-bottom: 50px;
    }

    .marketview .middle {
        padding: 30px 80px;
        height: auto;
    }

    .marketview .middle-bottom {
        padding: 30px 80px;
        height: auto;
    }

    .marketview .bottom {
        padding: 50px 80px 80px 80px;
        height: auto;
    }

    .marketview .mb-25 {
        margin-bottom: 25px;
    }

    .marketview .btn {
        width: 200px;
        font-size: 15px;
    }

    /* middle */
    .marketview .key {
        font-size: 30px;
    }

    .marketview .key-title {
        font-size: 22px;
    }

    /* bottom */
    .marketview .bottom .marketview-tabs {
        margin-top: 60px;
        margin-bottom: 60px;
    }

    .marketview .bottom .marketview-tab {
        font-size: 18px;
    }

    .marketview .bottom .tab-title {
        margin-bottom: 30px;
    }

    input:focus {
        outline: none;
    }

    .marketview .color-box {
        width: 14px;
        height: 14px;
        border-radius: 50%;
        float: left;
        margin-top: 3px;
    }

    .marketview .bottom .row-style {
        margin-bottom: 60px;
    }

    .marketview .mb-120 {
        margin-bottom: 60px;
    }

    .marketview .font-size-24 {
        font-size: 20px !important;
    }

    .marketview .barx {
        width: 200px;
    }

    .marketview .column {
        width: 180px;
    }

    .marketview .print {
        padding-left: 40px;
        font-size: 19px;
    }
}

@media screen and (max-width: 959px) {
    .marketview .top {
        height: auto;
        padding: 50px 40px;
    }

    .marketview .menu-title {
        font-size: 34px !important;
        margin-bottom: 15px;
    }

    .marketview .menu-sub-title {
        font-size: 16px !important;
        margin-bottom: 30px;
    }

    .marketview .middle {
        padding: 30px 40px;
        height: auto;
    }

    .marketview .middle-bottom {
        padding: 30px 40px;
        height: auto;
    }

    .marketview .bottom {
        padding: 30px 40px 40px 40px;
        height: auto;
    }

    .marketview .btn {
        width: 200px;
        font-size: 15px;
    }

    /* middle */
    .marketview .key {
        font-size: 22px;
    }

    .marketview .key-title {
        font-size: 20px;
    }

    /* bottom */
    .marketview .bottom .marketview-tabs {
        margin-top: 60px;
        margin-bottom: 60px;
    }

    .marketview .bottom .marketview-tab {
        font-size: 18px;
    }

    .marketview .bottom .tab-title {
        margin-bottom: 30px;
        font-size: 20px;
    }

    input:focus {
        outline: none;
    }

    .marketview .color-box {
        width: 12px;
        height: 12px;
    }

    .marketview .font-size-24 {
        font-size: 18px !important;
    }

    .marketview .search-box {
        width: 50%;
    }

    .marketview .mb-90 {
        margin-bottom: 25px;
    }

    .marketview .barx {
        width: 150px;
    }

    .marketview .color-box-1 {
        float: right;
        width: 22px;
        height: 22px;
        margin-left: 0px;
    }

    .marketview .color-box-2 {
        margin-left: 0px;
        float: right;
        width: 22px;
        height: 22px;
    }

    .marketview .column {
        width: 120px;
    }

    .marketview table {
        font-size: 15px;
    }

    .marketview .print {
        padding-left: 38px;
        font-size: 15px;
    }
}
</style>
