<template>
    <div class="marketrisk-report02" style="background-color: #fff; padding: 40px 20px 20px 20px !important; width: 792px; height: 1122px;">
        <v-row style="border-top: 2px solid #000 !important; margin: 0px;">
            <v-col style="padding: 0px;">
                <p style="font-size: 19px; font-weight: 900; margin: 30px 0px 15px 0px;">The Story</p>
                <v-row style="margin: 0px; padding-bottom: 24px; font-size: 12px;">
                    <v-col cols="6" style="padding: 0px 30px 0px 0px;">
                        <div class="d-flex">
                            <ul>
                                <li style="padding-bottom: 20px;">Risk sentiment remains robust and asset correlation relatively low - keeping the  environment constructive for risk-taking.</li>
                                <li style="padding-bottom: 20px;">Yet we see the path narrowing for further gains in risk assets. Traditional valuations metrics show only median levels compensation for risk in U.S. and
Eruopean equities at a time of heightended uncertainty on the growth and inflation outlook. We see little compensation for risk in fixed income broadly.</li>
                                <li style="padding-bottom: 20px;">Current valuations depend on low interest rates even as inflation has risen. Our pro-risk stance is based on a view that central banks will respond much less
to higher inflation than in the past, keeping the rise in nominal government bond yields in check - our new norminal theme. But the risk to our view is a change in
their reaction function away from that implied by new policy frameworks.</li>
                                <li style="padding-bottom: 20px;">We see less risk of an individual equity driver caysing a shoarp unwind. The value factor is not nearly as much of a drag on performance as before. Equity pullbacks
have been shallower compared with 2020, keeping the resulting volatility spikes milder.</li>
                            </ul>
                        </div>
                    </v-col>
                    <v-col cols="6" style="padding-left: 20px; padding-top: 0px; font-size: 12px;">
                        <p style="padding-bottom: 20px;">Risk assets are still benefitting from the vaccine-driven restart that has spread beyond the U.S. Our indicators confirm that risk sentiment remains robust. Lingering
nervousness over what lies beyond the economic restart continues to drive periodic bouts of volatility and jumps in the pricing of expected market volatility – but the
spikes are less striking than earlier in the year. Interest rate volatility remains at historically rock-bottom levels, even with the rise in long-term government bond yields.</p>
                        <p style="padding-bottom: 20px;">Investors continue to be well rewarded for taking risk, but the path is narrowing for further gains in risk assets and valuations show little compensation for taking risk in
fixed income more broadly. We maintain our tactical pro-risk stance but acknowledge risks of markets and policymakers misreading the current inflation
surge. This could result in a surge in inflation expectations, central banks tightening policy prematurely or markets trying to anticipate a sharp tightening of monetary policy.</p>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row style="border-top: 2px solid #000 !important; margin: 0px;">
            <v-col style="padding: 0px;">
                <p style="font-size: 19px; font-weight: 900; margin: 30px 0px 15px 0px;">Risk Overview</p>
                <p style="font-size: 12px;" class="ma-0">In our Market Risk Monitor, we demonstrate some of the elements of market risk that we keep a close eye on. The table below provides an overview of the market pricing
