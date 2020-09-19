import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const API_URI = 'http://localhost:2000/api/';

export const store = new Vuex.Store({
    state: {
        beerbets: [],
        users: [],
    },
    mutations: {
        setBeerbets(state, payload) {
            state.beerbets = payload;
        },
        setUsers(state, payload) {
            state.users = payload;
        }
    },
    actions: {
        getBeerbets(state) {
            fetch(API_URI + 'beerbet/').then(response => response.json()).then(result => {
                state.commit('setBeerbets', result);
            }).catch(error => {
                console.log(error);
            });
        },
        getUsers(state) {
            fetch(API_URI + 'users/').then(response => response.json()).then(result => {
                state.commit('setUsers', result);
            }).catch(error => {
                console.log(error);
            });
        }
    },
    getter: {

    }
});

// module.exports = store;