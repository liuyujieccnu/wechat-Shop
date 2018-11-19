// pages/home/home.js
const qcloud = require('../../vendor/wafer2-client-sdk/index.js');
const config=require('../../config.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    productList: [], // 商品列表
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getProductList();

  },

  /**
   * 获取商品列表函数
   */
  getProductList() {
    wx.showLoading({
      title: '商品数据加载中',
    });
    qcloud.request({
      url: config.service.productList,
      success: result => {
        wx.hideLoading();
        if (!result.data.code) {
          this.setData({
            productList: result.data.data,
          });
        } else {
          wx.showToast({
            title: '商品数据加载失败',
          });
        }
      },
      fail: result => {
        wx.hideLoading();
        wx.showToast({
          title: '商品数据加载失败',
        });
      }
    });
  },
  /**
   * 点击进入商品详情
   * 注：可以使用navigator直接挑战，所以注释
   */
  // onTapProductDetail:function(event){
  //   //console.log(event.target.id);
  //   if (event.target.id.split('-')[1] === 'image' || event.target.id.split('-')[1] === 'name'){
  //     wx.navigateTo({
  //       url: `/pages/detail/detail?id=${event.target.id.split('-')[0]}`,
  //     });
  //   }
  // },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})