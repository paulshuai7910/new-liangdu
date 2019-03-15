//按模块区分
const cf = require("../config/config.js").config;
module.exports = {
  /**
   * 发送，记录模板消息
   * @param {Number} VendorId 商家ID
   * @param {Number} UserId 用户ID
   * @param {String} FormId 表单类型
   * @param {Number} MessageType 消息类型： 1、普通发送 2、支付发送 3、普通记录
   * @param {String} TplKey 模板Key，发送时传
   * @param {String} WXOpendId
   * @param {String} PageUrl 跳转URL，发送时传
   * @param {Object} TplData 模板发送数据，发送时传
   */
  NewSendTemplateMessage: {
    url: cf.postUrl + 'WXTmessageWS.asmx/NewSendTemplateMessage',
    post: {
      VendorId: "?",
      UserId: "?",
      FormId: "?",
      MessageType: "?",
      TplKey: "?",
      WXOpendId: "?",
      PageUrl: "?",
      TplData: "?"
    }
  },
  /**
   * 获取头像和昵称
   * @param {String} NickName 用户昵称
   * @param {String} Photo 用户头像
   * @param {String} UserName 用户Guid
   */
  UpdateUserPhotoAndNickName: {
    url: cf.postUrl + 'UserWebService.asmx/UpdateUserPhotoAndNickName',
    encrypt: true,
    post: {
      NickName: '?',
      Photo: '?',
      UserName: '?'
    }
  },
  /**
   * 更新用户手机
   * @param {Number} vendorId 商家ID
   * @param {Number} userId 用户ID
   * @param {String} encryptData 包括敏感数据在内的完整用户信息的加密数据
   * @param {String} encryptDataIV 加密算法的初始向量
   * @param {String} code 登录Code
   */
  UpdateUserWexinMobile: {
    url: cf.postUrl + 'UserWebService.asmx/UpdateUserWexinMobile',
    encrypt: true,
    post: {
      vendorId: '?',
      userId: '?',
      encryptData: '?',
      encryptDataIV: '?',
      code: "?"
    }
  },
  /**
   * 获取分类
   * @param {Number} storeID 商家ID
   */
  GetSmallCategoryNoEncry:{
    url: cf.postUrl + 'ShopWebService.asmx/GetSmallCategoryNoEncry',
    isCache: false,
    post: {
      storeID: '?'
    }
  }
}