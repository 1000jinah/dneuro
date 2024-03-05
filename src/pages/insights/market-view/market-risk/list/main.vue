<template>
    <div class="marketrisk">
        <v-row class="ma-0">
            <div style="width:100%;">
                <v-col cols="12" class="top wrapper-1920">
                    <div style="width: 72px; height: 12px; margin-bottom: 25px; background-color: #0b89fd"></div>
                    <p class="menu-title">Dneuro Investment Institute</p>
                    <p class="menu-sub-title mb-0">
                        The Dneuro Investment Institute (BII) leverages the firm's expertise and generates proprietary research to provide insights on the global economy, markets, geopolitics and
                        long-term asset allocation-all to help our clients and portfolio managers navigate financial markets.
                    </p>
                </v-col>
            </div>
            <v-col cols="12" class="pa-0" style="background-color: #0b89fd; border-top: 1px solid #000; border-bottom: 1px solid #000;">
                <v-row class="wrapper-1920">
                    <v-col md="6" cols="12" class="middle">
                        <div class="middle-title" style="letter-spacing: -1.5px">Build a more inclusive credit system with Dneuro income</div>
                        <div class="middle-desc" style="line-height: 1.8">
                            Income Verification continues to be a highly manual and time-consuming process-one that is error-prone, and more consequentially, notrepresentative of today's workforce.
                            That's why we're excited to officially...
                        </div>
                        <div>
                            <img :src="img.newspaper" />
                            <span class="text">Market Outlook</span>
                            <img :src="img.colck" />
                            <span class="text">Feb 24, 2022</span>
                        </div>
                        <div>
                            <button class="middle-btn">Banking</button>
                            <button class="middle-btn">Fintech</button>
                        </div>
                        <button class="middle-view">Read Our View</button>
                    </v-col>
                    <v-col md="6" cols="12" v-if="$vuetify.breakpoint.mdAndUp" class="pa-0">
                        <img :src="img.glacier" style="width: 100%; height: 100%" />
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" class="pa-0" style="background-color: #f3f3f3; border-bottom: 1px solid #000;">
                <v-row class="wrapper-1920">
                    <v-col cols="12" class="center">
                        <select name="select-box-1" class="selectbox">
                            <option value="type">All</option>
                        </select>
                        <div class="search-box">
                            <input type="text" class="input-box" placeholder="Key word" />
                            <img :src="img.searchImg" />
                        </div>
                    </v-col>
                </v-row>
            </v-col>
            <div style="background-color: #fff; width:100%;">
                <v-col class="bottom wrapper-1920">
                    <v-row v-for="(item, idx) in 5" :key="idx" class="row-style">
                        <v-col cols="12" md="5" class="pa-0 d-table">
                            <div class="d-table-cell v-align-middle">
                                <img :src="img.glacier" class="bottom-img" />
                            </div>
                        </v-col>
                        <v-col cols="12" md="7">
                            <p class="bottom-title">A New Supply Shock</p>
                            <p></p>
                            <p class="bottom-sub">The West is weaning itself off Russian energy: a fresh supply shock in a world shaped by supply. What does it mean for the economy and net-zero?</p>

                            <p></p>
                            <div>
                                <img :src="img.newspaperGray" />
                                <span class="text">Market Outlook</span>
                                <img :src="img.clockGray" />
                                <span class="text">Feb 24, 2022</span>
                            </div>
                            <div>
                                <button class="bottom-btn">Banking</button>
                                <button class="bottom-btn">Fintech</button>
                            </div>
                        </v-col>
                    </v-row>
                </v-col>
            </div>
            <v-col cols="12" style="padding: 60px 0px 120px 0px">
                <v-row class="ma-0" justify="center">
                    <v-col cols="12" md="6" class="pa-0 text-center">
                        <div class="page-control-box">
                            <div class="page-control-box-in">
                                <a href="javascript:void(0);" class="prev-btn block img-box mr-15p">
                                    <img :src="img.arrowLeftImg" alt="" />
                                </a>
                                <a href="javascript:void(0);" class="number block active">1</a>
                                <a href="javascript:void(0);" class="number block">2</a>
                                <a href="javascript:void(0);" class="number block">3</a>
                                <a href="javascript:void(0);" class="number block">4</a>
                                <a href="javascript:void(0);" class="number block">5</a>
                                <a href="javascript:void(0);" class="next-btn block img-box ml-15p">
                                    <img :src="img.arrowRightImg" alt="" />
                                </a>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

