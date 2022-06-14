Page({
  data: {
    cateItems: [
      {
        cate_id: 1,
        cate_name: "时令水果",
        ishaveChild: true,
        children:
        [
          {
            child_id: 1,
            name: '苹果',
            image: "cloud://amper-environment-0e1sv6a1899928.616d-amper-environment-0e1sv6a1899928-1312245231/苹果.png"
          },
          {
            child_id: 2,
            name: '梨',
            image: "cloud://amper-environment-0e1sv6a1899928.616d-amper-environment-0e1sv6a1899928-1312245231/梨.png"
          },
          {
            child_id: 3,
            name: '香蕉',
            image: "cloud://amper-environment-0e1sv6a1899928.616d-amper-environment-0e1sv6a1899928-1312245231/香蕉.png"
          },
          {
            child_id: 4,
            name: '橙子',
            image: "cloud://amper-environment-0e1sv6a1899928.616d-amper-environment-0e1sv6a1899928-1312245231/橙子.png"
          }
        ]
      },
      {
        cate_id: 2,
        cate_name: "休闲零食",
        ishaveChild: true,
        children:
        [
          {
            child_id: 1,
            name: '蛋糕',
            image: "cloud://amper-environment-0e1sv6a1899928.616d-amper-environment-0e1sv6a1899928-1312245231/蛋糕.png"
          },
          {
            child_id: 2,
            name: '棒棒糖',
            image: "cloud://amper-environment-0e1sv6a1899928.616d-amper-environment-0e1sv6a1899928-1312245231/棒棒糖.png"
          },
        ]
      },
      {
        cate_id: 3,
        cate_name: "酒水乳饮",
        ishaveChild: true,
        children:
        [
          {
            child_id: 1,
            name: '啤酒',
            image: "cloud://amper-environment-0e1sv6a1899928.616d-amper-environment-0e1sv6a1899928-1312245231/啤酒.jpg"
          },
          {
            child_id: 2,
            name: '牛奶',
            image: "cloud://amper-environment-0e1sv6a1899928.616d-amper-environment-0e1sv6a1899928-1312245231/牛奶.jpg"
          },
        ]
      },
      {
        cate_id: 4,
        cate_name: "日用百货",
        ishaveChild: false,
        children: []
      }
    ],
    curNav: 1,
    curIndex: 0
  },

  //事件处理函数  
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index
    })
  }
})  