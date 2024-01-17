// axios.js

import axios from "axios";
import { useCookies } from 'react-cookie';
const BASE_URL = "http://localhost:8080";

export default axios.create({ baseURL: BASE_URL });

export const authAxios = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});