var Phone = Vue.extend({
    template: '#tpl_two',
    data: function() {
    	return {
			todos:[
				{
					hrefUrl: 'http://h5.m.taobao.com/app/cz/cost.html?denom=50&clientSource=ucbrowser',
					imgurl: 'assets/phone_recharge.png',
					text: '话费充值'
				}, 
				{
					hrefUrl: 'http://3g.ganji.com/bj_shumashoujiweixiu/?url=shoujiweixiu&ca_source=other_m.sm.com_list_2',
					imgurl: 'assets/phone_maintain.png',
					text: '手机维修'
				},
				{
					hrefUrl: 'http://3g.ganji.com/tj_shouji/?ifid=v3_secondmarket_categorylist_shoujim',
					imgurl: 'assets/phone_recycle.png',
					text: '手机回收置换'
				}
			]
		}
    }
});