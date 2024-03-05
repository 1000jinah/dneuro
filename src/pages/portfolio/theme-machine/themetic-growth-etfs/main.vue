<template>
    <div class="themetic-growt-etfs">
        <v-row class="top bg-white ma-0">
            <div class="wrapper-1920">
                <v-col cols="12" class="pa-0">
                    <div class="title-line"></div>
                    <p class="menu-title mb-25p">
                        Think Beyond Ordinary
                    </p>
                    <p class="menu-sub2-title mb-25p color-orange font-weight-bold">
                        Themetic Growth ETFs
                    </p>
                    <p class="menu-sub2-title mb-0">
                        Themetic Growth ETFs look beyond traditional geograghic or sector exposures, targeting companies poised to<br>
                        benefit from structural shifts in disruptive technology, people and demographics, and physical environment.
                    </p>
                </v-col>
            </div>
        </v-row>
        <v-row v-if="data.dataTable.checkList[0] != null && scroll.topComparison == true && scroll.topUp == false" class="comparison top-comparison ma-0">
            <div class="wrapper-1920 mb-0">
                <v-col class="pa-0">
                    <v-col cols="12" class="pa-0 mb-9">
                        <v-row class="ma-0">
                            <v-col md="3" cols="12" class="pl-0 py-0 box-area" :class="$vuetify.breakpoint.lgAndDown ? 'pr-3' : 'pr-6'">
                                <div class="box d-table" v-if="data.dataTable.checkList[0] == null">
                                    <div class="pa-0 text-center d-table-cell v-align-middle">
                                        <p class="add-text">Fund 1</p>
                                    </div>
                                </div>
                                <div class="box box-after" v-else>
                                    <p class="comparison-text mb-0">{{data.dataTable.checkList[0].themeAssetName}}</p>
                                    <p class="comparison-text-sub mb-0">{{data.dataTable.checkList[0].assetName}}</p>
                                    <img :src="deleteIconImg" class="delete-icon" @click="checkListDelete(0)"/>
                                </div>
                            </v-col>
                            <v-col md="3" cols="12" class="py-0 box-area" align="center" :class="$vuetify.breakpoint.lgAndDown ? 'px-3' : 'px-6'">
                                <div class="box d-table" v-if="data.dataTable.checkList[1] == null">
                                    <div class="pa-0 text-center d-table-cell v-align-middle">
                                        <p class="add-text">Fund 2</p>
                                    </div>
                                </div>
                                <div class="box box-after text-left" v-else>
                                    <p class="comparison-text mb-0">{{data.dataTable.checkList[1].themeAssetName}}</p>
                                    <p class="comparison-text-sub mb-0">{{data.dataTable.checkList[1].assetName}}</p>
                                    <img :src="deleteIconImg" class="delete-icon" @click="checkListDelete(1)"/>
                                </div>
                            </v-col>
                            <v-col md="3" cols="12" class="pr-0 py-0 box-area" align="right" :class="$vuetify.breakpoint.lgAndDown ? 'pl-3' : 'pl-6'">
                                <div class="box d-table" v-if="data.dataTable.checkList[2] == null">
                                    <div class="pa-0 text-center d-table-cell v-align-middle">
                                        <p class="add-text">Fund 3</p>
                                    </div>
                                </div>
                                <div class="box box-after text-left" v-else>
                                    <p class="comparison-text mb-0">{{data.dataTable.checkList[2].themeAssetName}}</p>
                                    <p class="comparison-text-sub mb-0">{{data.dataTable.checkList[2].assetName}}</p>
                                    <img :src="deleteIconImg" class="delete-icon" @click="checkListDelete(2)"/>
                                </div>
                            </v-col>
                            <v-col md="3" cols="12" class="pa-0 text-right">
                                <div class="h-100 d-flex justify-end align-end">
                                    <button class="search-box-sub-button" @click="compare(data.dataTable.checkList)">Compare</button>
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-col>
                <v-col cols="12" class="pa-0 text-right" @click="scroll.topUp = true">
                    <div class="d-flex justify-center align-center">
                        <p class="ma-0 color-black pr-2">Portfolio Compare</p>
                        <img :src="img.arrowUpImg" />
                    </div>
                </v-col>
            </div>
        </v-row>
        <v-row v-if="data.dataTable.checkList[0] != null && scroll.topComparison == true && scroll.topUp == true" class="ma-0 top-comparison-sub d-flex align-center justify-center">
            <div class="wrapper-1920">
                <v-col cols="12" class="pa-0 text-right" @click="scroll.topUp = false">
                    <div class="d-flex justify-center align-center">
                        <p class="ma-0 color-black pr-2">Portfolio Compare</p>
                        <img :src="img.arrowDownImg" />
                    </div>
                </v-col>
            </div>
        </v-row>
        <v-row class="comparison bg-white ma-0" v-if="data.dataTable.checkList[0] != null && scroll.comparison == 'true' && scroll.topComparison == false">
            <div class="wrapper-1920">
                <v-col cols="12" class="pa-0 pb-8">
                    <v-row class="ma-0">
                        <v-col md="4" cols="12" class="comparison-size pa-0" :class="$vuetify.breakpoint.lgAndDown ? 'pr-3' : 'pr-6'">
                            <div class="box" v-if="data.dataTable.checkList[0] == null">
                                <div class="vertical-center">
                                    <p class="add-text">Fun 1</p>
                                </div>
                            </div>
                            <div class="box box-after" v-else>
                                <div>
                                    <p class="comparison-text mb-0">{{data.dataTable.checkList[0].themeAssetName}}</p>
                                    <p class="comparison-text-sub mb-0">{{data.dataTable.checkList[0].assetName}}</p>
                                    <img :src="deleteIconImg" class="delete-icon" @click="checkListDelete(0)"/>
                                </div>
                            </div>
                        </v-col>
                        <v-col md="4" cols="12" class="comparison-size pa-0 d-flex justify-center" :class="$vuetify.breakpoint.lgAndDown ? 'px-3' : 'px-6'">
                            <div class="box" v-if="data.dataTable.checkList[1] == null">
                                <div class="vertical-center">
                                    <p class="add-text">Fun 2</p>
                                </div>
                            </div>
                            <div class="box" v-else>
                                <div>
                                    <p class="comparison-text mb-0">{{data.dataTable.checkList[1].themeAssetName}}</p>
                                    <p class="comparison-text-sub mb-0">{{data.dataTable.checkList[1].assetName}}</p>
                                    <img :src="deleteIconImg" class="delete-icon" @click="checkListDelete(1)"/>
                                </div>
                            </div>
                        </v-col>
                        <v-col md="4" cols="12" class="comparison-size pa-0 d-flex justify-end" :class="$vuetify.breakpoint.lgAndDown ? 'pl-3' : 'pl-6'">
                            <div class="box" v-if="data.dataTable.checkList[2] == null">
                                <div class="vertical-center">
                                    <p class="add-text">Fun 3</p>
                                </div>
                            </div>
                            <div class="box" v-else>
                                <div>
                                    <p class="comparison-text mb-0">{{data.dataTable.checkList[2].themeAssetName}}</p>
                                    <p class="comparison-text-sub mb-0">{{data.dataTable.checkList[2].assetName}}</p>
                                    <img :src="deleteIconImg" class="delete-icon" @click="checkListDelete(2)"/>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" class="pa-0 text-right">
                    <button class="compare-btn btn-hover-orange" @click="compare(data.dataTable.checkList)">Compare</button>
                </v-col>
            </div>
        </v-row>
        <v-row class="ma-0 d-flex align-center justify-center">
            <div class="wrapper-1920">
                <v-row class="de-comparison ma-0">
                    <v-col cols="12" class="pa-0 text-right" @click="scroll.comparison == 'true' ? scroll.comparison = 'false' : scroll.comparison = 'true'">
                        <div class="d-flex justify-center align-center">
                            <p class="ma-0 color-black pr-2">Portfolio Compare</p>
                            <img :src="scroll.comparison == 'true' ? img.arrowUpImg : img.arrowDownImg" />
                        </div>
                    </v-col>
                </v-row>
            </div>
        </v-row>
        <v-row class="ma-0 bg-white bottom-top" id="bottom">
            <div class="wrapper-1920 button-line">
                <v-row class="ma-0">
                    <v-col class="pa-0">
                        <v-row class="ma-0">
                            <v-col class="pa-0">
                                <p class="ma-0 bottom-title-text color-gray font-size-18">Showing Results ({{data.resultText}})</p>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col class="pa-0">
                        <v-row class="ma-0">
                            <v-col class="pa-0 d-flex justify-end">
                                <p class="ma-0 mr-1 d-flex align-center">Filter</p>
                                <v-select
                                    v-model="data.clickCheck"
                                    class="selectbox-custom pa-0 ma-0"
                                    :items="data.categoryList"
                                    item-text="name"
                                    item-value="value"
                                    @change="selectTheme($event)"
                                ></v-select>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row class="ma-0">
                    <v-col class="pa-0 pt-8 d-flex justify-end" :class="$vuetify.breakpoint.mdAndDown? 'justify-start' : ''">
                        <button class="bottom-title-button mr-5" @click="selectTheme('Disruptive Technology')" :class="data.clickCheck == 'Disruptive Technology' ? 'color-orange' : ''">Disruptive Technology ({{data.count[0]}})</button>
                        <button class="bottom-title-button mr-5" @click="selectTheme('People & Demographics')" :class="data.clickCheck == 'People & Demographics' ? 'color-orange' : ''">People & Demographics ({{data.count[1]}})</button>
                        <button class="bottom-title-button mr-5" @click="selectTheme('Physical Environment')" :class="data.clickCheck == 'Physical Environment' ? 'color-orange' : ''">Physical Environment ({{data.count[2]}})</button>
                        <button class="bottom-title-button" @click="selectTheme()" :class="!data.clickCheck ? 'color-orange' : ''">Show All ({{data.count[3]}})</button>
                    </v-col>
                </v-row>
            </div>
        </v-row>
        <v-row class="bottom bg-white ma-0">
            <div class="wrapper-1920">
                <v-col cols="12" v-for="(item, idx) in data.totalList" :key="item + idx" class="pa-0 category-area">
                    <v-row class="ma-0">
                        <v-col cols="12" class="pb-5 pt-0 pl-0 ma-0 d-flex">
                            <!-- <img class="category-img mr-5" :src="globalThemeImg" /> -->
                            <span class="category-text" v-if="data.title[idx].themeMegaList[0] != null">{{data.title[idx].name}} </span>
                        </v-col>
                        <v-col cols="12" class="pa-0">
                            <template v-for="(mega, idx3) in data.title[idx].themeMegaList">
                                <v-row class="ma-0" style="width:100% !important;">
                                    <div class="pa-0 mr-5" style="max-width:10% !important; display: flex;">
                                        <img :src="data.title[idx].themeImgFileNmList[mega] ? '/api/app/images?subpath=theme-icon&filename=' + data.title[idx].themeImgFileNmList[mega]: ''" class="ma-auto theme-img" />
                                    </div>
                                    <div class="pa-0">
                                        <p class="box-main-text mb-0">{{ data.title[idx].themeMegaListCount[mega] }}</p>
                                        <p class="box-sub-text mb-0" :key="idx3">{{mega}}</p>
                                    </div>
                                </v-row>
                                <v-row class="ma-0 theme-mega-list" style="width: 85% !important;">
                                    <template v-for="(item2, idx2) in item">
                                        <v-col v-if="mega == item2.megaName" md="4" cols="12" class="pa-0">
                                            <v-row class="ma-0">
                                                <v-col
                                                    class="pb-10 pr-0 pl-0 box-padding box-size"
                                                >
                                                    <v-app class="pr-0">
                                                        <v-expansion-panels>
                                                            <v-expansion-panel class="border-a">
                                                                    <label class="checkbox-square" @click="test($event)" style="position: absolute; top:20px; right: 20px; z-index: 10">
                                                                        <input type="checkbox" name="check" v-model="data.dataTable.checkList" :id="idx2" :value="item2">
                                                                        <i class="check-icon"></i>
                                                                    </label>
                                                                <v-expansion-panel-header expand-icon="" class="category-box" id="test">
                                                                    <v-col cols="12" class="pa-0 d-flex">
                                                                        <div style="width: 70%">
                                                                            <p class="category-main-text mb-0 justify-start">
                                                                                {{item2.themeAssetName}}
                                                                            </p>
                                                                        </div>
                                                                    </v-col>
                                                                    <v-col cols="12" class="pa-0 mt-10p d-flex">
                                                                        <div style="width: 50%">
                                                                            <p class="category-sub-text mb-0">
                                                                                {{item2.assetName}}
                                                                            </p>
                                                                        </div>
                                                                        <div style="width: 50%">
                                                                            <figure class="highcharts-figure justify-end d-flex w-100">
                                                                                <div class="chart-size" :id="item2.themeAssetName"></div>
                                                                            </figure>
                                                                        </div>
                                                                    </v-col>
                                                                        <!-- <v-list-item-content class="pt-0 pb-0" style="align-items: baseline !important; align-self: normal; min-width: 80px;">
                                                                            <p class="category-main-text mb-0">
                                                                                {{item2.themeAssetName}}
                                                                            </p>
                                                                            <p class="category-sub-text mb-0">
                                                                                {{item2.assetName}}
                                                                            </p>
                                                                        </v-list-item-content>
                                                                        <figure class="highcharts-figure">
                                                                            <div class="chart-size" :id="item2.themeAssetName"></div>
                                                                        </figure>
                                                                        <div class="checkbox-square input-position">
                                                                            <label class="checkbox-square">
                                                                                <input @click.stop="" type="checkbox" name="check" v-model="data.dataTable.checkList" :id="idx2" :value="item2">
                                                                                <i @click.stop="" class="check-icon"></i>
                                                                            </label>
                                                                        </div> -->

                                                                </v-expansion-panel-header>
                                                                <v-expansion-panel-content>
                                                                    <p class="category-desc ml-0">
                                                                        The Global X MSCI China Energy ETF (CHIE) seeks to <br/>
                                                                        invest in large-, mid-, and small-capitalization segments <br/>
                                                                        of the MSCI China IMI Index that are classified in the <br/>
                                                                        Energy Sector as per the Global Industry Classification <br/>
                                                                        System (GICS)
                                                                    </p>
                                                                    <v-col cols="12" class="pl-0" :class="$vuetify.breakpoint.mdAndDown? 'text-center' : 'text-right'">
                                                                        <button type="button" class="explore-btn">Explore AIQ</button>
                                                                    </v-col>
                                                                </v-expansion-panel-content>
                                                            </v-expansion-panel>
                                                        </v-expansion-panels>
                                                    </v-app>
                                                </v-col>
                                            </v-row>
                                            <!-- <v-row class="ma-0">
                                                <v-col cols="12" class="pa-0 pt-5">
                                                    <div class="font-size-18 see-all cursor--pointer" @click="getThemeList(idx)" :class="[listFlag[idx]?tbdisplay:tdisplay]">SHOW ALL</div>
                                                    <div class="font-size-18 see-all cursor--pointer" @click="getThemeList(idx)" :class="[listFlag[idx]?tdisplay:tbdisplay]">CLOSE</div>
                                                </v-col>
                                            </v-row> -->
                                        </v-col>
                                    </template>
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
<script src="https://code.highcharts.com/highcharts-more.js"></script>
<script src="https://code.highcharts.com/highcharts-3d.js"></script>

