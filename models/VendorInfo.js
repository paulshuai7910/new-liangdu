/**
 * 商家信息
 * @param {String} ShopName 店铺名称
 * @param {Number} Id 店铺ID
 * @param {String} WapLogoPath 店铺Logo
 * @param {String} VendorFeatureSet 店铺权限
 * @param {String} VendorInfo 店铺介绍
 * @param {String} LegalPerson 联系人
 * @param {String} LegalNumber 联系电话
 * @param {String} LegalAdress 公司地址
 * @param {String} Currency 货币符号
 * @param {string} BackGroundPath 店铺招牌
 * @param {string} ShopFeatures 店铺公告
 */
export class VendorInfo {
  constructor(o) {
    this.shopName = o.ShopName;
    this.id = o.Id;
    this.logo = o.WapLogoPath;
    this.featureSet = o.VendorFeatureSet;
    this.info = o.VendorInfo;
    this.legalPerson = o.LegalPerson;
    this.legalNumber = o.LegalNumber;
    this.legalAdress = o.LegalAdress;
    this.currency = o.Currency;
    this.shopSign = o.BackGroundPath;
    this.shopNotice = o.ShopFeatures;
  }
  toString() {
    return '商家店铺名称：' + this.shopName;
  }
}