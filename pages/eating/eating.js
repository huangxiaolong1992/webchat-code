var post_data=require("../../data/data.js")
Page({
  data:{},
  onLoad:function(options){
     this.setData({ 
     eating:post_data.eating,
    })

  },
   onPullDownRefresh: function(){
         wx.getLocation({
        type: 'gcj02', //返回可以用于wx.openLocation的经纬度
        success: function(res) {
            var latitude = res.latitude
            var longitude = res.longitude
            wx.openLocation({
            latitude: latitude,
            longitude: longitude,
            scale: 28
            })
        }
    }) 
   },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})