<script src="https://code.highcharts.com/modules/pareto.js"></script>
<script src="https://code.highcharts.com/modules/sunburst.js"></script>
<script src="https://code.highcharts.com/modules/drilldown.js"></script>
<script src="https://code.highcharts.com/modules/pattern-fill.js"></script>
<script src="https://code.highcharts.com/modules/series-label.js"></script>

<script src="https://code.highcharts.com/stock/highstock.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="https://code.highcharts.com/modules/export-data.js"></script>
<script src="https://code.highcharts.com/modules/accessibility.js"></script>
<script src="https://code.highcharts.com/modules/data.js"></script>

<script lang="ts">
import Vue from 'vue';
import meta from '@/api/meta';
import store from '@/config/store';

import globalThemeImg from '@/assets/images/global-theme-img1.png';
import deleteIconImg from '@/assets/images/iconDelete.png';
import arrowDownImg from '@/assets/images/icon_arrow_down_small_gray.png';
import arrowUpImg from '@/assets/images/icon_arrow_up_small_gray.png';

import toggleButton from '@/pages/components/toggle-button.vue';
import chartjs from '@/pages/components/chart-components.vue';
import slick from 'vue-slick';
import 'slick-carousel/slick/slick.css';

import Highcharts from 'highcharts';

export default Vue.extend({
    components: {
        toggleButton,
        chartjs,
        slick,
    },
    data() {
        return {
            scroll: {
                check: false,
                targetY: null as any,
                targetWidth: null as any,
                widthSize: null as any,
                topComparison: false,
                topUp: true,
                comparison: false,
            },
            img: {
                arrowDownImg,
                arrowUpImg
            },
            store,
            listFlag: [] as any,
            tdisplay: 'tdisplay',
            tbdisplay: 'tbdisplay',
            globalThemeImg,
            deleteIconImg,
            style: '',
            styles: {
                on: 'ON',
                off: 'OFF',
            },
            search: {
                inputText: null as any,
            },
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
            data: {
                categoryList: [],
                count: [],
                resultText: 'All',
                clickCheck: '',
                categoryId: null,
                categoryIdList: [],
                rowSize: [] as any,
                title: [],
                dataTable:{
                    checkList: [],
                },
                totalList: [],
                disruptiveTechnology: [] as any,
                peopleDemographics: [] as any,
                physicalEnvironment: [] as any,
            },
            languageFlag: null as any,
        };
    },
    watch:{
        '$store.state.app.language':{
            async handler(n) {
                if( n == true ){
                    this.languageFlag = n;
                }else {
                    this.languageFlag = false;
                }
            }
        },
        'data.dataTable.checkList':{
            async handler(n) {
                if(this.data.dataTable.checkList.length > 3) {
                    await meta.alert('3개의 데이터만 선택 가능합니다.');
                    this.data.dataTable.checkList.pop();
                }
            }
        },
        // 'data.categoryId':{
        //     async handler(n) {
        //         var i = 0;
        //         if(n != undefined || n != null){
        //             for(i=0; i<this.data.categoryIdList.length; i++){
        //                 if(this.data.categoryIdList[i] == n){
        //                     this.data.categoryIdList.splice(n)
        //                 }
        //             }
        //             this.data.categoryIdList.push(n);
        //         }
        //     }
        // },
        // 'listFlag':{
        //     async handler(n){
        //         if(n == false){
        //             this.data.totalList = [];
        //             this.data.rowSize = 8;
        //             this.getThemeList();
        //         }else if(n == true){
        //             this.data.totalList = [];
        //             this.data.rowSize = 100000;
        //             this.getThemeList();
        //         }
        //     }
        // }
    },
    methods: {
        test(event) {
            // event.stopPropagation()
        },
        async selectTheme(menu :any){
            console.log(menu)
            if (menu == null || menu == ''){
                this.data.resultText = 'All'
            } else {
                this.data.resultText = menu;
            }
            this.data.clickCheck = menu;
            this.getThemeList();
        },
        async compare(value :any) {
            let i=0,
            id=[];
            for (i = 0; i < value.length; i++) {
                id.push(value[i].assetId);
            }
            this.$router.push({
                path: '/portfolios/compare-portfolios',
                query: {
                    themeList: id,
                },
            });
        },
        async checkListDelete(id: any){
            this.data.dataTable.checkList.splice(id,1);
        },
        async getThemeList(id: any) {
            if(id != null || id != undefined){
                this.data.categoryIdList.push(id);
            }
            this.data.totalList = [];
            this.data.title = [];
            this.data.categoryIdList = [...new Set(this.data.categoryIdList)]
            store.commit("app/SET_LOADING", true);
            const data = (await meta.api.common.themeCategory.getCateList({
                page: 1,
                name: this.data.clickCheck,
                sort: ['id,asc'],
            })).data.items;

            // var z= 0, q=0;
            // for(z=0; z<data.length; z++){
            //     if(id== z && this.listFlag[z] == false){
            //         this.listFlag.splice(id, 1, true);
            //         this.data.rowSize.splice(id, 1, 100000);
            //     }else if(id== z && this.listFlag[z] == true){
            //         this.listFlag.splice(id, 1, false);
            //         this.data.rowSize.splice(id, 1, 10);
            //     }
            // }
            // this.data.categoryIdList = [];

            let j = 0;
            for( j=0; j<data.length; j++){
                const count = (await meta.api.common.themeCategory.getThemeCountList({
                    page: 1,
                    id: data[j].id,
                    code: data[j].code,
                    name: this.data.clickCheck,
                    searchText : this.search.inputText,
                    sort: ['id,asc'],
                })).data;
                this.data.title.push(count);
            }

            let i = 0;
            for( i=0; i<data.length; i++){
                const list = (await meta.api.common.themeCategory.getThemeCategoryList({
                    page: 1,
                    rowSize: 1000000,
                    id: data[i].id,
                    name: this.data.clickCheck,
                    searchText : this.search.inputText,
                    sort: ['id,asc'],
                })).data.items;
                this.data.totalList.push(list);

            }

            let x  = 0, total = null;
            for ( x = 0; x < this.data.totalList.length; x++) {
                this.data.count.push(this.data.totalList[x].length);
                this.data.categoryList.push({name: data[x].name + ' (' + this.data.totalList[x].length + ')', value: data[x].name});
                total += this.data.totalList[x].length;
            }
            this.data.count.push(total);
            this.data.categoryList.push({name: 'Show All (' + total + ')', value: ''});
            console.log(this.data.categoryList);
            console.log(this.data.totalList);

            // Line 차트
            let self = this;
            this.$nextTick(async function() {
                await self.setChart();
            });
            store.commit("app/SET_LOADING", false);
        },
        async setChart() {
            let i = 0, j = 0;
            for(i = 0; i < this.data.totalList.length; i++){
                for(j=0; j<this.data.totalList[i].length; j++){
                    var closeList = this.data.totalList[i][Object.keys(this.data.totalList[i])[j]].close.split(",").map(Number);

                    Highcharts.chart(this.data.totalList[i][Object.keys(this.data.totalList[i])[j]].themeAssetName, {
                        chart: {
                            marginRight: 60,
                            color: '#ff754b',
                            verticalAlign: 'middle',
                        },
                        legend:{ enabled:false },
                        exporting: { // 상단 context menu 제거
                            enabled: false
                        },
                        title: {
                            text: ''
                        },
                        credits: { enabled: false },
                        yAxis: {
                            min: this.data.totalList[i][Object.keys(this.data.totalList[i])[j]].minClose,
                            max: this.data.totalList[i][Object.keys(this.data.totalList[i])[j]].maxClose,
                            startOnTick: false, //하단 필요없는값 제거
                            endOnTick: false, //상단 필요없는값 제거
                            tickWidth: 0, //기준선 삭제
                            gridLineWidth: 0, //기준선 삭제
                            plotLines: [{ // 기준선 추가
                                color: 'black',
                                dashStyle: 'dot',
                                value: this.data.totalList[i][Object.keys(this.data.totalList[i])[j]].avgClose,
                                label: {
                                    align: 'right',
                                    verticalAlign: 'middle',
                                    style: {
                                        color: '#ff754b',
                                        fontSize: '13',
                                        fontWeight: 'bold',
                                    },
                                    text: this.data.totalList[i][Object.keys(this.data.totalList[i])[j]].rate.toFixed(1)+'%',
                                    x: 50,
                                    y: 5,
                                },
                                zIndex: 3
                            }],
                            title: {
                                text: ''
                            },
                            labels: {
                                enabled: false // 왼쪽 부제목 삭제
                            },
                        },

                        xAxis: {
                            lineColor: 'transparent', //하단 바닥부분 기준선 삭제
                            tickWidth: 0, //기준선 삭제
                            gridLineWidth: 0, //기준선 삭제
                            accessibility: {
                                rangeDescription: 'Range: 2010 to 2017'
                            },
                            labels: {
                                enabled: false // 왼쪽 부제목 삭제
                            },
                        },
                        plotOptions: {
                            series: {
                                enableMouseTracking: false,
                                marker: {
                                    enabled: false
                                }
                            }
                        },

                        series: [{
                            color: '#ff754b',
                            name: this.data.totalList[i][Object.keys(this.data.totalList[i])[j]].themeAssetName,
                            data: closeList,
                        }],

                    });
                }
            }
        },
        async middleBottomPosition() {
            const target = document.getElementById('bottom') as any;
            this.scroll.widthSize = null as any;
            this.scroll.targetY = target.getBoundingClientRect().y as any;
            this.scroll.targetWidth = document.documentElement.scrollWidth as any;
            if (this.scroll.targetWidth >= 1263) {
                this.scroll.widthSize = 100;
            } else if (this.scroll.targetWidth <= 1263) {
                this.scroll.widthSize = 73;
            } else if (this.scroll.targetWidth <= 959) {
                this.scroll.widthSize = 46;
            }

            if (this.scroll.targetY <= this.scroll.widthSize) {
                this.scroll.topComparison = true;
            } else {
                this.scroll.topComparison = false;
            }
        },
    },
    created: function() {
        this.getThemeList()
    },
    mounted() {
        var k=0;
        for(k=0; k<3; k++){
            this.listFlag[k] = false;
            this.data.rowSize[k] = 10;
        }
        window.addEventListener('scroll', () => {
            this.middleBottomPosition();
        });
    }
});
</script>

