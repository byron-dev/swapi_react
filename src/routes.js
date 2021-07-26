import React from 'react'

const SwapiFC = React.lazy(() => import('./views/swapi_fc/SwapiFC'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/swapi_fc', name: 'Swapi Functional Component', component: SwapiFC },
]

export default routes
