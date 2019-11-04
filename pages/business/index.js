// pages/logs/index.js
var util = require("../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: util.formatDate(new Date()),
    datestr: util.formatDateStr(new Date()),
    dataType: 1, //1日报2月报3自定义:'',
    startdate: util.formatDate(new Date()),
    enddate: util.formatDate(new Date()),

  },
  bindDateChange: function (e) {
    var statr = util.formatDateStr(new Date(e.detail.value));
    var end = util.formatDateStr(new Date(this.data.enddate));
    this.setData({
      startdate: e.detail.value,
      datestr: statr + "-" + end,
    })
  },
  bindEndDateChange: function (e) {
    var statr = util.formatDateStr(new Date(this.data.startdate));
    var end = util.formatDateStr(new Date(e.detail.value));
    this.setData({
      enddate: e.detail.value,
      datestr: statr + "-" + end,
    })
  },
  clickDays: function() {
    this.setData({
      dataType: 1,
      datestr: util.formatDateStr(new Date()),
      date: util.formatDate(new Date()),
    })
  },
  clickMonth: function() {
    var dateDay = new Date();
    var dates = dateDay.getFullYear() + "-" + (dateDay.getMonth() + 1);
    this.setData({
      dataType: 2,
      date: dates,
      datestr: dateDay.getFullYear() + "年" + (dateDay.getMonth() + 1) + "月",
    })
  },
  clickCustom: function() {
    var statr=util.formatDateStr(new Date());
    var end = util.formatDateStr(new Date());
    this.setData({
      dataType: 3,
      datestr: statr+"-"+end,
    })
  },
  clickLeft: function() {
    if (this.data.dataType == 1) {
      var start_date = util.mathChangeDate(this.data.date, "-", 1);
      var c = start_date.substring(0, 10);
      var d = new Date(start_date);
      this.setData({
        date: c,
        datestr: d.getFullYear() + "年" + (d.getMonth() + 1) + "月" + d.getDate() + "日",
      })
    }
    if (this.data.dataType == 2) {
      var a = this.data.date.split("-")
      a[1] = parseInt(a[1]) - 1;
      if (a[1] == 0) {
        a[0] = parseInt(a[0]) - 1;
        a[1] = 12;
      }
      var month = '';
      if (a[1] < 10) {
        month = "0" + a[1];
      }
      else {
        month = a[1];
      }
      this.setData({
        date: a[0] + "-" + month,
        datestr: a[0] + "年" + a[1] + "月",
      })
    }
  },
  clickDetail: function() {

  },
  clickRight: function() {
    if (this.data.dataType == 1) {
      var start_date = util.mathChangeDate(this.data.date, "+", 1);
      var c = start_date.substring(0, 10);
      var d = new Date(start_date);
      this.setData({
        date: c,
        datestr: d.getFullYear() + "年" + (d.getMonth() + 1) + "月" + d.getDate() + "日",
      })
    }
    if (this.data.dataType == 2)
    {
      var a = this.data.date.split("-")
      a[1] = parseInt(a[1]) + 1;
      if (a[1] == 13) {
        a[0] = parseInt(a[0]) + 1;
        a[1] = 1;
      }
      var month='';
      if(a[1]<10)
      {
        month="0"+a[1];
      }
      else
      {
        month=a[1];
      }
      this.setData({
        date: a[0] + "-" + month,
        datestr: a[0] + "年" + a[1] + "月",
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})