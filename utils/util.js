function http(params){
  //request是异步请求 性能好
  wx.requesst({
    url:params.url,
    data:params.data,
    method:params.method?params.method:'GET',
    header:{
     'content-type':'application/json'
    },
    //回调函数 
    success:(res)=>{
      const code=res.statusCode;//code是数字 Number 
      //starsWith endsWith 字符串的方法  判断状态码是否是2开头的
      if(code.startsWidth('2')){
          params.success(res.data);
      }else{//服务器异常

      }
    },
    //错误 4开头不会走fail.只有在没有网络时才会在治理
    fail:(error)=>{

    }
  })
}
module.exports = {
  http:http
}
  
/*
调用时 require引入
使用   utils.http({
     url:,
     data:,
     method:
     success:(res)=>{
       这里对数据进行处理
     }
})
*/