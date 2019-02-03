// components/book/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    book: Object, 
    showLike: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  /**
   * 组件的方法列表
   */
  methods: {
    goDetail (e){
      console.log(e)
      const ibsn=e.currentTarget.dataset.ibsn;
      //跳转图书的详情页面
      this.triggerEvent('goDetial',{id:ibsn})
    }
  }
})
