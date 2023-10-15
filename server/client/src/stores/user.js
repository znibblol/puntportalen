import { defineStore } from "pinia";
import Api from './api';
import axios from 'axios';
import VueJwtDecode from 'vue-jwt-decode';

import router from '../router';

const baseUrl = 'http://localhost:8082/auth';

export const useUser = defineStore('user-store', {
    state: () => {
        return {
            users: [],
            user: {},
        }
    },

    getters: {
        userId(state) {
            return state.user.id ?? false;
        },
        fullName(state) {
            return state.user.first_name + ' ' + this.user.last_name;
        },
        userData(state) {
            return state.user;
        }
    },

    actions: {
        async getUsers() {
            const response = await axios.get(baseUrl + '/users');
            try {
                const result = response.data;
                this.users = result;
            } catch(error) {
                this.users = [];
                console.error('Error loading users: ', error);
                return error;
            }
        },
        async postLogin(userCredentials) {
            const response = await axios.post(baseUrl + '/login', userCredentials);
            try {
                const result = response.data;
                if(result.success) {
                    this.user = result.user;
                    this.user.token = result.token;
                    this.user.refresh = result.refresh;

                    localStorage.setItem("user", result.token);
                    localStorage.setItem("refresh", result.refresh);

                    router.push({path: '/beerbets'});
                }
            } catch(error) {
                console.error('Error logging in: ', error);
                return error;
            }
        },
        async postLogout() {
            this.user = {};
            localStorage.removeItem('user');
        },
        async checkLocalStorage() {
            const token = await localStorage.getItem('user');
            try {
                const data = await VueJwtDecode.decode(token);
                this.user = data;
            } catch(error) {
                console.error('Error fetching local token: ', error);
                router.push('/login');
            }
        }
    }
});
