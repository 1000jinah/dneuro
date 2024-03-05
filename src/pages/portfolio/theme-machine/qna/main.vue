<template>
    <div class="qna">
        <v-row class="top wrapper-1920">
            <v-col cols="12" class="pa-0 mb-15">
                <div class="title-line"></div>
                <p class="menu-title mb-25p">Intelligent Financial Q&A</p>
                <p class="menu-sub2-title mb-0">
                    Do not use keywords, but full-fledged questions. The engine is not optimized to deal with keyword<br />
                    queries and might misunderstand you.
                </p>
            </v-col>
            <v-col cols="12" class="pa-0 v-overlay__content">
                <input type="text" name="search-box-div" class="search-box" />
                <button class="search-btn btn-hover-orange">SEARCH</button>
            </v-col>
        </v-row>
        <v-row class="bottom wrapper-1920">
            <v-col cols="12" class="pa-0">
                <span class="font-size-21 color-gray font-weight-bold">Showing Results (42)</span>
            </v-col>
            <template v-for="(item, idx) in data.item">
                <v-col cols="12" :key="idx" class="search-result-list">
                    <a href="javascript:void(0);" class="color-gray-two text-decoration-underline">https://finance.yahoo.com/quote/LPI/profile?p=LPI&guccounter=1</a>
                    <p class="result-title mb-2 text-decoration-underline">Laredo Petroleum Inc.</p>
                    <div class="result-sub-box">
                        <p class="mr-5 mb-0">Relevance: 58.42</p>
                        <p class="mr-5 mb-0">Source: LPI</p>
                        <p class="mb-0">Ticker: LPI</p>
                    </div>
                    <p class="result-desc">
                        ...ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        <strong class="pa-1" style="background-color: rgba(253, 63, 1, 0.3)">Laredo Petroleum Inc in</strong> voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                        sint occaecat cupidatat...
                    </p>
                    <div class="search-result-detail">
                        <p class="font-size-21 font-weight-bold mb-0 cursor--pointer" @click="item.detail = !item.detail">
                            Details <img class="v-align-middle" :src="item.detail ? img.arrowUp : img.arrowDown" />
                        </p>
                        <div v-if="item.detail" class="mt-3">
                            <p class="mb-0">
                                ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                            </p>
                            <v-row class="detail-desc">
                                <v-col cols="6" class="pa-0">
                                    <p class="mb-25p"><span class="desc-title">Establishment Date:</span> <span class="desc-detail">23. 03. 2022</span></p>
                                    <p class="mb-25p"><span class="desc-title">Country:</span> <span class="desc-detail">USA</span></p>
                                    <p class="mb-0"><span class="desc-title">Market Cap:</span> <span class="desc-detail">1.834B</span></p>
                                </v-col>
                                <v-col cols="6" class="pa-0">
                                    <p class="mb-25p"><span class="desc-title">Sector(s):</span> <span class="desc-detail">Energy</span></p>
                                    <p class="mb-25p"><span class="desc-title">Industry:</span> <span class="desc-detail">Oil & Gas E&P</span></p>
                                </v-col>
                            </v-row>
                        </div>
                    </div>
                </v-col>
            </template>
        </v-row>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import arrowDownImg from '@/assets/images/icon_arrow_down_small_gray.png';
import arrowUpImg from '@/assets/images/icon_arrow_up_small_gray.png';

export default Vue.extend({
    data() {
        return {
            img: {
                arrowDown: arrowDownImg,
                arrowUp: arrowUpImg,
            },
            data: {
                item: [],
            },
        };
    },
    methods: {},
    mounted() {
        for (let i = 0; i < 10; i += 1) {
            this.data.item.push({ text: i, detail: false });
        }
    },
});
</script>

<style>
.qna .menu-title {
    font-size: 64px !important;
    font-weight: 900;
    color: #000;
}

.qna .menu-sub-title {
    font-size: 48px !important;
    font-weight: bold;
    color: #000;
}

.qna .menu-sub2-title {
    font-size: 24px !important;
    font-weight: normal;
    color: #000;
}

.qna .top {
    padding: 120px 150px;
    background-color: #fff;
    border-bottom: 1px solid #b3b3b3;
}

