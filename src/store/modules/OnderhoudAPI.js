import { getFirestore, collection, onSnapshot, doc, deleteDoc  } from 'firebase/firestore';

const db = getFirestore();
const achterStallig = collection(db, 'AchterstalligOnderhoud');

export default({
    namespaced: true,

    state: {
       onderhoud: [],
       loadingStatus: 'notloading',
       error: [],   
    },

    mutations: {
        LOADING_STATUS(state, payload){
            state.loadingStatus = payload;
        },

        SET_DATA(state, payload){
            state.onderhoud = payload;
        },
        CLEAR_DATA(state){
            state.onderhoud = [];
        },
        REMOVE_DATA(state, itemId){
            state.onderhoud = state.onderhoud.filter(item => item.id !== itemId)
        },
        SET_ERROR(state, payload){
            state.error.push(payload);
        }
    },

    actions:{
        ophalenOnderhoud(context){
            
            context.commit('LOADING_STATUS', 'loading');
            
            const data = onSnapshot(achterStallig, (snapshot) => {
                let onderhoud = [];
                snapshot.docs.forEach((doc) => {
                    onderhoud.push({...doc.data(), id: doc.id})
                });
                context.commit('LOADING_STATUS', 'notloading');
                context.commit('SET_DATA', onderhoud);
            }, error => {
                context.commit('LOADING_STATUS', 'notloading');
                context.commit('SET_DATA', [] );
                context.commit('SET_ERROR', error);
            });
            return data;
        },

        async deleteItem(context, itemId){
            try{
                const docDelete = doc(achterStallig, itemId)
                await deleteDoc(docDelete)
                context.commit('REMOVE_DATA', itemId)
                console.log('Onderhoud melding is verwijderd')
            } catch (error){
                console.log(error)
            }
        }
    },

    modules: {
        
    },

    getters: {
    
    }
})