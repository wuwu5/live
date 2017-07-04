var Car = Vue.extend({
    template: '#tpl_two',
    data: function() {
    	return {
			todos:[
				{
					hrefUrl: 'http://m.autohome.com.cn/',
					imgurl: 'assets/car.png',
					text: '汽车'
				}, 
				{
					hrefUrl: 'http://h5.edaijia.cn/app/index.html',
					imgurl: 'assets/car_dj.png',
					text: '代驾'
				}
			]
		}
    }
});