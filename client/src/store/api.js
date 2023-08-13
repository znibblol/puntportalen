import axios from 'axios';

export default () => {
  return axios.create({
    baseURL: 'http://10.8.40.40:2000/api',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
}
