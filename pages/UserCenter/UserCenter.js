const $ = require('../../utils/util.js');
const navigate = require('../../lib/navigate.js');
const notice = require('../../lib/notice.js');
// pages/UserCenter/UserCenter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    app: "456",
    orderInfo: [
      {icon:'iconqianbao',desc: '待付款'},
      {icon:'iconhuoche',desc: '待发货'},
      {icon:'iconrenminbi201',desc: '待收货'},
      {icon:'iconyiwancheng',desc: '已完成'},
      {icon:'iconshouhouwuyou',desc: '退款/售后'},
    ],
    list: [
      {art:[
        {classname:'color1', uri: '', iconleft:'icon12', title:'我发布的',desc:'小技能，赚大钱'},
        {classname:'color2', uri: '', iconleft:'iconzuanshi', title:'我的报名',desc:''},
        {classname:'color3', uri: '', iconleft:'iconhehuoren', title:'我的合伙人',desc:''},
        {classname:'color4', uri: '', iconleft:'iconshoucang', title:'我的收藏',desc:''},
        {classname:'color5', uri: '', iconleft:'iconqianbao', title:'我的钱包',desc:''},
        {classname:'color6', uri: '', iconleft:'iconlipin', title:'积分商城',desc:''}
      ]},
      {art:[
        {classname:'color7', uri: '', iconleft:'iconservice', title:'联系客服',desc:'有疑问请找我'},
        {classname:'color8', uri: '', iconleft:'iconbangzhu', title:'帮助中心',desc:''},
        {classname:'color9', uri: '', iconleft:'iconi', title:'关于我们',desc:''},
        {classname:'color10', uri: '/pages/vendorenter/vendorenter', iconleft:'iconpaper-airplane', title:'我要入驻',desc:'轻松合作，商机无限'}
      ]},
      {art:[
        {classname:'color11', uri: '/shopadmin/login/login', iconleft:'iconhomepagefill', title:'商家入口',desc:''},
      ]}
    ]
  },
  onLoad: function (options) {
    // console.log(2);
  },
  onShareAppMessage: function () {
  
  },
  goToArtPage(e) {
    console.log(e.currentTarget.dataset.uri)
  wx.navigateTo({
    url: e.currentTarget.dataset.uri
  })
 },
 goToIndex:function(){
    notice.sendNotice("Refresh", {name:'我是从第二个页面拉去回来的数据！'});
    navigate.navigateBack(1);
  }
})