import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    UserInfo: {
      IsLogIn: false,
      UserID: '',
      SessionID: '',
      UserEmail: '',
      UserName: ''
    }
  },
  mutations: {
    LOG_IN (state, payload) {
      state.UserInfo.IsLogIn = true
      state.UserInfo.UserID = payload.user_id
      state.UserInfo.SessionID = payload.session_id
      state.UserInfo.UserEmail = payload.email
      state.UserInfo.UserName = payload.user_name
    },
    LOG_OUT (state) {
      state.UserInfo.IsLogIn = false
      state.UserInfo.UserID = ''
      state.UserInfo.SessionID = ''
      state.UserInfo.UserEmail = ''
      state.UserInfo.UserName = ''
    }
  },
  actions: {
  },
  modules: {
  }
})
