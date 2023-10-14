<template>
    <div class="add-bb-form card col-sm-12 col-md-3 py-3">
      <h3>Lägg till vadslagning</h3>
      <form @submit.prevent="createBet()">
        <div class="form-group">
          <label for="author">Skapare</label>
          <select v-model="create_author" class="form-control">
            <option value="undefined" selected>Välj</option>
            <option
              v-for="user in users"
              :key="user.id"
              :value="user.id"
              class="form-control"
            >
              {{ user.first_name }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <label for="description">Beskrivning</label>
          <textarea
            type="text"
            class="form-control"
            id="description"
            v-model="create_description"
          ></textarea>
        </div>
        <div class="form-group">
          <span>Sandwich bet?</span><br />
          <label class="switch mt-2">
            <input type="checkbox" id="type" v-model="create_sandwich" />
            <span class="slider round"></span>
          </label>
        </div>
        <h5>Vem/vilka är emot</h5>
        <div class="card-header" v-for="user in users" :key="user.id">
          <span class="text-muted">{{ user.first_name }}</span>
          <span class="float-right">
            <label class="switch">
              <input type="checkbox" v-model="create_takers" :value="user.id" />
              <span class="slider round"></span> </label
          ></span>
        </div>
        <button type="submit" class="btn btn-block btn-success my-3">
          Lägg till
        </button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "CreateBeerbet",
    data() {
      return {
        create_author: 'Emil Malm',
        create_description: 'En beskrivning av vadslagningen..',
        create_sandwich: false,
      }
    },
    computed: {
      users: function () {
        return this.$store.state.users;
      },
    }
  };
  </script>
  
  <style>
  </style>
  