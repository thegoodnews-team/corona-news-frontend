const routesByLocation = {
  en: ['/', '/news', '/services', '/future', '/about']
}

export default function filterRoutes(location) {
  return function filterFunction(routeConfig) {
    return !location || location === 'pt' || routesByLocation[location].includes(routeConfig.path)
  }
}
