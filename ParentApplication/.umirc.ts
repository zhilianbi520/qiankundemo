import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/',
      component: '@/pages/index',
    },
    { path: '/ChildApplicationOne',
      component: '@/layouts/BlankLayout',
      routes:[
        {
          path:'/ChildApplicationOne',
          exact: false,
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
          exact: false,
          // component:'@/pages/ChildApplication'
        },
      ]
    }
  ],
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'ChildApplicationOne', // 唯一 id
          // entry: 'http://b.5i5ya.com', // html entry
          entry: '//localhost:8090',
          base: '/ChildApplicationOne', // app1 的路由前缀，通过这个前缀判断是否要启动该应用，通常跟子应用的 base 保持一致
          mountElementId:'ChildrenContainer',
          history: 'browser', // 子应用的 history 配置，默认为当前主应用 history 配置
        },
        {
          name: 'ChildApplicationTwo', // 唯一 id
          // entry: 'http://c.5i5ya.com', // html entry
          entry: '//localhost:8070',
          base: '/ChildApplicationTwo', // app1 的路由前缀，通过这个前缀判断是否要启动该应用，通常跟子应用的 base 保持一致
          mountElementId:'ChildrenContainer',
          history: 'browser', // 子应用的 history 配置，默认为当前主应用 history 配置
        },
      ],
      jsSandbox: true, // 是否启用 js 沙箱，默认为 false
      prefetch: true, // 是否启用 prefetch 特性，默认为 true
      // defer:true
    },
  },
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
