export const qiankunConfig= {
  master:{
    apps:[
      {
        name: 'ChildApplicationOne', // 唯一 id
        entry: '//localhost:8090', //
        // base: '/ChildApplicationOne', // app1 的路由前缀，通过这个前缀判断是否要启动该应用，通常跟子应用的 base 保持一致
        // mountElementId: 'ChildrenContainer',
      },
      {
        name: 'ChildApplicationTwo', // 唯一 id
        entry: '//localhost:8070', //
        // base: '/ChildApplicationTwo', // app1 的路由前缀，通过这个前缀判断是否要启动该应用，通常跟子应用的 base 保持一致
        // mountElementId: 'ChildrenContainer',
      }
    ],
    jsSandbox: true, // 是否启用 js 沙箱，默认为 false
    prefetch: true, // 是否启用 prefetch 特性，默认为 true
    lifeCycles: {
      // see https://github.com/umijs/qiankun#registermicroapps
      afterMount: props => {
        console.log(props,"加载子应用完成后～");
      },
    },
  }
}





