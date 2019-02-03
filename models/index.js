//引入HTTP类
import {HTTP} from '../utils/http.js'
//extends HTTP 继承
class indexModel extends HTTP{
    getLatest (callBack){
      //因为继承了 可以直接使用HTTP的方法
      this.request({
         url:'url',
         success:(res)=>{
             callBack(res);
         }
      })
    }
}
export {indexModel}
/*
index页面使用的时候
import {indexModel} from '相对定位'
let index=new indexModel();
//传一个回调函数
index.getLatest((res)=>{
  //处理数据
})

每个page下的页面 都有对应models 下的js,这里主要处理一些了调接口的逻辑 
 */