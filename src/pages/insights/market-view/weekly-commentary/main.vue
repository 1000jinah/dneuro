<template>
    <div class="weekly-commentary">
        <iframe id="weekly-commentary" width="0" height="0" src="" frameborder="0"></iframe>
        <v-row class="ma-0">
            <div style="background-color: #fff" class="d-flex wrapper-1920">
                <v-col cols="12" md="8" lg="8" class="top">
                    <div style="width: 72px; height: 12px; margin-bottom: 25px; background-color: #0b89fd"></div>
                    <p class="menu-title">Weekly market commentary</p>
                    <p class="menu-sub-title">Global Weekly Commentary l April 22, 2022</p>
                    <div class="d-flex">
                        <button class="btn" @click="$router.push({ path: '/insights/market-view/market-risk/list' })">Dneuro Investment Institute</button>
                        <div class="d-flex justify-center" style="align-items: center" @click="reportDownload()">
                            <U class="print pr-2">Print Report</U>
                            <img :src="img.printreport" class="justify-center align-center" style="width: 21.4px; height: 19px" />
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" md="4" lg="4" class="pa-0" v-if="$vuetify.breakpoint.mdAndUp">
                    <img :src="img.back" style="width: 100%; height: 100%" />
                </v-col>
            </div>
            <div style="background-color: #f3f3f3; width: 100%; border-bottom: 1px solid #000; border-top: 1px solid #000">
                <v-col cols="12" class="middle wrapper-1920">
                    <v-row>
                        <v-col cols="6" lg="9" sm="9" class="pb-0" style="margin-bottom: 30px">
                            <p class="review">
                                <template v-if="data.ratingValue === 0">
                                    Week in <br />
                                    review
                                </template>
                                <template v-else>
                                    The week <br />
                                    ahead
                                </template>
                            </p>
                        </v-col>
                        <v-col cols="6" lg="3" sm="3">
                            <div class="d-table-cell v-align-middle" style="float: right" :class="$vuetify.breakpoint.lgAndUp ? 'text-right' : ''">
                                <p class="mb-0">
                                    <img :src="img.arrowLeft" class="icon-arrow cursor v-align-middle" style="margin-right: 30px" @click="data.ratingValue = 0" />
                                    <template v-for="(item, idx) in 2">
                                        <button :key="idx" class="rating" :class="data.ratingValue == idx ? 'active' : ''" @click="data.ratingValue = idx"></button>
                                    </template>
                                    <img :src="img.arrowRight" class="icon-arrow cursor v-align-middle" style="margin-left: 30px" @click="data.ratingValue = 1" />
                                </p>
                            </div>
                        </v-col>
                    </v-row>
                    <v-row>
                        <template v-if="data.ratingValue === 0">
                            <v-col cols="12" lg="4" md="4" class="pt-0">
                                <v-divider class="color-gray line" />
                                <span class="font-weight-bold" :class="$vuetify.breakpoint.mdAndDown ? 'font-size-18' : 'font-size-21'">Flash Mfg. PMI fell to 51.2 from 53.6</span>
                            </v-col>
                            <v-col cols="12" lg="4" md="4" class="pt-0">
                                <v-divider class="color-gray line" />
                                <span class="font-weight-bold" :class="$vuetify.breakpoint.mdAndDown ? 'font-size-18' : 'font-size-21'">Flash Svcs. PMI fell to 51.6 from 53.4</span>
                            </v-col>
                            <v-col cols="12" lg="4" md="4" class="pt-0">
                                <v-divider class="color-gray line" />
                                <span class="font-weight-bold" :class="$vuetify.breakpoint.mdAndDown ? 'font-size-18' : 'font-size-21'">Existing home sales fell to 5.4m from 5.6m SAAR</span>
                            </v-col>
                        </template>
                        <template v-else>
                            <v-col cols="12" lg="3" md="3" class="pt-0">
                                <v-divider class="color-gray line" />
                                <span class="font-weight-bold" :class="$vuetify.breakpoint.mdAndDown ? 'font-size-18' : 'font-size-21'">Headline and core PCE</span>
                            </v-col>
                            <v-col cols="12" lg="3" md="3" class="pt-0">
                                <v-divider class="color-gray line" />
                                <span class="font-weight-bold" :class="$vuetify.breakpoint.mdAndDown ? 'font-size-18' : 'font-size-21'">ISM June PMIs</span>
                            </v-col>
                            <v-col cols="12" lg="3" md="3" class="pt-0">
                                <v-divider class="color-gray line" />
                                <span class="font-weight-bold" :class="$vuetify.breakpoint.mdAndDown ? 'font-size-18' : 'font-size-21'">Case-Shiler Home Price Index</span>
                            </v-col>
                            <v-col cols="12" lg="3" md="3" class="pt-0">
                                <v-divider class="color-gray line" />
                                <span class="font-weight-bold" :class="$vuetify.breakpoint.mdAndDown ? 'font-size-18' : 'font-size-21'">Personal Income and spending</span>
                            </v-col>
                        </template>
                    </v-row>
                </v-col>
            </div>
            <div style="background-color: #fff; width: 100%">
                <v-col cols="12" class="bottom wrapper-1920">
                    <v-row class="row-style">
                        <v-col cols="12" lg="6" md="6">
                            <p class="bottom-title mb-20">THOUGHT OF THE WEEK</p>
                            <p class="font-size-21">
                                With consumer sentiment at a record low level, these data show that the economy is now seeing the impact of higher commodity prices and higher interest rates on demand.
                            </p>
                        </v-col>
                        <v-col cols="12" lg="6" md="6">
                            <p class="color-orange font-size-24 font-weight-black mb-10 mt-3">Soft data gets softer</p>
                            <p class="color-gray font-size-18">U.S. June flash Markit PMIs</p>
                            <div id="lineChart"></div>
                            <p class="color-gray font-size-14 mt-10" style="float: right">Source: S&#38;P Global, J.P. Morgan Asset Management.</p>
                        </v-col>
                    </v-row>
                    <v-row class="row-style">
                        <v-col cols="12">
                            <p class="bottom-title mb-10">S&P 500 RETURNS (%)</p>
                            <div id="column"></div>
                        </v-col>
                    </v-row>
                    <v-row class="row-style">
                        <v-col cols="12">
                            <p class="bottom-title mb-20">Style Returns (%)</p>
                            <v-row class="ma-0">
                                <v-col cols="12" lg="6" md="6">
                                    <p class="color-orange font-size-24 font-weight-black mb-10">1 Week</p>
                                    <div id="heatMapWeek0" style="max-width: 570px"></div>
                                </v-col>
                                <v-col cols="12" lg="6" md="6">
                                    <p class="color-orange font-size-24 font-weight-black mb-10">YTD</p>
                                    <div id="heatMapWeek1" style="max-width: 570px"></div>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <p class="bottom-title mb-20">Weekly Data Center</p>
                            <v-row style="margin: 0px 0px 80px 0px">
                                <v-col cols="12" class="pa-0">
                                    <p class="color-orange font-size-24 font-weight-black mb-3">Equities</p>
                                </v-col>
                                <v-col cols="12" lg="8" md="8" style="overflow: auto" :style="$vuetify.breakpoint.smAndDown ? 'margin-bottom: 40px; padding: 0px;' : 'padding: 0px 40px 0px 0px; '">
                                    <span class="font-size-14" style="float: right; margin-bottom: 10px">Index Return (%)</span>
                                    <table class="weekly-table">
                                        <colgroup>
                                            <col style="width: 25%" />
                                            <col style="width: 12%" />
                                            <col style="width: 12%" />
                                            <col style="width: 12%" />
                                            <col style="width: 12%" />
                                            <col style="width: 12%" />
                                            <col style="width: 15%" />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th>Equities</th>
                                                <th>Level</th>
                                                <th>1 Week</th>
                                                <th>QTD</th>
                                                <th>YTD</th>
                                                <th>1 Year</th>
                                                <th>3-yr.Cum</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(item, idx) in table.equities" :key="'equities' + idx">
                                                <td>{{ item }}</td>
                                                <td>3825</td>
                                                <td>-2.18</td>
                                                <td>1.06</td>
                                                <td>-19.11</td>
                                                <td>-10.15</td>
                                                <td>35.68</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </v-col>
                                <v-col cols="12" lg="4" md="4" class="pa-0" style="overflow: auto">
                                    <span class="font-size-14" style="float: right; margin-bottom: 10px">Index Characteristics (%)</span>
                                    <table class="weekly-table-1">
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
                                            <tr v-for="(item, idx) in table.equities" :key="'equities' + idx">
                                                <td>38.68</td>
                                                <td>35.68</td>
                                                <td>35.68</td>
                                                <td>35.68</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </v-col>
                            </v-row>
                            <v-row style="margin: 0px 0px 80px 0px">
                                <v-col cols="12" class="pa-0">
                                    <p class="color-orange font-size-24 font-weight-black mb-10">Fixed Income</p>
                                </v-col>
                                <v-col cols="12" class="pa-0" style="overflow: auto">
                                    <table class="weekly-table">
                                        <colgroup>
                                            <col style="width: 25%" />
                                            <col style="width: 12%" />
                                            <col style="width: 12%" />
                                            <col style="width: 12%" />
                                            <col style="width: 12%" />
                                            <col style="width: 12%" />
                                            <col style="width: 15%" />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th>Fixed Income</th>
                                                <th>Yield</th>
                                                <th>1 Week</th>
                                                <th>QTD</th>
                                                <th>YTD</th>
                                                <th>1 Year</th>
                                                <th>3-yr.Cum</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(item, idx) in table.fixedIncomne" :key="'fixedIncomne' + idx">
                                                <td>{{ item }}</td>
                                                <td>3825</td>
                                                <td>-2.18</td>
                                                <td>1.06</td>
                                                <td>-19.11</td>
                                                <td>-10.15</td>
                                                <td>35.68</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </v-col>
                            </v-row>
                            <v-row style="margin: 0px 0px 80px 0px">
                                <v-col cols="12" class="pa-0">
                                    <p class="color-orange font-size-24 font-weight-black mb-3">Currencies</p>
                                </v-col>
                                <v-col cols="12" class="pa-0" style="overflow: auto">
                                    <span class="font-size-14" style="float: right; margin-bottom: 10px">Levels</span>
                                    <table class="weekly-table">
                                        <colgroup>
                                            <col style="width: 40%" />
                                            <col style="width: 15%" />
                                            <col style="width: 15%" />
                                            <col style="width: 15%" />
                                            <col style="width: 15%" />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th>Currencies</th>
                                                <th>07/01/2022</th>
                                                <th>07/01/2022</th>
                                                <th>12/31/2021</th>
                                                <th>12/31/2021</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(item, idx) in table.currencies" :key="'currencies' + idx">
                                                <td>{{ item }}</td>
                                                <td>3825</td>
                                                <td>-2.18</td>
                                                <td>1.06</td>
                                                <td>-19.11</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </v-col>
                            </v-row>
                            <v-row style="margin: 0px 0px 80px 0px">
                                <v-col cols="12" class="pa-0">
                                    <p class="color-orange font-size-24 font-weight-black mb-3">Key Rates</p>
                                </v-col>
                                <v-col cols="12" class="pa-0" style="overflow: auto">
                                    <span class="font-size-14" style="float: right; margin-bottom: 10px">Levels (%)</span>
                                    <table class="weekly-table">
                                        <colgroup>
                                            <col style="width: 28%" />
                                            <col style="width: 12%" />
                                            <col style="width: 12%" />
                                            <col style="width: 12%" />
                                            <col style="width: 12%" />
                                            <col style="width: 12%" />
                                            <col style="width: 12%" />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th>Key Rates</th>
                                                <th>07/01/2022</th>
                                                <th>06/24/2022</th>
                                                <th>06/30/2021</th>
                                                <th>12/31/2021</th>
                                                <th>07/01/2021</th>
                                                <th>07/01/2021</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(item, idx) in table.keyRates" :key="'keyRates' + idx">
                                                <td>{{ item }}</td>
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
                            </v-row>
                            <v-row class="ma-0">
                                <v-col cols="12" class="pa-0">
                                    <p class="color-orange font-size-24 font-weight-black mb-3">Commodities</p>
                                </v-col>
                                <v-col cols="12" class="pa-0" style="overflow: auto">
                                    <span class="font-size-14" style="float: right; margin-bottom: 10px">Levels</span>
                                    <table class="weekly-table">
                                        <colgroup>
                                            <col style="width: 55%" />
                                            <col style="width: 15%" />
                                            <col style="width: 15%" />
                                            <col style="width: 15%" />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th>Commodities</th>
                                                <th>07/01/2022</th>
                                                <th>12/31/2021</th>
                                                <th>07/01/2021</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(item, idx) in table.commodities" :key="'commodities' + idx">
                                                <td>{{ item }}</td>
                                                <td>3825</td>
                                                <td>-2.18</td>
                                                <td>1.06</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-col>
            </div>
            <div style="background-color: #f3f3f3; width: 100%">
                <v-col cols="12" class="disclosures wrapper-1920">
                    <p class="font-size-18 mb-10">Disclosures</p>
                    <v-row>
                        <v-col cols="12" lg="6" md="6" class="font-size-14" style="padding-right: 18px">
                            Chart of the Week: Source: Bloomberg, FactSet, FTSE Russell, MSCI, NAREIT, Standard and Poor's, J.P. MorganAsset Management. Thought of the Week: Source: Bloomberg,
                            FactSet, FTSE Russell, MSCI, NAREIT, Standard and Poor's, J.P. MorganAsset Management.
                            <br />
                            Abbreviations: Cons. Sent.: University of Michigan Consumer Sentiment Index; CPI: Consumer Price Index; EIA: Energy Information Agency; FHFA HPI: - Federal Housing Finance
                            Authority House Price Index; FOMC: Federal Open Market Committee; GDP: gross domestic product; HPI: Home Price Index; HMI: Housing Market Index; ISM Mfg. Index: Institute
                            for Supply Management Manufacturing Index; PCE: Personal consumption expenditures; Philly Fed Survey: Philadelphia Fed Business Outlook Survey; PMI: Purchasing Managers'
                            Manufacturing Index; PPI: Producer Price Index; SAAR: Seasonally Adjusted Annual Rate
                            <br />
                            Equity Price Levels and Returns: All returns represent total return for stated period. Index: S&P 500; provided by: Standard & Poor’s. Index: Dow Jones Industrial 30 (The
                            Dow Jones is a price-weighted index composing of 30 widely-traded blue chip stocks.) ; provided by: S&P Dow Jones Indices LLC. Index: Russell 2000; provided by: Russell
                            Investments. Index: Russell 1000 Growth; provided by: Russell Investments. Index: Russell 1000 Value; provided by: Russell Investments. Index: MSCI – EAFE; provided by:
                            MSCI – gross official pricing. Index: MSCI – EM; provided by: MSCI – gross official pricing. Index: Nasdaq Composite; provided by: NASDAQ OMX Group.
                            <br />
                            MSCI EAFE is a Morgan Stanley Capital International Index that is designed to measure the performance of the developed stock markets of Europe, Australasia, and the Far
                            East.
                            <br />
                            Bond Returns: All returns represent total return. Index: Bloomberg US Aggregate; provided by: Bloomberg Capital. Index: Bloomberg Investment Grade Credit; provided by:
                            Bloomberg Capital. Index: Bloomberg Municipal Bond 10 Yr; provided by: Blomberg Capital. Index: Bloomberg Capital High Yield Index; provided by: Bloomberg Capital.
                            <br />
                            Key Interest Rates: 2 Year Treasury, FactSet; 10 Year Treasury, FactSet; 30 Year Treasury, FactSet; 10 Year German Bund, FactSet. 3 Month LIBOR, British Bankers’
                            Association; 3 Month EURIBOR, European Banking Federation; 6 Month CD, Federal Reserve; 30 Year Mortgage, Mortgage Bankers Association (MBA); Prime Rate: Federal Reserve.
                            <br />
                            Commodities: Gold, FactSet; Crude Oil (WTI), FactSet; Gasoline, FactSet; Natural Gas, FactSet; Silver, FactSet; Copper, FactSet; Corn, FactSet. Bloomberg Commodity Index
                            (BBG Idx), Bloomberg Finance L.P.
                            <br />
                            Currency: Dollar per Pound, FactSet; Dollar per Euro, FactSet; Yen per Dollar, FactSet.
                            <br />
                            S&P Index Characteristics: Dividend yield provided by FactSet Pricing database. Fwd. P/E is a bottom-up weighted harmonic average using First Call Mean estimates for the
                            "Next 12 Months" (NTM) period. Market cap is a bottom-up weighted average based on share information from Compustat and price information from FactSet's Pricing database as
                            provided by Standard & Poor's.
                            <br />
                            MSCI Index Characteristics: Dividend yield provided by FactSet Pricing database. Fwd. P/E is a bottom-up weighted harmonic average for the "Next 12 Months" (NTM) period.
                            Market cap is a bottom- up weighted average based on share information from MSCI and Price information from FactSet's Pricing database as provided by MSCI.
                            <br />
                            Russell 1000 Value Index, Russell 1000 Growth Index, and Russell 2000 Index Characteristics: Trailing P/E is provided directly by Russell. Fwd. P/E is a bottom-up weighted
                            harmonic average using First Call Mean estimates for the "Next 12 Months" (NTM) period. Market cap is a bottom-up weighted average based on share information from Compustat
                            and price information from FactSet's Pricing database as provided by Russell.
                            <br />
                            Sector Returns: Sectors are based on the GICS methodology. Return data are calculated by FactSet using constituents and weights as provided by Standard & Poor’s. Returns
                            are cumulative total return for stated period, including reinvestment of dividends.
                            <br />
                            Style Returns: Style box returns based on Russell Indexes with the exception of the Large-Cap Blend box, which reflects the S&P 500 Index. All values are cumulative total
                            return for stated period including the reinvestment of dividends. The Index used from L to R, top to bottom are: Russell 1000 Value Index (Measures the performance of those
                            Russell 1000 companies with lower price-to-book ratios and lower forecasted growth values), S&P 500 Index (Index represents the 500 Large Cap portion of the stock market,
                            and is comprised of 500 stocks as selected by the S&P Index Committee), Russell 1000 Growth Index (Measures the performance of those Russell 1000 companies with higher
                            price-to-book ratios and higher forecasted growth values), Russell Mid Cap Value Index (Measures the performance of those Russell Mid Cap companies with lower price-to-book
                            ratios and lower forecasted growth values), Russell Mid Cap Index (The Russell Midcap Index includes the smallest 800 securities in the Russell 1000), Russell Mid Cap
                            Growth Index (Measures the performance of those Russell Mid Cap companies with higher price-to-book ratios and higher forecasted growth values), Russell 2000 Value Index
                            (Measures the performance of those Russell 2000 companies with lower price-to-book ratios and lower forecasted growth values), Russell 2000 Index (The Russell 2000 includes
                            the smallest 2000 securities in the Russell 3000), Russell 2000 Growth Index (Measures the performance of those Russell 2000 companies with higher price-to-book ratios and
                            higher forecasted growth values).
                            <br />
                            Past performance does not guarantee future results. Diversification does not guarantee investment returns and does not eliminate the risk of loss.
                        </v-col>
                        <v-col cols="12" lg="6" md="6" class="font-size-14" style="padding-left: 18px">
                            Opinions and estimates offered constitute our judgment and are subject to change without notice, as are statements of financial market trends, which are based on current
                            market conditions. We believe the information provided here is reliable, but do not warrant its accuracy or completeness. This material is not intended as an offer or
                            solicitation for the purchase or sale of any financial instrument. The views and strategies described may not be appropriate for all investors.This material has been
                            prepared for informational purposes only, and is not intended to provide, and should not be relied on for, accounting, legal or tax advice. References to future returns are
                            not promises or even estimates of actual returns a client portfolio may achieve. Any forecasts contained herein are for illustrative purposes only and are not to be relied
                            upon as advice or interpreted as a recommendation.
                            <br />
                            The Market Insights program provides comprehensive data and commentary on global markets without reference to products. Designed as a tool to help clients understand the
                            markets and support investment decision-making, the program explores the implications of current economic data and changing market conditions.
                            <br />
                            The J.P. Morgan Asset Management Market Insights and Portfolio Insights programs, as non-independent research, have not been prepared in accordance with legal requirements
                            designed to promote the independence of investment research, nor are they subject to any prohibition on dealing ahead of the dissemination of investment research.
                            <br />
                            This document is a general communication being provided for informational purposes only. It is educational in nature and not designed to be taken as advice or a
                            recommendation for any specific investment product, strategy, plan feature or other purpose in any jurisdiction, nor is it a commitment from J.P. Morgan Asset Management or
                            any of its subsidiaries to participate in any of the transactions mentioned herein. Any examples used are generic, hypothetical and for illustration purposes only. This
                            material does not contain sufficient information to support an investment decision and it should not be relied upon by you in evaluating the merits of investing in any
                            securities or products. In addition, users should make an independent assessment of the legal, regulatory, tax, credit, and accounting implications and determine, together
                            with their own financial professional, if any investment mentioned herein is believed to be appropriate to their personal goals.
                            <br />
                            Investors should ensure that they obtain all available relevant information before making any investment. Any forecasts, figures, opinions or investment techniques and
                            strategies set out are for information purposes only, based on certain assumptions and current market conditions and are subject to change without prior notice. All
                            information presented herein is considered to be accurate at the time of production, but no warranty of accuracy is given and no liability in respect of any error or
                            omission is accepted. It should be noted that investment involves risks, the value of investments and the income from them may fluctuate in accordance with market
                            conditions and taxation agreements and investors may not get back the full amount invested. Both past performance and yields are not reliable indicators of current and
                            future results.
                            <br />
                            J.P. Morgan Asset Management is the brand for the asset management business of JPMorgan Chase & Co. and its affiliates worldwide.
                            <br />
                            Telephone calls and electronic communications may be monitored and/or recorded.
                            <br />
                            Personal data will be collected, stored and processed by J.P. Morgan Asset Management in accordance with our privacy policies at https://www.jpmorgan.com/privacy.
                            <br />
                            This communication is issued in the United States, by J.P. Morgan Investment Management Inc. or J.P. Morgan Alternative Asset Management, Inc., both regulated by the
                            Securities and Exchange Commission.
                            <br />
                            If you are a person with a disability and need additional support in viewing the material, please call us at 1-800-343-1113 for assistance.
                            <br />
                            Copyright 2022 JPMorgan Chase & Co. All rights reserved.
                            <br />
                            ©JPMorgan Chase & Co., July 2022.
                            <br />
                            Unless otherwise stated, all data is as of July 4, 2022 or as of most recently available.
                            <br />
                            0903c02a81dbac80
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
import meta from '@/api/meta';
import searchImg from '@/assets/images/searchImg.png';
import arrowLeft from '@//assets/images/icon_arrow_left_big.png';
import arrowRight from '@//assets/images/icon_arrow_right_big.png';
import printreport from '@/assets/images/printreport.png';
import back from '@/assets/images/bg_weeklycommentary.png';

