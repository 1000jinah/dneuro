<template>
    <div class="global-theme">
        <v-row class="top wrapper-1920">
            <v-col cols="12" class="pa-0">
                <div class="title-line"></div>
                <p class="menu-title mb-25p">Choose Your Investment Goal</p>
            </v-col>
            <v-col cols="12" class="pa-0">
                <p class="menu-sub2-title mb-25p">
                    A line that spans disruptive tech, equity income, hard-to-access emerging markets, and more.<br />
                    Ore simply put, we strive to offer investors something beyond ordinary.
                </p>
                <button type="button" @click="$router.push({ path: '/portfolios/theme-machine/themetic-growth-etfs' })">All Themetic ETF</button>
            </v-col>
        </v-row>
        <v-row class="slide-area wrapper-1920">
            <v-col cols="12" class="pa-0 mb-29p">
                <p class="mb-0 font-weight-bold font-size-24">Top Categories of Investment Goal</p>
            </v-col>
            <v-col cols="12" sm="6" md="6" lg="3" class="pl-0 py-0 pr-15p" style="z-index: 1" :key="'top' + idx" v-for="(item, idx) in data.topCatrgoryList">
                <div class="top-category-area">
                    <div class="d-table-cell v-align-middle">
                        <img :src="item.themeImgFileNm ? '/api/app/images?subpath=theme-icon&filename=' + item.themeImgFileNm : img.category" class="ma-auto" />
                        <p class="big-category mb-10p">{{ item.name }}</p>
                        <p class="sub-category mb-25p">{{ item.themeMainName }}</p>
                        <!-- <p class="category-desc mb-25p">{{ item.themeMainDesc }}</p> -->
                        <p class="category-desc mb-25p">
                            Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut dolore magna aliqua. Ut enim ad minim nostrud exercitation.
                        </p>
                        <button class="mt-0" type="button" @click="$router.push('/portfolios/theme-machine/themetic-growth-etfs')">Explore</button>
                    </div>
                </div>
            </v-col>
        </v-row>
        <v-row class="orange-range ma-0"> </v-row>
        <v-row class="middle wrapper-1920">
            <v-col cols="12" lg="12" xl="6" class="pa-0" :class="$vuetify.breakpoint.lgAndDown ? 'mb-10' : ''">
                <p class="font-size-24 mb-5 font-weight-bold">Searching for themes you want to invest</p>
                <p class="font-size-48 mb-6" style="font-weight: 800">Intelligent Financial Q&A</p>
                <p class="font-size-21 mb-0">
                    Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor<br />
                    incididunt ut dolore magna aliqua. Ut enim ad minim nostrud exercitation.
                </p>
            </v-col>
            <v-col cols="12" lg="12" xl="6" class="pa-0">
                <div class="vertical-center">
                    <div class="v-overlay__content w-100 text-right">
                        <input type="text" v-model="data.keyword" name="search-box-div" class="search-box" placeholder="Do not use keywords, but full-fledged questions." />
                        <button type="button" class="search-btn" @click="$router.push({ path: '/portfolios/theme-machine/qna', query: { keyword: data.keyword } })">SEARCH</button>
                    </div>
                </div>
            </v-col>
        </v-row>
        <v-row class="center ma-0">
            <div class="wrapper-1920">
                <v-col cols="12" class="pa-0 text-center">
                    <p class="menu-sub-title .mb-25p font-weight-bold">What is Thematic Investment?</p>
                    <div class="center-desc">
                        Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut dolore magna aliqua. Ut enim ad minim nostrud exercitation.Lorem ipsum dolor sit amet,
                        consectetur elit, sed do eiusmod tempor incididunt ut dolore magna aliqua. Ut enim ad minim nostrud exercitation.
                    </div>
                    <img :src="img.arrowDown" @click="centerFlag = !centerFlag" :class="[centerFlag ? tbdisplay : tdisplay]" stlye="width:75px; height: 75px;" />
                </v-col>
                <v-col cols="12" :class="[centerFlag ? tdisplay : tbdisplay]" class="pa-0">
                    <v-row class="row-style" style="margin-bottom: 100px">
                        <v-col cols="6" class="py-0 pl-0 pr-115">
                            <div style="float: left" class="d-table-cell">
                                <img :src="img.diruptivetechnology" class="center-img" />
                            </div>
                            <div class="d-table-cell">
                                <p class="d-flex center-title">Diruptive Technology</p>
                                <p class="d-flex font-size-21 mb-0">
                                    Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut dolore magna aliqua. Ut enim ad minim nostrud exercitation.
                                </p>
                            </div>
                        </v-col>
                        <v-col cols="6" class="py-0 pr-0 pl-115">
                            <div style="float: left" class="d-table-cell">
                                <img :src="img.peopleanddemographics" class="center-img" />
                            </div>
                            <div class="d-table-cell">
                                <p class="d-flex center-title">People & Demographics</p>
                                <p class="d-flex font-size-21 mb-0">
                                    Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut dolore magna aliqua. Ut enim ad minim nostrud exercitation.
                                </p>
                            </div>
                        </v-col>
                    </v-row>
                    <v-row class="row-style" style="margin-bottom: 80px">
                        <v-col cols="6" class="py-0 pl-0 pr-115">
                            <div style="float: left" class="d-table-cell">
                                <img :src="img.physicalenvironment" class="center-img" />
                            </div>
                            <div class="d-table-cell">
                                <p class="d-flex center-title">Physical Environment</p>
                                <p class="d-flex font-size-21 mb-0">
                                    Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut dolore magna aliqua. Ut enim ad minim nostrud exercitation.
                                </p>
                            </div>
                        </v-col>
                        <v-col cols="6" class="py-0 pr-0 pl-115">
                            <div style="float: left" class="d-table-cell">
                                <img :src="img.sustainability" class="center-img" />
                            </div>
                            <div class="d-table-cell">
                                <p class="d-flex center-title">Sustainability</p>
                                <p class="d-flex font-size-21 mb-0">
                                    Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut dolore magna aliqua. Ut enim ad minim nostrud exercitation.
                                </p>
                            </div>
                        </v-col>
                    </v-row>
                    <div style="text-align: center">
                        <img :src="img.arrowUp" @click="centerFlag = !centerFlag" style="width: 75px; height: 75px" />
                    </div>
                </v-col>
            </div>
        </v-row>
        <v-row class="bottom wrapper-1920" v-if="data.themeCategoryList.length > 0">
            <template v-for="(category, idx) in data.themeCategoryList">
                <v-row class="ma-0 theme-category-area" :key="'themeCategory' + idx">
                    <v-col cols="12" class="theme-title">
                        <p class="color-black font-weight-bold mb-15" :class="$vuetify.breakpoint.mdAndDown ? 'font-size-20' : 'font-size-24'">{{ category.name }}</p>
                    </v-col>
                    <template v-for="(theme, idx2) in category.themeList">
                        <v-row class="ma-0 theme-list" :key="'theme' + idx2">
                            <v-col cols="2" md="1" class="pa-0">
                                <template v-if="idx2 === 0">
                                    <p class="color-black mb-0 font-weight-bold" :class="$vuetify.breakpoint.mdAndDown ? 'font-size-36' : 'font-size-48'">{{ category.themeCount }}</p>
                                    <p class="color-gray-two" :class="$vuetify.breakpoint.mdAndDown ? 'font-size-16' : 'font-size-24'">Category</p>
                                </template>
                            </v-col>
                            <v-col cols="10" md="11" class="pa-0">
                                <v-row class="ma-0">
                                    <template v-for="(item, idx3) in theme">
                                        <v-col cols="12" md="4" class="theme-area mb-20" :key="'child2' + idx3">
                                            <div class="d-inline-block" :style="data.themeMega.themeMegaId === item.themeMegaId ? 'border-left: 4px solid #fd3f01; padding-left: 15px;' : ''">
                                                <img
                                                    :src="item.themeImgFileNm ? '/api/app/images?subpath=theme-icon&filename=' + item.themeImgFileNm : img.category"
                                                    class="mb-25p"
                                                    style="height: 100px"
                                                />
                                                <p
                                                    class="sub-theme mb-25p cursor--pointer"
                                                    :class="data.themeMega.themeMegaId === item.themeMegaId ? 'color-orange' : 'color-black'"
                                                    @click="themeMegaDetail(item, category, idx2)"
                                                >
                                                    {{ item.themeMegaName }}
                                                </p>
                                                <!-- <p class="theme-desc mb-0">{{ item.themeMegaName }}</p> -->
                                                <p class="theme-desc mb-0">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                    quis nostrud exercitation.
                                                </p>
                                            </div>
                                            <button type="button" class="btn-hover mt-25p" @click="$router.push('/portfolios/theme-machine/themetic-growth-etfs')">Explore</button>
                                        </v-col>
                                    </template>
                                </v-row>
                            </v-col>
                        </v-row>
                        <template v-if="data.bgIdx === idx2 && data.category.id === category.id">
                            <v-row class="w-100 theme-bg-area" :class="!flag.listmore ? 'mb-20 mx-0 mt-0' : 'ma-0'" :key="'bgGray' + idx2">
                                <template v-for="(item, idx) in data.themeList">
                                    <v-col
                                        cols="12"
                                        md="4"
                                        :key="'theme' + idx"
                                        class="py-0"
                                        :class="
                                            $vuetify.breakpoint.mdAndUp
                                                ? [idx <= 2 ? '' : 'mt-20', idx % 3 == 0 ? 'pr-30p' : '', idx % 3 == 1 ? 'pr-30p pl-30p' : '', idx % 3 == 2 ? 'pl-30p' : '']
                                                : [idx != data.themeList.length - 1 ? 'mb-10' : '']
                                        "
                                    >
                                        <v-row class="ma-0">
                                            <v-col cols="3" class="pa-0 text-right pr-5">
                                                <img :src="item.themeImgFileNm ? '/api/app/images?subpath=theme-icon&filename=' + item.themeImgFileNm : img.category" style="height: 55px" />
                                            </v-col>
                                            <v-col cols="9" class="pa-0">
                                                <p class="font-size-24 color-black font-weight-black mb-3">{{ item.name }}</p>
                                                <p class="font-size-18 color-black mb-3">
                                                    This theme focuses on companies developing security solutions to help protect against cyber attacks affecting applications, networks, cloud
                                                    computing, and endpoint security.
                                                </p>
                                                <p @click="$router.push('/portfolios/theme-machine/themetic-growth-etfs')" class="font-size-21 mb-0 font-weight-black cursor--pointer">
                                                    Explore <img :src="img.arrowRight" style="width: 16px" />
                                                </p>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </template>
                            </v-row>
                            <v-row
                                v-if="flag.listmore"
                                class="mx-0 mt-0 mb-20"
                                :key="'bgGrayFooter' + idx2"
                                style="background-color: #f3f3f3; border-top: 1px solid #b3b3b3; border-bottom: 1px solid #b3b3b3"
                            >
                                <v-col cols="12" class="px-0 py-10p text-center">
                                    <template v-if="!flag.showmore">
                                        <span @click="themeShowMore" class="font-size-18 font-weight-bold cursor--pointer">Show More <img class="v-align-middle" :src="img.arrowDownSmall" /></span>
                                    </template>
                                    <template v-else>
                                        <span @click="themeShowMore" class="font-size-18 font-weight-bold cursor--pointer">Close <img class="v-align-middle" :src="img.arrowUpSmall" /></span>
                                    </template>
                                </v-col>
                            </v-row>
                        </template>
                    </template>
                    <div class="gray-line" :key="'line' + idx"></div>
                </v-row>
            </template>
        </v-row>
        <v-row class="global-theme-footer ma-0">
            <v-row class="wrapper-1920 px-150p">
                <v-col cols="6" class="pa-0">
                    <span class="font-size-24 color-black font-weight-bold">Filter all Dneuro's funds using your own criteria</span>
                </v-col>
                <v-col cols="6" class="pa-0 text-right">
                    <p class="mb-0 font-weight-black cursor--pointer font-size-21" @click="$router.push({ path: '/portfolios/all-portfolios' })">
                        All View Portfolios <img :src="img.arrowRight" style="width: 16px" />
                    </p>
                </v-col>
            </v-row>
        </v-row>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import meta from '@/api/meta';
