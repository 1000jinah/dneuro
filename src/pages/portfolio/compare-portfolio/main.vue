<template>
    <div class="compare-etfs">
        <v-row class="ma-0">
            <div style="background-color: #fff; width: 100%">
                <v-col cols="12" class="top">
                    <div style="background-color: #fd3f01; width: 72px; height: 12px; margin-bottom: 25px"></div>
                    <p class="menu-title">Compare Portfolios</p>
                    <p class="menu-sub-title">View up to 3 funds side-by-side</p>
                    <div style="width: 100%; position: relative">
                        <input type="text" name="search-box-div" class="search-box" placeholder="Search category name" v-model="data.searchText" @focus="focus()" @input="searchKeydown" />
                        <img :src="img.magnify" class="search-btn" :class="[imgFlag ? tbdisplay : tdisplay]" />
                        <img
                            :src="img.close"
                            class="search-btn"
                            :class="[imgFlag ? tdisplay : tbdisplay]"
                            @click="
                                imgFlag = false;
                                flag.search = true;
                                data.searchText = '';
                            "
                        />

                        <div v-show="data.searchText && !flag.search" class="search-result">
                            <p class="mb-0">
                                {{ data.searchList.length }} results for "<strong>{{ data.searchText }}</strong
                                >"
                            </p>
                            <div style="margin-top: 31px">
                                <div v-for="(item, idx) in data.searchList" :key="'item' + idx" class="list">
                                    <img :src="img.magnify" class="mr-4" />
                                    <span
                                        class="input-text cursor--pointer"
                                        @click="
                                            data.searchText = '';
                                            searchKeyword(item.id, item.tableName);
                                        "
                                        >{{ item.assetName }}</span
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </v-col>
            </div>
            <div style="background-color: #fd3f01; width: 100%">
                <v-col cols="12" class="middle">
                    <v-row no-gutters class="row-border" style="margin-top: 20px; background-color: #fff">
                        <v-col :class="$vuetify.breakpoint.smAndDown ? 'sm-first' : 'col-first'" cols="6" lg="3" md="3">
                            <span class="add color-black">Features</span>
                        </v-col>
                        <v-col style="text-align: center" :class="$vuetify.breakpoint.smAndDown ? 'sm-second' : 'col-last'" cols="6" lg="3" md="3" v-if="data.dataTable.checkList[0] == null">
                            <span class="fund color-gray-two">Fund 1</span>
                        </v-col>
                        <v-col :class="$vuetify.breakpoint.smAndDown ? 'sm-second' : 'col-middle'" cols="6" lg="3" md="3" v-else>
                            <div style="margin-top: 25px">
                                <span class="box-text font-weight-bold">{{ data.dataTable.checkList[0].code }}</span>
                                <img :src="img.iconDelete" class="cursor" style="width: 25px; height: 28px; float: right; margin-right: 10px" @click="assetDelete(0)" />
                            </div>
                            <div class="box-title font-weight-bold">
                                {{ data.dataTable.checkList[0].name }}
                            </div>
                            <v-row class="ma-0 box-div">
                                <v-col cols="6" lg="2" class="pa-0 d-table border-tr">
                                    <p class="mb-0 d-table-cell v-align-middle text-center">{{ data.dataTable.checkList[0].market }}</p>
                                </v-col>
                                <v-col cols="6" lg="4" class="pa-0 d-table" :class="$vuetify.breakpoint.mdAndDown ? 'border-t' : 'border-tr'">
                                    <p class="mb-0 d-table-cell v-align-middle text-center">{{ data.dataTable.checkList[0].assetClass }}</p>
                                </v-col>
                                <v-col
                                    v-if="data.dataTable.checkList[0].riskLevel != null"
                                    cols="12"
                                    lg="4"
                                    class="pa-0 d-table text-center"
                                    :class="$vuetify.breakpoint.mdAndDown ? 'border-t' : 'border-tr'"
                                >
                                    <v-rating
                                        full-icon="mdi-checkbox-blank-circle"
                                        empty-icon="mdi-checkbox-blank-circle-outline"
                                        readonly
                                        icon-label="custom icon label text {0} of {1}"
                                        class="d-table-cell v-align-middle"
                                        :value="data.dataTable.checkList[0].riskLevel"
                                    ></v-rating>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col style="text-align: center" :class="$vuetify.breakpoint.smAndDown ? 'sm-middle' : 'col-last'" cols="6" lg="3" md="3" v-if="data.dataTable.checkList[1] == null">
                            <span class="fund color-gray-two">Fund 2</span>
                        </v-col>
                        <v-col :class="$vuetify.breakpoint.smAndDown ? 'sm-middle' : 'col-middle'" cols="6" lg="3" md="3" v-else>
                            <div style="margin-top: 25px">
                                <span class="box-text">{{ data.dataTable.checkList[1].code }}</span>
                                <img :src="img.iconDelete" class="cursor" style="width: 25px; height: 28px; float: right; margin-right: 10px" @click="assetDelete(1)" />
                            </div>
                            <p class="box-title">
                                {{ data.dataTable.checkList[1].name }}
                            </p>
                            <v-row class="ma-0 box-div">
                                <v-col cols="6" lg="2" class="pa-0 d-table border-tr">
                                    <p class="mb-0 d-table-cell v-align-middle text-center">{{ data.dataTable.checkList[1].market }}</p>
                                </v-col>
                                <v-col cols="6" lg="4" class="pa-0 d-table" :class="$vuetify.breakpoint.mdAndDown ? 'border-t' : 'border-tr'">
                                    <p class="mb-0 d-table-cell v-align-middle text-center">{{ data.dataTable.checkList[1].assetClass }}</p>
                                </v-col>
                                <v-col
                                    v-if="data.dataTable.checkList[1].riskLevel != null"
                                    cols="12"
                                    lg="4"
                                    class="pa-0 d-table text-center"
                                    :class="$vuetify.breakpoint.mdAndDown ? 'border-t' : 'border-tr'"
                                >
                                    <v-rating
                                        full-icon="mdi-checkbox-blank-circle"
                                        empty-icon="mdi-checkbox-blank-circle-outline"
                                        readonly
                                        icon-label="custom icon label text {0} of {1}"
                                        class="d-table-cell v-align-middle"
                                        :value="data.dataTable.checkList[1].riskLevel"
                                    ></v-rating>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col style="text-align: center" :class="$vuetify.breakpoint.smAndDown ? 'sm-last' : 'col-last'" cols="6" lg="3" md="3" v-if="data.dataTable.checkList[2] == null">
                            <span class="fund color-gray-two">Fund 3</span>
                        </v-col>
                        <v-col :class="$vuetify.breakpoint.smAndDown ? 'sm-lasts' : 'col-middle'" cols="6" lg="3" md="3" v-else>
                            <div style="margin-top: 25px">
                                <span class="box-text">{{ data.dataTable.checkList[2].code }}</span>
                                <img :src="img.iconDelete" class="cursor" style="width: 25px; height: 28px; float: right; margin-right: 10px" @click="assetDelete(2)" />
                            </div>
                            <p class="box-title">
                                {{ data.dataTable.checkList[2].name }}
                            </p>
                            <v-row class="ma-0 box-div">
                                <v-col cols="6" lg="2" class="pa-0 d-table border-tr">
                                    <p class="mb-0 d-table-cell v-align-middle text-center">{{ data.dataTable.checkList[2].market }}</p>
                                </v-col>
                                <v-col cols="6" lg="4" class="pa-0 d-table" :class="$vuetify.breakpoint.mdAndDown ? 'border-t' : 'border-tr'">
                                    <p class="mb-0 d-table-cell v-align-middle text-center">{{ data.dataTable.checkList[2].assetClass }}</p>
                                </v-col>
                                <v-col
                                    v-if="data.dataTable.checkList[2].riskLevel != null"
                                    cols="12"
                                    lg="4"
                                    class="pa-0 d-table text-center"
                                    :class="$vuetify.breakpoint.mdAndDown ? 'border-t' : 'border-tr'"
                                >
                                    <v-rating
                                        full-icon="mdi-checkbox-blank-circle"
                                        empty-icon="mdi-checkbox-blank-circle-outline"
                                        readonly
                                        icon-label="custom icon label text {0} of {1}"
                                        class="d-table-cell v-align-middle"
                                        :value="data.dataTable.checkList[2].riskLevel"
                                    ></v-rating>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-col>
            </div>
            <v-col class="center pa-0" style="background-color: #f3f3f3" v-if="data.dataTable.checkList.length != 0 && flag.scroll">
                <v-row no-gutters style="margin-top: 25px; padding-bottom: 25px; border-bottom: 1px solid #e8e8e8" :class="[flag.compare ? tdisplay : tbdisplay]">
                    <div class="wrapper-1920 drop-pa" :class="$vuetify.breakpoint.smAndDown ? '' : 'd-flex'">
                        <v-col cols="6" lg="3" md="3" style="padding: 1px" :class="$vuetify.breakpoint.smAndDown ? 'float-left' : ''">
                            <div style="background-color: #fff; border: 1px solid" class="drop-compare-before">Features</div>
                        </v-col>
                        <v-col cols="6" lg="3" md="3" style="padding: 1px" v-if="data.dataTable.checkList[0] == null" :class="$vuetify.breakpoint.smAndDown ? 'float-right' : ''">
                            <div style="border: 2px solid #e8e8e8; color: #b3b3b3" class="drop-compare-before">Fund 1</div>
                        </v-col>
                        <v-col cols="6" lg="3" md="3" style="padding: 1px" v-else :class="$vuetify.breakpoint.smAndDown ? 'float-right' : ''">
                            <div style="background-color: #fff; border: 1px solid" class="drop-compare-after">
                                <div style="margin-top: 15px">
                                    <span class="box-text">{{ data.dataTable.checkList[0].code }}</span>
                                    <img :src="img.iconDelete" class="cursor" style="width: 25px; height: 28px; float: right; margin-right: 10px" @click="assetDelete(0)" />
                                </div>
                                <p class="box-title font-weight-bold">
                                    {{ data.dataTable.checkList[0].name }}
                                </p>
                            </div>
                        </v-col>
                        <v-col cols="6" lg="3" md="3" style="padding: 1px" v-if="data.dataTable.checkList[1] == null" :class="$vuetify.breakpoint.smAndDown ? 'float-left' : ''">
                            <div style="border: 2px solid #e8e8e8; color: #b3b3b3" class="drop-compare-before">Fund 2</div>
                        </v-col>
                        <v-col cols="6" lg="3" md="3" style="padding: 1px" v-else :class="$vuetify.breakpoint.smAndDown ? 'float-left' : ''">
                            <div style="background-color: #fff; border: 1px solid" class="drop-compare-after">
                                <div style="margin-top: 15px">
                                    <span class="box-text">{{ data.dataTable.checkList[1].code }}</span>
                                    <img :src="img.iconDelete" class="cursor" style="width: 25px; height: 28px; float: right; margin-right: 10px" @click="assetDelete(1)" />
                                </div>
                                <p class="box-title font-weight-bold">
                                    {{ data.dataTable.checkList[1].name }}
                                </p>
                            </div>
                        </v-col>
                        <v-col cols="6" lg="3" md="3" style="padding: 1px" v-if="data.dataTable.checkList[2] == null" :class="$vuetify.breakpoint.smAndDown ? 'float-right' : ''">
                            <div style="border: 2px solid #e8e8e8; color: #b3b3b3" class="drop-compare-before">Fund 3</div>
                        </v-col>
                        <v-col cols="6" lg="3" md="3" style="padding: 1px" v-else :class="$vuetify.breakpoint.smAndDown ? 'float-right' : ''">
                            <div style="background-color: #fff; border: 1px solid" class="drop-compare-after">
                                <div style="margin-top: 15px">
                                    <span class="box-text">{{ data.dataTable.checkList[2].code }}</span>
                                    <img :src="img.iconDelete" class="cursor" style="width: 25px; height: 28px; float: right; margin-right: 10px" @click="assetDelete(2)" />
                                </div>
                                <p class="box-title font-weight-bold">
                                    {{ data.dataTable.checkList[2].name }}
                                </p>
                            </div>
                        </v-col>
                    </div>
                </v-row>
                <div style="color: #000; text-align: center; padding: 9px; font-size: 18px; align-items: center" class="wrapper-1920">
                    <span @click="flag.compare = !flag.compare" class="cursor justify-center align-center">Portfolio Compare</span>
                    <img :src="img.arrowDown" class="cursor justify-center align-center" :class="[flag.compare ? tbdisplay : tdisplay]" />
                    <img :src="img.arrowUp" class="cursor justify-center align-center" :class="[flag.compare ? tdisplay : tbdisplay]" />
                </div>
            </v-col>
            <div style="background-color: #fff; width: 100%">
                <v-col cols="12" class="bottom">
                    <v-row class="cmt">
                        <v-col>
                            <table cellspacing="0" cellpadding="0">
                                <colgroup>
                                    <col style="width: 25%" />
                                    <col style="width: 25%" />
                                    <col style="width: 25%" />
                                    <col style="width: 25%" />
                                </colgroup>
                                <thead>
                                    <tr :class="[objectiveFlag ? color : trcolor]" @click="objectiveFlag = !objectiveFlag">
                                        <th colspan="4">
                                            <span :class="[objectiveFlag ? spancolor : '']" class="tb-title">Objective</span>
                                            <span style="float: right; margin-right: 10px">
                                                <img :src="objectiveFlag ? img.pointUp : img.pointDown" style="float: center; width: 21px; height: 10px" id="point" />
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody :class="[objectiveFlag ? tdisplay : tbdisplay]">
                                    <tr>
                                        <td>
                                            <div class="td-content font-weight-bold">Asset Class</div>
                                        </td>
                                        <td v-for="(id, idx) in 3" :key="id">
                                            <div v-if="data.dataTable.checkList[idx] != null" class="td-content">
                                                {{ data.dataTable.checkList[idx].assetClass != null ? data.dataTable.checkList[idx].assetClass : '-' }}
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="td-content font-weight-bold">Sub Asset Class</div>
                                        </td>
                                        <td v-for="(id, idx) in 3" :key="id">
                                            <div v-if="data.dataTable.checkList[idx] != null" class="td-content">
                                                {{ data.dataTable.checkList[idx].subAssetClass != null ? data.dataTable.checkList[idx].subAssetClass : '-' }}
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="td-content font-weight-bold">Investment Objective</div>
                                        </td>
                                        <td v-for="(id, idx) in 3" :key="id">
                                            <div v-if="data.dataTable.checkList[idx] != null" class="td-content">
                                                {{ data.dataTable.checkList[idx].objective != null ? data.dataTable.checkList[idx].objective : '-' }}
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="td-content font-weight-bold">Benchmark Index</div>
                                        </td>
                                        <td v-for="(id, idx) in 3" :key="id">
                                            <div v-if="data.dataTable.checkList[idx] != null" class="td-content">
                                                <template v-if="data.dataTable.checkList[idx].asset != null">
                                                    <span v-for="(item, idx2) in data.dataTable.checkList[idx].asset" :key="idx2">
                                                        {{ item }}({{ data.dataTable.checkList[idx].weight[idx2] * 100 }}%);
                                                    </span>
                                                </template>
                                                <span v-else>-</span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </v-col>
                    </v-row>
                    <v-row class="cmt">
                        <v-col>
                            <table cellspacing="0" cellpadding="0">
                                <colgroup>
                                    <col style="width: 25%" />
                                    <col style="width: 25%" />
                                    <col style="width: 25%" />
                                    <col style="width: 25%" />
                                </colgroup>
                                <thead>
                                    <tr :class="[returnFlag ? color : trcolor]" @click="returnFlag = !returnFlag">
                                        <th colspan="4">
                                            <span :class="[returnFlag ? spancolor : '']" class="tb-title">Return Series (NAV)</span>
                                            <span style="float: right; margin-right: 10px">
                                                <img :src="returnFlag ? img.pointUp : img.pointDown" style="float: center; width: 21px; height: 10px" id="point" />
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                            <div id="test" :class="[returnFlag ? tdisplay : tbdisplay]" style="border-bottom: 1px solid">
                                <figure class="highcharts-figure" :class="[data.dataTable.checkList.length != 0 ? tdisplay : tbdisplay]">
                                    <div id="lineChart"></div>
                                </figure>
                            </div>
                            <table cellspacing="0" cellpadding="0">
                                <colgroup>
                                    <col style="width: 25%" />
                                    <col style="width: 25%" />
                                    <col style="width: 25%" />
                                    <col style="width: 25%" />
                                </colgroup>
                                <tbody :class="[returnFlag ? tdisplay : tbdisplay]">
                                    <tr>
                                        <td>
                                            <div class="td-content font-weight-bold">Product</div>
                                        </td>
                                        <td v-for="(id, idx) in 3" :key="id">
                                            <div v-if="data.dataTable.checkList[idx] != null" class="td-content">
                                                {{ data.dataTable.checkList[idx].name }}
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="td-content font-weight-bold">1M</div>
                                        </td>
                                        <td v-for="(id, idx) in 3" :key="id">
                                            <div v-if="data.dataTable.checkList[idx] != null" class="td-right">
                                                {{ data.dataTable.checkList[idx].priceCalcList.M1 != null ? (data.dataTable.checkList[idx].priceCalcList.M1 * 100).toFixed(2) + '%' : '-' }}
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="td-content font-weight-bold">3M</div>
                                        </td>
                                        <td v-for="(id, idx) in 3" :key="id">
                                            <div v-if="data.dataTable.checkList[idx] != null" class="td-right">
                                                {{ data.dataTable.checkList[idx].priceCalcList.M3 != null ? (data.dataTable.checkList[idx].priceCalcList.M3 * 100).toFixed(2) + '%' : '-' }}
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="td-content font-weight-bold">6M</div>
                                        </td>
                                        <td v-for="(id, idx) in 3" :key="id">
                                            <div v-if="data.dataTable.checkList[idx] != null" class="td-right">
                                                {{ data.dataTable.checkList[idx].priceCalcList.M6 != null ? (data.dataTable.checkList[idx].priceCalcList.M6 * 100).toFixed(2) + '%' : '-' }}
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="td-content font-weight-bold">1Y</div>
                                        </td>
                                        <td v-for="(id, idx) in 3" :key="id">
                                            <div v-if="data.dataTable.checkList[idx] != null" class="td-right">
                                                {{ data.dataTable.checkList[idx].priceCalcList.Y1 != null ? (data.dataTable.checkList[idx].priceCalcList.Y1 * 100).toFixed(2) + '%' : '-' }}
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="td-content font-weight-bold">3Y</div>
                                        </td>
                                        <td v-for="(id, idx) in 3" :key="id">
                                            <div v-if="data.dataTable.checkList[idx] != null" class="td-right">
                                                {{ data.dataTable.checkList[idx].priceCalcList.Y3 != null ? (data.dataTable.checkList[idx].priceCalcList.Y3 * 100).toFixed(2) + '%' : '-' }}
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="td-content font-weight-bold">5Y</div>
                                        </td>
                                        <td v-for="(id, idx) in 3" :key="id">
                                            <div v-if="data.dataTable.checkList[idx] != null" class="td-right">
                                                {{ data.dataTable.checkList[idx].priceCalcList.Y5 != null ? (data.dataTable.checkList[idx].priceCalcList.Y5 * 100).toFixed(2) + '%' : '-' }}
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="td-content font-weight-bold">10Y</div>
                                        </td>
                                        <td v-for="(id, idx) in 3" :key="id">
                                            <div v-if="data.dataTable.checkList[idx] != null" class="td-right">
                                                {{ data.dataTable.checkList[idx].priceCalcList.Y10 != null ? (data.dataTable.checkList[idx].priceCalcList.Y10 * 100).toFixed(2) + '%' : '-' }}
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="td-content font-weight-bold">MAX</div>
                                        </td>
                                        <td v-for="(id, idx) in 3" :key="id">
                                            <div v-if="data.dataTable.checkList[idx] != null" class="td-right">
                                                {{
                                                    data.dataTable.checkList[idx].priceCalcList.CumReturn != null ? (data.dataTable.checkList[idx].priceCalcList.CumReturn * 100).toFixed(2) + '%' : '-'
                                                }}
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </v-col>
                    </v-row>
                    <v-row class="cmt">
                        <v-col>
                            <table cellspacing="0" cellpadding="0">
                                <colgroup>
                                    <col style="width: 25%" />
                                    <col style="width: 25%" />
                                    <col style="width: 25%" />
                                    <col style="width: 25%" />
                                </colgroup>
                                <thead>
                                    <tr @click="expectedFlag = !expectedFlag" :class="[expectedFlag ? color : trcolor]">
                                        <th colspan="4">
                                            <span :class="[expectedFlag ? spancolor : '']" class="tb-title">Expected Return</span>
                                            <span style="float: right; margin-right: 10px">
                                                <img :src="expectedFlag ? img.pointUp : img.pointDown" style="float: center; width: 21px; height: 10px" id="point" />
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody :class="[expectedFlag ? tdisplay : tbdisplay]">
                                    <tr>
                                        <td>
                                            <div class="td-content font-weight-bold">NAV</div>
                                        </td>
                                        <td v-for="(id, idx) in 3" :key="id">
                                            <div v-if="data.dataTable.checkList[idx] != null" class="td-right">
                                                {{ data.dataTable.checkList[idx].close != null ? '$' + data.dataTable.checkList[idx].close.toFixed(2) : '-' }}
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="td-content font-weight-bold">YTD NAV return</div>
                                        </td>
                                        <td v-for="(id, idx) in 3" :key="id">
                                            <div v-if="data.dataTable.checkList[idx] != null" class="td-right">
                                                {{ data.dataTable.checkList[idx].priceCalcList.YTD != null ? (data.dataTable.checkList[idx].priceCalcList.YTD * 100).toFixed(2) + '%' : '-' }}
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="td-content font-weight-bold">30 Day Avg Volume</div>
                                        </td>
                                        <td v-for="(id, idx) in 3" :key="id">
                                            <div v-if="data.dataTable.checkList[idx] != null" class="td-right">
                                                {{ data.dataTable.checkList[idx].volumeAvg != null ? data.dataTable.checkList[idx].volumeAvg.toFixed(2) : '-' }}
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </v-col>
                    </v-row>
                    <v-row class="cmt">
                        <v-col>
                            <table cellspacing="0" cellpadding="0">
                                <thead>
                                    <tr @click="assetFlag = !assetFlag" :class="[assetFlag ? color : trcolor]">
                                        <th colspan="4">
                                            <span :class="[assetFlag ? spancolor : '']" class="tb-title">Asset Class / Sub Asset Class</span>
                                            <span style="float: right; margin-right: 10px">
                                                <img :src="assetFlag ? img.pointUp : img.pointDown" style="float: center; width: 21px; height: 10px" id="point" />
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                            <div style="width: 100%; overflow: auto">
                                <table :class="[assetFlag ? tdisplay : tbdisplay]" cellspacing="0" cellpadding="0" style="min-width: 1000px">
                                    <colgroup>
                                        <col style="width: 15%" />
                                        <col style="width: 28%" />
                                        <col style="width: 28%" />
                                        <col style="width: 28%" />
                                    </colgroup>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="td-content font-weight-bold">Asset Allocation</div>
                                            </td>
                                            <td>
                                                <div v-show="data.dataTable.checkList[0] != null && data.dataTable.tableName[0] === 'strategy'">
                                                    <div style="text-align: center" class="td-content">
                                                        <toggleButton :values="styles" :selected.sync="style" default="on" class="toggle" @toggleFirst="toggleData"></toggleButton>
                                                    </div>
                                                    <figure class="highcharts-figure chart" :class="[toggle ? tdisplay : tbdisplay]">
                                                        <div id="pie0"></div>
                                                    </figure>
                                                    <figure class="highcharts-figure chart" :class="[toggle ? tbdisplay : tdisplay]">
                                                        <div id="centerBar0"></div>
                                                    </figure>
                                                </div>
                                                <div v-if="data.dataTable.checkList[0] == null || data.dataTable.tableName[0] !== 'strategy'" class="vertical-center">
                                                    <h3>-</h3>
                                                </div>
                                            </td>
                                            <td>
                                                <div v-show="data.dataTable.checkList[1] != null && data.dataTable.tableName[1] === 'strategy'">
                                                    <div style="text-align: center" class="td-content">
                                                        <toggleButton :values="styles" :selected.sync="style" default="on" class="toggle" @toggleSecond="toggleData1"></toggleButton>
                                                    </div>
                                                    <figure class="highcharts-figure chart" :class="[toggle1 ? tdisplay : tbdisplay]">
                                                        <div id="pie1"></div>
                                                    </figure>
                                                    <figure class="highcharts-figure chart" :class="[toggle1 ? tbdisplay : tdisplay]">
                                                        <div id="centerBar1"></div>
                                                    </figure>
                                                </div>
                                                <div v-if="data.dataTable.checkList[1] == null || data.dataTable.tableName[1] !== 'strategy'" class="vertical-center">
                                                    <h3>-</h3>
                                                </div>
                                            </td>
                                            <td>
                                                <div v-show="data.dataTable.checkList[2] != null && data.dataTable.tableName[2] === 'strategy'">
                                                    <div style="text-align: center" class="td-content">
                                                        <toggleButton :values="styles" :selected.sync="style" default="on" class="toggle" @toggleThird="toggleData2"></toggleButton>
                                                    </div>
                                                    <figure class="highcharts-figure chart" :class="[toggle2 ? tdisplay : tbdisplay]">
                                                        <div id="pie2"></div>
                                                    </figure>
                                                    <figure class="highcharts-figure chart" :class="[toggle2 ? tbdisplay : tdisplay]">
                                                        <div id="centerBar2"></div>
                                                    </figure>
                                                </div>
                                                <div v-if="data.dataTable.checkList[2] == null || data.dataTable.tableName[2] !== 'strategy'" class="vertical-center">
                                                    <h3>-</h3>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="color-box" style="background-color: #ff754b"></div>
                                                <div style="float: left" class="td-content font-weight-bold box-mt">US Equity</div>
                                            </td>
                                            <td v-for="(id, idx) in 3" :key="id">
                                                <div v-if="data.dataTable.checkList[idx] != null && data.dataTable.tableName[idx] === 'strategy'" class="td-right">
                                                    {{ data.dataTable.checkList[idx].usEquity != null ? (data.dataTable.checkList[idx].usEquity * 100).toFixed(2) + '%' : '0.00%' }}
                                                </div>
                                                <div v-else class="vertical-center">
                                                    <h3>-</h3>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="color-box" style="background-color: #fec90e"></div>
                                                <div style="float: left" class="td-content font-weight-bold box-mt">Non US Equity</div>
                                            </td>
                                            <td v-for="(id, idx) in 3" :key="id">
                                                <div v-if="data.dataTable.checkList[idx] != null && data.dataTable.tableName[idx] === 'strategy'" class="td-right">
                                                    {{ data.dataTable.checkList[idx].equity != null ? (data.dataTable.checkList[idx].equity * 100).toFixed(2) + '%' : '0.00%' }}
                                                </div>
                                                <div v-else class="vertical-center">
                                                    <h3>-</h3>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="color-box" style="background-color: #2e9875"></div>
                                                <div style="float: left" class="td-content font-weight-bold box-mt">Fixed Income</div>
                                            </td>
                                            <td v-for="(id, idx) in 3" :key="id">
                                                <div v-if="data.dataTable.checkList[idx] != null && data.dataTable.tableName[idx] === 'strategy'" class="td-right">
                                                    {{ data.dataTable.checkList[idx].fixed != null ? (data.dataTable.checkList[idx].fixed * 100).toFixed(2) + '%' : '0.00%' }}
                                                </div>
                                                <div v-else class="vertical-center">
                                                    <h3>-</h3>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="color-box" style="background-color: #b8dec3"></div>
                                                <div style="float: left" class="td-content font-weight-bold box-mt">Other</div>
                                            </td>
                                            <td v-for="(id, idx) in 3" :key="id">
                                                <div v-if="data.dataTable.checkList[idx] != null && data.dataTable.tableName[idx] === 'strategy'" class="td-right">
                                                    {{ data.dataTable.checkList[idx].other != null ? (data.dataTable.checkList[idx].other * 100).toFixed(2) + '%' : '0.00%' }}
                                                </div>
                                                <div v-else class="vertical-center">
                                                    <h3>-</h3>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
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
<script lang="ts">
import Vue from 'vue';
import toggleButton from '@/pages/components/toggle-button.vue';
import chartTest from '@/pages/components/chart.vue';
import meta from '@/api/meta';
import _ from 'lodash';

