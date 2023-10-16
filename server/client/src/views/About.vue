<template>
  <div class="container about pt-3">
    <div class="row">
      <div class="col-md-3">
        <div class="card p-3">
          <p>
            &#x1f37a; Beerbet<span class="float-right text-muted">id:(1)</span>
          </p>
          <h5>
            Justin Herbert får mer fantasypoäng säsongen 20/21 än Joe Burrow
          </h5>
          <h5 class="my-3">För: <span class="text-danger">Emil</span></h5>
          <ul class="list-unstyled">
            <h5>Emot:</h5>
            <li style="padding: 7px 0">
              Carlos <span class="text-warning float-right">Ej betald</span>
            </li>
            <li style="padding: 7px 0">
              Henrik <span class="text-success float-right">Betald</span>
            </li>
            <li style="padding: 7px 0">
              Oskar <span class="text-warning float-right">Ej betald</span>
            </li>
            <li style="padding: 7px 0">
              Markus <span class="text-warning float-right">Ej betald</span>
            </li>
            <li style="padding: 7px 0">
              Mattias <span class="text-success float-right">Betald</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card p-3">
          <p>
            &#x1f96a; Sandwich
            <span class="float-right text-muted">id:(2)</span>
          </p>
          <h5>Browns kommer vinna AFC North säsongen 19/20</h5>
          <h5 class="my-3">För: <span class="text-danger">Henrik</span></h5>
          <ul class="list-unstyled">
            <h5>Emot:</h5>
            <li style="padding: 7px 0">
              Jonas <span class="text-warning float-right">Ej betald</span>
            </li>
            <li style="padding: 7px 0">
              Mattias <span class="text-success float-right">Betald</span>
            </li>
            <li style="padding: 7px 0">
              Emil <span class="text-success float-right">Betald</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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

.switch-about {
  position: relative;
  float: right;
}

.switch-about > .switch-input {
  display: none;
}

.switch-about > .switch-label {
  display: block;
  width: 48px;
  height: 24px;
  text-indent: -150%;
  clip: rect(0 0 0 0);
  color: transparent;
  user-select: none;
}

.switch-about > .switch-label::before,
.switch-about > .switch-label::after {
  content: "";
  display: block;
  position: absolute;
  cursor: pointer;
}

.switch-about > .switch-label::before {
  width: 100%;
  height: 100%;
  background-color: #dedede;
  border-radius: 9999em;
  -webkit-transition: background-color 0.25s ease;
  transition: background-color 0.25s ease;
}
.switch-about > .switch-label::after {
  top: 0;
  left: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.45);
  -webkit-transition: left 0.25s ease;
  transition: left 0.25s ease;
}

.switch-about > .switch-input:checked + .switch-label::before {
  background-color: #89c12d;
}

.switch-about > .switch-input:checked + .switch-label::after {
  left: 24px;
}
</style>
