<template lang="">
  <div class="phone">
    <div class="input">
      <p v-if ="numberExists == false">{{numero}}</p>
      <p v-if ="numberExists == true">{{numberOf}}</p>
    </div>
    <div class="keypad">
      <button @click="increment(1)">1</button>
      <button @click="increment(2)">2</button>
      <button @click="increment(3)">3</button>
      <button @click="increment(4)">4</button>
      <button @click="increment(5)">5</button>
      <button @click="increment(6)">6</button>
      <button @click="increment(7)">7</button>
      <button @click="increment(8)">8</button>
      <button @click="increment(9)">9</button>
      <button @click="increment(0)">0</button>
      <button @click="addToRecents(numberOf, numero)" class="call">Call</button>
      <button @click="removeDigit()">supp</button>
    </div>
  </div>
</template>
<script>

export default {
  data(){
    return {
      numero: '',
      numberOf: '',
      numberExists : false
    }
  },
  methods: {
    increment(num){
      this.numero = this.numero+num
      for (let i=0; i < this.$store.state.contacts.length; i++)
      if (this.numero == this.$store.state.contacts[i].number){
        this.numberOf=this.$store.state.contacts[i].name 
        this.numberExists = true
        return
      } else{
      this.numberExists = false
      }
      //console.log(this.numberExists)
    },
    removeDigit(){
      this.numero = this.numero.slice(0, -1)
    },

    addToRecents(name, number){
      let dateClick = new Date()
      // console.log(dateClick)
      // console.log(name)
      // console.log(number)
      
      let data = {
        name: name,
        number: number,
        date: dateClick.getDate() + '/' + dateClick.getMonth()+1 + '/' + dateClick.getFullYear() + ' - ' + dateClick.getHours() + "h" + dateClick.getMinutes() + 'min' + dateClick.getSeconds() + 'sec',
      }
      this.$store.commit('call',data)
    },
  }
}
</script>

<style scoped>

  .keypad{
    display:flex;
    justify-content: center;
    flex-wrap:wrap;
    font-size:44px;
    gap:20%;
    margin-top:20px;
    width:40vw;
    margin:auto;
  }
  
    button{
    width:80px;
    height:80px;
    border: black 1px solid;
    border-radius: 100%;
    display:flex;
    align-items: center;
    justify-content: center;
    margin-bottom:10px;
    cursor:pointer;
  }

  .input{
    border: black solid 1px;
    width:100%;
    margin:auto;
    border-radius:8px;
    height:6vh;
    margin-bottom:30px;
    margin-top:30px;
  }
  
  .call{
    background-color:green;
    color:white;
    font-weight:bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    border:none;
  }
</style>