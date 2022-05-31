// index.js
import { request } from "../../request/request.js";
// 获取应用实例
const app = getApp()

Page({
  data: {
    isNeedSaoMa: app.globalData.isNeedSaoMa,
    sliperList : [],
  },

  onLoad: function (options){
    this.getSliperList()
  },

  getSliperList(){
    wx.cloud.init()
    wx.cloud.downloadFile({
        fileID: 'cloud://amper-environment-0e1sv6a1899928.616d-amper-environment-0e1sv6a1899928-1312245231/水果3.jpg',
        success: res => {
          var tmpList = this.data.sliperList
          tmpList.push(res.tempFilePath)
        this.setData({
            sliperList : tmpList
        })
        },
    })
    wx.cloud.downloadFile({
        fileID: 'cloud://amper-environment-0e1sv6a1899928.616d-amper-environment-0e1sv6a1899928-1312245231/水果2.jpg',
        success: res => {
          var tmpList = this.data.sliperList
          tmpList.push(res.tempFilePath)
        this.setData({
            sliperList : tmpList
        })
        },
    })
    wx.cloud.downloadFile({
        fileID: 'cloud://amper-environment-0e1sv6a1899928.616d-amper-environment-0e1sv6a1899928-1312245231/水果1.jpg',
        success: res => {
          var tmpList = this.data.sliperList
          tmpList.push(res.tempFilePath)
        this.setData({
            sliperList : tmpList
        })
        },
    })
},

})
