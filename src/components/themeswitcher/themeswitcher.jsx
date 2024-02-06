'use client'

import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
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
        <div onClick={() => setDarkMode(!darkMode)} className="top-16 right-2 rounded-md absolute sm:absolute sm:top-4 sm:right-4 p-3 bg-white text-black dark:bg-black dark:text-white">
            {
                darkMode ?
                    <FontAwesomeIcon icon={faMoon} className="sm:w-6 sm:h-6" /> :
                    <FontAwesomeIcon icon={faSun} className="sm:w-6 sm:h-6" />
            }
        </div>
    )
}