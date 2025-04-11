import React from 'react'
import ThemeComp from './components/ThemeComp'
import ThemeProvider from './context/ThemeContext'


const App = () => {
  return (
    <ThemeProvider>
        <ThemeComp/>
    </ThemeProvider>
    
  )
}

export default App