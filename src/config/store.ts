import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        app: {
            namespaced: true,
            state() {
                return {
                    token: null,
                    user: null,
                    codeList: [] as any,
                    menuList: null,
                    roleList: null,
                    treeMenuList: null,
                    showMenuPathName: null,
                    topMenuCode: null,
                    individuals: null,
                    language: null,
                    alert: {
                        value: false,
                        message: '',
                        callback() {},
                    },
                    confirm: {
                        value: false,
                        message: '',
                        oktext: '확인',
                        canceltext: '취소',
                        callback() {},
                    },
                    loading: {
                        overlay: false,
                    },
                };
            },
            getters: {
                GET_TOKEN: (state) => state.token,
                GET_USER: (state) => state.user,
                GET_CODE_LIST: (state) => state.codeList,
                GET_MENU_LIST: (state) => state.menuList,
                GET_TREE_MENU_LIST: (state) => state.treeMenuList,
                GET_ROLE_LIST: (state) => state.roleList,
                GET_ALERT: (state) => state.alert,
                GET_CONFIRM: (state) => state.confirm,
                GET_SHOW_MENU_PATH_NAME: (state) => state.showMenuPathName,
                SET_TOP_INDIVIDUALS: (state) => state.individuals,
                GET_TOP_LANGUAGE: (state) => state.language,
            },
            mutations: {
                SET_TOKEN(state, payload) {
                    state.token = payload;
                },
                SET_USER(state, payload) {
                    state.user = payload;
                },
                SET_CODE_LIST(state, payload) {
                    state.codeList = payload;
                },
                SET_MENU_LIST(state, payload) {
                    state.menuList = payload;
                },
                SET_TREE_MENU_LIST(state, payload) {
                    state.treeMenuList = payload;
                },
                SET_ROLE_LIST(state, payload) {
                    state.roleList = payload;
                },
                SET_ALERT(state, payload) {
                    state.alert = payload;
                },
                SET_SHOW_MENU_PATH_NAME(state, payload) {
                    state.showMenuPathName = payload;
                },
                SET_CONFIRM(state, payload) {
                    state.confirm = payload;
                },
                SET_LOADING(state, payload) {
                    state.loading.overlay = payload;
                },
                SET_TOP_INDIVIDUALS(state, payload) {
                    state.individuals = payload;
                },
                SET_TOP_LANGUAGE(state, payload) {
                    state.language = payload;
                },
            },
            actions: {
            },
        },
    },

});