import categoryImg from '@/assets/images/global-theme-img1.png';
import arrowLeftImg from '@//assets/images/icon_arrow_left_big.png';
import arrowRightImg from '@//assets/images/icon_arrow_right_big.png';
import arrowDownImg from '@//assets/images/icon_arrow_down_withcircle.png';
import arrowDownSmallImg from '@//assets/images/icon_arrow_down_small.png';
import arrowUpImg from '@//assets/images/icon_arrow_up_withcircle.png';
import arrowUpSmallImg from '@//assets/images/icon_arrow_up_small.png';
import diruptivetechnologyImg from '@//assets/images/icon_diruptivetechnology.png';
import peopleanddemographicsImg from '@//assets/images/icon_peopleanddemographics.png';
import physicalenvironmentImg from '@//assets/images/icon_physicalenvironment.png';
import sustainabilityImg from '@//assets/images/icon_sustainability.png';

export default Vue.extend({
    components: {},
    data() {
        return {
            img: {
                category: categoryImg,
                arrowLeft: arrowLeftImg,
                arrowRight: arrowRightImg,
                arrowDown: arrowDownImg,
                arrowDownSmall: arrowDownSmallImg,
                arrowUp: arrowUpImg,
                arrowUpSmall: arrowUpSmallImg,
                diruptivetechnology: diruptivetechnologyImg,
                peopleanddemographics: peopleanddemographicsImg,
                physicalenvironment: physicalenvironmentImg,
                sustainability: sustainabilityImg,
            },
            data: {
                bgIdx: null,
                category: {},
                themeMega: {},
                themeList: [],
                themeCategoryList: [] as any,
                topCatrgoryList: [],
                ratingValue: 1,
                keyword: null,
            },
            flag: {
                showmore: false,
            },
            centerFlag: false,
            tdisplay: 'tdisplay',
            tbdisplay: 'tbdisplay',
        };
    },
    watch: {},
    methods: {
        next() {
            const refSlick: any = this.$refs.slick;
            refSlick.next();
        },
        prev() {
            const refSlick: any = this.$refs.slick;
            refSlick.prev();
        },
        // Events listeners
        handleAfterChange(event: any, slickDetail: any, currentSlide: any) {
            if (currentSlide < 3) {
                this.data.ratingValue = 1;
            } else if (currentSlide >= 3 && currentSlide < 6) {
                this.data.ratingValue = 2;
            } else if (currentSlide >= 6 && currentSlide < 9) {
                this.data.ratingValue = 3;
            } else {
                this.data.ratingValue = 4;
            }
        },
        setRating(val: number) {
            const refSlick: any = this.$refs.slick;

            if (val === 1) {
                refSlick.goTo(0);
            } else if (val === 2) {
                refSlick.goTo(3);
            } else if (val === 3) {
                refSlick.goTo(6);
            } else {
                refSlick.goTo(9);
            }
        },
        async themeShowMore() {
            this.flag.showmore = !this.flag.showmore;
            let setRowSize = 6;

            if (this.flag.showmore) {
                setRowSize = 100000;
            }

            this.data.themeList = (
                await meta.api.common.theme.getThemeList({
                    page: 1,
                    rowSize: setRowSize,
                    themeMegaId: this.data.themeMega.themeMegaId,
                })
            ).data.items;
        },
        async themeMegaDetail(themeMega: any, category: any, idx: number) {
            this.$store.commit('app/SET_LOADING', true);
            this.data.themeMega = themeMega;
            this.data.category = category;
            this.data.bgIdx = idx;
            this.flag.showmore = false;
            this.flag.listmore = false;

            let themeList = (
                await meta.api.common.theme.getThemeList({
                    page: 1,
                    rowSize: 1000000,
                    themeMegaId: themeMega.themeMegaId,
                })
            ).data.items;

            if (themeList.length > 6) {
                themeList = themeList.filter((x: any, xIdx: number) => {
                    if (xIdx < 6) {
                        return x;
                    }
                });
                this.flag.listmore = true;
            }

            this.data.themeList = themeList;
            this.$store.commit('app/SET_LOADING', false);
        },
        // Top 카테고리 리스트
        async getTopCategory() {
            const { data } = await meta.api.common.theme.getTopCategoryList();
            this.data.topCatrgoryList = data;
        },
        // 카테고리 리스트
        async getCategoryList() {
            const themeCategoryList = (
                await meta.api.common.themeCategory.getCateList({
                    page: 1,
                    rowSize: 100000000,
                })
            ).data.items;

            const promises = themeCategoryList.map(async (x: any) => {
                x.themeList = (
                    await meta.api.common.theme.getThemeMegaList({
                        page: 1,
                        rowSize: 100000000,
                        categoryId: x.id,
                    })
                ).data.items;
            });
            await Promise.all(promises);

            let i = 0;
            let j = 0;

            for (i = 0; i < themeCategoryList.length; i += 1) {
                const listLength = themeCategoryList[i].themeList.length;
                const allList = [];
                let count = 0;
                let list = [];

                for (j = 0; j < listLength; j += 1) {
                    list.push(themeCategoryList[i].themeList[j]);

                    if ((j !== 0 && (j + 1) % 3 === 0) || j === listLength - 1) {
                        allList.push(list);
                        count += list.length;
                        list = [];
                    }
                }

                themeCategoryList[i].themeList = allList;
                themeCategoryList[i].themeCount = count;
            }

            this.data.themeCategoryList = themeCategoryList;
        },
    },
    mounted() {
        this.getTopCategory();
        this.getCategoryList();
    },
});
</script>

