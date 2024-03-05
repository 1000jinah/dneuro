<template>
    <v-app>
        <v-app-bar class="my-0 pa-0" id="mainHeader" app :height="!$vuetify.breakpoint.lgAndUp ? 80 : 103" :flat="!$vuetify.breakpoint.lgAndUp" color="white">
            <template v-if="$vuetify.breakpoint.lgAndUp">
                <div class="globalNav">
                    <v-row class="ma-0 h-100">
                        <v-col cols="12" class="top-bar pa-0" @mouseover="selectMenu = {}">
                            <div class="wrapper-1920 pr-150 d-flex justify-end align-center h-100 py-6p">
                                <div
                                    class="h-100 d-table top-bar-select individual cursor--pointer pr-25p border-right"
                                    :class="individualsFlag == true ? 'bg-white-two' : ''"
                                    @click="individualsFlag == false ? [(individualsFlag = true), (languageFlag = false)] : (individualsFlag = false)"
                                >
                                    <div class="d-table-cell v-align-middle">
                                        <img :src="img.individuals" />
                                        <span class="color-black" style="padding: 0px 5px 0px 10px">Individuals</span>
                                        <img style="padding-bottom: 2px" :src="img.arrowDown" />
                                    </div>
                                </div>
                                <div
                                    class="h-100 d-table top-bar-select global cursor--pointer pr-25p pl-25p border-right"
                                    :class="languageFlag == true ? 'bg-white-two' : ''"
                                    @click="languageFlag == false ? [(languageFlag = true), (individualsFlag = false)] : (languageFlag = false)"
                                >
                                    <div class="d-table-cell v-align-middle">
                                        <img :src="img.global" />
                                        <span class="color-black" style="padding: 0px 5px 0px 10px">EN</span>
                                        <img style="padding-bottom: 2px" :src="img.arrowDown" />
                                    </div>
                                </div>
                                <template v-if="name">
                                    <div class="pl-25p d-table">
                                        <div class="d-table-cell v-align-middle">
                                            <span class="mb-1 top-name">{{ name }}</span>
                                            <span class="mb-0 logout-btn" @click="logout()">Logout <i class="mdi mdi-arrow-right logout-arrow-btn"></i></span>
                                        </div>
                                    </div>
                                    <!-- <v-btn
                                        class="admin-btn"
                                        elevation="0"
                                        v-if="$store.state.app.roleList[0].id == 1"
                                        @click="$router.push({path: '/settings'})"
                                    >관리자페이지</v-btn> -->
                                </template>
                                <template v-else>
                                    <div class="pl-25p d-table">
                                        <a href="javascript:void(0);" @click="$router.push({ path: '/sign-in' })" class="login-btn d-table-cell v-align-middle" style="vertical-align: sub">Sign In</a>
                                    </div>
                                </template>
                            </div>
                        </v-col>
                        <v-col cols="12" style="margin-top: -6px" class="align-center justify-start pl-150 top-individuals color-black" v-if="individualsFlag == true">
                            <p class="font-size-21 weight-800">Change Your Audience Type</p>
                            <template v-for="(individuals, idx) in individualsList">
                                <label style="padding-right: 21px" class="checkbox-circle" :key="'individuals' + idx">
                                    <input
                                        class="vertical-start"
                                        type="checkbox"
                                        :value="individuals.value"
                                        :id="'individuals' + idx"
                                        name="individuals"
                                        v-model="individuals.selected"
                                        @click="individualsCheck(individuals.value)"
                                    />
                                    <i class="check-icon"></i>
                                    <span class="font-size-14 weight-800">{{ individuals.name }}</span>
                                </label>
                            </template>
                        </v-col>
                        <v-col cols="12" style="margin-top: -6px" class="align-center justify-start pl-150 top-individuals color-black" v-if="languageFlag == true">
                            <p class="font-size-21 weight-800">Change Your Language</p>
                            <template v-for="(language, idx) in languageList">
                                <label style="padding-right: 21px" class="checkbox-circle" :key="'language' + idx">
                                    <input
                                        class="vertical-start"
                                        type="checkbox"
                                        :value="language.value"
                                        :id="'language' + idx"
                                        name="language"
                                        v-model="language.selected"
                                        @click="languageCheck(language.value)"
                                    />
                                    <i class="check-icon"></i>
                                    <span class="font-size-14 weight-800">{{ language.name }}</span>
                                </label>
                            </template>
                        </v-col>
                        <v-row class="ma-0 py-0 bg-white b-b1 align-start menu-bar" :class="individualsFlag == true || languageFlag == true ? 'top-height' : ''">
                            <v-row class="wrapper-1920 pr-150 pl-7">
                                <v-col cols="2" class="pa-0 pr-14 d-flex justify-end align-center">
                                    <img class="logo-img" :src="img.logo" @click="$router.push('/').catch((err) => {})" />
                                </v-col>
                                <v-col cols="6" class="d-flex align-center pa-0 pl-11">
                                    <template v-for="(treeMenu1, treeMenu1Idx) in treeMenuList">
                                        <template v-if="treeMenu1.show === 'T'">
                                            <template v-if="treeMenu1.depth === 2">
                                                <v-hover :key="treeMenu1Idx">
                                                    <v-card flat class="menu-card" :class="$route.path === treeMenu1.path || selectMenu.id == treeMenu1.id ? 'active' : ''">
                                                        <div style="height: 100%" class="d-table">
                                                            <a
                                                                class="menu-title rootLink font-weight-bold d-table-cell v-align-middle"
                                                                :class="$route.path === treeMenu1.path || selectMenu.id == treeMenu1.id ? 'active' : ''"
                                                                @mouseover="selectMenu = treeMenu1"
                                                                >{{ treeMenu1.name }}</a
                                                            >
                                                        </div>
                                                    </v-card>
                                                </v-hover>
                                            </template>
                                        </template>
                                    </template>
                                </v-col>
                                <v-col cols="4" class="d-flex justify-end align-center pa-0">
                                    <div class="menu-search-box">
                                        <input type="text" name="search-box-1" class="menu-search-box-input" />
                                    </div>
                                </v-col>
                            </v-row>
                        </v-row>
                    </v-row>
                </div>
                <template v-if="selectMenu.id != null">
                    <div :class="individualsFlag == true || languageFlag == true ? 'shadow-menu-down' : 'shadow-menu'">
                        <v-row class="fill-height ma-0" @mouseleave="selectMenu = {}">
                            <v-col cols="2" class="pa-0"></v-col>
                            <v-col cols="10" class="justify-center py-0 pr-0 pl-78p">
                                <template v-if="selectMenu.show === 'T'">
                                    <template v-if="selectMenu.depth === 2">
                                        <v-row dense class="">
                                            <template v-for="(treeMenu2, idx2) in subTreeMenuList">
                                                <v-col :key="'treeMenu2' + treeMenu2.id + idx2" cols="3" class="pa-0">
                                                    <p
                                                        class="font-weight-black d-block mb-10 rootLink color-black font-size-21 cursor--pointer"
                                                        :class="$route.path === treeMenu2.path ? 'active' : ''"
                                                        @click="subMenuClick(treeMenu2.path)"
                                                    >
                                                        {{ treeMenu2.name }}
                                                    </p>
                                                    <template v-for="(treeMenu3, idx3) in treeMenu2.childrenMenuList">
                                                        <div :key="'treeMenu3' + treeMenu3.id + idx3" class="d-block cursor--pointer color-black font-weight-bold">
                                                            <p @click="subMenuClick(treeMenu3.path)" :class="treeMenu2.childrenMenuList.length - 1 != idx3 ? 'mb-25p' : 'mb-0'">{{ treeMenu3.name }}</p>
                                                        </div>
                                                    </template>
                                                </v-col>
                                            </template>
                                        </v-row>
                                    </template>
                                </template>
                            </v-col>
                        </v-row>
                    </div>
                </template>
            </template>
            <template v-else>
                <div class="d-flex globalNav">
                    <v-row class="d-flex justify-space-between align-center" dense>
                        <v-col cols="auto" class="align-center pa-0 d-table">
                            <img class="logo-img d-table-cell" :src="img.logo" @click="$router.push('/').catch((err) => {})" />
                        </v-col>
                        <v-col cols="auto" class="align-center pa-0 d-table">
                            <img @click="drawer = !drawer" class="d-table-cell" :src="img.mobileHamburger" />
                        </v-col>
                    </v-row>
                </div>
            </template>
        </v-app-bar>
        <!-- <v-navigation-drawer app v-model="drawer" class="nav-area">
            <img :src="img.hamburger">
            <p class="white--text">Menu</p>
        </v-navigation-drawer> -->
        <v-main :class="selectMenu.id != null ? 'blur' : ''">
            <v-fade-transition hide-on-leave>
                <router-view></router-view>
            </v-fade-transition>
        </v-main>
        <footer style="background: #000; height: 100%">
            <div style="border-bottom: 2px solid #404040">
                <v-row class="ma-0 pa-0 footer-main">
                    <v-row class="ma-0 pa-0">
                        <v-col cols="12" class="pa-0">
                            <v-row class="ma-0">
                                <template v-for="(footerTreeMenu1, idx) in footerMenuList">
                                    <template v-if="footerTreeMenu1.show === 'T'">
                                        <template v-if="footerTreeMenu1.depth === 2">
                                            <v-col class="footer-tree-menu1 px-0 pt-0 pb-6" :key="'footerTree' + idx">
                                                <p @click="subMenuClick(footerTreeMenu1.path)" class="mb-0">{{ footerTreeMenu1.name }}</p>
                                            </v-col>
                                        </template>
                                    </template>
                                </template>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-row class="mx-0 mt-0 mb-20" style="width: 100%">
                        <template v-for="(footerTreeMenu2, idx) in footerSubTreeMenuList">
                            <v-col class="pa-0" :key="'footerTreeMenu2' + idx">
                                <template v-for="(item, idx2) in footerTreeMenu2">
                                    <p :key="item.id + idx2" class="font-weight-black mb-25p footer-tree-menu2 cursor--pointer" @click="subMenuClick(footerTreeMenu2.path)">{{ item.name }}</p>
                                    <template v-for="(footerTreeMenu3, idx3) in item.footerChildrenMenuList">
                                        <div :key="'footerTreeMenu3' + footerTreeMenu3.id + idx3">
                                            <p
                                                class="footer-tree-menu3 cursor--pointer"
                                                :class="[
                                                    idx2 == footerTreeMenu2.length - 1 && idx3 == item.footerChildrenMenuList.length - 1
                                                        ? 'mb-0'
                                                        : idx3 != item.footerChildrenMenuList.length - 1
                                                        ? 'mb-10p'
                                                        : 'mb-25p',
                                                ]"
                                                @click="subMenuClick(footerTreeMenu3.path)"
                                            >
                                                {{ footerTreeMenu3.name }}
                                            </p>
                                        </div>
                                    </template>
                                </template>
                            </v-col>
                        </template>
                    </v-row>
                    <v-row class="ma-0">
                        <v-col cols="12" class="pa-0 mb-25p">
                            <button class="footer-button bg-black" style="color: #fff">FAQs</button>
                        </v-col>
                        <v-col cols="12" class="pa-0">
                            <button class="footer-button bg-white color-black">Contact</button>
                        </v-col>
                    </v-row>
                </v-row>
            </div>
            <div>
                <v-row class="footer-sub ma-0">
                    <v-col cols="9" class="pa-0">
                        <div class="footer-main-text">
                            <p class="mb-10">DNEURO Inc</p>
                        </div>
                        <div class="footer-sub-text">
                            <p class="mb-25p">〒07801</p>
                            <p class="mb-25p">TEL : 02-6274-0005</p>
                            <p class="mb-25p">
                                Seoul Venture Hub M+ 414, 14 <br />
                                Magokjungang 8-ro,gangseo-gu,Seoul,Republic of Korea
                            </p>
                            <p class="mb-0">Copyright © 2022 DNEURO Inc. All rights reserved.</p>
                        </div>
                    </v-col>
                    <v-col cols="3" class="pa-0 gototop-div">
                        <img :src="img.goToTop" @click="scrollTop" />
                    </v-col>
                </v-row>
            </div>
        </footer>
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import _ from 'lodash';
import store from '@/config/store';
import meta from '@/api/meta';
import magnifyImg from '@/assets/images/magnify-glass.png';
import logoImg from '@/assets/images/logo.png';
import globalImg from '@/assets/images/icon-global.png';
import individualsImg from '@/assets/images/icon_individuals.png';
import hamburgerImg from '@/assets/images/left-hamburger.png';
import mobileHamburgerImg from '@/assets/images/m-hamburger.png';
import arrowDownImg from '@/assets/images/icon_arrow_down_small.png';
import goToTopImg from '@/assets/images/button_gototop.png';

