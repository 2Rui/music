// components/navi/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
  title:String,
  first:Boolean,
  last:Boolean,
  index:Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    left_no:'images/triangle.dis@left.png',
    left:'images/triangle@left.png',
    right_no:'images/triangle.dis@right.png',
    right:'images/triangle@right.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
  goNext (){
  //  let index=this.properties.index;
  //  index++;
  if(!this.properties.last){
    this.triggerEvent('changeRight', {}, {});
  }
   
  },
  goPrev (){
    // let index = this.properties.index;
    // console.log(index)
    // index++;
    if(!this.properties.first){
      this.triggerEvent('changeLeft', {}, {});
    }
    
  }
  }
})