<style>
.global-theme {
    height: 100%;
}

.global-theme .menu-title {
    font-size: 64px !important;
    font-weight: 900;
    color: #000;
}

.global-theme .menu-sub-title {
    font-size: 48px !important;
    font-weight: 700;
    color: #000;
}

.global-theme .menu-sub2-title {
    font-size: 24px !important;
    font-weight: normal;
    color: #000;
}

.global-theme .top {
    width: 100%;
    padding: 120px 150px 80px 150px;
    background-color: #fff;
}

.global-theme .top .title-line {
    width: 72px;
    height: 12px;
    margin-bottom: 25px;
    background-color: #fd3f01;
}

.global-theme .top button {
    width: 230px;
    height: 48px;
    color: #fff;
    background: #000;
    font-size: 20px;
    font-weight: bold;
}

.global-theme .slide-area {
    padding: 0px 150px;
    background-color: #fff;
}

.global-theme .slide-area .slick-slide {
    margin-right: 15px;
}

.global-theme .slide-area .top-category-area {
    padding: 28.8px 20px;
    display: inline-block;
    border: 1px solid #000;
    background-color: #fff;
    text-align: center;
    max-height: 450px;
    overflow-y: auto;
    margin-right: 13px;
}

.global-theme .slide-area .top-category-area:nth-last-child(1) {
    margin-right: 0px;
}

