const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const con  = require("./config/connection");

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors());

const PORT = process.env.PORT || 2023;


const server = app.listen(PORT, (req, res) => {
    console.log("server started on " + PORT)
})