<template>
    <v-app id="admin-layout">
        <v-navigation-drawer app v-model="drawer">
            <v-list-item to="/">
                <v-list-item-content>
                    <v-list-item-title class="d-flex justify-start align-center title font-weight-bold">
                        <v-icon size="32">mdi-home</v-icon>홈페이지로 이동
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list
              nav
              expand
              dense
            >
                <template v-for="(treeMenu1 , treeMenu1Idx) in store.getters['app/GET_TREE_MENU_LIST']">
                    <template v-if="treeMenu1.sideShow === 'T' && treeMenu1.path.startsWith('/settings')">
                        <template v-if="treeMenu1.depth === 2">
                            <template v-if="treeMenu1.childrenCount > 0">
                                <template v-if="store.getters['app/GET_TREE_MENU_LIST'].find(e=>treeMenu1.id === e.parentId && e.sideShow=== 'T') === undefined">
                                    <v-list-item :to="treeMenu1.path" :key="treeMenu1Idx">
                                        <v-list-item-icon>
                                            <v-icon>{{ treeMenu1.icon }}</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            <v-list-item-title>{{ treeMenu1.name }}</v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </template>
                                <v-list-group v-else :group="treeMenu1.path" active-class="v-list-item--active" :key="treeMenu1Idx">
                                    <template v-slot:activator>
                                        <v-list-item-icon>
                                            <v-icon>{{ treeMenu1.icon }}</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            <v-list-item-title>{{ treeMenu1.name }}</v-list-item-title>
                                        </v-list-item-content>
                                    </template>
                                    <template v-for="(treeMenu2, treeMenu2Idx) in store.getters['app/GET_TREE_MENU_LIST']">
                                        <template v-if="treeMenu2.sideShow === 'T' && treeMenu1.id === treeMenu2.parentId">
                                            <template v-if="store.getters['app/GET_TREE_MENU_LIST'].find(e=>treeMenu2.id === e.parentId && e.sideShow=== 'T') !== undefined">
                                                <v-list-group :group="treeMenu2.path" sub-group no-action :key="treeMenu2Idx">
                                                    <template v-slot:prependIcon>
                                                        <v-icon>
                                                        </v-icon>
                                                    </template>
                                                    <template v-slot:activator>
                                                        <v-list-item-icon :style="!treeMenu2.icon ? 'display: none;' : ''">
                                                            <v-icon>{{ treeMenu2.icon }}</v-icon>
                                                        </v-list-item-icon>
                                                        <v-list-item-content>
                                                            <v-list-item-title>{{ treeMenu2.name }}</v-list-item-title>
                                                        </v-list-item-content>
                                                    </template>
                                                    <template v-slot:appendIcon>
                                                        <v-icon>
                                                            mdi-chevron-down
                                                        </v-icon>
                                                    </template>
                                                    <template v-for="(treeMenu3, treeMenu3Idx) in store.getters['app/GET_TREE_MENU_LIST']">
                                                        <template v-if="treeMenu3.sideShow === 'T' && treeMenu2.id === treeMenu3.parentId">
                                                            <v-list-item :to="treeMenu3.path" :key="treeMenu3Idx">
                                                                <v-list-item-icon>
                                                                    <v-icon>{{ treeMenu3.icon }}</v-icon>
                                                                </v-list-item-icon>
                                                                <v-list-item-content>
                                                                    <v-list-item-title>{{ treeMenu3.name }}</v-list-item-title>
                                                                </v-list-item-content>
                                                            </v-list-item>
                                                        </template>
                                                    </template>
                                                </v-list-group>
                                            </template>
                                            <template v-else>
                                                <v-list-item :to="treeMenu2.path" :key="treeMenu2Idx">
                                                    <v-list-item-icon>
                                                        <v-icon>{{ treeMenu2.icon }}</v-icon>
                                                    </v-list-item-icon>
                                                    <v-list-item-content>
                                                        <v-list-item-title>{{ treeMenu2.name }}</v-list-item-title>
                                                    </v-list-item-content>
                                                </v-list-item>
                                            </template>
                                        </template>
                                    </template>
                                </v-list-group>
                            </template>
                            <template v-else>
                                <v-list-item :to="treeMenu1.path" :key="treeMenu1Idx">
                                    <v-list-item-icon>
                                        <v-icon>{{ treeMenu1.icon }}</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title>{{ treeMenu1.name }}</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </template>
                        </template>
                    </template>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app dense>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-spacer></v-spacer>
            <v-btn depressed>{{ name }}</v-btn>
            <v-menu left bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item
                        link
                        :to="'/password-change'"
                    >
                        <v-list-item-icon>
                            <v-icon>mdi-key</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>비밀번호 변경</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item @click="logout();">
                        <v-list-item-icon>
                            <v-icon>mdi-logout</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>로그아웃</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>
        <v-main>
            <v-subheader>
            {{store.state.app.showMenuPathName}}
            </v-subheader>
            <v-fade-transition hide-on-leave>
                <router-view></router-view>
            </v-fade-transition>
        </v-main>
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import _ from 'lodash';
import store from '@/config/store';
import meta from '@/api/meta';

export default Vue.extend({
    data() {
        return {
            drawer: undefined,
            store,
        };
    },
    computed: {
        name() {
            let name;

            name = '';
            const user = _.cloneDeep(this.$store.state.app.user);
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
    },
});
</script>

<style scoped>

</style>
