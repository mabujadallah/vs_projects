import { useEffect, useState } from 'react';

const useTheme = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        document.documentElement.className = theme;
    }, [theme]);

    return [theme, toggleTheme];
};

export default useTheme;