.qna .top .title-line {
    width: 72px;
    height: 12px;
    margin-bottom: 25px;
    background-color: #e65401;
}

.qna .top .search-box {
    width: 100%;
    height: 66px;
    object-fit: contain;
    border: 2px solid #000000;
    background-color: #ffffff;
    position: relative;
    padding-left: 20px;
    font-size: 21px;
}

.qna .top .search-btn {
    position: absolute;
    text-align: center;
    background-color: #000000;
    color: #ffffff;
    top: 9px;
    width: 196px;
    right: 13px;
    height: 48px;
    font-weight: 900;
}

.qna .mdi-arrow-right::before {
    font-weight: 900;
}

.qna .bottom {
    width: 100%;
    padding: 80px 150px;
    background-color: #fff;
}

.qna .bottom .search-result-list {
    padding: 80px 0px 45px 0px !important;
    border-bottom: 5px solid #f3f3f3;
}

.qna .bottom .search-result-list .result-title {
    font-size: 36px;
    color: #000;
    font-weight: 800;
}

.qna .bottom .search-result-list .result-sub-box {
    font-size: 20px;
    margin-bottom: 15px;
    color: #b3b3b3;
    display: inline-flex;
}

.qna .bottom .search-result-list .result-desc {
    font-size: 21px;
    color: #000;
    margin-bottom: 25px;
}

.qna .bottom .search-result-detail {
    padding: 15px 20px;
    border: 1px solid #000;
    background-color: #f3f3f3;
    font-size: 18px;
    color: #000;
}

.qna .bottom .search-result-detail .detail-desc {
    margin: 14px 0px 0px 0px;
    padding-top: 14px;
    border-top: 1px solid #b3b3b3;
}

.qna .bottom .search-result-detail .detail-desc .desc-title {
    color: #808080;
    font-weight: 500;
}

.qna .bottom .search-result-detail .detail-desc .desc-desc {
    color: #000;
    font-weight: 500;
}

@media screen and (max-width: 1400px) {
    .qna .menu-title {
        font-size: 54px !important;
    }

    .qna .top {
        padding: 50px 100px;
    }

    .qna .bottom {
        padding: 100px;
    }
}

@media screen and (max-width: 1263px) {
    .qna .menu-title {
        font-size: 48px !important;
    }

    .qna .menu-sub-title {
        font-size: 36px !important;
    }

    .qna .menu-sub2-title {
        font-size: 20px !important;
    }

    .qna .top {
        padding: 40px 80px;
    }

    .qna .top .title-line {
        margin-bottom: 15px;
    }

    .qna .top .search-btn {
        width: 150px;
        right: 8px;
    }

    .qna .bottom {
        padding: 80px;
    }

    .qna .bottom .search-result-list .result-title {
        font-size: 32px;
    }

    .qna .bottom .search-result-list .result-sub-box {
        font-size: 18px;
    }

    .qna .bottom .search-result-list .result-desc {
        font-size: 20px;
    }

    .qna .bottom .search-result-detail {
        font-size: 16px;
    }
}

@media screen and (max-width: 959px) {
    .qna .menu-title {
        font-size: 28px !important;
    }

    .qna .menu-sub-title {
        font-size: 24px !important;
    }

    .qna .menu-sub2-title {
        font-size: 16px !important;
    }

    .qna .top {
        padding: 40px;
    }

    .qna .top button {
        width: 140px;
        font-size: 16px;
    }

    .qna .top .search-box {
        height: 54px;
    }

    .qna .top button {
        width: 170px;
        height: 36px;
        font-size: 14px;
    }

    .qna .top .search-btn {
        width: 110px;
    }

    .qna .bottom {
        padding: 40px;
    }

    .qna .bottom .search-result-list {
        padding: 40px 0px !important;
    }

    .qna .bottom .search-result-list .result-title {
        font-size: 22px;
    }

    .qna .bottom .search-result-list .result-sub-box {
        font-size: 14px;
    }

    .qna .bottom .search-result-list .result-desc {
        font-size: 16px;
    }

    .qna .bottom .search-result-detail {
        font-size: 14px;
        word-break: break-all;
    }
}
</style>
