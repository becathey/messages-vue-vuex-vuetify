<template>
    <div>
        <h4 class="display-1">Messages</h4>
        
        <v-list>
      <v-list-item
        v-for="(message, index) in messages" :key="index"
      >

        <v-list-item-content>
          <v-list-item-title v-text="message"></v-list-item-title>
        </v-list-item-content>

      </v-list-item>
    </v-list>
    </div>
</template>

<script>
export default {
    data() {
        return {
            messages: ["hello", "hi", "hey"]
        }
    },
}
</script>
