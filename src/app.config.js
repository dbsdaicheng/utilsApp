export default defineAppConfig({
  pages: [
    'pages/my/my',
    'pages/index/index',
    'pages/authorize/authorize'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    selectedColor: "#2173F9",
    backgroundColor: "#ffffff",
    color: "#999999",
    list: [
      {
        "pagePath": "pages/index/index",
        "iconPath": "./common/image/home.png",
        "selectedIconPath": "./common/image/home-active.png",
        "text": "首页"
      },
      {
        "pagePath": "pages/my/my",
        "iconPath": "./common/image/my.png",
        "selectedIconPath": "./common/image/my-active.png",
        "text": "我的"
      }
    ],
  },
  debug: true,
})
