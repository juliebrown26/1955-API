// Import
const express = require("express");
const app = express();
const mongoose = require('mongoose');
//Config
require('./server/routes/mongoose');
// app.use(express.static(__dirname + "/public/static"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
//Routes
require('./server/routes/name.routes')(app);
//Port
app.listen(8000, () => console.log("listening on port 8000"));