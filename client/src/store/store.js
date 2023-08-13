import Vue from 'vue';
import Vuex from 'vuex';
import Api from './api';
import Router from '../router';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    beerbets: [],
    users: [],
    user: {},
  },
  mutations: {
    setBeerbets(state, beerbets) {
      state.beerbets = beerbets;
    },
    setUsers(state, users) {
      state.users = users;
    },
    setUser(state, user) {
      state.user = user;
    },
    clearUser(state) {
      state.user = {};
    }
  },
  actions: {
    getBeerbets({ commit }) {
      Api().get('/beerbet').then(response => commit('setBeerbets', response.data)).catch(e => console.log(e));
    },
    getUsers({ commit }) {
      Api().get('/users').then(response => commit('setUsers', response.data)).catch(e => console.log(e));
    },
    async postBeerbet({ commit }, beerbet) {
      Api().post('/beerbet', { beerbet }).then(res => {
        console.log(res.data);
        this.dispatch('getBeerbets')
      }).catch(error => console.log(error));
    },

    async postLogin({ commit }, userCredentials) {
      Api().post('/users/login', userCredentials).
        then(response => {
          console.log(response);
          if (response.data.success) {
            commit('setUser', response.data.user);
            let d = new Date();
            d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000);
            let expires = "expires=" + d.toUTCString();
            document.cookie =
              "Token=" + response.data.token + ";" + expires + ";path=/";
          }
        }).
        then(() => {
          Router.push('/beerbets');
        }).
        catch(error => {
          console.log('Något gick fel med inloggningen: ' + error);
        });
    },
    async postLogout({ commit }) {
      await Api().get('/users/logout').
        then(response => {
          commit('clearUser');
        }).
        catch(error => console.log(error));
    }
  },
  getter: {

  }
});


// CMC kommer skada sig och missa en match säsongen 20/21
