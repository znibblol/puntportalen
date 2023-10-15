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
  import {  mapActions } from 'pinia';
  import { useUser } from "./stores/user";

  export default {
    components:  {
      Header,
    },
    created() {
      this.checkLocalStorage();
    },
    methods: {
      ...mapActions(useUser, ["checkLocalStorage"]),
    }
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