of risks we monitor and where they stand both in terms of level and directional changes over the quarter. </p>
            </v-col>
            <v-col cols="12" style="padding: 0px; margin-top: 10px; margin-bottom: 24px;">
                <div class="d-flex justify-end pb-1" style="display: flex; justify-content: end; margin: 0px 0px 4.5px 0px !important;">
                    <span class="mr-6 font-size-14" style="margin: 0px 10px 0px 0px"><img :src="img.insightHighIcon" style="width: 12px; height: 8px" />&nbsp;High / Rising</span>
                    <span class="mr-6 font-size-14" style="margin: 0px 10px 0px 0px"><img :src="img.insightNeutralIcon" style="width: 12px; height: 5px; margin-bottom: 2px" />&nbsp;Neutral / Unchanged</span>
                    <span class="font-size-14"><img :src="img.insightLowIcon" style="width: 12px; height: 8px; margin-top: 3px" />&nbsp;Low / Falling</span>
                </div>
                <table style="width:100%; table-layout:fixed;">
                        <thead>
                            <tr style="text-align: left;">
                                <th style="width: 50%; padding: 5px 0px !important;" class="py-0">Element of risk</th>
                                <th style="width: 35%; padding: 5px 0px !important;" class="text-left py-0">Level</th>
                                <th style="width: 12%; padding: 5px 0px !important;" class="text-left py-0">Direction of change</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-left">Volatility</td>
                                <td class="text-left">
                                    <img
                                        :src="
                                            data.apiData.volatility.data.level == 0
                                                ? img.insightNeutralIcon
                                                : data.apiData.volatility.data.level >= 1
                                                ? img.insightHighIcon
                                                : data.apiData.volatility.data.level <= -1
                                                ? img.insightLowIcon
                                                : ''
                                        "
                                        style="cursor: pointer"
                                    />
                                </td>
                                <td class="text-left">
                                    <img
                                        :src="
                                            data.apiData.volatility.data.direction == 0
                                                ? img.insightNeutralIcon
                                                : data.apiData.volatility.data.direction >= 1
                                                ? img.insightHighIcon
                                                : data.apiData.volatility.data.direction <= -1
                                                ? img.insightLowIcon
                                                : ''
                                        "
                                        style="cursor: pointer"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td class="text-left">Concentration</td>
                                <td class="text-left">
                                    <img
                                        :src="
                                            data.apiData.concentration.data.level == 0
                                                ? img.insightNeutralIcon
                                                : data.apiData.concentration.data.level >= 1
                                                ? img.insightHighIcon
                                                : data.apiData.concentration.data.level <= -1
                                                ? img.insightLowIcon
                                                : ''
                                        "
                                        style="cursor: pointer"
                                    />
                                </td>
                                <td class="text-left">
                                    <img
                                        :src="
                                            data.apiData.concentration.data.direction == 0
                                                ? img.insightNeutralIcon
                                                : data.apiData.concentration.data.direction >= 1
                                                ? img.insightHighIcon
                                                : data.apiData.concentration.data.direction <= -1
                                                ? img.insightLowIcon
                                                : ''
                                        "
                                        style="cursor: pointer"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td class="text-left">Regime</td>
                                <td class="text-left">
                                    <img
                                        :src="
                                            data.apiData.regime.data.level == 0
                                                ? img.insightNeutralIcon
                                                : data.apiData.regime.data.level >= 1
                                                ? img.insightHighIcon
                                                : data.apiData.regime.data.level <= -1
                                                ? img.insightLowIcon
                                                : ''
                                        "
                                        style="cursor: pointer"
                                    />
                                </td>
                                <td class="text-left">
                                    <img
                                        :src="
                                            data.apiData.regime.data.direction == 0
                                                ? img.insightNeutralIcon
                                                : data.apiData.regime.data.direction >= 1
                                                ? img.insightHighIcon
                                                : data.apiData.regime.data.direction <= -1
                                                ? img.insightLowIcon
                                                : ''
                                        "
                                        style="cursor: pointer"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td class="text-left">Persistence</td>
                                <td class="text-left">
                                    <img
                                        :src="
                                            data.apiData.persistence.data.level == 0
                                                ? img.insightNeutralIcon
                                                : data.apiData.persistence.data.level >= 1
                                                ? img.insightHighIcon
                                                : data.apiData.persistence.data.level <= -1
                                                ? img.insightLowIcon
                                                : ''
                                        "
                                        style="cursor: pointer"
                                    />
                                </td>
                                <td class="text-left">
                                    <img
                                        :src="
                                            data.apiData.persistence.data.direction == 0
                                                ? img.insightNeutralIcon
                                                : data.apiData.persistence.data.direction >= 1
                                                ? img.insightHighIcon
                                                : data.apiData.persistence.data.direction <= -1
                                                ? img.insightLowIcon
                                                : ''
                                        "
                                        style="cursor: pointer"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td class="text-left">Valuation / Risk-premia</td>
                                <td class="text-left">
                                    <img
                                        :src="
                                            data.apiData.valuation.data.level == 0
                                                ? img.insightNeutralIcon
                                                : data.apiData.valuation.data.level >= 1
                                                ? img.insightHighIcon
                                                : data.apiData.valuation.data.level <= -1
                                                ? img.insightLowIcon
                                                : ''
                                        "
                                        style="cursor: pointer"
                                    />
                                </td>
                                <td class="text-left">
                                    <img
                                        :src="
                                            data.apiData.valuation.data.direction == 0
                                                ? img.insightNeutralIcon
                                                : data.apiData.valuation.data.direction >= 1
                                                ? img.insightHighIcon
                                                : data.apiData.valuation.data.direction <= -1
                                                ? img.insightLowIcon
                                                : ''
                                        "
                                        style="cursor: pointer"
                                    />
                                </td>
                            </tr>
                        </tbody>
                </table>
            </v-col>
            <v-col style="padding: 0px;">
                <p style="font-size: 12px; margin: 10px 0px 0px 0px !important;">Notes: This material represents BII's assessment of the market environment as of October2021 and is not intended to be a forecast of future events or a guarantee of future
results. This information should not be relied upon by the reader as research or investment advice regarding any funds, strategy or security in particular.</p>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import meta from '@/api/meta';

import insightLowIcon from '@/assets/images/insight-low-icon.png';
import insightHighIcon from '@/assets/images/insight-high-icon.png';
import insightNeutralIcon from '@/assets/images/insight-neutral-icon.png';

export default Vue.extend({
    props: {
        val: Object,
    },
    data() {
        return {
            msg: null,
            success: [],
            img: {
                insightNeutralIcon,
                insightHighIcon,
                insightLowIcon,
            },
            data: {
                apiData: {
                    volatility: {
                        data: {
                            direction: null,
                            level: null,
                        },
                    },
                    concentration: {
                        data: {
                            direction: null,
                            level: null,
                        },
                    },
                    regime: {
                        data: {
                            direction: null,
                            level: null,
                        },
                    },
                    persistence: {
                        data: {
                            direction: null,
                            level: null,
                        },
                    },
                    valuation: {
                        data: {
                            direction: null,
                            level: null,
                        },
                    },
                },
            },
        };
    },
    watch: {
    },
    methods: {
        async riskMonitor() {
            this.data.apiData = this.val;
            this.msg = true;
            this.$emit("messageOverview", this.msg);
        },
    },
    mounted() {
        this.riskMonitor();
    },
});

</script>

<style>
.marketrisk-report02 {
    background-color: #fff;
    padding: 20px !important;
    width: 792px;
    height: 1122px;
}

.marketrisk-report02 .bt {
    border-top: 2px solid #000 !important;
}

.marketrisk-report02 .main-text {
    font-size: 19px;
    font-weight: 900;
    margin: 30px 0px 15px 0px;
}

.marketrisk-report02 .sub-text {
    font-size: 12px;
}

table {
    width: 100%;
    border-top: 1.5px solid #000;
    border-collapse: collapse;
    table-layout:fixed;
}

th {
    border-bottom: 1px solid #b3b3b3;
    padding: 4.5px;
    font-size: 10px;
}

td {
    border-bottom: 1px solid #b3b3b3;
    padding: 10px;
    font-size: 10px;
}

th:first-child, td:first-child {
    border-left: none;
}
</style>
