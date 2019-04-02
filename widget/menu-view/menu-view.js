// widget/menu-view/menu-view.js
let navigate=require('../../lib/navigate.js');
Component({
  properties: {
    menuList: Array || []
  },
  data: {
    _showMenu: 0
  },
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
      navigate.navigateTo(e.currentTarget.dataset.url);
    }
  }
})