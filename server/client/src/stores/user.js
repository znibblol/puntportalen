import { defineStore } from "pinia";
import axios from "axios";
import VueJwtDecode from "vue-jwt-decode";

import router from "../router";

const baseUrl = "http://localhost:8082/auth";

const useUser = defineStore("user-store", {
  state: () => ({
    users: [],
    user: {},
  }),

  getters: {
    userId(state) {
      return state.user.id ?? false;
    },
    fullName(state) {
      return `${state.user.first_name} ${this.user.last_name}`;
    },
    userData(state) {
      return state.user;
    },
  },

  actions: {
    async getUsers() {
      const response = await axios.get(`${baseUrl}/users`);
      try {
        const result = response.data;
        this.users = result;
        return true;
      } catch (error) {
        this.users = [];
        return error;
      }
    },
    async postLogin(userCredentials) {
      const response = await axios.post(`${baseUrl}/login`, userCredentials);
      try {
        const result = response.data;
        if (result.success) {
          this.user = result.user;
          this.user.token = result.token;
          this.user.refresh = result.refresh;

          localStorage.setItem("user", result.token);
          localStorage.setItem("refresh", result.refresh);

          return router.push({ path: "/beerbets" });
        }
        return true;
      } catch (error) {
        return error;
      }
    },
    postLogout() {
      this.user = {};
      return localStorage.removeItem("user");
    },
    async checkLocalStorage() {
      const token = await localStorage.getItem("user");
      try {
        const data = await VueJwtDecode.decode(token);
        this.user = data;
        return true;
      } catch (error) {
        return router.push("/login");
      }
    },
  },
});

export default useUser;