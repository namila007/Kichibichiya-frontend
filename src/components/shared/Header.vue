<template>
  <v-toolbar fixed class=primary dark size='40px'>
    <v-toolbar-side-icon>
    </v-toolbar-side-icon>
    <v-toolbar-title class="mr-4" >
      Kichibichiya
    </v-toolbar-title>
  <v-toolbar-items>
    </v-toolbar-items >
    <v-spacer/>
    <v-toolbar-items>
    <v-btn v-if="!$store.state.isUserLogged" flat dark to='/login' exact-active-class>
      Login
    </v-btn>
    <v-btn v-if="!$store.state.isUserLogged" flat dark to='/register' exatct>
      SignUp
    </v-btn>
    </v-toolbar-items>
    <v-toolbar-items v-if="$store.state.isUserLogged">
      <v-btn flat dark :to="{
      name: 'Home'
      }" exact>
      <v-icon size='36px'>add_circle_outline</v-icon>
      </v-btn>
      <v-menu :nudge-width="150">
        <v-toolbar-title slot="activator">
          <span><v-avatar
          color="secondary"
          :tile="false"
          :size='50'>
          <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
          </v-avatar>
          </span>
        </v-toolbar-title>
        <v-list>
          <v-list-tile :to="{
              name: 'Profile'}
              " exact>
            <v-list-tile-title >Profile</v-list-tile-title>
          </v-list-tile>
          <v-list-tile :to="{
              name: 'Setting'}
              " exact>
            <v-list-tile-title >Setting</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="signout" exact>
            <v-list-tile-title  >SignOut</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data: () => ({

  }),

  methods: {
    async signout () {
      try {
        this.$store.dispatch('setToken', null)
        this.$store.dispatch('setUser', null)
        this.$router.push({
          name: 'root'
        })
      } catch (err) {}
    }
  }
}
</script>

<style scoped>
</style>
