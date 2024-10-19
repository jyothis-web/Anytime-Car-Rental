import  { useState } from 'react';


const ThemeToggle = () => {
  // State to track the current theme, default is 'light'
  const [theme, setTheme] = useState('light');

  // Toggle between light and dark mode
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    // Optionally, you can update the body class for global theme styles
    document.body.setAttribute('data-bs-theme-value', newTheme);
  };

  return (
    <div className="top-button-mode">
      <button className="btn btn-mode change-mode" onClick={toggleTheme}>
        {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default ThemeToggle;