<style>
.themetic-growt-etfs .v-application--wrap {
    min-height: unset;
}

.themetic-growt-etfs .border-tr {
    border-top: 1px solid #000;
    border-right: 1px solid #000;
}

.themetic-growt-etfs .border-t{
    border-top: 1px solid #000;;
}

.themetic-growt-etfs .border-b{
    border-bottom: 1px solid #000;
}

.themetic-growt-etfs .border-a{
    border-radius: 1px;
    border: 1px solid #000;
}

.themetic-growt-etfs .menu-title {
    font-size: 64px !important;
    font-weight: 900;
    color: #000;
}

.themetic-growt-etfs .menu-sub2-title {
    font-size: 24px !important;
    font-weight: normal;
    color: #000;
}

.themetic-growt-etfs .top {
    width: 100%;
    padding: 120px 150px;
    background-color: #fff;
}

.themetic-growt-etfs .top .title-line {
    width: 72px;
    height: 12px;
    margin-bottom: 25px;
    background-color: #e65401;
}

.themetic-growt-etfs .mdi-arrow-right::before {
    font-weight: 900;
}

.themetic-growt-etfs .comparison .comparison-text{
    padding: 0px 0px 14px 0px !important;
    font-size: 21px !important;
    font-weight: bold;
    color: #b3b3b3;
    line-height: normal;
}

