import React from 'react'
import config from './routesConfig'
import { MainLayout } from '../../pages/MainLayout'
import { Switch, Route, useParams, useRouteMatch, Redirect } from 'react-router-dom'
import { ThemeProvider } from '../context/ThemeContext'
import loadLocale, { hasLocation } from '../../utils/Locales'
import Home from '../../pages/home'

const router = () => {
  const { location } = useParams()
  const { path } = useRouteMatch()

  const storedLocale = localStorage.getItem('goodnewscoronavirus')
  if (storedLocale && storedLocale !== location) {
    return (
      <Redirect to={`/${storedLocale}/`} />
    )
  }

  const rootPath = hasLocation(location) ? path : ''

  loadLocale(location)

  return (
    <Switch>
      {
        config.map(
          el => {
            return (
              <Route
                key={el.key}
                path={`${rootPath}${el.path}`}
                exact={el.exact}
                render={
                  props => {
                    return (
                      <ThemeProvider value={el.theme}>
                        <MainLayout>
                          <el.component {...props}/>
                        </MainLayout>
                      </ThemeProvider >
                    )
                  }
                }
              />
            )
          }
        )
      }

      <Route>
        <ThemeProvider>
          <MainLayout>
            <Home />
          </MainLayout>
        </ThemeProvider>
      </Route>
    </Switch>
  )
}

export default router
