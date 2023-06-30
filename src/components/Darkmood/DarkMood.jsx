import React from 'react';
import Sun from "../../assets/Sun.svg";
import Moon from "../../assets/Moon.svg";
import "./DarkMode.css";

const DarkMood = () => {
    const setDarkMode = () =>{
        document.querySelector("body").setAttribute("data-theme", "dark");
    }
    const setLightMode = () =>{
        document.querySelector("body").setAttribute("data-theme", "light");
    }
    const toggleTheme = (e) =>{
        if(e.target.checked) setDarkMode()
        else setLightMode()
    }
    setDarkMode()
    return (
        <div>
            <input
            className='dark_mode_input'
            type= 'checkbox'
            id='darkmode_toggle'
            onChange={toggleTheme}
            />
            <label className='dark_mood_label' for= 'darkmode_toggle'>
        
            </label>
        </div>
    );
};

export default DarkMood;