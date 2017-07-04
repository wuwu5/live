var Bank = Vue.extend({
    template: '#tpl_two',
    data: function() {
    	return {
			todos:[
				{
					hrefUrl: 'http://wap.boc.cn/',
					imgurl: 'assets/bank_china.png',
					text: '中国银行'
				}, 
				{
					hrefUrl: 'http://m.icbc.com.cn/icbc/default1.htm',
					imgurl: 'assets/bank_icbc.png',
					text: '中国工商银行'
				},
				{
					hrefUrl: 'http://m.abchina.com/touch/',
					imgurl: 'assets/bank_abc.png',
					text: '中国农业银行'
				},
				{
					hrefUrl: 'http://m.ccb.com/cn/mobile/index.html',
					imgurl: 'assets/bank_ccb.png',
					text: '中国建设银行'
				},
				{
					hrefUrl: 'https://wap.95559.com.cn/mbankView/index.jsp',
					imgurl: 'assets/bank_bocom.png',
					text: '交通银行'
				}
			]
		}
    }
});