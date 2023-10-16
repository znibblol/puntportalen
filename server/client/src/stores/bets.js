import { defineStore } from "pinia";
import axios from "axios";

const baseUrl = "http://localhost:8082/api";

const useBets = defineStore("beerbet-store", {
  state: () => ({
    beerbets: [],
  }),

  getters: {
    results(state) {
      return state.beerbets;
    },
  },

  actions: {
    async getBeerbets() {
      const response = await axios.get(`${baseUrl}/beerbet`);
      try {
        const result = response.data;
        this.beerbets = result;
        return true;
      } catch (error) {
        this.beerbets = [];
        return error;
      }
    },
    async postBeerbet(beerbet) {
      const response = await axios.post("/beerbet", { beerbet });
      try {
        const result = response.data;
        if (result.success) {
          return this.getBeerbets();
        }
        return true;
        
      } catch (error) {
        return error;
      }
    },
  },
});

export default useBets;
