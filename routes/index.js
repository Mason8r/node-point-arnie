var express = require('express');
var router = express.Router();
var WebRequest = require('../models/WebRequest.js');

router.all('/:uid?', function(req, res, next) {
    
    var method = req.method,
    uid = req.params.uid;

    if(uid == null) {
    	res.render('index', { title: 'Endpoint Arnie - Node Based Beta' });
    }
    
    if(req.param('inspect')) {

    	WebRequest.find({'name': uid}, function (err, docs) {

     		if(!err) {
     			res.render('bin', {title: 'Your endpoint name: ' + uid, docs: docs});
			} 
			 return res.send(err);
    	});

    } else {

		var Payload = new WebRequest({
			name: uid,
			payload: req.body,
			server: req.headers,
			date: new Date(Date.now())
		});

		Payload.save(function(err) {
			if(!err) {
			 	return res.send(Payload);
			} 
			return res.send(err);
		});

    }

});

module.exports = router;
