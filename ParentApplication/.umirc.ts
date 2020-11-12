import { defineConfig } from 'umi';
import { qiankunConfig } from './app';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/',
      component: '@/pages/index',
      redirect:'/index',
      exact:true,
    },
    {
      path: '/index',
      component: '@/pages/index',
      exact:true,
    },
    {
      path: '/NowPage',
      component: '@/pages/NowPage',
    },
    { path: '/ChildApplicationOne',
      component: '@/layouts/BlankLayout',
      routes:[
        {
          path:'/ChildApplicationOne',
          microApp:'ChildApplicationOne',
          // component:'@/pages/ChildApplication'
        },
      ]
    },
    {
      path: '/ChildApplicationTwo',
      component: '@/layouts/BlankLayout',
      routes:[
        {
          path:'/ChildApplicationTwo',
          microApp:'ChildApplicationTwo',
          // component:'@/pages/ChildApplication'
        },
      ]
    }
  ],
  qiankun:qiankunConfig,
  proxy: {
    '/api': {
      'target': 'http://localhost:8090/api',
      'changeOrigin': true,
      'pathRewrite': { '^/api' : '' },
    },
    '/ChildProxy': {
      'target': 'http://rap2.taobao.org:38080/',
      'changeOrigin': true,
      'pathRewrite': { '^/ChildProxy' : '' },
    },
    // '/ChildApplicationOne': {
    //   'target': 'http://localhost:8090',
    //   'changeOrigin': true,
    // },
    // '/ChildApplicationTwo': {
    //   'target': 'http://localhost:8070',
    //   'changeOrigin': true,
    // },
  },
});
