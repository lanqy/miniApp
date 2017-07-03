const App = getApp();

Page({
  data: {
    navs: [
      {
        name: '中',
        key: 'guochan',
      },
      {
        name: '日',
        key: 'riben',
      },
      {
        name: '德',
        key: 'deguo',
      },
        {
          name: '法',
          key: 'faguo',
        },
        {
          name: '意',
          key: 'yidali',
        },
        {
          name: '英',
          key: 'yingguo',
        },
        {
          name: '美',
          key: 'meiguo',
        },
        {
          name: '韩',
          key: 'hanguo',
        },
        {
          name: '其',
          key: 'qita',
        }
    ],
    list: [],
    activeType: 'guochan',
  },
  onLoad() {
    this.initData();
    this.getSystemInfo();
  },

  initData(){
    this.setData({
      list: App.cars[this.data.activeType],
    });
  },

  switchTap(e) {
    const dataset = e.currentTarget.dataset;
    const type = dataset.id;
    this.setData({
      activeType: type,
      list: App.cars[type],
    });
  },

  navigateTo(e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/detail/detail?type=' + this.data.activeType + '&id=' + id,
    });
  },

  onRefreshLives(e) {
    console.log('下拉加载。。。');
  },

  getMoreLives(e) {
    console.log('加载更多。。。');
  },

  getSystemInfo() {
    var self = this;
    wx.getSystemInfo({
      success: function(data) {
        self.setData({
          deviceWidth: data.windowWidth,
          deviceHeight: data.windowHeight,
        });
      },
    });
  },
  onReachBottom() {
    console.info('onReachBottom');
  },
});
