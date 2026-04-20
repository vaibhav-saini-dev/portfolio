import { useEffect, useState } from 'react'

const useThemeSwitcher = () => {
  const [mode, setMode] = useState(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const storedTheme = window.localStorage.getItem("theme");

    const initialTheme = storedTheme
      ? storedTheme
      : mediaQuery.matches
      ? "dark"
      : "light";

    setMode(initialTheme);

    const handleChange = (e) => {
      const savedTheme = window.localStorage.getItem("theme");

      // only follow system if user has not manually picked a theme
      if (!savedTheme) {
        setMode(e.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    if (!mode) return;

    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    window.localStorage.setItem("theme", mode);
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;