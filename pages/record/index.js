// pages/record/index.js
var util = require("../../utils/util.js")
var WXAPI = require("../../utils/api.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataType: 1, //1全部记录2有效记录3异常记录:'',
    dateDay: '',
    list: [],
    baseUrl: ''
  },

  getData: function (id) {
    var that = this;
    wx.showLoading({
      "mask": true,
      "title": "加载中..."
    });
    WXAPI.transList({
      day: that.data.dateDay,
      id: id
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
          list: res.data
        })
      }
    }).catch(function (e) {
      wx.hideLoading()
      console.log(e)
      wx.showToast({
        title: '网络开小差了',
        icon: 'none'
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var str = options.dateDay
    this.setData({
      dateDay: str,
      baseUrl: WXAPI.BASE_URL
    })
    this.getData(0);
  },


  clickDetail: function (e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../detail/index?id='+id
    })
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