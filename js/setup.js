import React, {Component} from 'react';

import App from 'js/App';
import dva from 'js/Utils/Dva';
import models from 'js/Models';

const setupDva = dva({
	initialState: {},
	models: models,
	onError(e) {
		console.log('onError', e)
	},
})
let store = setupDva.getStore()
const setup = setupDva.start(<App store={store}/>)

export default setup;