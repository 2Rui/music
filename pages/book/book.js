// pages/book/book.js
const bookData=require('../../data/book_data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
   books:[],
   search:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  goBookDetail (e){
    let ibsn=e.detail.id;//监听子组件传来的数据
    wx.navigateTo({
      // url:'/pages/book-detail/book-detail?id='+ibsn,
      url:`/pages/book-detail/book-detail?id=${ibsn}`
    })
  },
  onBack (){
    console.log('需要返回')
    this.setData({
      search:false
    })
    // wx.navigateBack({
    //   delta:1
    // });
  },
  onSearch (){//点击了搜索
   this.setData({
     search:true
   })
  },
  onLoad: function (options) {
   this.setData({
     books:bookData.data
   })
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

  }
})