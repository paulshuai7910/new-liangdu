const ul = require('../utils/uploadlog.js');
export class TemplateEntity {
  constructor(o) {
    if (o.TemplateKey == 'shop7') {
      this.key='diy';
      this.id = o.TemplateData.Id;
      this.content = JSON.parse(o.TemplateData.DivContent);
      this.config = JSON.parse(o.TemplateData.DiyContentConfig);
      this.pageConfig = JSON.parse(o.TemplateData.PageConfig);
      this.title = o.TemplateData.PageTitle;
      this.shareImg = o.TemplateData.ShareImg;
      this.shareTitle = o.TemplateData.ShareTitle;
    } else if (o.TemplateKey == 'shop6'){
      this.key = 'tackout';
      this.tplKey = o.TemplateKey;
      this.content = o.TemplateData.HomeContents;
      this.title = o.TemplateData.StoreName;
      this.feature = o.TemplateData.ShopFeature;
    }else{
      this.key = 'basics';
      this.tplKey = o.TemplateKey;
      this.content = o.TemplateData.HomeContents;
      this.title = o.TemplateData.StoreName;
      this.feature = o.TemplateData.ShopFeature;
    }
  }
}