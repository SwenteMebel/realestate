import { createStore } from "vuex"; 



const store = createStore ({

    state: {
        user: {
          loggedIn: false,
          data: null
        }
      },

      getters: {
        user(state){
          return state.user
        }
      },

      mutations: {
        SET_LOGGED_IN(state, value) {
          state.user.loggedIn = value;
        },
        SET_USER(state, data) {
          state.user.data = data;
        }
      },

    actions: {

    },

    modules: {
        
    }
});

export default store