import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== "production",
    state: {
        count: 0
    },
    getters: {
        doubleCount: function (state) {
            // console.log(state)
            // console.log(process.env.NODE_ENV)
            return state.count * 2
        },
        addCount: function (state) {
            return function (num) {
                return state.count + num
            }
        }
    },
    mutations: {
        countIncrement (state, num) {
            console.log(state, num)
            state.count += num
        }
    },
    actions: {
        actions: function () { 
            
        }
    }
})