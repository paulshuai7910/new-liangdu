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
    items: [
      {name: '刷卡支付', value: '刷卡支付'},
      {name: '免费wifi', value: '免费wifi'},
      {name: '免费停车', value: '免费停车'},
      {name: '禁止吸烟', value: '禁止吸烟'},
      {name: '提供包间', value: '提供包间'},
      {name: '沙发休闲', value: '沙发休闲'},
    ],
    itemsVal: '选择店内设置',
    isCheckedTime:false,
    isCheckedAgree:false
  },
  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  onLoad: function(options) {
    this.GetPlatformCategory();
  },
  checkedTime() {
    this.setData({
      isCheckedTime:!this.data.isCheckedTime
    })
  },
  checkedAgree() {
    this.setData({
      isCheckedAgree:!this.data.isCheckedAgree
    })
  },
  checkboxChange(e) {
    let _val
    if (e.detail.value.length>0) {
      _val = e.detail.value.join(',')
    }else{
      _val = '选择店内设置'
    }
    console.log(_val)
    this.setData({
      itemsVal:_val
    })
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
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
    let res = [ {name:'金融传媒'},{name:'生活购物'},{name:'美食餐饮'},{name:'酒店娱乐'}]
    that.setData({
      CategoryList: res
    });
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
    wx.chooseLocation({
      success: function (res) {
        console.log(res);
        that.setData({
          address: res.address + res.name
        });
      }
    })
  }
})