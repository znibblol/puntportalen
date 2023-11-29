<script setup></script>

<template>
  <div id="user" class="container">
    <div class="row">
      <div class="col-sm-4 offset-sm-4">
        <h3>Min användare</h3>
        <div class="form-group">
          <label for="first_name">Förnamn</label>
          <input
            type="text"
            class="form-control"
            id="first_name"
            v-model="this.user.first_name"
          />
        </div>
        <div class="form-group">
          <label for="last_name">Efternamn</label>
          <input
            type="text"
            class="form-control"
            id="last_name"
            v-model="this.user.last_name"
          />
        </div>
        <div class="form-group">
          <label for="email">Epost</label>
          <input
            type="email"
            class="form-control"
            id="email"
            v-model="this.user.email"
          />
        </div>
        <div class="form-group">
          <label for="residence">Boende</label>
          <input
            type="text"
            class="form-control"
            id="residence"
            v-model="this.user.residence"
          />
        </div>
        <div class="form-group">
          <label for="team_name">Lagnamn</label>
          <input
            type="text"
            class="form-control"
            id="team_name"
            v-model="this.user.team_name"
          />
        </div>
        <div class="form-group">
          <label for="allergies">Allergier</label>
          <input
            type="text"
            class="form-control"
            id="allergies"
            v-model="this.user.allergies"
          />
        </div>
        <div class="form-group">
          <label for="special_diet">Specialkost</label>
          <input
            type="text"
            class="form-control"
            id="special_diet"
            v-model="this.user.special_diet"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia";
import useUser from "../stores/user";

export default {
  data() {
    return {
      name: "Emil Malm",
    };
  },
  computed: {
    ...mapState(useUser, { user: "userData" }),
  },
};
</script>

<style scoped>
#user {
  margin-top: 30px;
}
#user h3 {
  font-weight: 400;
}
</style>
