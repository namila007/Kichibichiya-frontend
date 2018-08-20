<template>
<v-flex xs5 md5 offset-xs4 align-center>
  <div class="white elevation-2 fluid">
    <v-toolbar flat dense class="cyan" dark>
    <v-toolbar-title>Register</v-toolbar-title>
    </v-toolbar>
    <div class="pl-4 pr-4 pt-2 pb-2">
      <slot>
        <form autocomplete="off" name='tab-track'>
          <v-text-field
            v-model="email"
            label="E-mail"
            data-vv-name="email"
            required
          ></v-text-field>
          <v-text-field
            v-model="username"
            label="Username"
            required
          ></v-text-field>
          <v-text-field
            v-model="name"
            label="Name"
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
            type="password"
            autocomplete="new-password"
            data-vv-name="Password"
            required
          ></v-text-field>
          <v-alert
          v-model="successbox"
          value:=false
          type="success">
          <div v-html="success" />
          </v-alert>
          <v-alert
          v-model="failbox"
          value:=false
          type="error"
          ><div v-html="error"/>
          </v-alert>
        <v-btn class="cyan" dark @click="register" >Register</v-btn>
        <br>
        </form>
      </slot>
    </div>
  </div>
</v-flex>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      username: '',
      name: '',
      password: '',
      error: null,
      failbox: false,
      successbox: false,
      success: null
    }
  },
  methods: {
    async register () {
      this.failbox = false
      this.successbox = false
      try {
        this.error = ''
        const response = await AuthenticationService.register({
          email: this.email,
          username: this.username,
          name: this.name,
          password: this.password
        })
        if (response.data.error) throw new Error(response.data.error)
        this.success = 'User Created'
        this.successbox = true
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
