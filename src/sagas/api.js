import axios from 'axios';

// https://github.com/axios/axios/issues/382 never fixed it
// axios.defaults.headers.common.Authorization = localStorage.getItem('authToken');

const url = process.env.API_URI;

const axiosOptions = {
  setting() {
    this.headers = {
      headers: {
        Authorization: localStorage.getItem('authToken')
      }
    }
    return this;
  },
  init(params = {}) {
    return Object.assign({}, this.headers, { params });
  },
  post(params = {}) {
    return Object.assign({}, this.headers, { ...params });
  }
}

const combinedOption = () => Object.create(axiosOptions);

export const list = async (endpoint, data = undefined, option = {}) => {
  const params = {
    option
  };
  const res = axios.get(endpoint, data, params);
  return res;
};

export const post = async ({
  endPoint,
  ...data
}) => {
  const option = 
    combinedOption()
    .setting()
    .post(data);
    
  const res = await axios.post(`${url}${endPoint}`, option);
  console.log(res);
  return res;
};

export const get = async ({
  endPoint,
  ...data
}) => {
  const option = combinedOption().setting().init(data);
  const res = await axios.get(`${url}${endPoint}`, option);
  return res;
};

export const update = async (endpoint, data) => {
  const res = await axios.put(endpoint, data);
  return res;
};

export const destroy = async ({
  endPoint,
  ...data
}) => {
  const option = combinedOption().setting().init(data);
  const res = await axios.delete(`${url}${endPoint}`, option);
  return res;
};
