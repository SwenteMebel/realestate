import axios from 'axios'; 

import { getFirestore, collection } from 'firebase/firestore';

    
const db = getFirestore(); // connectie met de database firestore

const schadeOpnemen = collection(db, 'SchadeOpnemen'); // de data SchadeOpnemen ophalen en een variable geven.

export default({
    namespaced: true,

    state: {
       schade: [],
       loadingStatus: 'notloading',
       error: [],

       
    },

    mutations: {
        LOADING_STATUS(state, payload){
            state.loadingStatus = payload;
        },

        SET_DATA(state, payload){
            state.schade = payload;
            console.log(state.schade)
        },
        CLEAR_DATA(state){
            state.schade = [];
        },

        SET_ERROR(state, payload){
            state.error.push(payload);
        }


    },

    actions:{
        async ophalenSchade(context){
            console.log('ophalenSchade API is aan het laden.')
            context.commit('LOADING_STATUS', 'loading');
            
            
            try {
                const result = await axios.get(schadeOpnemen);
                context.commit('LOADING_STATUS', 'notloading');
                context.commit('SET_DATA', result.data);
            } catch (err) {
                context.commit('LOADING_STATUS', 'notloading');
                context.commit('SET_DATA', [] );
                context.commit('SET_ERROR', err)
            }
            
        },
    },

    modules: {
        
    },

    getters: {
    
    }

})