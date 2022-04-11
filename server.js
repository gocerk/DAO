const express = require("express");
const app = express();

const Motion = require('./src/routes/Motions.js');

app.use(express.json({'limit': '10mb'}));
app.use(express.urlencoded({'extended': true, 'limit': '10mb'}));

app.get('/', (req, res) => {
    res.redirect('/motions');
});

app.use('/motions', Motion);

app.listen(3000);