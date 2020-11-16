import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

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
        },
        updateBeerbets(state, payload) {
            state.beerbet.push(payload);
            console.log('Detta är payloaden', payload.data);
        }
    },
    actions: {
        getBeerbets(state) {
            fetch(API_URI + 'beerbet/').then(response => response.json()).then(result => {
                state.commit('setBeerbets', result);
            }).catch(error => {
                console.error(error);
            });
        },
        getUsers(state) {
            fetch(API_URI + 'users/').then(response => response.json()).then(result => {
                state.commit('setUsers', result);
            }).catch(error => {
                console.error(error);
            });
        },
        postBeerbet(state, beerbet) {
            console.log(beerbet);
            axios.post(API_URI + 'beerbet/', {beerbet})
                .then(result => {
                    console.log(result);
                    state.commit('updateBeerbets', result);
                })
                .catch(error => console.error(error));
        },
    },
    getter: {

    }
});

// module.exports = store;