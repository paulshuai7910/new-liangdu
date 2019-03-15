/**
 * @oaram {string} viewDir tab盒子的布局 left:水平方向，top:垂直方向
 * @param {string} dir tab方向，left:水平方向，top:垂直方向
 * @param {string} textColor 文字颜色
 * @param {string} activeTextColor 选中文字颜色
 * @param {string} lineColor 底部线条颜色
 * @param {Number} defaultIndex 当前选择
 * @param {Boolean} animate 是否开启动画
 * @param {Object} tabs 数据
 * @param {Number} tabWidth 当为垂直菜单时需要规定菜单宽度
 * @param {Number} lineWidth 指示条宽度
 */
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    viewDir:{//tab布局方向
      type: String,
      value: 'top'
    },
    dir: {//tab方向
      type: String,
      value: 'left'
    },
    defaultIndex: {//当前选择的tab
      type: Number,
      value: 0
    },
    textColor: {
      type: String,
      value: '#333'
    },
    activeTextColor: {
      type: String,
      value: '#db384c'
    },
    lineColor: {
      type: String,
      value: '#db384c'
    },
    tabs: {
      type: Array,
      value: []
    },
    animate: {
      type: Boolean,
      value: false
    },
    lineWidth: {
      type: Number,
      value: 0
    },
    tabStyle:{//tab样式
      type: String,
      value: ''
    },
    activeTabStyle:{//tab选择样式
      type: String,
      value: ''
    },
    pattern:{//视图模式，1.普通模式，2.滚动模式
      type: Number,
      value: 1
    }
  },
  data: {
    startAnimate:false,//开始动画
    itemWidht: 0,
    itemHeight: 0,
    width: 0,
    height: 0,
    left: 0,
    top: 0
  },
  ready() {
    let that = this;
    const query = wx.createSelectorQuery().in(this);
    query.select('.tab__index').boundingClientRect(function(res) {
      that.setData({
        itemWidht: res.width ,
        itemHeight: res.height ,
        width: that.data.lineWidth ? that.data.lineWidth : res.width ,
        height: that.data.lineWidth ? that.data.lineWidth : res.height,
        left: that.data.lineWidth ? (res.width  - that.data.lineWidth) / 2 : 0,
        top: that.data.lineWidth ? (res.height  - that.data.lineWidth) / 2 : 0
      });
    }).exec()
  },
  methods: {
    tabchange: function(e) {
      let that = this;
      let index = e.currentTarget.dataset.tapid;
      let moveLeft = that.data.lineWidth ? (that.data.itemWidht - that.data.lineWidth) / 2 + that.data.itemWidht * index : that.data.itemWidht * index;
      let moveTop = that.data.lineWidth ? (that.data.itemHeight - that.data.lineWidth) / 2 + that.data.itemHeight * index : that.data.itemHeight * index;
      that.setData({
        defaultIndex: index,
        startAnimate:true,
        left: moveLeft,
        top: moveTop
      });
    }
  }
})