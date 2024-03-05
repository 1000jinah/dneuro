<template>
    <div class="ma-3">
        <v-row dense>
            <v-col>
                <h1>역할 관리</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-expansion-panels
                    multiple
                    v-model="role.panels.list"
                >
                    <v-expansion-panel>
                        <v-expansion-panel-header>권한 리스트</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-data-table
                                fixed-header
                                hide-default-footer
                                height="auto"
                                show-select
                                v-model="role.selected"
                                :headers="role.dataTable.headers"
                                :items="role.dataTable.items"
                                :loading="role.dataTable.loading"
                                :server-items-length="role.dataTable.serverItemsLength"
                                :page.sync="role.dataTable.page"
                                :items-per-page.sync="role.dataTable.itemsPerPage"
                                @page-count="role.pagination.length = $event;"
                                @click:row="handleClick"
                            >
                            </v-data-table>
                            <div>
                                <v-pagination
                                    :length="role.pagination.length"
                                    :total-visible="role.pagination.totalVisible"
                                    v-model="role.dataTable.page"
                                ></v-pagination>
                            </div>
                            <div class="float-right">
                                <v-btn depressed color="primary" @click="$router.push('/settings/roles/detail')">등록</v-btn>
                                <v-btn depressed color="error" @click="deleteRoleList()">삭제</v-btn>
                            </div>
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
            role: {
                panels: {
                    list: [0],
                },
                selected: [],
                dataTable: {
                    headers: [
                        { text: '권한명', sortable: false, value: 'name' },
                        { text: '연결된 API 갯수', sortable: false, value: 'connectedApiCnt' },
                        { text: '연결된  메뉴 갯수', sortable: false, value: 'connectedMenuCnt' },
                        { text: '설명', sortable: false, value: 'description' },
                        { text: '생성한 날짜', sortable: false, value: 'createdDate' },
                        { text: '수정한 시간', sortable: false, value: 'lastModifiedDate' },
                    ],
                    items: [],
                    loading: false,
                    serverItemsLength: 0,
                    page: 1,
                    itemsPerPage: 10,
                },
                pagination: {
                    length: 10,
                    totalVisible: 10,
                },
            },
        };
    },
    computed: {
    },
    watch: {
        'role.dataTable.page': {
            handler(newValue, oldValue) {
                this.setRoleList();
            },
            deep: true,
        },
    },
    methods: {
        handleClick(value: any) {
            this.$router.push({
                path: '/settings/roles/detail',
                query: {
                    id: value.id,
                },
            });
        },
        async setRoleList() {
            const self = this;
            return new Promise((resolve: any, reject: any) => {
                Promise.resolve()
                    .then(() => {
                        const params = {
                            page: self.role.dataTable.page,
                            rowSize: self.role.dataTable.itemsPerPage,
                        };
                        self.role.dataTable.loading = true;
                        return meta.api.common.role.getRoleList(params);
                    })
                    .then((response) => {
                        const { data } = response;
                        self.role.dataTable.items = data.items;
                        self.role.dataTable.serverItemsLength = data.totalRows;
                        self.role.dataTable.loading = false;
                    })
                    .then(() => { resolve(); });
            });
        },
        async deleteRoleList() {
            const self: any = this;

            if (await meta.confirm('삭제 하시겠습니까?')) {
                const selectedRole = self.role.selected;

                const idList = [];
                for (let i = 0; i < selectedRole.length; i++) {
                    if (selectedRole[i].id != 1 && selectedRole[i].id != 2) {
                        idList.push(selectedRole[i].id);
                    } else {
                        alert('기초 권한(최고 관리자, 사용자)은 삭제할수 없습니다.');
                    }
                }

                (await meta.api.common.role.removeRoleAllDependencyList(idList));

                await meta.alert('삭제에 성공했습니다.');
                this.setRoleList();
            }
        },
    },
    mounted() {
        Promise.resolve()
            .then(this.setRoleList);
    },
});
</script>

<style scoped>

</style>
