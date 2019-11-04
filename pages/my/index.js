// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    objectArray: [
      {
        id: 0,
        name: '重庆鱼嘴物流站点'
      },
      {
        id: 1,
        name: '成都温江搅拌厂'
      }
    ],
    index: 0,
    currentIndex: 0,//记录当前选中数据
    
  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  itemClick: function (res){
    console.log("index-->" + res.currentTarget.id);
    var position = res.currentTarget.id;
    this.setData({
      currentIndex: position,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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