import toggleButton from '@/pages/components/toggle-button.vue';
import chartTest from '@/pages/components/chart.vue';

import Highcharts from 'highcharts';
import HighchartsHeatMap from 'highcharts/modules/heatmap.js';
import pattern from 'highcharts/modules/pattern-fill';
import more from 'highcharts/highcharts-more.src';
require('highcharts/highcharts-more')(Highcharts);
HighchartsHeatMap(Highcharts);

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
                printreport,
                back,
                arrowLeft,
                arrowRight,
            },
            data: {
                ratingValue: 0,
            },
            table: {
                equities: ['S&P 500', 'Dow Jones 30', 'Russell 2000', 'Russell 1000 Growth', 'Russell 1000 Value', 'MSCI EAFE', 'MSCI EM', 'NASDAQ'],
                fixedIncomne: ['U.S. Aggregate', 'U.S. Corporates', 'Municipals (10yr)', 'High Yield'],
                currencies: ['$ per €', '$ per £', '¥ per $'],
                keyRates: [
                    '2-yr U.S. Treasuries',
                    '10-yr U.S. Treasuries',
                    '30-yr U.S. Treasuries',
                    '10-yr German Bund',
                    '3-mo. LIBOR',
                    '3-mo. EURIBOR',
                    '6-mo. CD rate',
                    '30-yr fixed mortgage',
                    'Prime Rate',
                ],
                commodities: ['Oil (WTI)', 'Gasoline', 'Natural Gas', 'Gold', 'Silver', 'Copper', 'Corn', 'BBG Idx'],
            },
            tdisplay: 'tdisplay',
            tbdisplay: 'tbdisplay',
        };
    },

    methods: {
        async reportDownload() {
            this.$store.commit('app/SET_LOADING', true);
            document.getElementById('weekly-commentary').style.display = '';
            let reportProduct = (document.getElementById('weekly-commentary').src = '/insights/market-view/weekly-commentary-report');

            window.addEventListener('message', (e) => {
                if (e.data.success === 'success') {
                    document.getElementById('weekly-commentary').style.display = 'none';
                    this.$store.commit('app/SET_LOADING', false);
                }
            });
        },
        async setLineChart() {
            Highcharts.chart('lineChart', {
                chart: {
                    events: {
                        render: function () {
                            const chart = this as any,
                                startX = 0,
                                startY = 45,
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
                    animation: false,
                    marginTop: 80,
                    spacingRight: 0,
                    spacingLeft: 0,
                },
                exporting: {
                    enabled: false,
                },
                title: {
                    text: '',
                },
                credits: { enabled: false },
                xAxis: {
                    type: 'datetime',
                    tickColor: '#fff',
                    labels: {
                        formatter: function () {
                            return Highcharts.dateFormat("%b'%e", this.value);
                        },
                        style: {
                            fontSize: '18px',
                            color: '#000',
                            fontWeight: 'bold',
                        },
                    },
                },
                scrollbar: {
                    enabled: false,
                },
                yAxis: {
                    labels: {
                        format: '{value:,.0f}',
                        style: {
                            fontSize: '18px',
                            color: '#b3b3b3',
                            fontWeight: 'bold',
                        },
                    },
                    title: {
                        text: '',
                    },
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
                        name: 'Manufacturing',
                        data: [65, 45, 55, 45, 35, 25, 33, 44],
                        color: meta.chart.colorArr[0],
                        marker: {
                            symbol: 'circle',
                            radius: 2,
                        },
                    },
                    {
                        name: 'Services',
                        data: [32, 23, 45, 66, 22, 44, 26, 22],
                        color: meta.chart.colorArr[1],
                        marker: {
                            symbol: 'circle',
                            radius: 2,
                        },
                    },
                ],
            });
        },

        async setColumnChart() {
            var category = [
                'Energy',
                'Utilities',
                'Consumer Staples',
                'Health Care',
                'Materials',
                'Industrials',
                'Financials',
                'S&P 500',
                'Real Estate',
                'Technology',
                'Comm Services',
                'Consumer Discr',
            ];
            var plotlines = [];
            for (var i = 0; i < category.length; i++) {
                var pline = {
                    color: '#b3b3b3',
                    width: 1,
                    value: -0.5 + i,
                    label: {
                        text: category[i],
                        verticalAlign: 'top',
                        style: {
                            fontWeight: 'bold',
                            color: '#000',
                            fontSize: '18px',
                            top: '0px',
                        },
                    },
                };
                plotlines.push(pline);
            }

            var lastLine = {
                color: '#b3b3b3',
                width: 1,
                value: 11.5,
            };
            plotlines.push(lastLine);

            Highcharts.chart('column', {
                chart: {
                    type: 'column',
                    events: {
                        render: function () {
                            const chart = this,
                                startX = 0,
                                startY = 30,
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
                    marginTop: 60,
                    spacingRight: 0,
                    spacingLeft: 0,
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
                        enabled: false,
                    },
                    lineColor: '#b3b3b3',
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
                    lineColor: '#b3b3b3',
                    lineWidth: 1,
                    labels: {
                        style: {
                            fontWeight: 'bold',
                            color: '#b3b3b3',
                            fontSize: '18px',
                        },
                    },
                },
                legend: {
                    align: 'right',
                    verticalAlign: 'top',
                    y: -15,
                },
                plotOptions: {
                    column: {
                        borderColor: '#000000',
                        dataLabels: {
                            enabled: false,
                        },
                    },
                },
                series: [
                    {
                        name: 'YTD',
                        data: [5, 3, 4, 7, 2, 5, 3, 4, 7, 2, 3, 4],
                        color: meta.chart.colorArr[0],
                    },
                    {
                        name: '1 week',
                        data: [2, -2, -3, 2, 1, 2, -2, -3, 2, 1, -1, 3],
                        color: meta.chart.colorArr[1],
                    },
                ],
            });
        },

        async setHeatMapchart() {
            for (let i = 0; i < 2; i++) {
                Highcharts.chart('heatMapWeek' + i, {
                    chart: {
                        type: 'heatmap',
                        animation: false,
                    },
                    title: {
                        text: '',
                    },
                    credits: { enabled: false },
                    xAxis: {
                        opposite: true,
                        categories: ['value', 'Blend', 'Growth'],
                        lineWidth: 0,
                        labels: {
                            style: {
                                color: '#000',
                                fontSize: '18px',
                            },
                        },
                    },
                    yAxis: {
                        gridLineColor: 'transparent',
                        categories: ['small', 'Medium', 'Large'],
                        title: null,
                        reversed: false,
                        labels: {
                            style: {
                                color: '#000',
                                fontSize: '18px',
                            },
                        },
                    },
                    legend: {
                        enabled: false,
                    },
                    plotOptions: {
                        series: {
                            dataLabels: {
                                enabled: true,
                                style: {
                                    color: '#fff',
                                    fontSize: '18px',
                                    textOutline: 'none',
                                },
                            },
                            rowsize: 0.8,
                            colsize: 0.8,
                            borderColor: '#000000',
                            borderWidth: 1,
                            states: {
                                inactive: {
                                    opacity: 1,
                                },
                                hover: {
                                    // brightness: -0.1,
                                    enabled: false,
                                },
                            },
                        },
                    },
                    series: [
                        {
                            name: '1 Week',
                            pointPadding: 2,
                            color: meta.chart.colorArr[i],
                            dataLabels: {
                                style: {
                                    color: '#fff',
                                    fontSize: '18px',
                                },
                            },
                            data: [
                                [0, 0, 4],
                                [0, 1, 4.9],
                                [0, 2, 5.3],
                                [1, 0, 6],
                                [1, 1, 6],
                                [1, 2, 6.5],
                                [2, 0, 8.4],
                                [2, 1, 8.6],
                                [2, 2, 7.9],
                            ],
                        },
                    ],
                });
            }
        },
    },

    mounted() {
        this.setLineChart();
        this.setColumnChart();
        this.setHeatMapchart();
    },

    watch: {},
});
</script>

