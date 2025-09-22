import axios from "axios";
const BASE_URL = import.meta.env.VITE_BACKEND_URL;
const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    headers: { "X-Custom-Header": "foobar" },
});

// Add a request interceptor
instance.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
instance.interceptors.response.use(
    function onFulfilled(response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data

        return response;
    },
    function onRejected(error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return error?.response?.data ?? Promise.reject(error);
    }
);

export default instance;
