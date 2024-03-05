import Vue from 'vue';
import axios from 'axios';
import router from '@/config/vue-router';
import Qs from 'qs';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import store from '@/config/store';
import * as Basil from '@/plugins/basil.min';

const meta = {
    version: '1.0.0',
    chart: {
        colorArr: ['#FF754B', '#FEC90E', '#2E9875', '#B8DEC3', '#3E7AD3', '#4BCEFF', '#BFB8DE', '#6F3ED3', '#483ED3'],
    },
    async init() {
        axios.defaults.paramsSerializer = function paramsSerializer(params) {
            return Qs.stringify(params, { indices: false });
        };
        // axios.interceptors.response.use((response) => response, (error):any => {
        //     const { message, status } = error.response.data;
        //     switch (status) {
        //     case 403:
        //         (async () => {
        //             const myToken = meta.auth.getToken();
        //             if (myToken) {
        //                 await meta.auth.logout(myToken);
        //             }
        //             router.go(0);
        //         })();
        //         break;
        //     default:
        //         return error;
        //     }
        //     return error;
        // });
        const token : String = meta.auth.getToken();
        if (token !== undefined && token !== null && token !== '') axios.defaults.headers.Authorization = `Bearer ${token}`;
    },
    alert(message: string) {
        return new Promise<void>((resolve) => {
            store.commit('app/SET_ALERT', {
                value: true,
                message,
                callback() {
                    resolve();
                },
            });
        });
    },
    confirm(message: string, oktext = '예', canceltext = '아니오') {
        return new Promise((resolve) => {
            store.commit('app/SET_CONFIRM', {
                value: true,
                message,
                oktext,
                canceltext,
                callback(result: object) {
                    resolve(result);
                },
            });
        });
    },
    auth: {
        async login(username: string, password: string) {
            let header;
            let token;
            token = Basil.localStorage.get('token');
            if (token && await meta.auth.authenticated(token)) {
                header = `Bearer ${token}`;
            } else {
                header = (await axios({
                    url: '/api/login',
                    method: 'post',
                    data: {
                        username,
                        password,
                    },
                })).headers;

                token = header.authorization.replace('Bearer ', '');
                Vue.$cookies.set('refresh_token', header.refreshtoken, '14d');
                Basil.localStorage.set('token', token);
            }
            axios.defaults.headers.Authorization = header.authorization;
        },
        async logout(token: string) {
            await axios({
                url: '/api/logout',
                method: 'post',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            Vue.$cookies.remove('refresh_token');
            Basil.localStorage.remove('token');
            delete axios.defaults.headers.Authorization;
        },
        async signUp(data: object) {
            return axios({
                url: '/api/app/accounts/sign-up',
                method: 'post',
                data,
            });
        },
        async idExists(data: object) {
            return axios({
                url: '/api/common/users/id-exists',
                method: 'post',
                data,
            });
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
        async authorize(token: string) {
            let authentication = {
                user: Object,
                roleList: Object,
                menuList: Object,
                treeMenuList: Object,
            } as any;
            authentication = jwtDecode<JwtPayload>(token);
            store.commit('app/SET_TOKEN', token);
            store.commit('app/SET_USER', authentication.user);
            store.commit('app/SET_ROLE_LIST', authentication.roleList);
            const session = (await axios({ url: `/api/common/menus/session/${authentication.user.id}`, method: 'get' })).data;
            store.commit('app/SET_MENU_LIST', session.menuList);
            store.commit('app/SET_TREE_MENU_LIST', session.treeMenuList);
            store.commit('app/SET_CODE_LIST', ((await meta.api.common.code.getCodeList({ page: 1, rowSize: 10000000 })).data.items));
        },
        unauthorize() {
            store.commit('app/SET_TOKEN', null);
            store.commit('app/SET_USER', null);
            store.commit('app/SET_ROLE_LIST', null);
            store.commit('app/SET_MENU_LIST', null);
            store.commit('app/SET_TREE_MENU_LIST', null);
            store.commit('app/SET_CODE_LIST', null);
            delete axios.defaults.headers.Authorization;
            Basil.localStorage.remove('token');
        },
        getToken() {
            return Basil.localStorage.get('token');
        },
    },
    config: {
        getCodeNameById(id: any) {
            const row = (store.getters['app/GET_CODE_LIST']).find((e: any) => e.id === id);
            if (row !== undefined && row != null && row.name !== undefined && row.name != null) {
                return row.name;
            }

            return null;
        },
        getCodeValueById(id: any) {
            const row = (store.getters['app/GET_CODE_LIST']).find((e: any) => e.id === id);
            if (row !== undefined && row != null && row.value !== undefined && row.value != null) {
                return row.value;
            }

            return null;
        },
        getCodeDescriptionById(id: any) {
            const row = (store.getters['app/GET_CODE_LIST']).find((e: any) => e.id === id);
            if (row !== undefined && row != null && row.description !== undefined && row.description != null) {
                return row.description;
            }

            return null;
        },
        getCodeRowById(id: any) {
            return (store.getters['app/GET_CODE_LIST']).find((e: any) => e.id === id);
        },
        getCodeListByParentId(parentId: Number) {
            return (store.getters['app/GET_CODE_LIST']).filter((e: any) => e.parentId === parentId);
        },
        getCodeListByParentName(parentName: String) {
            const parentRow = (store.getters['app/GET_CODE_LIST']).find((e: any) => e.parentId == null && e.name === parentName);

            if (parentRow !== undefined && parentRow != null && parentRow.id !== undefined && parentRow != null) {
                return (store.getters['app/GET_CODE_LIST']).filter((e: any) => e.parentId === parentRow.id);
            }
            return null;
        },
    },
    api: {
        common: {
            code: {
                getCodeList(params : object) { return axios({ url: '/api/common/codes', method: 'get', params }); },
                getCode(id : number) { return axios({ url: `/api/common/codes/${id}`, method: 'get' }); },
                createCode(data: object) { return axios({ url: '/api/common/codes', method: 'post', data }); },
                modifyCode(id: number, data: object) { return axios({ url: `/api/common/codes/${id}`, method: 'put', data }); },
                removeCode(id: number) { return axios({ url: `/api/common/codes/${id}`, method: 'delete' }); },
            },
            api: {
                getApiList(params: object) { return axios({ url: '/api/common/apis', method: 'get', params }); },
                getApi(id: number) { return axios({ url: `/api/common/apis/${id}`, method: 'get' }); },
                createApi(data: object) { return axios({ url: '/api/common/apis', method: 'post', data }); },
                modifyApi(id: number, data: object) { return axios({ url: `/api/common/apis/${id}`, method: 'put', data }); },
                removeApiList(data: object) { return axios({ url: '/api/common/apis', method: 'delete', data }); },
            },
            menu: {
                getMenuList(params: object) { return axios({ url: '/api/common/menus', method: 'get', params }); },
                getMenu(id: number) { return axios({ url: `/api/common/menus/${id}`, method: 'get' }); },
                createMenu(data: object) { return axios({ url: '/api/common/menus', method: 'post', data }); },
                modifyMenu(id: number, data: object) { return axios({ url: `/api/common/menus/${id}`, method: 'put', data }); },
                removeMenu(id: number) { return axios({ url: `/api/common/menus/${id}`, method: 'delete' }); },
            },
            role: {
                getRoleList(params: object) { return axios({ url: '/api/common/roles', method: 'get', params }); },
                getRole(id: number) { return axios({ url: `/api/common/roles/${id}`, method: 'get' }); },
                createRole(data: any) { return axios({ url: '/api/common/roles', method: 'post', data }); },
                modifyRole(id: number, data: any) { return axios({ url: `/api/common/roles/${id}`, method: 'put', data }); },
                removeRoleAllDependencyList(data: any) { return axios({ url: '/api/common/roles/delete-all-dependency', method: 'delete', data }); },
                removeRole(id: number) { return axios({ url: `/api/common/roles/${id}`, method: 'delete' }); },
            },
            roleApi: {
                getRoleApiList(params: object) { return axios({ url: '/api/common/role-apis', method: 'get', params }); },
                getRoleApi(roleId: number, apiId: number) { return axios({ url: `/api/common/role-apis/${roleId},${apiId}`, method: 'get' }); },
            },
            roleMenu: {
                getRoleMenuList(params: object) { return axios({ url: '/api/common/role-menus', method: 'get', params }); },
                getRoleMenu(roleId: number, menuId: number) { return axios({ url: `/api/common/role-menus/${roleId},${menuId}`, method: 'get' }); },
            },
            roleUser: {
                getRoleUserList(params: object) { return axios({ url: '/api/common/role-users', method: 'get', params }); },
            },
            user: {
                getUserList(params: object) { return axios({ url: '/api/common/users', method: 'get', params }); },
                getUser(id: number) { return axios({ url: `/api/common/users/${id}`, method: 'get' }); },
                getUserEmail(params: object) { return axios({ url: '/api/common/users/find-id', method: 'get', params }); },
                getUserInfo(data: object) { return axios({ url: '/api/common/users/user-exists', method: 'post', data }); },
                modifyPassword(params: object) { return axios({ url: '/api/common/users', method: 'put', params }); },
                createUser(data: any) { return axios({ url: '/api/common/users', method: 'post', data }); },
            },
            theme: {
                getThemeList(params: object) { return axios({ url: '/api/common/themes', method: 'get', params }); },
                getThemeMegaList(params: object) { return axios({ url: '/api/common/themes/theme-mega', method: 'get', params }); },
                getThemeMainList(params: object) { return axios({ url: '/api/common/themes/theme-main', method: 'get', params }); },
                getTopCategoryList() { return axios({ url: '/api/common/themes/top-categories', method: 'get' }); },
                modifyTheme(data: any) { return axios({ url: '/api/common/themes', method: 'put', data }); },
            },
            themeCategory: {
                getCateList(params: object) { return axios({ url: '/api/common/theme-category', method: 'get', params }); },
                getThemeCategoryList(params: object) { return axios({ url: '/api/common/theme-category/list', method: 'get', params }); },
                getThemeCountList(params: object) { return axios({ url: '/api/common/theme-category/list-count', method: 'get', params }); },
            },
            strategyCategory: {
                getAiportfolioList(params: object) { return axios({ url: '/api/common/strategy-category/ai-portfolio-list', method: 'get', params }); },
                getStrategyCategoryList(params: object) { return axios({ url: '/api/common/strategy-category/strategy-category-list', method: 'get', params }); },
            },
            aiPortfolio: {
                getAiPortfolioList(params: object) { return axios({ url: '/api/common/ai-portfolio/list', method: 'get', params }); },
                getAiPortfolioPriceList(params: object) { return axios({ url: '/api/common/ai-portfolio/price-list', method: 'get', params }); },
            },
            asset: {
                getAssetList(params: object) { return axios({ url: '/api/common/assets', method: 'get', params }); },
                getAsset(params: object) { return axios({ url: '/api/common/assets/info', method: 'get', params }); },
            },
            sector: {
                getSectorList(params: object) { return axios({ url: '/api/common/sector/list', method: 'get', params }); },
            },
            strategyHoldings: {
                getstrategyHoldingsList(params: object) { return axios({ url: '/api/common/strategy-holdings', method: 'get', params }); },
                getstrategyHoldings(id: number) { return axios({ url: `/api/common/strategy-holdings/${id}`, method: 'get' }); },
                getHoldingsAssetClassSumByMaxDate(id: number) { return axios({ url: `/api/common/strategy-holdings/asset-class-sum/${id}`, method: 'get' }); },
                getHoldingsSectorSumByMaxDate(id: number) { return axios({ url: `/api/common/strategy-holdings/sector-sum/${id}`, method: 'get' }); },
                getHoldingsAssetList(params: object) { return axios({ url: '/api/common/strategy-holdings/asset', method: 'get', params }); },
                getHoldingsAssetListGroupByAssetClass(id: number) { return axios({ url: `/api/common/strategy-holdings/asset/group-asset-class/${id}`, method: 'get' }); },
            },
            strategy: {
                getStrategyList(params: object) { return axios({ url: '/api/common/strategy', method: 'get', params }); },
                getSearchList(params: object) { return axios({ url: '/api/common/strategy/list', method: 'get', params }); },
                getStrategy(params: object) { return axios({ url: '/api/common/strategy/info', method: 'get', params }); },
                getStrategychart(params: object) { return axios({ url: '/api/common/strategy/chart', method: 'get', params }); },
            },
            insights: {
                getMarketRiskMonitor(params: object) { return axios({ url: '/api/common/insights/market-risk-monitor', method: 'get', params }); },
            },
        },
        app: {
            account: {
                createAccount(data: object) { return axios({ url: '/api/app/accounts', method: 'post', data }); },
                modifyAccount(data: object) { return axios({ url: '/api/app/accounts', method: 'put', data }); },
                removeAccount(id: number) { return axios({ url: `/api/app/accounts/${id}`, method: 'delete' }); },
            },
            RoleAndRoleMenuAndRoleApi: {
                createRoleAndRoleMenuAndRoleApi(data: object) { return axios({ url: '/api/app/role-menu-apis', method: 'post', data }); },
                modifyRoleAndRoleMenuAndRoleApi(data: object) { return axios({ url: '/api/app/role-menu-apis', method: 'put', data }); },
            },
        },
        util: {
            menu: {
                getTreeMenuList(params: object) { return axios({ url: '/api/util/menus/tree-menus', method: 'get', params }); },
                getDefaultMenuList() { return axios({ url: '/api/menu', method: 'get' }); },
            },
            code: {
                getTreeCodeList(params: object) { return axios({ url: '/api/util/codes/tree-codes', method: 'get', params }); },
            },
        },
    },
    util: {
        sort(sortBy: string, sortDesc: string) {
            const str = [];
            if (sortBy.length > 0 && sortDesc.length > 0) {
                for (let i = 0; i < sortBy.length; i += 1) {
                    str.push(`${sortBy[i]},${sortDesc[i] ? 'desc' : 'asc'}`);
                }
            }
            return str;
        },
        isSameDate(date1: any, date2: any) {
            return date1.getFullYear() === date2.getFullYear()
                && date1.getMonth() === date2.getMonth()
                && date1.getDate() === date2.getDate();
        },
    },
};

meta.init();

export {
    meta as default,
};

// axios.interceptors.request.use(
//     async (config) => {
//         const token = Basil.localStorage.get('token');

//         if (token != null) {
//             // const { exp }: any = jwtDecode(token); // Access Token 만료시간
//             // const accessTokenExp = new Date(exp * 1000);

//             const rft: any = jwtDecode(Vue.$cookies.get('refresh_token')); // Refresh Token 만료시간

//             const refreshTokenExp = new Date(rft.exp * 1000);

//             // /** Refresh Token 일주일 전일경우 재발급 */
//             // const date1 = new Date();
//             // const date2 = new Date(new Date().setDate(refreshTokenExp.getDate() - 7));
//             // if (meta.util.isSameDate(date1, date2)) {
//             // }

//             if (refreshTokenExp <= new Date()) {
//                 await meta.alert('토큰이 만료되었습니다. 로그인페이지로 이동합니다.');
//                 await meta.auth.logout(token);
//                 router.push('/sign-in');
//             }
//         }

//         return config;
//     },
//     (error) => error,
// );

// 다중 인터셉트
let isTokenRefreshing = false;
let refreshSubscribers: any = [];

const onTokenRefreshed = (accessToken: any) => {
    refreshSubscribers.map((callback: any) => callback(accessToken));
    refreshSubscribers = [];
};

const addRefreshSubscriber = (callback: any) => {
    refreshSubscribers.push(callback);
};

axios.interceptors.response.use(
    (response) => response,
    async (error) => {
        const { config } = error;
        const originalRequest = config;

        const accessToken = Basil.localStorage.get('token');
        const refreshToken = Vue.$cookies.get('refresh_token');

        if (error.response && error.response.headers.msg) {
            if (error.response.status != null && error.response.status === 401 && error.response.headers.msg === 'Access Token Expired') {
                /** Access Token 재발급 전 Request 배열로 만들기 */
                const retryOriginalRequest = new Promise((resolve) => {
                    addRefreshSubscriber((newAccessToken: any) => {
                        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                        resolve(axios(originalRequest));
                    });
                });

                if (!isTokenRefreshing) {
                    /** Access Token 재발급 */
                    const { data } = await axios({
                        url: '/api/app/token/new-access-token',
                        method: 'post',
                        data: {
                            accessToken,
                            refreshToken,
                        },
                    });

                    /** RefreshToken 만료시 */
                    if (data.refreshTokenExpired) {
                        await meta.alert('토큰이 만료되었습니다. 로그인페이지로 이동합니다.');
                        await meta.auth.logout(accessToken);
                        router.push('/sign-in');
                        return Promise.reject(error);
                    }

                    isTokenRefreshing = false;
                    Basil.localStorage.set('token', data.accessToken);
                    axios.defaults.headers.Authorization = `Bearer ${data.accessToken}`;
                    onTokenRefreshed(data.accessToken);
                }
                return retryOriginalRequest;
            }
        }
        return Promise.reject(error);
    },
);
