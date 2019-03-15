const kkd = require("../utils/kkd.js").kkd;
const kkdtype = require("../utils/kkd.js").kkdtype;

//动态设置当前页面的标题
let setNavigationBarTitle = (title) => {
  if (kkdtype === 'wx') {
    kkd.setNavigationBarTitle({
      title: title || '标题'
    })
  } else {
    kkd.setNavigationBar({
      title: title || '标题'
    });
  }
}

//设置标题样式
let setNavigationBarColor = (a) => {
  if (kkdtype === 'wx') {
    kkd.setNavigationBarColor({
      frontColor: a.frontColor || '#ffffff',
      backgroundColor: a.backgroundColor || '#000000'
    });
  } else {
    kkd.setNavigationBar({
      backgroundColor: a.backgroundColor || '#000000'
    });
  }
}

//设置标题展示图片，目前只有支付宝支持
let setNavigationBarImage = (src) => {
  if (kkdtype === 'my') {
    kkd.setNavigationBar({
      image: src
    });
  }
}

//为 tabBar 某一项的右上角添加文本，目前只有微信支持
let setTabBarBadge = (o) => {
  if (kkdtype === 'wx') {
    kkd.setTabBarBadge({
      index: o.index || 0,
      text: o.text || ''
    })
  }
}

//移除 tabBar 某一项右上角的文本，目前只有微信支持
let removeTabBarBadge = (index) => {
  if (kkdtype=== 'wx') {
    kkd.removeTabBarBadge({
      index: index || 0
    })
  }
}

//显示 tabBar 某一项的右上角的红点，目前只有微信支持
let showTabBarRedDot = (index) => {
  if (kkdtype === 'wx') {
    kkd.showTabBarRedDot({
      index: index || 0
    })
  }
}

//隐藏 tabBar 某一项的右上角的红点，目前只有微信支持
let hideTabBarRedDot = (index) => {
  if (kkdtype === 'wx') {
    kkd.hideTabBarRedDot({
      index: index || 0
    })
  }
}

//动态设置 tabBar 的整体样式，目前只有微信支持
let setTabBarStyle = (o) => {
  if (kkdtype === 'wx') {
    wx.setTabBarStyle({
      color: o.color || '#FF0000',
      selectedColor: o.selectedColor || '#00FF00',
      backgroundColor: o.backgroundColor || '#ffffff',
      borderStyle: o.borderStyle || 'white'
    })
  }
}

//动态设置 tabBar 某一项的内容，目前只有微信支持
let setTabBarItem = (o) => {
  if (kkdtype === 'wx') {
    wx.setTabBarItem({
      index: o.index || 0,
      text: o.text || 'text',
      iconPath: o.iconPath || '',
      selectedIconPath: o.selectedIconPath || ''
    })
  }
}

//显示tabBar，目前只有微信支持
let showTabBar = (animation) => {
  if (kkdtype === 'wx') {
    wx.showTabBar({
      animation: animation || false
    })
  }
}

//隐藏 tabBar，目前只有微信支持
let hideTabBar = (animation) => {
  if (kkdtype === 'wx') {
    wx.hideTabBar({
      animation: animation || false
    });
  }
}

//动态设置窗口的背景色，目前只有微信支持
let setBackgroundColor = (backgroundColor) => {
  if (kkdtype === 'wx') {
    wx.backgroundColor({
      backgroundColor: backgroundColor
    });
  }
}

module.exports = {
  setNavigationBarTitle: setNavigationBarTitle,
  setNavigationBarColor: setNavigationBarColor,
  setNavigationBarImage: setNavigationBarImage,
  setTabBarBadge: setTabBarBadge,
  showTabBarRedDot: showTabBarRedDot,
  hideTabBarRedDot: hideTabBarRedDot,
  setTabBarStyle: setTabBarStyle,
  setTabBarItem: setTabBarItem,
  hideTabBar: hideTabBar,
  setBackgroundColor: setBackgroundColor
}