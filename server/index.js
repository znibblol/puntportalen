const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const betRouter = require('./app/routes/bet_routes');
const userRouter = require('./app/routes/user_routes');
// const { urlencoded } = require('body-parser');

// init app
const app = express();

// add middleware
app.use(morgan('tiny'));
app.use(bodyParser.json());
bodyParser.urlencoded({extended: true});
app.use(cors());
app.use(helmet());
app.use('/api/beerbet', betRouter);
app.use('/auth', userRouter);

// Start app
const PORT = process.env.PORT ||2000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));