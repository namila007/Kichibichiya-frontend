<template>
<v-flex xs5 md5 offset-xs4 align-center>
  <div class="white elevation-2 fluid">
    <v-toolbar flat dense class="secondary">
    <v-toolbar-title>Login</v-toolbar-title>
    </v-toolbar>
    <div class="pl-4 pr-4 pt-2 pb-2">
      <form autocomplete="on">
        <v-text-field
        v-model="username"
        label="username"
        required
        ></v-text-field>
        <v-text-field
        v-model="password"
        label="Password"
        type="password"
        data-vv-name="Password"
        required
        ></v-text-field>
        <v-alert
        v-model="failbox"
        value:=false
        type="error"
        ><div v-html="error"/>
        </v-alert>
        <v-btn class="cyan" dark @click="login" >Login</v-btn>
        <br>
      </form>
    </div>
  </div>
</v-flex>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      username: '',
      password: '',
      error: null,
      failbox: false
    }
  },
  methods: {
    async login () {
      try {
        this.failbox = false
        this.error = ''
        const response = await AuthenticationService.login({
          username: this.username,
          password: this.password
        })
        if (response.data.error) throw new Error(response.data.error)
        this.$store.dispatch('setToken', response.data.JWTtoken)
        this.$store.dispatch('setUser', response.data.user)
      } catch (err) {
        this.failbox = true
        this.error = err.message
      }
    }
  }
}
</script>

<style scoped>
</style>
