'use client'

import { useEffect, useState } from "react"

export default function Themeswitcher() {

    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const theme = localStorage.getItem("theme")
        if (theme === "dark") {
            setDarkMode(true)
        }
    }, [])

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }, [darkMode])
    return (
        <div onClick={() => setDarkMode(!darkMode)} className="bg-white text-black dark:bg-black dark:text-white">
                {darkMode ? 'Dark' : 'Light'}
        </div>
    )
}