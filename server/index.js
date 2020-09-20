const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const betRouter = require('./routes/bet_routes');
const userRouter = require('./routes/user_routes');
const { urlencoded } = require('body-parser');

// init app
const app = express();

// add middleware
app.use(morgan('common'));
app.use(bodyParser.json());
bodyParser.urlencoded({extended: true});
app.use(cors());
app.use(helmet());
app.use('/api/beerbet', betRouter);
app.use('/api/users', userRouter);

// Create simple routes
// app.get('/',  (req, res) => {
//     res.json({
//         msg: 'Hello World!'
//     });
//     console.log('Hello World!');
// });

// Start app
const PORT = process.env.PORT ||2000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));