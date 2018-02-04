var XLSX = require('xlsx')


var processExcelToJson = (file) => {
  return new Promise(function (resolve, reject) {
    var workbook = XLSX.readFile(file);
    var sheet_name_list = workbook.SheetNames;
    console.log('sheet_name_list', sheet_name_list);
    console.log('sheet_name_list[0]', sheet_name_list[0]);

    var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
    resolve(xlData);

  });
};

var getExcelSheetNames = (file) => {
	return new Promise( (resolve, reject)=> {
		var workbook = XLSX.readFile(file);
		resolve( workbook.SheetNames);

	});
};


module.exports.parsers = {
  processExcelToJson,
	getExcelSheetNames
}