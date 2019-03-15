const app = getApp().globalData;
const API = require('../api/login.js');
const XSR = require('../lib/ajax.js');
const MK = require('../lib/makeurl.js');
const ul = require('../utils/uploadlog.js');
const VendorInfo = require("../models/VendorInfo.js").VendorInfo;
const UserInfo = require("../models/UserInfo.js").UserInfo;
const storage = require('../lib/storage.js');

//用户登录
let UserLogin = (dataInfo) => {
  //看缓存种是否存在整个店铺的信息，有则取缓存的
  storage.getStorage({
    key: 'store',
    success: function(data) {
      app.vendorInfo = data.data.vendorInfo;
      app.userInfo = data.data.userInfo;
      dataInfo.success();
    },
    fail: function() {
      wx.login({
        success: function(res) { //获取code
          dataInfo.data = {
            code: res.code,
            Uid: dataInfo.data.uid || 0,
            storeId: dataInfo.data.sid || 0,
            sex: 0
          }
          XSR.ajax(MK.makeUrl(API.userLogin, dataInfo.data)).then(function(res) {
            ul.uploadlog({
              code: '0,1',
              msg: "用户登录",
              post: API.userLogin.url,
              result: res,
              value: dataInfo
            });
            app.vendorInfo = new VendorInfo(res.Info.ShopInfo);
            app.userInfo = new UserInfo(res.Info.UserInfo);

            //写入缓存
            storage.setStorage({
              key: 'store',
              data: {
                userInfo: app.userInfo,
                vendorInfo: app.vendorInfo
              }
            });
            dataInfo.success();
          });
        }
      });
    }
  });
}

let LogonThePlatform = (dataInfo) => {
  storage.getStorage({
    key: 'admin_user',
    success: function(data) {
      dataInfo.success(data);
    },
    fail: function() {
      XSR.ajax(MK.makeUrl(API.LogonThePlatform, dataInfo.data)).then(function(res) {
        if (res.Code == 0) {
          storage.setStorage({
            key: 'admin_user',
            data: res.Info
          });
          dataInfo.success(res);
        } else {
          dataInfo.fail(res);
        }
      });
    }
  });
}

/**
 * 看是否登录
 */
let IsLogonThePlatform = () => {
  let admin_user = wx.getStorageSync('admin_user');
  console.log("缓存：",admin_user);
  return admin_user ? admin_user : false;
}

module.exports = {
  UserLogin: UserLogin,
  LogonThePlatform: LogonThePlatform,
  IsLogonThePlatform: IsLogonThePlatform
}