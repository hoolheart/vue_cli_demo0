<template>
  <div class="w-full">
    <img class="object-none object-center w-full h-48" alt="Vue logo" src="../assets/logo.png">
    <div class="text-center text-2xl w-full">
      <span v-if="is_register">注册</span>
      <span v-else-if="!user_info.IsLogIn">登录</span>
      <span v-else>欢迎, {{user_info.UserName}}</span>
    </div>
    <p class="text-center text-red-600 w-full h-6">{{warn_info}}</p>
    <p class="h-2" />
    <div class="flex flex-row justify-center">
      <div class="grid grid-cols-3 gap-x-0 gap-y-1 w-72">
        <div v-if="is_register" class="text-gray-600 text-left align-middle">用户名</div>
        <input v-if="is_register" type="text" v-model="user_info.UserName" class="py-1 px-2 rounded-md bg-gray-100 focus:bg-white text-gray-900 col-span-2" />
        <div class="text-gray-600 text-left align-middle">邮箱</div>
        <input type="text" v-model="user_info.UserEmail" :disabled="user_info.IsLogIn" class="py-1 px-2 rounded-md bg-gray-100 focus:bg-white text-gray-900 col-span-2" />
        <div class="text-gray-600 text-left align-middle">密码</div>
        <input type="password" v-model="password" :disabled="user_info.IsLogIn" class="py-1 px-2 rounded-md bg-gray-100 focus:bg-white text-gray-900 col-span-2" />
        <div v-if="is_register" class="text-gray-600 text-left align-middle">再次输入</div>
        <input v-if="is_register" type="password" v-model="repeat" class="py-1 px-2 rounded-md bg-gray-100 focus:bg-white text-gray-900 col-span-2" />
      </div>
    </div>
    <div class="flex flex-row justify-center">
      <div class="w-72 flex flex-row justify-end h-6">
        <button v-if="is_register" @click="switch_to_login()" class="bg-transparent border-none text-blue-300 hover:text-blue-600">已注册用户?</button>
        <button v-else-if="!user_info.IsLogIn" @click="switch_to_register()" class="bg-transparent border-none text-blue-300 hover:text-blue-600">还没有注册?</button>
      </div>
    </div>
    <p class="h-2" />
    <div class="flex flex-row justify-center">
      <button v-if="is_register" @click="register()" class="w-16 rounded-lg px-2 py-2 bg-blue-900 hover:bg-blue-600 text-center text-white font-bold">注册</button>
      <button v-else-if="!user_info.IsLogIn" @click="log_in()" class="w-16 rounded-lg px-2 py-2 bg-blue-900 hover:bg-blue-600 text-center text-white font-bold">登录</button>
      <button v-else @click="log_out()" class="w-16 rounded-lg px-2 py-2 bg-blue-900 hover:bg-blue-600 text-center text-white font-bold">退出</button>
    </div>
  </div>
</template>

<script>
import { CheckEmpty, ValidateEmail } from '../assets/commonutil'
import { JsonGet, JsonPost, JsonDelete } from '../assets/json_request'

export default ({
  name: 'Account',
  data () {
    return {
      warn_info: '',
      is_register: false,
      password: '',
      repeat: ''
    }
  },
  computed: {
    user_info: function () {
      return this.$store.state.UserInfo
    }
  },
  mounted () {
    if (this.user_info.IsLogIn) {
      var obj = { session_id: this.user_info.SessionID }
      JsonGet('/api/user/session', obj, (echo) => {
        if (!echo.result) {
          this.log_out()
        }
      })
    }
  },
  methods: {
    switch_to_login: function () {
      this.is_register = false
    },
    switch_to_register: function () {
      this.is_register = true
    },
    register: function () {
      if (CheckEmpty(this.user_info.UserName)) { // check user name
        this.warn_info = '请输入用户名'
      } else if (!ValidateEmail(this.user_info.UserEmail)) { // check email
        this.warn_info = '邮箱地址不合法'
      } else if (CheckEmpty(this.password)) { // check password
        this.warn_info = '请输入密码'
      } else if (CheckEmpty(this.repeat)) {
        this.warn_info = '请再次输入密码'
      } else if (this.password !== this.repeat) { // check repeat password
        this.warn_info = '密码不一致'
      } else {
        this.warn_info = ''
        JsonPost('/api/user/user', {
          email: this.user_info.UserEmail,
          name: this.user_info.UserName,
          password: this.password
        }, echo => {
          if (echo.result) {
            this.warn_info = '注册成功'
            this.is_register = false
          } else {
            this.warn_info = '注册失败: ' + echo.error
          }
        }, error => {
          this.warn_info = '未知错误: ' + error.toString()
        })
      }
    },
    log_in: function () {
      if (!ValidateEmail(this.user_info.UserEmail)) { // check email
        this.warn_info = '邮箱地址不合法'
      } else if (CheckEmpty(this.password)) { // check password
        this.warn_info = '请输入密码'
      } else {
        this.warn_info = ''
        JsonPost('/api/user/login', {
          email: this.user_info.UserEmail,
          password: this.password
        }, echo => {
          if (echo.result) {
            this.$store.commit('LOG_IN', {
              user_id: echo.user.user_id,
              session_id: echo.session.session_id,
              email: echo.user.email,
              user_name: echo.user.name
            })
            this.password = ''
            this.warn_info = '登录成功'
          } else {
            this.warn_info = '登录失败: ' + echo.error
          }
        }, error => {
          this.warn_info = '未知错误: ' + error
        })
      }
    },
    log_out: function () {
      if (this.user_info.IsLogIn) {
        JsonDelete('/api/user/logout', {
          session_id: this.user_info.SessionID
        })
        this.$store.commit('LOG_OUT')
        this.warn_info = '已退出'
      }
    }
  }
})
</script>