.themetic-growt-etfs .comparison .comparison-text-sub{
    padding: 0px !important;
    font-weight: bold;
    font-size: 24px !important;
}

.themetic-growt-etfs .comparison .compare-btn {
    text-align: center;
    background-color: #000000;
    color: #FFFFFF;
    width: 196px;
    height: 48px;
    font-size: 21px;
    font-weight: 800;
}

.themetic-growt-etfs .comparison .compare-bottom {
    position: absolute;
    bottom: 0;
    width: 100%;
}

.themetic-growt-etfs .comparison .box {
    width: 100%;
    max-width: 508px;
    height: 157px;
    position: relative;
    border: 2px solid #e8e8e8;
    background-color: #f3f3f3;
    padding: 25px 20px;
}

.themetic-growt-etfs .box.box-after {
    border: 1px solid #000 !important;
    background-color: #fff !important;
}

.themetic-growt-etfs .box-div {
    position: absolute;
    bottom: 0;
    width: 100%;
    font-weight: bold;
}

.themetic-growt-etfs .bottom {
    width: 100%;
    padding: 0px 150px;
    background-color: #fff;
}

.themetic-growt-etfs .bottom .category-main-text{
    font-size: 36px;
    font-weight: bold;
    color: #000000;
    margin-bottom: 0px !important;
    display:-webkit-box;
    -webkit-line-clamp:1;
    -webkit-box-orient:vertical;
    width:200px;
    height:40px;
    overflow:hidden;
    text-overflow:ellipsis;
}

