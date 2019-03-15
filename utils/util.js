// const theme = require('../lib/theme.js');
const cf = require('../config/config.js').config;
const dialog = require('../lib/dialog.js');
const navigate = require('../lib/navigate.js');


//打印日志
let log = (...a) => {
  if (!cf.debug) return; //是否开启日志功能
  if (typeof console == 'object' && console.log) console.log(...a);
}

module.exports = {
  log: log,
  dialog: dialog, //弹窗
  navigate: navigate //路径跳转
}