const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/getData", (req, res, next)=>{
    res.send("Hello from Backend");
});

app.listen(3000);
console.log("App is Running");
