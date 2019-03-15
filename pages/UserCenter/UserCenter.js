const $ = require('../../utils/util.js');
const navigate = require('../../lib/navigate.js');
const notice = require('../../lib/notice.js');
// pages/UserCenter/UserCenter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    app: "456"
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(2);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  goToIndex:function(){
    notice.sendNotice("Refresh", {name:'我是从第二个页面拉去回来的数据！'});
    navigate.navigateBack(1);
  }
})