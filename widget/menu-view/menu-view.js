// widget/menu-view/menu-view.js
let navigate=require('../../lib/navigate.js');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    menuList: Array || []
  },
  /**
   * 组件的初始数据
   */
  data: {
    _showMenu: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showMenu: function() {
      if (this.data._showMenu != 1) {
        this.setData({
          _showMenu: 1
        });
      } else {
        this.setData({
          _showMenu: 2
        });
      }
    },
    hideMenu: function() {
      this.setData({
        _showMenu: 2
      });
    },
    scrollTop: function() {
      this.setData({
        _showMenu: 2
      });
      wx.pageScrollTo({
        scrollTop: 0
      })
    },
    makePhoneCall: function(e) {
      wx.makePhoneCall({
        phoneNumber: e.currentTarget.dataset.phone
      })
    },
    menuNavigate:function(e){
      console.log(e.currentTarget.dataset.url);
      navigate.navigateTo(e.currentTarget.dataset.url);
    }
  }
})