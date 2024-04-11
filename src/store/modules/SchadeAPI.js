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


        async deleteItem(itemId){
            try{
                console.log('delete knop in API call ' + itemId)
                const docDelete = doc(db, schadeOpnemen, itemId);
                await deleteDoc(docDelete)
                alert('delete geslaagd')
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