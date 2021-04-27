// pages/my/index.js
var util = require("../../utils/util.js")
var WXAPI = require("../../utils/api.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    list: [],
    userInfos:'',
    
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  getData: function (id) {
    var that = this;
    wx.showLoading({
      "mask": true,
      "title": "加载中..."
    });
    WXAPI.stationList().then(function (res) {
      wx.hideLoading()
      if (res.code != 1) {
        wx.showToast({
          title: res.msg,
          icon: 'none',
          duration: 1500
        })
      } else {
        that.setData({
          list: res.data.stationlist
        })
        console.log(that.data.list)
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
    this.getData()
    this.data.userInfos=wx.getStorageSync('userInfoServer')
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
    var roletype = wx.getStorageSync('roleId')
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: roletype == 3 ? 3 : 2
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