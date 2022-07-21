<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-btn text to="/">Messages</v-btn>
      <v-btn class="ms-2" text to="/NewMessage">New Message</v-btn>
      <v-spacer />
      <v-btn text v-if="!$store.state.token" to="/Register">Register</v-btn>
      <v-btn text v-if="!$store.state.token" to="/Login">Login</v-btn>
      <v-btn text v-if="$store.state.token" @click="$store.commit('logout')">Logout</v-btn>
    </v-app-bar>

    <v-main>
      <br>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>
