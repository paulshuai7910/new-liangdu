const app = getApp().globalData;
const $ = require('../../utils/util.js');
const login = require('../../controller/login.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    AccountName: '',
    AccountPassword: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (login.IsLogonThePlatform()) {
      wx.redirectTo({
        url: '../index/index',
      })
    };
  },
  LogonThePlatform: function() { //平台登录
    let that = this;
    if (!that.data.AccountName) {
      $.dialog.alert("请输入账号！");
      return;
    }
    if (!that.data.AccountPassword) {
      $.dialog.alert("请输入密码！");
      return;
    }

    login.LogonThePlatform({
      data: {
        AccountName: that.data.AccountName,
        AccountPassword: that.data.AccountPassword
      },
      success: function(res) {
        console.log("成功：", res);
        $.navigate.redirectTo("../index/index");
      },
      fail: function(data) {
        $.dialog.alert("用户名或者密码不正确，请确认后再试！");
      }
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  onInput: function(e) {
    this.setData({
      [e.detail.name]: e.detail.value
    });
  }
})