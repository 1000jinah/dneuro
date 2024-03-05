import Vue from 'vue';
import VueRouter from 'vue-router';
import meta from '@/api/meta';
import store from '@/config/store';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/portfolios/all-portfolios',
            component: () => import('@/layouts/Base.vue'),
            children: [
                {
                    path: '/main',
                    redirect: '/portfolios/all-portfolios',
                    // component: () => import('@/pages/dashboard/main.vue'),
                },
                {
                    path: '/portfolios/all-portfolios',
                    component: () => import('@/pages/portfolio/all-portfolio/main.vue'),
                },
                {
                    path: '/portfolios/compare-portfolios',
                    component: () => import('@/pages/portfolio/compare-portfolio/main.vue'),
                },
                {
                    path: '/portfolios/portfolio-detail',
                    component: () => import('@/pages/portfolio/portfolio-detail/main.vue'),
                },
                {
                    path: '/portfolios/theme-machine',
                    component: () => import('@/pages/portfolio/theme-machine/main.vue'),
                },
                {
                    path: '/portfolios/theme-machine/qna',
                    component: () => import('@/pages/portfolio/theme-machine/qna/main.vue'),
                },
                {
                    path: '/portfolios/theme-machine/results',
                    component: () => import('@/pages/portfolio/theme-machine/result/main.vue'),
                },
                {
                    path: '/portfolios/theme-machine/themetic-growth-etfs',
                    component: () => import('@/pages/portfolio/theme-machine/themetic-growth-etfs/main.vue'),
                },
                {
                    path: '/insights/market-view/monthly-commentary',
                    component: () => import('@/pages/insights/market-view/monthly-commentary/main.vue'),
                },
                {
                    path: '/insights/market-view/weekly-commentary',
                    component: () => import('@/pages/insights/market-view/weekly-commentary/main.vue'),
                },
                {
                    path: '/insights/market-view/market-risk/list',
                    component: () => import('@/pages/insights/market-view/market-risk/list/main.vue'),
                },
                {
                    path: '/insights/market-view/market-risk/detail',
                    component: () => import('@/pages/insights/market-view/market-risk/detail/main.vue'),
                },
                {
                    path: '/test',
                    component: () => import('@/pages/test/main.vue'),
                },
                {
                    path: '/test-chart',
                    component: () => import('@/pages/test/test.vue'),
                },
            ],
        },
        {
            path: '/blank',
            redirect: '/blank',
            component: () => import('@/layouts/Blank.vue'),
            children: [
                {
                    path: '/sign-in',
                    component: () => import('@/pages/user/sign-in/main.vue'),
                },
                {
                    path: '/sign-up',
                    component: () => import('@/pages/user/sign-up/main.vue'),
                },
                {
                    path: '/id-find',
                    component: () => import('@/pages/user/id-find/main.vue'),
                },
                {
                    path: '/pw-find',
                    component: () => import('@/pages/user/pw-find/main.vue'),
                },
                {
                    path: '/reports/get-invested',
                    component: () => import('@/pages/report/get-invested/main.vue'),
                },
                {
                    path: '*',
                    component: () => import('@/pages/exception/main.vue'),
                },
                {
                    path: '/insights/market-view/market-risk/monitor-report-1',
                    component: () => import('@/pages/insights/market-view/market-risk/report/report01.vue'),
                },
                {
                    path: '/insights/market-view/market-risk/monitor-report-2',
                    component: () => import('@/pages/insights/market-view/market-risk/report/report02.vue'),
                },
                {
                    path: '/insights/market-view/market-risk/monitor-report-3',
                    component: () => import('@/pages/insights/market-view/market-risk/report/report03.vue'),
                },
                {
                    path: '/insights/market-view/market-risk/monitor-report-4',
                    component: () => import('@/pages/insights/market-view/market-risk/report/report04.vue'),
                },
                {
                    path: '/insights/market-view/market-risk/monitor-report-5',
                    component: () => import('@/pages/insights/market-view/market-risk/report/report05.vue'),
                },
                {
                    path: '/insights/market-view/market-risk/monitor-report-6',
                    component: () => import('@/pages/insights/market-view/market-risk/report/report06.vue'),
                },
                {
                    path: '/insights/market-view/market-risk/monitor-report-7',
                    component: () => import('@/pages/insights/market-view/market-risk/report/report07.vue'),
                },
                {
                    path: '/insights/market-view/market-risk/monitor-report-8',
                    component: () => import('@/pages/insights/market-view/market-risk/report/report08.vue'),
                },
                {
                    path: '/insights/market-view/market-risk/monitor-report-total',
                    component: () => import('@/pages/insights/market-view/market-risk/report/reportTotal.vue'),
                },

                {
                    path: '/insights/market-view/monthly-commentary-report',
                    component: () => import('@/pages/insights/market-view/monthly-commentary/monthly-commentary-report/main.vue'),
                },
                {
                    path: '/insights/market-view/weekly-commentary-report',
                    component: () => import('@/pages/insights/market-view/weekly-commentary/weekly-commentary-report/main.vue'),
                },
                {
                    path: '/portfolios/portfolio-detail/report',
                    component: () => import('@/pages/portfolio/portfolio-detail/report/main.vue'),
                },
            ],
        },
        {
            path: '/settings',
            redirect: '/settings/apis',
            component: () => import('@/layouts/Admin.vue'),
            children: [
                {
                    path: '/settings/apis',
                    component: () => import('@/pages/setting/api/main.vue'),
                },
                {
                    path: '/settings/apis/detail',
                    component: () => import('@/pages/setting/api/main-detail.vue'),
                },
                {
                    path: '/settings/menus',
                    component: () => import('@/pages/setting/menu/main.vue'),
                },
                {
                    path: '/settings/menus',
                    component: () => import('@/pages/setting/menu/main.vue'),
                },
                {
                    path: '/settings/roles',
                    component: () => import('@/pages/setting/role/main.vue'),
                },
                {
                    path: '/settings/roles/detail',
                    component: () => import('@/pages/setting/role/main-detail.vue'),
                },
                {
                    path: '/settings/users',
                    component: () => import('@/pages/setting/user/main.vue'),
                },
                {
                    path: '/settings/codes',
                    component: () => import('@/pages/setting/code/main.vue'),
                },
                {
                    path: '/settings/themes',
                    component: () => import('@/pages/setting/theme/main.vue'),
                },
            ],
        },
    ],
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
});

