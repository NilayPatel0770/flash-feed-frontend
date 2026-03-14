import React, { useState, useEffect } from "react";

const ThemeSwitcher = () => {

  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");

    if (
      storedTheme === "dark" ||
      (!storedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      return true;
    }

    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={darkMode}
          onChange={toggleTheme}
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer
        peer-checked:after:translate-x-full
        peer-checked:after:border-white
        after:content-[''] after:absolute after:top-0.5
        after:left-[2px] after:bg-white after:border-gray-300
        after:border after:rounded-full after:h-5 after:w-5
        after:transition-all peer-checked:bg-base"></div>
      </label>
    </div>
  );
};

export default ThemeSwitcher;