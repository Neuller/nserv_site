import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        alturaCabecalho: null
    },
    mutations: {
        alturaCabecalho: (state, params) => {
            localStorage.setItem("alturaCabecalho", params.alturaCabecalho);
            state.alturaCabecalho = params.alturaCabecalho;
        }
    },
    actions: {

    }
});