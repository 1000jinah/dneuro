<template>
    <div class="all-portfolio">
        <v-row class="top ma-0 bg-white">
            <div class="wrapper-1920">
                <v-col cols="12" class="pa-0">
                    <div class="menu-title-line"></div>
                    <p class="menu-title mb-0">Investment Portfolios</p>
                </v-col>
            </div>
        </v-row>
        <v-row class="middle-line ma-0">
            <div class="wrapper-1920">
                <v-row class="ma-0">
                    <v-col md="8" cols="12" class="pa-0">
                        <v-tabs class="ai-tabs" v-model="data.tabValue - 1" show-arrows>
                            <v-tab v-for="tab of tabs" :value="tab.value" :key="tab.value" class="ai-tab" @click="tabChange(tab.value)">
                                {{ tab.name }}
                            </v-tab>
                        </v-tabs>
                    </v-col>
                    <v-col class="text-right d-table pa-0" v-if="$vuetify.breakpoint.mdAndUp">
                        <template v-if="$vuetify.breakpoint.lgAndUp">
                            <div class="d-table-cell v-align-middle cursor--pointer">
                                <span class="sub-text" @click="reportProduct()"> Download All Products List </span>
                                <img :src="img.downloadImg" @click="reportProduct()" />
                                <span class="sub-text pl-3 cursor--pointer" @click="checkReset()"> Reset All </span>
                                <img :src="img.resetImg" style="vertical-align: sub" @click="checkReset()" />
                            </div>
                        </template>
                        <template v-else>
                            <div class="d-table-cell v-align-middle">
                                <div class="cursor--pointer">
                                    <span class="sub-text" @click="reportProduct()"> Download All Products List </span>
                                    <img :src="img.downloadImg" />
                                </div>
                                <div class="cursor--pointer">
                                    <span class="sub-text pl-3 cursor--pointer" @click="checkReset()"> Reset All </span>
                                    <img :src="img.resetImg" style="vertical-align: sub" />
                                </div>
                            </div>
                        </template>
                    </v-col>
                </v-row>
            </div>
        </v-row>
        <v-row class="middle ma-0" id="middle">
            <div class="wrapper-1920">
                <v-col cols="12" class="pa-0" :class="!$vuetify.breakpoint.mdAndUp ? 'mb-4' : 'mb-10'">
                    <v-row class="ma-0">
                        <v-col cols="3" md="2" class="pa-0">
                            <p class="menu-sub-title mb-0">FILTERS</p>
                        </v-col>
                        <v-col cols="9" md="10" class="font-weight-bold pa-0">
                            <v-row class="ma-0">
                                <v-col cols="6" md="3" class="pa-0" :class="!$vuetify.breakpoint.mdAndUp ? 'mb-3' : ''">
                                    <custom-select-component
                                        :options="data.filtersList.assetClass"
                                        @input="changeAssetClass"
                                        areaClass="search-area"
                                        selectClass="search-select"
                                        itemsClass="search-items"
                                    >
                                    </custom-select-component>
                                    <!--
                                        <v-select outlined height="36" :items="data.filtersList.assetClass" item-text="description" item-value="value" v-model="search.assetClass" class="pa-0 ma-0">
                                        </v-select>
                                    -->
                                    <!-- <select name="select-box-1" class="selectbox" v-model="search.assetClass">
                                        <option value="">Asset Class</option>
                                        <template v-for="(assetClass, idx) in data.filtersList.assetClass">
                                            <option style="margin-left: 20px" :key="idx" :value="assetClass.value">{{ assetClass.name }}</option>
                                        </template>
                                    </select> -->
                                </v-col>
                                <v-col cols="6" md="3" class="pr-0 py-0 pl-5" :class="!$vuetify.breakpoint.mdAndUp ? 'mb-3' : ''">
                                    <custom-select-component
                                        :options="data.filtersList.assetType"
                                        @input="changeAssetType"
                                        areaClass="search-area"
                                        selectClass="search-select"
                                        itemsClass="search-items"
                                    >
                                    </custom-select-component>
                                </v-col>
                                <v-col cols="6" md="3" class="pr-0 py-0" :class="!$vuetify.breakpoint.mdAndUp ? 'pl-0' : 'pl-5'">
                                    <custom-select-component
                                        :options="data.filtersList.riskLevel"
                                        @input="changeRiskLevel"
                                        areaClass="search-area"
                                        selectClass="search-select"
                                        itemsClass="search-items"
                                    >
                                    </custom-select-component>
                                </v-col>
                                <v-col cols="6" md="3" class="pr-0 py-0 pl-5">
                                    <custom-select-component :options="data.filtersList.sectorList" @input="changeSector" areaClass="search-area" selectClass="search-select" itemsClass="search-items">
                                    </custom-select-component>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" class="pa-0" :class="$vuetify.breakpoint.mdAndDown ? 'mb-4' : 'mb-10'">
                    <v-row class="ma-0">
                        <v-col cols="3" md="2" class="pa-0">
                            <p class="menu-sub-title mb-0">EXPOSURE</p>
                        </v-col>
                        <v-col cols="9" md="10" class="pa-0">
                            <label style="padding-right: 21px" class="checkbox-circle">
                                <input class="vertical-start" type="radio" name="exposure" value="exposureD" v-model="search.exposure" checked />
                                <i class="check-icon"></i>
                                <span class="menu-sub-title-text">Domestic</span>
                            </label>
                            <label class="checkbox-circle">
                                <input type="radio" name="exposure2" value="exposureO" v-model="search.exposure" />
                                <i class="check-icon"></i>
                                <span class="menu-sub-title-text">Overseas</span>
                            </label>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" class="pa-0">
                    <v-row class="ma-0">
                        <v-col cols="3" md="2" class="pa-0">
                            <p class="menu-sub-title mb-0">SEARCH</p>
                        </v-col>
                        <v-col cols="9" md="10" class="inputDiv pa-0">
                            <input type="text" id="search-box" name="search-box-1" v-model="search.inputText" @keyup.enter="aiPortfolioList()" />
                            <img :src="img.searchImg" style="cursor: pointer" @click="aiPortfolioList()" />
                        </v-col>
                    </v-row>
                </v-col>
            </div>
        </v-row>
        <v-row v-if="data.dataTable.checkList[0] != null && scroll.topComparison == true && scroll.topUp == false" class="top-comparison ma-0">
            <div class="wrapper-1920">
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
                                    <div class="mb-2">
                                        <p class="comparison-text-sub mb-0">{{ data.dataTable.checkList[0].strategyCategoryCode }}</p>
                                        <img :src="deleteIconImg" class="delete-icon" @click="checkListDelete(0)" />
                                    </div>
                                    <div class="mb-2">
                                        <p class="comparison-text mb-0">{{ data.dataTable.checkList[0].strategyName }}</p>
                                    </div>
                                    <div>
                                        <!-- <v-col cols="6" lg="2" class="pa-0 d-table border-tr">
                                                <p class="mb-0 d-table-cell v-align-middle text-center">{{ data.dataTable.checkList[0].market }}</p>
                                            </v-col>
                                            <v-col cols="6" lg="2" class="pa-0 d-table" :class="$vuetify.breakpoint.mdAndDown ? 'border-t' : 'border-tr'">
                                                <p class="mb-0 d-table-cell v-align-middle text-center">{{ data.dataTable.checkList[0].assetClass }}</p>
                                            </v-col> -->
                                        <div class="pa-0 d-table text-center">
                                            <v-rating
                                                full-icon="mdi-checkbox-blank-circle"
                                                empty-icon="mdi-checkbox-blank-circle-outline"
                                                readonly
                                                icon-label="custom icon label text {0} of {1}"
                                                class="d-table-cell v-align-middle"
                                                :value="data.dataTable.checkList[0].riskLevel"
                                            ></v-rating>
                                        </div>
                                    </div>
                                </div>
                            </v-col>
                            <v-col md="3" cols="12" class="py-0 box-area" align="center" :class="$vuetify.breakpoint.lgAndDown ? 'px-3' : 'px-6'">
                                <div class="box d-table" v-if="data.dataTable.checkList[1] == null">
                                    <div class="pa-0 text-center d-table-cell v-align-middle">
                                        <p class="add-text">Fund 2</p>
                                    </div>
                                </div>
                                <div class="box box-after text-left" v-else>
                                    <div class="mb-2">
                                        <p class="comparison-text-sub mb-0">{{ data.dataTable.checkList[1].strategyCategoryCode }}</p>
                                        <img :src="deleteIconImg" class="delete-icon" @click="checkListDelete(1)" />
                                    </div>
                                    <div class="mb-2">
                                        <p class="comparison-text mb-0">{{ data.dataTable.checkList[1].strategyName }}</p>
                                    </div>
                                    <div>
                                        <!-- <v-col cols="6" lg="2" class="pa-0 d-table border-tr">
                                                <p class="mb-0 d-table-cell v-align-middle text-center">{{ data.dataTable.checkList[1].market }}</p>
                                            </v-col>
                                            <v-col cols="6" lg="2" class="pa-0 d-table" :class="$vuetify.breakpoint.mdAndDown ? 'border-t' : 'border-tr'">
                                                <p class="mb-0 d-table-cell v-align-middle text-center">{{ data.dataTable.checkList[1].assetClass }}</p>
                                            </v-col> -->
                                        <div class="pa-0 d-table text-center">
                                            <v-rating
                                                full-icon="mdi-checkbox-blank-circle"
                                                empty-icon="mdi-checkbox-blank-circle-outline"
                                                readonly
                                                icon-label="custom icon label text {0} of {1}"
                                                class="d-table-cell v-align-middle"
                                                :value="data.dataTable.checkList[1].riskLevel"
                                            ></v-rating>
                                        </div>
                                    </div>
                                </div>
                            </v-col>
                            <v-col md="3" cols="12" class="pr-0 py-0 box-area" align="right" :class="$vuetify.breakpoint.lgAndDown ? 'pl-3' : 'pl-6'">
                                <div class="box d-table" v-if="data.dataTable.checkList[2] == null">
                                    <div class="pa-0 text-center d-table-cell v-align-middle">
                                        <p class="add-text">Fund 3</p>
                                    </div>
                                </div>
                                <div class="box box-after text-left" v-else>
                                    <div class="mb-2">
                                        <p class="comparison-text-sub mb-0">{{ data.dataTable.checkList[2].strategyCategoryCode }}</p>
                                        <img :src="deleteIconImg" class="delete-icon" @click="checkListDelete(2)" />
                                    </div>
                                    <div class="mb-2">
                                        <p class="comparison-text mb-0">{{ data.dataTable.checkList[2].strategyName }}</p>
                                    </div>
                                    <div>
                                        <!-- <v-col cols="6" lg="2" class="pa-0 d-table border-tr">
                                                <p class="mb-0 d-table-cell v-align-middle text-center">{{ data.dataTable.checkList[1].market }}</p>
                                            </v-col>
                                            <v-col cols="6" lg="2" class="pa-0 d-table" :class="$vuetify.breakpoint.mdAndDown ? 'border-t' : 'border-tr'">
                                                <p class="mb-0 d-table-cell v-align-middle text-center">{{ data.dataTable.checkList[1].assetClass }}</p>
                                            </v-col> -->
                                        <div class="pa-0 d-table text-center">
                                            <v-rating
                                                full-icon="mdi-checkbox-blank-circle"
                                                empty-icon="mdi-checkbox-blank-circle-outline"
                                                readonly
                                                icon-label="custom icon label text {0} of {1}"
                                                class="d-table-cell v-align-middle"
                                                :value="data.dataTable.checkList[2].riskLevel"
                                            ></v-rating>
                                        </div>
                                    </div>
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
        <v-row v-if="scroll.topComparison == true && scroll.topUp == true" class="ma-0 top-comparison-sub d-flex align-center justify-center">
            <div class="wrapper-1920">
                <v-col cols="12" class="pa-0 text-right" @click="scroll.topUp = false">
                    <div class="d-flex justify-center align-center">
                        <p class="ma-0 color-black pr-2">Portfolio Compare</p>
                        <img :src="img.arrowDownImg" />
                    </div>
                </v-col>
            </div>
        </v-row>
        <v-row class="middle border-b ma-0" v-if="data.dataTable.checkList[0] != null && scroll.topComparison == false">
            <div class="wrapper-1920">
                <v-col cols="12" class="pa-0 mb-9">
                    <v-row class="ma-0">
                        <v-col md="4" cols="12" class="pl-0 py-0 box-area" :class="$vuetify.breakpoint.lgAndDown ? 'pr-3' : 'pr-6'">
                            <div class="box d-table" v-if="data.dataTable.checkList[0] == null">
                                <div class="pa-0 text-center d-table-cell v-align-middle">
                                    <p class="add-text">Fund 1</p>
                                </div>
                            </div>
                            <div class="box box-after" v-else>
                                <div class="mb-2">
                                    <p class="comparison-text-sub mb-0">{{ data.dataTable.checkList[0].strategyCategoryCode }}</p>
                                    <img :src="deleteIconImg" class="delete-icon" @click="checkListDelete(0)" />
                                </div>
                                <div class="mb-2">
                                    <p class="comparison-text mb-0">{{ data.dataTable.checkList[0].strategyName }}</p>
                                </div>
                                <div>
                                    <!-- <v-col cols="6" lg="2" class="pa-0 d-table border-tr">
                                        <p class="mb-0 d-table-cell v-align-middle text-center">{{ data.dataTable.checkList[0].market }}</p>
                                    </v-col>
                                    <v-col cols="6" lg="2" class="pa-0 d-table" :class="$vuetify.breakpoint.mdAndDown ? 'border-t' : 'border-tr'">
                                        <p class="mb-0 d-table-cell v-align-middle text-center">{{ data.dataTable.checkList[0].assetClass }}</p>
                                    </v-col> -->
                                    <div class="pa-0 d-table text-center">
                                        <v-rating
                                            full-icon="mdi-checkbox-blank-circle"
                                            empty-icon="mdi-checkbox-blank-circle-outline"
                                            readonly
                                            icon-label="custom icon label text {0} of {1}"
                                            class="d-table-cell v-align-middle"
                                            :value="data.dataTable.checkList[0].riskLevel"
                                        ></v-rating>
                                    </div>
                                </div>
                            </div>
                        </v-col>
                        <v-col md="4" cols="12" class="py-0 box-area" align="center" :class="$vuetify.breakpoint.lgAndDown ? 'px-3' : 'px-6'">
                            <div class="box d-table" v-if="data.dataTable.checkList[1] == null">
                                <div class="pa-0 text-center d-table-cell v-align-middle">
                                    <p class="add-text">Fund 2</p>
                                </div>
                            </div>
                            <div class="box box-after text-left" v-else>
                                <div class="mb-2">
                                    <p class="comparison-text-sub mb-0">{{ data.dataTable.checkList[1].strategyCategoryCode }}</p>
                                    <img :src="deleteIconImg" class="delete-icon" @click="checkListDelete(1)" />
                                </div>
                                <div class="mb-2">
                                    <p class="comparison-text mb-0">{{ data.dataTable.checkList[1].strategyName }}</p>
                                </div>
                                <div>
                                    <!-- <v-col cols="6" lg="2" class="pa-0 d-table border-tr">
                                        <p class="mb-0 d-table-cell v-align-middle text-center">{{ data.dataTable.checkList[1].market }}</p>
                                    </v-col>
                                    <v-col cols="6" lg="2" class="pa-0 d-table" :class="$vuetify.breakpoint.mdAndDown ? 'border-t' : 'border-tr'">
                                        <p class="mb-0 d-table-cell v-align-middle text-center">{{ data.dataTable.checkList[1].assetClass }}</p>
                                    </v-col> -->
                                    <div class="pa-0 d-table text-center">
                                        <v-rating
                                            full-icon="mdi-checkbox-blank-circle"
                                            empty-icon="mdi-checkbox-blank-circle-outline"
                                            readonly
                                            icon-label="custom icon label text {0} of {1}"
                                            class="d-table-cell v-align-middle"
                                            :value="data.dataTable.checkList[1].riskLevel"
                                        ></v-rating>
                                    </div>
                                </div>
                            </div>
                        </v-col>
                        <v-col md="4" cols="12" class="pr-0 py-0 box-area" align="right" :class="$vuetify.breakpoint.lgAndDown ? 'pl-3' : 'pl-6'">
                            <div class="box d-table" v-if="data.dataTable.checkList[2] == null">
                                <div class="pa-0 text-center d-table-cell v-align-middle">
                                    <p class="add-text">Fund 3</p>
                                </div>
                            </div>
                            <div class="box box-after text-left" v-else>
                                <div class="mb-2">
                                    <p class="comparison-text-sub mb-0">{{ data.dataTable.checkList[2].strategyCategoryCode }}</p>
                                    <img :src="deleteIconImg" class="delete-icon" @click="checkListDelete(2)" />
                                </div>
                                <div class="mb-2">
                                    <p class="comparison-text mb-0">{{ data.dataTable.checkList[2].strategyName }}</p>
                                </div>
                                <div>
                                    <!-- <v-col cols="6" lg="2" class="pa-0 d-table border-tr">
                                        <p class="mb-0 d-table-cell v-align-middle text-center">{{ data.dataTable.checkList[1].market }}</p>
                                    </v-col>
                                    <v-col cols="6" lg="2" class="pa-0 d-table" :class="$vuetify.breakpoint.mdAndDown ? 'border-t' : 'border-tr'">
                                        <p class="mb-0 d-table-cell v-align-middle text-center">{{ data.dataTable.checkList[1].assetClass }}</p>
                                    </v-col> -->
                                    <div class="pa-0 d-table text-center">
                                        <v-rating
                                            full-icon="mdi-checkbox-blank-circle"
                                            empty-icon="mdi-checkbox-blank-circle-outline"
                                            readonly
                                            icon-label="custom icon label text {0} of {1}"
                                            class="d-table-cell v-align-middle"
                                            :value="data.dataTable.checkList[2].riskLevel"
                                        ></v-rating>
                                    </div>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" class="pa-0 text-right">
                    <button class="search-box-sub-button" @click="compare(data.dataTable.checkList)">Compare</button>
                </v-col>
            </div>
        </v-row>
        <template v-for="(aiPortfolioList, idx) in data.aiPortfolioList">
            <v-row class="comparison bg-white ma-0" id="comparison" :key="'aiPortfolio' + idx" v-if="aiPortfolioList.portfolioList != null && aiPortfolioList.portfolioList.length > 0">
                <div class="wrapper-1920" v-if="aiPortfolioList.count != 0">
                    <v-col cols="12" class="pa-0 mb-10">
                        <span class="portfolios-title"> {{ aiPortfolioList.strategyCategoryName }} ({{ aiPortfolioList.count }})</span>
                    </v-col>
                    <div style="width: 100%; overflow: auto">
                        <table class="aiPortfolio-table" cellspacing="0" cellpadding="0" :class="$vuetify.breakpoint.mdAndDown ? '' : 'w-100'">
                            <colgroup>
                                <col width="4%" />
                                <col width="25%" />
                                <col width="10%" />
                                <col />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th class="text-center"></th>
                                    <th class="text-left">Portfolio Name</th>
                                    <th class="text-center">Risk Level</th>
                                    <th class="text-right">1Y(%)</th>
                                    <th class="text-right">3Y(%)</th>
                                    <th class="text-right">5Y(%)</th>
                                    <th class="text-right">
                                        Ann.<br />
                                        Return(%)
                                    </th>
                                    <th class="text-right">
                                        Sharpe<br />
                                        retio
                                    </th>
                                    <th class="text-right">
                                        Advisory<br />
                                        fee(%)
                                    </th>
                                    <th class="text-right pr-4">As of</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(aiPortfolio, idx2) in aiPortfolioList.portfolioList" :key="'portfolio' + idx2">
                                    <td class="py-4">
                                        <div class="checkbox-square">
                                            <label class="checkbox-square">
                                                <input type="checkbox" v-model="data.dataTable.checkList" :id="idx" @change="check" :value="aiPortfolio" name="" />
                                                <i class="check-icon"></i>
                                            </label>
                                        </div>
                                    </td>
                                    <td class="py-4">
                                        <v-row class="ma-0">
                                            <v-col class="pa-0 cursor--pointer" style="font-weight: 800 !important" @click="detailPage(aiPortfolio.id)">
                                                <span>{{ aiPortfolio.strategyName }}</span>
                                            </v-col>
                                        </v-row>
                                        <v-row class="ma-0">
                                            <template v-if="$vuetify.breakpoint.lgAndUp">
                                                <v-col cols="12" class="pa-0 d-flex align-center">
                                                    <button class="mr-1 td-btn px-2" v-if="aiPortfolio.assetClassCd != ''">
                                                        {{ aiPortfolio.assetClass }}
                                                    </button>
                                                    <button class="mr-1 td-btn px-2" v-if="aiPortfolio.marketCd != ''">
                                                        {{ aiPortfolio.market }}
                                                    </button>
                                                    <span class="td-sub-text cursor--pointer" @click="reportSheet(aiPortfolio.id)"><U>Factsheet</U></span>
                                                </v-col>
                                            </template>
                                            <template v-else>
                                                <v-col cols="12" class="pa-0">
                                                    <button class="mr-1 td-btn px-2" v-if="aiPortfolio.assetClassCd != ''">
                                                        {{ aiPortfolio.assetClass }}
                                                    </button>
                                                </v-col>
                                                <v-col cols="12" class="pa-0">
                                                    <button class="mr-1 td-btn px-2" v-if="aiPortfolio.marketCd != ''">
                                                        {{ aiPortfolio.market }}
                                                    </button>
                                                </v-col>
                                                <v-col cols="12" class="pa-0">
                                                    <span class="td-sub-text"><U>Factsheet</U></span>
                                                </v-col>
                                            </template>
                                        </v-row>
                                    </td>
                                    <td class="text-center py-4">
                                        <v-rating
                                            full-icon="mdi-checkbox-blank-circle"
                                            empty-icon="mdi-checkbox-blank-circle-outline"
                                            icon-label="custom icon label text {0} of {1}"
                                            class="v-align-middle product-rating"
                                            :value="aiPortfolio.riskLevel"
                                            readonly
                                        ></v-rating>
                                    </td>
                                    <!-- -->
                                    <td class="color-gray text-right py-4">{{ aiPortfolio.priceCalcList.content[aiPortfolio.strategyName].Y1}}</td>
                                    <td class="color-gray text-right py-4">{{ aiPortfolio.priceCalcList.content[aiPortfolio.strategyName].Y3}}</td>
                                    <td class="color-gray text-right py-4">{{ aiPortfolio.priceCalcList.content[aiPortfolio.strategyName].Y}}</td>
                                    <td class="color-gray text-right py-4">{{ aiPortfolio.priceCalcList.content[aiPortfolio.strategyName].AnnReturn }}</td>
                                    <td class="color-gray text-right py-4">{{ aiPortfolio.priceCalcList.content[aiPortfolio.strategyName].SharpeRatio }}</td>
                                    <td class="color-gray text-right py-4">{{ aiPortfolio.priceCalcList.advisoryFee }}</td>
                                    <td class="color-gray text-right py-4">{{ aiPortfolio.priceCalcList.content[aiPortfolio.strategyName].End }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </v-row>
        </template>
        <iframe id="reportProduct" width="0" height="0" frameborder="0"></iframe>
        <iframe id="reportSheet" width="0" height="0" frameborder="0"></iframe>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import meta from '@/api/meta';

import searchImg from '@/assets/images/searchImg.png';
import deleteIconImg from '@/assets/images/iconDelete.png';

import downloadImg from '@/assets/images/icon_download.png';
import resetImg from '@/assets/images/icon_reset.png';
import arrowDownImg from '@/assets/images/icon_arrow_down_small_gray.png';
import arrowUpImg from '@/assets/images/icon_arrow_up_small_gray.png';

export default Vue.extend({
    components: {},
    data() {
        return {
            scroll: {
                check: false,
                targetY: null as any,
                targetWidth: null as any,
                widthSize: null as any,
                topComparison: false,
                topUp: false,
            },
            tabs: [
                { value: 1, name: 'AI Portfolio' },
                { value: 2, name: 'Theme Portfolio' },
                { value: 3, name: 'Fundamental' },
                { value: 4, name: 'Variable Insurance' },
            ],
            tableDate: [],
            img: {
                searchImg,
                downloadImg,
                resetImg,
                arrowDownImg,
                arrowUpImg,
            },
            deleteIconImg,
            style: '',
            styles: {
                on: 'ON',
                off: 'OFF',
            },
            search: {
                assetClass: '' as any,
                assetType: '' as any,
                riskLevel: '' as any,
                sector: '' as any,
                inputText: null as any,
                exposure: [] as any,
            },
            data: {
                test: null,
                filtersList: {
                    assetClass: [{ text: 'Asset Class', value: '' }],
                    assetType: [{ text: 'Asset Type', value: '' }],
                    riskLevel: [{ text: 'Risk Level', value: '' }],
                    sectorList: [{ text: 'Sector', value: '' }],
                },
                aiPortfolioList: [{ portfolioList: [] }] as any,
                tabValue: null as any,
                dataTable: {
                    id: '',
                    checkAll: false,
                    checkList: [] as any,
                },
            },
        };
    },
    watch: {
        '$route.query.tab': {
            async handler(n) {
                this.data.tabValue = n;
            },
        },
        'data.dataTable.checkList': {
            async handler() {
                if (this.data.dataTable.checkList.length === 0) {
                    this.scroll.check = false;
                } else {
                    this.scroll.check = true;
                    // this.middleBottomPosition();
                }

                if (this.data.dataTable.checkList.length > 3) {
                    await meta.alert('3개의 데이터만 선택 가능합니다.');
                    this.data.dataTable.checkList.pop();
                }
            },
        },
        'search.assetClass': {
            async handler() {
                this.aiPortfolioList();
            },
        },
        'search.assetType': {
            async handler() {
                this.aiPortfolioList();
            },
        },
        'search.riskLevel': {
            async handler() {
                this.aiPortfolioList();
            },
        },
        'search.sector': {
            async handler() {
                this.aiPortfolioList();
            },
        },
    },
    methods: {
        checkReset() {
            this.search.assetClass = '';
            this.search.assetType = '';
            this.search.riskLevel = '';
            this.search.sector = '';
            this.search.inputText = null;
            this.data.dataTable.checkList = [];
        },
        async reportSheet(id: any) {
            this.$store.commit('app/SET_LOADING', true);
            document.getElementById('reportSheet').src = `/portfolios/portfolio-detail/report?strategyId=${id}`;

            window.addEventListener('message', (e) => {
                if (e.data.success === 'success') {
                    this.$store.commit('app/SET_LOADING', false);
                }
            });
        },
        async reportProduct() {
            this.$store.commit('app/SET_LOADING', true);
            document.getElementById('reportProduct').src = '/reports/get-invested';

            window.addEventListener('message', (e) => {
                if (e.data.success === 'success') {
                    this.$store.commit('app/SET_LOADING', false);
                }
            });
        },
        async tabChange(id: any) {
            this.$store.commit('app/SET_LOADING', true);
            this.search.assetClass = '';
            this.search.assetType = '';
            this.search.riskLevel = '';
            this.search.sector = '';
            this.search.inputText = null;
            this.data.dataTable.checkList = [];

            this.$router.push({
                path: '/portfolios/all-portfolios',
                query: {
                    tab: id,
                },
            });
            this.$store.commit('app/SET_LOADING', false);
        },
        async checkListDelete(id: number) {
            this.data.dataTable.checkList.splice(id, 1);
        },
        async aiPortfolioList() {
            // this.$store.commit('app/SET_LOADING', true);
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
                        riskLevel: this.search.riskLevel,
                        sector: this.search.sector,
                        assetClass: this.search.assetClass,
                        assetType: this.search.assetType,
                        inputSearch: this.search.inputText,
                    })
                ).data;
                y.strategyCategoryName = `Showing ${y.code} Portfolios`;
                y.count = y.portfolioList.length;
                // console.log(y.portfolioList);
                y.portfolioList.forEach((x: any) => {
                    if (x.assetClassCd === 'EQ') {
                        x.assetClassCd = 'Equity';
                    } else if (x.assetClassCd === 'FI') {
                        x.assetClassCd = 'FixedIncome';
                    } else if (x.assetClassCd === 'FX') {
                        x.assetClassCd = 'Forex';
                    } else if (x.assetClassCd === 'RE') {
                        x.assetClassCd = 'RealEstate';
                    } else if (x.assetClassCd === 'CM') {
                        x.assetClassCd = 'Commodity';
                    }
                    if (x.priceCalcList.content[x.strategyName].Y1 == null || x.priceCalcList.content[x.strategyName].Y1 === '') {
                        x.priceCalcList.content[x.strategyName].Y1 = 0;
                    } else {
                        x.priceCalcList.content[x.strategyName].Y1 = 0; // Math.round(x.priceCalcList.content[x.strategyName].Y1 * 100) / 100;
                    }

                    if (x.priceCalcList.content[x.strategyName].Y3 == null || x.priceCalcList.content[x.strategyName].Y3 === '') {
                        x.priceCalcList.content[x.strategyName].Y3 = 0;
                    } else {
                        x.priceCalcList.content[x.strategyName].Y3 = 0;// Math.round(x.priceCalcList.content[x.strategyName].Y3 * 100) / 100;
                    }

                    if (x.priceCalcList.content[x.strategyName].Y5 == null || x.priceCalcList.content[x.strategyName].Y5 === '') {
                        x.priceCalcList.content[x.strategyName].Y5 = 0;
                    } else {
                        x.priceCalcList.content[x.strategyName].Y5 = 0; // Math.round(x.priceCalcList.content[x.strategyName].Y5 * 100) / 100;
                    }

                    if (x.priceCalcList.content[x.strategyName].AnnReturn == null || x.priceCalcList.content[x.strategyName].AnnReturn === '') {
                        x.priceCalcList.content[x.strategyName].AnnReturn = 0;
                    } else {
                        x.priceCalcList.content[x.strategyName].AnnReturn = 0; //  Math.round(x.priceCalcList.content[x.strategyName].AnnReturn * 100) / 100;
                    }

                    if (x.priceCalcList.content[x.strategyName].SharpeRatio == null || x.priceCalcList.content[x.strategyName].SharpeRatio === '') {
                        x.priceCalcList.content[x.strategyName].SharpeRatio = 0;
                    } else {
                        x.priceCalcList.content[x.strategyName].SharpeRatio = 0; // Math.round(x.priceCalcList.content[x.strategyName].SharpeRatio * 100) / 100;
                    }

                    if (x.marketCd === 'KR') {
                        x.marketCd = 'KOR';
                    } else if (x.marketCd === 'US') {
                        x.marketCd = 'U.S';
                    }
                });
            });
            this.data.aiPortfolioList = strategyCategoryList;
            await Promise.all(promises);

            this.$store.commit('app/SET_LOADING', false);
        },
        // 전체체크
        checkAll() {
            if (this.data.dataTable.checkAll) {
                this.tableDate.forEach((x: any) => {
                    this.data.dataTable.checkList.push(x.id);
                });
            } else {
                this.data.dataTable.checkList = [];
            }
        },
        // 개별체크
        check() {
            if (this.tableDate.length === this.data.dataTable.checkList.length) {
                this.data.dataTable.checkAll = true;
            } else {
                this.data.dataTable.checkAll = false;
            }
        },
        // compare
        compare(value: any) {
            let i = 0;
            const strategyId = [];
            for (i = 0; i < value.length; i += 1) {
                strategyId.push(value[i].id);
            }
            this.$router.push({
                path: '/portfolios/compare-portfolios',
                query: {
                    strategyList: strategyId,
                },
            });
        },
        // detail페이지 이동
        detailPage(value: any) {
            this.$router.push({
                path: '/portfolios/portfolio-detail',
                query: {
                    strategyId: value,
                },
            });
        },
        async middleBottomPosition() {
            const target = document.getElementById('comparison') as any;

            if (target != null) {
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
            }
        },
        async getCodeList() {
            const assetClass = (
                await meta.api.common.code.getCodeList({
                    page: 1,
                    rowSize: 100000000,
                    parentId: 16,
                })
            ).data.items;

            const assetType = (
                await meta.api.common.code.getCodeList({
                    page: 1,
                    rowSize: 100000000,
                    parentId: 22,
                })
            ).data.items;

            const sectorList = (
                await meta.api.common.sector.getSectorList({
                    page: 1,
                    rowSize: 100000000,
                })
            ).data.items;

            assetClass.unshift({ text: 'Asset Class', value: '' });
            assetType.unshift({ text: 'Asset Type', value: '' });
            sectorList.unshift({ text: 'Sector', value: '' });

            const assetClassList = [];
            const assetTypeList = [];
            const sectorTmpList = [];

            assetClass.forEach((x: any) => {
                assetClassList.push({ text: x.description, value: x.value });
            });

            assetType.forEach((x: any) => {
                assetTypeList.push({ text: x.description, value: x.value });
            });

            sectorList.forEach((x: any) => {
                sectorTmpList.push({ text: x.code, value: x.id });
            });

            this.data.filtersList.assetClass = assetClassList;
            this.data.filtersList.assetType = assetTypeList;
            this.data.filtersList.sectorList = sectorTmpList;
            let i = 0;
            for (i = 1; i < 6; i += 1) {
                this.data.filtersList.riskLevel.push({ text: i, value: i });
            }
            this.data.filtersList.riskLevel.unshift({ text: 'Risk Level', value: '' });
        },
        changeAssetClass(data) {
            this.search.assetClass = data.value;
        },
        changeAssetType(data) {
            this.search.assetType = data.value;
        },
        changeRiskLevel(data) {
            this.search.riskLevel = data.value;
        },
        changeSector(data) {
            this.search.sector = data.value;
        },
    },
    mounted() {
        this.getCodeList();
        this.aiPortfolioList();
        this.scroll.targetWidth = document.documentElement.scrollWidth;
        if (this.$route.query.tab) {
            this.data.tabValue = Number(this.$route.query.tab);
        }
        window.addEventListener('scroll', () => {
            this.middleBottomPosition();
        });
    },
});
</script>

