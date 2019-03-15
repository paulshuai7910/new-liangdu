const API = require('../api/widget.js');
const XSR = require('../lib/ajax.js');
const MK = require('../lib/makeurl.js');
const ul = require('../utils/uploadlog.js');

//发送模板消息
let sendMessage = (dataInfo) => {
  XSR.ajax(MK.makeUrl(API.NewSendTemplateMessage, dataInfo)).then(function(res) {
    ul.uploadlog({
      code: '0,1',
      post: API.NewSendTemplateMessage.url,
      result: res,
      value: dataInfo
    });
  });
}

//更新用户头像和昵称
let setUserInfo = (dataInfo) => {
  XSR.ajax(MK.makeUrl(API.UpdateUserPhotoAndNickName, dataInfo)).then(function(res) {
    ul.uploadlog({
      code: '0,1',
      post: API.UpdateUserPhotoAndNickName.url,
      result: res,
      value: dataInfo
    });
  });;
}

//更新用户手机号码
let setUserPhone = (dataInfo) => {
  XSR.ajax(MK.makeUrl(API.UpdateUserWexinMobile, dataInfo.data)).then(function(res) {
    ul.uploadlog({
      code: '0,1',
      post: API.UpdateUserWexinMobile.url,
      result: res,
      value: dataInfo
    });
    dataInfo.success(res);
  });;
}

//获取商家分类
let getSmallCategory = (dataInfo)=>{
  XSR.ajax(MK.makeUrl(API.GetSmallCategoryNoEncry, dataInfo.data)).then(function (res) {
    ul.uploadlog({
      code: '0,1',
      post: API.GetSmallCategoryNoEncry.url,
      result: res,
      value: dataInfo
    });
    dataInfo.success(res);
  });
}

module.exports = {
  sendMessage: sendMessage,
  setUserInfo: setUserInfo,
  setUserPhone: setUserPhone,
  getSmallCategory: getSmallCategory
}