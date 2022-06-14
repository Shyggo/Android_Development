Page({
 cleanhistory: function(e) {
    this.setData({
      history: false,
      historyArray: [],
      newArray: [],
      shoopingtext: ""
    })
  },
  
  search: function(e) {
    var searchtext = this.data.shoopingtext;
    var sss = true;
    if (searchtext != "") {
      this.data.historyArray.push(searchtext);
      for (var index in this.data.shoopingarray) {
        var num = this.data.shoopingarray[index].title.indexOf(searchtext);
        let temp = 'shoopingarray[' + index + '].status';
        if (num != -1) { 
          this.setData({
            [temp]: 1,
          })
          sss = false
        }
      }
      this.setData({
        history: false,
        noneview: sss,
        shoppinglist: true,
        newArray: this.data.historyArray
      })
    } else {
      this.setData({
        noneview: true,
        shoppinglist: false,
        history: false,
      })
    }
  },
  data: {
    shoopingtext: "",
    history: false,
    noneview: false,
    shoppinglist: false,
    historyArray: [],
    newArray: [],
    shoopingarray: [{
      id: 0,
      images: "cloud://amper-environment-0e1sv6a1899928.616d-amper-environment-0e1sv6a1899928-1312245231/苹果.png",
      title: "苹果",
      money: "5",
      sold: "78",
      status: 0
    }, {
      id: 1,
      images: "cloud://amper-environment-0e1sv6a1899928.616d-amper-environment-0e1sv6a1899928-1312245231/香蕉.png",
      title: "香蕉",
      money: "6",
      sold: "34",
      status: 0
    }, {
      id: 2,
      images: "cloud://amper-environment-0e1sv6a1899928.616d-amper-environment-0e1sv6a1899928-1312245231/梨.png",
      title: "梨",
      money: "6",
      sold: "66",
      status: 0
    }, {
      id: 3,
      images: "cloud://amper-environment-0e1sv6a1899928.616d-amper-environment-0e1sv6a1899928-1312245231/橙子.png",
      title: "橙子",
      money: "9",
      sold: "12",
      status: 0
    }, {
      id: 4,
      images: "cloud://amper-environment-0e1sv6a1899928.616d-amper-environment-0e1sv6a1899928-1312245231/西瓜.jpg",
      title: "西瓜",
      money: "3",
      sold: "86",
      status: 0
    }, {
      id: 5,
      images: "cloud://amper-environment-0e1sv6a1899928.616d-amper-environment-0e1sv6a1899928-1312245231/木瓜.jpg",
      title: "木瓜",
      money: "10",
      sold: "23",
      status: 0
    }, {
      id: 6,
      images: "cloud://amper-environment-0e1sv6a1899928.616d-amper-environment-0e1sv6a1899928-1312245231/蛋糕.png",
      title: "蛋糕",
      money: "20",
      sold: "63",
      status: 0
    }, {
      id: 7,
      images: "cloud://amper-environment-0e1sv6a1899928.616d-amper-environment-0e1sv6a1899928-1312245231/棒棒糖.png",
      title: "棒棒糖",
      money: "4",
      sold: "42",
      status: 0
    }, {
      id: 8,
      images: "cloud://amper-environment-0e1sv6a1899928.616d-amper-environment-0e1sv6a1899928-1312245231/啤酒.jpg",
      title: "啤酒",
      money: "5",
      sold: "22",
      status: 0
    }, {
      id: 9,
      images: "cloud://amper-environment-0e1sv6a1899928.616d-amper-environment-0e1sv6a1899928-1312245231/牛奶.jpg",
      title: "牛奶",
      money: "3.5",
      sold: "102",
      status: 0
    }
  ]
  },

  shoppinginput: function(e) {
    if (e.detail.value == "") {
      this.setData({
        history: true,
        shoppinglist: false,
        noneview: false
      });
      for (var index in this.data.shoopingarray) {
        let temp = 'shoopingarray[' + index + '].status';
        this.setData({
          [temp]: 0,
        })
      }
    }
    this.setData({
      shoopingtext: e.detail.value
    })
  },
  textfz: function(e) {
    this.setData({
      shoopingtext: e.target.dataset.text
    })
  }
})