export default Vue.extend({
    data() {
        return {
            test: null,
            img: {
                magnify: magnifyImg,
                logo: logoImg,
                global: globalImg,
                hamburger: hamburgerImg,
                mobileHamburger: mobileHamburgerImg,
                individuals: individualsImg,
                arrowDown: arrowDownImg,
                goToTop: goToTopImg,
            },
            drawer: undefined,
            store,
            selectMenu: {} as any,
            treeMenuList: [],
            footerMenuList: [] as any,
            footerSelectMenu: {} as any,
            subTreeMenuList: {},
            footerSubTreeMenuList: [] as any,
            individualsFlag: false,
            languageFlag: false,
            individuals: {
                selected: null,
            },
            language: {
                selected: null,
            },
            individualsList: null,
            languageList: null,
        };
    },
    computed: {
        name() {
            let name;
            name = '';
            const user = _.cloneDeep(this.$store.state.app.user);
            if (user) {
                name = `${user.firstName + user.lastName} 님`;
            }
            return name;
        },
    },
    watch: {
        individualsFlag: {
            async handler(n) {
                if (n) {
                    this.$store.commit('app/SET_TOP_INDIVIDUALS', n);
                } else if (!n) {
                    this.$store.commit('app/SET_TOP_INDIVIDUALS', n);
                }
            },
        },
        languageFlag: {
            async handler(n) {
                if (n) {
                    this.$store.commit('app/SET_TOP_LANGUAGE', n);
                } else if (!n) {
                    this.$store.commit('app/SET_TOP_LANGUAGE', n);
                }
            },
        },
        'individuals.selected': {
            async handler(n) {
                console.log(n);
            },
        },
        'language.selected': {
            async handler(n) {
                console.log(n);
            },
        },
        '$store.state.app.treeMenuList': {
            async handler(n) {
                const newTreeMenuList = _.cloneDeep(n);
                if (newTreeMenuList !== undefined && newTreeMenuList !== null) {
                    this.treeMenuList = newTreeMenuList;
                } else {
                    this.treeMenuList = (await meta.api.util.menu.getDefaultMenuList()).data.items;
                }
            },
            deep: true,
        },
        '$route.path': {
            handler() {
                this.selectMenu = {};
            },
            deep: true,
        },
        selectMenu(val) {
            const subMenuList = this.treeMenuList.filter((e: any) => e.parentId === val.id && e.show === 'T');

            subMenuList.forEach((x: any) => {
                const childrenMenuList = this.treeMenuList.filter((e: any) => e.parentId === x.id && e.show === 'T');
                x.childrenMenuList = childrenMenuList;
            });

            this.subTreeMenuList = subMenuList;
        },
    },
    methods: {
        scrollTop() {
            window.scrollTo(0, 0);
        },
        async logout() {
            const token = meta.auth.getToken();
            await meta.auth.logout(token);
            this.$router.go(0);
        },
        menuChoose(menu: any, count: any) {
            return menu.childrenCount > count && this.treeMenuList.find((e: any) => e.parentId === menu.id && e.show === 'T') !== undefined;
        },
        subMenuClick(subPath: string) {
            if (subPath) {
                this.$router
                    .push({
                        path: subPath,
                    })
                    .catch(() => {});
            }
        },
        async getCodeList() {
            const languageList = (
                await meta.api.common.code.getCodeList({
                    page: 1,
                    rowSize: 100000000,
                    parentId: 29,
                })
            ).data;
            this.languageList = languageList.items;

            const individualsList = (
                await meta.api.common.code.getCodeList({
                    page: 1,
                    rowSize: 100000000,
                    parentId: 34,
                })
            ).data;
            this.individualsList = individualsList.items;
        },
        async individualsCheck(chk: any) {
            const obj = document.getElementsByName('individuals') as any;

            for (let i = 0; i < obj.length; i += 1) {
                if (obj[i].value === chk) {
                    obj[i].checked = true;
                } else {
                    obj[i].checked = false;
                }
            }
        },
        async languageCheck(chk: any) {
            const obj = document.getElementsByName('language') as any;

            for (let i = 0; i < obj.length; i += 1) {
                if (obj[i].value === chk) {
                    obj[i].checked = true;
                } else {
                    obj[i].checked = false;
                }
            }
        },
        async footerMenu() {
            this.treeMenuList.forEach((x: any) => {
                if (x.show === 'T' && x.depth === 2) {
                    this.footerMenuList.push(x);
                }
            });

            let i = 0;
            for (i = 0; i < this.footerMenuList.length; i += 1) {
                const tmp = this.footerMenuList[i];
                const footerSubTreeMenuList = this.treeMenuList.filter((e: any) => e.parentId === tmp.id && e.show === 'T');

                footerSubTreeMenuList.forEach((x: any) => {
                    const footerChildrenMenuList = this.treeMenuList.filter((e: any) => e.parentId === x.id && e.show === 'T');
                    x.footerChildrenMenuList = footerChildrenMenuList;
                });

                this.footerSubTreeMenuList.push(footerSubTreeMenuList);
            }
        },
    },
    async created() {
        // this.scrollTop();
        this.getCodeList();
        const treeMenuList = _.cloneDeep(this.$store.state.app.treeMenuList);
        if (treeMenuList !== undefined && treeMenuList !== null) {
            this.treeMenuList = treeMenuList;
        } else {
            this.treeMenuList = (await meta.api.util.menu.getDefaultMenuList()).data.items;
        }
        this.footerMenu();
    },
});
</script>

