// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    isNeedSaoMa: app.globalData.isNeedSaoMa,
    banner: [{
        picUrl: '/Icons/水果1.jpg'
      },
      {
        picUrl: '/Icons/水果2.jpg'
      },
       {
        picUrl: '/Icons/水果3.jpg'
      }
    ],
  },
})
