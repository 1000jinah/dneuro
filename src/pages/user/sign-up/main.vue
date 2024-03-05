<template>
    <div class="sign-up">
        <v-row class="ma-0 h-100">
            <v-col cols="12" md="7" class="pa-0 ma-0">
                <div style="max-width: 1120px; float: right" class="top">
                    <v-row class="ma-0 mb-15">
                        <v-col cols="12" class="pa-0">
                            <p class="menu-title mb-8">Register</p>
                            <p class="menu-sub-title py-1 mb-0" style="border-bottom: 2px solid">Complete all fields to register as a fianacial professional</p>
                        </v-col>
                    </v-row>
                    <v-form ref="form">
                        <v-row class="ma-0" style="margin-bottom: 151px !important">
                            <v-col cols="12" class="pa-0">
                                <v-row class="ma-0 mb-15">
                                    <v-col cols="6" class="pa-0 pr-5">
                                        <p class="form-title">Company Email Address</p>
                                        <v-text-field
                                            v-model="data.user.username"
                                            label="Enter your email"
                                            hide-details
                                            :rules="[rules.required, rules.email]"
                                            single-line
                                            maxlength="50"
                                            color="black"
                                            class="pa-0 ma-0 text-pa"
                                        ></v-text-field>
                                        <div v-if="flag.email === false" class="mt-10p text-right color-orange">
                                            <img :src="img.noticeImg" style="width: 13px; height: 13px" />
                                            {{ message.email }}
                                        </div>
                                    </v-col>
                                    <v-col cols="6" class="pa-0 pl-5">
                                        <v-row class="ma-0 pa-0">
                                            <v-col cols="12" class="ma-0 pa-0">
                                                <div class="tooltip">
                                                    <span class="form-title" style="float: left; margin-bottom: 16px; margin-right: 10px"> Password <img :src="img.announcementImg" /> </span>
                                                    <span class="tooltiptext tooltip-right">
                                                        <ul style="font-size: 14px">
                                                            <li>Length must be greater than 8 characters</li>
                                                            <li>Password must contain numbers</li>
                                                        </ul>
                                                    </span>
                                                </div>
                                            </v-col>
                                            <v-col class="ma-0 pa-0">
                                                <v-text-field
                                                    v-model="data.user.password"
                                                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                                    :type="show1 ? 'text' : 'password'"
                                                    label="Enter your password"
                                                    hide-details
                                                    @click:append="show1 = !show1"
                                                    :rules="[rules.required, rules.password]"
                                                    single-line
                                                    maxlength="100"
                                                    color="black"
                                                    class="pa-0 ma-0 text-pa"
                                                ></v-text-field>
                                                <div v-if="flag.password === false" class="mt-10p text-right color-orange">
                                                    <img :src="img.noticeImg" style="width: 13px; height: 13px" />
                                                    {{ message.password }}
                                                </div>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                                <v-row class="ma-0 mb-15">
                                    <v-col cols="6" class="pa-0 pr-5">
                                        <p class="form-title">Company Name</p>
                                        <v-text-field
                                            v-model="data.user.companyName"
                                            label="Enter your company name"
                                            :rules="[rules.required]"
                                            single-line
                                            hide-details
                                            maxlength="30"
                                            color="black"
                                            class="pa-0 ma-0 text-pa"
                                        ></v-text-field>
                                        <div v-if="flag.companyName === false" class="mt-10p text-right color-orange">
                                            <img :src="img.noticeImg" style="width: 13px; height: 13px" />
                                            {{ message.companyName }}
                                        </div>
                                    </v-col>
                                    <v-col cols="6" class="pa-0 pl-5">
                                        <p class="form-title">Phone Number</p>
                                        <v-text-field
                                            v-model="data.user.phoneNum"
                                            label="Enter your phone number"
                                            :rules="[rules.required, rules.onlyNum]"
                                            single-line
                                            hide-details
                                            maxlength="11"
                                            color="black"
                                            class="pa-0 ma-0 text-pa"
                                        ></v-text-field>
                                        <div v-if="flag.phoneNum === false" class="mt-10p text-right color-orange">
                                            <img :src="img.noticeImg" style="width: 13px; height: 13px" />
                                            {{ message.phoneNum }}
                                        </div>
                                    </v-col>
                                </v-row>
                                <v-row class="ma-0 mb-15">
                                    <v-col cols="6" class="pa-0 pr-5">
                                        <p class="form-title">First Name</p>
                                        <v-text-field
                                            v-model="data.user.firstName"
                                            label="Enter your first namer"
                                            :rules="[rules.required, rules.noNum]"
                                            single-line
                                            hide-details
                                            maxlength="30"
                                            color="black"
                                            class="pa-0 ma-0 text-pa"
                                        ></v-text-field>
                                        <div v-if="flag.firstName === false" class="mt-10p text-right color-orange">
                                            <img :src="img.noticeImg" style="width: 13px; height: 13px" />
                                            {{ message.firstName }}
                                        </div>
                                    </v-col>
                                    <v-col cols="6" class="pa-0 pl-5">
                                        <p class="form-title">Last Name</p>
                                        <v-text-field
                                            v-model="data.user.lastName"
                                            label="Enter your last name"
                                            :rules="[rules.required, rules.noNum]"
                                            single-line
                                            hide-details
                                            maxlength="30"
                                            color="black"
                                            class="pa-0 ma-0 text-pa"
                                        ></v-text-field>
                                        <div v-if="flag.lastName === false" class="mt-10p text-right color-orange">
                                            <img :src="img.noticeImg" style="width: 13px; height: 13px" />
                                            {{ message.lastName }}
                                        </div>
                                    </v-col>
                                </v-row>
                                <v-row class="ma-0">
                                    <v-col cols="12" class="pa-0">
                                        <p class="form-title">Investor Type</p>
                                        <v-select
                                            :items="items"
                                            :menu-props="{ top: false, offsetY: true }"
                                            item-text="name"
                                            item-value="value"
                                            v-model="data.user.investoryTypeCd"
                                            class="pa-0 ma-0"
                                            color="black"></v-select>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-form>
                    <v-row class="ma-0 text-right">
                        <v-col cols="12" class="mb-13 pa-0">
                            <span class="font-size-16">By clicking "Sign in" I agree to the BlackRock</span>
                            <u class="font-size-21 font-weight-black cursor ml-2"> Terms of Use</u>
                        </v-col>
                        <v-col cols="12" class="pa-0">
                            <div class="d-flex justify-end align-center">
                                <!-- <span @click="$router.push({path:'/main'})" class="cursor mr-5 font-weight-bold font-size-21">
                                    <i class="mdi mdi-arrow-left"></i>
                                </span> -->
                                <span class="font-size-21 font-weight-black cursor--pointer" @click="$router.push({ path: '/main' })">
                                    <img :src="img.arrowLeft" style="width: 13px; height: 13px" /> <span class="underline">Go back</span>
                                </span>
                                <button @click="saveAccount" class="font-size-21 register-button ml-10">Register</button>
                            </div>
                        </v-col>
                    </v-row>
                </div>
            </v-col>
            <v-col cols="12" md="5" style="background-color: #ffd600" class="pa-0 ma-0" :style="$vuetify.breakpoint.lgAndDown ? '' : 'height: auto;'">
                <div class="right" style="max-width: 800px" :style="!$vuetify.breakpoint.mdAndUp ? '' : 'position: relative;'">
                    <v-row class="ma-0 mb-15">
                        <v-col cols="12" class="pa-0">
                            <p class="menu-title mb-4">DNEURO</p>
                            <div class="py-1" style="border-bottom: 2px solid">
                                <span class="font-size-28 color-black font-weight-black mr-5">ADVISOR CENTER</span>
                                <span class="font-size-16">(Exclusively for Financial Professionals)</span>
                            </div>
                        </v-col>
                    </v-row>
                    <v-row class="ma-0">
                        <v-col cols="12" class="pa-0 d-flex align-center">
                            <span class="font-size-21 mr-4">Already Registered?</span>
                            <span class="font-size-21 font-weight-black cursor--pointer" @click="$router.push({ path: '/sign-in' })">
                                <span class="underline">Sign in</span> <img :src="img.arrowRight" style="width: 13px; height: 13px" />
                            </span>
                        </v-col>
                    </v-row>
                    <!-- <v-row class="ma-0" :class="!$vuetify.breakpoint.mdAndUp ? '' : 'right-here'">
                        <v-col cols="12" class="pa-0">
                            <p class="font-size-16 ma-0">Not a financial prfessional?</p>
                            <p>
                                <span class="font-size-16 mr-2">Explore our individual investor site</span>
                                <span class="text-decoration-underline font-weight-black font-size-21 cursor--pointer" @click="$router.push({ path: '/main' })"> Here </span>
                            </p>
                        </v-col>
                    </v-row> -->
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import meta from '@/api/meta';

