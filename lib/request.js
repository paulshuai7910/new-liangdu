//网络请求
const kkdtype = require("../utils/kkd.js").kkdtype;

let request = (...a) => { //网络请求
  if (kkdtype == 'wx') {
    a[0].header = {
      'content-type': 'application/json'
    }
    wx.request(a[0]);
  } else {
    a[0].headers = {
      'Content-Type': "application/json"
    }
    my.httpRequest(a[0]);
  }
}

module.exports = {
  request: request
}