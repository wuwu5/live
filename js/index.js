
var Index = Vue.extend({
    template: '#tpl_one',
    data: function() {
    	return {
			todos:[
				{hrefUrl: '/phone',imgurl: 'assets/phone.png',text: '手机服务'}, 
				{hrefUrl: '/car',imgurl: 'assets/lickedCar.png',text: '爱车服务'},
				{hrefUrl: '/bank',imgurl: 'assets/bank.png',text: '银行卡服务'},
				{hrefUrl: '/kd',imgurl: 'assets/courier.png',text: '快递服务'},
				{hrefUrl: '/',imgurl: 'assets/property.png',text: '物业服务'}
			]
		}
    }
});