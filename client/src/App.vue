<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from "../src/components/layout/Header";

export default {
  components: {
    Header,
  },
  mounted() {
    this.$store.dispatch('getBeerbets');
    this.$store.dispatch('getUsers');
  }
}
</script>

<style lang="scss">

</style>
