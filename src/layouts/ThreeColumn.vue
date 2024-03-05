<template>
    <v-app>
        <v-app-bar app extended>
            <v-spacer></v-spacer>
            <v-btn depressed>{{ name }}</v-btn>
            <v-menu left bottom open-on-hover>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>
                <v-list
                    min-width="180px">
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
            <template v-slot:extension>
                <v-toolbar-title @click="$router.push('/main')" style="cursor: pointer; min-width: min-content;">타이틀</v-toolbar-title>
                <v-spacer></v-spacer>
                <template v-for="(treeMenu1 , treeMenu1Idx) in store.getters['app/GET_TREE_MENU_LIST']" >
                    <template v-if="treeMenu1.show === 'T'">
                        <template v-if="treeMenu1.depth === 2">
                            <template v-if="treeMenu1.childrenCount > 0">
                                <v-menu offset-y left bottom open-on-hover :key="treeMenu1Idx">
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn x-large plain v-bind="attrs" v-on="on">
                                            <v-icon>{{treeMenu1.icon}}</v-icon>
                                            {{ treeMenu1.name }}
                                        </v-btn>
                                    </template>
                                    <template v-for="(treeMenu2, treeMenu2Idx) in store.getters['app/GET_TREE_MENU_LIST']">
                                        <template v-if="treeMenu2.show === 'T' && treeMenu1.id === treeMenu2.parentId">
                                            <v-list
                                                :key="treeMenu2Idx"
                                                min-width="180px"
                                                >
                                                <v-list-item @click="logout();">
                                                    <v-list-item-icon>
                                                        <v-icon>{{treeMenu2.icon}}</v-icon>
                                                    </v-list-item-icon>
                                                    <v-list-item-content>
                                                        <v-list-item-title>{{treeMenu2.name}}</v-list-item-title>
                                                    </v-list-item-content>
                                                </v-list-item>
                                            </v-list>
                                        </template>
                                    </template>
                                </v-menu>
                            </template>
                            <template v-else>
                                <v-btn x-large plain v-bind="attrs" v-on="on" :key="treeMenu1Idx">
                                    <v-icon>{{treeMenu1.icon}}</v-icon>
                                    {{ treeMenu1.name }}
                                </v-btn>
                        </template>
                        </template>
                    </template>
                </template>
                <v-spacer></v-spacer>
            </template>
        </v-app-bar>

        <v-main class="grey lighten-3" style="">
            <v-container>
                <v-row>
                <v-col
                    cols="12"
                    sm="2"
                >
                    <v-sheet
                    rounded="lg"
                    min-height="268"
                    >
                    <!--  -->
                    </v-sheet>
                </v-col>

                <v-col
                    cols="12"
                    sm="8"
                >
                    <v-sheet
                    min-height="80vh"
                    rounded="lg"
                    >
                        <v-subheader>
                        {{store.getters['app/GET_SHOW_MENU_PATH_NAME']}}
                        </v-subheader>
                        <v-fade-transition hide-on-leave>
                            <router-view></router-view>
                        </v-fade-transition>
                    </v-sheet>
                </v-col>

                <v-col
                    cols="12"
                    sm="2"
                >
                    <v-sheet
                    rounded="lg"
                    min-height="268"
                    >
                    <!--  -->
                    </v-sheet>
                </v-col>
                </v-row>
            </v-container>
        </v-main>
        <v-footer app absolute paddless inset>
            <v-row no-gutters>
                <v-col class="text-center">
                    <span class="text-overline">Copyright {{ new Date().getFullYear() }} </span>
                </v-col>
            </v-row>
        </v-footer>
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
            store,
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
