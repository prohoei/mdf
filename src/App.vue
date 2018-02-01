<template>
  <div id="app">
    <div class="example">{{ msg }}</div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello there'
    }
  }
}
</script>

<style lang="scss" scoped>
   @import 'scss/main.scss'
</style>

<!--
  Src Imports
<template src="./template.html"></template>
<style src="./style.css"></style>
<script src="./script.js"></script>
-->
