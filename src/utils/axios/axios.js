import axios from "axios";

const DEBUG = process.env.NODE_ENV === "development";
const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("authtoken");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});
// DEV interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    /** In dev, intercepts request and logs it into console for dev */
    if (DEBUG) {
      console.info("✉️ ", config);
    }
    return config;
  },
  (error) => {
    if (DEBUG) {
      console.error("✉️ ", error);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
