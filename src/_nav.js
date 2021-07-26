import React from 'react'
import CIcon from '@coreui/icons-react'
import { NavLink } from 'react-router-dom'

const _nav = [
  {
    _component: 'CNavTitle',
    anchor: 'Tables',
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Swapi FC',
    to: '/swapi_fc',
    icon: <CIcon name="cil-puzzle" customClasses="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
]

export default _nav
