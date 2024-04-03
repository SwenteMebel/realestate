import { createStore } from "vuex"; 

import schadeAPI from '@/store/modules/SchadeAPI.js'

export default createStore ({

    state: {
     
    },

    getters: {
     
    },

    mutations: {
    
    },

    actions: {

    },

    modules: {
        // import files van verschillende API zoals schade opnemen etc...
        schadeAPI,
    
    }
});

