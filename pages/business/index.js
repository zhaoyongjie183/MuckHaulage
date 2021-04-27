// pages/logs/index.js
var util = require("../../utils/util.js")
var WXAPI = require("../../utils/api.js")
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
    roleId: '',
    carCount: 0,
    trainNumber: 0,
    carMoney: 0
  },
  bindDateChange: function (e) {
    var statr = util.formatDateStr(new Date(e.detail.value));
    var end = util.formatDateStr(new Date(this.data.enddate));
    this.setData({
      startdate: util.formatDate(new Date(e.detail.value)),
      enddate: util.formatDate(new Date(this.data.enddate)),
      startdate: e.detail.value,
      datestr: statr + "-" + end,
    })
    this.getData(this.data.dataType)
  },
  bindEndDateChange: function (e) {
    var statr = util.formatDateStr(new Date(this.data.startdate));
    var end = util.formatDateStr(new Date(e.detail.value));
    this.setData({
      startdate: util.formatDate(new Date(this.data.startdate)),
      enddate: util.formatDate(new Date(e.detail.value)),
      enddate: e.detail.value,
      datestr: statr + "-" + end,
    })
    this.getData(this.data.dataType)
  },
  clickDays: function () {
    this.setData({
      carCount: 0,
      trainNumber: 0,
      carMoney: 0
    })
    this.setData({
      startdate: util.formatDate(new Date()),
      enddate: util.formatDate(new Date()),
      dataType: 1,
      datestr: util.formatDateStr(new Date()),
      date: util.formatDate(new Date()),
    })
    this.getData(this.data.dataType);
  },
  clickMonth: function () {
    this.setData({
      carCount: 0,
      trainNumber: 0,
      carMoney: 0
    })
    var dateDay = new Date();
    var dates = dateDay.getFullYear() + "-" + (dateDay.getMonth() + 1);
    var endDay = util.getCurrentMonthDayNum(dateDay);
    this.setData({
      startdate: dateDay.getFullYear() + "-" + (dateDay.getMonth() + 1) + "-1",
      enddate: dateDay.getFullYear() + "-" + (dateDay.getMonth() + 1) + "-" + endDay,
      dataType: 2,
      date: dates,
      datestr: dateDay.getFullYear() + "年" + (dateDay.getMonth() + 1) + "月",
    })
    this.getData(this.data.dataType);
  },
  clickCustom: function () {
    this.setData({
      carCount: 0,
      trainNumber: 0,
      carMoney: 0
    })
    var statr = util.formatDateStr(new Date());
    var end = util.formatDateStr(new Date());
    this.setData({
      startdate: util.formatDate(new Date()),
      enddate: util.formatDate(new Date()),
      dataType: 3,
      datestr: statr + "-" + end,
    })
    this.getData(this.data.dataType);
  },
      /*日期切换 */ 
  clickLeft: function () {
    this.setData({
      carCount: 0,
      trainNumber: 0,
      carMoney: 0
    })
    if (this.data.dataType == 1) {
      var start_date = util.mathChangeDate(this.data.date, "-", 1);
      var c = start_date.substring(0, 10);
      var d = c.split("-");
      this.setData({
        startdate: c,
        enddate: c,
        date: c,
        datestr: d[0] + "年" + d[1] + "月" + d[2] + "日",
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
      } else {
        month = a[1];
      }
      var startDay = util.stringToDate(a[0] + "-" + month + "-1", "-");
      var endDayNumber = util.getCurrentMonthDayNum(startDay)
      var endtDay = util.stringToDate(a[0] + "-" + month + "-" + endDayNumber, "-");
      this.setData({
        startdate: util.formatDate(startDay),
        enddate: util.formatDate(endtDay),
        date: a[0] + "-" + month,
        datestr: a[0] + "年" + a[1] + "月",
      })

    }
    this.getData(this.data.dataType)
  },

  //查看详情
  clickDetail: function () {
    if(this.data.dataType == 1){
    wx.navigateTo({
      url: '../record/index?dateDay='+this.data.startdate
    })
  }
  else
  {
    wx.navigateTo({
      url: '../monthdetail/index?startDate='+this.data.startdate+'&endDate='+this.data.enddate
    })
  }
  },

    /*日期切换 */ 

  clickRight: function () {
    this.setData({
      carCount: 0,
      trainNumber: 0,
      carMoney: 0
    })
    if (this.data.dataType == 1) {
      var start_date = util.mathChangeDate(this.data.date, "+", 1);
      var c = start_date.substring(0, 10);
      var d = c.split("-");
      this.setData({
        startdate: c,
        enddate: c,
        date: c,
        datestr: d[0] + "年" + d[1] + "月" + d[2] + "日",
      })

    }
    if (this.data.dataType == 2) {
      var a = this.data.date.split("-")
      a[1] = parseInt(a[1]) + 1;
      if (a[1] == 13) {
        a[0] = parseInt(a[0]) + 1;
        a[1] = 1;
      }
      var month = '';
      if (a[1] < 10) {
        month = "0" + a[1];
      } else {
        month = a[1];
      }
      var startDay = util.stringToDate(a[0] + "-" + month + "-1", "-");
      var endDayNumber = util.getCurrentMonthDayNum(startDay)
      var endtDay = util.stringToDate(a[0] + "-" + month + "-" + endDayNumber, "-");
      this.setData({
        startdate: util.formatDate(startDay),
        enddate: util.formatDate(endtDay),
        date: a[0] + "-" + month,
        datestr: a[0] + "年" + a[1] + "月",
      })
    }
    this.getData(this.data.dataType)
  },
  /*获取数据 */
  getData: function (type) {
    var that = this;
    var dataType='d';
    if(type==1)
    {
      dataType='d'
    }
    else if(type==2)
    {
      dataType='m'
    }
    else
    {
      dataType='c'
    }
    wx.showLoading({
      "mask": true,
      "title": "加载中..."
    });
    WXAPI.driverList({
      querytype:dataType,
      begintime: that.data.startdate,
      endtime: that.data.enddate
    }).then(function (res) {
      wx.hideLoading()
      if (res.code != 1) {
        wx.showToast({
          title: res.msg,
          icon: 'none',
          duration: 1500
        })
      } else {
        that.setData({
          carCount: res.data[0].carsum,
          trainNumber: res.data[0].total,
          carMoney: res.data[0].money
        })
      }
    }).catch(function (e) {
      wx.hideLoading()
      console.log(e)
      wx.showToast({
        title: e.msg,
        icon: 'none'
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData(this.data.dataType);
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
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }
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

  }
})