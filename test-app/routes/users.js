var express = require('express');
const MongoClient = require('mongodb').MongoClient;
let db;
const url = 'mongodb://localhost:27017';
MongoClient.connect(url, function(err, client) {

    if(err){
      console.log(err)
    }else{
        db = client.db('users');
    }
    console.log("Connected successfully to server");
});

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/post',function (req, res, next) {
db.collection('user').insertOne(req.body,(err, response)=>{
if(err){
  res.send(err)
}else{
  res.send(response)
}
  })
});

router.get('/get',(req, res, next)=>{
db.collection('user').findOne({name:"user1"},(err,response)=>{
  if(err){
    res.send(err);
  }else{
    res.send(response);
  }
})
});

module.exports = router;
