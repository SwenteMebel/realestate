import { getFirestore, collection, onSnapshot, doc, deleteDoc  } from 'firebase/firestore';

const db = getFirestore();
const profileUsers = collection(db, 'profielUsers');

export default({
    namespaced: true,

    state: {
       profiel: [],
       loadingStatus: 'notloading',
       error: [], 
       getProfiel: [],  
    },

    mutations: {
        LOADING_STATUS(state, payload){
            state.loadingStatus = payload;
        },

        SET_DATA(state, payload){
            state.profiel = payload;
        },
        CLEAR_DATA(state){
            state.profiel = [];
        },
        REMOVE_DATA(state, itemId){
            state.profiel = state.profiel.filter(item => item.id !== itemId)
        },
        GET_SINGLE_USER(state, userId){
            console.log(' user id word gezoht ',userId)
            const user =  state.profiel.find(user => user.id === userId)
            state.getProfiel = user ? user : 'geen user gevonden';
        },
        SET_ERROR(state, payload){
            state.error.push(payload);
        }
    },

    actions:{
        ophalenProfiel(context){
            
            context.commit('LOADING_STATUS', 'loading');
            
            const data = onSnapshot(profileUsers, (snapshot) => {
                let profile = [];
                snapshot.docs.forEach((doc) => {
                    profile.push({...doc.data(), id: doc.id})
                   
                });
                console.log(profile)
                context.commit('LOADING_STATUS', 'notloading');
                context.commit('SET_DATA', profile);
            }, error => {
                context.commit('LOADING_STATUS', 'notloading');
                context.commit('SET_DATA', [] );
                context.commit('SET_ERROR', error);
            });
            return data;
        },

        async deleteProfiel(context, itemId){
            try{
                const docDelete = doc(profileUsers, itemId)
                await deleteDoc(docDelete)
                context.commit('REMOVE_DATA', itemId)
                console.log('Profiel is verwijderd')
            } catch (error){
                console.log(error)
            }
        },

        GetUser(context, userId){
            try{
                context.commit('GET_SINGLE_USER', userId)
                console.log('GetUser functie in Try ', context.state.getProfiel)
            } catch (error) {
                console.log(error)
            }
        },
    },

    modules: {
        
    },

    getters: {
    
    }
})