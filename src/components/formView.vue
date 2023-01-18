<template lang="">
  <div>
    <form @submit.prevent="addContact">
      <input type="text" placeholder="name" v-model="formData.name" />
      <input type="tel" placeholder="number" v-model="formData.number" /> 
      <p v-if="formData.number != number" class="error"> que des chiffres !</p> 
    </form>
    <button type="submit" @click="addContact(contact.name, contact.number)">+</button>
  </div>
</template>

<script>
export default {
  name:"formView",
  components : {

  },

  data(){
    return {
      formData : {
        name: '',
        number : null,
      }
    }
  },
  methods : {
    addContact() {
      if (this.formData.name== "" || this.formData.number == null) return;
      if (this.$store.state.contacts.find(contact => contact.name === this.formData.name)) return
      this.$store.commit('addContact',this.formData) 

      this.formData = {
        pseudo: "",
        age: null,
      };
    },
  }
}
</script>

<style>
  
</style>