import Highcharts from "highcharts";
import HighchartsVue from "highcharts-vue";
import Stock from "highcharts/modules/stock";
import Vue from "vue";
import chart from "./main.vue";

Stock(Highcharts);
Vue.use(HighchartsVue);

new Vue({
  el: "#app",
  render: (h) => h(chart)
});