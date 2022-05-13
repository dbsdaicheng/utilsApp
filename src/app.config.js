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
        "text": "首页"
      },
      {
        "pagePath": "pages/my/my",
        "text": "我的"
      }
    ],
  },
  debug: true,
})
