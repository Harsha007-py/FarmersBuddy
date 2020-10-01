const express = require('express')
const router = express.Router()
const cors = require('cors')
const Crop=require('../models/crop')
const bodyParser = require("body-parser")
router.use(cors())
router.use(bodyParser.urlencoded({ extended: true }));
router.post('/add',(req,res)=>{
    const Data={
        email: req.body.email,
        phone: req.body.phone,
        village: req.body.village,
        district: req.body.district,
        state: req.body.state,
        crop: req.body.crop,
        area: req.body.area
    }
    Crop.create(Data)
    .then(crop => {
        res.json({ status: crop.email + 'Registered!' })
      })
      .catch(err => {
        res.send('error: ' + err)
      })
})
module.exports=router