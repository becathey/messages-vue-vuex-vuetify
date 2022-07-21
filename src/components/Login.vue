<template>
    <v-flex sm8 offset-sm2>
        <v-card>
            <v-toolbar dark>
                <v-toolbar-title>Login</v-toolbar-title>
            </v-toolbar>
            <v-form>
                <v-container>
                    <v-layout>
                        <v-flex sx12 md4>
                            <v-text-field v-model='userName' label='User Name' required></v-text-field>
                        </v-flex>
                        <v-flex sx12 md4>
                            <v-text-field v-model='password' label='Password' required></v-text-field>
                        </v-flex>
                    </v-layout>
                </v-container>
                <v-btn @click='login'>Login</v-btn>
            </v-form>
        </v-card>
    </v-flex>
</template>

<script>
// import axios from 'axios'
export default {
    data() {
        return {
            userName: '',
            password: ''
        }
    },
    methods: {
        async login() {
            this.$store.dispatch('login', {userName: this.userName, password: this.password})
        }
    }
}
</script>