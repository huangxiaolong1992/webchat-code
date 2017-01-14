var post_data=require("../../data/data.js")

Page({
  data:{
    currentTab: 0,
    interval: 3000,
    duration: 1000
  },
  onLoad:function(options){
   this.setData({ 
     post:post_data.classification,
     imgUrls:post_data.imgUrls
    })
    console.log(post_data)

   wx.getStorage({
     key: 'key',
     success: function(res) {
       wx.showToast({
        title:'欢迎您,'+res.data,
        duration: 2000
     });
     } 
   }) 
  },
 bindChange: function( e ) { 
    var that = this;  
    that.setData({
       currentTab: e.detail.current
    });   
  },  
  swichNav: function(e) {  
    var that = this;   
      that.setData({  
        currentTab: e.currentTarget.dataset.current  
      })
  },
  navigateTo_page:function(ev){
    if(ev.currentTarget.dataset.post=="1"){
    wx.navigateTo({
      url: '../sport_article/sport_article'
     }) 
    }else if(ev.currentTarget.dataset.post=="2"){
      wx.navigateTo({
      url: '../eating/eating'
     }) 
    }else{
      wx.navigateTo({
      url: '../book/book'
    })
   }
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
    
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
    
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
   
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
    
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
    
  },

})