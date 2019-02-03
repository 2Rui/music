// components/index/music/index.js
import {indexBeh} from '../index-behavior.js'
let musicManage = wx.getBackgroundAudioManager ();
Component({
  behaviors:[indexBeh],
  /**
   * 组件的属性列表
   */
  properties: {
    musicUrl:String,
    musicTitle:String
    // img:String,
    // content:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    play:'images/player@playing.png',
    stop:'images/player@waitting.png',
    isPlay:false
  },
  //组件的生命周期
  detached (){
    console.log('组件消失');
    //musicManage.stop();
  },
  attached (){
    console.log('组件实例进入页面节点');
    this._recoverPlaying();
    this._monitorSwitch();
  },
  pageLifetimes:{//组件内部页面的是生命周期 show hide resize
  
  },
  /**
   * 组件的方法列表
   */
  methods: {
   onMusic (){
     if(!this.data.isPlay){
       this.setData({
         isPlay:true
       });
       //判断两次组件的音乐是否一样
       if (musicManage.src==this.properties.musicUrl){
         musicManage.play();
       }else{
         musicManage.src = this.properties.musicUrl;
       }
       musicManage.title = this.properties.musicTitle;
     }else{
       musicManage.pause();
       this.setData({
         isPlay: false
       });
     }
   },
   //监听音乐主板的事件
    _monitorSwitch: function () {
      musicManage.onPlay(() => {
        this._recoverPlaying();
      })
      musicManage.onPause(() => {
        this._recoverPlaying();
      })
      musicManage.onStop(() => {
        this._recoverPlaying();
      }),
        musicManage.onEnded(() => {
        this._recoverPlaying();
        })
    },
    _recoverPlaying: function () {
      //判断当前是否是暂停  停止
      if (musicManage.paused) {//当前是暂停
        this.setData({
          isPlay: false
        })
        return
       }
      if (musicManage.src == this.properties.musicUrl) {
        if (!musicManage.paused) {
          this.setData({
            isPlay: true
          })
        }
      }
    },

  }
})
