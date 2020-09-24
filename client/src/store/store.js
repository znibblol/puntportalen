import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import Api from './api';

Vue.use(Vuex);

const API_URI = 'http://localhost:2000/api/';

export const store = new Vuex.Store({
    state: {
        beerbets: [],
        users: [],
    },
    mutations: {
        setBeerbets(state, beerbets) {
            state.beerbets = beerbets;
        },
        setUsers(state, users) {
            state.users = users;
        }
    },
    actions: {
        getBeerbets({commit}) {
            Api().get('/beerbet').then(response => commit('setBeerbets', response.data)).catch(e => console.log(e));
        },
        getUsers({commit}) {
            Api().get('/users').then(response => commit('setUsers', response.data)).catch(e => console.log(e));
        },
        async postBeerbet(beerbet) {
            Api().post('/beerbet', {beerbet}).then(res => {
                console.log(res.data);
                this.dispatch('getBeerbets')
            }).catch(error => console.log(error));
        },
    },
    getter: {

    }
});


// CMC kommer skada sig och missa en match säsongen 20/21
