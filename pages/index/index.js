// index.js
Page({
  data:{
    imgSrc:'/images/R-C.png'
  },
  tapCat:function(){
    let audio=wx.createInnerAudioContext()
    audio.src='/audios/Wiz Khalifa&Charlie Puth - See You Again (feat. Charlie Puth).mp3'
    audio.play()
  }
})