<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Webshop</h2>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      msg: 'Welcome to Vue.js'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
