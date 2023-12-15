import axios from "axios";

export const api = axios.create({
  baseURL: 'https://rocketmovies-backend-2zf6.onrender.com'
})