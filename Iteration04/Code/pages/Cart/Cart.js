Page({
  data: {
    isAllSelect:false,
    totalMoney:0,
    // 商品详情介绍
    carts: [
      {
        pic: "cloud://amper-environment-0e1sv6a1899928.616d-amper-environment-0e1sv6a1899928-1312245231/苹果.png",
        name:"农家苹果",
        price:5,
        isSelect:false,
        // 数据设定
        count: {
          quantity: 2,
          min: 1,
          max: 20
        },
      },
      {
        pic: 'cloud://amper-environment-0e1sv6a1899928.616d-amper-environment-0e1sv6a1899928-1312245231/梨.png',
        name: "农家梨",
        price: 6,
        isSelect: false,
        // 数据设定
        count: {
          quantity: 1,
          min: 1,
          max: 20
        },
      },
      {
        pic: 'cloud://amper-environment-0e1sv6a1899928.616d-amper-environment-0e1sv6a1899928-1312245231/香蕉.png',
        name: "农家香蕉",
        price: 6,
        isSelect: false,
        // 数据设定
        count: {
          quantity: 3,
          min: 1,
          max: 20
        },
      },
      {
        pic: 'cloud://amper-environment-0e1sv6a1899928.616d-amper-environment-0e1sv6a1899928-1312245231/橙子.png',
        name: "橙子",
        price: 9,
        isSelect: false,
        // 数据设定
        count: {
          quantity: 1,
          min: 1,
          max: 20
        },
      },
      {
        pic: 'cloud://amper-environment-0e1sv6a1899928.616d-amper-environment-0e1sv6a1899928-1312245231/西瓜.jpg',
        name: "农家瓜",
        price: 3,
        isSelect: false,
        // 数据设定
        count: {
          quantity: 10,
          min: 1,
          max: 20
        },
      },
      {
        pic: "cloud://amper-environment-0e1sv6a1899928.616d-amper-environment-0e1sv6a1899928-1312245231/木瓜.jpg",
        name: "木瓜",
        price: 10,
        isSelect: false,
        // 数据设定
        count: {
          quantity: 1,
          min: 1,
          max: 20
        },
      },
    ],
  },
 
  //勾选事件处理函数  
  switchSelect: function (e) {
    // 获取item项的id，和数组的下标值  
    var Allprice = 0,i=0;
    let id = e.target.dataset.id,
  
    index = parseInt(e.target.dataset.index);
    this.data.carts[index].isSelect = !this.data.carts[index].isSelect;
    //价钱统计
    if (this.data.carts[index].isSelect) {
      this.data.totalMoney = this.data.totalMoney + this.data.carts[index].price;
    }
    else {
      this.data.totalMoney = this.data.totalMoney - this.data.carts[index].price;
    }
   //是否全选判断
    for (i = 0; i < this.data.carts.length; i++) {
      Allprice = Allprice + this.data.carts[i].price;
    }
    if (Allprice == this.data.totalMoney)
    {
      this.data.isAllSelect=true;
    }
    else 
    {
      this.data.isAllSelect = false;
    }
    this.setData({
      carts: this.data.carts,
      totalMoney: this.data.totalMoney,
      isAllSelect: this.data.isAllSelect,
    })
  },
  //全选
  allSelect: function (e) {
    //处理全选逻辑
    let i = 0;
    if (!this.data.isAllSelect)
    {
      for (i = 0; i < this.data.carts.length; i++) {
        this.data.carts[i].isSelect = true;
        this.data.totalMoney = this.data.totalMoney + this.data.carts[i].price;
      }
    }
    else
    {
      for (i = 0; i < this.data.carts.length; i++) {
        this.data.carts[i].isSelect = false;
      }
      this.data.totalMoney=0;
    }
    this.setData({
      carts: this.data.carts,
      isAllSelect: !this.data.isAllSelect,
      totalMoney: this.data.totalMoney,
    })
  },
  // 去结算
  toBuy() {
    wx.showToast({
      title: '去结算',
      icon: 'success',
      duration: 3000
    });
    this.setData({
      showDialog: !this.data.showDialog
    });
  },
  //数量变化处理
  handleQuantityChange(e) {
    var componentId = e.componentId;
    var quantity = e.quantity;
    this.data.carts[componentId].count.quantity = quantity;
    this.setData({
      carts: this.data.carts,
    });
  }
});