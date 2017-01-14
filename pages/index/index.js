// pages/indedx/index.js
Page({
  data:{
    information:'账号密码不能为空！',
    enterMain:"进入主页",
    animationData: {},
    show:false,
    value1:"",
    value2:'',
    cookie:''
  },
  enterMain:function(e){
    if(this.data.value1=='' || this.data.value2==''){
     this.setData({
        show:true
      }); 
    }else{
     wx.setStorage({
       key:"key",
       data:this.data.value1
     });
     wx.setStorage({
       key:"key1",
       data:this.data.value2
     });
     wx.redirectTo({
      url: '../main/main'
     })
    }
  },
  bindInputValue1:function(e){
    console.log(e)
    this.setData({
      value1: e.detail.value,
      show:false,
      cookie:e.detail.value
   });
  },
  bindInputValue2:function(e){
    this.setData({
      value2: e.detail.value,
      show:false
   });
  },

  onLoad:function(options){
    wx.clearStorage()
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