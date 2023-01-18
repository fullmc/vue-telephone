<template lang="">
  <div v-for="contact in contacts" :key="contact.name">
    <h1>{{contact.name}}</h1>
    <span>{{contact.number}}</span>
    <button class="appeler" @click="call(contact.name)">Call</button>
  </div>
  <button class="add">+</button>
</template>

<script>

export default {
  name: 'contactView',
  computed: {
    contacts(){
      return this.$store.state.contacts
    }
  },

  methods: {
    call(name,number){ 
      console.log(new Date())
      console.log(name)
      console.log(number)
      let dateClick = new Date()
      let data = {
        name: name,
        number: number,
        date: dateClick.getDate() + '/' + dateClick.getMonth()+1 + '/' + dateClick.getFullYear().toString().substr(-2) + ' - ' + dateClick.getHours() + "h" + dateClick.getMinutes() + 'min' + dateClick.getSeconds() + 'sec',
      }
      this.$store.commit('call',data)
    },
  }
}
</script>

<style scoped>
  .add{
    border:2px solid lightcoral;
    background:lightcoral;
    color:white;
    font-weight:bold;
    font-size:24px;
  }
</style>
