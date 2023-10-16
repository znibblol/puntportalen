const betMain = require("../sample_data/bet_main.sample");

exports.seed = function mainSeed(knex) {
  // Deletes ALL existing entries
  return knex("bet_main")
    .del()
    .then(() =>
      // Inserts seed entries
      knex("bet_main").insert(betMain),
    );
};
