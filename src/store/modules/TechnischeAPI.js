import { getFirestore, collection, onSnapshot } from 'firebase/firestore';

const db = getFirestore();
const technischeeInstallatie = collection(db, 'technischeeInstallatie') // de data technischeeInstallatie ophalen en variable geven

export default({
    namespaced: true,

    state: {
       technische: [],
       loadingStatus: 'notloading',
       error: [],   
    },

    mutations: {
        LOADING_STATUS(state, payload){
            state.loadingStatus = payload;
        },

        SET_DATA(state, payload){
            state.technische = payload;
            console.log(state.technische)
        },
        CLEAR_DATA(state){
            state.technische = [];
        },

        SET_ERROR(state, payload){
            state.error.push(payload);
        }
    },

    actions:{
        ophalentechnische(context){
            
            context.commit('LOADING_STATUS', 'loading');
            
            const data = onSnapshot(technischeeInstallatie, (snapshot) => {
                let technische = [];
                snapshot.docs.forEach((doc) => {
                    technische.push({...doc.data(), id: doc.id})
                });
                context.commit('LOADING_STATUS', 'notloading');
                context.commit('SET_DATA', technische);
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