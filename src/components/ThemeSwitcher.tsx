'use client';

import { useEffect, useState } from 'react';

export function ThemeSwitcher() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    } else {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 bg-gray-300 dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded-md shadow hover:bg-gray-400 dark:hover:bg-gray-600 transition"
    >
      Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
}
