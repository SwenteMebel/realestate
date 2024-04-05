import { getFirestore, collection, onSnapshot } from 'firebase/firestore';

const db = getFirestore();
const schadeOpnemen = collection(db, 'SchadeOpnemen');

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
        ophalenSchade(context){
            console.log('ophalenSchade API is aan het laden.')
            context.commit('LOADING_STATUS', 'loading');
            
            const data = onSnapshot(schadeOpnemen, (snapshot) => {
                let schade = [];
                snapshot.docs.forEach((doc) => {
                    schade.push({...doc.data(), id: doc.id})
                });
                context.commit('LOADING_STATUS', 'notloading');
                context.commit('SET_DATA', schade);
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