<template>
    <div class="sign-in-theme">
        <v-row class="ma-0 h-100">
            <v-col cols="12" md="7" class="main-left pa-0">
                <div style="max-width: 1120px; float: right" class="top">
                    <v-row class="ma-0">
                        <v-col cols="12" class="border-b pa-0 pb-14 mb-14">
                            <span class="main-title">Sign in</span>
                        </v-col>
                    </v-row>
                    <v-row class="ma-0 mb-15">
                        <v-col cols="12" class="pa-0 mb-4">
                            <span class="font-size-21 weight-800">Email</span>
                        </v-col>
                        <v-col cols="12" class="pa-0">
                            <v-text-field
                                class="pt-1 mt-0 mb-10p"
                                hide-details
                                :class="data.username ? 'input-border-blue' : 'input-border-gray'"
                                v-model="data.username"
                                @keyup.enter="login"
                                placeholder="Enter your email address"
                                color="black"
                            ></v-text-field>
                            <div v-if="flag.email === false" style="text-align: right; color: #fd3f01">
                                <img :src="img.noticeImg" style="width: 13px; height: 13px" />
                                {{ message.email }}
                            </div>
                        </v-col>
                    </v-row>
                    <v-row class="ma-0 mb-15">
                        <v-col cols="12" class="pa-0 mb-4">
                            <span class="font-size-21 weight-800">Password</span>
                        </v-col>
                        <v-col cols="12" class="pa-0">
                            <v-text-field
                                :type="flag.password ? 'text' : 'password'"
                                hide-details
                                class="pt-1 mt-0 mb-10p"
                                :class="data.password ? 'input-border-blue' : 'input-border-gray'"
                                :append-icon="flag.password ? 'mdi-eye' : 'mdi-eye-off'"
                                @click:append="flag.password = !flag.password"
                                @keyup.enter="login"
                                v-model="data.password"
                                placeholder="Enter your password"
                                color="black"
                            ></v-text-field>
                            <div v-if="flag.pass === false" style="text-align: right; color: #fd3f01">
                                <img :src="img.noticeImg" style="width: 13px; height: 13px" />
                                {{ message.pass }}
                            </div>
                        </v-col>
                    </v-row>
                    <v-row class="ma-0" :style="$vuetify.breakpoint.lgAndDown ? 'margin-bottom: 80px !important;' : 'margin-bottom: 190px !important;'">
                        <v-col cols="6" class="text-left pa-0">
                            <span id="hoverEvent" class="mb-0 v-align-bottom weight-900 cursor" :class="$vuetify.breakpoint.mdAndDown ? 'font-size-14' : 'font-size-21'">
                                Forgot your password? <i class="mdi mdi-arrow-right"></i>
                            </span>
                        </v-col>
                        <v-col cols="6" class="text-right pa-0">
                            <span class="mb-0 v-align-bottom weight-900 cursor" :class="$vuetify.breakpoint.mdAndDown ? 'font-size-14' : 'font-size-21'">
                                Stay signed in
                                <span class="checkbox-square" style="margin-left: 10px">
                                    <label class="checkbox-square">
                                        <input type="checkbox" name="" />
                                        <i class="check-icon"></i>
                                    </label>
                                </span>
                            </span>
                        </v-col>
                    </v-row>
                    <v-row class="text-right align-bottom main-left-bottom pr-0 ma-0">
                        <v-col cols="12" class="pa-0 mb-10">
                            <span class="font-size-16">By clicking "Sign in" I agree to the Dneuro</span>
                            <u class="font-size-21 font-weight-black cursor ml-31p"> Terms of Use</u>
                        </v-col>
                        <v-col cols="12" class="pa-0">
                            <div class="d-flex justify-end align-center">
                                <img class="cursor--pointer" :src="img.goBackBtnImg" @click="$router.go(-1).catch((e) => {})" />
                                <button @click="login" class="font-size-21 sign-in-button ml-10 font-weight-bold">Sign in</button>
                            </div>
                        </v-col>
                    </v-row>
                </div>
            </v-col>
            <v-col cols="12" md="5" class="main-right">
                <v-row class="ma-0 mb-15">
                    <v-col cols="12" class="pa-0">
                        <p class="main-title mb-4">DNEURO</p>
                    </v-col>
                    <v-col class="pa-0 border-b">
                        <span class="main-title-2">ADVISOR CENTER&nbsp;</span>
                        <span class="font-size-16">(Exclusively for Financial Professionals)</span>
                    </v-col>
                </v-row>
                <v-row class="ma-0" :style="$vuetify.breakpoint.lgAndDown ? 'margin-bottom: 80px !important;' : 'margin-bottom: 147px !important;'">
                    <v-col cols="12" class="pa-0 font-size-21 font-weight-bold mb-10"> New to Advisor Center? </v-col>
                    <v-col cols="12" class="pa-0 font-size-21" style="letter-spacing: -0.6px">
                        Register to use portfolio analytics powered by Aladdin technology and<br />
                        practice insight to make more connections with clients and prospects.
                    </v-col>
                    <v-col cols="12" class="pa-0 font-size-21 mb-5" style="letter-spacing: -0.3px">
                        <ul>
                            <li>Fast, sophoisticated tools to evaluate portfolios, risks and fees</li>
                            <li>Model allocations and guidance to help meet unique client goals</li>
                            <li>CE courses, market insights and events to inform your thinking</li>
                        </ul>
                    </v-col>
                    <v-col cols="12" class="pa-0 mb-6">
                        <span
                            id="hoverEvent"
                            @click="$router.push({ path: '/sign-up' })"
                            class="v-align-bottom weight-900 cursor"
                            :class="$vuetify.breakpoint.mdAndDown ? 'font-size-14' : 'font-size-21'"
                        >
                            Register <i class="mdi mdi-arrow-right"></i>
                        </span>
                    </v-col>
                    <v-col class="pa-0 ma-0">
                        <span id="hoverEvent" class="mb-0 v-align-bottom weight-900 cursor" :class="$vuetify.breakpoint.mdAndDown ? 'font-size-14' : 'font-size-21'">
                            Need help signing in? <i class="mdi mdi-arrow-right"></i>
                        </span>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import meta from '@/api/meta';

