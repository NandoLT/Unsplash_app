import axios from 'axios';

const client = axios.create({
    baseURL:process.env.REACT_APP_API_BASE_URL,
});

client.interceptors.response.use(
    response => response.data,
    error => {
        if (!error.response) {
            return Promise.reject({ message: error.message });
        }
        return Promise.reject({
            message: error.response.statusText,
            ...error.response,
        });
    }
);

client.interceptors.request.use(req => {
    req.headers.authorization = `Client-ID ${process.env.REACT_APP_API_ACCES_KEY}`;
    return req;
});

export default client;