var express = require('express');
var router = express.Router();
var multer = require('multer');
const fs = require('fs');
const upload = multer({dest: '../public/images'});
const mimeTypes = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.ms-excel'];


const parser = require('../service/parser').parsers;

router.post('/', upload.single('file'), function (req, res, next) {
    console.log('req.file', req.file);
    const mimeType = mimeTypes.find(mime => mime===req.file.mimetype );
    console.log('mimeType:'+mimeType);
    if (mimeType) {
        parser.processExcelToJson(req.file.path)
            .then((data) => {
                    console.log('found Data', data)
                    res.send({message: `File Type ${req.file.mimetype} Parsed` });
                }, (err) => {
                    console.log('err', err);
                    res.send({message: 'failed '});
                }
            );
    } else {
        fs.readFile(req.file.path, 'utf8', function (err, data) {
            console.log('data', data);
            res.send({message:`File Type ${req.file.mimetype} cannot be parsed`});
        });
    }
});


module.exports = router;
