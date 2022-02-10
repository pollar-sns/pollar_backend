import axios from 'axios';
import authHeader from '../utils/authHeader';

// axios 객체 생성
function createInstance() {
  return axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      'Content-type': 'application/json',
    },
  });
}

// header에 jwt가 있는 axios 객체 생성
function createIntstanceWithAuth() {
  return axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      'Content-type': 'application/json',
      // TODO test if it works
      authHeader,
    },
  });
  // const instance = axios.create({
  //   baseURL: process.env.REACT_APP_API_URL,
  //   headers: {
  //     'Content-type': 'application/json',
  //     // TODO test if it works
  //     authHeader,
  //   },
  // });

  // return setInterceptors(instance);
}
export function createMultipartInstance() {
  return axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      'Content-Type': 'multipart/form-data',
      "Access-Control-Allow-Credentials": true
    },
  });
}



export const instance = createInstance();
export const instanceWithAuth = createIntstanceWithAuth();
export const fileInstance = createMultipartInstance();