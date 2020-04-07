import React, { useContext } from 'react'
import './style.css'
import ThemeContext from '../context/ThemeContext'
import themes from '../context/themes.module.css'
export default function Loading() {
  const theme = useContext(ThemeContext)
  return (
    <div className="fluid-container text-center">
      <div className={`spinner-grow load-spin ${themes[theme + '-primary']}`} role="status">
        <span className="sr-only">Carregando...</span>
      </div>
    </div>
  )
}
