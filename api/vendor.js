const cf = require("../config/config.js").config;

module.exports = {
  /**
   * 获取平台分类
   */
  GetPlatformCategory: {
    url: cf.postUrl + 'liangdu/VendorWebService.asmx/GetPlatformCategory',
    post: {
    }
  }
}