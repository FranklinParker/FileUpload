var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({dest: '../public/images'});

router.post('/', upload.single('file'), function(req, res, next) {
  console.log('req.file', req.file);
  res.send({resp:'file'});
});


module.exports = router;
