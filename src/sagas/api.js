import axios from 'axios';




export const post = async (endpoint, data) => {
  const res = await axios.post(`${endpoint}`, data);
  return res;
}

export const get = async (endpoint) => {
  const data = await axios.get(`${endpoint}`);
  return data;
}


