/*外部使用
import {HTTP} from '相对路径'
class BookMode extends HTTP{
    getBooks(){
      //把request方法返回的Promise对象，再次return出去，在想要取到异步请求的res结果的时候，使用
      在book页面，onLoad函数中 const bookPromise=bookModel.getBooks();
       bookPromise.then((res)=>{
         这里就可以使用res的数据了
       })
        return this.request('/books/hot-list',{ //这样传参数不好看，想传一个对象，
              name:'白鹿原'
            },'POST')
            第二种传参的方法，适用es6的解构写法  this.request({
              url:,
              data:{},
              method
            })
    }
}

*/
class HTTP {
  //es6的解构 在参数外面加个{}   request({url,data={},method='GET'}){} 这样就可以使用第二种传参方法
  request(url, data = {}, method = 'GET') {
    return new Promise((resolve, reject) => {
      //这里写异步代码
      this._request(url, resolve, reject, data, method);
    })
  }

  _request(url, resolve, reject, data = {}, method = 'GET') { //，必传的值必须放在前面，data与method是默认值的传值方式，不传时就默认=号后的值
    wx.request({
      url: url,
      data: data,
      method: method,
      header: {
        'content-type': 'application--xml'
      },
      sucess: (res) => {
        resolve(res); //将pormise状态改为已完成
      },
      fail: (error) => {
        reject(); //将pormise状态改为已失败
      }
    })
  }
}