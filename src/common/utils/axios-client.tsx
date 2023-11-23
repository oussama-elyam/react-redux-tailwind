import axios from 'axios';

export const baseUrlBackend =
    process.env.NODE_ENV == 'development' ? 'http://localhost:8080/api/v1' : 'backendprodurl';

axios.interceptors.request.use(
    (config) => {
        console.log(config);
        return config;
    },
    (err) => {
        console.log(err);
    }
);

axios.interceptors.response.use(
    (config) => {
        console.log(config);
        return config;
    },
    (err) => {
        console.log(err);
    }
);

export const client = axios.create({
    baseURL: baseUrlBackend,
    withCredentials: true
});
