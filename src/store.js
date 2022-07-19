import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        messages: []
    },
    mutations: {
        updateMessages(state, messages) {
            state.messages = messages
        },
        newMessage(state, message) {
            state.messages.push(message)
        }
    },
    actions: {
        async getMessages({commit}) {
            let messages = (await axios.get("http://localhost:3000/messages")).data
            commit('updateMessages', messages)
        },
        async newMessage({commit}, messageBody) {
            let msg = (await axios.post('http://localhost:3000/messages', {message: messageBody})).data
            commit('newMessage', msg.message)
        },
        async getMessage(_, id) {
            return axios.get(`http://localhost:3000/messages/${id}`)
        },
        // eslint-disable-next-line no-unused-vars
        async register({commit}, registerData) {
            let token = (await axios.post("http://localhost:3000/register", registerData)).data
            localStorage.setItem("token", token)
            axios.defaults.headers.common['Authorization'] = token
        }
    }
})
