// axios.js

import axios from "axios";
import { useCookies } from 'react-cookie';
const BASE_URL = "http://localhost:8080";

export default axios.create({ baseURL: BASE_URL });

axios.interceptors.request.use(request => {
  console.log(request)
  return request
}, function(error) {
  return Promise.reject(error);
})

axios.interceptors.response.use(response => {
  console.log(response)
  return response
})

export const authAxios = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});