<style scoped>
#mainHeader {
    box-shadow: unset !important;
    z-index: 500;
}

.v-main {
    padding: 103px 0px 0px 0px !important;
}

.logo-img {
    cursor: pointer;
    width: 108px;
    height: 29px;
}

.globalNav {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: absolute;
    left: 0;
    right: 0;
    z-index: 500;
    height: 100%;
}

.globalNav .top-height {
    height: 70px !important;
}
.globalNav .top-bar {
    background-color: #f3f3f3;
    font-weight: bold;
    height: 34px;
}

.globalNav .menu-bar {
    height: 69px;
}

/* .top-bar > div {
    padding: 0px 25px;
} */

.top-bar .border-right {
    border-right: 1px solid black;
}

.top-bar .border-left {
    border-left: 1px solid black;
}

.top-bar .login-btn {
    color: #000;
    text-decoration: none;
}

.top-bar .top-bar-select select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: url('/src/assets/images/icon_arrow_down_small.png') no-repeat 100% 50%;
}

.top-bar .top-bar-select select:focus {
    outline: none;
}

.top-bar .top-bar-select select::-ms-expand {
    display: none;
}

.top-bar .top-bar-select.individual select {
    padding-left: 10px;
    padding-right: 25px;
}

.top-bar .top-bar-select.global select {
    padding-left: 5px;
    padding-right: 15px;
}

