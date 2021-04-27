// pages/monthdetail/index.js
var util = require("../../utils/util.js")
var WXAPI = require("../../utils/api.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {

    datestr: util.formatDateStr(new Date()),
    startDate:'',
    endDate:'',
    dataInfo:[]
  },
  /*获取数据 */
  getData: function () {
    var that = this;
    var dataType='d';
    wx.showLoading({
      "mask": true,
      "title": "加载中..."
    });
    WXAPI.driverList({
      querytype:dataType,
      begintime: that.data.startDate,
      endtime: that.data.endDate
    }).then(function (res) {
      wx.hideLoading()
      if (res.code != 1) {
        wx.showToast({
          title: res.msg,
          icon: 'none',
          duration: 1500
        })
      } else {
        for (var i = 0; i < res.data.length; i++) {
          var dd=util.stringToDate(res.data[i].date)
          res.data[i].datestr=util.formatDateStr(dd)
        }
        that.setData({
          dataInfo: res.data,
        })
        console.log(that.data.dataInfo)
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
  onLoad: function(options) {
    this.setData({
      startDate: options.startDate,
      endDate:options.endDate,
      baseUrl: WXAPI.BASE_URL
    })
    this.getData();
  },

  clickDetail:function(e){
    var dateDay=e.currentTarget.dataset.date
    wx.navigateTo({
      url: '../record/index?dateDay='+dateDay
    })
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