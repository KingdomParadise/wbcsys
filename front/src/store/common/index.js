import axios from 'axios'
import * as types from '../mutation-types'
import Cookies from 'js-cookie'
import appConfig from '@/appConfig'
import router from '@/router'

const {apiBaseUrl} = appConfig

export default {
  namespaced: true,
  state: {
    departments: [],
    roles: [],
    tags: []
  },
  getters: {
    common_states: state => state
  },
  mutations: {
    [types.SET_DEPARTMENTS] (state, {departments}) {
      state.departments = departments
    },
    [types.SET_ROLES] (state, {roles}) {
      state.roles = roles
    },
    [types.SET_TAGS] (state, {tags}) {
      state.tags = tags
    }
  },
  actions: {
    async getDepartments ({commit, state}) {
      try {
        const {data} = await axios.get(apiBaseUrl + 'departments', {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}})
        console.log(data)
        if (data.success) {
          commit(types.SET_DEPARTMENTS, {departments: data.msg.departments})
        } else {

        }
      } catch (error) {
        commit('auth/'+ types.LOGOUT)
      }
    },
    
    async getRoles ({commit, state}) {
      try {
        const {data} = await axios.get(apiBaseUrl + 'roles', {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}})
        console.log(data)
        if (data.success) {
          commit(types.SET_ROLES, {roles: data.msg.roles})
        } else {

        }
      } catch (error) {
        commit('auth/'+ types.LOGOUT)
      }
    },
    
    async getTags ({commit, state}) {
      try {
        const {data} = await axios.get(apiBaseUrl + 'tags', {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}})
        console.log(data)
        if (data.success) {
          commit(types.SET_TAGS, {tags: data.msg.tags})
        } else {

        }
      } catch (error) {
        commit('auth/'+ types.LOGOUT)
      }
    }
  }
}