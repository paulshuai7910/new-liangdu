/**
 * 时间转时间戳
 * @param {Date/String} str 需要转换的时间
 * @return {String} 时间戳
 */
let DateToUnix = (str) => {
  str = (str instanceof Date) ? str : new Date(str); //返回时间对象
  return str.getTime();
}

/**
 * 时间戳转时间
 * @param {Date/String} str 需要转换的时间
 * @param {String} fmt 格式化字符串
 * @return {String} 格式化后的时间
 */
let UnixToDate = (str, fmt = 'yyyy-MM-dd hh:mm:ss') => {
  str = new Date(str); //返回时间对象
  return DateFormat(fmt, str);
}

/**
 * 获取最近时间
 * @param {Date/String} str 最近时间
 */
let LastTime = (str) => {
  let _now = new Date().getTime(),
    _old = (str instanceof Date) ? str.getTime() : new Date(str).getTime(),
    _diff = _now - _old;
  if (_diff / 864000 > 1) {
    console.log(_diff / 864000);
  }
}

/**
 * 时间格式化
 * @param {String} fmt格式字符串
 * @param {Date/String} 时间对象
 * @return {String} 格式化后的时间
 */
let DateFormat = (fmt, date) => {
  try {
    if (fmt && date) {
      date = (date instanceof Date) ? date : new Date(date);
      var o = {
        "M+": date.getMonth() + 1, //月份 
        "d+": date.getDate(), //日 
        "h+": date.getHours(), //小时 
        "m+": date.getMinutes(), //分 
        "s+": date.getSeconds(), //秒 
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
        "S": date.getMilliseconds() //毫秒 
      };
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
      }
      for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      return fmt;
    } else {
      console.log("传入对象不正确！", "@param {String} fmt格式字符串", "@param {Date} 格式化时间对象");
    }
  } catch (e) {
    console.log("错误：", e);
  }
}

module.exports = {
  UnixToDate: UnixToDate, //事件字符串转时间戳
  DateToUnix: DateToUnix
}