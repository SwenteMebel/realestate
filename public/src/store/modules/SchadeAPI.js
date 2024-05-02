import { getFirestore, collection, onSnapshot, deleteDoc, doc} from 'firebase/firestore';

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
            
        },
        CLEAR_DATA(state){
            state.schade = [];
        },

        REMOVE_DATA(state, itemId){
            state.schade = state.schade.filter(item => item.id !== itemId)
        },

        SET_ERROR(state, payload){
            state.error.push(payload);
        }
    },

    actions:{
        ophalenSchade(context){
            
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

        async deleteItem(context, itemId){ // Zodra er op delete knop word gedrukt word deze functie afgespeeld
            try{
                const docDelete = doc(schadeOpnemen, itemId); // neemt de db connectie en variable
                await deleteDoc(docDelete) // verwijderd de data uit firestore
                context.commit('REMOVE_DATA', itemId) // verwijderd de data uit Vuex
                alert('Schade melding is verwijderd.')
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