<template>
    <v-dialog
        scrollable
        persistent
        width="450px"
        v-model="valueData"
    >
        <v-card>
            <v-card-title>확인</v-card-title>
            <v-card-text style="max-height: 200px;">
                <div style="white-space: pre-line;">{{ message }}</div>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="primary"
                    @click="ok();"
                >{{oktext}}</v-btn>
                <v-btn
                    color="secondary"
                    @click="cancel();"
                >{{canceltext}}</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.component('confirm-component', {
    props: {
        value: {
            type: Boolean,
            default: false,
        },
        message: {
            type: String,
            default: '',
        },
        oktext: {
            type: String,
            default: '확인',
        },
        canceltext: {
            type: String,
            default: '취소',
        },
        callback: {
            type: Function,
            default() {},
        },
    },
    data() {
        return {
            valueData: this.value,
        };
    },
    watch: {
        valueData(newValue) {
            this.$emit('input', newValue);
        },
        value(newValue) {
            this.valueData = newValue;
            this.$emit('input', newValue);
        },
    },
    methods: {
        ok() {
            this.valueData = false;
            this.callback(true);
        },
        cancel() {
            this.valueData = false;
            this.callback(false);
        },
    },
});
</script>

<style scoped>
</style>