<style>
.all-portfolio {
    min-height: 1000px;
}
.all-portfolio .top {
    width: 100%;
    padding: 120px 150px;
    background-color: #fff;
}

.all-portfolio .search-area {
    border: 2px solid #000;
    width: 95%;
    height: 46px !important;
}

.all-portfolio .search-select {
    width: 100%;
    background-color: #fff !important;
    font-size: 21px !important;
    padding-left: 20px !important;
}

.all-portfolio .search-items {
    margin-top: 4px !important;
    font-size: 18px !important;
}

.all-portfolio .search-items > div {
    padding-left: 20px !important;
}

.all-portfolio .menu-title {
    font-size: 64px !important;
    font-weight: 900;
    color: #000;
}

.all-portfolio .menu-title-line {
    width: 72px;
    height: 12px;
    background-color: #fd3f01;
    margin-bottom: 15px;
}

.all-portfolio .menu-sub-title {
    font-size: 24px !important;
    font-weight: 900;
    color: #000;
}

.all-portfolio .menu-sub-title-text {
    vertical-align: middle;
    font-size: 21px !important;
    color: #000;
    font-weight: 600;
}

.all-portfolio .middle {
    padding: 60px 150px 30px 150px;
    min-height: 300px;
    background-color: #f3f3f3;
    border-bottom: 1px solid #000;
}