.global-theme .slide-area .top-category-area button {
    width: 166px;
    height: 41px;
    border: 2px solid #000;
    font-size: 18px;
    color: #000;
    font-weight: 700;
}

.global-theme .slide-area .top-category-area button:hover {
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);
}

.global-theme .slide-area .top-category-area img {
    height: 74.4px;
}

.global-theme .slide-area .top-category-area .big-category {
    font-size: 14px;
    color: #fd3f01;
}

.global-theme .slide-area .top-category-area .sub-category {
    font-size: 24px;
    line-height: 28px;
    font-weight: 800;
    color: #000;
}

.global-theme .slide-area .top-category-area .category-desc {
    font-size: 16px;
    line-height: 31.5px;
    font-weight: normal;
    color: #000;
}

.global-theme .orange-range {
    position: relative;
    margin-top: -231px !important;
    height: 286px;
    background-color: #fd3f01;
    border-top: 0.5px solid black;
    border-bottom: 1px solid black;
}

.global-theme .middle {
    position: relative;
    padding: 120px 150px;
}

.global-theme .middle .search-box {
    width: 100%;
    height: 66px;
    font-size: 21px;
    object-fit: contain;
    border: 2px solid #000000;
    background-color: #ffffff;
    position: relative;
    margin-top: -9px;
    padding-left: 20px;
}

