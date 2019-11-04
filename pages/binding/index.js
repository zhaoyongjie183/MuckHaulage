//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    array: ['管理用户', '驾驶人员'],
    objectArray: [
      {
        id: 0,
        name: '管理用户'
      },
      {
        id: 1,
        name: '驾驶人员'
      }
    ],
    index: 0,
    phone:'',
    name:'',
    type:''
  },
  bindKeyInputPhone:function(e){
    this.setData({
      phone: e.detail.value
    })
  },
  bindKeyInputName:function(e){
    this.setData({
      name: e.detail.value
    })
  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  clickBinding:function(){
    wx.switchTab({
      url: '../my/index'
    })
  },
  onLoad: function () {
   
  }
 
})
