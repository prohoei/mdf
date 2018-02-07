<template>
  <div id="app">

    <my-header></my-header>

    <main>
      <router-view></router-view>
    </main>

    <my-footer></my-footer>

  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'

  export default {
    components: {
      'my-header': Header,
      'my-footer': Footer
    }
  };
</script>

<style lang="scss">
  @import 'scss/style.scss';
</style>