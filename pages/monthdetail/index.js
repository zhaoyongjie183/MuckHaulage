// pages/monthdetail/index.js
import * as echarts from '../../ec-canvas/echarts';
var util = require("../../utils/util.js")

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    color: ["#37A2DA", '#32c5e9', '#67e0e3'],
    grid: {
      containLabel: true
    },
    tooltip: {
      show: true,
      trigger: 'axis'
    },
    dataZoom: [
      {
        id: 'dataZoomX',
        type: 'slider',
        xAxisIndex: [0],
        filterMode: 'weakFilter',
        maxValueSpan:6,

      }
    ],
    xAxis: {
      type: 'category',
      boundaryGap: true,
      data: ['7-1', '7-2', '7-3', '7-4', '7-5', '7-6', '7-7', '7-8', '7-9', '7-10', '7-11', '7-12', '7-13', '7-14', '7-15', '7-16', '7-17', '7-18', '7-19', '7-20', '7-21', '7-22', '7-23', '7-24', '7-25', '7-26', '7-27', '7-28', '7-29', '7-30', '7-31'],
      axisLabel: {
        interval: 0
      }
    },
    yAxis: {
      x: 'center',
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'solid'
        }
      },
      axisLabel: {
        fontWeight: 'bold'
      }
    },
    series: [{
      type: 'line',
      smooth: true,
      data: [18, 36, 65, 30, 78, 40, 33, 18, 36, 65, 30, 78, 40, 33, 18, 36, 65, 30, 78, 40, 33, 18, 36, 65, 30, 78, 40, 33, 33, 18, 36, 65, 30, 78, 40, 33],
      itemStyle: {
        normal: {
          label: {
            show: true
          },
          borderColor: '#ff0000',
          color: '#FF0000'
        }
      }
    }, ]
  };

  chart.setOption(option);
  return chart;
}
Page({

  /**
   * 页面的初始数据
   */
  data: {

    datestr: util.formatDateStr(new Date()),
    ec: {
      onInit: initChart
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

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