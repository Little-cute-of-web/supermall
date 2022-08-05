const { defineConfig } = require('@vue/cli-service')
// const { resolve } = require('core-js/fn/promise')
// const path = require('path')

// function resolve(dir) {
//   return path.join(__dirname, dir)
// }
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    // alias: {
    //   '@': resolve('src'),
    //   '@assets': resolve('src/assets'),
    //   '@common': resolve('src/common'),
    //   '@components': resolve('src/components'),
    //   '@network': resolve('src/network')
    // }
    resolve: {
      alias: {
        // '@': 'src',
        '@assets': '@/assets',
        '@common': '@/common',
        '@components': '@/components',
        '@network': '@/network',
        '@views':'@/views',
        '@childrenComponents':'@/views/home/childrenComponents'
        // '@router':'@/router'
      }
    }
  }
})
// const path = require('path')

// function resolve(dir) {
//   return path.join(__dirname, dir)
// }
// module.exports = {
//   configureWebpack: {
//     resolve: {
//       alias: {
//         '@': resolve('src'),
//         '@assets': resolve('src/assets'),
//         '@common': resolve('src/common'),
//         '@components': resolve('src/components'),
//         '@network': resolve('src/network')
//       }
//     }
//   },
//   transpileDependencies: ['uni-simple-router']
// }