const URL = require('url').URL_INFO; //服务器地址配置
const ACCOUNT_INFO = require('testaccount').accountlist; //测试账号
const config = {
  guid: ACCOUNT_INFO.guid,
  asekey: ACCOUNT_INFO.asekey,
  aseiv: ACCOUNT_INFO.aseiv,
  version: "1.7.4",
  postUrl: URL,
  debug: true, //是否开启日志功能
  tabBarList: ["index/index", "category/category"] //底部导航页
}

//是否使用第三方平台，如果使用第三方平台则读取ext.json中的配置
exports.config = typeof my === 'undefined' ? (Object.keys(wx.getExtConfigSync()).length > 0 ? wx.getExtConfigSync() : config) : config;