.themetic-growt-etfs .bottom .box-main-text{
    font-size: 36px;
    font-weight: 800;
    color: #000;
    margin-bottom: 0px !important;
}

.themetic-growt-etfs .bottom .box-sub-text{
    font-size: 21px;
    font-weight: 700;
    color: #fd3f01

;
}

.themetic-growt-etfs .bottom .category-sub-text{
    font-size: 18px;
    color: #000;
    display:-webkit-box;
    -webkit-line-clamp:4;
    -webkit-box-orient:vertical;
    overflow:hidden;
    text-overflow:ellipsis;
}

.themetic-growt-etfs .bottom .category-text {
    font-size: 48px;
    color: #000;
    font-weight: 900;
    padding: 80px 0px;
}

.themetic-growt-etfs .bottom .category-img {
    width: 40px;
    height: 40px;
}

.themetic-growt-etfs .bottom .category-desc {
    font-size: 21px;
    color: #000;
    font-weight: 300;
}

.themetic-growt-etfs .bottom .category-area {
    margin-bottom: 87px;
}

.themetic-growt-etfs .bottom .category-area .category-box {
    width: 100%;
    min-height: 140px;
    max-height: 150px;
    position: relative;
    display: inline-block;
    padding: 20px !important
}

.themetic-growt-etfs .bottom .category-area .explore-btn {
    width: 230px;
    height: 48px;
    border: 2px solid #000;
    background-color: #fff;
    font-weight: bold;
    color: #000;
    font-size: 20px;
}

