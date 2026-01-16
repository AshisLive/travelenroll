import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import Icon from './AppIcon';

const ThemeToggle = () => {
    const { isDark, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 overflow-hidden transition-all duration-300"
            aria-label="Toggle Theme"
        >
            <Icon name={isDark ? "Sun" : "Moon"} size={20} />
        </button>
    );
};

export default ThemeToggle;