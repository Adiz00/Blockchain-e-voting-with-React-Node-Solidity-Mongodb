// import axios from 'axios'

// // base url from the env.
// const BASE_URL = process.env.REACT_APP_BASE_URL;

// // axios will set the baseurl before any api call so e.g baseurl/endpoint
// axios.defaults.baseURL = BASE_URL;

// // it will attach the auth token before making the request any.
// axios.interceptors.request.use(
//     (config) => {
//         config.headers["x-auth-token"] = JSON.parse(localStorage.getItem('authToken'));
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// // api calls
// export default class ApiCaller {

//     static async Get(endpoint) {
//         const resp = await axios.get(`${endpoint}`);
//         return resp
//     }

//     static async Post(endpoint, body) {
//         const resp = await axios.post(`${endpoint}`, body);
//         return resp
//     }

//     static async Patch(endpoint, body) {
//         const resp = await axios.patch(`${endpoint}`,  body );
//         return resp
//     }

//     static async Delete(endpoint) {
//         const resp = await axios.delete(`${endpoint}`);
//         return resp
//     }

// }


import axios, {  AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

// base url from the env.
const BASE_URL = process.env.REACT_APP_BASE_URL as string;

// axios will set the baseurl before any api call so e.g baseurl/endpoint
axios.defaults.baseURL = BASE_URL;

// it will attach the auth token before making the request any.
axios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const authToken = localStorage.getItem('authToken');
    if (authToken && config.headers) {
      config.headers['x-auth-token'] = JSON.parse(authToken);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// api calls
export default class ApiCaller {
  static async Get<T>(endpoint: string): Promise<AxiosResponse<T>> {
    const resp = await axios.get<T>(endpoint);
    return resp;
  }

  static async Post<T>(endpoint: string, body: unknown): Promise<AxiosResponse<T>> {
    const resp = await axios.post<T>(endpoint, body);
    return resp;
  }

  static async Patch<T>(endpoint: string, body: unknown): Promise<AxiosResponse<T>> {
    const resp = await axios.patch<T>(endpoint, body);
    return resp;
  }

  static async Delete<T>(endpoint: string): Promise<AxiosResponse<T>> {
    const resp = await axios.delete<T>(endpoint);
    return resp;
  }
}
