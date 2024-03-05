<template>
    <v-dialog
        ref="datePickerDialog"
        persistent
        width="300px"
        :return-value.sync="valueData"
        v-model="dialog"
    >
        <template v-slot:activator="{ on }">
            <v-text-field
                :append-icon="appendIcon"
                :append-outer-icon="appendOuterIcon"
                :background-color="backgroundColor"
                :clearable="clearable"
                :dense="dense"
                :disabled="disabled"
                :height="height"
                :hide-details="hideDetails"
                :label="label"
                :outlined="outlined"
                :prepend-icon="prependIcon"
                :prepend-inner-icon="prependInnerIcon"
                :readonly="readonly"
                :rules="rules"
                v-on="on"
                @click:append="dialog = true;"
                @click:append-outer="dialog = true;"
                @click:prepend="dialog = true;"
                @click:prepend-inner="dialog = true;"
                @click:clear="valueData = ''; save();"
                v-model="valueData"
            ></v-text-field>
        </template>
        <v-date-picker
            ref="datePicker"
            :locale="locale"
            :type="type"
            :day-format="dayFormat"
            :max.sync="max"
            :min.sync="min"
            v-model="valueData"
        >
            <v-spacer></v-spacer>
            <v-btn
                class="primary"
                @click="save();"
            >확인</v-btn>
            <v-btn
                class="secondary"
                @click="dialog = false;"
            >취소</v-btn>
        </v-date-picker>
    </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import moment from 'moment';

export default Vue.component('picker-date-picker-component', {
    props: {
        appendIcon: {
            type: String,
            default: undefined,
        },
        appendOuterIcon: {
            type: String,
            default: undefined,
        },
        backgroundColor: {
            type: String,
            default: undefined,
        },
        clearable: {
            type: Boolean,
            default: false,
        },
        dayFormat: {
            type: Function,
            default(value : any) {
                return moment(value, 'YYYY-MM-DD').format('D');
            },
        },
        dense: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        height: {
            type: [Number, String],
            default: undefined,
        },
        hideDetails: {
            type: Boolean,
            default: false,
        },
        label: {
            type: String,
            default: '',
        },
        locale: {
            type: String,
            default: 'ko-kr',
        },
        outlined: {
            type: Boolean,
            default: false,
        },
        prependIcon: {
            type: String,
            default: undefined,
        },
        prependInnerIcon: {
            type: String,
            default: undefined,
        },
        readonly: {
            type: Boolean,
            default: true,
        },
        rules: {
            type: Array,
            default() {
                return [];
            },
        },
        type: {
            type: String,
            default: 'date',
        },
        value: {
            type: String,
            default: '',
        },
        max: {
            type: String,
            default: moment().format('YYYY-MM-DD'),
        },
        min: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            dialog: false,
            valueData: this.value,
        };
    },
    watch: {
        value: {
            handler(newValue) {
                this.valueData = newValue;
                this.$emit('input', newValue);
            },
        },
        valueData: {
            handler(newValue) {
                this.$emit('input', newValue);
            },
        },
        dialog: {
            handler() {
                this.$nextTick(function nextTick() {
                    const dataPickerRefs : any = this.$refs.datePicker;

                    dataPickerRefs.tableDate = this.valueData
                        ? this.valueData.substring(0, 7)
                        : moment().format('YYYY-MM');
                    dataPickerRefs.activePicker = this.type === 'date' ? 'DATE' : 'MONTH';
                });
            },
        },
    },
    methods: {
        save() {
            const datePickerDialogRefs : any = this.$refs.datePickerDialog;
            datePickerDialogRefs.save(this.valueData);
            this.$emit('input', this.valueData);
        },
    },
});
</script>

<style scoped>
</style>
