<template>
    <div class="ma-3">
        <v-row dense>
            <v-col>
                <h1>역할 관리 상세</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-expansion-panels
                    multiple
                    v-model="role_detail.panels.list"
                >
                    <v-expansion-panel>
                        <v-expansion-panel-header>역할 관리 상세</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-row>
                                <v-col cols="12">
                                    <template v-if="detailData.id != undefined && detailData.id != null">
                                        <div class="float-right mt-5">
                                            <v-btn color="primary" @click="updateRole()">수정</v-btn>
                                        </div>
                                    </template>
                                    <template v-else>
                                        <div class="float-right mt-5">
                                            <v-btn color="primary" @click="registerNewRole()">저장</v-btn>
                                        </div>
                                    </template>
                                </v-col>
                            </v-row>
                            <v-row>
                                <div style="width:100%;display: flex;justify-content: center;margin-bottom:20px">
                                    <v-card width="50%">
                                        <v-card-title>역할 상세</v-card-title>
                                        <v-card-text>
                                            <v-form>
                                                <v-row dense>
                                                    <v-col cols="12">
                                                        <v-text-field
                                                            v-model="detailData.name"
                                                            dense
                                                            outlined
                                                            clearable
                                                            label="권한명"
                                                            hide-details="auto"
                                                            style="margin-bottom:15px"
                                                        ></v-text-field>

                                                        <v-text-field
                                                            v-model="detailData.description"
                                                            dense
                                                            outlined
                                                            clearable
                                                            label="설명"
                                                            hide-details="auto"
                                                            style="margin-bottom:15px"
                                                        ></v-text-field>
                                                        <v-text-field
                                                            v-model="detailData.value"
                                                            dense
                                                            outlined
                                                            clearable
                                                            label="값"
                                                            hide-details="auto"
                                                            style="margin-bottom:15px"
                                                        ></v-text-field>
                                                        <v-text-field
                                                            v-if="detailData.id != undefined && detailData.id != null"
                                                            v-model="detailData.createdDate"
                                                            dense
                                                            outlined
                                                            clearable
                                                            label="생성 날짜"
                                                            hide-details="auto"
                                                            style="margin-bottom:15px"
                                                            disabled
                                                        ></v-text-field>
                                                        <v-text-field
                                                            v-if="detailData.id != undefined && detailData.id != null"
                                                            v-model="detailData.lastModifiedDate"
                                                            dense
                                                            outlined
                                                            clearable
                                                            label="마지막 수정 날짜"
                                                            hide-details="auto"
                                                            style="margin-bottom:15px"
                                                            disabled
                                                        ></v-text-field>
                                                    </v-col>
                                                </v-row>
                                            </v-form>
                                        </v-card-text>
                                    </v-card>
                                </div>
                            </v-row>
                            <v-row dense>
                                <v-col cols="12" sm="6">
                                    <v-card>
                                        <v-card-title>역할 메뉴</v-card-title>
                                        <v-card-text>
                                            <div style="max-height: 500px; overflow-y: auto;">
                                                <v-treeview
                                                    dense
                                                    activatable
                                                    selectable
                                                    return-object
                                                    :items="treeview.menuList.items"
                                                    :open.sync="treeview.menuList.open"
                                                    v-model="menuSelected"
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
                                        <v-card-title>역할 API</v-card-title>
                                        <v-card-text>
                                            <div style="max-height: 500px; overflow-y: auto;">
                                                <template>
                                                    <v-data-table
                                                        fixed-header
                                                        hide-default-footer
                                                        height="auto"
                                                        show-select
                                                        v-model="api.apiSelected"
                                                        :items-per-page="api.dataTable.itemsPerPage"
                                                        :headers="api.dataTable.headers"
                                                        :items="api.dataTable.items"
                                                    >
                                                    </v-data-table>
                                                </template>
                                            </div>
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
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
            role_detail: {
                panels: {
                    list: [0],
                },
            },
            detailData: {
                id: null,
                name: null,
                description: null,
                value: null,
                createdDate: null,
                lastModifiedDate: null,
            },
            roleMenuList: [],
            data: {
                treeMenuList: [],
                menu: {},
            },
            treeview: {
                menuList: {
                    items: [],
                    open: [],
                    active: [],
                },
            },
            menuSelected: [],
            apiList: [],
            api: {
                apiSelected: [],
                dataTable: {
                    headers: [
                        { text: 'API URL', sortable: false, value: 'url' },
                        { text: 'API 명', sortable: false, value: 'name' },
                    ],
                    items: [],
                    itemsPerPage: 10000,
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
            },
        },
        menuSelected(val) {
        },
    },
    methods: {
        async loadTreeMenuList(queryId: any) {
            const self: any = this;
            let treeMenuList: any;
            let treeMenu: any;

            treeMenuList = _.cloneDeep(await meta.api.util.menu.getTreeMenuList({
                page: 1,
                rowSize: 10000,
                sort: ['rankingPath,asc'],
            })).data.items;

            for (let i = 0; i < treeMenuList.length; i++) {
                treeMenuList[i].thisAuthHaveThisMenu = false;
            }

            this.data.treeMenuList = treeMenuList;
            if (queryId != undefined && queryId != null) {
                return new Promise((resolve: any, reject: any) => {
                    Promise.resolve()
                        .then(() => {
                            const param = {
                                roleId: queryId,
                                page: 1,
                                rowSize: 10000,
                            };

                            return meta.api.common.roleMenu.getRoleMenuList(param);
                        })
                        .then((response) => {
                            self.roleMenuList = response.data.items;
                            const forDeleteParentItem = _.cloneDeep(self.data.treeMenuList);
                            const tempRoleMenuList = _.cloneDeep(self.roleMenuList);

                            for (var j = 0; j < forDeleteParentItem.length; j++) {
                                for (var i = 0; i < tempRoleMenuList.length; i++) {
                                    if (forDeleteParentItem[j].parentId == tempRoleMenuList[i].menuId) {
                                        tempRoleMenuList.splice(i, 1);
                                        break;
                                    }
                                }
                            }

                            for (var i = 0; i < tempRoleMenuList.length; i++) {
                                for (var j = 0; j < forDeleteParentItem.length; j++) {
                                    if (tempRoleMenuList[i].menuId == forDeleteParentItem[j].id) {
                                        self.menuSelected.push(forDeleteParentItem[j]);
                                        break;
                                    }
                                }
                            }
                        })
                        .then(() => { resolve(); });
                });
            }
        },
        async setRoleDeatil(queryId: number) {
            const self: any = this;

            return new Promise((resolve: any, reject: any) => {
                Promise.resolve()
                    .then(() => meta.api.common.role.getRole(queryId))
                    .then((response) => {
                        self.detailData = response.data;
                    })
                    .then(() => { resolve(); });
            });
        },

        async setApiList(queryId: any) {
            const self: any = this;

            return new Promise((resolve: any, reject: any) => {
                Promise.resolve()
                    .then(() => {
                        const param = {
                            page: 1,
                            rowSize: 10000000,
                        };
                        return meta.api.common.api.getApiList(param);
                    })
                    .then((response) => {
                        self.api.dataTable.items = response.data.items;
                        if (queryId != undefined && queryId != null) {
                            const param = {
                                roleId: queryId,
                                page: 1,
                                rowSize: 10000000,
                            };

                            return meta.api.common.roleApi.getRoleApiList(param);
                        }
                        return null;
                    })
                    .then((response) => {
                        if (response != undefined && response != null) {
                            const roleApiLIst = response.data.items;
                            const allApiList = self.api.dataTable.items;
                            for (let i = 0; i < roleApiLIst.length; i++) {
                                for (let j = 0; j < allApiList.length; j++) {
                                    if (roleApiLIst[i].apiId === allApiList[j].id) {
                                        self.api.apiSelected.push(allApiList[j]);
                                        break;
                                    }
                                }
                            }
                        }
                    })
                    .then(() => { resolve(); });
            });
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
        async registerNewRole() {
            const self: any = this;

            if (self.detailData.name == null || self.detailData.name == '') {
                meta.alert('권한명을 반드시 입력하세요.');
                return;
            } if (self.detailData.name.length > 100) {
                meta.alert('권한명은 100자 이하로 작성해주십시오.');
                return;
            }

            if (self.detailData.description == null || self.detailData.description == '') {
                meta.alert('설명을 반드시 입력하세요.');
                return;
            } if (self.detailData.description.length > 500) {
                meta.alert('설명은 500자 이하로 작성해주십시오.');
                return;
            }

            if (self.detailData.value == null || self.detailData.value == '') {
                meta.alert('값을 반드시 입력하세요.');
                return;
            } if (self.detailData.value.length > 100) {
                meta.alert('값은 100자 이하로 작성해주십시오.');
                return;
            }

            if (await meta.confirm('저장 하시겠습니까?')) {
                const forPushParentItem = _.cloneDeep(self.data.treeMenuList);

                const roleMenuListId = [];
                const roleApiListId = [];
                for (var i = 0; i < self.menuSelected.length; i++) {
                    roleMenuListId.push(self.menuSelected[i].id);
                    let exsitsParentIdMenu = self.menuSelected[i];
                    while (true) {
                        let isNoHaveParent = false;
                        for (let j = 0; j < forPushParentItem.length; j++) {
                            if (exsitsParentIdMenu.parentId === forPushParentItem[j].id) {
                                roleMenuListId.push(forPushParentItem[j].id);
                                exsitsParentIdMenu = (forPushParentItem.splice(j, 1))[0];
                                isNoHaveParent = false;
                                break;
                            } else {
                                isNoHaveParent = true;
                            }
                        }
                        if (exsitsParentIdMenu.parentId == undefined || exsitsParentIdMenu.parentId == null || isNoHaveParent) {
                            break;
                        }
                    }
                }
                roleMenuListId.sort((a, b) => // 오름차순
                    a - b);

                for (var i = 0; i < self.api.apiSelected.length; i++) {
                    roleApiListId.push(self.api.apiSelected[i].id);
                }
                let roleMenuListIdString = '';
                for (var i = 0; i < roleMenuListId.length; i++) {
                    if (roleMenuListIdString === '') roleMenuListIdString += roleMenuListId[i];
                    else roleMenuListIdString = `${roleMenuListIdString},${roleMenuListId[i]}`;
                }

                let roleApiListIdString = '';
                for (var i = 0; i < roleApiListId.length; i++) {
                    if (roleApiListIdString === '') roleApiListIdString += roleApiListId[i];
                    else roleApiListIdString = `${roleApiListIdString},${roleApiListId[i]}`;
                }
                const params = {
                    name: self.detailData.name,
                    description: self.detailData.description,
                    value: self.detailData.value,
                    roleMenuListIdString,
                    roleApiListIdString,
                };

                new Promise((resolve: any, reject: any) => {
                    Promise.resolve()
                        .then(() => meta.api.app.RoleAndRoleMenuAndRoleApi.createRoleAndRoleMenuAndRoleApi(params))
                        .then(() => { resolve(); });
                });
                await meta.alert('저장에 성공했습니다.');
                this.$router.push({
                    path: '/settings/roles',
                });
            }
        },
        async updateRole() {
            const self: any = this;

            if (self.detailData.name == null || self.detailData.name === '') {
                meta.alert('권한명을 반드시 입력하세요.');
                return;
            } if (self.detailData.name.length > 100) {
                meta.alert('권한명은 100자 이하로 작성해주십시오.');
                return;
            }

            if (self.detailData.description == null || self.detailData.description === '') {
                meta.alert('설명을 반드시 입력하세요.');
                return;
            } if (self.detailData.description.length > 500) {
                meta.alert('설명은 500자 이하로 작성해주십시오.');
                return;
            }

            if (self.detailData.value == null || self.detailData.value === '') {
                meta.alert('값을 반드시 입력하세요.');
                return;
            } if (self.detailData.value.length > 100) {
                meta.alert('값은 100자 이하로 작성해주십시오.');
                return;
            }

            if (await meta.confirm('수정 하시겠습니까?')) {
                const forPushParentItem = _.cloneDeep(self.data.treeMenuList);

                const roleMenuListId = [];
                const roleApiListId = [];
                for (var i = 0; i < self.menuSelected.length; i++) {
                    roleMenuListId.push(self.menuSelected[i].id);
                    let exsitsParentIdMenu = self.menuSelected[i];
                    while (true) {
                        let isNoHaveParent = false;
                        for (let j = 0; j < forPushParentItem.length; j++) {
                            if (exsitsParentIdMenu.parentId === forPushParentItem[j].id) {
                                roleMenuListId.push(forPushParentItem[j].id);
                                exsitsParentIdMenu = (forPushParentItem.splice(j, 1))[0];
                                isNoHaveParent = false;
                                break;
                            } else {
                                isNoHaveParent = true;
                            }
                        }
                        if (exsitsParentIdMenu.parentId == undefined || exsitsParentIdMenu.parentId == null || isNoHaveParent) {
                            break;
                        }
                    }
                }
                roleMenuListId.sort((a, b) => // 오름차순
                    a - b);

                for (var i = 0; i < self.api.apiSelected.length; i++) {
                    roleApiListId.push(self.api.apiSelected[i].id);
                }
                let roleMenuListIdString = '';
                for (var i = 0; i < roleMenuListId.length; i++) {
                    if (roleMenuListIdString === '') roleMenuListIdString += roleMenuListId[i];
                    else roleMenuListIdString = `${roleMenuListIdString},${roleMenuListId[i]}`;
                }

                let roleApiListIdString = '';
                for (var i = 0; i < roleApiListId.length; i++) {
                    if (roleApiListIdString === '') roleApiListIdString += roleApiListId[i];
                    else roleApiListIdString = `${roleApiListIdString},${roleApiListId[i]}`;
                }
                const params = {
                    id: self.detailData.id,
                    name: self.detailData.name,
                    description: self.detailData.description,
                    value: self.detailData.value,
                    roleMenuListIdString,
                    roleApiListIdString,
                };

                new Promise((resolve: any, reject: any) => {
                    Promise.resolve()
                        .then(() => meta.api.app.RoleAndRoleMenuAndRoleApi.modifyRoleAndRoleMenuAndRoleApi(params))
                        .then(() => { resolve(); });
                });
                await meta.alert('수정에 성공했습니다.');
                this.$router.push({
                    path: '/settings/roles',
                });
            }
        },
    },
    mounted() {
        const queryId: any = this.$route.query.id;
        const self: any = this;

        if (queryId != undefined && queryId != null) {
            new Promise((resolve: any, reject: any) => {
                Promise.resolve()
                    .then(self.setRoleDeatil(queryId),
                        self.loadTreeMenuList(queryId))
                    .then(self.setApiList(queryId));
            });
        } else {
            new Promise((resolve: any, reject: any) => {
                Promise.resolve()
                    .then(self.loadTreeMenuList(),
                        self.setApiList());
            });
        }
    },
});
</script>

<style scoped>

</style>
