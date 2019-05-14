import axios from "axios";

// https://github.com/axios/axios/issues/382 never fixed it
// axios.defaults.headers.common.Authorization = localStorage.getItem('authToken');

const url = process.env.API_URI;

const axiosOption = (methods, params = {}) => {
  const config = {
    headers: {
      Authorization: localStorage.getItem('authToken')
    }
  }

  const option = methods === 'GET' 
    ? Object.assign({}, config, { params }) 
    : Object.assign({}, config, { ...params });

  return option;
};

export const list = async (endpoint, data = undefined, option = {}) => {
  const params = {
    option
  };
  const res = axios.get(endpoint, data, params);
  return res;
};

export const post = async ({ endPoint, ...data }) => {
  const option = axiosOption.call(this, 'POST', data);
  const res = await axios.post(`${url}${endPoint}`, option);
  
  return res;
};

export const get = async ({ endPoint , ...data}) => {
  const option = axiosOption.call(this, 'GET', data);
  const res = await axios.get(`${url}${endPoint}`, option);
  return res;
  // return (fn) => {
  //   const result = res;
  //   return fn(result);
  // }
};

export const update = async (endpoint, data) => {
  const res = await axios.put(endpoint, data);
  return res;
};

export const destroy = async (endpoint, data) => {
  const res = await axios.delete(`${url}${endpoint}`, data);
  return res;
};