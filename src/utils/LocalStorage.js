
const storage = {
  _init(properKey, item = '') {
    const data = localStorage.getItem(properKey);
    return ((data === null || data === '') && item !== '') 
      ? localStorage.setItem(properKey, item)
      : data;
  },

  set(properKey, item) {
    this._init(properKey, item);
  },
  
  get(properKey) {
    return this._init(properKey);
  }
}

export default Object.create(storage);

