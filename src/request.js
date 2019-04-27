// axiosconfig.js
import axios from "axios";

// configure base url
const instance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE}`
});

// intercept requests and add token
instance.interceptors.request.use(config => {
  return config;
});

export default instance;
