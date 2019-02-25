import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//创建一个store仓库
export default new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        decrease(state) {
            state.count--;
        }
    },
    actions: {
        // context:承上启下
        increment(context) {
            setTimeout(() => {
                context.commit("increment");
            }, 0)
        },
        decrease(context) {
            setTimeout(() => {
                context.commit("decrease");
            }, 0);
        }
    },
    getters: {
        getState(state) {
            return state.count > 0 ? state.count : 0;
        }
    }
});