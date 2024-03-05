<template>
    <div id="save_certificate">
        <template v-if="this.data.apiData.date != null">
            <!-- 1 -->
            <report1></report1>
            <!-- 2 -->
            <report2 @messageOverview="sendMessage" :val="data.apiData"></report2>
            <!-- 3 -->
            <report3 @messageVolatility="sendMessage" :val="data.apiData"></report3>
            <!-- 4 -->
            <report4 @messageCorrelation="sendMessage" :val="data.apiData"></report4>
            <!-- 5 -->
            <report5 @messagConcentration="sendMessage" :val="data.apiData"></report5>
            <!-- 7 -->
            <report7 @messageHistorical="sendMessage" :val="data.apiData"></report7>
            <!-- 8 -->
            <report8></report8>
        </template>
    </div>
</template>

<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/highcharts-more.js"></script>
<script lang="ts">
Highcharts.SVGRenderer.prototype.symbols.dash = function (x, y, w, h) {
    return ['M', x, y + h / 2, 'L', x + w, y + h / 2, 'z'];
};
if (Highcharts.VMLRenderer) {
    Highcharts.VMLRenderer.prototype.symbols.dash = Highcharts.SVGRenderer.prototype.symbols.dash;
}
var premiaURL = '/blk-corp-assets/images/tools/blackrock-investment-institute/';

import Vue from 'vue';
import moment from 'moment';
import store from '@/config/store';
import meta from '@/api/meta';

import report1 from '@/pages/insights/market-view/market-risk/report/report01.vue';
import report2 from '@/pages/insights/market-view/market-risk/report/report02.vue';
import report3 from '@/pages/insights/market-view/market-risk/report/report03.vue';
import report4 from '@/pages/insights/market-view/market-risk/report/report04.vue';
import report5 from '@/pages/insights/market-view/market-risk/report/report05.vue';
import report7 from '@/pages/insights/market-view/market-risk/report/report07.vue';
import report8 from '@/pages/insights/market-view/market-risk/report/report08.vue';

import Highcharts from 'highcharts';

import html2pdf from 'html2pdf.js';
import logo from '@/assets/images/logo.png';

export default Vue.extend({
    components: {
        html2pdf,
        report1,
        report2,
        report3,
        report4,
        report5,
        report7,
        report8,
    },
    data() {
        return {
            data: {
                apiData: {},
            },
            success: [],
            slickOptions: {
                dots: false,
                prevArrow: false,
                nextArrow: false,
                infinite: false,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: false,
                responsive: [
                    {
                        breakpoint: 1263,
                        settings: {
                            slidesToShow: 2,
                            arrows: false,
                        },
                    },
                    {
                        breakpoint: 959,
                        settings: {
                            slidesToShow: 1,
                            arrows: false,
                        },
                    },
                ],
            },
            contents: [
                { name: 'The story', page: 2 },
                { name: 'Volatility', page: 3 },
                { name: 'Concentration', page: 4 },
                { name: 'Regime', page: 5 },
                { name: 'Persistence', page: 6 },
                { name: 'Valuation', page: 7 },
            ],
        };
    },
    watch: {
        success: {
            handler(n) {
                console.log(n.length);
                if (n.length >= 5) {
                    this.$nextTick(function () {
                        this.pdf();
                    });
                }
            },
        },
    },
    methods: {
        async riskMonitor() {
            this.$store.commit('app/SET_LOADING', true);
            const marketRiskMonitor = (
                await meta.api.common.insights.getMarketRiskMonitor({
                    page: 1,
                    rowSize: 100000,
                    sort: ['id,asc'],
                })
            ).data;
            console.log(marketRiskMonitor);
            this.data.apiData = marketRiskMonitor;
            console.log(this.data.apiData);
            this.$store.commit('app/SET_LOADING', false);
            console.log(this.data.apiData.date);
        },
        sendMessage(data) {
            this.success.push(data);
        },
        async savePDF() {
            let self = this;
            window.scrollTo(0, 0);

            let content = document.querySelector('#save_certificate');
            const opt = {
                margin: 0,
                filename: 'Market Risk Monitor.pdf',
                enableLinks: false,
                pagebreak: {
                    avoid: ['tr'],
                    mode: ['css', 'legacy'],
                },
                image: { type: 'jpeg', quality: 1 },
                html2canvas: {
                    scrollY: 0,
                    scrollX: 0,
                    scale: 2,
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
                .then((pdf) => {
                    const totalPages = pdf.internal.getNumberOfPages();
                    for (let i = 1; i < totalPages; i++) {
                        pdf.setPage(i+1);
                        pdf.setFontSize(10);
                        pdf.setTextColor(0);
                        pdf.text('-' + i + '-', pdf.internal.pageSize.getWidth() / 2.1, pdf.internal.pageSize.getHeight() - 5);
                    }
                })
                .save();
        },
        async pdf() {
            let self = this;
            const _sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
            await _sleep(500);
            store.commit('app/SET_LOADING', true);
            this.$nextTick(async function () {
                await self.savePDF();
                await _sleep(500);
                await this.close();
            });
            store.commit('app/SET_LOADING', false);
        },
        close: function () {
            window.parent.postMessage({ success: 'success' }, '*');
        },
    },
    created() {
        this.riskMonitor();
    },
});
</script>

<style>
/* 1 */
.marketrisk-report01 {
}

.marketrisk-report01 .main {
}

.marketrisk-report01 .main .header-line {
}

.marketrisk-report01 .main-text {
}

.marketrisk-report01 .sub-text {
}

.marketrisk-report01 .footer {
}

.footer .footer-main-text {
}

.footer .contents {
}

.footer .footer-line {
}

.footer .contents-sub {
}

#logo {
}

/* 2 */
.marketrisk-report02 {
}

/* 3 */
.marketrisk-report03 {
}

.marketrisk-report03 .sub-text {
}

.marketrisk-report03 .sub-text-small {
}

.marketrisk-report03 .chart-button {
}

/* 4 */
.marketrisk-report04 {
}

.marketrisk-report04 .sub-text-small {
}

.marketrisk-report04 .sub-text {
}

.marketrisk-report04 .chart-button {
}

/* 5 */
.marketrisk-report05 {
}

.marketrisk-report05 .sub-text {
}

.marketrisk-report05 .sub-text-small {
}

.marketrisk-report05 .chart-button {
}

/* 7 */
.marketrisk-report07 {
}

.marketrisk-report07 .sub-text {
}

.marketrisk-report07 .sub-text-small {
}

.marketrisk-report07 .chart-button {
}

/* 8 */
.marketrisk-report08 {
}

.marketrisk-report08 .sub-text {
}

.logo-icon {
}

#report08 {
}

li ::marker {
    margin: 0px;
}
</style>
