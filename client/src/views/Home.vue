<template>
  <div class="container home pt-3">
    <h1 class="text-center">Välkommen till puntportalen</h1>
  </div>
</template>

<script>
// @ is an alias to /src

import { mapActions } from "vuex";

export default {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      return [(args[0].title = "Beerbets | Puntportalen.se")];
    });
  },
  name: "Home",
  data: () => ({
    viewType: false,
    create_author: this.$store.state.user.id,
    create_description: "",
    create_sandwich: false,
    create_takers: [],
  }),
  mounted() {
    this.$store.dispatch("getBeerbets");
    this.$store.dispatch("getUsers");
  },
  methods: {
    ...mapActions(["postBeerbet"]),
    editBeerbet(beerbet) {
      beerbet.editing = true;
    },
    clearForm() {
      this.create_author = "";
      this.create_description = "";
      this.create_sandwich = false;
      this.create_takers = [];
    },
    showForm() {
      $(".add-bb-form").toggleClass("open");
    },
    createBet() {
      const bb = {
        author_id: this.create_author,
        description: this.create_description,
        type: this.create_sandwich,
        takers: this.create_takers,
      };
      bb.takers.push(this.create_author);
      this.clearForm();
      this.postBeerbet(bb);
      this.$store.dispatch("getBeerbets");
      this.showForm();
    },
  },
  computed: {
    beerbets: function () {
      return this.$store.state.beerbets;
    },
    users: function () {
      return this.$store.state.users;
    },
  },
};
</script>

<style>
.card {
  border: none;
  color: #e1e1e1;
  text-shadow: none;
  transition: all 200ms;
}
.card:hover {
  background: #393f46;
}
.card h1,
.card h2,
.card h3,
.card h4,
.card h5,
.card h6 {
  text-shadow: none;
}
.col-sm-6 {
  padding: 15px;
}

.fa {
  font-size: 2em;
}
.list-selector {
  transition: all 200ms;
}
.list-selector:hover {
  color: #79e679;
  cursor: pointer;
}
.active {
  color: #62c462;
}
.active:hover {
  color: #62c462;
  cursor: not-allowed;
}

.add-btn {
  font-size: 3rem;
  background: #62c462;
  color: #222;
  border-radius: 50px;
  padding: 0px 23px;
  transition: all 200ms;
  position: fixed;
  bottom: 20px;
  right: 20px;
}

.add-bb-form {
  position: fixed;
  top: 3%;
  right: -1000px;
  transition: all 200ms ease-in-out;
}

.open {
  right: 10px;
}

.hideBbForm {
  right: -1000px;
}

.add-btn:hover {
  text-decoration: none;
  color: #222;
  background: #79e679;
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
