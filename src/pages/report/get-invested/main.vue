<template>
    <div class="get-invested" id="save_certificate">
        <div class="report1">
            <v-row class="mx-0 mt-0 mb-10p">
                <v-col cols="6" class="pa-0">
                    <img :src="img.logoImg" width="113" height="32" />
                </v-col>
            </v-row>
            <v-divider class="top-line"></v-divider>
            <v-row class="mx-0 mt-0 mb-8">
                <v-col cols="12" class="main-title pa-0">
                    <p class="mb-0">GET <span class="color-orange">INVESTED</span></p>
                    <span class="color-black font-size-22 mb-0">Dneuro Portfolios</span> <span class="color-black font-size-22 font-weight-normal">The Complete Dneuro Portfolio Lineup</span>
                </v-col>
            </v-row>
            <v-row class="ma-0">
                <template v-for="(category, cateIdx) in data.aiPortfolioList">
                    <v-col
                        cols="6"
                        class="py-0 pl-0"
                        :key="'category' + cateIdx"
                        :class="cateIdx % 2 == 0 ? 'pr-30p' : 'pl-30p'"
                        v-if="category.portfolioList != null && category.portfolioList.length > 0"
                    >
                        <p class="category-title mb-10p">{{ category.code }}</p>
                        <table class="category-table" cellspacing="0">
                            <colgroup>
                                <col width="auto" />
                                <col width="17%" />
                                <col width="20%" />
                                <col width="17%" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>Portfolio Name</th>
                                    <th>Risk Level</th>
                                    <th>Inception Date</th>
                                    <th>Advisory Fee (%)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(portfolio, portIdx) in category.portfolioList" :key="'portfolio' + portIdx">
                                    <td>{{ portfolio.strategyName || '-' }}</td>
                                    <td>{{ portfolio.riskLevel || '-' }}</td>
                                    <td>{{ portfolio.inceptionDate || '-' }}</td>
                                    <td>{{ portfolio.advisoryFee || '-' }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </v-col>
                </template>
            </v-row>
        </div>
        <div class="report3">
            <div class="pt-5 pl-5 pb-5 pr-5 bg-white">
                <v-divider class="sub-top-line"></v-divider>
                <v-row style="margin: 0">
                    <v-col cols="6" class="pa-0">
                        <p class="category-title" style="margin: 0px">Who Want to Know More</p>
                    </v-col>
                </v-row>
            </div>
            <div class="pa-5 bg-white-three">
                <v-row style="margin: 0px">
                    <v-col cols="12" class="pa-0">
                        <p class="font-size-22">VIsit Dneuro.com or call +82-02-6274-0055</p>
                    </v-col>
                    <v-col cols="12" class="pa-0 font-size-8">
                        <p class="">Active fund</p>
                        <p>
                            The net expense ratios are shown for these funds. The gross expense ratios are as follows: ACWV: 0.32; AOA: 0.20; AOK: 0.21; AOM: 0.21; AOR: 0.20; BYLD: 0.48; EAGG: 0.12;
                            EAOA: 0.34; EAOK: 0.30; EAOM: 0.31; EAOR, 0.33; EEMV: 0.69; EFAV: 0.32; EMBH: 1.12; EMGF: 0.45; EMXC: 0.28; EUSB: 0.13; FIBR: 0.26; GNMA: 0.11; HAWX: 0.70; HEEM: 1.46;
                            HEFA: 0.70; HEWC: 1.12; HEWG: 1.03; HEWJ: 1.03; HEWU: 1.12; HEZU: 1.12; HJPX: 1.07; HSCZ: 0.82; HYGH: 1.12; HYMU: 0.45; IAUF: 0.37; IGBH: 0.41; IMTB: 0.07; INMU: 0.40;
                            ISVL: 0.40%; IUSB: 0.07; IYLD: 0.60; LCTU: 0.29; LCTD: 0.35; LQDH: 0.44; LQDI: 0.33; MBB: 0.06; SMMD: 0.23; USHY: 0.22; VEGI: 0.39; SGOV: 0.12; SVAL: 0.30. Please see the
                            Funds' prospectuses for more information on such expenses.
                        </p>
                    </v-col>
                    <v-col cols="6" class="pl-0 font-size-8 py-0" style="letter-spacing: -0.5px">
                        1. The legal name of this fund is the iShares® iBonds® Dec 2022 Term Corporate ETF<br />
                        2. The legal name of this fund is the iShares® iBonds® Mar 2023 Term Corporate ETF<br />
                        3. The legal name of this fund is the iShares® iBonds® Dec 2023 Term Corporate ETF<br />
                        4. The legal name of this fund is the iShares® iBonds® Dec 2024 Term Corporate ETF<br />
                        5. The legal name of this fund is the iShares® iBonds® Dec 2025 Term Corporate ETF<br />
                        6. The legal name of this fund is the iShares® iBonds® Dec 2026 Term Corporate ETF<br />
                        7. The legal name of this fund is the iShares® iBonds® Dec 2027 Term Corporate ETF<br />
                        8. The legal name of this fund is the iShares® iBonds® Dec 2028 Term Corporate ETF<br />
                        9. The legal name of this fund is the iShares® iBonds® Dec 2029 Term Corporate ETF<br />
                        10. The legal name of this fund is the iShares® iBonds® Dec 2030 Term Corporate ETF<br />
                        11. The legal name of this fund is the iShares® iBonds® Dec 2031 Term Corporate ETF<br />
                        12. The legal name of this fund is the iShares® iBonds® Mar 2023 Term Corporate ex-Financials ETF<br />
                        13. The legal name of this fund is the iShares® iBonds® Dec 2022 Term Muni Bond ETF<br />
                        14. The legal name of this fund is the iShares® iBonds® Dec 2023 Term Muni Bond ETF<br />
                        15. The legal name of this fund is the iShares® iBonds® Dec 2024 Term Muni Bond ETF<br />
                        16. The legal name of this fund is the iShares® iBonds® Dec 2025 Term Muni Bond ETF<br />
                        17. The legal name of this fund is the iShares® iBonds® Dec 2026 Term Muni Bond ETF<br />
                        18. The legal name of this fund is the iShares® iBonds® Dec 2027 Term Muni Bond ETF<br />
                        19. The legal name of this fund is the iShares® iBonds® Dec 2028 Term Muni Bond ETF<br />
                        20. The legal name of this fund is the iShares® iBonds® 2022 Term High Yield and Income ETF<br />
                    </v-col>
                    <v-col cols="6" class="pl-0 font-size-8 py-0" style="letter-spacing: -0.5px">
                        21. The legal name of this fund is the iShares® iBonds® 2023 Term High Yield and Income ETF<br />
                        22. The legal name of this fund is the iShares® iBonds® 2024 Term High Yield and Income ETF<br />
                        23. The legal name of this fund is the iShares® iBonds® 2025 Term High Yield and Income ETF<br />
                        24. The legal name of this fund is the iShares® iBonds® 2026 Term High Yield and Income ETF<br />
                        25. The legal name of this fund is the iShares® iBonds® 2027 Term High Yield and Income ETF<br />
                        26. The legal name of this fund is the iShares® iBonds® 2028 Term High Yield and Income ETF<br />
                        27. The legal name of this fund is the iShares® iBonds® 2029 Term High Yield and Income ETF<br />
                        28. The legal name of the fund is the iShares® iBonds® Dec 2022 Term Treasury ETF<br />
                        29. The legal name of the fund is the iShares® iBonds® Dec 2023 Term Treasury ETF<br />
                        30. The legal name of the fund is the iShares® iBonds® Dec 2024 Term Treasury ETF<br />
                        31. The legal name of the fund is the iShares® iBonds® Dec 2025 Term Treasury ETF<br />
                        32. The legal name of the fund is the iShares® iBonds® Dec 2026 Term Treasury ETF<br />
                        33. The legal name of the fund is the iShares® iBonds® Dec 2027 Term Treasury ETF<br />
                        34. The legal name of the fund is the iShares® iBonds® Dec 2028 Term Treasury ETF<br />
                        35. The legal name of the fund is the iShares® iBonds® Dec 2029 Term Treasury ETF<br />
                        36. The legal name of the fund is the iShares® iBonds® Dec 2030 Term Treasury ETF<br />
                        37. The legal name of the fund is the iShares® iBonds® Dec 2031 Term Treasury ETF<br />
                    </v-col>
                    <v-col cols="12" class="pl-0 font-size-10 pb-0">
                        <p class="font-weight-800">
                            Carefully consider the Dneuro Funds’ investment objectives, risk factors, and charges and expenses before investing. This and other information can be found in the Funds’
                            prospectuses and, if available, the summary prospectuses, which may be obtained by calling 1-800-iShares (1-800-474-2737) or by visiting Dneuro. com. Read the prospectuses
                            carefully before investing.
                        </p>
                        <p class="font-weight-800">Investing involves risk, including possible loss of principal.</p>
                    </v-col>
                    <v-col cols="12" class="pl-0 font-size-8 color-gray pt-0">
                        <p class="mb-10p">
                            Transactions in shares of ETFs may result in brokerage commissions and will generate tax consequences. Dneuro Funds are obliged to distribute portfolio gains to
                            shareholders. The Dneuro Funds that are registered with the United States Securities and Exchange Commission under the Investment Company Act of 1940 (“Funds”) are
                            distributed in the U.S. by Dneuro LLC .
                        </p>
                        <p class="mb-10p">
                            The Dneuro Funds are not sponsored, endorsed, issued, sold or promoted by Bloomberg, Dneuro Index Services, LLC, Cohen & Steers, European Public Real Estate Association
                            (“EPRA® ”), FTSE International Limited (“FTSE”), ICE Data Indices, LLC, NSE Indices Ltd, JPMorgan, JPX Group, London Stock Exchange Group (“LSEG”), MSCI Inc., Markit
                            Indices Limited, Morningstar, Inc., Nasdaq, Inc., National Association of Real Estate Investment Trusts (“NAREIT”), Nikkei, Inc., Russell or S&P Dow Jones Indices LLC. None
                            of these companies make any representation regarding the advisability of investing in the Funds. With the exception of Dneuro Index Services, LLC, who is an affiliate,
                            Dneuro Investments, LLC is not affiliated with the companies listed above.
                        </p>
                        <p class="mb-10p">
                            Neither FTSE, LSEG, nor NAREIT makes any warranty regarding the FTSE Nareit Equity REITS Index, FTSE Nareit All Residential Capped Index or FTSE Nareit All Mortgage Capped
                            Index. Neither FTSE, EPRA, LSEG, nor NAREIT makes any warranty regarding the FTSE EPRA Nareit Developed ex-U.S. Index or FTSE EPRA Nareit Global REITs Index. “FTSE®” is a
                            trademark of London Stock Exchange Group companies and is used by FTSE under license.
                        </p>
                        <p class="mb-10p">
                            ©2022 Dneuro, Inc. All rights reserved. Dneuro is trademarks of Dneuro, Inc. or its subsidiaries in the United States and elsewhere. All other trademarks are those of their
                            respective owners. GELM-417400-M-APR22-US
                        </p>
                    </v-col>
                    <v-col class="pa-0">
                        <div style="width: 252px; height: 22px" class="border-all d-flex align-center justify-center mb-10p">
                            <p class="font-size-10 font-weight-800 ma-0">Not FDIC Insured May Lose Value No Bank Guarantee</p>
                        </div>
                        <p class="ma-0 font-size-10 font-weight-800">Lit. No. iS-PRODLIST-0422</p>
                    </v-col>
                </v-row>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import store from '@/config/store';
import meta from '@/api/meta';

import logoImg from '@/assets/images/logo.png';
import html2pdf from 'html2pdf.js';

export default Vue.extend({
    data() {
        return {
            img: {
                logoImg,
            },
            data: {
                aiPortfolioList: [] as any,
            },
        };
    },
    async mounted() {
        await this.aiPortfolioList();
        await this.pdf();
    },
    methods: {
        async aiPortfolioList() {
            this.$store.commit('app/SET_LOADING', true);
            const strategyCategoryList = (
                await meta.api.common.strategyCategory.getStrategyCategoryList({
                    page: 1,
                    rowSize: 100000,
                    sort: ['id,asc'],
                })
            ).data.items;

            const promises = strategyCategoryList.map(async (y: any) => {
                y.portfolioList = (
                    await meta.api.common.aiPortfolio.getAiPortfolioPriceList({
                        page: 1,
                        rowSize: 100000,
                        sort: ['id,asc'],
                        code: y.code,
                    })
                ).data;

                y.portfolioList.forEach((x: any) => {
                    x.strategyCategoryCode = `Showing ${x.strategyCategoryCode} Portfolios`;

                    // if(x.assetClassCd == "EQ"){
                    //     x.assetClassCd = "Equity"
                    // }else if(x.assetClassCd == "FI"){
                    //     x.assetClassCd = "FixedIncome"
                    // }else if(x.assetClassCd == "FX"){
                    //     x.assetClassCd = "Forex"
                    // }else if(x.assetClassCd == "RE"){
                    //     x.assetClassCd = "RealEstate"
                    // }else if(x.assetClassCd == "CM"){
                    //     x.assetClassCd = "Commodity"
                    // }
                    if (x.priceCalcList.content[x.strategyName].Y1 == null || x.priceCalcList.content[x.strategyName].Y1 === '') {
                        x.priceCalcList.content[x.strategyName].Y1 = 0;
                    } else {
                        x.priceCalcList.content[x.strategyName].Y1 = Math.round(x.priceCalcList.content[x.strategyName].Y1 * 100) / 100;
                    }

                    if (x.priceCalcList.content[x.strategyName].Y3 == null || x.priceCalcList.content[x.strategyName].Y3 === '') {
                        x.priceCalcList.content[x.strategyName].Y3 = 0;
                    } else {
                        x.priceCalcList.content[x.strategyName].Y3 = Math.round(x.priceCalcList.content[x.strategyName].Y3 * 100) / 100;
                    }

                    if (x.priceCalcList.content[x.strategyName].Y5 == null || x.priceCalcList.content[x.strategyName].Y5 === '') {
                        x.priceCalcList.content[x.strategyName].Y5 = 0;
                    } else {
                        x.priceCalcList.content[x.strategyName].Y5 = Math.round(x.priceCalcList.content[x.strategyName].Y5 * 100) / 100;
                    }

                    if (x.priceCalcList.content[x.strategyName].AnnReturn == null || x.priceCalcList.content[x.strategyName].AnnReturn === '') {
                        x.priceCalcList.content[x.strategyName].AnnReturn = 0;
                    } else {
                        x.priceCalcList.content[x.strategyName].AnnReturn = Math.round(x.priceCalcList.content[x.strategyName].AnnReturn * 100) / 100;
                    }

                    if (x.priceCalcList.content[x.strategyName].SharpeRatio == null || x.priceCalcList.content[x.strategyName].SharpeRatio === '') {
                        x.priceCalcList.content[x.strategyName].SharpeRatio = 0;
                    } else {
                        x.priceCalcList.content[x.strategyName].SharpeRatio = Math.round(x.priceCalcList.content[x.strategyName].SharpeRatio * 100) / 100;
                    }

                    if (x.marketCd === 'KR') {
                        x.marketCd = 'KOR';
                    } else if (x.marketCd === 'US') {
                        x.marketCd = 'U.S';
                    }
                });
            });
            await Promise.all(promises);

            this.data.aiPortfolioList = strategyCategoryList;
            this.$store.commit('app/SET_LOADING', false);
        },
        async savePDF() {
            window.scrollTo(0, 0);

            const content = document.querySelector('#save_certificate');
            const opt = {
                margin: 0,
                filename: 'get-invested.pdf',
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
                        pdf.text(`-${i}-`, pdf.internal.pageSize.getWidth() / 2.25, pdf.internal.pageSize.getHeight() - 0.5);
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
        close() {
            window.parent.postMessage({ success: 'success' }, '*');
        },
    },
});
</script>

<style>
.get-invested {
    width: 210mm;
    background-color: #fff;
}

.get-invested .top-line {
    border: 15px solid #000;
    margin-bottom: 30px;
}

.get-invested .sub-top-line {
    border: 2px solid #000;
    margin-bottom: 30px;
}

.get-invested .main-title {
    font-size: 46px;
    color: #000;
    font-weight: 900;
}

.get-invested .category-title {
    font-size: 19px;
    color: #000;
    font-weight: 900;
}

.get-invested .category-table {
    width: 100%;
    border-top: 2px solid #000;
    font-size: 10px;
    margin-bottom: 30px;
}

.get-invested .category-table thead tr {
    text-align: right;
    height: 40px;
}

.get-invested .category-table thead tr th:nth-child(1) {
    text-align: left;
}

.get-invested .category-table thead tr th {
    color: #808080;
    border-bottom: 1px solid #000;
    font-weight: 300;
}

.get-invested .category-table tbody tr {
    height: 32px;
}

.get-invested .category-table tbody tr td {
    border-bottom: 1px solid #000;
    text-align: right;
    font-weight: 300;
    color: #808080;
}

.get-invested .category-table tbody tr td:nth-child(1) {
    text-align: left;
    color: #000;
}

.font-weight-normal {
    font-weight: normal !important;
}

.get-invested .font-size-8 {
    font-size: 8px !important;
}

.get-invested .font-size-10 {
    font-size: 10px !important;
}

.get-invested .font-weight-800 {
    font-weight: 800;
}

.get-invested .border-all {
    border: 1px solid #b3b3b3;
}

.report1 {
    min-height: 297mm;
    padding: 10px;
}

.report3 {
    min-height: 297mm;
    padding: 10px;
}
</style>
