var express = require('express');

var router = express.Router();

var exec = require("child_process").exec,child;

router.get('/:func', function(req,res,next){
	console.log(req.params.func);
	var key;
	if(req.params.func ==null){
		key=" ";
	}
	else{
		key = req.params.func;
	}
	child = exec(key, function(err,stdout,stderr){
		console.log(stdout);
		console.log(stderr);
		res.redirect('/cmd');
	});
});

router.get('/', function(req,res,next){
	res.render('cmd.ejs',{title: 'Remote control'});
});

module.exports = router;
