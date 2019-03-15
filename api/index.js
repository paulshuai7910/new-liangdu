//按模块区分
const cf = require("../config/config.js").config;
module.exports = {
  GetMinAppHomeTemplate: {
    url: cf.postUrl + 'ShopWebService.asmx/GetMinAppHomeTemplate',
    post: {
      StoreID: '?',
      Platform: 'MiniApp'
    }
  },
  /**
   * 获取当前区域天气
   * @param {String} latitude 经度
   * @param {String} longitude 纬度
   */
  GetWeatherInfo:{
    url: cf.postUrl + 'liangdu/AccountWebService.asmx/GetWeatherInfo',
    post: {
      latitude: '?',
      longitude: '?'
    }
  }
}