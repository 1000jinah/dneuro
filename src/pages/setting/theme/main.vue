<template>
    <div class="ma-3">
        <v-row dense>
            <v-col>
                <h1>테마 관리</h1>
            </v-col>
        </v-row>
        <v-row dense>
            <v-col cols="12" sm="6">
                <v-card>
                    <v-card-title>테마 목록</v-card-title>
                    <v-card-text>
                        <v-simple-table dense style="height: 500px; overflow-y: auto;">
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th class="text-center" scope="row">테마명</th>
                                        <th class="text-center" scope="row">설명</th>
                                        <th class="text-center" scope="row">이미지 등록여부</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="(item) in data.themeList"
                                        :key="item.id"
                                        class="cursor--pointer"
                                        @click="clickTheme(item.id)"
                                    >
                                        <td class="text-center">{{item.name}}</td>
                                        <td class="text-center">{{item.description}}</td>
                                        <td class="text-center">{{(item.themeImgFileNm)? '등록' : '미등록'}}</td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" sm="6">
                <v-card>
                    <v-card-title>테마 상세</v-card-title>
                    <v-card-text>
                        <v-form ref="form">
                            <v-row dense>
                                <v-col cols="12">
                                    <v-text-field
                                        dense
                                        outlined
                                        label="테마명"
                                        validate-on-blur
                                        hide-details="auto"
                                        v-model="data.theme.name"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                        dense
                                        outlined
                                        label="설명"
                                        validate-on-blur
                                        hide-details="auto"
                                        v-model="data.theme.description"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-file-input
                                        accept="image/*"
                                        label="File input"
                                        v-model="data.theme.file"
                                    ></v-file-input>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" class="text-right">
                                    <v-btn
                                        color="secondary"
                                        @click="data.theme = {};"
                                    >초기화</v-btn>
                                    <v-btn
                                        color="primary"
                                        @click="saveTheme();"
                                    >저장</v-btn>
                                    <v-btn
                                        v-if="data.theme.id"
                                        color="error"
                                        @click="deleteTheme();"
                                    >삭제</v-btn>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import meta from '@/api/meta';

export default Vue.extend({
    data() {
        return {
            data: {
                themeList: [],
                theme: {} as any,
            },
        };
    },
    computed: {
    },
    watch: {
    },
    methods: {
        async getThemeList() {
            const { items } = (await meta.api.common.theme.getThemeList({
                page: 1,
                rowSize: 100000000,
                sort: ['theme_name,ASC'],
            })).data;

            this.data.themeList = items;
        },
        clickTheme(id: number) {
            const theme = this.data.themeList.filter((x: any) => x.id === id)[0];
            this.data.theme = theme;
        },
        async saveTheme() {
            const fd = new FormData();

            if (this.data.theme.name == null || this.data.theme.name === '') {
                await meta.alert('테마명을 작성해주세요.');
                return;
            }

            if (await meta.confirm('저장하시겠습니까?')) {
                fd.append('id', this.data.theme.id);
                fd.append('name', this.data.theme.name);
                fd.append('description', (this.data.theme.description != null) ? this.data.theme.description : '');
                fd.append('themeFile', this.data.theme.file);

                const result = (await meta.api.common.theme.modifyTheme(fd)).data;
                if (result > 0) {
                    await meta.alert('정상적으로 저장되었습니다.');
                    this.data.theme = {};
                    this.getThemeList();
                } else {
                    await meta.alert('저장에 실패했습니다.');
                }
            }
        },
        deleteTheme() {
        },
    },
    mounted() {
        this.getThemeList();
    },
});
</script>

<style scoped>

</style>
