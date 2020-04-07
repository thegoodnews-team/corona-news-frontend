import React from 'react'
import './style.css'

export default function Loading() {
  return (
    <div className="fluid-container text-center">
      <div className="spinner-grow text-primary load-spin" role="status">
        <span className="sr-only">Carregando...</span>
      </div>
    </div>
  )
}
