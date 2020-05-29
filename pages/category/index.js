//pages/category/index.js
const coffeesData = require("../../assets/coffees.js")
const app = getApp()

Page({
  data: {
    category: coffeesData.coffees
  },

  onLoad: function () {
  },

  showDesc (e) {
    const { index } = e.currentTarget.dataset;
    this.data.category[index].showDesc = !this.data.category[index].showDesc
    this.setData({
      category: this.data.category
    })
  }

})
