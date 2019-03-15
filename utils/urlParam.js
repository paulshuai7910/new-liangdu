const app = getApp().globalData;
/**
 * 分享url数据处理
 * @param {Object} shareData 分享数据
 * @param {Object} data Url参数需要进行编码
 */
let getShareData = (shareData) => {
  let param = null;
  if (shareData.param) {
    shareData.param.uid = typeof app.userInfo.id == 'undefined' ? 0 : app.userInfo.id;
    shareData.param.sid = typeof app.vendorInfo.id == 'undefined' ? 0 : app.vendorInfo.id;
    param = shareData.param;
  } else {
    param = {
      uid: app.userInfo.id,
      sid: app.vendorInfo.id
    }
  }
  shareData.data.path += param ? _getUrlParamStr(param) : '';
  return {
    title: shareData.data.title || '',
    path: shareData.data.path || '',
    imageUrl: shareData.data.imageUrl || '',
    desc: shareData.data.desc || ''
  }
}

/**
 * url对象转字符串
 * @param {Object} data Url参数
 */
let _getUrlParamStr = (data) => {
  let _param = '';
  for (let item in data) {
    _param += `&${item}=${encodeURI(data[item])}`; //对参数进行编码
  };
  return _param.replace(/&/, '?');
}

/**
 * 转换url参数
 * @param {String} url跳转路劲
 * @param {Object} url参数
 */
let getUrlParamParse = (url, data) => {
  return url += data ? _getUrlParamStr(data) : '';
}

module.exports = {
  getShareData: getShareData,
  getUrlParamParse: getUrlParamParse
}