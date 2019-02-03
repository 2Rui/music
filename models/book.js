import {HTTP} from '../utils/http.js'
class BookModel extends HTTP{
    getDetail (ibsn,callBack){
       this.http({
         url:'https://douban.uieee.com/v2/book/isbn/'+ibsn,
         success:(res)=>{
           callBack(res);
         }
       })
    }
    getSearch (value,callBack){
      this.http({
        url: 'https://douban.uieee.com/v2/book/search?q=' + value,
        success: (res) => {
          callBack(res);
        }
      })
    }
}
export {BookModel}