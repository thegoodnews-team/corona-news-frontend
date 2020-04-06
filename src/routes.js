import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import { MainLayout } from './pages/MainLayout'
import { ThemeProvider, themes } from './components/context/ThemeContext'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainLayout>
            <Home />
          </MainLayout>
        </Route>

        <Route exact path="/iniciativas">
          <ThemeProvider value={themes.purple} >
            <MainLayout>
              <Home />
            </MainLayout>
          </ThemeProvider>
        </Route>

        <Route exact path="/existe-amor">
          <ThemeProvider value={themes.lemon} >
            <MainLayout>
              <Home />
            </MainLayout>
          </ThemeProvider>
        </Route>

        <Route exact path="/servicos">
          <ThemeProvider value={themes.green} >
            <MainLayout>
              <Home />
            </MainLayout>
          </ThemeProvider>
        </Route>

        <Route exact path="/sobre">
          <ThemeProvider value={themes.blue} >
            <MainLayout>
              <About />
            </MainLayout>
          </ThemeProvider>
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
