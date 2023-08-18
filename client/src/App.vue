<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "../src/components/layout/Header";

export default {
  components: {
    Header,
  },
  mounted() {},
};
</script>

<style>
body {
  background: #282c34;
}
.bg-dark {
  background: #282c34 !important;
}
</style>
