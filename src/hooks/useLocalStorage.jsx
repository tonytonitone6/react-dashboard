import React, { useState, useEffect } from 'react';


const useLocalStorage = propertyKey => {
  const [storageData, setStorageData] = useState(localStorage.get(propertyKey) || '');

  useEffect(() => {
    localStorage.setItem(propertyKey, storageData);
  }, [propertyKey, storageData])

  return [storageData, setStorageData];
}

export default useLocalStorage;