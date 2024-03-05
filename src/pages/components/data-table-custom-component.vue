<template>
<v-data-table
    v-model="selectedItem"
    :show-select="showSelect"
    :item-key="itemKey"
    :headers="headers"
    :items="items"
    :server-items-length="totalRows"
    :page.sync="pageData"
    :items-per-page.sync="itemsPerPageData"
    :sort-by.sync="sortBy"
    :sort-desc.sync="sortDesc"
    :group-by.sync="groupBy"
    :group-desc.sync="groupDesc"
    :multi-sort.sync="multiSort"
    :must-sort.sync="mustSort"
    :loading="loading"
    :disable-sort="disabled"
    mobile-breakpoint="0"
    hide-default-footer
>
    <template v-slot:top>
    <v-row class="my-1">
        <v-col class="d-flex justify-start align-center">
            <div style="width: 200px;">
                <h3 class="text-left">{{count}}</h3>
            </div>
            <div style="width: 130px;" class="ml-auto">
                <v-select
                    dense
                    outlined
                    hide-details="auto"
                    :value="itemsPerPageData"
                    :items="paginationList"
                    @change="itemsPerPageData = $event;"
                >
                </v-select>
            </div>
        </v-col>
    </v-row>
    </template>
    <template v-if="items.length !== 0" v-slot:body="props">
            <tbody>
                <tr v-for="(item, index) in props.items" :key="index">
                    <td v-if="showSelect">
                        <v-checkbox
                            v-model="selectedItem"
                            :value="item"
                            multiple
                            style="margin:0px;padding:0px"
                            hide-details="auto"
                        />
                    </td>
                    <td :class="'text-'+header.align + ' ' + header.cellClass" v-for="(header, headerIndex) in headers" :key="headerIndex" @click="clickRow(item)">
                        <template v-if="header.type === 'button'">
                            <v-btn
                                :color="cell[header.type][header.value].color ? cell[header.type][header.value].color : ''"
                                @click.native.stop="clickButton(item, header.value)"
                                :small="cell[header.type][header.value].small"
                            >{{cell[header.type][header.value].title}}</v-btn>
                        </template>
                        <!-- <template v-else-if="header.cellClass != null && header.cellClass.indexOf('truncate') !== -1">
                            <template v-if="header.value.toUpperCase().indexOf('TARGET') !== -1">
                                <v-tooltip top>
                                    <template v-slot:activator="{ on, attrs }">
                                        <span v-on="on" v-bind="attrs">{{item[header.value]}}</span>
                                    </template>
                                    <template v-if="item[header.value]">
                                        <span v-for="(text, textIndex) in item[header.value].split(',')" :key="textIndex">{{text}}<br/></span>
                                    </template>
                                </v-tooltip>
                            </template>
                            <template v-else>
                                <v-tooltip top>
                                    <template v-slot:activator="{ on, attrs }">
                                        <span v-on="on" v-bind="attrs">{{item[header.value]}}</span>
                                    </template>
                                    {{item[header.value]}}
                                </v-tooltip>
                            </template>
                        </template> -->
                        <template v-else>
                            {{item[header.value]}}
                        </template>
                    </td>
                </tr>
            </tbody>
    </template>
    <template v-else v-slot:body>
        <tbody>
            <tr>
                <td v-if="loading" :colspan="headers.length + (showSelect ? 1 : 0)" class="text-center">
                    <h4 style="opacity: 0.4;">데이터 가져오는 중...</h4>
                </td>
                <td v-else :colspan="headers.length + (showSelect ? 1 : 0)" class="text-center">
                    <div class="py-3">
                        <v-icon size="200" style="opacity: 0.12;">
                            mdi-database-remove-outline
                        </v-icon>
                        <br>
                        <h4 style="opacity: 0.4;">데이터가 없습니다.</h4>
                    </div>
                </td>
            </tr>
        </tbody>
    </template>
    <template v-slot:footer >
        <v-row dense>
            <v-col cols="12" class="pa-0">
                <div class="text-center my-2" >
                    <v-pagination
                        class="d-inline-block"
                        :length="Math.ceil(itemsPerPageData != null && itemsPerPageData != 0 ? (totalRows / itemsPerPageData) : 1)"
                        :total-visible="10"
                        v-model="pageData"
                        :disabled="disabled"
                    ></v-pagination>
                </div>
            </v-col>
            <v-col cols="12" class="pa-0 d-flex justify-end align-center">
                <v-btn
                    v-if="!importHide"
                    color="primary"
                    @click="excelImport"
                >업로드</v-btn>
                <v-btn
                    v-if="!addHide"
                    class="ml-3"
                    @click="add"
                >추가</v-btn>
                <v-btn
                    v-if="!removeHide"
                    class="ml-3"
                    @click="remove"
                >삭제</v-btn>
            </v-col>
        </v-row>
    </template>
 </v-data-table>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.component('data-table-custom-component', {
    props: {
        headers: {
            type: Array,
            default() {
                return [];
            },
        },
        items: {
            type: Array,
            default() {
                return [];
            },
        },
        itemClass: {
            type: String,
            default: '',
        },
        totalRows: {
            type: Number,
            default: 0,
        },
        page: {
            type: Number,
            default: 1,
        },
        itemsPerPage: {
            type: Number,
            default: 10,
        },
        sortBy: {
            type: Array,
            default() {
                return [];
            },
        },
        sortDesc: {
            type: Array,
            default() {
                return [];
            },
        },
        groupBy: {
            type: Array,
            default() {
                return [];
            },
        },
        groupDesc: {
            type: Array,
            default() {
                return [];
            },
        },
        multiSort: {
            type: Boolean,
            default: false,
        },
        mustSort: {
            type: Boolean,
            default: false,
        },
        loading: {
            type: Boolean,
            default: false,
        },
        importHide: {
            type: Boolean,
            default: false,
        },
        addHide: {
            type: Boolean,
            default: false,
        },
        removeHide: {
            type: Boolean,
            default: false,
        },
        showSelect: {
            type: Boolean,
            default: false,
        },
        itemKey: {
            type: String,
            default: 'id',
        },
        countTitle: {
            type: Object,
            default: () => ({
                front: '전체',
                end: '건',
            }),
        },
        cell: {
            type: Object,
            default: () => {},
        },
        selectedItemProps: {
            type: Array,
            default() {
                return [];
            },
        },
    },
    data() {
        return {
            paginationList: [
                { text: '5개 보기', value: 5 },
                { text: '10개 보기', value: 10 },
                { text: '15개 보기', value: 15 },
                { text: '20개 보기', value: 20 },
                { text: '25개 보기', value: 25 },
                { text: '30개 보기', value: 30 },
                { text: '전체 보기', value: null },
            ],
            itemsPerPageData: this.itemsPerPage,
            pageData: this.page,
            selectedItem: this.selectedItemProps,
        };
    },
    watch: {
        selectedItemProps: {
            async handler(n) {
                this.selectedItem = n;
            },
            deep: true,
        },
        selectedItem: {
            handler(n : any) {
                this.$emit('selectedItem', n);
            },
        },
        page: {
            handler(n : any) {
                this.pageData = n;
                this.$emit('update:page', n);
            },
        },
        pageData: {
            handler(n : Number) {
                this.$emit('update:page', n);
            },
        },
        itemsPerPage: {
            handler(n) {
                this.itemsPerPageData = n;
                this.$emit('update:itemsPerPage', n);
                this.$emit('update:page', 1);
            },
        },
        itemsPerPageData: {
            handler(n) {
                this.$emit('update:itemsPerPage', n);
                this.$emit('update:page', 1);
            },
        },
        sortBy: {
            handler(n) {
                this.$emit('update:sortBy', n);
            },
        },
        sortDesc: {
            handler(n) {
                this.$emit('update:sortDesc', n);
            },
        },
        groupBy: {
            handler(n) {
                this.$emit('update:groupBy', n);
            },
        },
        groupDesc: {
            handler(n) {
                this.$emit('update:groupDesc', n);
            },
        },
        totalRows: {
            handler(n) {
                this.paginationList[this.paginationList.length - 1].value = n;
            },
            deep: true,
        },
    },
    computed: {
        disabled() {
            return !!(this.loading || this.totalRows === 0);
        },
        count() {
            return `${this.countTitle.front} ${this.totalRows}${this.countTitle.end}`;
        },

    },
    methods: {
        clickRow(e : any) {
            this.$emit('click:row', e);
        },
        excelImport() {
            this.$emit('import');
        },
        remove() {
            this.$emit('remove', this.selectedItem);
        },
        add() {
            this.$emit('add');
        },
        clickButton(item: Object, header: String) {
            const c = { item, header };
            this.$emit('click:button', c);
        },

    },
});
</script>

<style scoped>
</style>
