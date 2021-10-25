import appConfig from '@/appConfig'
import router from '@/router'
import axios from 'axios'
import * as types from '../mutation-types'
import Vue from 'vue'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

const { apiBaseUrl } = appConfig

export default {
  namespaced: true,
  state: {
    newQuestion: {
      content: '',
      anonymous: false,
      tag_id: null,
      attachment: null
    },
    qagroup: []
  },
  getters: {
    newQuestion: state => state.newQuestion
  },
  mutations: {

  },
  actions: {
    async getQuestions ({commit, state}) {
      try {
        const { data } = await axios.get(apiBaseUrl + 'get_qagroup', {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}})
      } catch (error) {
        commit('auth/'+ types.LOGOUT)
      }
    },

    async postQuestion ({commit, state}) {
      try {
        let formData = new FormData()
        Object.keys(state.newQuestion).forEach(key => {
          formData.append(key, state.newQuestion[key])
        })
        const {data} = await axios.post(
          apiBaseUrl + 'qa/post_question',
          formData,
          {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
              'Content-Type': "multipart/form-data"
            }
          }
        )
        console.log(data)
      } catch (error) {

      }
    }
  }
}