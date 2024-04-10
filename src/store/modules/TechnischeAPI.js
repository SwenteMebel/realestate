import { getFirestore, collection, onSnapshot } from 'firebase/firestore';

const db = getFirestore();
const technischeInstallatie = collection(db, 'TechnischeInstallatie') // de data TechnischeInstallatie ophalen en variable geven

export default({
    namespaced: true,

    state: {
       technisch: [],
       loadingStatus: 'notloading',
       error: [],   
    },

    mutations: {
        LOADING_STATUS(state, payload){
            state.loadingStatus = payload;
        },

        SET_DATA(state, payload){
            state.technisch = payload;
            console.log(state.technisch)
        },
        CLEAR_DATA(state){
            state.technisch = [];
        },

        SET_ERROR(state, payload){
            state.error.push(payload);
        }
    },

    actions:{
        ophalenTechnisch(context){
            
            context.commit('LOADING_STATUS', 'loading');
            
            const data = onSnapshot(technischeInstallatie, (snapshot) => {
                let technisch = [];
                snapshot.docs.forEach((doc) => {
                    technisch.push({...doc.data(), id: doc.id})
                });
                context.commit('LOADING_STATUS', 'notloading');
                context.commit('SET_DATA', technisch);
            }, error => {
                context.commit('LOADING_STATUS', 'notloading');
                context.commit('SET_DATA', [] );
                context.commit('SET_ERROR', error);
            });
            return data;
        },
    },

    modules: {
        
    },

    getters: {
    
    }
})