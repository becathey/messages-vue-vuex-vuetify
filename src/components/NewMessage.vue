<template>
<v-col
    sm="8"
    offset-sm="2"
>
<v-card>
    <v-toolbar dark>
        <v-toolbar-title>New Message</v-toolbar-title>
    </v-toolbar>
  <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="messageBody"
            label="Message"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <v-btn @click="submit">
      submit
    </v-btn>
  </v-form>
</v-card>
</v-col>
</template>

<script>
export default {
    data() {
        return {
            messageBody: ""
        }
    },
    methods: {
        async submit() {
            try {
                this.$store.dispatch('newMessage', this.messageBody)
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>