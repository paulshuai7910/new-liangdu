const ca = require('../lib/cryptojs-interface.js');
const mk = require('../lib/makeurl.js');
const cf = require('../config/config.js').config;
const dia = require('../lib/dialog.js');
const rq = require("../lib/request.js");

/**
 * 网络请求
 * @param {String} url请求地址
 * @param {Boolean} loading是否需要loading，默认false
 * 加异常处理
 */
let ajax = (mixedRequest) => {
  let _baseUrl = `${mixedRequest.url}?guid=${cf.guid}&v=${cf.version}`; //拼接请求地址 
  if (mixedRequest.loading) { //是否需要加载,默认表示加载
    dia.loading("努力加载中...");
  }
  return new Promise((resolve, reject) => {
    rq.request({
      url: _baseUrl,
      method: "POST" || mixedRequest.method, //请求类型，默认post
      data: mixedRequest.postData ? {
        data: ca.Encrypt(JSON.stringify(mixedRequest.postData))
      } : "",
      success: (res) => {
        dia.loading(false);
        var data = res.data.d;
        if (mixedRequest.encrypt) { //是否需要解密
          data = ca.Decrypt(res.data.d);
        } else {
          data = res.data.d;
        }
        if (data.Code != 200) {
          if (data) {
            resolve(JSON.parse(data));
          }
        } else {
          reject("请求失败：", data);
        }
      },
      fail: (res) => {
        dia.loading(false);
        dia.alert(JSON.stringify(res));
        console.error("错误信息:", res, "接口路径：", _baseUrl, "请求参数：", mixedRequest.postData);
      },
      complete: mixedRequest.complete //失败成功都会调用
    })
  });
}

module.exports = {
  ajax: ajax
}