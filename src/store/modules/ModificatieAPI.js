import { getFirestore, collection, onSnapshot } from 'firebase/firestore';

const db = getFirestore();
const modificatieInventaris = collection(db, 'ModificatieInventaris') // de data ModificatieInverntaris ophalen en variable geven


export default({
    namespaced: true,

    state: {
       modificatie: [],
       loadingStatus: 'notloading',
       error: [],   
    },

    mutations: {
        LOADING_STATUS(state, payload){
            state.loadingStatus = payload;
        },

        SET_DATA(state, payload){
            state.modificatie = payload;
        },
        CLEAR_DATA(state){
            state.modificatie = [];
        },

        SET_ERROR(state, payload){
            state.error.push(payload);
        }
    },

    actions:{
        ophalenModificatie(context){
            
            context.commit('LOADING_STATUS', 'loading');
            
            const data = onSnapshot(modificatieInventaris, (snapshot) => {
                let modificatie = [];
                snapshot.docs.forEach((doc) => {
                    modificatie.push({...doc.data(), id: doc.id})
                });
                context.commit('LOADING_STATUS', 'notloading');
                context.commit('SET_DATA', modificatie);
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