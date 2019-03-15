//文件标识后缀
const app = getApp().globalData;
const API = require('../api/index.js');
const model = require('../models/TemplateEntity.js');
const XSR = require('../lib/ajax.js');
const MK = require('../lib/makeurl.js');
const ul = require('../utils/uploadlog.js');

//获取基础模板
let getShopHomeTemplate = (dataInfo) => {
  //dataInfo做容错判断
  XSR.ajax(MK.makeUrl(API.GetMinAppHomeTemplate, dataInfo.data)).then(function(res) {
    ul.uploadlog({
      code: '0,1',
      post: API.GetMinAppHomeTemplate.url,
      result: res,
      value: dataInfo
    });
    dataInfo.success(new model.TemplateEntity(res.Info));
  });
}

//获取当前区域天气
let GetWeatherInfo = (dataInfo) => {
  XSR.ajax(MK.makeUrl(API.GetWeatherInfo, dataInfo.data)).then(function(res) {
    dataInfo.success(res.Info);
  });
}

module.exports = {
  getShopHomeTemplate: getShopHomeTemplate,
  GetWeatherInfo: GetWeatherInfo
}