.themetic-growt-etfs .bottom .category-area .v-expansion-panel-content__wrap {
    padding: 25px !important;
}

.themetic-growt-etfs .chart-size{
    min-width: 150px;
    max-width: 200px;
    height: 65px !important;
}

.themetic-growt-etfs .v-list-item__subtitle, .v-list-item__title {
    white-space: normal;
    text-overflow: ellipsis;
    width:100%;
}

.themetic-growt-etfs .v-application .primary--text {
    color: #e65401 !important;
}

.themetic-growt-etfs .v-application .accent--text {
    color: #000 !important;
}

.themetic-growt-etfs .v-rating .v-icon {
    font-size: 18px;
    padding: 0rem;
}

.themetic-growt-etfs .mdi-checkbox-blank-circle-outline::before {
    content: "\F0130";
    color: #e8e8e8;
    background-color: #e8e8e8;
    border-radius: 10px;
    font-size: 16px;
    margin-right: 2px;
}

.themetic-growt-etfs .add-text {
    font-size: 24px;
    color: #c4c4c4;
    margin-bottom: 0px !important;
}

.themetic-growt-etfs .v-expansion-panel:before {
    box-shadow: none;
}

.themetic-growt-etfs .tdisplay {
    display:'';
}

.themetic-growt-etfs .tbdisplay {
    display:none;
}

.themetic-growt-etfs .see-all {
    width:100%;
    height:35px;
    text-align:center;
    color:#e65401;
}

.themetic-growt-etfs .input-position {
    position: absolute;
    top: 0px;
    right: 0px;
}

.themetic-growt-etfs .delete-icon {
    cursor: pointer;
    position: absolute;
    top: 24px;
    right: 20px;
}

.themetic-growt-etfs .highcharts-figure {
    margin-right: 15px;
    padding: 0px auto !important;
}

.themetic-growt-etfs .bottom .category-area .checkbox-square {
    position: absolute;
    top:20px;
    right: 20px;
    z-index: 10;
}

.themetic-growt-etfs .bottom .category-area .checkbox-square .check-icon {
    display: inline-block;
    width: 23px;
    height: 23px;
    background: url(@/assets/images/checkbox-unselected.png)no-repeat;
    vertical-align: middle;
}

.themetic-growt-etfs .bottom .category-area .checkbox-square input[type="checkbox"] {
    display: none;
}

.themetic-growt-etfs .bottom .category-area .checkbox-square input[type="checkbox"]:checked + .check-icon {
    background: url(@/assets/images/checkbox-selected.png)no-repeat;
}

.themetic-growt-etfs .bottom .box-size{
    flex: 0 0 100%;
    max-width: 100%;
}

.themetic-growt-etfs .bottom .theme-mega-list > div:nth-child(3n+1) {
    padding-right: 15px !important;
}

.themetic-growt-etfs .bottom .theme-mega-list > div:nth-child(3n+2) {
    padding-left: 10px !important;
    padding-right: 10px !important;
}

.themetic-growt-etfs .bottom .theme-mega-list > div:nth-child(3n+3) {
    padding-left: 15px !important;
}

.themetic-growt-etfs .bottom .bottom-title-text{
    color: #808080;
    font-size: 21px;
}

