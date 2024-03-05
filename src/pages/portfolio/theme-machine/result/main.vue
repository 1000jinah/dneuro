<template>
    <div class="theme-result">
        <v-row class="top wrapper-1920">
            <v-col cols="12" class="pa-0">
                <div class="title-line"></div>
                <p class="menu-title mb-25p">Methodology - Themes for the Future</p>
                <p class="menu-sub2-title mb-0">
                    A line that spanns disruptive tech, equity income, hard-to-access emerging markets, and more. Ore simply put, we strive to offer investors something beyond ordinary.
                </p>
            </v-col>
        </v-row>
        <v-row class="middle ma-0">
            <div class="wrapper-1920">
                <v-col cols="12" class="pa-0 v-overlay__content">
                    <input type="text" name="search-box-div" class="search-box" v-model="search.themeMainName" @keydown.enter="getCategoryList" />
                    <button class="search-btn btn-hover-orange" @click="getCategoryList">SEARCH</button>
                </v-col>
                <v-row class="ma-0 mt-10">
                    <v-col class="pa-0" cols="12" md="8">
                        <button type="button" class="middle-btn mr-5 btn-hover-orange" @click="$router.push({ path: '/portfolios/theme-machine/themetic-growth-etfs' })">All Themetic ETF</button>
                        <button type="button" class="middle-btn btn-hover-orange" @click="$router.push({ path: '/products/themetic-growth-etfs' })">Themetic Search</button>
                    </v-col>
                    <v-col class="pa-0 text-right d-table" cols="12" md="4" :class="!$vuetify.breakpoint.mdAndUp ? 'mt-5' : ''">
                        <p class="mb-0 d-table-cell v-align-bottom font-weight-black" :class="!$vuetify.breakpoint.mdAndUp ? 'font-size-16' : 'font-size-20'">
                            All View Portfolios <i class="mdi mdi-arrow-right"></i>
                        </p>
                    </v-col>
                </v-row>
            </div>
        </v-row>
        <v-row class="bottom wrapper-1920">
            <v-col cols="12" class="pa-0">
                <span class="color-gray font-weight-bold" :class="$vuetify.breakpoint.mdAndDown ? 'font-size-18' : 'font-size-21'">Showing Results ({{ data.categorySize }})</span>
            </v-col>
            <v-col cols="12" class="pa-0">
                <v-row class="category-area ma-0" v-for="(category, idx) in data.themeCategoryList" :key="'category' + idx">
                    <v-col cols="12" class="pa-0" :class="$vuetify.breakpoint.mdAndDown ? 'mb-4' : 'mb-15'">
                        <p class="color-black mb-0" style="font-weight: 800" :class="$vuetify.breakpoint.mdAndDown ? 'font-size-16' : 'font-size-24'">{{ category.name }}</p>
                    </v-col>
                    <v-col cols="2" md="1" class="pa-0" v-if="category.themeList.length > 0">
                        <p class="color-black mb-0 font-weight-bold" :class="$vuetify.breakpoint.mdAndDown ? 'font-size-24' : 'font-size-48'">{{ category.themeList.length }}</p>
                        <p class="color-gray-two mb-0" :class="$vuetify.breakpoint.mdAndDown ? 'font-size-16' : 'font-size-24'">Category</p>
                    </v-col>
                    <v-col cols="10" md="11" class="pa-0">
                        <v-row class="ma-0">
                            <v-col cols="6" lg="4" class="theme-area" style="padding: 0px 60px 0px 0px" v-for="(theme, idx2) in category.themeList" :key="'theme' + idx2">
                                <img :src="theme.themeImgFileNm ? '/api/app/images?subpath=theme-icon&filename=' + theme.themeImgFileNm : img.category" class="mb-4" style="height: 100px" />
                                <p class="theme-name mb-25p">{{ theme.themeMainName }}</p>
                                <p class="theme-desc mb-25p">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation.
                                </p>
                                <!-- <p class="theme-desc mb-25p">{{theme.themeMainDesc}}</p> -->
                                <button type="button" class="btn-hover">Explore</button>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import meta from '@/api/meta';
import categoryImg from '@/assets/images/global-theme-img1.png';

export default Vue.extend({
    data() {
        return {
            img: {
                category: categoryImg,
            },
            search: {
                themeMainName: null,
            },
            data: {
                categorySize: 0,
                themeCategoryList: [] as any,
            },
        };
    },
    methods: {
        async getCategoryList() {
            this.data.categorySize = 0;

            const themeCategoryList = (
                await meta.api.common.themeCategory.getCateList({
                    page: 1,
                    rowSize: 100000000,
                })
            ).data.items;

            const promises = themeCategoryList.map(async (x: any) => {
                x.themeList = (
                    await meta.api.common.theme.getThemeMainList({
                        page: 1,
                        rowSize: 100000000,
                        categoryId: x.id,
                        searchThemeMainName: this.search.themeMainName,
                    })
                ).data.items;

                this.data.categorySize += x.themeList.length;
            });
            await Promise.all(promises);

            this.data.themeCategoryList = themeCategoryList;
        },
    },

    mounted() {
        this.getCategoryList();
    },
});
</script>

