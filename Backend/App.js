const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const MongoConnect = require('./util/database');

const app = express();

app.use(cors());

MongoConnect(client =>{
    app.listen(3000);
    console.log(client);
});

// app.get("/getData", (req, res, next)=>{
//     res.send("Hello from Backend");
// });

// app.listen(3000);
// console.log("App is Running");
