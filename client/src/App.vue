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
  }
}
</script>

<style lang="scss">

</style>
