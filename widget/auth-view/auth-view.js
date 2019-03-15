const app = getApp().globalData;
const controller = require('../../controller/widget.js');
//按钮授权组件
Component({
  /**
   * @param {String} openType 授权类型 
   *  1、contact打开客服会话。
   *  2、share转发。
   *  3、getUserInfo获取用户信息。
   *  4、getPhoneNumber获取用户手机号。
   *  5、launchApp打开APP *暂时不支持。
   *  6、openSetting打开授权设置页。
   *  7、feedback打开意见发聩页面
   */
  properties: {
    openType: {
      type: String,
      value: 'getUserInfo' //默认打开用户授权页面
    }
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
    //获取用户信息
    getUserInfo: function(e) {
      //设置用户头像和昵称
      if (e.detail.errMsg.toLowerCase().indexOf('ok') > -1) {
        let info = JSON.parse(e.detail.rawData);
        //更新app种的用户信息
        app.userInfo.photo = info.avatarUrl;
        app.userInfo.name = info.nickName;

        controller.setUserInfo({
          NickName: info.nickName,
          Photo: info.avatarUrl,
          UserName: app.userInfo.guid
        });
      };
    },
    getPhoneNumber: function(e) { //获取手机号码
      let that = this;
      if (e.detail.errMsg.toLowerCase().indexOf('ok') > -1) {
        wx.login({
          success: function(res) { //获取code
            controller.setUserPhone({
              data: {
                vendorId: app.vendorInfo.id,
                userId: app.userInfo.id,
                encryptData: e.detail.encryptedData,
                encryptDataIV: e.detail.iv,
                code: res.code
              },
              success: function(e) {
                //更新手机号码成功，
                var myEventDetail = e; // detail对象，提供给事件监听函数
                var myEventOption = {}; // 触发事件的选项
                that.triggerEvent('getPhone', myEventDetail, myEventOption)
              }
            })
          }
        });
      }
    }
  }
})