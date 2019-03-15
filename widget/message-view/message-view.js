const api = require('../../controller/widget.js');
const app = getApp().globalData;
//模板消息组件
Component({
  /**
   * @param {Number} sendType 发送类型：1、普通发送。2、支付发送。3、普通记录
   * @param {String} pageUrl 跳转路径，只记录可以不用填写
   * @param {String} tplKey 模板Key，只记录可以不用填写
   * @param {Array} tplData 模板数据，只记录可以不用填写
   */
  properties: {
    sendType: {
      type: Number,
      value: 3
    },
    tplKey: {
      type: String,
      value: ''
    },
    tplData: {
      type: String,
      value: ''
    },
    pageUrl: {
      type: String,
      value: ''
    }
  },
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    sendMessage: function(e) {
      let that = this;
      api.sendMessage({
        VendorId: app.vendorInfo.id,
        UserId: app.userInfo.id,
        WXOpendId: app.userInfo.openid,
        FormId: e.detail.formId,
        MessageType: that.data.sendType,
        TplKey: that.data.tplKey,
        PageUrl: that.data.pageUrl,
        TplData: that.data.tplData
      });
    }
  }
})