<template>
    <div class="container about pt-3">
      <div class="row">
        <div class="offset-sm-3 col-sm-6">
          <form @submit.prevent="login">
            <h2 class="text-centere">Logga in</h2>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control" v-model="email" />
            </div>
            <div class="form-group">
              <label for="password">Lösenord</label>
              <input type="password" class="form-control" v-model="password" />
            </div>
            <a class="text-small text-muted">Glömt lösenord?</a>
            <button class="btn btn-success float-right">Logga in</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
    <script>
  import { mapActions, mapState } from "pinia";
  import { useUser } from "../stores/user";
  
  export default {
    name: "Login",
    data: () => ({
      email: "",
      password: "",
    }),
    computed: {
        ...mapState(useUser, {user_id: "userId"}),
    },
    methods: {
      ...mapActions(useUser, ["postLogin", "postLogout"]),
      login() {
        this.postLogin({ email: this.email, password: this.password });
      },
    },
    mounted() {
      if (this.user_id) {
        this.postLogout();
      }
    },
  };
  </script>
  
    <style>
  </style>
  