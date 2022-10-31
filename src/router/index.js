import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const Home = () => import(/* webpackChunkName: "Home" */ '@/pages/Home');
const GroupStructure = () => import(/* webpackChunkName: "GroupStructure" */ '@/pages/GroupStructure');
const NuclearAdvantage = () => import(/* webpackChunkName: "NuclearAdvantage" */ '@/pages/NuclearAdvantage');
const TeamMembers = () => import(/* webpackChunkName: "TeamMembers" */ '@/pages/TeamMembers');
const ServiceScope = () => import(/* webpackChunkName: "ServiceScope" */ '@/pages/ServiceScope');
const OurServices = () => import(/* webpackChunkName: "OurServices" */ '@/pages/OurServices');

const $router = new Router({
  // mode: 'history',
  // 解决vue框架页面跳转有白色不可追踪色块的bug
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      };
    } else if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      };
    }
  },
  routes: [
    { path: '/', name: 'Home', component: Home,},
    { path: '/groupStructure', name: 'GroupStructure', component: GroupStructure,},
    { path: '/nuclearAdvantage', name: 'NuclearAdvantage', component: NuclearAdvantage,},
    { path: '/teamMembers', name: 'TeamMembers', component: TeamMembers,},
    { path: '/serviceScope', name: 'ServiceScope', component: ServiceScope,},
    { path: '/ourServices', name: 'OurServices', component: OurServices,},
    { path: '*', redirect: '/',},
  ]
});

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false }); // 显示右上角螺旋加载提示
$router.beforeEach(function (to, from, next) {
  NProgress.start();
  next();
});
$router.afterEach(() => {
  NProgress.done();
});

// 解决Loading chunk (\d)+ failed问题
$router.onError((err) => {
  const pattern = /Loading chunk (\d)+ failed/g;
  const isChunkLoadFailed = err.message.match(pattern);
  if (isChunkLoadFailed) {
    let chunkBool = sessionStorage.getItem('chunkError');
    let nowTimes = Date.now();
    if (chunkBool === null | chunkBool && nowTimes - parseInt(chunkBool) > 60000) { // 路由跳转报错,href手动跳转
      sessionStorage.setItem('chunkError', 'reload');
      const targetPath = $router.history.pending.fullPath;
      window.location.href = window.location.origin + targetPath;
    } else if (chunkBool === 'reload') { // 手动跳转后依然报错,强制刷新
      sessionStorage.setItem('chunkError', Date.now());
      window.location.reload(true);
    }
  }
});

export default $router;