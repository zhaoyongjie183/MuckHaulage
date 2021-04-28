//app.js
import { verifytoken } from 'utils/api'
App({
  onLaunch: function () {
    var that = this

    wx.getStorage({
      key: 'userInfoServer',
      success(res) {
        that.globalData.userInfo = res.data
        that.globalData.token = res.data.token
        //token可用性检查
        verifytoken().then(function (res) {
          wx.hideLoading()
          if (res.code == 1) {
            console.log('token可用')
            console.log(that.globalData.userInfo)
            switch (that.globalData.userInfo.usertype) {
              case 3:
                that.globalData.userurl = 'manager'
                wx.switchTab({
                  url: '/pages/home/home'
                })
                break;
              case 4:
                that.globalData.userurl = 'driver'
                wx.switchTab({
                  url: '/pages/home/home'
                })
                break;
              default:
            }
          }
          else {
            wx.redirectTo({
              url: '/pages/login/index'
            })
          }
        }).catch(function (e) {
          wx.hideLoading()
          console.log(e)
        })

      }
    })
  },
  globalData: {
    userInfo: null,
    token: '',
    userurl:'driver',
  }
})