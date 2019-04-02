const app = getApp().globalData;
const $ = require('../../utils/util.js');
const i = require('../../controller/vendor.js');
const url = require('../../utils/urlParam.js');
Page({
  data: {
    CategoryList: [], //行业分类
    startTime: '', // 开始营业时间
    endTime: '', //结束营业时间
    address:'',//店铺地址
  },
  onLoad: function(options) {
    this.GetPlatformCategory();
  },
  GetPlatformCategory: function() {
    let that = this;
    // i.GetPlatformCategory({
    //   success: function(res) {
    //     console.log(res);
    //     that.setData({
    //       CategoryList: res
    //     });
    //   }
    // })
  },
  bindPickerChange: function(e) { //选择行业分类
    this.setData({
      index: e.detail.value
    })
  },
  bindStartDateChange: function(e) { //营业开始时间
    this.setData({
      startTime: e.detail.value
    })
  },
  bindEndDateChange: function(e) { //营业结束时间
    this.setData({
      endTime: e.detail.value
    })
  },
  getLocation: function(e) { //获取位置
    let that = this;
    // wx.chooseLocation({
    //   success: function (res) {
    //     console.log(res);
    //     that.setData({
    //       address: res.address + res.name
    //     });
    //   }
    // })
  }
})