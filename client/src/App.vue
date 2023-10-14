<script setup>
  import Header from "./components/Header.vue";
</script>

<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
  export default {
    components:  {
      Header,
    },
  }
</script>

<style scoped>
  body {
    background: #282c34;
  }
  .bg-dark {
    background: #282c34 !important;
  }
</style>
