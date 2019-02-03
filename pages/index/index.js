// pages/index/index.js
//引入需要的数据js
const classicData=require('../../data/classic_data.js');
import {indexModel} from '../../models/index.js'

//let indexModel=new indexModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    like:true,
    count:9,
    classicData:{},
    nowIndex:0
  },
  //监听左按钮事件
  changeLeft (e){
  let index=this.data.nowIndex;
  index--;
  this.setData({
    nowIndex:index,
    classicData: classicData.classicData[index]
  });
  },
  //监听右按钮事件
  changeRight (){
    let index = this.data.nowIndex;
    index++;
    this.setData({
      nowIndex: index,
      classicData: classicData.classicData[index]
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const data =classicData.classicData;
    // indexModel.getLatest((res)=>{
    //   consol.log(res);
         this.setData({
           classicData:data[0]
         })
    // })
  },
  //监听子组件 Like的触发的事件classicData
  onLike (e){
  let data=e.detail;//data是用户传递过来的参数
  console.log(data);
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