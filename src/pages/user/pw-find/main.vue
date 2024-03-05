<template>
    <div class="global-theme">
        <v-row>
            <v-col cols="12" lg="7" class="top">
                <v-row>
                    <v-col cols="12" class="mr-1 mb-7">
                        <p class="menu-title" style="margin-bottom:60px;">
                            비밀번호 변경
                        </p>
                        <p class="menu-sub-title py-1" style="border-bottom:2px solid;">
                            Complete all fields to register as a fianacial professional
                        </p>
                    </v-col>
                </v-row>
                <v-form ref="form">
                    <v-row class="mb-8">
                        <v-col cols="12">
                            <v-row>
                                <v-col cols="12" lg="6" class="row-margin">
                                    <p class="form-title">Company Email Address</p>
                                    <v-text-field
                                        v-model="data.user.username"
                                        label="Enter your email"
                                        :rules="[rules.required, rules.email]"
                                        single-line
                                        maxlength="50"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" lg="6" class="row-margin">
                                    <p class="form-title">Phone Number</p>
                                    <input
                                        class="select"
                                        v-model="phoneNum"
                                        placeholder="Enter your phone number"
                                        maxlength="11"
                                        @change="onInput($event)"
                                    />
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" lg="6" class="row-margin">
                                    <p class="form-title">First Name</p>
                                    <v-text-field
                                        v-model="data.user.firstName"
                                        label="Enter your first namer"
                                        :rules="[rules.required, rules.noNum]"
                                        single-line
                                        maxlength="30"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" lg="6" class="row-margin">
                                    <p class="form-title">Last Name</p>
                                    <v-text-field
                                        v-model="data.user.lastName"
                                        label="Enter your last name"
                                        :rules="[rules.required, rules.noNum]"
                                        single-line
                                        maxlength="30"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" lg="6" class="row-margin">
                                    <p class="form-title">Password</p>
                                        <v-text-field
                                            v-model="data.user.password"
                                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                            :type="show1 ? 'text' : 'password'"
                                            label="Enter your password"
                                            @click:append="show1 = !show1"
                                            :rules="[rules.required, rules.password]"
                                            single-line
                                            maxlength="100"
                                        ></v-text-field>
                                </v-col>
                                <v-col cols="12" lg="6" class="row-margin">
                                    <p class="form-title">Password  Confirm</p>
                                    <v-text-field
                                        :append-icon="show2? 'mdi-eye' : 'mdi-eye-off'"
                                        :type="show2 ? 'text' : 'password'"
                                        label="Enter your password"
                                        @click:append="show2 = !show2"
                                        v-model="data.user.confirmpass"
                                        :rules="[rules.required, rules.confirmpass]"
                                        single-line
                                        maxlength="100"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-form>
                <v-row style="text-align:right;">
                    <v-col cols="12" class="mb-5">
                        <span class="font-weight-bold pl-1 font-size-21">
                        </span>
                    </v-col>
                    <v-col cols="12">
                        <span class="font-weight-bold pr-1 font-size-21">
                            <i class="mdi mdi-arrow-left"></i>
                            Go back
                        </span>
                        <button class="btn" @click="modifyPass">비밀번호 변경</button>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" lg="5" style="background-color:#ffd600;" class="right">
                <v-row>
                    <v-col cols="12" class="mr-1 mb-7">
                        <p class="menu-title" style="margin-bottom:50px;">
                            DNEURO
                        </p>
                        <div class="menu-sub-title py-1" style="border-bottom:2px solid;">
                            <span class="font-size-24 font-weight-bold mr-5"></span>
                            <span class="font-size-16">(Exclusively for Financial Professionals)</span>
                        </div>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import meta from '@/api/meta';