.all-portfolio .middle-line {
    padding: 0px 150px;
    height: 62px;
    width: 100%;
    background-color: #000000;
}

.all-portfolio .portfolios-title {
    font-size: 24px;
    text-align: left;
    color: #fd3f01;
    font-weight: 900;
}

.all-portfolio .sustainable-option {
    padding: 8px 19px 13px 0px;
    font-size: 16px;
    text-align: center;
    color: #b3b3b3;
}

.all-portfolio .sub-text {
    font-size: 18px;
    text-align: center;
    font-weight: 800;
    color: #fd3f01;
}

.all-portfolio .sub-text-padding {
    padding: 0px 0px 0px 25px !important;
}

.all-portfolio .selectbox {
    width: 100%;
    -webkit-appearance: auto;
    background-color: #ffffff;
    border: 2px solid #000 !important;
    padding: 0px 10px 0px 10px;
}

.all-portfolio .v-text-field.v-text-field--enclosed .v-text-field__details {
    display: none !important;
}

.all-portfolio .v-text-field--outlined > .v-input__control > .v-input__slot {
    margin: 0px !important;
    min-height: 45px !important;
    max-height: 46px !important;
    font-size: 21px !important;
    border: 2px solid #000 !important;
    border-radius: 0px;
    background: url(@/assets/images/icon_arrow_down_small.png) no-repeat 97% 50%/15px auto;
    background-color: #fff !important;
    background-size: 10px;
    color: #fff !important;
}

