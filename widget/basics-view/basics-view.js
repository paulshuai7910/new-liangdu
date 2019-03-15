let app = getApp().globalData;
const api = require('../../controller/widget.js');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tplData: {
      type: Object,
      value: null,
      observer: 'init'
    },
    tplKey: {
      type: String,
      value: ''
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    _shopInfo: null,
    tabs: [{
        title: '点餐',
        icon: 'edit',
        content: null
      },
      {
        title: '商家',
        icon: 'shop',
        content: null
      }
    ],
    categories: [],
    scrollBoxHeight: 0,
    height: 0,
    paging: false
  },
  ready() {
    let that = this;
    const sysInfo = wx.getSystemInfoSync();
    console.log(sysInfo);
    const query = wx.createSelectorQuery().in(this);
    query.select('.tab__x').boundingClientRect(function(res) {
      that.setData({
        height: sysInfo.windowHeight - res.height
      });
    }).exec();
  },
  /**
   * 组件的方法列表
   */
  methods: {
    init: function(e) {
      let tabs = this.data.tabs;
      tabs[0].content = e.F1ProductContents;
      tabs[0].tplKey = this.data.tplKey;
      this.setData({
        _shopInfo: app.vendorInfo,
      });
      this.initSmallCategory();
    },
    initSmallCategory: function() { //初始化分类
      let that = this;
      api.getSmallCategory({
        data: {
          storeID: app.vendorInfo.id
        },
        success(res) {
          that.setData({
            categories: res.Info
          });
        }
      });
    }
  }
})