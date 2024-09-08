import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { destroyCookie, parseCookies, setCookie } from "nookies";

const apiInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

apiInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const cookies: Record<string, string> = parseCookies();

    const token: string = cookies?.token;

    if (token) {
      config.headers.set('Authorization', `Bearer ${token}`);
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// apiInstance.interceptors.response.use((response: AxiosResponse) => {
//   return response;
// }, (error: AxiosError ) => {
  
//   if (error.status === 401) {
//     destroyCookie(null, 'access_token');
//   }

//   return Promise.reject(error);
// });

export default apiInstance;
