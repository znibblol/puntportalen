<template>
  <div class="container home pt-3">
    <h1>This is PuntPortalen</h1> 
    <span class="fa fa-th-large" @click="viewType = false" v-bind:class="{ active: !viewType }"></span>&nbsp;&nbsp;
    <span class="fa fa-list" @click="viewType = true" v-bind:class="{ active: viewType }"></span>
    <ul class="list-unstyled row" v-if="!viewType">
      <div class="col-sm-6 col-md-4" v-for="beerbet in beerbets" :key="beerbet.id">
        <li class="card">
          <div class="card-header">
            <h3>För: {{ beerbet.author.first_name }} <span class="float-right" style="font-size:0.9rem;">id:({{ beerbet.id }})</span></h3>
          </div>
          <div class="card-body">
            <h4>{{ beerbet.description }}</h4>
            <br>
            <h5 v-if="!beerbet.type"><strong>Typ: &#x1f37a;</strong></h5>
            <h5 v-else><strong>Typ: &#x1f96a;</strong></h5>
            <h5><strong>Emot:</strong></h5>
            <ul class="list-unstyled">
              <li v-for="taker in beerbet.takers" :key="taker.id" class="card-header">{{ taker.first_name }} <span class="float-right text-success" v-if="taker.paid">Betald</span><span class="float-right text-warning" v-else>Ej Betald</span></li>
            </ul>
          </div>
        </li>
      </div>
    </ul>
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
    <div class="add-bb-form card col-sm-3 py-3" :class="{ hideBbForm: showBbForm }">
      <h3>Lägg till vadslagning</h3>
      <form>
        <div class="form-group">
          <label for="author">Skapare</label>
          <input type="text" class="form-control" id="author">
        </div>
        <div class="form-group">
          <label for="description">Beskrivning</label>
          <textarea type="text" class="form-control" id="description"></textarea>
        </div>
        <div class="form-group">
          <span>Sandwich bet?</span><br>
          <label class="switch mt-2">
            <input type="checkbox" id="type">
            <span class="slider round"></span>
          </label>
        </div>
        <h5>Vem/vilka är emot</h5>
        <div class="card-header" v-for="user in users" :key="user.id">
          <span class="text-muted">{{ user.first_name }}</span> <span class="float-right">
          <label class="switch">
            <input type="checkbox" id="type">
            <span class="slider round"></span>
          </label></span>
        </div>
        <button type="prevent.submit" class="btn btn-block btn-success my-3">Lägg till</button>
      </form>
    </div>
    <a href="javascript:void(0)" class="add-btn" @click="!showBbForm == false || showBbForm == true">+</a>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data: () =>  ({
    beerbets: [],
    users: [],
    viewType: false,
    showBbForm: false,
  }),
  mounted() {
    this.beerbets = this.$store.state.beerbets;
    this.users = this.$store.state.users;
  },
  methods: {
  },
  computed: {
  }
}
</script>

<style lang="scss">
  .col-sm-6 {
    padding: 15px;
  }
  .fa {
    font-size: 2em;
  }
  .active {
    color: #E0FF4F;
  }
  .add-btn {
    font-size: 3rem;
    background: #E0FF4F;
    color: #222;
    border-radius: 50px;
    padding: 10px 30px;
    transition: all 200ms;
    position: absolute;
    bottom: 20px;
    right: 20px;
  }
  .add-bb-form {
    position: absolute;
    top: 200px;
    right: 25px;
    transition: all 200ms ease-in-out;
  }
  .hideBbForm {
    right: -1000px;
  }
  .add-btn:hover {
    text-decoration: none;
    color: #222;
    background: #aac33b;
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
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
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