import colck from '@/assets/images/icon_clock_white.png';
import newspaper from '@/assets/images/icon_newspaper_white.png';
import searchImg from '@/assets/images/searchImg.png';
import glacier from '@/assets/images/img_glacier.png';
import clockGray from '@/assets/images/icon_clock_gray.png';
import newspaperGray from '@/assets/images/icon_newspaper_gray.png';
import arrowLeftImg from '@//assets/images/icon_arrow_left_big.png';
import arrowRightImg from '@//assets/images/icon_arrow_right_big.png';

export default Vue.extend({
    data() {
        return {
            img: {
                newspaper,
                colck,
                searchImg,
                glacier,
                clockGray,
                newspaperGray,
                arrowLeftImg,
                arrowRightImg,
            },
        };
    },
});
</script>

<style>
/* 전체적인 css */
.marketrisk .top {
    width: 100%;
    padding: 120px 150px;
    background-color: #fff;
}

.marketrisk .menu-title {
    font-size: 64px !important;
    font-weight: 900;
    color: #000;
    line-height: 1.09;
    margin-bottom: 25px;
}

.marketrisk .menu-sub-title {
    font-size: 24px !important;
    font-weight: normal;
    color: #000;
}

.marketrisk .middle {
    width: 100%;
    padding: 80px 150px;
    object-fit: contain;
}

.marketrisk .center {
    width: 100%;
    padding: 80px 150px 80px 160px;
    object-fit: contain;
}

.marketrisk .bottom {
    width: 100%;
    padding: 20px 150px 80px 150px;
    object-fit: contain;
}

/* middle */
.marketrisk .middle-title {
    color: white;
    font-size: 48px;
    margin-bottom: 40px;
    font-weight: 900;
}

.marketrisk .middle-desc {
    color: white;
    font-size: 24px;
    margin-bottom: 25px;
}

.marketrisk .middle .text {
    color: rgba(255, 255, 255, 0.65);
    font-size: 16px;
    margin-right: 20px;
}

.marketrisk .middle-btn {
    border: 2px solid #fff;
    background-color: inherit;
    width: 90px;
    height: 30px;
    margin: 20px 20px 80px 0px;
    color: #fff;
    font-size:14px;
}

.marketrisk .middle-view {
    width: 230px;
    height: 48px;
    background-color: #000;
    color: #fff;
    font-size: 21px;
    font-weight: bold;
}

/* center */
.marketrisk .selectbox {
    width: 330px;
    height: 48px;
    border: solid 2px #000000;
    -webkit-appearance: auto;
    background-color: #ffffff;
    float: left;
    padding-left: 10px;
    font-size: 21px;
    font-weight: bold;
}

.marketrisk select {
    -webkit-appearance: none !important; /* for chrome */
    -moz-appearance: none !important; /*for firefox*/
    appearance: none !important;
}

.marketrisk select {
    background: url(@/assets/images/icon_arrow_down_small.png) no-repeat 97% 50%/15px auto;
    background-size: 10px 6px;
}

.marketrisk .search-box {
    margin-left: 12px;
    border: 2px solid;
    height: 48px;
    position: relative;
    object-fit: contain;
    width: 370px;
    background-color: #fff;
    float: left;
}

.marketrisk .input-box {
    height: 47px;
    padding-left: 10px;
    width: 90%;
    font-size: 21px;
}

.marketrisk .search-box img {
    position: absolute;
    right: 10px;
    margin-top: 13px;
}

input:focus {
    outline: none;
}

/* bottom */
.marketrisk .bottom-btn {
    border: 2px solid #000;
    background-color: inherit;
    width: 90px;
    height: 30px;
    margin: 20px 20px 0px 0px;
    font-size: 14px;
}

.marketrisk .bottom .text {
    color: #b3b3b3;
    font-size: 16px;
    margin-right: 10px;
}

