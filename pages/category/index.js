//pages/category/index.js
const app = getApp()

Page({
  data: {
    category: [
      { title: '黑咖啡', desc: '黑咖啡：又称“清咖啡”，香港俗称“斋啡”、星马俗称“咖啡乌”，直接用咖啡豆烧制的咖啡，不添加奶、糖等会影响咖啡原味的饮用方式。速溶咖啡是不属于黑咖啡的范围的。', showDesc: false },
      { title: '白咖啡', desc: '白咖啡：又称“清咖啡”，香港俗称“斋啡”、星马俗称“咖啡乌”，直接用咖啡豆烧制的咖啡，不添加奶、糖等会影响咖啡原味的饮用方式。速溶咖啡是不属于黑咖啡的范围的。', showDesc: false },
    ]
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
