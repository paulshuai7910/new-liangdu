const app = getApp().globalData.appStype;
const style = require("../lib/app-style.js");

let _oldlocation = 0; //上一次滚动位置

! function() {
  let q = (t, e, n) => {
    let r = e[t];
    e[t] = function(t) {
      n.call(this, t), r && r.call(this, r);
    }
  };
  let E = {
    onLoad: function(o) {
      //根据后台返回设置主题风格
      style.setNavigationBarColor({
        frontColor: app.themeColors.main_fontColor,
        backgroundColor: app.themeColors.main_bgColor
      });
      //根据后台设置设置底部导航
      style.setTabBarStyle({
        color: app.tabBar.frontColor,
        selectedColor: app.tabBar.selectedColor,
        backgroundColor: app.tabBar.backgroundColor,
        borderStyle: app.tabBar.borderStyle
      });
      //主题色样式字符串
      this.setData({
        main_backgroundColor: `background-color:${app.themeColors.main_bgColor}`,
        main_color: `color:${app.themeColors.main_fontColor}`,
        main_borderColor: `border-color:${app.themeColors.main_bgColor}`,
        minor_backgroundColor: `background-color:${app.themeColors.minor_bgColor}`,
        minor_color: `color:${app.themeColors.minor_fontColor}`,
        minor_borderColor: `border-color:${app.themeColors.minor_bgColor}`
      });
    },
    onPageScroll: function(o) { //动态展示底部导航
      if (app.tabBar.isAnim) { //是否开启动态展示
        if (o.scrollTop > 300) {
          if (o.scrollTop < _oldlocation) {
            wx.showTabBar({
              animation: true
            })
          } else {
            wx.hideTabBar({
              animation: true
            })
          }
        } else {
          wx.showTabBar({
            animation: true
          })
        }
        _oldlocation = o.scrollTop;
      }
    }
  };
  ! function() {
    var e = Page;
    Page = function(o) {
      ["onLoad", "onPageScroll"].forEach(function(t) {
        //t方法字符串，oPage对象，E[t] 重写方法
        q(t, o, E[t]);
      }), e(o);
    };
  }()
}()