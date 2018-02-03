var express = require('express');
var router = express.Router();
var multer = require('multer');
const fs = require('fs');
const upload = multer({dest: '../public/images'});

var XLSX = require('xlsx')


const parser = require('../service/parser').parsers;

router.post('/', upload.single('file'), function (req, res, next) {
  console.log('req.file', req.file);
  if (req.file.mimetype === 'application/vnd.ms-excel') {
    parser.processExcelToJson(req.file.path)
      .then((data) => {
          console.log('found Data',data)
          res.send({resp: 'file success'});
        }, (err) => {
          console.log('err',err);
          res.send({resp: 'failed'});
        }
      );
  } else {
    fs.readFile(req.file.path, 'utf8', function (err, data) {
      console.log('data', data);
      res.send({resp: 'file'});
    });
  }
});


module.exports = router;
