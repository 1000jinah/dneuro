<template>
    <div class="custom-select d-inline-block" :class="areaClass" :tabindex="tabindex" @blur="open = false">
        <div class="selected d-table" :class="[{ open: open }, selectClass]" @click="open = !open">
            <span class="d-table-cell v-align-middle">{{ selected.text }}</span>
        </div>
        <div class="items" :class="[{ selectHide: !open }, itemsClass]">
            <template v-for="(option, i) of options">
                <div
                    :key="'select' + i"
                    v-if="option.value"
                    @click="
                        selected = option;
                        open = false;
                        $emit('input', option);
                    "
                >
                    {{ option.text }}
                </div>
            </template>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.component('select-component', {
    props: {
        options: {
            type: Array,
            required: true,
            default() {
                return [
                    {
                        text: '선택',
                        value: '',
                    },
                ];
            },
        },
        default: {
            type: String,
            required: false,
            default: null,
        },
        tabindex: {
            type: Number,
            required: false,
            default: 0,
        },
        areaClass: {
            type: String,
            default: '',
        },
        selectClass: {
            type: String,
            default: '',
        },
        itemsClass: {
            type: String,
            default: '',
        },
        selectStyle: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            selected: this.options.length > 0 ? this.options[0] : null,
            open: false,
        };
    },
    mounted() {
        this.$emit('input', this.selected);
    },
});
</script>

<style scoped>
.custom-select {
    position: relative;
    width: 184px;
    height: 29px;
    text-align: left;
    outline: none;
}

.custom-select .selected {
    height: 100%;
    border: 1px solid #000;
    background: url('/src/assets/images/icon_arrow_down_small.png') no-repeat 100% 50%;
    background-position: right 10px center;
    padding-left: 7px;
    color: #000;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
    padding-right: 20px;
}

.custom-select .selected span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.custom-select .selected.open {
    border: 1px solid #000;
}

.custom-select .selected:after {
    position: absolute;
    content: '';
    top: 22px;
    right: 1em;
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-color: #fff transparent transparent transparent;
}

.custom-select .items {
    overflow: hidden;
    border: 1px solid #000;
    position: absolute;
    background-color: #fff;
    left: 0;
    right: 0;
    z-index: 1;
    margin-top: 2px;
}

.custom-select .items div {
    color: #000;
    font-size: 18px;
    padding: 10px 9px;
    cursor: pointer;
    user-select: none;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.custom-select .items div:hover {
    background-color: #000;
    color: #fff;
}

.selectHide {
    display: none;
}
</style>
