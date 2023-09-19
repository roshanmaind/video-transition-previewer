import Transition from '../pages/Transition' // Import your page components here
import type React from 'react'

interface RouteConfig {
  path: string
  Component: React.ComponentType
}

const routes: RouteConfig[] = [
  {
    path: '/',
    Component: Transition
  }
]

export default routes
