const cf = require('../config/config.js').config;
const cj = require('cryptojs-aes.js');
const key = cj.CryptoJS.enc.Utf8.parse(cf.asekey);
const iv = cj.CryptoJS.enc.Utf8.parse(cf.aseiv);

//加密同时转成16进制
let Encrypt = (word) => {
  let srcs = cj.CryptoJS.enc.Utf8.parse(word);
  let encrypted = cj.CryptoJS.AES.encrypt(srcs, key, {
    iv: iv,
    mode: cj.CryptoJS.mode.CBC,
    padding: cj.CryptoJS.pad.Pkcs7
  });
  let base64 = cj.CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
  return stringToHex(base64);
}

//解密前先从16进制转成字符串
let Decrypt = (word) => {
  let enstr = hexToString(word);
  let decrypt = cj.CryptoJS.AES.decrypt(enstr, key, {
    iv: iv,
    mode: cj.CryptoJS.mode.CBC,
    padding: cj.CryptoJS.pad.Pkcs7
  });
  let decryptedStr = decrypt.toString(cj.CryptoJS.enc.Utf8);
  return decryptedStr.toString();
}

let stringToHex = (str) => {
  if (str === "")
    return "";
  let hexCharCode = [];
  for (let i = 0; i < str.length; i++) {
    hexCharCode.push((str.charCodeAt(i)).toString(16));
  }
  return hexCharCode.join("");
}

let hexToString = (hexCharCodeStr) => {
  let trimedStr = hexCharCodeStr.trim();
  let rawStr = trimedStr;
  let len = rawStr.length;
  if (len % 2 !== 0) {
    return "Illegal Format ASCII Code!";
  }
  let curCharCode;
  let resultStr = [];
  for (let i = 0; i < len; i = i + 2) {
    curCharCode = parseInt(rawStr.substr(i, 2), 16); // ASCII Code Value
    resultStr.push(String.fromCharCode(curCharCode));
  }
  return resultStr.join("");
}

module.exports = {
  Encrypt: Encrypt, //加密方法
  Decrypt: Decrypt //解密方法
}