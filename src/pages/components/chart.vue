<template id="test">
    <div>
        <highcharts
          :constructorType="'stockChart'"
          class="hc"
          :options="chartOptions"
          ref="chart"
        ></highcharts>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Highcharts from 'highcharts';
import Stock from 'highcharts/modules/stock';
import HighchartsVue from 'highcharts-vue';
import searchImg from '@/assets/images/searchImg.png';

Stock(Highcharts);
Vue.use(HighchartsVue);

export default Vue.extend({
    data() {
        return {
            chartOptions: {
                chart: {
                    events: {
                        load() {
                            const inputGroup = this.rangeSelector.inputGroup.element.children;
                            inputGroup[1].addEventListener('click', () => {
                                const dateInput = document.getElementsByName('min')[0];
                                if (typeof dateInput.showPicker === 'function') {
                                    dateInput.showPicker();
                                } else {
                                    dateInput.click();
                                }
                            });

                            inputGroup[3].addEventListener('click', () => {
                                const dateInput = document.getElementsByName('max')[0];
                                if (typeof dateInput.showPicker === 'function') {
                                    dateInput.showPicker();
                                } else {
                                    dateInput.click();
                                }
                            });
                        },
                    },
                },
                credits: { enabled: false }, // 하단 highchart.com 글씨 삭제
                navigator: {
                    enabled: false,
                },
                scrollbar: {
                    enabled: false,
                },
                rangeSelector: {
                    selected: 1,
                },
                title: {
                },
                tooltip: {
                    shared: true,
                    useHTML: true,
                    formatter() {
                        console.log(this.points);
                        let s = `<b>${this.x}</b>`;
                        this.points.forEach(
                            (point) => (s += `<br/><span style="width:50%;">${point.series.name}:</span> <p style="text-align: right; width:50%; display: inline;">$${point.y}</p>`),
                        );

                        return s;
                    },
                },
                series: [
                    {
                        name: 'IVES',
                        data: [10, 20, 10, 23, 65, 121, 44, 66, 98, 30, 32, 56, 25, 12, 53],
                        pointStart: Date.UTC(2022, 1, 1), // 시간 시작점
                        pointInterval: 3600 * 1000 * 24, // 포인터 간에 거리 계산 (DB1개당 계산?)
                        marker: {
                            symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)',
                        },
                        color: 'orange',
                    },
                    {
                        name: 'AIQ',
                        data: [50, 68, 54, 60, 32, 40, 50, 66, 78, 50, 26, 39, 44, 56, 78],
                        pointStart: Date.UTC(2022, 1, 1), // 시간 시작점
                        pointInterval: 3600 * 1000 * 24, // 포인터 간에 거리 계산 (DB1개당 계산?)
                        marker: {
                            symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)',
                        },
                        color: 'green',
                    },
                ],
            },
        };
    },
    mounted() {
        Highcharts.setOptions({
            lang: {
                // Pre-v9 legacy settings
                rangeSelectorFrom: 'From',
                rangeSelectorTo: 'To',
            },
        });
    },
});
</script>

<style>
.highcharts-range-selector { /* datepicker vue 디자인이랑 겹치는 부분 제거 */
    background-color: #FFF;
}
</style>
