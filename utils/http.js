//引入外部js 要用相对定位
import {config} from '../config.js'
const tips={
   1:'抱歉，出现一个错误！',
   1005:'appkey不存在'
}
//使用类
class HTTP{
  //简单的一个方法 掉豆瓣的接口
  http (params){
    wx.request({
      url:params.url,
      method:'GET',
      header: {
        'content-type': 'applycation/xml'
      },
      success:(res)=>{
        params.success(res);
      }
    })
  }
  ///公用方法 ，在外部可以调用
  request (params){
    wx.request({
      url:config.baseUrl+params.url,
      data:params.data,
      method:params.method?params.method:'GET',
      header:{
        'content-type':'application-json',
        'appkey':config.appkey
      },
      success:(res)=>{
         let code=(res.statusCode).toString();//状态码是Number
         if(code.startsWith('2')){
            params.success(res.data);
         }else{//服务器异常
            //掉用私有方法
            let errorCode=res.data.error_code;
           this._showTips(errorCode);
         }
      },
      //一般断网才走fail方法  api掉用失败
      fail:(error)=>{
        this._showTips(1);
      }
    })
  }
  //类内部的私有方法，下划线，区分，外界不能调用
  _showTips (errorCode){
    if(!errorCode){
      errorCode=1;
    }
    wx.showToast({
      title: tips[errorCode] ? tips[errorCode] : tips[1],
    })
  }
}
//导出
export {HTTP}
/*
import {HTTP} from '相对路径'
let htttp=new HTTP();
http.request({
  url:'',
  success:(res){
    //这里处理数据
  }
})
 */