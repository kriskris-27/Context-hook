import React, { createContext, useContext, useState } from 'react'

export const ThemeContext= createContext();

const ThemeProvider = ({children}) => {
    const [Theme,setTheme]=useState('light')
    const toggletheme =()=>{
        setTheme(prev => (prev=== 'light' ? 'dark' : 'light'))
    }
  return (
    <ThemeContext.Provider value={{Theme,toggletheme}}>
{children}
    </ThemeContext.Provider>
  )
}

export const Themes=()=>useContext(ThemeContext)

export default ThemeProvider