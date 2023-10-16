const users = require("../sample_data/users.sample");

exports.seed = function userSeed(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(() =>
      // Inserts seed entries
      knex("users").insert(users),
    );
};
