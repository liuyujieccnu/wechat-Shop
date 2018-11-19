// pages/detail/detail.js
const qcloud = require('../../vendor/wafer2-client-sdk/index.js');
const config = require('../../config.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    productID:"",
    imageAddress:"",
    productName:"",
    productPrice:"",
    productSource:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      productID:options.id,
    });
    this.getProductDetail();
  },
  /**
   * 获取商品详情信息
   */
  getProductDetail(){
    wx.showLoading({
      title: '商品数据加载中',
    });
    qcloud.request({
      url: `${config.service.productList}/${this.data.productID}`,
      success: result => {
        wx.hideLoading();
        if (!result.data.code) {
          //console.log(result.data.data);
          wx.setNavigationBarTitle({
            title: result.data.data.name,
          });
          this.setData({
            imageAddress: result.data.data.image,
            productName: result.data.data.name,
            productPrice: result.data.data.price,
            productSource: result.data.data.source,
          });
        } else {
          setTimeout(() => {
            wx.navigateBack();
          }, 2000);
        }
      },
      fail: result => {
        setTimeout(() => {
          wx.navigateBack();
        }, 2000);
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})