router.beforeEach(async (to, from, next) => {
    const token = meta.auth.getToken();
    let treeMenuList;
    let treeMenu;
    const regex = to.matched.length > 0 ? to.matched[to.matched.length - 1].regex : null;
    let authenticated;
    const mainTitle = 'Dnuero';
    let subTitle;
    let title;
    let titlePath;
    let i;
    const storeTemp: any = store;

    if (await meta.auth.authenticated(token)) {
        await meta.auth.authorize(token);

        treeMenuList = storeTemp.state.app.treeMenuList;

        authenticated = false;
        for (i = 0; i < treeMenuList.length; i += 1) {
            treeMenu = treeMenuList[i];
            if (regex && regex.test(treeMenu.path)) {
                authenticated = true;
                break;
            }
        }
        titlePath = [];
        for (i = 0; i < treeMenuList.length; i += 1) {
            treeMenu = treeMenuList[i];
            if (new RegExp(`${treeMenu.path}.*`, 'g').test(to.path)) {
                titlePath.push(treeMenu.name);
            }
        }
        titlePath.splice(0, 1);
        store.commit('app/SET_SHOW_MENU_PATH_NAME', titlePath.join(' > '));
        titlePath = titlePath.reverse();
        title = titlePath.join(' < ');
        if (authenticated) {
            document.title = title;
            next();
        } else {
            next('/');
        }
    } else {
        let isLogin = false;

        meta.auth.unauthorize();
        if (to.path.startsWith('/sign-up')) {
            subTitle = '회원가입';
            titlePath = [subTitle, mainTitle];
            title = titlePath.join(' < ');
            document.title = title;
            next();
        } else if (to.path.startsWith('/sign-in')) {
            subTitle = '로그인';
            titlePath = [subTitle, mainTitle];
            title = titlePath.join(' < ');
            document.title = title;
            next();
        } else if (to.path.startsWith('/id-find')) {
            subTitle = '아이디 찾기';
            titlePath = [subTitle, mainTitle];
            title = titlePath.join(' < ');
            document.title = title;
            next();
        } else if (to.path.startsWith('/pw-find')) {
            subTitle = '비밀번호 찾기';
            titlePath = [subTitle, mainTitle];
            title = titlePath.join(' < ');
            document.title = title;
            next();
        } else {
            treeMenuList = (await meta.api.util.menu.getDefaultMenuList()).data.items;

            titlePath = ['Dneuro'];
            if (to.path === '/') {
                titlePath.push('메인화면');
            }

            for (i = 0; i < treeMenuList.length; i += 1) {
                treeMenu = treeMenuList[i];
                if (treeMenu.path === to.path) {
                    if (treeMenu.publicyStatus === 'F') {
                        meta.alert('로그인이 필요합니다.');
                        isLogin = true;
                    } else {
                        titlePath.push(treeMenu.name);
                    }
                }
            }

            if (isLogin) {
                router.push({ path: '/sign-in', query: { redirectURL: to.fullPath } });
            } else if (titlePath.length === 1) {
                router.push({ path: '/' });
            } else {
                storeTemp.state.app.showMenuPathName = titlePath.join(' > ');
                titlePath = titlePath.reverse();
                title = titlePath.join(' < ');
                document.title = title;
                next();
            }
        }
    }
});

export default router;
