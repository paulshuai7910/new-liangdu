const rq = require("../lib/request.js");
const cf = require('../config/config.js').config;

//错误码
let errCode = {
  "0": "正常返回",
  "1": "接口异常",
  "-1": "代码错误"
}

//页面代码
let pageCode = {
  "1": "pages/index/index"
}

//错误代码
let codeInfo = (code) => {
  let codearr = code.split(","); //第一个数字表示错误码，第二个数字表示所在页面
  return {
    code: codearr[0],
    msg: errCode[codearr[0]],
    page: pageCode[codearr[1]]
  }
}


//上传日志
let uploadlog = (...r) => {
  let a = r[0],
    codedetail = codeInfo(a.code);

  let logEntity = {
    code: codedetail.code, //错误码
    msg: a.msg || codedetail.msg,
    time: new Date().getTime(), //时间戳
    guid: cf.guid, //商家Id
    page: a.page || codedetail.page, //页面地址
    post: a.post || '', //请求的接口
    result: a.result || '', //返回值
    value: a.value || '' //提交值
  }
  console.log(logEntity);
}

module.exports = {
  uploadlog: uploadlog
}