.globalNav .pr-150 {
    padding-right: 150px !important;
}

.globalNav .pl-150 {
    padding-left: 150px;
}

.globalNav .weight-800 {
    font-weight: 800;
}

.globalNav .menu-search-box {
    position: relative;
    width: 365px;
}

footer {
    z-index: 1;
    padding: 60px 150px !important;
}

footer .footer-tree-menu1 {
    width: 100% !important;
    font-size: 24px;
    font-weight: 900;
    color: #fff !important;
    border-bottom: 2px solid #fff;
    margin-right: 28px;
    margin-bottom: 40px;
}

footer .footer-tree-menu2 {
    font-size: 21px;
    font-weight: 500;
    color: #fff;
    padding-right: 28px !important;
}

footer .footer-tree-menu3 {
    font-size: 14px;
    font-weight: 300;
    color: #b3b3b3;
    padding-right: 28px !important;
}

footer .footer-main {
    width: 100%;
    max-width: 1920px;
    margin: auto !important;
    padding-bottom: 120px !important;
}

footer .footer-sub {
    padding-top: 120px !important;
    width: 100%;
    max-width: 1920px;
    margin: auto !important;
}

footer .footer-sub .footer-main-text {
    color: #fff;
    font-size: 21px;
    font-weight: 900;
}