.global-theme .middle button {
    width: 230px;
    height: 48px;
    color: #fff;
    background: #000;
    font-size: 20px;
}

.global-theme .middle button:hover {
    color: #000;
    background: #e65401;
    font-weight: bold;
    border: 2px solid #000;
}

.global-theme .middle .search-btn {
    position: absolute;
    text-align: center;
    background-color: #000000;
    color: #ffffff;
    width: 196px;
    right: 10px;
}

.global-theme .bottom {
    position: relative;
    background-color: #fff;
}

.global-theme .slide-area .icon-arrow {
    width: 22.6px;
    height: 21px;
}

.global-theme .middle .icon-arrow {
    width: 15.9px;
    height: 14.7px;
}

.global-theme .middle-btn {
    font-weight: 700;
}

.global-theme .search-btn {
    font-weight: 900;
}

.global-theme .center {
    width: 100%;
    position: relative;
    padding: 120px 0px;
    background-color: #f3f3f3;
}

.global-theme .center-img {
    width: 98px;
    height: 98px;
    margin-right: 60px;
}

.global-theme .center-title {
    font-size: 36px;
    color: #fd3f01;
    margin-bottom: 25px;
    font-weight: bold;
}

.global-theme .center-desc {
    padding: 0px 335px;
    font-size: 21px;
    margin-bottom: 80px;
}

