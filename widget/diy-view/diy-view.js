//diy模板
Component({
  properties: {
    tplData: Object || null
  },
  data: {

  },
  methods: {
    formSubmit: function(e) { //提交表单
      let that = this;
      let sunmitNum = 1; //提交次数，默认一次，0为无限次
      for (let item of tplData) {
        if (item.adType == 13) {
          sunmitNum = item.submitNum;
          for (let info of item.data) {
            let thatValue = e.detail.value[info.id]; //当前提交的值
            let isFillIn = info.isFillIn; //是否必填
            let thatKey = info.labelText; //选项标识
            let thatId = info.id; //当前编辑的ID
            let submitData = null; //提交的数据
            if (isFillIn) {//是否必填
              
            }
          }
        }
      }
    }
  }
})