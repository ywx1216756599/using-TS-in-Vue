import { State } from './interface'
import { Getter, GetterTree, Mutation, MutationTree, Action, ActionTree } from 'vuex'

//声明state属性
const state: State = {
  innerWidth: 0,
  innerHeight: 0
}

//创建 getters 内函数
const aaa: Getter<State, any> = (state: State) => {
  return state.innerHeight
}
//声明getters属性
const getters: GetterTree<State, any> = {
  aaa
}

//创建 mutations 内函数
const init: Mutation<State> = (state: State) => {
  state.innerHeight = window.innerHeight
  state.innerWidth = window.innerWidth
}
//声明mutations属性
const mutations: MutationTree<State> = {
  init
}

//创建 mutations 内函数
const aaaa: Action<any, any> = ({ }) => {

}
//声明mutations属性
const actions: ActionTree<any, any> = {
  aaaa
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
