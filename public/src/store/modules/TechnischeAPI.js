import { getFirestore, collection, onSnapshot, doc, deleteDoc } from 'firebase/firestore';

const db = getFirestore(); // verbinding met de firebase 
const technischeeInstallatie = collection(db, 'TechnischeInstallatie') // de data technischeeInstallatie ophalen en variable geven

export default({
    namespaced: true, // dit is nodig als je met modules werkt 

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
            
        },
        CLEAR_DATA(state){
            state.technische = [];
        },
        DELETE_DATA(state, itemId){
            state.technische = state.technische.filter(item => item.id !== itemId)
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


        async deleteItem(context, itemId){ // Zodra er op delete knop word gedrukt word deze functie afgespeeld
            try{
                const docDelete = doc(technischeeInstallatie, itemId); // neemt de db connectie en variable
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