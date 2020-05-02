import Vue from 'vue'
import App from './App.vue'

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
	'assessment'
]

new Vue({
  render: h => h(App),
}).$mount('#app')
