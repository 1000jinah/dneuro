<template>
    <v-dialog
        scrollable
        persistent
        width="450px"
        v-model="valueData"
    >
        <v-card>
            <v-card-title>알림</v-card-title>
            <v-card-text style="max-height: 200px;">
                <div style="white-space: pre-line;">{{ message }}</div>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="primary"
                    @click="ok();"
                >확인</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.component('alert-component', {
    props: {
        value: {
            type: Boolean,
            default: false,
        },
        message: {
            type: String,
            default: '',
        },
        callback: {
            type: Function,
            default() {},
        },
    },
    data() {
        return { valueData: this.value };
    },
    watch: {
        value(newValue) {
            this.valueData = newValue;
            this.$emit('input', newValue);
        },
        valueData(newValue) {
            this.$emit('input', newValue);
        },
    },
    methods: {
        ok() {
            this.valueData = false;
            this.callback();
        },
    },
});
</script>

<style scoped>
</style>
