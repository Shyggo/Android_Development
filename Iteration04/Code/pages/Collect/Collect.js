// pages/Collect/Collect.js
Page({

  data: {
    tabs: [
      {
        id: 0,
        value: "收藏商品",
        isActive: true
      },
      {
        id: 1,
        value: "收藏品牌",
        isActive: false
      },
      {
        id: 2,
        value: "收藏店铺",
        isActive: false
      },
      {
        id: 3,
        value: "足迹",
        isActive: false
      },
    ],
    message_list: [1, 2, 3]
  },

  handleItemTap(e){
    const {index}=e.currentTarget.dataset;
    this.triggerEvent("tabsItemChange",{index});
  },

  handleTabsItemChange(e) {
    var { index } = 1;
    if(e.detail.x < wx.getSystemInfoSync().windowWidth/4){
      index = 0;
    }
    else if(e.detail.x < wx.getSystemInfoSync().windowWidth/2){
      index = 1;
    }
    else if(e.detail.x < 3*wx.getSystemInfoSync().windowWidth/4){
      index = 2;
    }
    else{
      index = 3;
    }
    let { tabs } = this.data;
    tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
    this.setData({
      tabs
    })
  },
})