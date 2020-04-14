import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import { MainLayout } from './pages/MainLayout'
import { ThemeProvider, themes } from './components/context/ThemeContext'
import content from './utils/content'
import Initiatives from './pages/initiatives'
import FreeServices from './pages/free-service/FreeServices'
import Donation from './pages/donation'

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
              <Initiatives color={themes.purple} spreadsheetLink={content.initiatives} />
            </MainLayout>
          </ThemeProvider>
        </Route>

        <Route exact path="/servicos">
          <ThemeProvider value={themes.green} >
            <MainLayout>
              <FreeServices color={themes.green} spreadsheetLink={content.freeServices}></FreeServices>
            </MainLayout>
          </ThemeProvider>
        </Route>

        <Route exact path="/doacoes">
          <ThemeProvider value={themes.pink} >
            <MainLayout>
              <Donation color={themes.pink} spreadsheetLink={content.donation}></Donation>
            </MainLayout>
          </ThemeProvider>
        </Route>

        <Route exact path="/sobre">
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