import goBackBtnImg from '@/assets/images/button_goback_unselected.png';
import registerBtnImg from '@/assets/images/button_register_small_unselected.png';
import noticeImg from '@/assets/images/icon_notice.png';
import arrowRight from '@/assets/images/icon_arrow_right_big.png';

export default Vue.extend({
    data() {
        return {
            img: {
                goBackBtnImg,
                registerBtnImg,
                noticeImg,
                arrowRight,
            },
            data: {
                username: null,
                password: null,
            },
            flag: {
                password: false,
                saveIdFlag: false,
                email: true,
                pass: true,
            },
            message: {
                email: '',
                pass: '',
            },
            btn: {
                signIn: {
                    loading: false,
                },
            },
        };
    },
    methods: {
        /* 로그인 */
        async login() {
            this.$store.commit('app/SET_LOADING', true);
            if (!this.data.username) {
                await meta.alert('아이디를 입력해주세요.');
            } else if (!this.data.password) {
                await meta.alert('비밀번호를 입력해주세요.');
            } else {
                try {
                    await meta.auth.login(this.data.username, this.data.password);
                    this.$router.replace('/');
                } catch (e: any) {
                    // alert(e.response.data.message);
                    await meta.alert(e);
                }
            }
            this.$store.commit('app/SET_LOADING', false);
        },
        async authenticated(token: string) {
            if (token) {
                try {
                    await axios({
                        url: '/api',
                        method: 'get',
                        headers: {
                            Authorization: token,
                        },
                    });
                    return true;
                } catch (e) {
                    return false;
                }
            } else {
                return false;
            }
        },
    },

    watch: {
        'data.username': {
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
        'data.password': {
            async handler(n) {
                this.flag.pass = false;
                if (n == null || n.length < 8) {
                    this.message.pass = 'Password is invalid.';
                } else {
                    this.flag.pass = true;
                }
                return this.flag.pass || this.message.pass;
            },
        },
    },
});
</script>

<style scoped>
.sign-in-theme {
    height: 100%;
}

/* .sign-in-theme .main-left {
    padding: 60px 100px;
    position: relative;
} */

.sign-in-theme .top {
    width: 100%;
    padding: 60px 100px;
}

.sign-in-theme .main-right {
    padding: 60px 100px;
    background-color: #fd3f01;
}

.sign-in-theme .main-title {
    font-size: 64px;
    font-weight: 900;
    color: #000;
}

.sign-in-theme .main-title-2 {
    font-size: 28px;
    font-weight: 900;
    color: #000;
}

.sign-in-theme .weight-900 {
    font-weight: 900;
}

.sign-in-theme .weight-800 {
    font-weight: 800;
}

.height-100 {
    height: 100%;
}

.border-b {
    border-bottom: 2px solid #000;
}

.font-color-deep-orange {
    color: #e65401;
}

.sign-in-button {
    text-align: center;
    background-color: #000000;
    color: #ffffff;
    width: 134px;
    height: 48px;
}

.cursor {
    cursor: pointer;
}

li {
    margin: 20px 0px;
}

#hoverEvent:hover {
    border-bottom: 2px solid #000;
}

.v-text-field ::placeholder {
    padding-left: 10px;
}

.checkbox-square .check-icon {
    display: inline-block;
    width: 23px;
    height: 23px;
    background: url(@/assets/images/checkbox-unselected.png) no-repeat;
    padding: 0 0 0 30px;
    vertical-align: middle;
}

.checkbox-square input[type='checkbox'] {
    display: none;
}

.checkbox-square input[type='checkbox']:checked + .check-icon {
    background: url(@/assets/images/checkbox-selected.png) no-repeat;
}

@media screen and (max-width: 1263px) {
    .sign-in-theme .main-left {
        padding: 30px 50px;
    }

    .sign-in-theme .main-right {
        padding: 30px 50px;
    }

    .sign-in-theme .main-title {
        font-size: 48px;
    }

    .sign-in-button {
        text-align: center;
        background-color: #000000;
        color: #ffffff;
        width: 114px;
        height: 38px;
    }

    .font-size-21 {
        font-size: 15px !important;
    }

    li {
        margin: 15px 0px;
    }
}

@media screen and (max-width: 959px) {
    .sign-in-theme .main-title {
        font-size: 40px;
    }

    .sign-in-button {
        text-align: center;
        background-color: #000000;
        color: #ffffff;
        width: 100px;
        height: 30px;
    }

    li {
        margin: 10px 0px;
    }
}
</style>
