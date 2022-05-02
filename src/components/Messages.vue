<template>
    <v-col sm="8" offset-sm="2">
        <v-card>
            <v-toolbar dark>
        <v-toolbar-title>Messages</v-toolbar-title>
            </v-toolbar>
        
        <v-list>
      <v-list-item
        v-for="(message, index) in messages" :key="index"
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
export default {
    data() {
        return {
            messages: ["hello", "hi", "hey"]
        }
    },
    async created() {
        this.messages = (await axios.get('http://localhost:3000/messages')).data
    }
}
</script>
