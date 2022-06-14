Page({
  data: {
    tabs: [
      {
        id: 0,
        value: "评价",
        isActive: true
      },
      {
        id: 1,
        value: "退款",
        isActive: false
      }
    ],
    textVal: ""
  },

  handleItemTap(e){
    const {index}=e.currentTarget.dataset;
    this.triggerEvent("tabsItemChange",{index});
  },

  handleTabsItemChange(e) {
    var { index } = 1;
    if(e.detail.x < wx.getSystemInfoSync().windowWidth/2){
      index = 0;
    }
    else{
      index = 1;
    }
    let { tabs } = this.data;
    tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
    this.setData({
      tabs
    })
  },

  handleTextInput(e) {
    this.setData({
      textVal: e.detail.value
    })
  },
 
  handleFormSubmit() {
    const { textVal } = this.data;
    if (!textVal.trim()) {
      wx.showToast({
        title: '请输入有效内容！',
        icon: 'none',
        mask: true
      });
      return;
    }
    wx.showLoading({
      title: "正在上传中",
      mask: true
    });

    wx.hideLoading();
    console.log("只是提交了文本");
    wx.navigateBack({
      delta: 1
    });
  },
})