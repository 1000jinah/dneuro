<template id="vueToggle">
  <div class="btn-group">
    <button type="button"
      v-for="(val, key) in values"
      @click="changeSelectVal(key)"
      :class="['btn', { 'btn-primary': selectVal === key, 'btn-default': selectVal !== key }]"
      >{{ val }}</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import vueToggle from 'vue-toggles/dist/vue-toggles.ssr';
import 'vue-toggles/dist/vue-toggles.ssr.css';

export default Vue.extend({
    components: { vueToggle },
    data() {
        return {
            selectVal: this.selected,
            defaultVal: this.default,
        };
    },
    template: '#vueToggle',
    props: ['values', 'selected', 'default'],
    watch: {
        selectVal(v) {
            console.log(this.selectVal);
        },
    },
    methods: {
        async changeSelectVal(val) {
            this.selectVal = val;
            this.$emit('toggleFirst', this.selectVal);
            this.$emit('toggleSecond', this.selectVal);
            this.$emit('toggleThird', this.selectVal);
        },
    },
    mounted() {
        this.selectVal = this.defaultVal;
    },
});
Vue.component('vueToggle');

</script>

<style>

.options {
  @media (min-width: 959px) {
    padding-top: 80px;
  }
}
.btn{
  outline: none !important;
  border: solid 1px #000000;
  width: 50px;
}
.btn.btn-primary {
  background-color: #000000;
  border-color: #000000;
  color: #FFFFFF;
  outline: none;
  &:hover {
    background-color: darken(#000000, 10%);
    border-color: darken(#000000, 10%);
  }
  &:active, &:focus {
    background-color: lighten(#000000, 5%);
    border-color: lighten(#000000, 5%);
  }
}
.btn.btn-default {
  &:hover {
    background-color: darken(#000000, 10%);
    border-color: darken(#000000, 10%);
    color: #FFFFFF;
  }
  &:active, &:focus {
    background-color: lighten(#000000, 5%);
    border-color: lighten(#000000, 5%);
    color: #FFFFFF;
  }
}
</style>
