<template>
    <div class="ma-3">
        <v-row dense>
            <v-col>
                <h1>사용자 관리</h1>
            </v-col>
        </v-row>
        <v-row dense>
            <v-col cols="12" sm="7">
                <v-card>
                    <v-card-title style="display: list-item">
                        <div style="float: left;">사용자 목록</div>
                    </v-card-title>
                    <v-card-title>
                        <v-col cols="12" sm="4">
                            <v-select
                                label="역할"
                                v-model="data.query.roleId"
                                :items="select.roles.items"
                                item-text="text"
                                item-value="value"
                                dense
                                hide-details
                                outlined
                            ></v-select>
                        </v-col>
                        <v-col cols="12" sm="4">
                            <v-select
                                label="상태"
                                v-model="data.query.status"
                                :items="select.status.items"
                                item-text="text"
                                item-value="value"
                                dense
                                hide-details
                                outlined
                            ></v-select>
                        </v-col>
                        <v-col cols="12" sm="4">
                            <v-text-field
                                autocomplete="off"
                                dense
                                label="이름"
                                validate-on-blur
                                hide-details="auto"
                                v-model="data.query.name"
                            ></v-text-field>
                        </v-col>
                    </v-card-title>
                    <v-card-text>
                        <div style="max-height: 400px; overflow-y: auto;">
                            <v-col class="text-right pa-0 ma-0">
                                <v-icon style="color: #1DDB16;">mdi-circle-medium</v-icon>사용
                                <v-icon style="color: #FFE400;">mdi-circle-medium</v-icon>정지
                                <v-icon style="color: red;">mdi-circle-medium</v-icon>삭제
                            </v-col>
                            <v-simple-table dense>
                                <template v-slot:default>
                                    <thead>
                                        <tr>
                                            <th class="text-center" scope="row">역할</th>
                                            <th class="text-center" scope="row">아이디</th>
                                            <th class="text-center" scope="row">이름</th>
                                            <th class="text-center" scope="row">상태</th>
                                            <th class="text-center" scope="row">가입일</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr
                                            v-for="(item) in data.userList"
                                            :key="item.id"
                                            class="cursor--pointer"
                                            @click="clickUser(item.id)"
                                        >
                                            <template v-if="item.roleId === 1">
                                                <td class="text-center">최고관리자</td>
                                            </template>
                                            <template v-if="item.roleId === 2">
                                                <td class="text-center">사용자</td>
                                            </template>
                                            <td class="text-center">{{item.username}}</td>
                                            <td class="text-center">{{item.name}}</td>
                                            <template v-if="statusNameList[item.status] === '삭제'">
                                                <td class="text-center"><v-icon style="color: red;">mdi-circle-medium</v-icon></td>
                                            </template>
                                            <template v-if="statusNameList[item.status] === '사용'">
                                                <td class="text-center"><v-icon style="color: #1DDB16;">mdi-circle-medium</v-icon></td>
                                            </template>
                                            <template v-if="statusNameList[item.status] === '정지'">
                                                <td class="text-center"><v-icon style="color: #FFE400;">mdi-circle-medium</v-icon></td>
                                            </template>
                                            <td class="text-center">{{item.createdDate}}</td>
                                        </tr>
                                    </tbody>
                                </template>
                            </v-simple-table>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" sm="5">
                <v-card>
                    <v-card-title>사용자 상세</v-card-title>
                    <v-card-text>
                        <v-form ref="form">
                            <v-row dense>
                                <v-col cols="12">
                                    <v-text-field
                                        autocomplete="off"
                                        dense
                                        outlined
                                        label="아이디"
                                        validate-on-blur
                                        maxlength="100"
                                        counter
                                        hide-details="auto"
                                        v-model="data.user.username"
                                        :rules="[rules.required]"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <template v-if="!data.user.id">
                                        <v-text-field
                                            autocomplete="off"
                                            dense
                                            outlined
                                            label="패스워드"
                                            validate-on-blur
                                            maxlength="100"
                                            counter
                                            type="password"
                                            hide-details="auto"
                                            v-model="data.user.password"
                                            :rules="[rules.required]"
                                        ></v-text-field>
                                    </template>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                        dense
                                        outlined
                                        label="이름"
                                        maxlength="30"
                                        counter
                                        validate-on-blur
                                        hide-details="auto"
                                        v-model="data.user.name"
                                        :rules="[rules.required]"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                        dense
                                        outlined
                                        label="이메일"
                                        maxlength="50"
                                        counter
                                        validate-on-blur
                                        hide-details="auto"
                                        v-model="data.user.email"
                                        :rules="[rules.required]"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                        dense
                                        outlined
                                        label="가입일"
                                        disabled
                                        validate-on-blur
                                        hide-details="auto"
                                        v-model="data.user.createdDate"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12">
                                    <v-card>
                                        <v-card-title>역할</v-card-title>
                                        <v-card-text>
                                            <div style="max-height: 500px; overflow-y: auto;">
                                                <template>
                                                    <v-radio-group v-model="role.roleSelected">
                                                        <v-radio
                                                        v-for="n in role.dataTable.items"
                                                        :key="n.id"
                                                        :label="`${n.name}`"
                                                        :value="n.id"
                                                        ></v-radio>
                                                    </v-radio-group>
                                                </template>
                                            </div>
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" sm="6">
                                    <v-card>
                                        <v-card-title>사용여부</v-card-title>
                                        <v-radio-group
                                            v-model="data.user.status"
                                            row
                                            mandatory
                                            class="pl-3"
                                        >
                                            <v-radio
                                                label="사용"
                                                value="T"
                                            ></v-radio>
                                            <v-radio
                                                label="정지"
                                                value="S"
                                            ></v-radio>
                                            <v-radio
                                                label="삭제"
                                                value="D"
                                            ></v-radio>
                                        </v-radio-group>
                                    </v-card>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" class="text-right">
                                    <v-btn
                                        color="secondary"
                                        :loading="btn.saveAccount.loading"
                                        @click="clickUser('');"
                                    >초기화</v-btn>
                                    <v-btn
                                        color="primary"
                                        :loading="btn.saveAccount.loading"
                                        @click="saveAccount();"
                                    >저장</v-btn>
                                    <v-btn
                                        v-if="data.user.id"
                                        color="error"
                                        :loading="btn.saveAccount.loading"
                                        @click="deleteAccount();"
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
import moment from 'moment';

