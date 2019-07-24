//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'cloud://little-y6v0c.6c69-little-y6v0c-1259261506/images/4.png',
      'cloud://little-y6v0c.6c69-little-y6v0c-1259261506/images/5.png',
      'cloud://little-y6v0c.6c69-little-y6v0c-1259261506/images/6.png'
    ],
    address:'正在位'
  },
  onLoad: function () {
  //  this.aaa("1-4");
   
 },
 onReady:function()
 {
    // this.aaa("1-4");
   this.time();//调用定时器
 },
  orderseat:function(e)
  {
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
  ordermember:function(e){
    wx.navigateTo({
      url: 'member/member',
    })
  },
  tapSearch:function(){
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
  aaa:function(e)
  {
    console.log(e)
  },
  time: function () {
    // console.log("1111111111111111111111");
    var that=this;
    var timerTem = setTimeout(function () {
      //获取当前时间
      var timestamp = Date.parse(new Date());
      var nowDay = new Date(timestamp);
      var nowhours = nowDay.getHours();
      var nowminutes = nowDay.getMinutes();
     //当前时间为6:00时执行
      // if (1)
      // { 
      //   that.aaa("1-4");
      //   that.aaa("5-8");
      //   that.aaa(">8");
      //   clearTimeOut(timerTem);
      // }
      // that.time();
    }, 1000)
   
    // 保存定时器name
    this.setData({
      timer: timerTem
    })
    
  },
  orderinfood:function()
  {
    wx.navigateTo({
      url: 'infood/infood',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
 
})