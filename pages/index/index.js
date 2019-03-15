const app = getApp().globalData;
const $ = require('../../utils/util.js');
const i = require('../../controller/index.js');
const login = require('../../controller/login.js');
const url = require('../../utils/urlParam.js');
const dataformat = require('../../lib/dateformat.js');
const notice = require('../../lib/notice.js');

Page({
  data: {
    tplData: {},
    shareData: [{
      key: 'mobile',
      title: '联系我们',
      phone: '13774434903'
    }, {
      key: 'message',
      title: '在线客服'
    }, {
      key: 'share',
      title: '分享'
    }],
    tabs: [{
        title: '最新信息',
        icon: '',
        content: null
      },
      {
        title: '热门商家',
        icon: '',
        content: null
      },
      {
        title: '黄页114',
        icon: '',
        content: null
      }
    ],
    showLocationAuthBox: false,//是否展示需要定位
    weatherInfo:null
  },
  onLoad: function(options) {
    let that = this;
    login.UserLogin({
      data: {
        uid: options.uid,
        sid: options.sid
      },
      success: function(data) {
        that.initData();
      }
    })
  },
  initData: function() { //初始化数据

  },
  onShow: function() {
    this.initLocation();
  },
  initLocation: function() { //初始化位置信息
    console.log("进入：");
    let that = this;
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        console.log("获取成功：", res);

        i.GetWeatherInfo({
          data: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          success: function (res) {
            that.setData({
              weatherInfo: res
            });
            console.log("获取天气成功：", res);
          }
        })

        that.setData({
          showLocationAuthBox: false
        })
      },
      fail(res) {
        that.setData({
          showLocationAuthBox: true
        })
      }
    })
  },
  onPullDownRefresh: function() {

  },
  onShareAppMessage: function() {

  },
  getWeizhi:function(){
    // let that=this;
    // wx.chooseLocation({
    //   success:function(res){
    //     i.GetWeatherInfo({
    //       data: {
    //         latitude: res.latitude,
    //         longitude: res.longitude
    //       },
    //       success: function (res) {
    //         that.setData({
    //           weatherInfo:res
    //         });
    //         console.log("获取天气成功：",res);
    //       }
    //     })
    //   }
    // })
  }
})