const ul = require('utils/uploadlog.js');
//app.js
App({
  onLaunch: function() {

  },
  globalData: {
    appStype: {
      themeColors: { //页面主题
        main_bgColor: "#db384c", //主色
        main_fontColor: "#ffffff",
        minor_bgColor: "", //辅色
        minor_fontColor: ""
      },
      tabBar: { //底部导航
        isAnim: false, //是否动画展示
        backgroundColor: "#ffffff",
        frontColor: "#333333",
        selectedColor: "#db384c",
        borderStyle: "white" //仅支持 black/white
      }
    },
    userInfo: {},
    vendorInfo: {}
  },
  onError(e) {
    ul.uploadlog({
      code: '-1,1',
      page: '查看错误日志',
      msg: e
    });
  }
})