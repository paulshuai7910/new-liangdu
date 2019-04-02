const app = getApp().globalData;
const $ = require('../../utils/util.js');
const i = require('../../controller/index.js');
const login = require('../../controller/login.js');
const url = require('../../utils/urlParam.js');
const dataformat = require('../../lib/dateformat.js');
const notice = require('../../lib/notice.js');

Page({
  data: {
    cur:true,
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
    ]
  },
  onLoad: function(options) {
    
  },
  initData: function() { //初始化数据

  },
  onShow: function() {
  },
  bindTabsLeft() {
    this.setData({
      cur:true
    })
  },
  bindTabsRifht() {
    this.setData({
      cur:false
    })
  },
  onPullDownRefresh: function() {

  },
  onShareAppMessage: function() {

  }
})