.themetic-growt-etfs .bottom-top .bottom-title-button{
    border: 1px solid #e8e8e8;
    background: #f3f3f3;
    min-height: 36px;
    color: #b3b3b3;
    font-size: 18px;
    padding: 0px 10px !important;
    /* white-space: nowrap; */
}

.themetic-growt-etfs .bottom-top .button-line{
    padding: 40px 150px 0px 150px !important;
}

.themetic-growt-etfs .bottom-top {
}

.themetic-growt-etfs .bg-black-font-white {
    background: #000 !important;
    color: #fff !important;
}

.themetic-growt-etfs .justify-start {
    justify-content: start !important;
}

.themetic-growt-etfs .theme-img {
    max-width: 65px !important;
    max-height: 65px !important;
}

.themetic-growt-etfs .comparison {
    padding: 60px 150px 30px 150px;
    min-height: 300px;
    background-color: #f3f3f3;
    border-top: 1px solid #b3b3b3;
}

.themetic-growt-etfs .top-comparison {
    width: 100%;
    min-height: 280px;
    background-color: #f3f3f3;
    position: fixed;
    padding: 60px 150px 0px 150px !important;
    border-bottom: 1px solid #e8e8e8 !important;
    top: 103px;
    left: 0;
    right: 0;
    z-index: 400;
}

.themetic-growt-etfs .top-comparison-sub {
    width: 100%;
    min-height: 30px;
    background-color: #f3f3f3;
    position: fixed;
    border-bottom: 2px solid #e8e8e8;
    top: 103px;
    left: 0;
    right: 0;
    z-index: 400;
}

.themetic-growt-etfs .search-box-sub-button {
    text-align: center;
    background-color: #000000;
    color: #ffffff;
    width: 196px;
    height: 48px;
    font-size: 21px;
    font-weight: bold;
}

.themetic-growt-etfs .de-comparison {
    max-height: 40px !important;
    padding: 10px 0px 10px 0px imporant !important;
    background: #f3f3f3 !important;
    border-bottom: 1px solid #b3b3b3 !important;
}

.themetic-growt-etfs .selectbox-custom.v-text-field {
    max-width: 300px;
    font-weight: 800;
}

.themetic-growt-etfs .selectbox-custom .v-select__selection--comma {
    margin: 7px 4px 7px 5px !important;
}

.themetic-growt-etfs .selectbox-custom.v-text-field>.v-input__control>.v-input__slot:before {
    border-style: none;
}

.themetic-growt-etfs .selectbox-custom.v-text-field>.v-input__control>.v-input__slot::after {
    border-style: none;
}

.themetic-growt-etfs .selectbox-custom.v-text-field>.v-input__control>.v-input__slot {
    margin: 0px !important;
}

.themetic-growt-etfs .selectbox-custom .v-select>.v-input__control>.v-input__slot {
    margin: 0px !important;
}

.themetic-growt-etfs .selectbox-custom .v-text-field__details {
    display: none !important;
}

@media screen and (max-width: 1263px) {
    .themetic-growt-etfs .top {
        height: auto;
        padding: 70px 90px;
    }

    .themetic-growt-etfs .menu-title-line {
        width: 60px;
        height: 11px;
        margin-bottom: 13px;
    }

    .themetic-growt-etfs .menu-title {
        font-size: 54px !important;
        height: 67px;
        line-height: 1.09;
    }

    .themetic-growt-etfs .menu-sub2-title {
        font-size: 20px !important;
    }

    .themetic-growt-etfs .sub-text {
        font-size: 22px;
    }

    .themetic-growt-etfs #search-box {
        width: 100%;
        height: 43px;
    }

    .themetic-growt-etfs .input-div {
        width: 100%;
        height: 43px;
    }

    .themetic-growt-etfs #search-box button{
        width: 136px;
        height: 30px;
        right: 18px;
        top: 19px;
        font-size: 18px;
    }

    .themetic-growt-etfs .search-box-sub-button{
        width: 157px;
        height: 37px;
        font-size: 18px;
    }

    .themetic-growt-etfs .box-div {
        height: 37px;
        font-size: 12px;
    }

    .themetic-growt-etfs .box {
        margin: auto;
    }

    .themetic-growt-etfs .comparison .comparison-text{
        font-size: 17px !important;
    }

    .themetic-growt-etfs .comparison .comparison-text-sub{
        font-size: 20px !important;
    }

    .themetic-growt-etfs .comparison .compare-btn {
        width: 176px;
        height: 40px;
        font-size: 18px;
    }

    .themetic-growt-etfs .bottom .box-main-text{
        font-size: 32px;
    }

    .themetic-growt-etfs .bottom .box-sub-text{
        font-size: 19px;
    }

    .themetic-growt-etfs .add-text {
        font-size: 18px;
    }

    .themetic-growt-etfs .bottom .category-text {
        padding: 40px 0px !important;
        font-size: 40px;
    }

    .themetic-growt-etfs .bottom .category-main-text{
        font-size: 31px;
    }

    .themetic-growt-etfs .bottom .category-sub-text{
        font-size: 16px;
    }

    .themetic-growt-etfs .box-div {
        height:37px;
        font-size:12px;
    }

    .themetic-growt-etfs .bottom{
        width: 100%;
        padding: 0px 80px;
    }

    .themetic-growt-etfs .v-rating .v-icon {
        padding: 1px;
        border-radius: 50%;
    }

    .themetic-growt-etfs .chart-size{
        min-width: 100px;
        max-width: 150px;
    }

    .themetic-growt-etfs .wrap-text {
        font-size: 1.125rem;
    }

    .themetic-growt-etfs .comparison{
        padding: 40px 80px !important;
        background-color: #e8e8e8;
    }

    .themetic-growt-etfs .top-comparison{
        padding: 40px 80px 0px 80px !important;
        top: 80px;
    }

    .themetic-growt-etfs .top-comparison-sub {
        top: 80px;
    }

    .themetic-growt-etfs .bottom .bottom-title-text{
        font-size: 17px;
    }

    .themetic-growt-etfs .bottom-top .bottom-title-button{
        font-size: 17px;
    }

    .themetic-growt-etfs .bottom-top .button-line{
        padding: 20px 80px 0px 80px !important;
    }
}