.all-portfolio #search-box {
    width: 100%;
    height: 46px;
    object-fit: contain;
    border: 2px solid #000 !important;
    background-color: #ffffff;
    padding-left: 20px;
}

.all-portfolio .inputDiv {
    max-width: 100%;
    position: relative;
}

.all-portfolio .inputDiv img {
    position: absolute;
    right: 30px;
    top: 30%;
}

.all-portfolio .checkbox-square .check-icon {
    display: inline-block;
    width: 18px;
    height: 30px;
    background: url(@/assets/images/checkbox-unselected.png) no-repeat;
    padding: 0 0 0 30px;
    vertical-align: middle;
}

.all-portfolio .checkbox-circle .check-icon {
    display: inline-block;
    width: 18px;
    height: 30px;
    background: url(@/assets/images/checkbox-unselected.png) no-repeat;
    padding: 0 0 0 30px;
    vertical-align: middle;
    margin-top: 4px;
}

.all-portfolio .checkbox-square input[type='checkbox'] {
    display: none;
}

.all-portfolio .checkbox-square input[type='checkbox']:checked + .check-icon {
    background: url(@/assets/images/checkbox-selected.png) no-repeat;
}

.all-portfolio .checkbox-circle .check-icon {
    width: 18px;
    height: 30px;
    background: url(@/assets/images/radio-button-unselected.png) no-repeat;
    padding: 0 0 0 30px;
}

