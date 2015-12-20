var express = require('express');
var router = express.Router();

/* Get all the requests and manage them properly. */
router.all('/:uid?', function(req, res, next) {
    var method = req.method,
    inspect = req.param('inspect'),
    uid = req.params.uid,
    body = req.body;

    if(uid == null) {
    	res.render('index', { title: 'Endpoint Arnie - Beta' });
    }
    

    if(inspect) {
    	//Get the data for this UID
    	res.render('index', { title: 'Express' });
    } else {
    	//Save the payload and server data to DB
    }

});

/* GET home page. */
// router.get('/home', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
