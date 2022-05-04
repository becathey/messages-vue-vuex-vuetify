<template>
    <v-col sm="8" offset-sm="2">
        <v-card>
            <v-toolbar dark>
        <v-toolbar-title>Messages</v-toolbar-title>
            </v-toolbar>
        
        <v-list>
      <v-list-item
        v-for="(message, index) in store.state.messages" :key="index"
      >

        <v-list-item-content>
          <v-list-item-title v-text="message"></v-list-item-title>
        </v-list-item-content>

      </v-list-item>
    </v-list>
        </v-card>
    </v-col>
</template>

<script>
import axios from 'axios'
import store from '../store'

export default {
    data() {
        return {
            store
        }
    },
    async created() {
        store.state.messages = (await axios.get('http://localhost:3000/messages')).data
    }
}
</script>