import goBackBtnImg from '@/assets/images/button_goback_unselected.png';
import arrowRight from '@/assets/images/icon_arrow_right_big.png';
import arrowLeft from '@/assets/images/icon_arrow_left_big.png';
import announcementImg from '@/assets/images/icon_announcement_black.png';
import noticeImg from '@/assets/images/icon_notice.png';

export default Vue.extend({
    data() {
        return {
            img: {
                goBackBtnImg,
                arrowRight,
                arrowLeft,
                announcementImg,
                noticeImg,
            },
            flag: {
                email: true,
                password: true,
                companyName: true,
                phoneNum: true,
                firstName: true,
                lastName: true,
                investoryType: true,
            },
            message: {
                email: '',
                password: '',
                companyName: '',
                phoneNum: '',
                firstName: '',
                lastName: '',
                investoryType: '',
            },
            imgFlag: false,
            show1: false,
            show2: false,
            items: [],
            data: {
                // list: [],
                user: {
                    phoneNum: '',
                    investoryTypeCd: 'IT01',
                } as any,
                roleId: 3,
            },
            btn: {
                saveAccount: {
                    loading: false,
                },
            },

            rules: {
                required: (value: any) => !!value || '필수 입력사항입니다.',
                password: (value: any): any => {
                    let message: any;
                    let flag: any;
                    flag = false;
                    const self: any = this;
                    if (value == null || value.length < 8) {
                        message = 'Length must be greater than 8 characters';
                    } else if (!/(?=.*\d{1,50})(?=.*[~``!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{1,50}).{8,50}$/g.test(value)) {
                        message = '영문자 숫자 특수문자 조합으로 작성해주세요.';
                    } else if (/(\w)\1\1/.test(value)) {
                        message = '동일한 3자리 문자는 불가합니다.';
                    } else if (!self.stck(value, 3)) {
                        message = '연속된 3자리 문자는 불가합니다.';
                    } else {
                        flag = true;
                    }
                    return flag || message;
                },
                email: (value: any) => {
                    let message;
                    let flag;
                    flag = false;
                    if (!/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(value)) {
                        message = '유효한 이메일이 아닙니다.';
                    } else {
                        flag = true;
                    }
                    return flag || message;
                },
                confirmpass: (value: any): any => {
                    let message: any;
                    let flag: any;
                    flag = false;

                    if (this.data.user.password !== value) {
                        message = '비밀번호가 일치하지 않습니다';
                    } else {
                        flag = true;
                    }
                    return flag || message;
                },
                noNum: (value: any): any => {
                    let message;
                    let flag;
                    flag = false;
                    if (!/^[ㄱ-힣a-zA-Z]*$/g.test(value)) {
                        message = '영어 또는 한글만 입력해주세요.';
                    } else {
                        flag = true;
                    }
                    return flag || message;
                },
                onlyNum: (value: any): any => {
                    let message;
                    let flag = false;
                    const self: any = this;

                    self.data.user.phoneNum = value.replace(/[^0-9]/g, '');

                    if (!/^[0-9]*$/g.test(value)) {
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
        stck(str: any, limit: Number) {
            let o = 0;
            let d = 0;
            let p = 0;
            let n = 0;
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
        async existUsername(username: String) {
            return (await meta.auth.idExists({ username })).data > 0;
        },
        async saveAccount() {
            const { user } = this.data;
            const { roleId } = this.data;
            const type = user.investoryTypeCd;

            this.$store.commit('app/SET_LOADING', true);
            const validate = (this.$refs.form as Vue & { validate: () => boolean }).validate();
            if (type == null || type === '') {
                await meta.alert('Investor Type을 선택해주세요.');
            } else if (user.phoneNum == null || user.phoneNuam === '') {
                await meta.alert('Phone Number를 작성해주세요.');
            } else if (validate === false) {
                await meta.alert('유효한 값을 작성해주세요.');
            } else if (await this.existUsername(user.username)) {
                await meta.alert('동일한 아이디가 존재합니다.');
            } else if (await meta.confirm('회원가입 하시겠습니까?')) {
                await meta.auth.signUp({ userDto: user, roleId });
                await meta.alert('회원가입이 완료되었습니다.');
                this.$router.push({ path: '/sign-in' });
            }
            this.$store.commit('app/SET_LOADING', false);
        },

        async getCodeList() {
            const data = (
                await meta.api.common.code.getCodeList({
                    page: 1,
                    rowSize: 100000000,
                    parentId: 1,
                })
            ).data.items;

            this.items = data;
        },
    },

    mounted() {
        this.getCodeList();
    },

    computed: {
        form(): Vue {
            return this.$refs.form as Vue;
        },
    },
    watch: {
        'data.user.username': {
            async handler(n) {
                this.flag.email = false;
                if (!/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(n)) {
                    this.message.email = 'Email is invalid';
                } else {
                    this.flag.email = true;
                }
                return this.flag.email || this.message.email;
            },
        },
        'data.user.password': {
            async handler(n) {
                this.flag.password = false;
                if (n == null || n.length < 8) {
                    this.message.password = 'Length must be greater than 8 characters';
                } else if (!/(?=.*\d{1,50})(?=.*[~``!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{1,50}).{8,50}$/g.test(n)) {
                    this.message.password = '영문자 숫자 특수문자 조합으로 작성해주세요.';
                } else if (/(\w)\1\1/.test(n)) {
                    this.message.password = '동일한 3자리 문자는 불가합니다.';
                } else if (!this.stck(n, 3)) {
                    this.message.password = '연속된 3자리 문자는 불가합니다.';
                } else {
                    this.flag.password = true;
                }
                return this.flag.password || this.message.password;
            },
        },
        'data.user.companyName': {
            async handler(n) {
                this.flag.companyName = false;
                if (n === null || n === '') {
                    this.message.companyName = 'Company name is invalids';
                } else {
                    this.flag.companyName = true;
                }

                return this.flag.companyName || this.message.companyName;
            },
        },
        'data.user.phoneNum': {
            async handler(n) {
                this.flag.phoneNum = false;
                if (!/^[0-9]*$/g.test(n) || n === '') {
                    this.message.phoneNum = 'Phone Number is invalids.';
                } else {
                    this.flag.phoneNum = true;
                }
                return this.message.phoneNum || this.flag.phoneNum;
            },
        },
        'data.user.firstName': {
            async handler(n) {
                this.flag.firstName = false;
                if (!/^[ㄱ-힣a-zA-Z]*$/g.test(n)) {
                    this.message.firstName = 'First name is invalid';
                } else {
                    this.flag.firstName = true;
                }
                return this.flag.firstName || this.message.firstName;
            },
        },
        'data.user.lastName': {
            async handler(n) {
                this.flag.lastName = false;
                if (!/^[ㄱ-힣a-zA-Z]*$/g.test(n)) {
                    this.message.lastName = 'Last name is invalid';
                } else {
                    this.flag.lastName = true;
                }
                return this.flag.lastName || this.message.lastName;
            },
        },
    },
});
</script>

<style>
.sign-up .top {
    width: 100%;
    padding: 60px 100px;
}

.top v-text-field {
    font-size: 18px;
}

.sign-up .right {
    width: 100%;
    height: 100vh;
    padding: 60px 100px;
}

.sign-up .menu-title {
    font-size: 64px !important;
    font-weight: 900;
    color: #000;
}

.sign-up .menu-sub-title {
    font-size: 16px !important;
    font-weight: bold;
    color: #000;
}

.form-title {
    font-size: 21px;
    font-weight: bold;
    margin-bottom: 25px;
}

.row-margin {
    margin-bottom: 60px;
}

.font-size-21 {
    font-size: 21px;
}

.btn {
    background-color: #000;
    color: #fff;
    width: 134px;
    height: 48px;
    margin-left: 10px;
    font-size: 21px;
}

.select {
    width: 100%;
    border-bottom: 1px solid #808080;
}

.select:focus {
    outline: none;
}

.select::placeholder {
    color: #808080;
}

.register-button {
    text-align: center;
    background-color: #000000;
    color: #ffffff;
    width: 134px;
    height: 48px;
}

.cursor {
    cursor: pointer;
}

.back:hover {
    border-bottom: 2px solid #000;
}

.text-pa label,
.text-pa input {
    padding-left: 10px;
}

.v-list {
    padding: 0px;
    display: block;
    position: static;
    font-size: 18px;
    font-weight: bold;
}

.v-list-item {
    padding-left: 10px;
}

.theme--light .v-list-item:hover {
    background-color: #000;
    color: #fff !important;
}

.theme--light .v-list-item--active {
    background-color: none;
    color: #000 !important;
}

.theme--light.v-list-item--active:focus:before,
.theme--light.v-list-item.v-list-item--highlighted:before {
    opacity: 0;
}

.theme--light.v-list-item--active:before,
.theme--light.v-list-item--active:hover:before,
.theme--light.v-list-item:focus:before {
    opacity: 0;
}

.v-menu__content {
    border: 1px solid #000;
    border-radius: 0px;
    box-shadow: none;
    margin-top:3px;
}

.v-select__selection--comma {
    padding-left: 10px;
}

.v-application--is-ltr .v-messages {
    text-align: right;
}

.tooltip {
    position: relative;
    display: block;
}

.tooltip .tooltiptext {
    visibility: hidden;
    background-color: #fff;
    padding: 10px 10px 10px 0px;
    position: absolute;
    z-index: 1;
}

.tooltip:hover .tooltiptext {
    visibility: visible;
    border: 1px solid #808080;
}

.tooltip .tooltip-right {
    top: -5px;
}

.tooltip .tooltip-right::after {
    top: 50%;
    right: 100%;
    margin-top: -5px;
}

.underline:hover {
    border-bottom: 2px solid #000;
}

.right-here {
    position: absolute;
    top: 955px;
}

@media screen and (max-width: 1263px) {
    .sign-up .top {
        padding: 30px 50px;
    }

    .sign-up .right {
        padding: 30px 50px;
        height: auto;
    }

    .sign-up .menu-title {
        font-size: 48px !important;
    }

    .right-here {
        position: absolute;
        top: 900px;
    }
}

@media screen and (max-width: 959px) {
    .sign-up .menu-title {
        font-size: 36px !important;
    }
}
</style>
