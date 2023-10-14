import { defineStore } from "pinia";
import Api from './api';
import axios from 'axios';

const baseUrl = 'http://localhost:8082/api';

export const useUser = defineStore('user-store', {
    state: () => {
        return {
            users: [],
            user: {},
        }
    },

    getters: {
        userId(state) {
            return this.user.id ?? false;
        },
        fullName(state) {
            return this.user.first_name + ' ' + this.user.last_name;
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
            const response = await axios.post(baseUrl + '/users/login', userCredentials);

            try {
                const result = response.data;
                if(result.success) {
                    this.user = result.user;

                    let d = new Date();
                    d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000);
                    let expires = "expires=" + d.toUTCString();
                    document.cookie =
                    "Token=" + response.data.token + ";" + expires + ";path=/";

                    // router.push('/beerbets');
                }
            } catch(error) {
                console.error('Error logging in: ', error);
                return error;
            }
        },
        async postLogout() {
            const response = await axios.get(baseUrl + '/users/logout');
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
