import React from 'react'

export const themes = {
  blue: 'blue',
  purple: 'purple',
  green: 'green',
  lemon: 'lemon',
  orange: 'orange',
  pink: 'pink'
}

const ThemeContext = React.createContext(themes.blue)

export const ThemeProvider = ThemeContext.Provider
export const ThemeConsumer = ThemeContext.Consumer
export default ThemeContext
