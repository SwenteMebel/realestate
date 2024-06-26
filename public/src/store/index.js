import { createStore } from "vuex"; 

import schadeAPI from '@/store/modules/SchadeAPI.js'
import OnderhoudAPI from "@/store/modules/OnderhoudAPI"
import TechnischeAPI from "@/store/modules/TechnischeAPI"
import ModificatieAPI from '@/store/modules/ModificatieAPI'
import ProfielAPI from '@/store/modules/ProfielAPI'

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
        OnderhoudAPI,
        TechnischeAPI,
        ModificatieAPI,
        ProfielAPI,
    }
});

