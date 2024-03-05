<template>
    <div class="ma-3">
        <v-row>
            <v-col>
                <h1>API 관리</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-expansion-panels
                    multiple
                    v-model="api.panels.list"
                >
                    <v-expansion-panel>
                        <v-expansion-panel-header>API 리스트</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-data-table
                                fixed-header
                                hide-default-footer
                                height="auto"
                                show-select
                                v-model="api.selected"
                                :headers="api.dataTable.headers"
                                :items="api.dataTable.items"
                                :loading="api.dataTable.loading"
                                :server-items-length="api.dataTable.serverItemsLength"
                                :page.sync="api.dataTable.page"
                                :items-per-page.sync="api.dataTable.itemsPerPage"
                                @page-count="api.pagination.length = $event;"
                                @click:row="handleClick"
                            >
                            </v-data-table>
                            <div>
                                <v-pagination
                                    :length="api.pagination.length"
                                    :total-visible="api.pagination.totalVisible"
                                    v-model="api.dataTable.page"
                                ></v-pagination>
                            </div>
                            <div class="float-right">
                                <v-btn depressed color="primary" @click="$router.push('/settings/apis/detail')">등록</v-btn>
                                <v-btn depressed color="error" @click="deleteApiList()">삭제</v-btn>
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
            api: {
                panels: {
                    list: [0],
                },
                selected: [],
                dataTable: {
                    headers: [
                        { text: 'API URL', sortable: false, value: 'url' },
                        { text: 'API 명', sortable: false, value: 'name' },
                        { text: 'API 종류', sortable: false, value: 'method' },
                        { text: '생성한 날짜', sortable: false, value: 'createdDate' },
                        { text: '수정한 날짜', sortable: false, value: 'lastModifiedDate' },
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
    watch: {
        'api.dataTable.page': {
            handler(newValue, oldValue) {
                this.setApiList();
            },
            deep: true,
        },
    },
    computed: {
        name() {
            let name;

            name = '';
            const user = _.cloneDeep(store.getters['app/GET_USER']);
            if (user) {
                name = user
                    ? user.name : user.username;
                name += '님';
            }
            return name;
        },
    },
    methods: {
        async logout() {
            const token = meta.auth.getToken();
            await meta.auth.logout(token);
            this.$router.replace('/sign-in');
        },
        handleClick(value:any) {
            this.$router.push({
                path: '/settings/apis/detail',
                query: {
                    id: value.id,
                },
            });
        },
        async setApiList() {
            const self = this;

            return new Promise((resolve: any, reject: any) => {
                Promise.resolve()
                    .then(() => {
                        const param = {
                            page: self.api.dataTable.page,
                            rowSize: self.api.dataTable.itemsPerPage,
                        };

                        self.api.dataTable.loading = true;
                        return meta.api.common.api.getApiList(param);
                    })
                    .then((response: any) => {
                        const { data } = response;
                        self.api.dataTable.items = data.items;
                        self.api.dataTable.serverItemsLength = data.totalRows;
                        self.api.dataTable.loading = false;
                    })
                    .then(() => { resolve(); });
            });
        },
        async deleteApiList() {
            const self = this;

            if (await meta.confirm('삭제 하시겠습니까?')) {
                const selectedApi:any = self.api.selected;
                const idList:number[] = [];

                for (let i = 0; i < selectedApi.length; i++) {
                    if (parseInt(selectedApi[i].id) > 9) {
                        idList.push(selectedApi[i].id);
                    } else {
                        await meta.alert('기초 API는 삭제할수 없습니다.');
                    }
                }

                (await meta.api.common.api.removeApiList(idList));

                await meta.alert('삭제에 성공했습니다.');
                this.setApiList();
            }
        },
    },
    mounted() {
        Promise.resolve()
            .then(this.setApiList);
    },
});
</script>

<style scoped>

</style>
