import Home from '../../pages/home'
import About from '../../pages/about'
import Initiatives from '../../pages/initiatives'
import FreeServices from '../../pages/free-service/FreeServices'
import FutureAfterCovid from '../../pages/future-after-covid/futureAfterCovid'
import Donation from '../../pages/donation'
import { themes } from '../context/ThemeContext'

export default [
  { path: '/', component: Home, key: 'HOME_PAGE', theme: themes.blue, exact: true },
  { path: '/news', component: Home, key: 'HOME_NEWS_PAGE', theme: themes.blue, exact: true },
  { path: '/initiative', component: Initiatives, key: 'INITIATIVES_PAGE', theme: themes.purple, exact: true },
  { path: '/services', component: FreeServices, key: 'FREESERVICES_PAGE', theme: themes.green, exact: true },
  { path: '/donate', component: Donation, key: 'DONATION_PAGE', theme: themes.pink, exact: true },
  { path: '/about', component: About, key: 'ABOUT_PAGE', theme: themes.orange, exact: true },
  { path: '/future', component: FutureAfterCovid, key: 'FUTURE_PAGE', theme: themes.darkKhaki, exact: true }
]
