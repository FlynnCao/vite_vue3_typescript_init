import { createStore } from "vuex"

export default createStore({
	state: {
		count: 0
	},
	mutations: {
		setCount(state, count) {
			state.count = count
		}
	},
	actions: {
		getCount({ commit }, count) {
			commit('setCount', count)
		}
	}
})
