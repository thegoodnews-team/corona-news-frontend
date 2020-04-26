import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import { MainLayout } from './pages/MainLayout'
import { ThemeProvider, themes } from './components/context/ThemeContext'
import Initiatives from './pages/initiatives'
import FreeServices from './pages/free-service/FreeServices'
import Donation from './pages/donation'
import intl from 'react-intl-universal'

export default function Routes() {
  const content = intl.get('json-data')

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainLayout>
            <Home />
          </MainLayout>
        </Route>

        <Route exact path="/news">
          <MainLayout>
            <Home />
          </MainLayout>
        </Route>

        <Route exact path="/initiative">
          <ThemeProvider value={themes.purple} >
            <MainLayout>
              <Initiatives color={themes.purple} spreadsheetLink={content.initiatives} />
            </MainLayout>
          </ThemeProvider>
        </Route>

        <Route exact path="/services">
          <ThemeProvider value={themes.green} >
            <MainLayout>
              <FreeServices color={themes.green} spreadsheetLink={content.freeServices}></FreeServices>
            </MainLayout>
          </ThemeProvider>
        </Route>

        <Route exact path="/donate">
          <ThemeProvider value={themes.pink} >
            <MainLayout>
              <Donation color={themes.pink} spreadsheetLink={content.donation}></Donation>
            </MainLayout>
          </ThemeProvider>
        </Route>

        <Route exact path="/about">
          <ThemeProvider value={themes.orange} >
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
