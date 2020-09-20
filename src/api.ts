import axios from 'axios';

export const apiUrls = {
  login: 'api/login',
};

const api = axios.create({
  baseURL: 'http://pc.burakhamza.site',
});

export default api;
