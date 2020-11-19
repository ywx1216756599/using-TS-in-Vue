import { Router } from './../interfaceList'
import Main from '@/components/Main.vue'
const Input: Router = {
  path: "/detection-input",
  name: "inputDetectionInfo",
  component: Main,
  meta: {
    title: '检测信息录入',
    icon: ''
  },
  children: [{
    path: "material-apply",
    name: "materialApply",
    meta: {
      title: '原料检测申请',
      icon: ''
    },
    component: () => import('@/views/detection/material-apply/index.vue')
  },
  {
    path: "copper-apply",
    name: "copperApply",
    meta: {
      title: '铜杆检测申请',
      icon: ''
    },
    component: () => import('@/views/detection/copper-apply/index.vue')
  },
  {
    path: "material-input",
    name: "materialInput",
    meta: {
      title: '原料检测单录入',
      icon: ''
    },
    component: () => import('@/views/detection/material-input/index.vue')
  },
  {
    path: "copper-input",
    name: "coppernput",
    meta: {
      title: '铜杆检测单录入',
      icon: ''
    },
    component: () => import('@/views/detection/copper-input/index.vue')
  }
  ]
}

export default Input