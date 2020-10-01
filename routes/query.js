const express = require('express')
const router = express.Router()
const cors = require('cors')
const Query=require('../models/query')
const bodyParser = require("body-parser")
router.use(cors())
router.use(bodyParser.urlencoded({ extended: true }));
router.post('/addq',(req,res)=>{
    const Data={
        email: req.body.email,
        phone: req.body.phone,
        crop: req.body.crop,
        query: req.body.query,
        isAnswered: false
    }
    Query.create(Data)
    .then(query => {
        res.json({ status: query.email + 'Registered!' })
      })
      .catch(err => {
        res.send('error: ' + err)
      })
})
module.exports=router