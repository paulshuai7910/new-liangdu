const cf = require("../config/config.js").config;

module.exports = {
  /**
   * 用户登录
   * @param {String} NickName 用户昵称
   * @param {Number} sex 用户性别
   * @param {String} photo 头像
   * @param {String} WXCountry 国家
   * @param {String} WXCity 城市
   * @param {String} code 用户Code
   * @param {String} WXProvince 省份
   * @param {Number} Uid 关联用户id
   * @param {Number} storeId 关联店铺id
   */
  userLogin: {
    url: cf.postUrl + 'UserWebService.asmx/UserLogin',
    encrypt: true,
    post: {
      NickName: '?',
      sex: '?',
      photo: '?',
      WXCountry: '?',
      WXCity: '?',
      code: '?',
      WXProvince: '?',
      Uid: '?',
      storeId: '?'
    }
  },
  /**
   * 平台登录
   * @param {String} AccountName 平台用户
   * @param {String} AccountPassword 平台密码
   */
  LogonThePlatform:{
    url: cf.postUrl + 'liangdu/AccountWebService.asmx/LogonThePlatform',
    encrypt: true,
    post: {
      AccountName: '?',
      AccountPassword: '?'
    }
  },
  /**
   * 商家登录
   * @param {String} UserAccount 商家账号
   * @param {String} Password 商家密码
   */
  LogonTheVendor:{
    url: cf.postUrl + 'liangdu/AccountWebService.asmx/LogonTheVendor',
    encrypt: true,
    post: {
      UserAccount: '?',
      Password: '?'
    }
  }
}