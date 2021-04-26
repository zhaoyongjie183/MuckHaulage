Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    roleId:'',
    drivertabbar: [{
      pagePath: "../../pages/home/home",
      iconPath: "/image/icon_component.png",
      selectedIconPath: "/image/icon_component_HL.png",
      text: "首页"
    }, {
      pagePath: "../../pages/home/home",
      iconPath: "/image/icon_API.png",
      selectedIconPath: "/image/icon_API_HL.png",
      text: "统计查询"
    },
    {
      pagePath: "../../pages/home/home",
      iconPath: "/image/icon_API.png",
      selectedIconPath: "/image/icon_API_HL.png",
      text: "我的"
    }
  ],
    managetabbar: [{
      pagePath: "../../pages/home/home",
      iconPath: "/image/icon_component.png",
      selectedIconPath: "/image/icon_component_HL.png",
      text: "首页"
    }, {
      pagePath: "../../pages/home/home",
      iconPath: "/image/icon_API.png",
      selectedIconPath: "/image/icon_API_HL.png",
      text: "统计"
    },
    {
      pagePath: "../../pages/home/home",
      iconPath: "/image/icon_API.png",
      selectedIconPath: "/image/icon_API_HL.png",
      text: "管理"
    },
    {
      pagePath: "../../pages/home/home",
      iconPath: "/image/icon_API.png",
      selectedIconPath: "/image/icon_API_HL.png",
      text: "我的"
    }
  ]
  },
  attached() {
    const roleId = 2
    if (roleId == '' || roleId == 2) { //普通用户和未登录时默认第一种
        this.setData({
            list: this.data.drivertabbar
        })
    } else if (roleId == 1) { //vip用户显示第二种
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