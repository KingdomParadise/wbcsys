import appConfig from '@/appConfig'
import router from '@/router'
import axios from 'axios'
import * as types from '../mutation-types'
import Vue from 'vue'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import store from '@/store'

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
    qaGroups: [],
    qaSearchVal: '',
    answers: []
  },
  getters: {
    newQuestion: state => state.newQuestion,
    qaGroups: state => state.qaGroups,
    qaSearchVal: state => state.qaSearchVal,
    answers: state => state.answers
  },
  mutations: {
    [types.SET_NEW_QUESTION] (state) {
      state.newQuestion = {
        content: '',
        anonymous: false,
        tag_id: 0,
        attachment: null
      }
    },
    [types.SET_QA_GROUP] (state, {qaGroups}) {
      state.qaGroups = qaGroups
    },
    [types.INIT_ANSWERS] (state) {
      var answers = {}
      state.qaGroups.forEach(qaGroup => {
        answers[qaGroup.id] = {
          content: '',
          attachment: null
        }
      })
      state.answers = answers
    },
    [types.SET_ANSWERS] (state, {answers}) {
      state.answers = answers
    },
    [types.SET_QA_SEARCHVAL] (state, {searchVal}) {
      state.qaSearchVal = searchVal
    }
  },
  actions: {
    async retrieveQAGroup ({commit, state}) {
      try {
        const { data } = await axios.post(apiBaseUrl + 'qa/retrieve_qa_group', { 
          currentCount: state.qaGroups.length,
          search: state.qaSearchVal
        }, {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}})
        if (data.success) {
          commit(types.SET_QA_GROUP, {qaGroups: data.msg.qaGroups})
          commit(types.INIT_ANSWERS)
        } else {

        }
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
        if (data.success) {
          commit(types.SET_NEW_QUESTION)
          Vue.$toast({
            component: ToastificationContent,
            position: 'top-right',
            props: {
              title: `成功`,
              icon: 'CoffeeIcon',
              variant: 'success',
              text: `ユーザー登録は成功です。`,
            },
          })
          var newQuestion = [data.msg.question]
          state.qaGroups.forEach(item => {
            newQuestion.push(item)
          })
          state.answers[data.msg.question.id] = {content: '', attachment:null}
          commit(types.SET_QA_GROUP,{ qaGroups: newQuestion })
        } else {

        }
      } catch (error) {
        commit('auth/'+ types.LOGOUT)

      }
    },

    async postAnswer ({commit, state}, payload) {
      try {
        let formData = new FormData()
        Object.keys(payload.answer).forEach(key => {
          formData.append(key, payload.answer[key])
        })
        formData.append('question_id', payload.question_id)
        const {data} = await axios.post(
          apiBaseUrl + 'qa/post_answer',
          formData,
          {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
              'Content-Type': "multipart/form-data"
            }
          }
        )
        if (data.success) {
          Vue.$toast({
            component: ToastificationContent,
            position: 'top-right',
            props: {
              title: `成功`,
              icon: 'CoffeeIcon',
              variant: 'success',
              text: `ユーザー登録は成功です。`,
            },
          })
          var question_id = data.msg.answer.question_id
          var newAnswer = data.msg.answer
          state.qaGroups.forEach(item => {
            if (item.id == question_id) {
              item.answer = [newAnswer, ...item.answer]
            }
          })
          commit(types.INIT_ANSWERS)
        }
      } catch (error) {
        commit('auth/'+ types.LOGOUT)

      }
    },

    async follow({commit, state}, payload) {
      try {
        const {data} = await axios.post(
          apiBaseUrl + 'qa/follow',
          payload,
          {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
          }
        )
        if (data.success) {
          var qaGroups = state.qaGroups
          if (data.msg.follow.category == 1) {
            qaGroups.forEach(item => {
              if (item.id == data.msg.follow.follow_id) {
                item.score = data.msg.score
              }
            })
          } else {
            qaGroups.forEach(item => {
              item.answer.forEach(item => {
                if (item.id == data.msg.follow.follow_id) {
                  item.score = data.msg.score
                }
              })
            })
          }
          commit(types.SET_QA_GROUP, {qaGroups})
        } else {
          Vue.$toast({
            component: ToastificationContent,
            position: 'top-right',
            props: {
              title: data.msg.message,
              icon: 'CoffeeIcon',
              variant: 'danger',
            },
          })
        }
      } catch (error) {
        commit('auth/'+ types.LOGOUT)
      }
    }
  }
}