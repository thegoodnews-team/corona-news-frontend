import React from 'react'
import config from './routesConfig'
import { MainLayout } from '../../pages/MainLayout'
import { Switch, Route, useParams, useRouteMatch, Redirect } from 'react-router-dom'
import { ThemeProvider } from '../context/ThemeContext'
import loadLocale, { hasLocation } from '../../utils/Locales'
import filterRoutes from './filterRoutes'

const router = () => {
  const { location } = useParams()
  const { path } = useRouteMatch()

  const storedLocale = localStorage.getItem('goodnewscoronavirus')

  if (storedLocale && !hasLocation(location)) {
    return (
      <Redirect to={`/${storedLocale}/${location}`} />
    )
  }

  const rootPath = hasLocation(location) ? path : ''
  const checkedLocation = hasLocation(location) ? location : 'pt'
  localStorage.setItem('goodnewscoronavirus', checkedLocation)
  loadLocale(location)

  return (
    <Switch>
      {
        config
          .filter(filterRoutes(location))
          .map(
            el => {
              return (
                <Route
                  key={el.key}
                  path={`${rootPath}${el.path}`}
                  exact={el.exact}
                  strict={el.strict}
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
        <Redirect to={`/${checkedLocation}/`} />
      </Route>
    </Switch>
  )
}

export default router
