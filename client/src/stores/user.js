import { defineStore } from "pinia";
import Api from './api';
import axios from 'axios';

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

            console.log(response);

            try {
                const result = response.data;
                if(result.success) {
                    this.user = result.user;
                    router.push({path: '/beerbets'});
                }
            } catch(error) {
                console.error('Error logging in: ', error);
                return error;
            }
        },
        async postLogout() {
            const response = await axios.get(baseUrl + '/logout');
            try {
                const result = response.data;
                this.user = {};
            } catch(error) {
                console.error('Error logging out: ', error);
                return error;
            }
        }
    }
});