import pointUp from '@/assets/images/pointUp.png';
import pointDown from '@/assets/images/pointDown.png';
import magnify from '@/assets/images/magnify-glass.png';
import iconDelete from '@/assets/images/iconDelete.png';
import close from '@/assets/images/close.png';
import arrowUp from '@/assets/images/icon_arrow_up_small.png';
import arrowDown from '@/assets/images/icon_arrow_down_small.png';

import Highcharts from 'highcharts';
import pattern from 'highcharts/modules/pattern-fill';
import HighchartsVue from 'highcharts-vue';

pattern(Highcharts);
Vue.use(HighchartsVue);
export default Vue.extend({
    components: {
        chartTest,
        toggleButton,
    },
    data() {
        return {
            img: {
                pointUp,
                pointDown,
                magnify,
                iconDelete,
                close,
                arrowUp,
                arrowDown,
            },
            style: '',
            styles: {
                on: 'Pie Chart',
                off: 'Bar Chart',
            },
            data: {
                asset: {},
                searchText: '',
                strategyList: [],
                searchList: [] as any,
                dataTable: {
                    checkList: [] as any,
                    tableName: [] as any,
                },
                aiPortfolioList: [] as any,
            },
            flag: {
                search: false,
                compare: false,
                scroll: false,
            },
            objectiveFlag: false,
            returnFlag: false,
            expectedFlag: false,
            assetFlag: false,
            riskFlag: false,
            toggle2: true,
            toggle1: true,
            toggle: true,
            imgFlag: false,
            color: 'color',
            trcolor: 'trcolor',
            tdisplay: 'tdisplay',
            tbdisplay: 'tbdisplay',
            spancolor: 'spancolor',
            scrollPosition: 0,
        };
    },
    methods: {
        searchKeydown(e: any) {
            let tempList = [] as any;
            const searchText = e.target.value;
            this.data.searchText = searchText;
            this.data.searchList = [];
            this.flag.search = false;

            this.data.strategyList.forEach((x: any) => {
                tempList.push({ id: x.id, name: x.name, tableName: x.tableName });
            });

            tempList.forEach((x: any) => {
                if (x.name != null && x.name.toLowerCase().indexOf(searchText.toLowerCase()) >= 0) {
                    this.data.searchList.push(x);
                }
            });

            this.$nextTick(function () {
                const inputText: any = document.getElementsByClassName('input-text');
                for (let i = 0; i < inputText.length; i += 1) {
                    inputText[i].innerHTML = this.data.searchList[i].name;
                }

                if (searchText != null && searchText !== '') {
                    for (let i = 0; i < inputText.length; i += 1) {
                        const innerHtml: any = inputText[i].innerText;
                        const regexAllCase = new RegExp(searchText, 'gi');
                        inputText[i].innerHTML = innerHtml.replace(regexAllCase, '<span class="highlight">$&</span>');
                    }
                }
            });
        },

        async assetDelete(id: number) {
            this.data.dataTable.checkList.splice(id, 1);
            this.data.dataTable.tableName.splice(id, 1);
        },

        async focus() {
            this.imgFlag = true;
        },

        async handleScroll() {
            this.scrollPosition = window.scrollY || document.documentElement.scrollTop;
            if (this.scrollPosition < 800) {
                this.flag.scroll = false;
            } else {
                this.flag.scroll = true;
            }
        },

        async searchKeyword(id: any, tableName: any) {
            this.flag.search = true;
            this.objectiveFlag = true;
            this.imgFlag = false;
            const list = [];
            let result;

            this.$store.commit('app/SET_LOADING', true);
            if ('strategy' === tableName) {
                result = (await meta.api.common.strategy.getStrategy({ id: id })).data;
                result.priceCalcList = result.priceCalcList[result.name];
                result.asset = result.asset.split(',');
                result.weight = result.weight.split(',');
                const hodings = (await meta.api.common.strategy.getStrategychart({ id: id })).data;
                let sum0 = 0;
                let sum1 = 0;
                let sum2 = 0;
                let sum3 = 0;
                let total = 0;

                for (let i = 0; i < hodings.length; i++) {
                    total += hodings[i].weightSum;
                    if (hodings[i].market === 'US' && hodings[i].assetClass === 'Equity') {
                        sum0 = hodings[i].weightSum;
                    } else if (hodings[i].market != 'US' && hodings[i].assetClass === 'Equity') {
                        sum1 = hodings[i].weightSum;
                    } else if (hodings[i].assetClass === 'Fixed Income') {
                        sum2 = hodings[i].weightSum;
                    } else {
                        sum3 = hodings[i].weightSum;
                    }
                }

                result.usEquity = sum0 / total;
                result.equity = sum1 / total;
                result.fixed = sum2 / total;
                result.other = sum3 / total;

                if (result.usEquity === 0) {
                    result.usEquity = null;
                }
                if (result.equity === 0) {
                    result.equity = null;
                }
                if (result.fixed === 0) {
                    result.fixed = null;
                }
                if (result.other === 0) {
                    result.other = null;
                }

                result.tableName = 'strategy';
                this.data.dataTable.tableName.push('strategy');
            } else {
                result = (await meta.api.common.asset.getAsset({ id: id })).data;

                if (result.priceCalcList == null) {
                    this.$store.commit('app/SET_LOADING', false);
                    await meta.alert('데이터가 부족합니다.');
                    return;
                }

                result.priceCalcList = result.priceCalcList[result.code];
                result.tableName = 'asset';
                this.data.dataTable.tableName.push('asset');
            }

            this.data.dataTable.checkList.push(result);

            for (let i = 0; i < this.data.dataTable.checkList.length; i++) {
                list.push({ id: this.data.dataTable.checkList[i].id, tableName: this.data.dataTable.tableName[i] });
            }

            const set = _.uniqBy(list, function (elem) {
                return [elem.id, elem.tableName].join();
            });

            if (set.length < this.data.dataTable.checkList.length) {
                this.$store.commit('app/SET_LOADING', false);
                await meta.alert('중복된 데이터입니다.');
                this.data.dataTable.checkList.pop();
            }

            if (this.data.dataTable.checkList.length > 3) {
                this.$store.commit('app/SET_LOADING', false);
                await meta.alert('3개의 데이터만 선택 가능합니다.');
                this.data.dataTable.checkList.pop();
            }

            this.$store.commit('app/SET_LOADING', false);
        },

        async getStrategyList() {
            let arr = [] as any;

            const strategyList = (
                await meta.api.common.strategy.getSearchList({
                    page: 1,
                    rowSize: 100000000,
                })
            ).data.items;

            strategyList.forEach((x: any) => {
                if (x.name != null && x.name != '') {
                    arr.push(x);
                }
            });

            this.data.strategyList = arr;
            this.data.searchList = arr;
        },

        handler() {
            var args = arguments;
            for (var arg of args) {
                if (arg instanceof Function) {
                    arg();
                }
            }
        },

        toggleData(data: any) {
            if (data === 'on') {
                this.toggle = true;
            } else {
                this.toggle = false;
            }
        },

        toggleData1(data: any) {
            if (data === 'on') {
                this.toggle1 = true;
            } else {
                this.toggle1 = false;
            }
        },

        toggleData2(data: any) {
            if (data === 'on') {
                this.toggle2 = true;
            } else {
                this.toggle2 = false;
            }
        },

        async setPieChart() {
            if (this.data.dataTable.checkList.length > 0 && this.data.dataTable.checkList.length < 4) {
                for (let i = 0; i < this.data.dataTable.checkList.length; i++) {
                    let data1 = null;
                    let data2 = null;
                    let data3 = null;
                    let data4 = null;
                    if (this.data.dataTable.checkList.length > 0 && this.data.dataTable.checkList[i].tableName === 'strategy') {
                        data1 = this.data.dataTable.checkList[i].usEquity;
                        data2 = this.data.dataTable.checkList[i].equity;
                        data3 = this.data.dataTable.checkList[i].fixed;
                        data4 = this.data.dataTable.checkList[i].other;
                    }
                    Highcharts.chart('pie' + i, {
                        credits: { enabled: false }, // 하단 highchart.com 글씨 삭제
                        chart: {
                            plotBackgroundColor: null,
                            plotBorderWidth: 0,
                            plotShadow: false,
                            width: 300,
                            height: 300,
                        },
                        title: {
                            text: '',
                        },
                        tooltip: {
                            pointFormat: '{series.name}: <b>{point.percentage:.2f}%</b>',
                        },
                        accessibility: {
                            point: {
                                valueSuffix: '%',
                            },
                        },
                        exporting: {
                            // 상단 context menu 제거
                            enabled: false,
                        },
                        plotOptions: {
                            pie: {
                                borderColor: '#000000',
                                dataLabels: {
                                    enabled: false,
                                },
                                startAngle: 0,
                                endAngle: 360,
                                center: ['50%'],
                                size: '70%',
                            },
                        },
                        series: [
                            {
                                type: 'pie',
                                name: 'Asset',
                                innerSize: '50%',
                                data: [
                                    {
                                        name: 'US Equity',
                                        y: data1,
                                        color: meta.chart.colorArr[0],
                                    },
                                    {
                                        name: 'Non US Equity',
                                        y: data2,
                                        color: meta.chart.colorArr[1],
                                    },
                                    {
                                        name: 'Fixed Income',
                                        y: data3,
                                        color: meta.chart.colorArr[2],
                                    },
                                    {
                                        name: 'Other',
                                        y: data4,
                                        color: meta.chart.colorArr[3],
                                    },
                                ],
                            },
                        ],
                    });
                }
            }
        },

        async setLineChart() {
            let data1 = [];
            let data2 = [];
            let data3 = [];
            let code1 = [];
            let code2 = [];
            let code3 = [];

            if (this.data.dataTable.checkList.length > 0) {
                for (let i = 0; i < this.data.dataTable.checkList.length; i++) {
                    let dateList = [] as any;
                    const date = this.data.dataTable.checkList[i].date.split(',');
                    const price = this.data.dataTable.checkList[i].price.split(',');

                    date.forEach((x: any) => {
                        const arr = x.split('-');
                        const day = new Date(arr[0], arr[1] - 1, arr[2]);
                        dateList.push(Date.UTC(day.getFullYear(), day.getMonth(), day.getDate()));
                    });

                    for (let j = 0; j < date.length; j++) {
                        if (i == 0) {
                            data1.push([dateList[j], Number(price[j])]);
                            code1 = this.data.dataTable.checkList[i].code;
                        } else if (i == 1) {
                            data2.push([dateList[j], Number(price[j])]);
                            code2 = this.data.dataTable.checkList[i].code;
                        } else {
                            data3.push([dateList[j], Number(price[j])]);
                            code3 = this.data.dataTable.checkList[i].code;
                        }
                    }
                }
            }

            Highcharts.chart('lineChart', {
                chart: {
                    height: 400,
                    events: {
                        render: function () {
                            const chart = this as any,
                                startX = 0,
                                startY = 40,
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
                    spacingRight: 0,
                    spacingLeft: 0,
                },
                exporting: {
                    // 상단 context menu 제거
                    enabled: false,
                },
                title: {
                    text: '',
                },
                credits: { enabled: false }, // 하단 highchart.com 글씨 삭제
                xAxis: {
                    type: 'datetime',
                    tickColor: '#000',
                    tickInterval: 24 * 60 * 60 * 1000 * 125,
                    labels: {
                        formatter: function () {
                            return Highcharts.dateFormat('%b', this.value);
                        },
                        style: {
                            color: '#000',
                            fontSize: '18px',
                        },
                    },
                    // lineColor: '#000',
                    // lineWidth: 1,
                },
                yAxis: {
                    labels: {
                        format: '{value:,.0f}',
                    },
                    title: {
                        text: '',
                    },
                },
                scrollbar: {
                    enabled: false,
                },
                rangeSelector: {
                    enabled: true,
                    inputEnabled: false,
                    dropdown: 'responsive',
                    allButtonsEnabled: false,
                    labelStyle: {
                        display: 'none',
                    },
                    buttonTheme: {
                        fill: 'none',
                        stroke: 'none',
                        'stroke-width': 0,
                        r: 8,
                        style: {
                            color: '#b3b3b3',
                            fontWeight: '900',
                        },
                        states: {
                            hover: {
                                fill: 'none',
                            },
                            select: {
                                fill: 'none',
                                style: {
                                    color: 'black',
                                },
                            },
                        },
                    },
                    x: -80,
                    buttonPosition: {
                        align: 'left',
                        x: 0,
                        y: 0,
                    },
                    buttons: [
                        {
                            type: 'month',
                            count: 1,
                            text: '1m',
                        },
                        {
                            type: 'month',
                            count: 3,
                            text: '3m',
                        },
                        {
                            type: 'month',
                            count: 6,
                            text: '6m',
                        },
                        {
                            type: 'ytd',
                            text: 'YTD',
                        },
                        {
                            type: 'year',
                            count: 1,
                            text: '1y',
                        },
                        {
                            type: 'year',
                            count: 3,
                            text: '3y',
                        },
                        {
                            type: 'year',
                            count: 5,
                            text: '5y',
                        },
                        {
                            type: 'year',
                            count: 10,
                            text: '10y',
                        },
                        {
                            type: 'all',
                            text: 'All',
                        },
                    ],
                },
                responsive: {
                    rules: [
                        {
                            condition: {
                                maxWidth: 550,
                            },
                            chartOptions: {
                                rangeSelector: {
                                    x: 0,
                                    buttonPosition: {
                                        align: 'left',
                                        x: -40,
                                        y: 0,
                                    },
                                },
                            },
                        },
                        {
                            condition: {
                                maxWidth: 730,
                            },
                            chartOptions: {
                                legend: {
                                    y: 0,
                                },
                                chart: {
                                    events: {
                                        render: function () {
                                            const chart = this as any,
                                                startX = 0,
                                                startY = 75,
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
                                },
                            },
                        },
                    ],
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
                    y: -40,
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
                        name: code1,
                        data: data1,
                        color: meta.chart.colorArr[0],
                        marker: {
                            symbol: 'circle',
                            radius: 2,
                        },
                    },
                    {
                        name: code2,
                        data: data2,
                        color: meta.chart.colorArr[1],
                        marker: {
                            symbol: 'circle',
                            radius: 2,
                        },
                    },
                    {
                        name: code3,
                        data: data3,
                        color: meta.chart.colorArr[2],
                        marker: {
                            symbol: 'circle',
                            radius: 2,
                        },
                    },
                ],
            });
        },

        async setBarChart() {
            if (this.data.dataTable.checkList.length > 0 && this.data.dataTable.checkList.length < 4) {
                for (let i = 0; i < this.data.dataTable.checkList.length; i++) {
                    let data1 = null;
                    let data2 = null;
                    let data3 = null;
                    let data4 = null;
                    if (this.data.dataTable.checkList.length > 0 && this.data.dataTable.checkList[i].tableName === 'strategy') {
                        data1 = this.data.dataTable.checkList[i].usEquity * 100;
                        data2 = this.data.dataTable.checkList[i].equity * 100;
                        data3 = this.data.dataTable.checkList[i].fixed * 100;
                        data4 = this.data.dataTable.checkList[i].other * 100;
                    }
                    Highcharts.chart('centerBar' + i, {
                        chart: {
                            type: 'bar',
                            width: 350,
                            height: 350,
                        },
                        title: {
                            text: '',
                        },
                        xAxis: {
                            categories: ['US Equity ', 'Non US Equity', 'Fixed Income', 'Other'],
                            labels: {
                                enabled: false,
                            },
                            title: {
                                text: null,
                            },
                        },
                        yAxis: {
                            title: {
                                text: '',
                            },
                            labels: {
                                format: '{value}%',
                            },
                            max: 100,
                        },
                        tooltip: {
                            formatter: function () {
                                return '<b>' + this.point.category + '</b>: ' + Highcharts.numberFormat(Math.abs(this.point.y), 1) + '%';
                            },
                        },
                        plotOptions: {
                            bar: {
                                borderColor: '#000000',
                                dataLabels: {
                                    enabled: false,
                                },
                            },
                        },
                        legend: {
                            layout: 'vertical',
                            align: 'right',
                            verticalAlign: 'top',
                            x: -40,
                            y: 80,
                            floating: true,
                            borderWidth: 1,
                            backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
                            shadow: true,
                        },
                        credits: {
                            enabled: false,
                        },
                        defs: {
                            patterns: [
                                {
                                    id: 'custom-pattern',
                                    path: {
                                        d: 'M 0 0 L 10 10 M 9 -1 L 11 1 M -1 9 L 1 11',
                                        stroke: 'red',
                                        strokeWidth: 3,
                                    },
                                },
                            ],
                        },
                        series: [
                            {
                                name: 'Asset',
                                showInLegend: false,
                                data: [
                                    {
                                        name: 'US Equity',
                                        y: data1,
                                        color: meta.chart.colorArr[0],
                                    },
                                    {
                                        name: 'Non US Equity',
                                        y: data2,
                                        color: meta.chart.colorArr[1],
                                    },
                                    {
                                        name: 'Bonds',
                                        y: data3,
                                        color: meta.chart.colorArr[2],
                                    },
                                    {
                                        name: 'Other',
                                        y: data4,
                                        color: meta.chart.colorArr[3],
                                    },
                                ],
                            },
                        ],
                    });
                }
            }
        },
    },

    mounted() {
        window.addEventListener('scroll', this.handleScroll);

        let i = 0;
        if (this.$route.query.strategyList != null) {
            for (i = 0; i < this.$route.query.strategyList.length; i++) {
                this.data.aiPortfolioList = this.$route.query.strategyList;
                this.searchKeyword(this.data.aiPortfolioList[i], 'strategy');
            }
        } else if (this.$route.query.themeList != null) {
            for (i = 0; i < this.$route.query.themeList.length; i++) {
                this.data.aiPortfolioList = this.$route.query.themeList;
                this.searchKeyword(this.data.aiPortfolioList[i], 'asset');
            }
        }

        this.setPieChart();
        this.setBarChart();
        this.setLineChart();
        this.getStrategyList();
        Highcharts.setOptions({
            lang: {
                rangeSelectorFrom: 'From',
                rangeSelectorTo: 'To',
                thousandsSep: ',',
            },
        });
    },

    watch: {
        'data.dataTable.checkList': {
            async handler() {
                this.setLineChart();
                this.setPieChart();
                this.setBarChart();
            },
        },
    },
});
</script>

<style>
/* box */
.compare-etfs .box-div {
    position: absolute;
    bottom: 0;
    width: 100%;
}

.compare-etfs .border-tr {
    border-top: 1px solid #000;
    border-right: 1px solid #000;
}

.compare-etfs .border-t {
    border-top: 1px solid #000;
}

/* 전체적인 css */
.compare-etfs .top {
    height: 513px;
    padding: 120px 150px;
    max-width: 1920px;
    width: 100%;
    margin: auto;
}

.compare-etfs .menu-title {
    font-size: 64px !important;
    font-weight: 900;
    color: #000;
    line-height: 1.09;
    margin-bottom: 25px;
}

.compare-etfs .menu-sub-title {
    font-size: 24px !important;
    font-weight: normal;
    color: #000;
    margin-bottom: 40px;
}

/* top css */
.compare-etfs .search-box {
    width: 100%;
    height: 66px;
    object-fit: contain;
    border: 2px solid #000000;
    background-color: #ffffff;
    position: relative;
    margin-top: -9px;
    padding-left: 20px;
    font-size: 21px;
}

.compare-etfs .search-result {
    max-height: 450px;
    width: 100%;
    background-color: white;
    margin-top: 21px;
    border: 2px solid #000;
    position: relative;
    z-index: 1;
    padding: 20px;
    overflow-y: auto;
}

.compare-etfs .search-result p {
    font-size: 24px;
    line-height: 30px;
}

.compare-etfs .search-result .list {
    border-bottom: 1px solid #b3b3b3;
    padding: 16.5px 0px;
}

.compare-etfs .search-result .list .input-text {
    font-size: 24px;
    line-height: 35px;
    color: #b3b3b3;
}

.compare-etfs .search-btn {
    position: absolute;
    text-align: center;
    right: 10px;
    width: 18px;
    height: 18px;
    margin-top: 15px;
    margin-right: 10px;
}

.compare-etfs .middle {
    padding: 80px 150px;
    object-fit: contain;
    max-width: 1920px;
    width: 100%;
    margin: auto;
}

.compare-etfs .bottom {
    width: 100%;
    padding: 80px 150px 80px 150px;
    object-fit: contain;
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
}

/* box css */
.compare-etfs .box-title {
    font-size: 24px;
    margin-left: 20px;
    padding-top: 14px;
}

.compare-etfs .box-text {
    font-size: 21px;
    color: #b3b3b3;
    margin-left: 20px;
}

.compare-etfs .col-first {
    height: 280px;
    text-align: center;
}

.compare-etfs .col-middle {
    border-left: 2px solid;
    height: 280px;
    margin-left: -2px;
    position: relative;
}

.compare-etfs .col-last {
    border-left: 2px solid;
    height: 280px;
    text-align: center;
    margin-left: -2px;
}

.compare-etfs .add {
    display: inline-block;
    margin-top: 120px;
    font-size: 36px;
    font-weight: bold;
    line-height: 0.75;
}

.compare-etfs .fund {
    display: inline-block;
    margin-top: 130px;
    font-size: 24px;
    font-weight: bold;
    line-height: 0.75;
}

.compare-etfs .row-border {
    border: 2px solid;
}

.compare-etfs .sm-first {
    border-right: 2px solid;
    border-bottom: 2px solid;
    height: 250px;
    text-align: center;
}

.compare-etfs .sm-second {
    border-bottom: 2px solid;
    height: 250px;
    margin-left: -2px;
    position: relative;
}

.compare-etfs .sm-middle {
    height: 250px;
    position: relative;
}

.compare-etfs .sm-last {
    border-left: 2px solid;
    height: 250px;
    text-align: center;
    margin-left: -2px;
}

.compare-etfs .sm-lasts {
    border-left: 2px solid;
    height: 250px;
    position: relative;
    margin-left: -2px;
}

/* table css */
.compare-etfs .cmt table {
    width: 100%;
}

.compare-etfs .cmt {
    margin-bottom: 40px;
}

.compare-etfs .cmt th {
    border: 2px solid;
    padding: 10px;
    text-align: left;
    font-size: 24px;
    height: 72px;
}

.compare-etfs .cmt td {
    border-bottom: 1px solid #808080;
    height: 50px;
    vertical-align: top;
}

.compare-etfs .cmt td:first-child {
    border-right: 1px solid #808080;
}

.compare-etfs .cmt td:nth-child(3) {
    border-right: 1px solid #808080;
    border-left: 1px solid #808080;
}

.compare-etfs .tb-title {
    font-size: 24px;
    font-weight: 900;
    padding-left: 10px;
}

/* table text css
.td-content font-weight-bold {
    font-size:20px;
    font-weight: bold;
    padding:10px 10px 10px 20px;
}*/

.compare-etfs .td-content {
    text-align: left;
    font-size: 21px;
    font-weight: normal;
    line-height: 2.22;
    padding: 10px;
}

.compare-etfs .td-right {
    text-align: right;
    font-size: 18px;
    font-weight: normal;
    line-height: 2.22;
    padding: 12px;
}

.compare-etfs .highlight {
    color: #000;
}

/* table 변화 */
.color {
    background-color: #000;
}

.trcolor {
    background-color: #f3f3f3;
}

.tdisplay {
    display: '';
}

.tbdisplay {
    display: none;
}

.spancolor {
    color: #fff;
}

/* icon */
.v-rating .v-icon {
    font-size: 18px;
    padding: 0rem;
}

.v-application .primary--text {
    color: #fd3f01 !important;
}

.v-application .accent--text {
    color: #000 !important;
}

.mdi-checkbox-blank-circle-outline::before {
    content: '\F0130';
    color: #e8e8e8;
    background-color: #e8e8e8;
    border-radius: 10px;
    font-size: 14px;
    margin-right: 2px;
}

.compare-etfs .color-box {
    width: 18px;
    height: 18px;
    float: left;
    margin-left: 10px;
    margin-top: 22px;
    border-radius: 50%;
}

.compare-etfs .highcharts-root {
    display: flex;
    width: 100% !important;
    height: 100% !important;
}

.compare-etfs .highcharts-container {
    display: flex;
    width: 100% !important;
    height: 100% !important;
}

.compare-etfs .chart .highcharts-container {
    display: flex;
    width: 85% !important;
    height: 100% !important;
    margin: auto;
}

.cursor {
    cursor: pointer;
}

.compare-etfs .btn {
    outline: none !important;
    border: solid 1px #000000;
    width: 97px;
    height: 35px;
    padding-bottom: 5px;
    font-size: 18px;
    font-weight: bold;
}

.compare-etfs .drop-compare-before {
    min-height: 130px;
    height: 100%;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    padding: 50px 0px;
}

.compare-etfs .drop-compare-after {
    min-height: 130px;
    height: 100%;
}

.compare-etfs .center {
    position: fixed;
    width: 100%;
    z-index: 1;
}

.compare-etfs .drop-pa {
    padding: 0px 150px;
}

.compare-etfs .float-right {
    float: right;
}

.compare-etfs .float-left {
    float: left;
}

.compare-etfs .return-back {
    background-color: #fff0eb;
}

@media screen and (max-width: 1263px) {
    .compare-etfs .top {
        height: auto;
        padding: 50px 80px;
    }

    .compare-etfs .middle {
        padding: 30px 80px 40px 80px;
    }

    .compare-etfs .bottom {
        padding: 30px 80px;
    }

    .compare-etfs .menu-title {
        font-size: 50px !important;
        font-weight: 900;
        color: #000;
        line-height: 1.09;
    }

    .compare-etfs .menu-sub-title {
        font-size: 22px !important;
        font-weight: normal;
        color: #000;
        margin-bottom: 25px;
    }

    .compare-etfs .search-btn {
        right: 10px;
        margin-top: 10px;
    }

    .compare-etfs .search-box {
        height: 54px;
    }

    .compare-etfs .cmt th {
        font-size: 25px;
        height: 70px;
    }

    .compare-etfs .tb-title {
        font-size: 25px;
    }

    .compare-etfs .box-title {
        font-size: 20px;
        margin-left: 15px;
    }

    .compare-etfs .box-text {
        font-size: 20px;
        margin-left: 15px;
        margin-right: 15px;
    }

    .compare-etfs .cmt {
        margin-bottom: 30px;
    }

    .compare-etfs .add {
        font-size: 30px;
    }

    .compare-etfs .td-content {
        font-size: 15px;
        padding: 10px;
    }

    /* .td-content font-weight-bold {
        font-size:18px;
        padding:10px;
    }*/

    .compare-etfs .box-div {
        position: absolute;
        height: 50px;
        text-align: center;
        font-size: 15px;
    }

    .v-rating .v-icon {
        font-size: 15px;
        padding: 0px;
        border-radius: 50%;
    }

    .compare-etfs .chart-size {
        width: 200px;
    }

    .compare-etfs .color-box {
        margin-top: 15px;
        width: 15px;
        height: 15px;
    }

    .compare-etfs .toggle {
        font-size: 15px;
    }

    .compare-etfs .btn {
        width: 80px;
        font-size: 14px;
    }

    .compare-etfs .td-right {
        padding: 10px;
        font-size: 15px;
    }

    .compare-etfs .drop-pa {
        padding: 0px 80px;
    }

    .compare-etfs .drop-compare-before {
        font-size: 20px;
    }
}

@media screen and (max-width: 959px) {
    .compare-etfs .top {
        height: auto;
        padding: 40px;
    }

    .compare-etfs .search-result {
        max-height: 300px;
    }

    .compare-etfs .middle {
        height: auto;
        padding: 30px 40px;
    }

    .compare-etfs .bottom {
        height: auto;
        padding: 30px 40px;
    }

    .compare-etfs .menu-title {
        font-size: 48px !important;
    }

    .compare-etfs .search-btn {
        right: 10px;
    }

    .compare-etfs .search-box {
        height: 54px;
        font-size: 16px;
    }

    .compare-etfs .search-result .list .input-text {
        font-size: 16px;
    }

    .compare-etfs .cmt th {
        font-size: 20px;
        height: 65px;
    }

    .compare-etfs .tb-title {
        font-size: 20px;
    }

    .compare-etfs .box-title {
        font-size: 18px;
        margin-left: 15px;
    }

    .compare-etfs .box-text {
        font-size: 18px;
        margin-left: 15px;
        margin-right: 15px;
    }

    .compare-etfs .cmt {
        margin-bottom: 20px;
    }

    .compare-etfs .add {
        font-size: 25px;
    }

    .compare-etfs .td-content {
        font-size: 15px;
        padding: 10px;
    }

    /*.td-content font-weight-bold {
        font-size:15px;
        padding:10px;
    }*/

    .compare-etfs .box-div {
        position: absolute;
        height: 45px;
        text-align: center;
        font-size: 15px;
    }

    .v-rating .v-icon {
        font-size: 15px;
        padding: 0px;
        border-radius: 50%;
    }

    .compare-etfs .chart-size {
        width: 150px;
    }

    .compare-etfs .toggle {
        font-size: 13px;
    }

    .compare-etfs .btn {
        width: 60px;
        height: 25px;
        font-size: 10px;
    }

    .compare-etfs .color-box {
        margin-top: 20px;
        width: 12px;
        height: 12px;
    }

    .compare-etfs .drop-pa {
        padding: 0px 40px;
    }

    .compare-etfs .drop-compare-before {
        font-size: 18px;
    }
}
</style>
