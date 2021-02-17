const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const Data = require('./models/data');

const ports = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.get('/', async (req, res) => {
   try {
    const [allData] = await Data.fetchAll();
    res.status(200).json(allData);
   } catch (err) {
    if (!err.statusCode) {
        err.statusCode = 500;
    }
   }
});

app.listen(ports, () => {
    console.log(`App listening on port ${ports}`);
});