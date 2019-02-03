// pages/book-detail/book-detail.js
import {BookModel} from '../../models/book.js'
const bookModel = new BookModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
   book:{},
   comments:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //调Model中的方法，获取数据
   const ibsn=options.id;
    bookModel.getDetail(ibsn,(res)=>{
      let book={
        img:res.data.image,
        title: res.data.title,
        author: res.data.author,
        content: res.data.summary,
        where: res.data.publisher,
        year: res.data.pubdate,
        page: res.data.pages,
        price: res.data.price,
        back: res.data.binding
      };
      const tags=res.data.tags;
      let array=[];
      for(var i in tags){
        array.push(tags[i]["title"]);
      }
      // tags.forEach((item,index)=>{
      //   array.push(item.title);
      // })
      this.setData({
        book:book,
        comments:array
      })
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