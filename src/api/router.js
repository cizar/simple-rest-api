import { Router } from 'express'
import * as routes from './routes'

export default Object.keys(routes).reduce((router, route) => 
  router.use(`/${route}`, routes[route])
, Router())