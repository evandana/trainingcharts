var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
    res.render('helloworld', { title: 'Hello, World!' })
});

/* GET Userlist page. */
router.get('/dailylist', function(req, res) {
    var db = req.db;
    var collection = db.get('dailycollection');
    collection.find({},{},function(e,docs){
        res.render('dailylist', {
            "dailylist" : [
                {"date":"123"}
            ]
        });
    });
});

module.exports = router;
