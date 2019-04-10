const config = {
  isdev:true,
  dev:{
    api:{ //  正式api
      Apply:'https://ws.guizhoubank.lingruitech.cn/VendorWebService.asmx/Apply', //  商家入驻表单
      List:'https://ws.guizhoubank.lingruitech.cn/VendorWebService.asmx/List', //  商家列表
      Detail:'https://ws.guizhoubank.lingruitech.cn/VendorWebService.asmx/Detail' //  商家详情
    },
    api_dev:{ //  测试api

    }
  }
}
module.exports = config;