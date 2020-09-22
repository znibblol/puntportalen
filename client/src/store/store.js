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
        updatesBeerbet(state, payload) {
            console.log('Detta är payloaden', payload);
            state.beerbet.push(payload);
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
        },
        postBeerbet(state, beerbet) {
            console.log(beerbet);
            axios.post(API_URI + 'beerbet/', {beerbet})
                .then((response) => {
                    console.log(response)
                    state.commit('updateBeerbets', beerbet);
                })
                .catch(error => console.log(error));
        },
    },
    getter: {

    }
});

// module.exports = store;