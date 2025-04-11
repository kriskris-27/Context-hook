import React from 'react'
import { Themes } from '../context/ThemeContext'

const ThemeComp = () => {
    const {Theme,toggletheme}=Themes()
    const styles = {
        backgroundColor: Theme === 'light' ? '#fff' : '#222',
        color: Theme === 'light' ? '#000' : '#fff',
        padding: '2rem',
        textAlign: 'center',
        minHeight: '100vh',
      };
  return (
    
    <div style={styles}>
        <h2>Current theme is {Theme}</h2>
        <button onClick={toggletheme}>switch theme</button>
    </div>
    
  )
}

export default ThemeComp