.all-portfolio .checkbox-circle input[type='radio'] {
    display: none;
}

.all-portfolio .checkbox-circle input[type='radio']:checked + .check-icon {
    background: url(@/assets/images/radio-button-selected.png) no-repeat;
}

.all-portfolio .selectbox-sub {
    width: 40%;
    height: 29px;
    border: solid 2px #000000;
    background-color: #ffffff;
    -webkit-appearance: auto;
}

.aiPortfolio-table {
    border-top: 1px solid #000;
    border-collapse: collapse;
    table-layout: fixed;
}

.aiPortfolio-table th {
    border-bottom: 1px solid #000;
    padding: 20px 10px;
    font-size: 18px;
    font-weight: 800;
}

.aiPortfolio-table td {
    border-bottom: 1px solid #b3b3b3;
    padding: 34px 10px;
    font-size: 18px;
}

.all-portfolio th:first-child,
.all-portfolio td:first-child {
    border-left: none;
}

.all-portfolio .comparison {
    width: 100%;
    background-color: #ffffff;
    position: relative;
    padding: 120px 150px 40px 150px !important;
}

.all-portfolio .comparison-text {
    font-size: 24px !important;
    font-weight: bold;
}

.all-portfolio .comparison-text-sub {
    font-size: 21px !important;
    font-weight: bold;
    color: #b3b3b3;
}