.marketrisk .row-style {
    border-bottom: 5px solid #e8e8e8;
    padding-bottom: 60px;
    padding-top: 60px;
}

.marketrisk .bottom-title {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 25px;
}

.marketrisk .bottom-sub {
    font-size: 21px;
    margin-bottom: 25px;
}

.marketrisk .bottom-img {
    width: 100%;
    height: 300px;
    padding-right: 60px;
}

@media screen and (max-width: 1263px) {
    /* 전체적인 css */
    .marketrisk .top {
        height: auto;
        padding: 40px 80px 30px 80px;
    }

    .marketrisk .menu-title {
        font-size: 50px !important;
        margin-bottom: 15px;
    }

    .marketrisk .menu-sub-title {
        font-size: 22px !important;
    }

    .marketrisk .middle {
        padding: 30px 80px;
        height: auto;
    }

    .marketrisk .center {
        padding: 30px 80px 30px 90px;
        height: auto;
    }

    .marketrisk .bottom {
        padding: 30px 80px 80px 80px;
        height: auto;
    }

    .marketrisk .bottom-title {
        font-size: 28px;
    }

    .marketrisk .bottom-sub {
        font-size: 20px;
    }

    /* middle */
    .marketrisk .middle-title {
        font-size: 34px;
        font-weight: 700;
    }

    .marketrisk .middle .text {
        font-size: 14px;
    }

    .marketrisk .middle-desc {
        color: white;
        font-size: 20px;
        margin-bottom: 25px;
    }

    .marketrisk .middle-btn {
        margin: 20px 20px 50px 0px;
    }

    /* center */
    .marketrisk .selectbox {
        margin-left: -10px;
        width: 300px;
    }

    .marketrisk .search-box {
        width: 330px;
    }

    .marketrisk .bottom-img {
        height: 270px;
    }
}

@media screen and (max-width: 959px) {
    .marketrisk .top {
        height: auto;
        padding: 30px 40px;
    }

    .marketrisk .menu-title {
        font-size: 29px !important;
    }

    .marketrisk .menu-sub-title {
        font-size: 16px !important;
    }

    .marketrisk .middle-title {
        margin-bottom: 20px !important;
    }

    .marketrisk .center {
        padding: 30px 40px;
        height: auto;
    }

    .marketrisk .middle {
        padding: 30px 40px;
        height: auto;
    }

    .marketrisk .row-style {
        padding: 30px 0px !important;
    }

    .marketrisk .bottom {
        padding: 30px 40px 40px 40px;
        height: auto;
    }

    /* middle */
    .marketrisk .middle-view {
        width: 170px;
        height: 38px;
        font-size: 15px;
        margin-top: 30px;
    }

    .marketrisk .middle-btn {
        width: 90px;
        height: 30px;
        margin: 20px 10px 0px 0px;
        color: #fff;
    }

    /* center */
    .marketrisk .selectbox {
        width: 180px;
        height: 38px;
        font-size: 15px;
    }

    .marketrisk .search-box {
        width: 180px;
        height: 38px;
        font-size: 15px;
    }

    .marketrisk .input-box {
        height: 37px;
        font-size: 14px;
    }

    .marketrisk .search-box img {
        margin-top: 8px;
    }

    /* bottom */
    .marketrisk .bottom-btn {
        border: 2px solid #000;
        background-color: inherit;
        width: 70px;
        height: 25px;
        margin: 20px 10px 0px 0px;
    }

    .marketrisk .bottom .text {
        color: #b3b3b3;
        font-size: 16px;
        margin-right: 10px;
    }

    .marketrisk .bottom-title {
        font-size: 22px;
    }

    .marketrisk .bottom-sub {
        font-size: 18px;
    }

    .marketrisk .bottom-img {
        padding-right: 10px;
    }

    .page-control-box .prev-btn img,
    .page-control-box .next-btn img {
        width: 18px;
        height: 17px;
    }

    .page-control-box .number.active {
        width: 28px;
        height: 28px;
        border-radius: 14px;
    }

    .page-control-box .number {
        font-size: 14px;
        padding-top: 2px;
    }
}
</style>
