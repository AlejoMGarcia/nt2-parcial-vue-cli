<template>
  <div id="app" class="container-fluid mt-2">
    <div class="jumbotron">
      <h1>
        Resolución del parcial
      </h1>
      <br>
      <Navbar />
      
      <router-view>
        
      </router-view>

    </div>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
#app {


}

h1 {
  color: darkslategray;
}

</style>
