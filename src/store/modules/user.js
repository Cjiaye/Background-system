import UserApi from '../../api/user'
import { setItem, getItem, removeItem } from '../../utils/storage'
export default {
  namespaced: true,
  state: {
    token: getItem('token') || '',
    userInfo: getItem('userInfo') || ''
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem('token', token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
      setItem('userInfo', userInfo)
    }
  },
  actions: {
    async login({ commit }, payload) {
      try {
        const response = await UserApi.login(payload)
        commit('setToken', response.token)
        return response
      } catch (err) {
        console.log(err)
      }
    },
    async getUserInfo({ commit }) {
      try {
        const response = await UserApi.getUserInfo()
        // console.log(UserApi.getUserInfo);
        console.log(response)
        commit('setUserInfo', response)
        return response
      } catch (err) {
        console.log(err)
      }
    },
    async logout({ commit }) {
      commit('setToken', '')
      commit('setUserInfo', '')
      removeItem('token')
      removeItem('userInfo')
    }
  }
}
/**
 *
 * 全局响应处理
 *
 * 将token存储到vuex
 *
 * 将token存储到本地
 *
 * 本地存储方法进行封装
 *
 * 浏览器刷新vuex数据丢失问题
 *
 *
 * 登录鉴权(页面鉴权)
 *
 * 创建主页路由以及主页组件
 *
 * 实现主页布局
 *
 */
