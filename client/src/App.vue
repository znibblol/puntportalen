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
  }
}
</script>

<style lang="scss">

</style>
