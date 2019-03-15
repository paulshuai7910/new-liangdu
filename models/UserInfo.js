/**
 * 用户信息
 * @param {Number} Id 用户ID
 * @param {Number} IsNewUser 是否新用户
 * @param {String} NickName 用户昵称
 * @param {String} Phone 手机号码
 * @param {String} Photo 用户头像
 * @param {String} WeiXinOpenId 用户openid
 */
export class UserInfo {
  constructor(o) {
    this.id = o.Id;
    this.isNew = o.IsNewUser;
    this.name = o.NickName;
    this.phone = o.Phone;
    this.photo = o.Photo;
    this.openid = o.WeiXinOpenId;
    this.guid=o.UserName;
  }
}