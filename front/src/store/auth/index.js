import axios from 'axios'
import * as types from '../mutation-types'
import Cookies from 'js-cookie'
import constants from '../constants'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

const {baseUrl} = constants

export default {
  namespaced: true,
  state: {
    user: null,
    token: Cookies.get('token')
  },
  getters: {
    user: state => state.user,
    token: state => state.token,
    check: state => state.user !== null
  },
  mutations: {
    [types.SAVE_TOKEN] (state, { token, remember }) {
      state.token = token
      Cookies.set('token', token, { expires: remember ? 365 : null })
      Cookies.set('logged', true)
    },
  
    [types.FETCH_USER_SUCCESS] (state, { user }) {
      state.user = user
      Cookies.set('userData', user)
    },
  
    [types.FETCH_USER_FAILURE] (state) {
      state.token = null
      Cookies.remove('token')
      Cookies.remove('logged')
    },
  
    [types.LOGOUT] (state) {
      state.user = null
      state.token = null
      Cookies.remove('token')
      Cookies.remove('logged')
    },
  
    [types.UPDATE_USER] (state, { user }) {
      state.user = user
    }
  },
  actions: {
    async getUser ({ commit, state }) {
      try {
        console.log(state.token);
        const { data } = await axios.get(baseUrl + 'auth/get_user', {headers: {'Authorization': `Bearer ${Cookies.get('token')}`}})
        console.log(data)
        if (data.success) {
          commit(types.FETCH_USER_SUCCESS, { user: data.msg })
        } else {
          commit(types.FETCH_USER_FAILURE)
        }
      } catch (e) {
        console.log(e);
        commit(types.FETCH_USER_FAILURE)
      }
    },

    updateUser ({ commit }, payload) {
      commit(types.UPDATE_USER, payload)
    },

    async logout ({ commit }) {
      try {
        const { data } = await axios.post(baseUrl + 'auth/logout')
        console.log(data)
      } catch (e) { }

      commit(types.LOGOUT)
      document.location = '/login'
    },

    async registerUser ({commit}, payload){
      const { data } = await axios.post("/api/register",payload);
      if(data.success){
        document.location = "/login";
      }
    },
    async loginUser ({commit}, payload){
      try {
        const res = await axios.post(baseUrl + "auth/login", payload);
        console.log(res)
        if (res.data.success) {
          commit(types.SAVE_TOKEN, {token:res.data.msg.access_token, remember:true});
          commit(types.FETCH_USER_SUCCESS, {user:res.data.msg.user});
          document.location = "/";
        }
      } catch (error) {

      }
      
    }
  }
}