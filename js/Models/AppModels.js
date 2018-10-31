import{
	CLICK_TABBAR//主页点击tabbar
}  from 'js/Constants/ActionTypes'
import Immutable from 'immutable';

export default {
	namespace: 'app',
	state: Immutable.fromJS({
		tabIndex:1
	}),
	reducers: {
		/** 主页点击tabbar*/
		[CLICK_TABBAR](state, {payload}) {
			return state.set('tabIndex', payload);
		},
	},
	effects: {

	},
}