const kkd = require("../utils/kkd.js").kkd;
const kkdtype = require("../utils/kkd.js").kkdtype;

/**
 * 异步写入缓存
 */
let setStorage = (data) => {
  kkd.setStorage(data);
}

/**
 * 同步写入缓存
 */
let setStorageSync = (data) => {
  kkd.setStorageSync(data);
}

/**
 * 异步获取缓存
 */
let getStorage = (data) => {
  kkd.getStorage(data);
}

/**
 * 同步获取缓存
 */
let getStorageSync = (data) => {
  kkd.getStorageSync(data);
}

/**
 * 异步删除缓存
 */
let removeStorage = (data) => {
  kkd.removeStorage(data);
}

/**
 * 同步删除缓存
 */
let removeStorageSync = (data) => {
  kkd.removeStorageSync(data);
}

/**
 * 异步清理缓存
 */
let clearStorage = (data) => {
  kkd.clearStorage(data);
}

/**
 * 同步清理缓存
 */
let clearStorageSync = (data) => {
  kkd.clearStorageSync(data);
}

module.exports = {
  setStorage: setStorage,
  setStorageSync: setStorageSync,
  getStorage: getStorage,
  getStorageSync: getStorageSync,
  removeStorage: removeStorage,
  removeStorageSync: removeStorageSync,
  clearStorage: clearStorage,
  clearStorageSync: clearStorageSync
}