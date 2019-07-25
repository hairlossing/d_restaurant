// miniprogram/pages/index/infood/infood.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['A101', 'A102', 'A103', 'B101', 'B102', 'C101',],
    index:0,
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

  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })


  },
  do:function()
  {
    console.log(this.data.array[this.data.index])

    wx.cloud.callFunction({
      // 云函数名称
      name: 'orderform',
      // 传给云函数的参数
      data: {
        num: this.data.array[this.data.index]
      },
    })
      .then(res => {
        console.log(res.result) // 3
      })
      .catch(console.error)



    wx.navigateTo({
      url: 'food/food',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  undo:function()
  {
    wx.navigateBack({
      delta: -1,
    })
  }
})