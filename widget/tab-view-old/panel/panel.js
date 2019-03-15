// widget/tab-view/panel/panel.js
let Event = require('../Event.js').ep;
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabIndex: Number,
    label: String,
    componentId: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    activeKey: 1,
    test: 0
  },
  attached() {
    this.componentId = this.data.componentId;
    this.data.label && Event.emit(`tab-create-${this.componentId}`, {
      key: this.data.tabIndex,
      label: this.data.label
    });
    Event.on(`to-panel-switch-${this.componentId}`, activeKey => {
      this.setData({
        activeKey
      });
    });
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})