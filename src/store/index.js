import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const createStore = () => {
	return new Vuex.Store({
		state: {
			fileName: 'new_bank'
		},
		mutations: {
			SET_FILENAME( state, name ) {
				state.fileName = name
			}
		},
		actions: {
			setFilename ( context, name ) {
				context.commit( 'SET_FILENAME', name )
			}
		},
		getters: {
			getFilename ( state ) {
				return state.fileName 
			}
		}
	})
}

export default createStore