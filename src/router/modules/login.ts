import { Router } from './../interfaceList'

const Login: Router = {
  path: "/login",
  name: "login",
  isHidden: true,
  component: () => import("@/views/login/index.vue")
}

export default Login