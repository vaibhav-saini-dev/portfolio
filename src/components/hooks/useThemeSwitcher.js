"use client"

import { useEffect, useState } from 'react'

// Note to self: hooks should start with the "use" keyword
//               as shown here.
const useThemeSwitcher = () => {

    // Media query to check for user preference
    const preferDarkQuery = "(prefers-color-scheme: dark)";
    const [mode, setMode] = useState("");

    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery);
        const userPref = window.localStorage.getItem("theme");

        const applyTheme = (theme) => {
            setMode(theme);

            if (theme === "dark") {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        }

        if (userPref) {
            applyTheme(userPref === "dark" ? "dark" : "light");
        } else {
            applyTheme(mediaQuery.matches ? "dark" : "light");
        }

        const handleSystemThemeChange = (event) => {
            const savedTheme = window.localStorage.getItem("theme");

            if (!savedTheme) {
                applyTheme(event.matches ? "dark" : "light");
            }
        }

        mediaQuery.addEventListener("change", handleSystemThemeChange);

        return () => {
            mediaQuery.removeEventListener("change", handleSystemThemeChange);
        }

    }, [])

    useEffect(() => {
        if (!mode) return;

        window.localStorage.setItem("theme", mode);

        if (mode === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [mode])
    
    return [mode, setMode]
}

export default useThemeSwitcher