<style scoped>
/* 전체적인 css */
.weekly-commentary .top {
    width: 100%;
    padding: 180px 138px 180px 150px;
    background-color: #fff;
}

.weekly-commentary .middle {
    width: 100%;
    padding: 80px 150px;
    object-fit: contain;
    background-color: #f3f3f3;
    border-bottom: 1px solid #f3f3f3;
}

.weekly-commentary .bottom {
    width: 100%;
    padding: 120px 150px;
    object-fit: contain;
    background-color: #fff;
}

.weekly-commentary .disclosures {
    width: 100%;
    padding: 40px 150px;
    object-fit: contain;
    background-color: #f3f3f3;
}

/* top */
.weekly-commentary .menu-title {
    font-size: 64px !important;
    font-weight: 900;
    color: #000;
    line-height: 1.09;
    margin-bottom: 25px;
}

.weekly-commentary .btn {
    width: 292px;
    height: 48px;
    color: #fff;
    background: #000;
    font-size: 21px;
    font-weight: bold;
}

.weekly-commentary .menu-sub-title {
    font-size: 24px !important;
    font-weight: normal;
    color: #000;
    margin-bottom: 80px;
}

.weekly-commentary .print {
    font-weight: 900;
    padding-left: 43px;
    font-size: 21px;
    cursor: pointer;
}

