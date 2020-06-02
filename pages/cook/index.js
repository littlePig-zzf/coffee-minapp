//index.js
const coffeesData = require("../../assets/coffees.js")
const app = getApp()

Page({
  data: {
    onShowMenu: 0,  //当前导航的下标
    navMenu: coffeesData.cook,   // 一级导航
  },

  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '冲煮方法'
    })
  },

  changeMenu (e) {
    let idx = e.currentTarget.dataset.idx || 0
    this.setData({
      onShowMenu: idx,
    })
  }
})
