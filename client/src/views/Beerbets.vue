<template>
    <div class="container home pt-3">
      <div class="row mb-3">
        <div class="col-sm-12">
          <h1 style="display: inline-block">Vadslagningar</h1>
          <div class="pt-2 float-right">
            <span
              class="list-selector fa fa-th-large"
              @click="viewType = false"
              v-bind:class="{ active: !viewType }"
            ></span
            >&nbsp;&nbsp;
            <span
              class="list-selector fa fa-list"
              @click="viewType = true"
              v-bind:class="{ active: viewType }"
            ></span>
          </div>
        </div>
      </div>
      <div class="list-unstyled row" v-if="!viewType">
        <div
          class="col-xs-6 col-sm-6 col-md-4 col-lg-3"
          v-for="beerbet in beerbets"
          :key="beerbet.id"
        >
          <div class="card p-3">
            <p v-if="!beerbet.type">
              &#x1f37a; Beerbet<span class="float-right text-muted"
                >id:({{ beerbet.id }})</span
              >
            </p>
            <p v-else>
              &#x1f96a; Sandwich<span class="float-right text-muted"
                >id:({{ beerbet.id }})</span
              >
            </p>
            <h5>{{ beerbet.description }}</h5>
            <h5 class="my-3">
              För:
              <span class="text-danger">{{ beerbet.author.first_name }}</span>
            </h5>
            <ul class="list-unstyled">
              <h5>Emot:</h5>
              <li
                style="padding: 7px 0"
                v-for="taker in beerbet.takers"
                :key="taker.id"
              >
                {{ taker.first_name }}
                <span class="text-success float-right" v-if="taker.paid"
                  >Betald</span
                >
                <span class="text-warning float-right" v-else>Ej betald</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <table class="table table-striped" v-else>
        <thead>
          <tr>
            <th>Typ av vad</th>
            <th>Kort beskrivning</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="beerbet in beerbets" :key="beerbet.id">
            <td v-if="!beerbet.type">&#x1f37a;</td>
            <td v-else>&#x1f96a;</td>
            <td>{{ beerbet.description }}</td>
            <td class="text-warning">Ej klar</td>
          </tr>
        </tbody>
      </table>
      <router-link to="/create-beerbet" class="add-btn"
        >Skapa ett nytt</router-link
      >
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  
  import { mapState, mapActions } from 'pinia';
  import { useBets } from "../stores/bets";
  
  export default {
    name: "Home",
    data: () => ({
      viewType: false,
    }),
    created() {
        this.getBeerbets();
    },
    methods: {
      ...mapActions(useBets, ["getBeerbets"]),
    },
    computed: {
        ...mapState(useBets, {beerbets: "results"}),
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
  