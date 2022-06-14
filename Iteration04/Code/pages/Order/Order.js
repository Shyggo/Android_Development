// pages/Order/Order.js
Page({
  data: {
    tabs: [
      {
        id: 0,
        value: "全部",
        isActive: true
      },
      {
        id: 1,
        value: "待发货",
        isActive: false
      },
      {
        id: 2,
        value: "运输中",
        isActive: false
      },
      {
        id: 3,
        value: "已完成",
        isActive: false
      },
    ],

    message_list: [1, 2, 3, 4, 5]
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