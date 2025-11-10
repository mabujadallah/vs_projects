import React from 'react';
import { useTheme } from '../../hooks/useTheme';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded focus:outline-none"
            aria-label="Toggle theme"
        >
            {theme === 'light' ? (
                <span role="img" aria-label="Switch to dark mode">🌙</span>
            ) : (
                <span role="img" aria-label="Switch to light mode">☀️</span>
            )}
        </button>
    );
};

export default ThemeToggle;