const express = require('express');
const knex = require('../db/db');
const router = express.Router();
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

const saltRounds = 10;

router.get('/', function (req, res) {
  knex.select('*').from('users').then(data => {
    res.json(data);
  }).catch(error => console.log(error));
});



router.get('/:id', function (req, res) {
  knex('bet_main').join('bet_bets', 'bet_main.id', '=', 'bet_bets.bet_id').join('users', 'bet_bets.user_id', '=', 'users.id').select('users.first_name', 'users.last_name', 'bet_bets.user_id', 'bet_bets.paid', 'bet_main.*').where('bet_main.id', req.params.id).then(data => {
    res.json(data);
  });
});

router.post('/login', function (req, res) {
  // bcrypt.hash('carlos', saltRounds, function (err, hash) {
  //   console.log(hash);
  // })
  knex.select('hash').from('users').where('email', req.body.email).
    then(dbhash => {
      bcrypt.compare(req.body.password, dbhash[0].hash, function (err, result) {
        // console.log(dbhash[0].hash, result);
        if (result == true) {
          let token = uuidv4();
          console.log(token);
          knex.select('email', 'id', 'first_name', 'last_name', 'residence', 'logo', 'team_name').from('users').where('email', req.body.email).
            then(user => {
              knex.insert([{
                token: token,
                user_id: user[0].id
              }]);
              res.json({
                success: true,
                message: 'Du har loggat in..',
                user: user[0],
                token: token,
              });
            })
        } else {
          res.status(401).json({
            success: false,
            message: 'Något gick fel..'
          });
        }
      });
    }).catch(err => res.status(500).json({ success: false, message: 'Något gick fel...' }));
});


module.exports = router;
