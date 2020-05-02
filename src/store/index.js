import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const createStore = () => {
	return new Vuex.Store({
		state: {
			json: ''
		},
		mutations: {
			SET_JSON( state, json ) {
				state.json = json
			}
		},
		actions: {
			setJSON ( context, json ) {
				context.commit( 'SET_JSON', json )
			}
		},
		getters: {
			getJSON ( state ) {
				return state.json 
			}
		}
	})
}

export default createStore