footer .footer-sub .footer-sub-text {
    color: #fff;
    font-size: 14px;
    font-weight: 300;
}

footer .footer-button {
    width: 230px;
    height: 48px;
    font-size: 21px;
    font-weight: 900;
    border: 2px solid #fff;
}

footer .gototop-div {
    position: relative;
}

footer .gototop-div img {
    position: absolute;
    bottom: 0;
    right: 0;
    cursor: pointer;
}

.globalNav .menu-search-box .menu-search-box-input {
    width: 100%;
    max-width: 365px;
    height: 32px;
    border: solid 2px #b3b3b3;
    background-color: #ffffff;
    padding-left: 10px;
    background: url('/src/assets/images/magnify-glass.png') no-repeat 100% 50%;
    background-position: right 20px center;
}

.globalNav .menu-card {
    height: 100%;
    background: #fff;
    border-radius: 0px;
}

.globalNav .menu-card.active {
    border-bottom: 5px solid #fd3f01;
    font-weight: 900;
}

.globalNav .b-b1 {
    border-bottom: 1px solid #e8e8e8;
}

.globalNav .rootLink {
    display: inline-block;
    text-align: center;
    height: 24px;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-size: 20px;
    line-height: 24px;
    margin: 0;
    padding: 0 30px;
    color: #000 !important;
    background: #fff;
}

