// 获取应用实例
const app = getApp()

Page({
  data: {
    isNeedSaoMa: app.globalData.isNeedSaoMa,
    sliperList : [],
    navbar: ['护肤', '彩妆', '香水', '个人护理'],
    currentTab: 0,
    // banner
    imgUrls: [
      'http:\/\/mz.djmall.xmisp.cn\/files\/banner\/20161219\/148211980641.png',
      'http:\/\/mz.djmall.xmisp.cn\/files\/banner\/20161222\/148238831285.png',
      'http:\/\/mz.djmall.xmisp.cn\/files\/banner\/20161222\/14823895573.png'
    ],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s

    hot_products:
    [
      {
        product_id: 1,
        imageurl: 'http://mz.djmall.xmisp.cn/files/banner/20161222/148237182618.png',
        html: "http://mz.djmall.xmisp.cn/files/activity/20161216/5853a0137573e84/mz2_ajax/index.html"
      },
      {
        product_id: 2,
        imageurl: 'http://mz.djmall.xmisp.cn/files/banner/20161202/148066038440.png',
        html: "http://mz.djmall.xmisp.cn/files/activity/20161208/584926f0017d874/mz1/index.html"
      }
    ],

    // navItems
    navItems: [
      {
        typeId: 0,
        name: '品牌',
        url: 'bill',
        imageurl: 'cloud://amper-environment-0e1sv6a1899928.616d-amper-environment-0e1sv6a1899928-1312245231/品牌.png',
      },
      {
        typeId: 1,
        name: '类目',
        url: 'bill',
        imageurl: 'cloud://amper-environment-0e1sv6a1899928.616d-amper-environment-0e1sv6a1899928-1312245231/类目.png',
      },
      {
        typeId: 2,
        name: '特惠',
        url: 'bill',
        imageurl: 'cloud://amper-environment-0e1sv6a1899928.616d-amper-environment-0e1sv6a1899928-1312245231/特惠.png'
      },
      {
        typeId: 3,
        name: '推荐',
        url: 'bill',
        imageurl: 'cloud://amper-environment-0e1sv6a1899928.616d-amper-environment-0e1sv6a1899928-1312245231/推荐.png'
      }
    ],

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
