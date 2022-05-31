# 农产品销售中心

<p align="right">v 1.0.2</p>

<p align="right">By 1913064 陈志纯</p>

### 1. 小程序简介

​	该小程序为2022微信小程序应用开发赛参赛作品，选题为【农产品销售消息平台】



### 2. 需求背景

​	目前的农民收入中，经营性收入占30%多一点，务工收入占45%左右，家庭经营收入主要靠农产品销售，通过电商销售农产品成为农民增收的一个亮点。在实际电商销售过程中，对于农产品的规模、物流、品控都有较高的标准和要求，这对于一般农户、或者刚起步的创业者来说很困难。希望有一些结合当地旅游、美食相关的小程序，让游客查询到当地土特农产品，去到原产地边游玩边购买；也可以填写在当地临时住址，方便农户们送货上门。



### 3.目标产品

​	打造一个便民利民的农产品购物平台，实现一般的网络购物平台具有的功能。支持帐号登录体系、农产品展示、简单客服咨询、用户交易系统、配套管理端、支持搜索等功能。



### 4.已实现功能

- 支持搜索，可按名称、类型、价格等进行检索。
- 支持农产品展示，包括图片、文字、数量、价格等信息。
- 帐号登录体系，支持帐号登录、切换、注销等。
- 支持订阅消息提醒。
- 云存储及云函数的实现。



### 5.待实现功能

1. 简单客服咨询，双方可进行交流，支持文本、图片、音频、视频、文件传输。
2. 支持交易功能，用户可进行下单交易。
3. 配套管理端，农户可便捷开通店铺，上架农产品、对订单做处理等。
4. 支持订单评价、退款等。



### 6.技术实现方案

1. 前端首页加入了搜索栏和轮播图，小程序底部固定了索引栏，可以通过底部索引跳转到各个界面。

![image-20220531202813492](C:\Users\50470\AppData\Roaming\Typora\typora-user-images\image-20220531202813492.png)



2. 由于农产品商店的运行需要大量的数据下载与上传，保存大量图片到小程序内会导致小程序运行过慢，用户等待时间长等一系列问题，所以我们将大量商品信息和图片保存在云端，采用云存储、云函数等方法调用所需数据，在保证小程序运行流畅的同时又缩小了程序大小。

   ![image-20220531203709786](C:\Users\50470\AppData\Roaming\Typora\typora-user-images\image-20220531203709786.png)



3. 程序在调用微信开发工具内置的`wx.if`、`wx.else`等一系列函数。确保用户在不同登录状态下有不同的界面显示。

   ![image-20220531204402948](C:\Users\50470\AppData\Roaming\Typora\typora-user-images\image-20220531204402948.png)

   

   