/* middel */
.weekly-commentary .review {
    font-size: 36px;
    font-weight: 900;
}

.weekly-commentary .line {
    border: 1px solid #b3b3b3;
    width: 100%;
    margin-bottom: 30px;
}

/* bottom */
.weekly-commentary .bottom-title {
    font-size: 48px;
    font-weight: 900;
}

.weekly-commentary .row-style {
    border-bottom: 5px solid #f3f3f3;
    padding-bottom: 120px;
    margin-bottom: 120px;
}

.weekly-commentary table {
    border-collapse: collapse;
    font-size: 18px;
    width: 100%;
}

/* table */
.weekly-commentary .weekly-table th:first-child {
    text-align: left;
}

.weekly-commentary .weekly-table td:first-child {
    text-align: left;
    color: #000;
}

.weekly-commentary .weekly-table th {
    border-top: 1px solid #000;
    border-bottom: 1px solid #808080;
    text-align: right;
    padding: 10px 20px;
}

.weekly-commentary .weekly-table td {
    border-bottom: 1px solid #808080;
    text-align: right;
    padding: 10px 20px;
    color: #808080;
}

.weekly-commentary .weekly-table-1 th {
    border-top: 1px solid #000;
    border-bottom: 1px solid #808080;
    text-align: right;
    padding: 10px 20px;
}

