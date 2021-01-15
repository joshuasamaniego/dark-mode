import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage("name", initialValue);

    return [darkMode, setDarkMode];
}
