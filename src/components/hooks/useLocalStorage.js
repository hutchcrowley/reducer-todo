import { useState } from 'react'

const useLocalStorage = (key, initialValue) => {
    // Initial state is a callback that ges an item based on a key
  const [ storedValue, setStoredValue ] = useState(() => {
    //   Whatever this callback function returns is what gets set as the initial value for the state property.
      const item = window.localStorage.getItem(key);
    //   Check to see if already passed in item exists on local storage, and return that value
      return item ? JSON.parse(item) : initialValue;
    //   Otherwise, return whatever the initialValue was passed in.
  });

const setValue = value => {
    setStoredValue(value);
window.localStorage.setItem(key, JSON.stringify(value));
};

return [storedValue, setValue];
};

export default useLocalStorage;