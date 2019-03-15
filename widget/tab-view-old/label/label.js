// widget/tab-view/label/label.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabIndex: Number,
    componentId: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    activeKey: 0,
    width: 0
  },
  attached() {
    const componentId = this.data.componentId;
    Event.emit(`tab-create-${componentId}`, {
      key: this.data.tabIndex
    });

    Event.on(`to-label-switch-${componentId}`, activeKey => {
      this.setData({
        activeKey
      });
    });

    Event.on(`label-width-${componentId}`, width => {
      this.setData({
        width
      });
    });
  },
  moved() {
    Event.removeListener();
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onSwitch() {
      Event.emit(`from-label-switch-${this.data.componentId}`, this.data.tabIndex);
    }
  }
})