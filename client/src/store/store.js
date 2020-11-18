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
            console.log('Detta är payloaden', payload);
            console.log('Detta är state beerbets', state.beerbets);
            state.beerbets.push(payload);
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
            // console.log(beerbet);
            axios.post(API_URI + 'beerbet/', {beerbet})
                .then(result => {
                    // console.log(JSON.parse(result.config.data).beerbet);
                    state.commit('updateBeerbets', JSON.parse(result.config.data).beerbet);
                })
                .catch(error => console.error(error));
        },
    },
    getter: {

    }
});

// module.exports = store;