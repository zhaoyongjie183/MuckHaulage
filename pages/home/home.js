// pages/home/home.js
const WXAPI = require('../../utils/api')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    autoplay: true,
    interval: 2000,
    list: [],
    bunnerList:[],
    baseUrl: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.showLoading({
      "mask": true,
      "title": "加载中..."
    });
    WXAPI.homeList().then(function (res) {
      wx.hideLoading()
      if (res.code == 1) {
        that.setData({
          list: res.data,
          baseUrl: WXAPI.BASE_URL
        });
      }
    }).catch(function (e) {
      wx.hideLoading()
      console.log(e)
      wx.showToast({
        title: e.msg,
        icon: 'none'
      })
    })
    WXAPI.bunnerList().then(function (res) {
      wx.hideLoading()
      if (res.code == 1) {
        that.setData({
          bunnerList: res.data,
        });
      }
    }).catch(function (e) {
      wx.hideLoading()
      console.log(e)
      wx.showToast({
        title: e.msg,
        icon: 'none'
      })
    })
    console.log(this.data);
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
        selected: 0
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