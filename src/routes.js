import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import { MainLayout } from './pages/MainLayout'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainLayout>
            <Home />
          </MainLayout>
        </Route>

        <Route exact path="/sobre">
          <MainLayout>
            <About />
          </MainLayout>
        </Route>

        <Route>
          <MainLayout>
            <Home />
          </MainLayout>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
