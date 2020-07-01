const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');

// init app
const app = express();

// add middleware
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

// Create simple routes
app.get('/',  (req, res) => {
    res.json({
        msg: 'Hello World!'
    });
    console.log('Hello World!');
});

// Start app
const PORT = process.env.PORT ||2000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));