export default Vue.extend({
    data() {
        return {
            show1: false,
            show2: false,
            phoneNum: '',
            data: {
                user: { } as any,
            },
            btn: {
                saveAccount: {
                    loading: false,
                },
            },

            rules: {
                required: (value:any) => !!value || '필수',
                password: (value:any): any => {
                    let message:any; let flag:any;
                    flag = false;
                    const self : any = this;
                    if (value == null || value.length < 8) {
                        message = '비밀번호 8자 이상';
                    } else if (!/(?=.*\d{1,50})(?=.*[~``!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{1,50}).{8,50}$/g.test(value)) {
                        message = '영문자 숫자 특수문자 조합';
                    } else if (/(\w)\1\1/.test(value)) {
                        message = '동일한 3자리 문자';
                    } else if (!self.stck(value, 3)) {
                        message = '연속된 3자리 문자';
                    } else {
                        flag = true;
                    }
                    return flag || message;
                },
                email: (value:any) => {
                    let message; let
                        flag;
                    flag = false;
                    if (!(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(value))) {
                        message = '유효한 이메일이 아닙니다.';
                    } else {
                        flag = true;
                    }
                    return flag || message;
                },
                confirmpass: (value:any): any => {
                    let message:any; let
                        flag:any;
                    flag = false;

                    if (this.data.user.password !== value) {
                        message = '비밀번호가 일치하지 않습니다';
                    } else {
                        flag = true;
                    }
                    return flag || message;
                },
                noNum: (value:any): any => {
                    let message; let
                        flag;
                    flag = false;
                    if (!(/^[ㄱ-힣a-zA-Z]*$/g.test(value))) {
                        message = '영어 또는 한글만 입력해주세요.';
                    } else {
                        flag = true;
                    }
                    return flag || message;
                },
                onlyNum: (value:any): any => {
                    let message; let
                        flag;
                    flag = false;
                    if (!(/^[0-9]*$/g.test(value))) {
                        message = '숫자만 입력해주세요.';
                    } else {
                        flag = true;
                    }
                    return flag || message;
                },
            },
        };
    },

    methods: {
        stck(str : any, limit : Number) {
            let o = 0; let d = 0; let p = 0; let n = 0;
            const l = limit == null ? 4 : limit;
            for (let i = 0; i < str.length; i += 1) {
                const c = str.charCodeAt(i);
                p = o - c;
                n = p === d ? n + 1 : 0;
                if (i > 0 && p > -2 && p < 2 && n > Number(l) - 3) return false;
                d = p;
                o = c;
            }
            return true;
        },

        onInput(event) {
            this.data.user.phoneNum = event.target.value;
        },

        async existUserInfo(user) {
            return (await meta.api.common.user.getUserInfo(user)).data > 0;
        },

        async existUsername(username:String) {
            return (await meta.auth.idExists({ username })).data > 0;
        },

        async modifyPass() {
            const { user } = this.data;
            console.log(user);
            this.btn.saveAccount.loading = true;
            const validate = (this.$refs.form as Vue & { validate: () => boolean }).validate();
            if (this.data.user.phoneNum == null || this.data.user.phoneNuam === '') {
                await meta.alert('Phone Number를 작성해주세요.');
            } else if (validate === false) {
                await meta.alert('유효한 값을 작성해주세요.');
            } else if (!(await this.existUsername(user.username))) {
                await meta.alert('아이디가 존재하지 않습니다.');
            } else if (!(await this.existUserInfo(user))) {
                await meta.alert('회원 정보가 일치하지 않습니다.');
            } else if (await meta.confirm('비밀번호 변경을 하시겠습니까?')) {
                if ((await meta.api.common.user.modifyPassword(user)).data > 0) {
                    await meta.alert('비밀번호 변경을 완료하였습니다.');
                } else {
                    await meta.alert('같은 비밀번호로는 변경이 불가능합니다.');
                }
            }
            this.btn.saveAccount.loading = false;
        },
    },

    mounted() {
    },

    computed: {
        form(): Vue {
            return this.$refs.form as Vue;
        },
    },

    watch: {
        phoneNum() {
            return this.phoneNum = this.phoneNum.replace(/[^0-9]/g, '');
        },
    },
});
</script>

<style>
.global-theme .top {
    width: 100%;
    padding: 60px 100px;
}

.top v-text-field {
    font-size:18px;
}

.global-theme .right {
    width: 100%;
    padding: 60px 80px;
}

.global-theme .menu-title {
    font-size: 64px !important;
    font-weight: 900;
    color: #000;
    line-height: 1.09;
}

.global-theme .menu-sub-title {
    font-size: 16px !important;
    font-weight: bold;
    color: #000;
}

.form-title {
    font-size:21px;
    font-weight:bold;
    margin-bottom:25px;
}

.row-margin {
    margin-bottom:30px;
}

.font-size-21 {
    font-size:21px;
}

.btn {
    background-color:#000;
    color:#fff;
    width:135px;
    height:48px;
    margin-left:10px;
    font-size:21px;
}

.right-margin {
    margin-bottom:620px;
}

.select {
    width:100%;
    border-bottom:1px solid #808080;
    margin-top:10px;
    padding:5px;
}

.select:focus {
    outline:none;
}

.select::placeholder {
    color:#808080;
}

@media screen and (max-width: 1263px) {
    .global-theme .top {
        padding: 30px 80px;
        margin-bottom:100px;
    }

    .global-theme .right {
        padding: 30px 80px;
    }

    .right-margin {
        margin-bottom:200px;
    }

    .global-theme .right {
        padding: 30px 80px;
    }

    .global-theme .menu-title {
        margin-top:30px;
    }
}

@media screen and (max-width: 959px) {
    .right-margin {
        margin-bottom:100px;
    }
}
</style>
