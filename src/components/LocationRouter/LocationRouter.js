import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Router from './router'

const LocationRouter = () => {
  return (
    <Switch>
      <Route path="/:location?" component={Router} />
    </Switch>
  )
}

export default LocationRouter
