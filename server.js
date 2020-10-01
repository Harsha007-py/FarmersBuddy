var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
const mongoose = require('mongoose')
var connecDB=require('./DB/connection');
var port = process.env.PORT || 5000

app.use(cors())
/*app.use(
  bodyParser.urlencoded({
    extended: false
  })
)*/
// passport config
app.use(require("express-session")({
  secret: "This is Man Utd!",
  resave: false,
  saveUninitialized: false
}));
connecDB();
const Crop=require('./routes/addCrop')
const Users=require('./routes/users');
const Weather=require('./routes/weather');
const Query=require('./routes/query');
const Admin=require('./routes/admin');
app.use(bodyParser.json())
app.use('/users', Users)
app.use('/weather',Weather);
app.use('/addCrop',Crop);
app.use('/query',Query);
app.use('/admin',Admin);
app.listen(port,()=>console.log("Server started!"));