.weekly-commentary .weekly-table-1 td {
    border-bottom: 1px solid #808080;
    text-align: right;
    padding: 10px 20px;
    color: #808080;
}

.weekly-commentary .mb-120 {
    margin-bottom: 120px;
}

.weekly-commentary .icon-arrow {
    width: 18px;
    height: 18px;
}

.weekly-commentary .rating {
    width: 13px;
    height: 13px;
    border-radius: 13px;
    border: 1px solid #b3b3b3;
    margin: 10px;
    background-color: #fff;
}

.active {
    background-color: #000 !important;
    border: unset;
}

.cursor {
    cursor: pointer;
}

@media screen and (max-width: 1263px) {
    .weekly-commentary .top {
        height: auto;
        padding: 70px 80px;
    }

    .weekly-commentary .middle {
        padding: 30px 80px;
        height: auto;
    }

    .weekly-commentary .bottom {
        padding: 70px 80px;
        height: auto;
    }

    .weekly-commentary .disclosures {
        padding: 40px 80px;
        height: auto;
    }

    /* top */
    .weekly-commentary .menu-title {
        font-size: 48px !important;
        margin-bottom: 15px;
    }

    .weekly-commentary .btn {
        width: 200px;
        font-size: 15px;
    }

    .weekly-commentary .menu-sub-title {
        font-size: 22px !important;
        margin-bottom: 50px;
    }

    .weekly-commentary .print {
        padding-left: 40px;
        font-size: 19px;
    }

    /* middel */
    .weekly-commentary .review {
        font-size: 30px;
    }

    /* bottom */
    .weekly-commentary .bottom-title {
        font-size: 30px;
    }

    .weekly-commentary .row-style {
        padding-bottom: 60px;
        margin-bottom: 60px;
    }

    .weekly-commentary .mb-120 {
        margin-bottom: 60px;
    }
}

