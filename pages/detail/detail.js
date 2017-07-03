const App = getApp();
import WxParse from '../../utils/wxParse/wxParse';
Page({
  data: {
    type: '',
    id: '',
    list: [],
    item: {},
  },
  onLoad: function(option) {
    this.setData({
      type: option.type,
      id: option.id,
      list: App.cars[option.type].items,
    });
    this.getDetail();
    this.parserTag();
  },

  getDetail() {
    var list = this.data.list;
    var self = this;
    for (var i = 0; i < list.length; i++) {
      if (list[i].info.id === this.data.id) {
        self.setData({
          item: list[i],
        });
      }
    }
  },

  parserTag(){
     WxParse.wxParse('detail', 'html', this.data.item.detail, this);
  }
});
