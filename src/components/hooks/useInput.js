 import useLocalStorage from './useLocalStorage.js'

 export const useInput = (initialValue) => {
    const [value, setValue] = useLocalStorage(initialValue);

    const handleChange = (updatedValue) => {
        setValue(updatedValue);
    }

    return [value, setValue, handleChange, initialValue];

}