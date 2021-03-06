let TIME_FORMAT = require('../../lib/dateformat.js');
Component({
  behaviors: [],
  properties: {
    countdown: {
      type: Number,
      value: 0,
      observer: 'init'
    },
    startTime: {
      type: String,
      value: ''
    },
    endTime: {
      type: String,
      value: ''
    },
    format: {
      type: String,
      value: 'dd天hh时mm分ss秒'
    },
    isShowText: {
      type: Boolean,
      value: false
    },
    textStyle: {
      type: String,
      value: ''
    },
    numStyle: {
      type: String,
      value: ''
    },
    symbolStyle: {
      type: String,
      value: ''
    }
  },
  data: {
    computeTime: 0,
    dataText: "",
    endTimeMs: 0
  },
  detached() {
    this.onPageHide()
  },
  methods: {
    /**
     * Initialization
     */
    init() {
      let that = this;
      let difftime = 0;
      let dataText = "";
      let {
        countdown,
        format,
        endTime,
        startTime
      } = this.data;
      // countdown seconds


      startTime = TIME_FORMAT.DateToUnix(startTime);
      endTime = TIME_FORMAT.DateToUnix(endTime);
      let nowTime = Date.parse(new Date());

      if (nowTime < startTime) { //如果当前时间<开始时间，那开始时间为结束时间，当前时间为开始时间，距开始
        difftime = startTime - nowTime;
        dataText = '距开始';
      } else if (nowTime > endTime) {
        dataText = '已结束';
      } else { //如果当前时间>开始时间，那开始时间为当前时间，结束时间为结束时间，距结束
        difftime = endTime - nowTime;
        dataText = '距结束';
      }
      this.computeTime = (difftime / 1000);
      this.setData({
        dataText: dataText
      })
      // time format
      this.format = format;

      const now = Date.now();
      // end timestamp (millisecond)
      this.endTimeMs = now + this.computeTime * 1000;

      this.initCountdown()
    },

    /**
     * timer
     */
    initCountdown() {
      clearInterval(this._timer);

      const now = Date.now();
      // countdown milliseconds
      let computeTimeMs = this.endTimeMs - now;
      // countdown interval
      let timeout = computeTimeMs % 1000 || 0;

      this._timer = setTimeout(() => {
        this.initCountdown();
      }, timeout)

      this.setCountdownTimeItems(computeTimeMs);
    },

    /**
     * set countdown seconds
     * @param  {Number} computeTimeMs - Countdown milliseconds
     */
    setCountdownTimeItems(computeTimeMs) {
      this.computeTime = parseInt(Math.ceil(computeTimeMs / 1000));
      this.emitRunCount(this.computeTime);

      if (this.computeTime <= 0) {
        clearInterval(this._timer);
        this.emitEndCount();
      }

      let timeItems = this.getTimeItems(this.computeTime, this.format);
      this.setData({
        timeItems
      })
    },

    /**
     * get rendering data
     * @param  {Number} computeTime - countdown seconds
     * @param  {String} format - time format
     * @return {Array} rendering data
     */
    getTimeItems(computeTime, format) {
      if (computeTime < 0) {
        computeTime = 0;
      }
      let arr = format.match(/[a-zA-Z]{1,3}/g) || [];
      let symbolArr = format.match(/[\u4e00-\u9fa5]+|[^a-zA-Z]/g) || [];
      let time = this.getTime(computeTime, format);
      return arr.map((item, i) => {
        return {
          num: time[item],
          symbol: symbolArr[i],
        }
      })
    },

    /**
     * get countdown object
     * @param  {Number} leftseconds - countdown seconds
     * @param  {String} format - time format
     * @return {Object} separated countdown seconds width d, h, m, s
     */
    getTime(leftseconds, format) {
      let d = leftseconds;
      let [s, m, h] = [60, 60, 24].map((unit) => {
        let num = d % unit;
        d = Math.floor(d / unit);
        return num;
      })

      if (leftseconds > 86400 && format.indexOf('d') === -1) {
        h += d * 24;
      }

      if (leftseconds > 3600 && format.indexOf('h') === -1) {
        m += h * 60;
      }

      if (leftseconds > 60 && format.indexOf('m') === -1) {
        s += m * 60;
      }

      return {
        dd: this.formatTime(d),
        hh: this.formatTime(h),
        mm: this.formatTime(m),
        ss: this.formatTime(s),
        d,
        h,
        m,
        s
      }
    },

    /**
     * zero padding
     * @param  {Number} val - number
     * @return {Number|String} the number after zero padding
     */
    formatTime(val) {
      return val < 10 ? `0${val}` : val;
    },

    /**
     * timing callback
     */
    emitRunCount() {
      this.triggerEvent('runcount', {
        computeTime: this.computeTime
      })
    },

    /**
     * end callback
     */
    emitEndCount() {
      this.triggerEvent('endcount');
    },

    onPageShow() {
      const now = Date.now();
      if (this.format && this.endTimeMs) {
        this.computeTime = parseInt((this.endTimeMs - now) / 1000);
        this.initCountdown();
      }
    },

    onPageHide() {
      clearInterval(this._timer);
    }
  }
})