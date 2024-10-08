const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const MongoConnect = require('./util/database');
const bodyParser = require('body-parser');

const authRoutes = require('./Routes/authRoutes');
const blogRoutes = require('./Routes/blogRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

MongoConnect(client =>{
    app.locals.db = client.db('myzameen');
    app.use('/api', authRoutes);
    app.use('/api', blogRoutes);

    app.listen(3000);
    console.log(client);
});


// Testing code for retrival of data from database

// const express = require("express");
// const cors = require("cors");
// const MongoConnect = require('./util/database');
// const bodyParser = require('body-parser');
// const authRoutes = require('./Routes/authRoutes');

// const app = express();

// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // MongoDB connection and data retrieval
// MongoConnect(async client => {
//     const db = client.db('myzameen'); 
//     app.locals.db = db;

//     // Fetch data from the "users" collection and log to console
//     try {
//         const users = await db.collection('users').find().toArray();  // Fetch all users
//         console.log('Users from Database:', users);  // Display users in the console
//     } catch (err) {
//         console.error('Error fetching users:', err);
//     }

//     // Routes and Server Start
//     app.use('/api', authRoutes);
//     app.listen(3000, () => {
//         console.log("Server is running on port 3000");
//     });
// });
