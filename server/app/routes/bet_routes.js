const express = require("express");
const knex = require("../../db/db");

const router = express.Router();

router.get("/", (req, res) => {
  knex
    .raw(
      `
        SELECT 
            main.id AS main_id,
            main.description AS main_description,
            main.author_id AS main_author,
            main.secret AS main_secret,
            main.type_of AS main_type,

            author.id AS author_id,
            author.first_name AS author_first_name,
            author.last_name AS author_last_name,
            author.team_name AS author_team_name,

            takers.id AS takers_id,
            takers.first_name AS takers_first_name,
            takers.last_name AS takers_last_name,
            takers.team_name AS takers_team_name,
            bet.paid AS takers_paid
            
        FROM bet_main AS main
            JOIN bet_bets AS bet ON bet.bet_id=main.id
            JOIN users AS author ON main.author_id=author.id
            JOIN users AS takers ON bet.user_id=takers.id

        `,
    )
    .then((data) => {
      const bets = {};
      data[0].forEach((row) => {
        if (!bets[row.main_id]) {
          bets[row.main_id] = {
            id: row.main_id,
            secret: row.main_secret,
            type: row.main_type,
            description: row.main_description,
            author: {
              author_id: row.author_id,
              first_name: row.author_first_name,
              last_name: row.author_last_name,
              team_name: row.author_team_name,
              paid: row.takers_paid,
            },
            takers: [],
          };
        }
        if (bets[row.main_id].author.author_id !== row.takers_id) {
          bets[row.main_id].takers.push({
            id: row.takers_id,
            first_name: row.takers_first_name,
            last_name: row.takers_last_name,
            team_name: row.takers_team_name,
            paid: row.takers_paid,
          });
        }
      });
      res.json(bets);
    })
    .catch((error) => error);
});

router.get("/:id", (req, res) => {
  knex("bet_main")
    .join("bet_bets", "bet_main.id", "=", "bet_bets.bet_id")
    .join("users", "bet_bets.user_id", "=", "users.id")
    .select(
      "users.first_name",
      "users.last_name",
      "bet_bets.user_id",
      "bet_bets.paid",
      "bet_main.*",
    )
    .where("bet_main.id", req.params.id)
    .then((data) => {
      res.json(data);
    });
});

router.post("/", (req, res) => {
  const bb = req.body.beerbet;
  knex("bet_main")
    .insert([
      {
        description: bb.description,
        author_id: bb.author_id,
        type_of: bb.type,
      },
    ])
    .then((data) => {
      const newObj = bb.takers.map((taker) => ({
        user_id: taker,
        bet_id: data,
      }));
      knex("bet_bets")
        .insert(newObj)
        .catch((error) => error);
      res.status(201).json(data);
    })
    .catch((error) => error);
});

module.exports = router;