@media screen and (max-width: 959px) {
    .weekly-commentary .top {
        height: auto;
        padding: 50px 40px;
    }

    .weekly-commentary .middle {
        padding: 30px 40px;
        height: auto;
    }

    .weekly-commentary .bottom {
        padding: 40px;
        height: auto;
    }

    .weekly-commentary .disclosures {
        padding: 30px 40px;
        height: auto;
    }

    /* top */
    .weekly-commentary .menu-title {
        font-size: 34px !important;
        margin-bottom: 15px;
    }

    .weekly-commentary .btn {
        width: 200px;
        font-size: 15px;
    }

    .weekly-commentary .menu-sub-title {
        font-size: 16px !important;
        margin-bottom: 30px;
    }

    .weekly-commentary .print {
        padding-left: 38px;
        font-size: 15px;
    }

    /* middel */
    .weekly-commentary .review {
        font-size: 22px;
    }

    /* bottom */
    .weekly-commentary .bottom-title {
        font-size: 24px;
    }

    .weekly-commentary .rating {
        width: 10px;
        height: 10px;
        border-radius: 9px;
        border: 1px solid #b3b3b3;
        margin: 10px;
    }

    .weekly-commentary .icon-arrow {
        width: 12px;
        height: 12px;
    }
}
</style>
