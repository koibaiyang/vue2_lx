const { defineConfig } = require('@vue/cli-service')
// 导入 path 路径模块
const path = require('path')
// 动态拼接 vant 主题定制的 less 文件位置
const themePath = path.join(__dirname, './src/vantTheme.less')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports.css = {
  loaderOptions: {
    less: {
      // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
      lessOptions: {
        modifyVars: {
          // 直接覆盖变量
          // 'nav-bar-background-color': 'pink'
          // 'border-color': '#eee'
          // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
          hack: `true; @import "${themePath}";`
        }
      }
    }
  }
}
