// components/search/index.js
import { BookModel } from '../../models/book.js'
let bookModel = new BookModel();
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  attached (){
   //从缓存中获取
   const comments=wx.getStorageSync('comments');
     if(comments){
         this.setData({
           comments
         });
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    value:'',
    focus:true,
    booksCom:[],
    comments: [], 
    finished:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
    onReset (){
      console.log('清空')
      this.setData({
        value:'',
        facus:true
      })
    },
    onBack(){
      console.log('点击了取消')
    this.triggerEvent('back',{},{});
    },
    searchMore (){
     console.log('点击了放大镜')
    },
    //两个事件合并，点回车搜索，与监听子组件tag传来的事件，再次搜索
    onConfirm (e){
      const value=e.detail.value||e.detail.text;
      //开始请求数据
      bookModel.getSearch(value,(res)=>{
        //处理数据的回调函数
         this.onDataInfo(res.data.books);
      });
      //将搜索的数据放到缓存中
      let comments=wx.getStorageSync('comments');
      if(comments){
        if (comments.indexOf(value) == -1) {
          comments.unshift(value);
        }
      }else{
        comments=[];
        comments.unshift(value);
      }
      wx.setStorageSync('comments',comments);
    },

    searchBookDetail(e){
      const ibsn=e.detail.id;
      this.triggerEvent('goDetial', { id: ibsn },{})
    },
    //处理数据
    onDataInfo(data){
      let arr=[];
     for(var i in data){
       var book=data[i];
       var obj={
         author:book.author,
          id: book.id,
          image: book.image,
          like_status: 0,
          title:book.title,
          isbn10:book.isbn10
       };
       arr.unshift(obj);
     }
  this.setData({
    booksCom:arr,
    finished:true
  })
    }
  }
})
