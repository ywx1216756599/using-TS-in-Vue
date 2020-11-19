import Vue, { VueConstructor } from 'vue'

export interface Router {
  path: string,
  name: string,
  component: VueConstructor<Vue> | (() => Promise<typeof import("*.vue")>)
  meta?: {
    title: string,
    icon: string
  },
  isHidden?: boolean,
  children?: Router[]
}