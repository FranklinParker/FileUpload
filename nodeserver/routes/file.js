var express = require('express');
var router = express.Router();
var multer = require('multer');
const fs = require('fs');
const upload = multer({dest: '../public/images'});
const mimeTypesExcel = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
	'application/vnd.ms-excel'];


const parser = require('../service/parser').parsers;

router.post('/', upload.single('file'), function (req, res, next) {
	console.log('req.file', req.file);
	const mimeTypeExcel = mimeTypesExcel.find(mime => mime === req.file.mimetype);
	console.log('mimeType:' + mimeTypeExcel);
	if (mimeTypeExcel) {
		parser.processExcelToJson(req.file.path)
			.then((data) => {
					console.log('found Data', data)
					res.send({message: `File Type ${req.file.mimetype} Parsed`});
				}, (err) => {
					console.log('err', err);
					res.send({message: 'failed '});
				}
			);
	} else {
		fs.readFile(req.file.path, 'utf8', function (err, data) {
			console.log('data', data);
			res.send({message: `File Type ${req.file.mimetype} cannot be parsed`});
		});
	}
});


router.post('/parseExcel', upload.single('file'), function (req, res, next) {
	console.log('req.file', req.file);
	console.log('req.body.sheetName:' + req.body.sheetName);
	parser.processExcelToJson(req.file.path)
		.then((data) => {
				//console.log('found Data', data)
				res.send({message: `File Type ${req.file.mimetype} Parsed`});
			}, (err) => {
				console.log('err', err);
				res.send({message: 'failed '});
			}
		);
});


router.post('/getExcelSheets', upload.single('file'), function (req, res, next) {
	const mimeTypeExcel = mimeTypesExcel.find(mime => mime === req.file.mimetype);
	if (mimeTypeExcel) {
		parser.getExcelSheetNames(req.file.path)
			.then((sheetNames) => {
					console.log('found sheetNames', sheetNames)
					res.send({
						message: `File Type ${req.file.mimetype} Sheet Names`,
						result: 'success',
						sheetNames: sheetNames
					});
				}, (err) => {
					console.log('err', err);
					res.send({message: 'failed ', result: 'success'});
				}
			);
	} else {
		res.send({message: `File Type ${req.file.mimetype} is not excel`, result: 'NotFound'});
	}
});


module.exports = router;
