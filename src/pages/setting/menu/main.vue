<template>
    <div class="ma-3">
        <v-row dense>
            <v-col>
                <h1>메뉴 관리</h1>
            </v-col>
        </v-row>
        <v-row dense>
            <v-col cols="12" sm="6">
                <v-card>
                    <v-card-title>메뉴 목록</v-card-title>
                    <v-card-text>
                        <div style="max-height: 500px; overflow-y: auto;">
                            <v-treeview
                                dense
                                activatable
                                return-object
                                :items="treeview.menuList.items"
                                :open.sync="treeview.menuList.open"
                                :active.sync="treeview.menuList.active"
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
                                    <div style="cursor: pointer;">{{ item.name + ' (순위 : ' + item.ranking + ')' }}</div>
                                </template>
                            </v-treeview>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" sm="6">
                <v-card>
                    <v-card-title>메뉴 상세</v-card-title>
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
                                        v-model="data.menu.name"
                                        :rules="[rules.required]"
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
                                        v-model="data.menu.parentId"
                                    ></v-autocomplete>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea
                                        dense
                                        outlined
                                        clearable
                                        label="설명"
                                        hide-details="auto"
                                        v-model="data.menu.description"
                                    ></v-textarea>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                        dense
                                        outlined
                                        clearable
                                        label="경로"
                                        hide-details="auto"
                                        v-model="data.menu.path"
                                        :rules="[rules.required]"
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
                                        v-model="data.menu.ranking"
                                        :rules="[rules.required]"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-select
                                        dense
                                        outlined
                                        label="메뉴 노출 여부"
                                        hide-details="auto"
                                        :items="[{'text': '선택', 'value': null},{'text': '예', 'value': 'T'},{'text': '아니오', 'value': 'F'}]"
                                        v-model="data.menu.show"
                                        :rules="[rules.required]"
                                    ></v-select>
                                </v-col>
                                <v-col cols="12">
                                    <v-select
                                        dense
                                        outlined
                                        label="관리화면 메뉴 노출 여부"
                                        hide-details="auto"
                                        :items="[{'text': '선택', 'value': null},{'text': '예', 'value': 'T'},{'text': '아니오', 'value': 'F'}]"
                                        v-model="data.menu.sideShow"
                                        :rules="[rules.required]"
                                    ></v-select>
                                </v-col>
                                <v-col cols="12">
                                    <v-select
                                        dense
                                        outlined
                                        label="비회원 공개 여부"
                                        hide-details="auto"
                                        :items="[{'text': '선택', 'value': null},{'text': '예', 'value': 'T'},{'text': '아니오', 'value': 'F'}]"
                                        v-model="data.menu.publicyStatus"
                                        :rules="[rules.required]"
                                    ></v-select>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                        dense
                                        outlined
                                        clearable
                                        label="아이콘"
                                        hide-details="auto"
                                        :append-outer-icon="data.menu.icon"
                                        v-model="data.menu.icon"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row dense>
                                <v-col cols="12" class="text-right">
                                    <v-btn
                                        color="secondary"
                                        @click="treeview.menuList.active = [];"
                                    >신규</v-btn>
                                    <v-btn
                                        color="primary"
                                        :loading="btn.saveMenu.loading"
                                        @click="saveMenu();"
                                    >저장</v-btn>
                                    <v-btn
                                        v-if="!!data.menu.id"
                                        color="error"
                                        :loading="btn.removeMenu.loading"
                                        @click="removeMenu();"
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
                treeMenuList: [],
                menu: { sideShow: null, show: null, publicyStatus: null },
            },
            rules: {
                required: (value: any) => !!value || '필수',
            },
            treeview: {
                menuList: {
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
                saveMenu: {
                    loading: false,
                },
                removeMenu: {
                    loading: false,
                },
            },
        };
    },
    computed: {
    },
    watch: {
        'data.treeMenuList': {
            handler(newValue: any, oldValue: any) {
                this.treeview.menuList.items = this.flatArrayToNestedArray(newValue, 'id', 'parentId', 'children');
                this.treeview.menuList.open = _.cloneDeep(newValue);
                this.autocomplete.parentId.items = _.cloneDeep(newValue);
            },
        },
        'treeview.menuList.active': {
            handler(newValue, oldValue) {
                this.data.menu = newValue[0] ? _.cloneDeep(newValue[0]) : { sideShow: null, show: null, publicyStatus: null };
            },
        },
    },
    methods: {
        async loadTreeMenuList() {
            let treeMenuList;
            treeMenuList = (await meta.api.util.menu.getTreeMenuList({
                page: 1,
                rowSize: 100000000,
                sort: ['rankingPath,asc'],
            })).data.items;
            this.data.treeMenuList = treeMenuList;
        },
        async saveMenu() {
            let menu: any;

            menu = this.data.menu;
            this.btn.saveMenu.loading = true;

            if ((menu.name == null || menu.name == '') && menu.name.length > 100) {
                await meta.alert('이름은 100자 이하로 입력해주세요');
                return;
            } if ((menu.description == null || menu.description == '') && menu.description.length > 500) {
                await meta.alert('설명은 500자 이하로 입력해주세요');
                return;
            } if ((menu.path == null || menu.path == '') && menu.path.length > 500) {
                await meta.alert('경로는 500자 이하로 입력해주세요');
                return;
            } if (await meta.confirm('저장 하시겠습니까?')) {
                if (menu.id) {
                    menu = (await meta.api.common.menu.modifyMenu(menu.id, menu)).data;
                } else {
                    menu = (await meta.api.common.menu.createMenu(menu)).data;
                }
                await meta.alert('저장 되었습니다.');
                await this.loadTreeMenuList();

                this.treeview.menuList.active = [menu];
            }
            this.btn.saveMenu.loading = false;
        },
        async removeMenu() {
            let menu: any;

            menu = this.data.menu;
            this.btn.removeMenu.loading = true;
            if (await meta.confirm('삭제 하시겠습니까?')) {
                await meta.api.common.menu.removeMenu(menu.id);
                await meta.alert('삭제 되었습니다.');
                await this.loadTreeMenuList();
                this.treeview.menuList.active = [];
            }
            this.btn.removeMenu.loading = false;
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
            this.loadTreeMenuList(),
        ]);
    },
});
</script>

<style scoped>

</style>
