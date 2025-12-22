// 'use client'
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  //   withCredentials: true,
});

api.interceptors.request.use(
  config => {
    // const token = localStorage.getItem("token");
    // config.headers.Authorization = token
    // console.log(config)
    return config;
  },
  error => Promise.reject(error)
);

export default api;
