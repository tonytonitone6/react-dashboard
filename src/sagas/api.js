import axios from "axios";

axios.defaults.headers.common.Authorization = localStorage.getItem('authToken');

export const post = async (endpoint, data) => {
  const res = await axios.post(`${endpoint}`, data);
  return res;
};

export const get = async (endpoint, data = {}) => {
  console.log(endpoint, data);
  const res = await axios.get(`${endpoint}`, data);
  return res;
};

export const patch = async (endpoint, data) => {};
