//文件标识后缀
const app = getApp().globalData;
const API = require('../api/vendor.js');
const XSR = require('../lib/ajax.js');
const MK = require('../lib/makeurl.js');

//获取基础模板
let GetPlatformCategory = (dataInfo) => {
  //dataInfo做容错判断
  XSR.ajax(MK.makeUrl(API.GetPlatformCategory,{})).then(function (res) {
    dataInfo.success(res.Info);
  });
}


module.exports = {
  GetPlatformCategory: GetPlatformCategory
}