<template>
    <div class="ma-3">
        <v-row dense>
            <v-col>
                <h1>API 관리 상세</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-expansion-panels
                    multiple
                    v-model="api_detail.panels.list"
                >
                    <v-expansion-panel>
                        <v-expansion-panel-header>API 관리 상세</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-row>
                                <div style="width:100%;display: flex;justify-content: center;margin-bottom:20px">
                                    <v-card width="50%">
                                        <v-card-title>API 상세</v-card-title>
                                        <v-card-text>
                                            <v-form>
                                                <v-row dense>
                                                    <v-col cols="12">
                                                                <v-text-field
                                                                    v-model="detailData.url"
                                                                    dense
                                                                    outlined
                                                                    clearable
                                                                    label="API URL"
                                                                    hide-details="auto"
                                                                    style="margin-bottom:15px"
                                                                ></v-text-field>
                                                                <v-autocomplete
                                                                    dense
                                                                    outlined
                                                                    clearable
                                                                    hide-no-data
                                                                    label="API 종류"
                                                                    hide-details="auto"
                                                                    :items="apiMethodList"
                                                                    v-model="detailData.method"
                                                                    style="margin-bottom:15px"
                                                                ></v-autocomplete>
                                                                <v-text-field
                                                                    v-model="detailData.name"
                                                                    dense
                                                                    outlined
                                                                    clearable
                                                                    label="API 명"
                                                                    hide-details="auto"
                                                                    style="margin-bottom:15px"
                                                                ></v-text-field>
                                                                <v-text-field
                                                                    v-model="detailData.description"
                                                                    dense
                                                                    outlined
                                                                    clearable
                                                                    label="API 상세"
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
                            <div class="float-right" v-if="detailData.id != undefined && detailData.id != null">
                                <v-btn depressed color="primary" @click="updateApi()">수정</v-btn>
                            </div>
                            <div class="float-right" v-else>
                                <v-btn depressed color="primary" @click="registerNewApi()">저장</v-btn>
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
            api_detail: {
                panels: {
                    list: [0],
                },
            },
            apiMethodList: [
                'POST', 'GET', 'PUT', 'DELETE', 'ALL',
            ],
            detailData: {
                id: null,
                url: null,
                method: null,
                name: null,
                description: null,
                createdDate: null,
                lastModifiedDate: null,
            },
        };
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
        async setApiDeatil(queryId: number) {
            const self = this;
            return new Promise((resolve: any, reject: any) => {
                Promise.resolve()
                    .then(() => meta.api.common.api.getApi(queryId))
                    .then((response) => {
                        self.detailData = response.data;
                    })
                    .then(() => { resolve(); });
            });
        },
        async registerNewApi() {
            const self: any = this;

            if (self.detailData.url == null || self.detailData.url == '') {
                meta.alert('API URL을 반드시 입력하세요.');
                return;
            } if (self.detailData.url.length > 500) {
                meta.alert('API URL은 500자 이하로 입력해주세요');
                return;
            }
            if (self.detailData.method == null || self.detailData.method == '') {
                meta.alert('API 종류을 반드시 입력하세요.');
                return;
            }
            if (self.detailData.name == null || self.detailData.name == '') {
                meta.alert('API 명을 반드시 입력하세요.');
                return;
            } if (self.detailData.url.length > 100) {
                meta.alert('API 명은 100자 이하로 입력해주세요');
                return;
            }
            if (self.detailData.description == null || self.detailData.description == '') {
                meta.alert('설명을 반드시 입력하세요.');
                return;
            } if (self.detailData.url.length > 500) {
                meta.alert('설명은 500자 이하로 입력해주세요');
                return;
            }

            if (await meta.confirm('저장 하시겠습니까?')) {
                const params: object = {
                    url: self.detailData.url,
                    method: self.detailData.method,
                    name: self.detailData.name,
                    description: self.detailData.description,
                };

                new Promise((resolve: any, reject: any) => {
                    Promise.resolve()
                        .then(() => meta.api.common.api.createApi(params))
                        .then(() => { resolve(); });
                });
                await meta.alert('저장에 성공했습니다.');
                this.$router.push({
                    path: '/settings/apis',
                });
            }
        },
        async updateApi() {
            const self: any = this;

            if (self.detailData.url == null || self.detailData.url == '') {
                meta.alert('API URL을 반드시 입력하세요.');
                return;
            } if (self.detailData.url.length > 500) {
                meta.alert('API URL은 500자 이하로 입력해주세요');
                return;
            }

            if (self.detailData.method == null || self.detailData.method == '') {
                meta.alert('API 종류을 반드시 입력하세요.');
                return;
            }

            if (self.detailData.name == null || self.detailData.name == '') {
                meta.alert('API 명을 반드시 입력하세요.');
                return;
            } if (self.detailData.url.length > 100) {
                meta.alert('API 명은 100자 이하로 입력해주세요');
                return;
            }

            if (self.detailData.description == null || self.detailData.description == '') {
                meta.alert('설명을 반드시 입력하세요.');
                return;
            } if (self.detailData.url.length > 500) {
                meta.alert('설명은 500자 이하로 입력해주세요');
                return;
            }

            if (await meta.confirm('수정 하시겠습니까?')) {
                const params: any = {
                    id: self.detailData.id,
                    url: self.detailData.url,
                    method: self.detailData.method,
                    name: self.detailData.name,
                    description: self.detailData.description,
                };

                new Promise((resolve: any, reject: any) => {
                    Promise.resolve()
                        .then(() => meta.api.common.api.modifyApi(params.id, params))
                        .then(() => { resolve(); });
                });
                await meta.alert('수정에 성공했습니다.');
                this.$router.push({
                    path: '/settings/apis',
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
                    .then(self.setApiDeatil(queryId));
            });
        }
    },
});
</script>

<style scoped>

</style>
