<template>
    <canvas ref="chart" :id="id" :gradient="gradient" :gradientLine="gradientLine">
    </canvas>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    props: {
        config: {
            type: Object,
            default: {} as any,
        },
        id: {
            type: String,
            default() {
                return {};
            },
        },
        gradient: {
            type: Object,
            default() {
                return {};
            },
        } as any,
        gradientLine: {
            type: Object,
            default() {
                return {};
            },
        },
    } as any,
    data() {

    },
    watch: {

    },
    computed: {
    },

    methods: {
    },

    mounted() {

    },

});
</script>
