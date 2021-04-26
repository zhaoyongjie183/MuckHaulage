//index.js
//获取应用实例
const app = getApp()
const WXAPI = require('../../utils/api')

Page({
  data: {
    phone: '',
    code: '',
    sendTime: '获取验证码',
    sendColor: '#363636',
    snsMsgWait: 60,
  },
  /**
   * 获取手机验证码
   */
  getverifycode: function (e) {
    var that = this;
    if (this.data.phone == "" || this.data.phone == undefined) {
      wx.showToast({
        title: '手机号不能为空',
        icon: 'none',
        duration: 1500
      })
      return;
    }
    if (!(/^1[3|4|5|8][0-9]\d{8}$/.test(this.data.phone))) {
      wx.showToast({
        title: '手机号输入有误',
        icon: 'none',
        duration: 1500
      })
      return;
    }
    // 60秒后重新获取验证码
    var inter = setInterval(function () {
      this.setData({
        smsFlag: true,
        sendColor: '#cccccc',
        sendTime: this.data.snsMsgWait + 's后重发',
        snsMsgWait: this.data.snsMsgWait - 1
      });
      if (this.data.snsMsgWait < 0) {
        clearInterval(inter)
        this.setData({
          sendColor: '#363636',
          sendTime: '发送验证码',
          snsMsgWait: 60,
          smsFlag: false
        });
      }
    }.bind(this), 1000);
    wx.showLoading({
      "mask": true,
      "title": "加载中..."
    });
    WXAPI.msgcode({
      phone:that.data.phone 
    }).then(function (res) {
      wx.hideLoading()
      if (res.code != 1) {
        wx.showToast({
          title: res.msg,
          icon: 'none',
          duration: 1500
        })
      }
      else {
        console.log('短信验证码发送成功');
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
   * 获取手机号
   */
  bindKeyInputPhone: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },

  /**
   * 获取手机验证码
   */
  bindKeyInputName: function (e) {
    this.setData({
      code: e.detail.value
    })
  },
  clickBinding: function () {
    var that=this;
    wx.showLoading({
      "mask": true,
      "title": "加载中..."
    });
    WXAPI.login({
      phone: that.data.phone,
      code: that.data.code,
      sessioncode: wx.getStorageSync('longinCode'),
      nickname: app.globalData.nickName,
      headimgurl: app.globalData.avatarUrl
    }).then(function (res) {
      wx.hideLoading()
      if (res.code != 1) {
        wx.showToast({
          title: res.msg,
          icon: 'none',
          duration: 1500
        })
      }
      else {
        console.log('登陆成功');
        getApp().globalData.token=res.data.token
        wx.setStorageSync('roleId', res.data.userinfo.usertype)
        wx.setStorageSync('userInfoServer', res.data.userinfo)
        wx.switchTab({
          url: '../home/home'
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
  onLoad: function () {

  }

})