.globalNav .rootLink.active {
    color: #fd3f01 !important;
    font-weight: 900 !important;
}

.globalNav .magnify-icon {
    color: #000000;
}

.globalNav .top-name {
    font-size: 16px;
    color: #000 !important;
    font-weight: bold;
}

.globalNav .logout-btn {
    color: #e65401;
    font-size: 16px;
    font-weight: bold;
}

.globalNav .logout-arrow-btn {
    color: #e65401;
    font-weight: bold;
}

.nav-area {
    width: 71px !important;
    background-color: #080808;
    padding: 28px 10px;
    text-align: center;
}

.nav-area p {
    font-size: 20px;
    -ms-transform: rotate(270deg); /* IE 9 */
    -webkit-transform: rotate(270deg); /* Chrome, Safari, Opera */
    transform: rotate(270deg);
    margin-bottom: 0px;
    margin-top: 36px;
    font-weight: bold;
}

.shadow-menu {
    position: absolute;
    top: 102px;
    background: #fff;
    padding: 60px 0px;
    width: 100%;
    min-height: 250px;
    left: 0;
}

.shadow-menu-down {
    position: absolute;
    top: 102px;
    background: #fff;
    padding: 214px 0px;
    width: 100%;
    min-height: 403px;
    left: 0;
}

main {
    background-color: #fff;
}

.top-individuals {
    background: #e8e8e8;
    width: 100%;
    height: 153px;
    padding-top: 37px;
    z-index: 501;
}

.checkbox-circle .check-icon {
    display: inline-block;
    width: 24px;
    height: 24px;
    background: url(@/assets/images/radio-button-unselected.png) no-repeat;
    padding: 0 0 0 30px;
    vertical-align: middle;
}

.checkbox-circle input[type='checkbox'] {
    display: none;
}

.checkbox-circle input[type='checkbox']:checked + .check-icon {
    background: url(@/assets/images/radio-button-selected.png) no-repeat;
}

@media screen and (max-width: 1500px) {
    .globalNav .menu-search-box {
        width: 250px !important;
    }

    .globalNav .pr-150 {
        padding-right: 40px !important;
    }
}

@media screen and (max-width: 1263px) {
    #mainHeader {
        left: 0px !important;
        box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%) !important;
    }

    .globalNav {
        padding: 10px 20px;
    }

    .v-main {
        padding: 80px 0px 0px 0px !important;
    }

    footer {
        padding: 40px 80px !important;
    }

    footer .footer-main {
        padding: 80px !important;
    }

    footer .footer-sub {
        padding: 80px !important;
    }

    footer .footer-tree-menu1 {
        font-size: 28px;
    }

    footer .footer-tree-menu2 {
        font-size: 20px;
    }

    footer .footer-tree-menu2 {
        font-size: 18px;
    }

    footer .footer-sub .footer-main-text {
        font-size: 18px;
    }
}

@media screen and (max-width: 959px) {
    footer .footer-main {
        padding: 30px !important;
    }

    footer .footer-sub {
        padding: 30px !important;
    }

    footer .footer-tree-menu1 {
        font-size: 20px;
        margin-right: 15px;
        margin-bottom: 25px;
    }

    footer .footer-tree-menu2 {
        font-size: 16px;
        padding-right: 15px !important;
    }

    footer .footer-tree-menu3 {
        font-size: 14px;
        padding-right: 15px !important;
    }

    footer .footer-sub .footer-main-text {
        font-size: 15px;
    }

    footer .footer-sub .footer-sub-text {
        font-size: 12px;
    }

    footer .gototop-div img {
        width: 50px;
    }
}
</style>
