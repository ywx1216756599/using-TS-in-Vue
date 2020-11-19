import {Router} from './../interfaceList'
import Main from '@/components/Main.vue'
const Home: Router = {
  path: "/index",
  name: "index",
  component: Main,
  meta: {
    title: '首页',
    icon: ''
  },
  children: [{
    path: "home",
    name: "home",
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: '数据展示',
      icon: ''
    },
  }]
}

export default Home