// components/epsolid/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
   epsolid:{
    type:String,
    value:0,
     observer(newVal, oldVal, changedPath) {
       const value=Number(newVal);
       let index = value < 10 && value > 0 ? '0' + value : value;
       //console.log(index);//会执行多次，需要理解
       //不要在observer中修改properties中的数据
       this.setData({
         _epsolid:index
       })
       // 属性被改变时执行的函数（可选），通常 newVal 就是新设置的数据， oldVal 是旧数据
     }
   }
  },

  /**
   * 组件的初始数据
   */
  data: {
    month:'',
    year:'',
    _epsolid:''
  },
  attached (){//组件的生命周期
  //在此处获取现在的年月
    const months = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月',]
  let date=new Date();
  let year=date.getFullYear();
  let month=date.getMonth();
  this.setData({
    month:months[month],
    year:year
  })
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
