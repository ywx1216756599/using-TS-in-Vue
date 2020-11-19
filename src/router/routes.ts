import { Router } from './interfaceList'

import Login from './modules/login'
import Home from './modules/home'
import Input from './modules/input'
const routes: Array<Router> = [
  Login,
  Home,
  Input
]

export default routes

