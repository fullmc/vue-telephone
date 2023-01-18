
import { createStore } from 'vuex'

export default createStore({
  state: {

    recents: [

    ],

    contacts: [
      {
        name: 'Ryoma',
        number: '0623335682'
      },
      {
        name: "Maman",
        number: '0618815764'
      },
      {
        name:'Nas',
        number: '0344568129',
      },
    ],
  },

  getters: {
  },

  mutations: {
    call(state,recent){
      state.recents.push(recent)
    },
    addContact(state,contact){ 
      state.contacts.push(contact)
    },
  },

  actions: {
  },
  modules: {
  }
})