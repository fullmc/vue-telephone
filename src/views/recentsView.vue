<template lang="">
  <div v-for="recent in recents" :key="recent">
  <p v-if="recent.name != ''">
    {{recent.name}}
  </p>
  <p v-else>{{recent.number}}</p>
   {{recent.date}}  
   <button>appeler</button>
  </div>

</template>

<script>

export default {
  name:"recentsView",
  computed: {
    recents(){
      return this.$store.state.recents
    }
  },
}
</script>

<style>
  
</style>