.all-portfolio .footer {
    height: 34px;
    background-color: #000000;
}

.all-portfolio .box {
    width: 100%;
    max-width: 508px;
    height: 157px;
    position: relative;
    border: 2px solid #e8e8e8;
    background-color: #f3f3f3;
    padding: 25px 20px;
}

.all-portfolio .box.box-after {
    border: 1px solid #000 !important;
    background-color: #fff !important;
}

.all-portfolio .box-div {
    position: absolute;
    bottom: 0;
    width: 100%;
    font-weight: bold;
}

.all-portfolio .search-box-sub-button {
    text-align: center;
    background-color: #000000;
    color: #ffffff;
    width: 196px;
    height: 48px;
    font-size: 21px;
    font-weight: bold;
}

.all-portfolio .border-tr {
    border-top: 1px solid #000;
    border-right: 1px solid #000;
}

.all-portfolio .border-t {
    border-top: 1px solid #000;
}

.all-portfolio .border-b {
    border-bottom: 1px solid #000;
}

.all-portfolio .v-slide-group__content {
    width: 100%;
    background-color: #000;
}

.all-portfolio .middle-line .ai-tabs .v-tabs-slider-wrapper {
    height: 4px !important;
}

.all-portfolio .middle-line .ai-tabs .v-tabs-bar {
    height: 61px !important;
}

