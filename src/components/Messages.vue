<template>
    <v-col sm="8" offset-sm="2">
        <v-card>
            <v-toolbar dark>
        <v-toolbar-title>Messages</v-toolbar-title>
            </v-toolbar>
        
        <v-list>
      <v-list-item
        v-for="(message, index) in $store.state.messages" :key="index" :to="'message/' + index"
      >

        <v-list-item-content>
          <v-list-item-title v-text="message.text"></v-list-item-title>
          <v-list-item-sub-title v-text="message.user"></v-list-item-sub-title>
        </v-list-item-content>

      </v-list-item>
    </v-list>
        </v-card>
    </v-col>
</template>

<script>
export default {
    async created() {
        this.$store.dispatch('getMessages')
    }
}
</script>
