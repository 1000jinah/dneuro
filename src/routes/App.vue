<template>
    <v-app>
        <router-view></router-view>
        <alert-component :message="$store.getters['app/GET_ALERT'].message" :callback="$store.getters['app/GET_ALERT'].callback" v-model="$store.getters['app/GET_ALERT'].value"></alert-component>
        <confirm-component
            :message="$store.getters['app/GET_CONFIRM'].message"
            :oktext="$store.getters['app/GET_CONFIRM'].oktext"
            :canceltext="$store.getters['app/GET_CONFIRM'].canceltext"
            :callback="$store.getters['app/GET_CONFIRM'].callback"
            v-model="$store.getters['app/GET_CONFIRM'].value"
        ></confirm-component>
        <v-overlay :z-index="$store.state.app.loading.zIndex" :value="$store.state.app.loading.overlay">
            <v-progress-circular indeterminate size="128"></v-progress-circular>
        </v-overlay>
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

const app = new Vue({});

export default app;
</script>

<style scoped></style>
