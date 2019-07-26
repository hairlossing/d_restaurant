const app = getApp()

Page({
  data: {
    imgUrls: [
      'cloud://little-y6v0c.6c69-little-y6v0c-1259261506/images/4.png',
      'cloud://little-y6v0c.6c69-little-y6v0c-1259261506/images/5.png',
      'cloud://little-y6v0c.6c69-little-y6v0c-1259261506/images/6.png'
    ],
    address: '正在位'
  },
  onLoad: function () {

    //定时器每天早上六点执行任务
    this.time()
    //  this.aaa("1-4");

  },
  time: function () {
    this.setData({
      timer: setTimeout(() => {
        //获取当前时间
        var timestamp = Date.parse(new Date());
        var nowDay = new Date(timestamp);
        var nowhours = nowDay.getHours();
        var nowminutes = nowDay.getMinutes();
        var nowseconds = nowDay.getSeconds();
        if (nowhours == 11 && nowminutes == 4 && nowseconds == 0)//当前时间为6:00时执行
        {
          this.aaa("1-4")
          this.aaa("5-8")
          this.aaa(">8")
          clearTimeout(this.data.timer)
        }
        this.time()
      }, 1000)
    })
  },


  aaa: function (e) {
    console.log(e)
    const db = wx.cloud.database()
    db.collection('user_book').where({
      _openid: "ot8X15Zm54bruNW3ZVVG_Ssl8qFI",
      date: 1,
      seat_type: e,
    }).get({
      success: res => {
        console.log("今日订座有：" + res.data[0].seat_number + "人")
        var num = res.data[0].seat_number
        var id = res.data[0]._id
        db.collection('seat').where({
          _openid: "ot8X15Zm54bruNW3ZVVG_Ssl8qFI",
          state: true,
          type: e
        }).get({
          success: res => {
            console.log("查询成功")
            for (var i = 0; i < num; i++) {
              wx.cloud.callFunction({
                // 云函数名称
                name: 'book',
                // 传给云函数的参数
                data: {
                  id: res.data[i]._id
                },
              })
                .then(res => {
                  console.log(res.result) // 3
                  wx.showToast({
                    title: '成功',
                  })
                })
                .catch(console.error)
            }
            console.log(i)

//交换日期
            wx.cloud.callFunction({
              // 云函数名称
              name: 'date_change',
              // 传给云函数的参数
              data: {
              },
            })
              .then(res => {
                console.log(res.result) // 3
                wx.showToast({
                  title: '成功',
                })
              })
              .catch(console.error)


            wx.cloud.callFunction({
              // 云函数名称
              name: 'date_change2',
              // 传给云函数的参数
              data: {
                id:id,
              },
            })
              .then(res => {
                console.log(res.result) // 3
                wx.showToast({
                  title: '成功',
                })
              })
              .catch(console.error)



              }
            })
          },
          fail: err => {
            console.log("查询失败")
          }
        })

  },


  orderseat: function (e) {
    wx.navigateTo({
      url: 'seat/seat',
    })
  },
  orderfood: function (e) {
    wx.navigateTo({
      url: 'food/food',
    })
  },
  orderparty: function (e) {
    wx.navigateTo({
      url: 'party/party',
    })
  },
  ordernumber: function (e) {
    wx.navigateTo({
      url: 'number/number',
    })
  },
  orderpay: function (e) {
    wx.navigateTo({
      url: 'pay/pay',
    })
  },
  ordermember: function (e) {
    wx.navigateTo({
      url: 'member/member',
    })
  },
  tapSearch: function () {
    wx.navigateTo({ url: 'search' });
  },
  toNearby: function () {
    var self = this;
    self.setData({
      scrollIntoView: 'nearby'
    });
    self.setData({
      scrollIntoView: null
    });

  },
  orderinfood: function () {
    wx.navigateTo({
      url: 'infood/infood',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }
})