export default Vue.extend({
    data() {
        return {
            data: {
                userList: [] as any,
                user: {} as any,
                role: {
                    id: null,
                },
                query: {
                    roleId: '',
                    status: '',
                    name: null,
                },

            },
            role: {
                roleSelected: '',
                dataTable: {
                    headers: [
                        { text: '역할 명', sortable: false, value: 'name' },
                        { text: '역할 설명', sortable: false, value: 'description' },
                    ],
                    items: [],
                },
            },
            text: {
                icon: 'mdi-eye-off-outline',
                type: 'password',
            },
            btn: {
                saveAccount: {
                    loading: false,
                },
            },
            statusNameList: {
                T: '사용',
                D: '삭제',
                S: '정지',
            },
            teacher: {
                flag: false,
                refuseFlag: false,
            },
            select: {
                roles: {
                    items: [{ text: '전체', value: '' }],
                },
                status: {
                    items: [
                        { text: '전체', value: '' },
                        { text: '사용', value: 'T' },
                        { text: '정지', value: 'S' },
                        { text: '삭제', value: 'D' },
                    ],
                },
            },
            rules: {
                required: (value: any) => !!value || '필수',
            },
        };
    },
    computed: {
        form(): Vue & { validate: () => boolean } {
            return this.$refs.form as Vue & { validate: () => boolean };
        },
    },
    watch: {
        'role.roleSelected': function (val) {
            this.teacher.flag = (val == 2);
        },
        'data.query.roleId': function () {
            this.loadUserList();
        },
        'data.query.status': function () {
            this.loadUserList();
        },
        'data.query.name': function () {
            this.loadUserList();
        },
    },
    methods: {
        async loadUserList() {
            let userList: any;

            this.data.user = {};

            userList = (await meta.api.common.user.getUserList({
                page: 1,
                rowSize: 100000000,
                roleId: this.data.query.roleId,
                status: this.data.query.status,
                name: this.data.query.name,
                sort: ['role_id,asc', 'created_date,desc'],
            })).data.items;

            this.data.userList = userList;

            this.data.userList.forEach((item: any) => {
                item.createdDate = moment(item.createdDate).format('YYYY-MM-DD');
            });
        },
        async loadRoleList() {
            let roleList;
            roleList = (await meta.api.common.role.getRoleList({
                page: 1,
                rowSize: 100000000,
            })).data.items;

            this.role.dataTable.items = roleList;

            roleList.forEach((e: any) => {
                this.select.roles.items.push({ text: e.name, value: e.id });
            });
        },
        async clickUser(id: number) {
            let roleList;

            this.data.user = (await meta.api.common.user.getUser(id)).data;
            this.data.user.password = null;

            this.$set(this.data.user, 'birthDate', moment(this.data.user.birthDate).format('YYYY-MM-DD'));

            roleList = (await meta.api.common.roleUser.getRoleUserList({ userId: id })).data.items;
            this.role.roleSelected = roleList[0].roleId;
        },
        async saveAccount() {
            const { user } = this.data;
            const validate = this.form.validate();

            this.btn.saveAccount.loading = true;
            if (user.username.length > 100) {
                await meta.alert('유저 아이디는 100자 이하로 작성해주십시오.');
            } else if (user.name.length > 30) {
                await meta.alert('이름은 30자 이하로 작성해주십시오.');
            } else if (!validate) {
                await meta.alert('유효한 값을 작성해주세요.');
            } else if (this.role.roleSelected == '') {
                await meta.alert('역할을 입력해주세요.');
            } else if (await meta.confirm('저장 하시겠습니까?')) {
                if (user.id == undefined || user.id == null) {
                    await meta.api.app.account.createAccount({ userDto: user, roleId: this.role.roleSelected });
                } else if (user.id != undefined && user.id != null) {
                    await meta.api.app.account.modifyAccount({ userDto: user, roleId: this.role.roleSelected });
                }
                await meta.alert('저장 되었습니다.');
                await this.loadUserList();
            }
            this.btn.saveAccount.loading = false;
        },
        stck(str: any, limit: any) {
            let o; let d; let p; let n = 0; const
                l = limit == null ? 4 : limit;
            for (let i = 0; i < str.length; i++) {
                const c = str.charCodeAt(i);
                if (i > 0 && (p = o - c) > -2 && p < 2 && (n = p == d ? n + 1 : 0) > l - 3) return false;
                d = p;
                o = c;
            }
            return true;
        },
        async deleteAccount() {
            if (await meta.confirm('삭제하시겠습니까?')) {
                await meta.api.app.account.removeAccount(this.data.user.id);
                await meta.alert('삭제 되었습니다.');
                await this.loadUserList();
            }
        },
    },
    mounted() {
        Promise.all([
            this.loadUserList(),
            this.loadRoleList(),
        ]);
    },
});
</script>

<style scoped>

</style>
