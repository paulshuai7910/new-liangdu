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
    homeLabel:[{name:'低息贷款',icon:'icondaikuan'},{name:'商家入驻',icon:'iconruzhuchenggongdapx'},{name:'签到积分',icon:'iconxiaozhu'},{name:'商家活动',icon:'iconganbei'},{name:'积分商城',icon:'iconbuilding'}],
    shopInfo: ['金融传媒','汽车房产','酒店娱乐','生活购物','汽车房产','家居装修','服饰鞋帽','健康管理','婚庆摄影','亲自教育'],
    classInfo: [
      {name:'房屋信息',icon:'iconfangwu'},{name:'求职招聘',icon:'iconzhaopinyuangongshenpibiao'},
      {name:'寻人寻物',icon:'icon066bianjizhanghu'},{name:'同城微聊',icon:'iconliaotian'},
      {name:'跑腿代办',icon:'iconhuabanfuben'},{name:'宠物服务',icon:'iconxiongzhang'},
      {name:'二手闲置',icon:'iconmn_shangpin_fill'},{name:'商家活动',icon:'iconganbei'},
      {name:'拼车出行',icon:'iconqiche'}],
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
    }
    // , {
    //   key: 'home',
    //   title: '首页',
    //   url:'/pages/home/home'
    // }
  ],
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
    // login.UserLogin({
    //   data: {
    //     uid: options.uid,
    //     sid: options.sid
    //   },
    //   success: function(data) {
    //     that.initData();
    //   }
    // })
  },
  initData: function() { //初始化数据

  },
  onShow: function() {
    this.initLocation();
  },
  goTodetail() {
    wx.navigateTo({
      url: '/pages/business/business'
    })
  },
  initLocation: function() { //初始化位置信息
    console.log("进入：");
    let that = this;
    // wx.getLocation({
    //   type: 'wgs84',
    //   success(res) {
    //     console.log("获取成功：", res);

    //     i.GetWeatherInfo({
    //       data: {
    //         latitude: res.latitude,
    //         longitude: res.longitude
    //       },
    //       success: function (res) {
    //         that.setData({
    //           weatherInfo: res
    //         });
    //         console.log("获取天气成功：", res);
    //       }
    //     })

    //     that.setData({
    //       showLocationAuthBox: false
    //     })
    //   },
    //   fail(res) {
    //     that.setData({
    //       showLocationAuthBox: true
    //     })
    //   }
    // })
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