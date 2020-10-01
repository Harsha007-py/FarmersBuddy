var express = require('express');
var router = express.Router();
const request = require('request');

/* GET wearther home page. 
router.get('/', function(req, res, next) {
  res.render('index', {weather: null, error: null});
});
*/
/* POST weather */
router.post('/getw', function (req, res) {
  let city = req.body.city;
  let apiKey = "5bc156f5b79bfa27a78da75078272d17" //get our api key
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  
  request(url, function (err, response, body) {
    if(err){
      res.send("Error Occured!");
    } 
    else{
        console.log(body);
        res.json(body)
    }
  });  
});

module.exports = router;