import axios from "axios";

const AuthApi = axios.create({
  baseURL: "http://45.149.79.242:8046",
  headers: {
    Referer: "http://localhost:3000/",
    Origin: "http://localhost:3000",

    // "Content-Type": "application/json",
  },
});

AuthApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    // console.log(token)
    if (token) {
      config.headers.Authorization =`Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default AuthApi;