.global-theme .center .row-style {
    padding: 0px 205px 0px 238px;
}

.global-theme .pr-115 {
    padding-right: 115px;
}

.global-theme .pl-115 {
    padding-left: 115px;
}

.rating {
    width: 13px;
    height: 13px;
    border-radius: 13px;
    border: 1px solid #b3b3b3;
    margin: 16px;
}

.rating.active {
    background-color: #000;
    border: unset;
}

.weight-900 {
    font-weight: 900;
}

.weight-750 {
    font-weight: 750;
}

.tdisplay {
    display: '';
}

.tbdisplay {
    display: none;
}

.global-theme .bottom .theme-category-area {
    padding-top: 120px;
}

.global-theme .bottom .theme-category-area .gray-line {
    width: 100%;
    margin: 40px 150px 0px 150px;
    border-bottom: 5px solid #f3f3f3;
}

.global-theme .bottom .theme-category-area .theme-title {
    padding: 0px 150px;
}

.global-theme .bottom .theme-category-area .theme-list {
    padding: 0px 150px;
}

.global-theme .bottom .theme-category-area .theme-bg-area {
    padding: 60px 150px;
    background-color: rgb(243, 243, 243);
}

.global-theme .bottom .theme-area button {
    width: 196px;
    height: 48px;
    border: 2px solid #000;
    font-size: 20px;
    color: #000;
    font-weight: 700;
}

.global-theme .bottom .theme-area button:hover {
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);
}

.global-theme .bottom .theme-area .sub-theme {
    font-size: 36px;
    line-height: 50px;
    font-weight: 800;
    color: #000;
}

.global-theme .bottom .theme-area .theme-desc {
    font-size: 18px;
    line-height: 31px;
    color: #000;
}

.global-theme .bottom .theme-area.col-md-auto {
    flex: 0 0 33% !important;
}

.global-theme .global-theme-footer {
    padding: 23.5px 0px;
    border-top: 1px solid #000;
}

@media screen and (max-width: 1400px) {
    .global-theme .top {
        padding: 50px 100px;
    }

    .global-theme .menu-sub-title {
        font-size: 34px !important;
    }

    .global-theme .slide-area {
        padding: 0px 100px;
    }

    .global-theme .middle {
        padding: 50px 100px;
    }

    .global-theme .bottom .theme-category-area .theme-title {
        padding: 0px 100px;
    }

    .global-theme .bottom .theme-category-area .theme-list {
        padding: 0px 100px;
    }

    .global-theme .bottom .theme-category-area .theme-bg-area {
        padding: 40px 100px;
    }

    .global-theme .top-category-area .sub-category {
        font-size: 32px;
    }
}

