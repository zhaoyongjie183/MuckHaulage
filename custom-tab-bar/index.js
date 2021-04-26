Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#1A6B58",
    roleId:'',
    drivertabbar: [{
      pagePath: "../../pages/home/home",
      iconPath: "../images/home.png",
      selectedIconPath: "../images/homes.png",
      text: "首页"
    }, {
      pagePath: "../../pages/business/index",
      iconPath: "../images/sum.png",
      selectedIconPath: "../images/sums.png",
      text: "统计查询"
    },
    {
      pagePath: "../../pages/my/index",
      iconPath: "../images/me.png",
      selectedIconPath: "../images/mes.png",
      text: "我的"
    }
  ],
    managetabbar: [{
      iconPath: "../images/home.png",
      selectedIconPath: "../images/homes.png",
      pagePath: "../../pages/home/home",
      text: "首页"
    }, {
      iconPath: "../images/sum.png",
      selectedIconPath: "../images/sums.png",
      pagePath: "../../pages/business/index",
      text: "统计"
    },
    {
      iconPath: "../images/manager.png",
      selectedIconPath: "../images/managers.png",
      pagePath: "../../pages/home/home",
      text: "管理"
    },
    {
      iconPath: "../images/me.png",
      selectedIconPath: "../images/mes.png",
      pagePath: "../../pages/my/index",
      text: "我的"
    }
  ]
  },
  attached() {
    const roleId = wx.getStorageSync('roleId')
    if (roleId == '' || roleId == 4) { //普通用户和未登录时默认第一种
        this.setData({
            list: this.data.drivertabbar
        })
    } else if (roleId ==3) { //管理员用户显示第二种
        this.setData({
            list: this.data.managetabbar
        })
    }
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})