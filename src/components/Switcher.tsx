import React, { useState } from 'react';
import useDarkSide from '../hooks/useDarkSide';
import DarkModeToggle from 'react-dark-mode-toggle';

export default function Switcher() {
    const { colorTheme, setTheme } = useDarkSide();
    const [darkSide, setDarkSide] = useState(colorTheme === "light" ? true : false)

    const toggleDarkMode = (checked: boolean) => {
        setTheme(colorTheme);
        setDarkSide(checked);
    };

    return (
        <>
            <DarkModeToggle checked={darkSide} onChange={toggleDarkMode} size={40} />
        </>
    )
}