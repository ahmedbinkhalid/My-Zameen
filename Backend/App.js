const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const MongoConnect = require('./util/database');
const bodyParser = require('body-parser');

const authRoutes = require('./Routes/authRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

MongoConnect(client =>{
    app.locals.db = client.db();
    app.use('/api', authRoutes);
    app.listen(3000);
    console.log(client);
});