@media screen and (max-width: 1263px) {
    .global-theme .menu-title {
        font-size: 48px !important;
        margin-top: 60px;
    }

    .global-theme .menu-sub2-title {
        font-size: 20px !important;
        margin-bottom: 40px;
    }

    .global-theme .top {
        height: auto;
        padding: 30px 80px;
    }

    .global-theme .top .title-line {
        margin-bottom: 15px;
    }

    .global-theme .slide-area {
        height: auto;
        padding: 0px 80px;
    }

    .global-theme .slide-area .slick-slide {
        width: 400px !important;
        margin-right: 20px;
    }

    .global-theme .middle {
        height: auto;
        padding: 40px 80px;
    }

    .global-theme .bottom .theme-category-area {
        padding-top: 60px;
    }

    .global-theme .top-category-area .sub-category {
        font-size: 28px;
    }

    .global-theme .slide-area .icon-arrow {
        width: 18px;
        height: 18px;
    }

    .rating {
        margin: 16px 8px;
    }

    .global-theme .center {
        padding: 100px 0px;
    }

    .global-theme .center-img {
        width: 88px;
        height: 88px;
        margin-right: 45px;
    }

    .global-theme .center-title {
        font-size: 28px;
    }

    .global-theme .center-desc {
        padding: 0px 180px;
        font-size: 21px;
    }

    .global-theme .center .row-style {
        padding: 0px 109px 0px 138px;
    }

    .global-theme .pr-115 {
        padding-right: 75px;
    }

    .global-theme .pl-115 {
        padding-left: 75px;
    }

    .global-theme .font-size-21 {
        font-size: 18px !important;
    }

    .global-theme .bottom .theme-area .sub-theme {
        font-size: 24px;
    }

    .global-theme .bottom .theme-category-area .theme-title {
        padding: 0px 70px;
    }

    .global-theme .bottom .theme-category-area .theme-list {
        padding: 0px 70px;
    }

    .global-theme .bottom .theme-category-area .theme-bg-area {
        padding: 40px 70px;
    }
}

@media screen and (max-width: 959px) {
    .global-theme .menu-title {
        font-size: 28px !important;
        margin-top: 40px;
    }

    .global-theme .menu-sub-title {
        font-size: 22px !important;
    }

    .global-theme .menu-sub2-title {
        font-size: 16px !important;
        margin-bottom: 20px;
    }

    .global-theme .top {
        margin-bottom: 0px !important;
        padding: 30px 40px;
    }

    .global-theme .slide-area {
        height: auto;
        padding: 0px 40px;
    }

    .global-theme .slide-area .slick-slide {
        width: 356px !important;
    }

    .global-theme .middle {
        height: auto;
        padding: 20px 40px;
    }

    .global-theme .middle .search-box {
        font-size: 18px;
        height: 54px;
    }

    .global-theme .middle button {
        width: 170px;
        height: 36px;
        font-size: 14px;
    }

    .global-theme .middle .search-btn {
        width: 110px;
    }

    .global-theme .top-category-area .big-category {
        font-size: 16px;
    }

    .global-theme .top-category-area .sub-category {
        font-size: 18px;
    }

    .global-theme .top-category-area .category-desc {
        font-size: 16px;
    }

    .global-theme .top-category-area img {
        width: 60px;
        height: 60px;
    }

    .global-theme .top-category-area button {
        width: 110px;
        font-size: 14px;
        height: 35px;
    }

    .global-theme .slide-area .icon-arrow {
        width: 14px;
        height: 14px;
    }

    .rating {
        margin: 16px 4px;
    }

    .global-theme .center {
        padding: 60px 0px;
    }

    .global-theme .center-img {
        width: 78px;
        height: 78px;
        margin-right: 30px;
    }

    .global-theme .center-title {
        font-size: 20px;
    }

    .global-theme .center-desc {
        padding: 0px 80px;
        font-size: 18px;
    }

    .global-theme .center .row-style {
        padding: 0px 59px 0px 88px;
    }

    .global-theme .pr-115 {
        padding-right: 15px;
    }

    .global-theme .pl-115 {
        padding-left: 15px;
    }

    .global-theme .bottom .theme-category-area .theme-title {
        padding: 0px 40px;
    }

    .global-theme .bottom .theme-category-area .theme-list {
        padding: 0px 40px;
    }

    .global-theme .bottom .theme-category-area .theme-bg-area {
        padding: 20px 40px;
    }
}

@media screen and (max-width: 600px) {
    .global-theme .middle .search-box {
        font-size: 12px;
    }
}
</style>
