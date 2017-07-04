
var routes = [
	{ path:'/', component: Index },
	{ path:'/bank', component: Bank },
	{ path:'/phone',component: Phone },
	{ path:'/car', component: Car },
	{ path:'/kd',component: kd },
]

var router = new VueRouter({
	routes
})

var mapTitle = {
	'/phone': '手机服务',
	'/car': '爱车服务',
	'/bank': '银行卡服务',
	'/kd': '快递服务',
	'/': '生活'
}

router.beforeEach((to, from, next) => {

	if(app) {
		app.titleText = mapTitle[to.path];

		to.path === '/' ? app.backText = '' : app.backText = '生活';
	}

	// app && 
		

	//app.titleText = mapTitle[to.path]

  // if(to.path == '/phone') {
  // 	app.titleText = '手机服务';
  // 	app.backText = '生活';
  // } else if(to.path == '/car') {
  // 	app.titleText = '爱车服务';
  // 	app.backText = '生活';
  // }else if(to.path == '/bank') {
  // 	app.titleText = '银行卡服务';
  // 	app.backText = '生活';
  // }else if(to.path == '/kd') {
  // 	app.titleText = '快递服务';
  // 	app.backText = '生活';
  // }else if(to.path == '/' && app) {
  // 	app.titleText = '生活';
  // 	app.backText = '';
  // }

 	 next();

  
})

var app = new Vue({
	router,
	data() {
		return {
			backText: '',
			titleText: '生活'
		}
	}
}).$mount('#app')