<template>
    <div class="marketrisk-report01" style="background-color: #fd3f01; width: 794px; height: 1122px;">
        <v-row style="margin: 0px; padding: 0px; background-color: #fff;">
            <v-row class="main" style="margin: 0px; padding: 40px 20px 0px 20px !important; height: 808px;">
                <v-col style="padding: 0px;">
                    <img id="logo" style="width: 113px; height: 32px;" :src="img.logo"/>
                    <div style="width: 100% !important; height: 15px !important; background-color: #000 !important;"></div>
                    <p style="font-size: 46px; font-weight: 900; margin: 80px 0px 30px 0px;">MARKET RISK MONITOR</p>
                    <p style="font-size: 22px;">October 2021</p>
                </v-col>
            </v-row>
            <v-row style="margin: 0px; padding: 28px 30px !important; width: 100%; height: 100%; background-color: #fd3f01;">
                <v-col cols="12" style="padding: 0px;">
                    <p style="font-size: 19px; font-weight: 700;">Dneuro Investment Institute</p>
                    <div style="margin: 15px 0px !important; width: 100%; height: 2px; background-color: #000;"></div>
                    <p style="padding-bottom: 20px; margin-bottom: 0px; font-size: 16px; font-weight: 700;">Contents</p>
                    <template v-for="(contents, idx) in contents">
                        <v-row style="margin: 0px; font-size: 12px; font-weight: 600;" :key="idx">
                            <v-col style="padding-bottom: 0px; padding-top: 8px;" cols="2">{{contents.name}}</v-col>
                            <v-col style="padding-bottom: 0px; padding-top: 8px;" cols="10">{{contents.page}}</v-col>
                        </v-row>
                    </template>
                </v-col>
            </v-row>
        </v-row>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

import logo from '@/assets/images/logo.png';

export default Vue.extend({
    data() {
        return {
            img: {
                logo,
            },
            contents: [{ name: 'The story', page: 2 }, { name: 'Volatility', page: 3 }, { name: 'Concentration', page: 4 },
                { name: 'Regime', page: 5 }, { name: 'Persistence', page: 6 }, { name: 'Valuation', page: 7 },
            ],
        };
    },
    methods: {
    },
    mounted() {
    },
});

</script>

<style>
.marketrisk-report01{
}

.marketrisk-report01 .main{

}

.marketrisk-report01 .main .header-line {
}

.marketrisk-report01 .main-text {
    font-weight: 900;
    font-size: 46px;
}

.marketrisk-report01 .sub-text {
    font-size: 22px;
}

.marketrisk-report01 .footer {
}

.footer .footer-main-text{
    font-size: 19px;
    font-weight: 700;
}

.footer .contents{
    font-size: 16px;
    font-weight: 700;
}

.footer .footer-line{
}

.footer .contents-sub{
    font-size: 12px;
    font-weight: 600;
}

#logo {
    width: 113px !important;
    height: 32px !important;
}
</style>
