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
      <v-btn text>Login</v-btn>
    </v-app-bar>

    <v-main>
      <br>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
// import Messages from './components/Messages';
// import NewMessage from './components/NewMessage'

export default {
  name: 'App',

  components: {
    // Messages,
    // NewMessage,
  },

  data: () => ({
    //
  }),
};
</script>
