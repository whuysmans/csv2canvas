import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from './store'

Vue.use(Vuex)


Vue.config.productionTip = false
Vue.config.ignoredElements = [
	'item',
	'itemmetadata',
	'qtimetadata',
	'qtimetadatafield',
	'fieldlabel',
	'fieldentry',
	'presentation',
	'material',
	'mattext',
	'response_lid',
	'render_choice',
	'response_label',
	'resprocessing',
	'outcomes',
	'decvar',
	'respcondition',
	'conditionvar',
	'varequal',
	'setvar',
	'questestinterop',
	'assessment',
	'not',
	'and',
	'response_str',
	'render_fib'
]

new Vue({
	store,
	render: h => h(App),
}).$mount('#app')
