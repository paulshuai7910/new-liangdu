import Config from "./apis.js";

function Request(params, option) {
	let _params = {
		key: params.key,//对应json配置的可以
		header: params.header || { 'content-type': 'application/x-www-form-urlencoded' },//设置请求的 header，header 中不能设置 Referer。
		method: params.method || 'POST',//请求的类型,默认POST， 如果是GET方式，需要参数设置
		data: params.data || null,//提交参数
		loading: params.loading || true,//当前请求是否需要loading
		dataType: params.dataType || 'json',//返回的数据格式
		url: params.url || null,//可单独传递url， 不传递默认通过以上key值去获取
		urlParams:params.urlParams||null,//url后面的参数，执行入口拼接好后传入
		responseType: params.responseType || 'text',//设置响应的数据类型。合法值：text、arraybuffer		
		isApiStatus: params.isApiStatus || false,//默认处理json返回状态不成功
		isDev: params.isDev || false,//本地开发环境下使用生产模式请求
		supplier: params.supplier || "none"//开发来源识别
	}
	_params.keyName = _params.key;
	_request(_params, option);
};
//开始请求
function _request(params, option) {
	//初始化参数
	let loading = params.loading || null;
	let url = params.url || _getApiUrl(params);
	//显示loading
	if (loading) { wx.showLoading({ title: '加载中...', mask: true }) };
	console.log("@request-params:","key=", params.key, params);
	//console.log("@request-option:","key=", params.key, option);
	//本地数据处理
	if (Config.isFile && !params.isDev) {
		setTimeout(function(){
			_requestSuccessResult(require(url), params, option);
		},250);
		return;
	};
	//正式环境处理
	wx.request({
		url: params.urlParams?url+params.urlParams:url, //仅为示例，并非真实的接口地址
		data: params.data,
		header: params.header,
		method: params.method,
		dataType: params.dataType,
		responseType: params.responseType,
		complete: res => {
			if (option.complete) option.complete();
			if (res.statusCode&&res.statusCode == 200) {
				//通过拦截
				if (res.data && res.data.code != 1) {
					if (option.fail) {
						option.fail(res.data);
						return;
					}
					wx.showToast({
						title: res.data.errmsg,
						icon: "none"
					});
					return;
				}
				_requestSuccessResult(res.data, params, option);
			}else{
				wx.showToast({
					title: "数据异常:" + res.errMsg,
					icon: "none"
				});
				_requestEnd(params.loading);
			}
		}
	})
};
function _requestSuccessResult(resData, params, option) {
	//取消锁定和loading
	_requestEnd(params.loading);
	//接口成功传回路径处理
	console.log("@request-data:", "key=", params.keyName, resData);
	//成功
	if (option.success) option.success(resData, params, 'success');
};
function _requestEnd(loading) {
	//关闭loading
	if (loading) { wx.hideLoading(); }
};
//配置api的来源
function _getApiUrl(params) {
	return Config.isFile && !params.isDev ? Config.file.root+Config.file.api[params.key] : Config.dev.root+Config.dev.api[params.key];
};

export default Request;