.all-portfolio .middle-line .ai-tabs .v-tabs-slider-wrapper .v-tabs-slider {
    color: #fd3f01;
}

.all-portfolio .middle-line .ai-tab {
    background-color: #000;
    font-size: 24px;
    text-transform: none;
    color: #b3b3b3 !important;
    font-weight: 800;
    letter-spacing: normal;
}

.all-portfolio .middle-line .ai-tab.v-tab--active {
    color: #fd3f01 !important;
    font-weight: 800;
    letter-spacing: normal;
}

.all-portfolio .btn {
    outline: none !important;
    border: solid 1px #000000;
    width: 50px;
    font-size: 15px;
}

.v-application .primary--text {
    color: #fd3f01 !important;
}

.v-application .accent--text {
    color: #000 !important;
}

.all-portfolio .v-rating .v-icon {
    font-size: 16px;
    padding: 2.5px;
}

.all-portfolio .mdi-checkbox-blank-circle-outline::before {
    content: '\F0130';
    color: #e8e8e8;
    background-color: #e8e8e8;
    border-radius: 10px;
    font-size: 14px;
}

.all-portfolio .td-btn {
    min-width: 58px;
    font-size: 14px;
    background-color: #e8e8e8;
    color: #808080;
    font-weight: bold;
}

.all-portfolio .td-sub-text {
    font-size: 20px;
    font-weight: 700;
    color: #b3b3b3;
}

.all-portfolio .td-main-text {
    font-weight: 800;
}

.all-portfolio .add-text {
    font-size: 24px;
    margin-bottom: 0px !important;
    color: #c4c4c4;
}

.all-portfolio .delete-icon {
    cursor: pointer;
    width: 24px;
    height: 27px;
    position: absolute;
    top: 25px;
    right: 20px;
}

.all-portfolio .selectbox {
    -webkit-appearance: none !important; /* for chrome */
    -moz-appearance: none !important; /*for firefox*/
    appearance: none !important;
    border: 2px solid #000 !important;
    border-radius: 0px;
    background: url(@/assets/images/icon_arrow_down_small.png) no-repeat 97% 50%/15px auto;
    background-color: #fff !important;
    background-size: 10px;
    color: #fff !important;
}

.all-portfolio .mdi-menu-down::before,
.mdi-menu-down::after {
    display: none !important;
}

.all-portfolio .top-comparison {
    width: 100%;
    min-height: 280px;
    background-color: #f3f3f3;
    position: fixed;
    padding: 60px 150px 0px 150px !important;
    border-bottom: 1px solid #e8e8e8;
    top: 103px;
    left: 0;
    right: 0;
    z-index: 400;
}

.all-portfolio .top-comparison-sub {
    width: 100%;
    min-height: 30px;
    background-color: #f3f3f3;
    position: fixed;
    border-bottom: 1px solid #e8e8e8;
    top: 103px;
    left: 0;
    right: 0;
    z-index: 400;
}

.all-portfolio .aiPortfolio-table thead tr th {
    padding: 9.5px 10px 10px 10px !important;
    vertical-align: text-top;
}

.all-portfolio .middle-line .download {
}

.all-portfolio .middle-line .reset {
}

