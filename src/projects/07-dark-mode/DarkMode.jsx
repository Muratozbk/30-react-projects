import { useState, useEffect } from 'react'
import Blog from './Blog'
import { ThemeContext, themes } from './context/theme-context'

export default function DarkMode() {
    const [theme, setTheme] = useState(themes.light)

    function changeTheme() {
        theme === themes.light ? setTheme(themes.dark) :
            setTheme(themes.light)

    }

    useEffect(() => {
        let docBody = document.body;
        switch (theme) {
            case themes.light:
                docBody.classList.add('bg-light');
                docBody.classList.remove('bg-dark');
                // docBody.classList.add('text-dark');
                break;
            case themes.dark:
                docBody.classList.add('bg-dark');
                docBody.classList.add('bg-light');
            // docBody.classList.add('text-light');
        }
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            <Blog />
        </ThemeContext.Provider>
    )
}
