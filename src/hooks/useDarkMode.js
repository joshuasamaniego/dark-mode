import useLocalStorage from "./useLocalStorage";

const useDarkMode = (key) => {
    const [storedValue, setStoredValue] = useLocalStorage(key);

    return [storedValue, setStoredValue];
}

export default useDarkMode;