@media screen and (max-width: 1460px) {
    .all-portfolio .middle-line .ai-tab {
        font-size: 20px;
    }

    .all-portfolio .sub-text {
        font-size: 14px;
    }

    .all-portfolio .sub-text-padding {
        padding: 0px 0px 0px 15px !important;
    }
}
@media screen and (max-width: 1263px) {
    .all-portfolio .top {
        padding: 100px 80px;
    }

    .all-portfolio .menu-title {
        font-size: 54px !important;
    }

    .all-portfolio .menu-sub-title {
        font-size: 20px !important;
    }

    .all-portfolio .menu-title-line {
        width: 60px;
        height: 11px;
        margin-bottom: 13px;
    }

    .all-portfolio .search-box-sub-button {
        width: 157px;
        height: 37px;
        font-size: 18px;
    }

    .all-portfolio .middle {
        padding: 40px 80px;
        background-color: #e8e8e8;
    }

    .all-portfolio .top-comparison {
        padding: 40px 80px 0px 80px !important;
        top: 80px !important;
    }

    .all-portfolio .top-comparison-sub {
        top: 80px;
    }

    .all-portfolio .middle-line {
        padding: 0px 80px;
        width: 100%;
        background-color: #000000;
    }

    .all-portfolio .box-div {
        height: 37px;
        font-size: 12px;
    }

    .all-portfolio .sub-text {
        font-size: 16px;
    }

    .all-portfolio .comparison {
        width: 100%;
        background-color: #ffffff;
        position: relative;
        padding: 70px 80px 30px 80px;
    }

    .all-portfolio .comparison-text {
        font-size: 20px !important;
    }

    .all-portfolio .comparison-text-sub {
        font-size: 17px !important;
    }

    .all-portfolio .v-rating .v-icon {
        font-size: 16px;
        padding: 1.5px;
    }

    .all-portfolio .mdi-checkbox-blank-circle-outline::before {
        font-size: 14px;
    }

    .all-portfolio .middle-line .ai-tab {
        font-size: 16px;
    }

    .all-portfolio th {
        font-size: 15px;
    }

    .all-portfolio td {
        font-size: 15px;
    }

    .all-portfolio .portfolios-title {
        font-size: 22px;
    }

    .all-portfolio .sustainable-option {
        padding: 8px 19px 13px 0px;
        font-size: 14px;
    }

    .all-portfolio .btn {
        width: 45px;
        font-size: 12px;
    }

    .all-portfolio .selectbox {
        font-size: 18px !important;
    }

    .all-portfolio .selectbox-sub {
        width: 40%;
        height: 25px;
        font-size: 12px;
    }

    .all-portfolio .td-btn {
        font-size: 12px;
    }

    .all-portfolio .td-sub-text {
        font-size: 18px;
    }

    .all-portfolio .inputDiv img {
        right: 25px;
        top: 35%;
    }

    .all-portfolio .add-text {
        font-size: 18px;
    }

    .all-portfolio .v-text-field--outlined > .v-input__control > .v-input__slot {
        font-size: 18px !important;
    }
}

@media screen and (max-width: 959px) {
    .all-portfolio .search-select {
        font-size: 17px !important;
    }

    .all-portfolio .search-select span {
        max-width: 100px;
    }

    .all-portfolio .search-items {
        font-size: 15px !important;
    }

    .all-portfolio .top {
        padding: 40px;
    }

    .all-portfolio .middle {
        padding: 40px;
    }

    .all-portfolio .top-comparison {
        padding: 20px 20px 0px 20px !important;
    }

    .all-portfolio .middle-line {
        padding: 0px 40px;
        width: 100%;
        background-color: #000000;
    }

    .all-portfolio .menu-title {
        font-size: 34px !important;
        font-weight: bold;
        color: #000;
    }

    .all-portfolio .menu-title-line {
        width: 50px;
        height: 10px;
        background-color: #fd3f01;
        margin-bottom: 10px;
    }

    .all-portfolio .menu-sub-title {
        font-size: 14px !important;
    }

    .all-portfolio .menu-sub-title-text {
        font-size: 12px !important;
        color: #000;
    }

    .all-portfolio .box {
        margin: auto;
    }

    .all-portfolio .box-area:nth-child(1) {
        margin-bottom: 10px;
        padding: 0px !important;
    }

    .all-portfolio .box-area:nth-child(2) {
        margin-bottom: 10px;
        padding: 0px !important;
    }

    .all-portfolio .box-area:nth-child(3) {
        padding: 0px !important;
    }

    .all-portfolio .selectbox {
        width: 100%;
        height: 34px;
        font-size: 14px !important;
        border: solid 2px #000000;
        -webkit-appearance: auto;
        background-color: #ffffff;
    }

    .all-portfolio #search-box {
        width: 100%;
        height: 34px;
        object-fit: contain;
        border: solid 2px #000000;
        background-color: #ffffff;
        position: absolute;
    }

    .all-portfolio .comparison {
        width: 100%;
        background-color: #ffffff;
        position: relative;
        padding: 20px !important;
    }

    .all-portfolio .comparison-text {
        font-size: 22px !important;
    }

    .all-portfolio .comparison-text-sub {
        font-size: 18px !important;
    }

    .all-portfolio .search-box-sub-button {
        font-size: 14px;
        margin-top: 20px;
        width: 150px;
        height: 30px;
    }

    .all-portfolio .sub-text {
        font-size: 12px;
    }

    .all-portfolio .v-rating .v-icon {
        font-size: 17px;
        padding: 1.5px;
    }

    .all-portfolio .mdi-checkbox-blank-circle-outline::before {
        font-size: 15px;
    }

    .all-portfolio .box-div {
        height: 30px;
        font-size: 10px;
    }

    .all-portfolio .middle-line .ai-tab {
        font-size: 14px;
    }

    .all-portfolio .portfolios-title {
        font-size: 18px;
    }

    .all-portfolio .sustainable-option {
        padding: 8px 19px 13px 0px;
        font-size: 12px;
    }

    .all-portfolio .btn {
        width: 35px;
        font-size: 10px;
    }

    .all-portfolio .selectbox-sub {
        width: 40%;
        height: 20px;
        font-size: 10px;
    }

    .all-portfolio .td-btn {
        font-size: 11px;
    }

    .all-portfolio .td-sub-text {
        font-size: 17px;
    }

    .all-portfolio .inputDiv img {
        right: 14px;
        top: 30%;
    }
    .all-portfolio .add-text {
        font-size: 14px;
    }

    .all-portfolio .v-text-field--outlined > .v-input__control > .v-input__slot {
        font-size: 15px !important;
    }
}

@media screen and (max-width: 650px) {
    .all-portfolio .top {
        padding: 20px;
    }

    .all-portfolio .middle-line .ai-tab {
        font-size: 12px;
    }

    .all-portfolio .middle-line {
        padding: 0px 20px;
    }

    .all-portfolio .middle {
        padding: 20px;
    }
}

.theme--light .v-list-item:hover {
    background-color: #000;
    color: #fff !important;
}

.theme--light .v-list-item--active {
    background-color: none;
    color: #000 !important;
}

.theme--light.v-list-item--active:focus:before,
.theme--light.v-list-item.v-list-item--highlighted:before {
    opacity: 0;
}

.theme--light.v-list-item--active:before,
.theme--light.v-list-item--active:hover:before,
.theme--light.v-list-item:focus:before {
    opacity: 0;
}

.v-menu__content {
    border: 1px solid #000;
    border-radius: 0px;
    box-shadow: none;
}
</style>
