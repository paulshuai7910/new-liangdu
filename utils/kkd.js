//判断当前环境，微信优先
const kkd = typeof my === 'undefined' ? wx : my;
const kkdtype = typeof my === 'undefined' ? 'wx' : 'my';

module.exports = {
  kkd: kkd,
  kkdtype: kkdtype
}