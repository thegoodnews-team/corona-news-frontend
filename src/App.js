import React from 'react'
import Router from './components/LocationRouter'
import ReactNotification from 'react-notifications-component'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
      <ReactNotification />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  )
}

export default App
