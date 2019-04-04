//index.js
//获取应用实例

Page({
  data: {
    year: '',
    month: '',
    day: '',
    weekArr: ['日', '一', '二', '三', '四', '五', '六'],
    dateArr: [],
    firstDay: '',
    lastDay: '',
    pwidth: '',
    clockNum: 3,
  },
  getDate: function() {
    const date = new Date()
    const year = date.getFullYear()
    const day = date.getDate()
    const month = date.getMonth()
    const months = month + 1
    const firstDay = (new Date(year,month,1)).getDay()
    const lastDay = (new Date(year,months,0)).getDate()
    for (let i=1;i<=lastDay;i++) {
      this.data.dateArr.push(i)
    }
    this.setData({
      year,
      month,
      day,
      firstDay,
      lastDay,
      dateArr:this.data.dateArr
    })
    console.log(this.data.dateArr,this.data.lastDay)
  },
  prevMon: function() {
    let month = ""
    let year = ""
    if(this.data.month == 0) {
      year = this.data.year - 1
      this.data.month = 11
      month = this.data.month
    }else{
      year = this.data.year
      month = this.data.month - 1
    }
    const firstDay = (new Date(year, month, 1)).getDay()
    const lastDay = (new Date(year, month+1, 0)).getDate()
    this.data.dateArr = []
    for (let i = 1; i <= lastDay; i++) {
      this.data.dateArr.push(i)
    }
    this.setData({
      year,
      month,
      firstDay,
      lastDay,
      dateArr: this.data.dateArr
    })
  },
  nextMon: function () {
    let month = ""
    let year = ""
    if (this.data.month == 11) {
      year = this.data.year + 1
      this.data.month = 0
      month = this.data.month
    } else {
      year = this.data.year
      month = this.data.month + 1
    }
    const firstDay = (new Date(year, month, 1)).getDay()
    const lastDay = (new Date(year, month + 1, 0)).getDate()
    this.data.dateArr = []
    for (let i = 1; i <= lastDay; i++) {
      this.data.dateArr.push(i)
    }
    this.setData({
      year,
      month,
      firstDay,
      lastDay,
      dateArr: this.data.dateArr
    })
  },
  onLoad: function (options) {
    this.getDate()
    this.setData({
      pwidth : wx.getSystemInfoSync().windowWidth/7
    })
  }
})
