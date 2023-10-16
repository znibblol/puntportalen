const bet_bets = require("../sample_data/bet_bets.sample");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("bet_bets")
    .del()
    .then(() =>
      // Inserts seed entries
      knex("bet_bets").insert(bet_bets),
    );
};
