var express = require('express');
var router = express.Router();
var multer = require('multer');
const fs = require('fs');
const upload = multer({dest: '../public/images'});

router.post('/', upload.single('file'), function (req, res, next) {
  console.log('req.file', req.file);
  fs.readFile(req.file.path,'utf8', function (err, data) {
    console.log('data', data);
    res.send({resp: 'file'});
  });
});


module.exports = router;