<style>
/* 전체적인 css */
.theme-result .menu-title {
    font-size: 64px !important;
    font-weight: 900;
    color: #000;
}

.theme-result .menu-sub2-title {
    font-size: 24px !important;
    font-weight: normal;
    color: #000;
}

.theme-result .top {
    width: 100%;
    padding: 120px 150px;
    background-color: #fff;
}

.theme-result .top .title-line {
    width: 72px;
    height: 12px;
    margin-bottom: 25px;
    background-color: #fd3f01;
}

.theme-result .middle {
    width: 100%;
    background-color: #f3f3f3;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
}

.theme-result .middle > div {
    padding: 80px 150px;
}

.theme-result .middle .search-box {
    width: 100%;
    height: 66px;
    object-fit: contain;
    border: 2px solid #000000;
    background-color: #ffffff;
    position: relative;
    padding-left: 20px;
    font-size: 21px;
}

.theme-result .middle .search-btn {
    position: absolute;
    text-align: center;
    background-color: #000000;
    color: #ffffff;
    top: 9px;
    width: 196px;
    right: 13px;
    font-weight: 900;
}

.theme-result .middle button {
    width: 230px;
    height: 48px;
    color: #fff;
    background: #000;
    font-size: 20px;
}

.theme-result .mdi-arrow-right::before {
    font-weight: 900;
}

.theme-result .bottom {
    width: 100%;
    padding: 80px 150px;
    background-color: #fff;
}

.theme-result .bottom .category-area {
    border-bottom: 5px solid #f3f3f3;
    padding: 120px 0px 40px 0px;
}

.theme-result .bottom .category-area:nth-child(1) {
    padding-top: 80px !important;
}

.theme-result .bottom .category-area .theme-area {
    margin-bottom: 80px;
    padding-right: 60px;
}

.theme-result .bottom .category-area .theme-area button {
    width: 196px;
    height: 48px;
    border: 2px solid #000;
    font-size: 20px;
    color: #000;
    font-weight: 700;
}

.theme-result .bottom .category-area .theme-area .theme-name {
    font-size: 36px;
    font-weight: 800;
    color: #000;
    word-break: break-all;
}

.theme-result .bottom .category-area .theme-area .theme-desc {
    font-size: 21px;
    font-weight: normal;
    color: #000;
}

.theme-result .bottom .category-area .theme-area button:hover {
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);
}

@media screen and (max-width: 1400px) {
    .theme-result .menu-title {
        font-size: 54px !important;
    }

    .theme-result .top {
        padding: 50px 100px;
    }

    .theme-result .middle {
        padding: 50px 100px;
    }

    .theme-result .bottom {
        padding: 50px 100px;
    }
}

@media screen and (max-width: 1263px) {
    .theme-result .menu-title {
        font-size: 48px !important;
    }

    .theme-result .menu-sub2-title {
        font-size: 20px !important;
    }

    .theme-result .top {
        padding: 40px 80px;
    }

    .theme-result .top .title-line {
        margin-bottom: 15px;
    }

    .theme-result .middle {
        padding: 80px;
    }

    .theme-result .middle .search-btn {
        width: 150px;
        right: 8px;
    }

    .theme-result .bottom {
        padding: 80px;
    }

    .theme-result .bottom .category-area {
        padding: 40px 0px !important;
    }

    .theme-result .bottom .category-area:nth-child(1) {
        padding-top: 40px !important;
    }

    .theme-result .bottom .category-area .theme-area {
        margin-bottom: 20px;
        padding: 0px 20px !important;
    }

    .theme-result .bottom .category-area .theme-area button {
        width: 140px;
    }

    .theme-result .bottom .category-area .theme-area .theme-name {
        font-size: 30px;
    }

    .theme-result .bottom .category-area .theme-area .theme-desc {
        font-size: 18px;
    }
}

@media screen and (max-width: 959px) {
    .theme-result .menu-title {
        font-size: 28px !important;
    }

    .theme-result .menu-sub2-title {
        font-size: 16px !important;
    }

    .theme-result .top {
        padding: 40px;
    }

    .theme-result .middle {
        padding: 40px;
    }

    .theme-result .middle button {
        width: 140px;
        font-size: 16px;
    }

    .theme-result .middle .search-box {
        height: 54px;
    }

    .theme-result .middle button {
        width: 170px;
        height: 36px;
        font-size: 14px;
    }

    .theme-result .middle .search-btn {
        width: 110px;
    }

    .theme-result .bottom {
        padding: 40px;
    }

    .theme-result .theme-area img {
        width: 60px;
        height: 60px;
    }

    .theme-result .bottom .category-area .theme-area {
        margin-bottom: 20px;
        padding: 0px 20px !important;
    }

    .theme-result .bottom .category-area .theme-area button {
        width: 110px;
        font-size: 14px;
        height: 35px;
    }

    .theme-result .bottom .category-area .theme-area .theme-name {
        font-size: 18px;
    }

    .theme-result .bottom .category-area .theme-area .theme-desc {
        font-size: 14px;
    }
}
</style>
