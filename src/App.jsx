import React, { createContext, useState } from 'react';
import Form from './components/Form/Form';
import './App.css'
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext(null)

const App = () => {
const [theme, setTheme] = useState("dark")

const toggleTheme = () =>{
  setTheme((curr) => (curr === "light" ? "dark" : "light"))
  
}
  return (
    <ThemeContext.Provider value= {{theme, toggleTheme}}>
      <div className='App' id={theme}>
      <Form></Form>
      <div className='switch'>
        <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
      <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}></ReactSwitch>
      </div>
    </div>
    </ThemeContext.Provider>
  );
};

export default App;