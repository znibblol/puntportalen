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

// const getAll = router.get('/', function(req, res) {
//     knex('bet_main')
//         .join('bet_bets', 'bet_main.id', '=', 'bet_bets.bet_id')
//         .join('users', 'bet_bets.user_id', '=', 'users.id')
//         .select(
//             'users.first_name',
//             'users.last_name',
//             'bet_bets.user_id',
//             'bet_bets.paid',
//             'bet_main.id',
//             'bet_main.description',
//             'bet_main.author_id',
//             'bet_main.secret',
//             'bet_main.type_of'
//             )
//         .then(data => {
//         // let bet = [];
//         // data.forEach(val => {
//         //     bet = [
//         //         {
//         //             description: val.description,

//         //         }
//         //     ]
//         // });
//         res.json(data);
//     })
// });

router.get('/', function(req, res) {
    knex.raw(`
        SELECT 
            main.id AS main_id,
            main.description AS main_description,
            main.author_id AS main_author,
            main.secret AS main_secret,
            main.type_of AS main_type,

            author.id AS author_id,
            author.first_name AS author_first_name,
            author.last_name AS author_last_name,

            takers.id AS takers_id,
            takers.first_name AS takers_first_name,
            takers.last_name AS takers_last_name,
            bet.paid AS takers_paid
            
        FROM bet_main AS main
            LEFT JOIN bet_bets AS bet ON bet.bet_id=main.id
            JOIN users AS author ON main.author_id=author.id
            LEFT JOIN users AS takers ON bet.user_id=takers.id

        `).then((data) => {
            let bets = {};
            data[0].forEach((row) => {            
                if(!bets[row.main_id]) {
                    bets[row.main_id] = {
                    id: row.main_id,
                    secret: row.main_secret,
                    type: row.main_type,
                    description: row.main_description,
                    author: {
                        author_id: row.author_id,
                        first_name: row.author_first_name,
                        last_name: row.author_last_name,
                        paid: row.takers_paid,
                    },
                    takers: []
                    }
                }
                if(bets[row.main_id].author.author_id != row.takers_id) {
                    bets[row.main_id].takers.push({
                        id: row.takers_id,
                        first_name: row.takers_first_name,
                        last_name: row.takers_last_name,
                        paid: row.takers_paid
                    });
                }
            });
            res.json(bets);
    }).catch(error => console.log(error));
});

// router.get('/', function(req, res) {
//     knex('bet_main').select('bet_main.id', 'bet_main.description', 'bet_main.author_id', 'bet_main.secret', 'bet_main.type_of').leftJoin('bet_bets', 'bet_bets.bet_id', 'bet_main.id').then(data => {
//         res.json(data);
//     })
// })



router.get('/:id', function(req, res) {
    knex('bet_main').join('bet_bets', 'bet_main.id', '=', 'bet_bets.bet_id').join('users', 'bet_bets.user_id', '=', 'users.id').select('users.first_name', 'users.last_name', 'bet_bets.user_id', 'bet_bets.paid', 'bet_main.*').where('bet_main.id', req.params.id).then(data => {
        res.json(data);
    });
});


router.post('/', (req, res) => {
    let bb = req.body.beerbet;
    console.log(bb);
    knex('bet_main')
        .insert([{
            'created_at': new Date(),
            'updated_at': new Date(),
            'description': bb.description,
            'author_id': bb.author_id,
            'secret': 0,
            'type_of': bb.type
        }]).then((data) => {
            const newObj = bb.takers.map(taker => {
                return {
                    paid: 0,
                    user_id: taker,
                    bet_id: data,
                    created_at: new Date(),
                    updated_at: new Date(),
                }
            });
                knex('bet_bets')
                    .insert(newObj).then(d => res = d)
                    .catch(error => console.log(error));
            res.json(data);
        }).catch((error) => {
            console.log(error);
        });
        console.log(bb);
});



// router.post('/', function(req, res) {
//     knex('bet_main')
//         .insert([
//             {'created_at': new Date(),
//             'updated_at': new Date(),
//             'description': req.body.description, 
//             'author_id': req.body.author_id, 
//             'secret': req.body.secret, 
//             'type_of': req.body.type},
//         ]).then(function(res) {
//             const betId = res[0];
//             return betId;
//         });
//         req.body.takers.forEach(taker => 
//             knex('bet_bets')
//                 .insert([
//                     {'bet_id': betId}, 
//                     {'user_id': taker.user_id}, 
//                     {'paid': 0}, 
//                     {'created_at': new Date()}, 
//                     {'updated_at': new Date()}
//                 ])
//             }));

module.exports = router;