var kd = Vue.extend({
    template: '#tpl_two',
    data: function() {
    	return {
			todos:[
				{
					hrefUrl: 'http://m.kuaidi100.com',
					imgurl: 'assets/courier_search.png',
					text: '查询快递'
				}, 
				{
					hrefUrl: 'http://m.kuaidi100.com/time/',
					imgurl: 'assets/courier_time.png',
					text: '时效查询'
				},
				{
					hrefUrl: 'http://m.kuaidi100.com/ucdaohang/',
					imgurl: 'assets/courier_sen.png',
					text: '网上寄件'
				}
			]
		}
    }
});