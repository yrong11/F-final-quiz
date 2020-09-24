import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

const httpClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000
});


export default httpClient;