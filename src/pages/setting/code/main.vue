<template>
    <div class="ma-3">
        <v-row dense>
            <v-col>
                <h1>코드 관리</h1>
            </v-col>
        </v-row>
        <v-row dense>
            <v-col cols="12" sm="6">
                <v-card>
                    <v-card-title>코드 목록</v-card-title>
                    <v-card-text>
                        <div style="max-height: 400px; overflow-y: auto;">
                            <v-treeview
                                dense
                                activatable
                                return-object
                                :items="treeview.codeList.items"
                                :active.sync="treeview.codeList.active"
                            >
                                <template v-slot:prepend="{ item, open }">
                                    <template v-if="item.childrenCount > 0">
                                        <template v-if="open">
                                            <v-icon>mdi-folder-open</v-icon>
                                        </template>
                                        <template v-else>
                                            <v-icon>mdi-folder</v-icon>
                                        </template>
                                    </template>
                                    <template v-else>
                                        <v-icon>mdi-file</v-icon>
                                    </template>
                                </template>
                                <template v-slot:label="{ item }">
                                    <div style="cursor: pointer;">{{ item.name + ' (순위 : ' + item.orderNo + ')' }}</div>
                                </template>
                            </v-treeview>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" sm="6">
                <v-card>
                    <v-card-title>코드 상세</v-card-title>
                    <v-card-text>
                        <v-form>
                            <v-row dense>
                                <v-col cols="12">
                                    <v-text-field
                                        dense
                                        outlined
                                        clearable
                                        label="이름"
                                        hide-details="auto"
                                        v-model="data.code.name"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-autocomplete
                                        dense
                                        outlined
                                        clearable
                                        hide-no-data
                                        label="부모 이름"
                                        hide-details="auto"
                                        item-text="namePath"
                                        item-value="id"
                                        :items="autocomplete.parentId.items"
                                        v-model="data.code.parentId"
                                    ></v-autocomplete>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea
                                        dense
                                        outlined
                                        clearable
                                        label="설명"
                                        hide-details="auto"
                                        v-model="data.code.description"
                                    ></v-textarea>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                        dense
                                        outlined
                                        clearable
                                        label="값"
                                        hide-details="auto"
                                        v-model="data.code.value"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                        dense
                                        outlined
                                        clearable
                                        label="순위"
                                        type="number"
                                        hide-details="auto"
                                        v-model="data.code.orderNo"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-select
                                        dense
                                        outlined
                                        label="사용여부"
                                        hide-details="auto"
                                        :items="[{'text': '선택', 'value': null},{'text': '사용', 'value': 'T'},{'text': '사용안함', 'value': 'F'}]"
                                        v-model="data.code.status"
                                    ></v-select>
                                </v-col>
                            </v-row>
                            <v-row dense>
                                <v-col cols="12" class="text-right">
                                    <v-btn
                                        color="secondary"
                                        @click="data.code = {}; treeview.codeList.active = [];"
                                    >신규</v-btn>
                                    <v-btn
                                        color="primary"
                                        :loading="btn.saveCode.loading"
                                        @click="saveCode();"
                                    >저장</v-btn>
                                    <v-btn
                                        v-if="!!data.code.id"
                                        color="error"
                                        :loading="btn.removeCode.loading"
                                        @click="removeCode();"
                                    >삭제</v-btn>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import _ from 'lodash';
import store from '@/config/store';
import meta from '@/api/meta';

export default Vue.extend({
    data() {
        return {
            data: {
                treeCodeList: [],
                code: { show: null },
            },
            treeview: {
                codeList: {
                    items: [],
                    open: [],
                    active: [] as number[],
                },
            },
            autocomplete: {
                parentId: {
                    items: [],
                },
            },
            btn: {
                saveCode: {
                    loading: false,
                },
                removeCode: {
                    loading: false,
                },
            },
        };
    },
    computed: {
    },
    watch: {
        'data.treeCodeList': {
            handler(newValue: any, oldValue: any) {
                this.treeview.codeList.items = this.flatArrayToNestedArray(newValue, 'id', 'parentId', 'children');
                this.treeview.codeList.open = _.cloneDeep(newValue);
                this.autocomplete.parentId.items = _.cloneDeep(newValue);
            },
        },
        'treeview.codeList.active': {
            handler(newValue, oldValue) {
                this.data.code = newValue[0] ? _.cloneDeep(newValue[0]) : { show: null };
            },
        },
    },
    methods: {
        async loadTreeCodeList() {
            let treeCodeList;
            treeCodeList = (await meta.api.util.code.getTreeCodeList({
                page: 1,
                rowSize: 100000000,
                sort: ['orderNoPath,asc'],
            })).data.items;

            this.data.treeCodeList = treeCodeList;
        },
        async saveCode() {
            let code: any;
            code = this.data.code;

            this.btn.saveCode.loading = true;
            if (code.name.length > 50) {
                await meta.alert('이름은 50자 이하로 작성해주십시오');
            } else if (code.description.length > 200) {
                await meta.alert('설명은 200자 이하로 작성해주십시오');
            } else if (code.value.length > 50) {
                await meta.alert('값은 50자 이하로 작성해주십시오');
            } else if (await meta.confirm('저장 하시겠습니까?')) {
                if (code.id) {
                    code = (await meta.api.common.code.modifyCode(code.id, code)).data;
                } else {
                    code = (await meta.api.common.code.createCode(code)).data;
                }
                await meta.alert('저장 되었습니다.');
                await this.loadTreeCodeList();
                this.treeview.codeList.active = [code];
            }
            this.btn.saveCode.loading = false;
        },
        async removeCode() {
            let code: any;
            code = this.data.code;

            this.btn.removeCode.loading = true;
            if (await meta.confirm('삭제 하시겠습니까?')) {
                await meta.api.common.code.removeCode(code.id);
                await meta.alert('삭제 되었습니다.');
                await this.loadTreeCodeList();
                this.treeview.codeList.active = [];
            }
            this.btn.removeCode.loading = false;
        },
        flatArrayToNestedArray(flatArray: any, id: any, parentId: any, children: any) {
            let nestedArray: any;
            let map: any;
            let flat: any;
            let i = 0;

            flatArray = _.cloneDeep(flatArray);
            children = children || 'children';
            nestedArray = [];
            map = {};
            for (i = 0; i < flatArray.length; i++) {
                map[flatArray[i][id]] = i;
                flatArray[i][children] = [];
            }
            for (i = 0; i < flatArray.length; i++) {
                flat = flatArray[i];
                if (flat[parentId]) {
                    flatArray[map[flat[parentId]]][children].push(flat);
                } else {
                    nestedArray.push(flat);
                }
            }
            return nestedArray;
        },
    },
    mounted() {
        Promise.all([
            this.loadTreeCodeList(),
        ]);
    },
});
</script>

<style scoped>

</style>