@media screen and (max-width: 959px) {
    .themetic-growt-etfs .top {
        height: auto;
        padding: 20px 50px;
    }

    .themetic-growt-etfs .menu-title-line {
        width: 50px;
        height: 10px;
        background-color: #fd3f01;
        margin-bottom: 10px;
    }

    .themetic-growt-etfs .menu-title {
        font-size: 30px !important;
        height: 57px;
        line-height: 1.09;
    }

    .themetic-growt-etfs .menu-sub2-title {
        font-size: 15px !important;
    }

    .themetic-growt-etfs .sub-text {
        font-size: 15px;
    }

    .themetic-growt-etfs #search-box {
        width: 100%;
        height: 36px;
    }

    .themetic-growt-etfs .input-div {
        width: 100%;
        height: 36px;
    }

    .themetic-growt-etfs #search-box button{
        width: 136px;
        height: 21px;
        right: 18px;
        top: 19px;
        font-size: 15px;
    }

    .themetic-growt-etfs .comparison{
        padding: 20px;
    }

    .themetic-growt-etfs .box-div {
        height: 30px;
        font-size: 10px;
    }

    .themetic-growt-etfs .comparison .comparison-text{
        font-size: 14px !important;
    }

    .themetic-growt-etfs .comparison .comparison-text-sub{
        font-size: 17px !important;
        max-height: 40px;
    }

    .themetic-growt-etfs .bottom .box-main-text{
        font-size: 28px;
    }

    .themetic-growt-etfs .bottom .box-sub-text{
        font-size: 17px;
    }

    .themetic-growt-etfs .bottom .category-text {
        padding: 20px 0px !important;
        font-size: 30px;
    }

    .themetic-growt-etfs .bottom .category-main-text {
        font-size: 26px;
    }

    .themetic-growt-etfs .bottom .category-sub-text{
        font-size: 14px;
    }

    .themetic-growt-etfs .box-div {
        height:30px;
        font-size:10px;
    }

    .themetic-growt-etfs .bottom{
        width: 100%;
        padding: 0px 40px;
    }

    .themetic-growt-etfs .v-rating .v-icon {
        padding: 0.5px;
        border-radius: 50%;
    }

    .themetic-growt-etfs .add-text {
        font-size: 14px;
    }

    .themetic-growt-etfs .comparison .compare-btn {
        width: 150px;
        height: 30px;
        font-size: 15px;
    }

    .themetic-growt-etfs .v-list-item {
        display: block;
    }

    .themetic-growt-etfs .search-box-sub-button{
        width: 110px;
        height: 25px;
        font-size: 14px;
        margin-top: 20px;
    }

    .themetic-growt-etfs .chart-size{
        min-width: 150px;
    }

    .themetic-growt-etfs .item-box {
        height: 200px;
    }

    .themetic-growt-etfs .wrap-text {
        font-size: 0.9375rem;
    }

    .themetic-growt-etfs .bottom .box-size{
        flex: 100%;
        min-width: 100%;
        padding: 10px 0px 15px 0px !important;
    }

    .themetic-growt-etfs .comparison .box {
        width: 100%;
        min-height: 170px;
    }

    .themetic-growt-etfs .bottom .category-area .category-box {
        max-height: 200px;
        padding: 15px !important
    }

    .themetic-growt-etfs .comparison .comparison-size:nth-child(1) {
        margin-bottom: 10px;
        padding: 0px !important;
    }

    .themetic-growt-etfs .comparison .comparison-size:nth-child(2) {
        margin-bottom: 10px;
        padding: 0px !important;
    }

    .themetic-growt-etfs .comparison .comparison-size:nth-child(3) {
        padding: 0px !important;
    }

    .themetic-growt-etfs .bottom .theme-mega-list > div:nth-child(3n+1) {
        padding-right: 0px !important;
    }

    .themetic-growt-etfs .bottom .theme-mega-list > div:nth-child(3n+2) {
        padding-left: 0px !important;
        padding-right: 0px !important;
    }

    .themetic-growt-etfs .bottom .theme-mega-list > div:nth-child(3n+3) {
        padding-left: 0px !important;
    }

    .themetic-growt-etfs .bottom .bottom-title-text{
        font-size: 15px;
    }

    .themetic-growt-etfs .bottom-top .bottom-title-button{
        font-size: 15px;
        padding: 0px 5px !important;
        margin-right: 10px !important;
        justify-content: start !important;
    }

    .themetic-growt-etfs .theme-img {
        max-width: 40px !important;
        max-height: 40px !important;
    }

    .themetic-growt-etfs .box-area:nth-child(1) {
        margin-bottom: 10px;
        padding: 0px !important;
    }

    .themetic-growt-etfs .box-area:nth-child(2) {
        margin-bottom: 10px;
        padding: 0px !important;
    }

    .themetic-growt-etfs .box-area:nth-child(3) {
        padding: 0px !important;
    }

    .themetic-growt-etfs .top-comparison{
        padding: 20px 20px 0px 20px !important;
    }

    .themetic-growt-etfs .bottom-top .button-line{
        padding: 10px 20px 0px 10px !important;
    }
}

</style>
