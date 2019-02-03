// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
   //开放的，是外界传进来的数据
   like:{
     type:Boolean,
     value:false  //默认值，当不传时，就使用这个值
   },
   count:Number,
   index:{
     type:String,
   }
  },

  /**
   * 组件的初始数据
   */
  data: {
    yeslike:'images/like.png',
    nolike:'images/like@dis.png'
  },
  attached (){//组件的生命周期，可在此setData
    let likeObj=wx.getStorageSync('like');
    this.setData({
      like:likeObj['like'+this.data.index]
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike (){
      const index=this.properties.index;
      //let 定义变量，有作用域，var没有  const常量
      let like=this.properties.like;
      let count=this.properties.count;

      count=like?count-1:count+1;
      this.setData({
        like:!like,
        count:count
      });
      //触发一个自定义事件 第一个参数事件名  第二个是传递的参数，event对象的detail属性，
      //const behavior = like?'cancel':'like'
      //记录一下 用户点击    是喜欢 还是不喜欢
      // this.triggerEvent('like',{
      //  behavior:behavior
      // },{});
      //在用到like组件的页面 监听这个自定义函数，向服务器提交接口

      //将数据放到缓存中
      var storageLike=wx.getStorageSync('like');
      if (!storageLike){
        storageLike = {};
      }
      storageLike['like' + index] = !like;
      wx.setStorageSync('like', storageLike);
    },
  }
})
