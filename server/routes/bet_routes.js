const express = require('express');
const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: "127.0.0.1",
        user: "root",
        password: "hejsan123",
        database: "puntportalen",
    }
});
const router = express.Router();

router.get('/', function(req, res) {
    knex('bet_main').join('bet_bets', 'bet_main.id', '=', 'bet_bets.bet_id').join('users', 'bet_bets.user_id', '=', 'users.id').select('users.first_name', 'users.last_name', 'bet_bets.user_id', 'bet_bets.paid', 'bet_main.*').then(data => {
        res.json(data);
    })
});


module.exports = router;