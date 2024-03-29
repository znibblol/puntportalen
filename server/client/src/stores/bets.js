import { defineStore } from "pinia";
import Api from './api';
import axios from 'axios';

const baseUrl = 'http://localhost:8082/api';

export const useBets = defineStore('beerbet-store', {
    state: () => {
        return {
            beerbets: []
        }
    },

    getters: {
        results(state) {
            return state.beerbets;
        }
    },

    actions: {
        async getBeerbets() {
            const response = await axios.get(baseUrl + '/beerbet');
            try {
                const result = response.data;
                this.beerbets = result;
            } catch(error) {
                this.beerbets = [];
                console.error('Error loading beerbets: ', error);
                return error;
            }
          },
          async postBeerbet(beerbet) {
            const response = await Api.post('/beerbet', { beerbet });
            try  {
                const result = response.data;
                if(result.success) {
                    this.getBeerbets();
                } else {
                    return;
                }
            } catch(error) {
                console.error('Error adding beerbet: ', error);
                return error;
            }
          },
    }

});
