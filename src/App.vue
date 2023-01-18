<template>
  <nav>
    <router-link to="/">Clavier</router-link> 
    <router-link to="/contact">Contact</router-link> 
    <router-link to="/recents">Recents</router-link> 
    <router-link to="/form">New contact</router-link> 
  </nav>
  <router-view/>
</template>

<script>
    export default { 
    name: 'App',
  }
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display:grid;
  place-items: center;
  
}

nav {
  padding: 30px;
  display:flex;
  justify-content: space-around;
  align-items: center;
}

nav a{
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  display: flex;
  padding:20px;
  font-size:20px;
}

nav a.router-link-exact-active {
  color: #0fa3b1;
}
</style>
