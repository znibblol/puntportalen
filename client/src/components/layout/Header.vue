<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link to="/" class="navbar-brand"
        ><img
          src="../../assets/puntportalen_logo.png"
          class="img-fluid brand-logo"
      /></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor02"
        aria-controls="navbarColor02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/"
              >Hem <span class="sr-only">(current)</span></router-link
            >
          </li>
          <li class="nav-item" v-if="$store.state.user.id">
            <router-link class="nav-link" to="/beerbets">Beerbets</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" v-if="this.$store.state.user.id">
            <router-link class="nav-link" to="/user"
              >{{ this.$store.state.user.first_name }}
              {{ this.$store.state.user.last_name }}</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">{{
              authText
            }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  computed: {
    authText: function () {
      return this.$store.state.user.id ? "Logga ut" : "Logga in";
    },
  },
};
</script>

<style scoped>
.navbar-dark {
  border: 0;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
}
.navbar-dark > .navbar-brand {
  border: none;
}
.navbar-dark > .brand-logo {
  width: 55px;
}
.navbar-dark > .nav-item > .nav-link {
  border: none;
  transition: all 200ms;
  color: #fff;
}
.navbar-dark > .nav-item > .nav-link:hover {
  background: transparent;
  border: none;
  opacity: 0.7;
}

.navbar-dark > .nav-item > .btn {
  margin-top: 6px;
  padding: 0.5rem 1rem;
  transition: all 200ms;
}
.navbar-dark > .nav-item > .btn-login {
  background: transparent;
  color: #fff;
  border-color: #fff;
}
.navbar-dark > .nav-item > .btn-login:hover {
  opacity: 0.7;
}
</style>
