var express = require('express');
var router = express.Router();

var Crawler = require("crawler");


var crawler = (url)=>{
	return new Promise(function(resolve, reject) {
		var c = new Crawler({
			maxConnections : 10,
			// This will be called for each crawled page
			callback : function (error, res, done) {
				if(error){
					console.log(error);
				}else{
					var $ = res.$;
					resolve($.html());

				}
			}
		});
		c.queue(url);

	});
};


/**
 * navigateUrl url
 *
 */

router.post('/navigateUrl', function (req, res, next) {
	console.log('req.body', req.body.url);

	crawler(req.body.url)
		.then((data)=>{
			console.log(' sucess', data);
			res.send({result: 'success'});
		},(err) => {
			console.log('err', err);
			res.send({result: 'failed'});
		});
// Queue just on


});


module.exports = router;
