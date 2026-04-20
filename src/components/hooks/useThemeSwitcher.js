"use client"

import React, { useEffect, useState } from 'react'

// Note to self: hooks should start with the "use" keyword
//               as shown here.
const useThemeSwitcher = () => {

    // Media query to check for user preference
    const preferDarkQuery = "(prefers-color-scheme: dark)";
    const [mode, setMode] = useState("");

    useEffect(() => {

        const mediaQuery = window.matchMedia(preferDarkQuery);
        const userPref = window.localStorage.getItem("theme");

        const handleChange = () => {
            if (userPref) {
                console.log("test 1");
                let check = userPref === "dark" ? "dark" : "light";
                setMode(check);

                if (check === "dark") {
                    document.documentElement.classList.add("dark");
                } else {
                    document.documentElement.classList.remove("dark");
                }
            } else {
                console.log("test 2");
                let check = mediaQuery.matches ? "dark" : "light";
                setMode(check);

                if (check === "dark") {
                    document.documentElement.classList.add("dark");
                } else {
                    document.documentElement.classList.remove("dark");
                }
            }
        }

        handleChange();

        mediaQuery.addEventListener("change", handleChange);

        return () => mediaQuery.removeEventListener("change", handleChange)

    }, [])

    useEffect(() => {
      if (mode === "dark") {
        window.localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
      }
      if (mode === "light") {
        window.localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
      }
    }, [mode])
    
    return [mode, setMode]
}

export default useThemeSwitcher