var XLSX = require('xlsx')


var processExcelToJson = (file) => {
  return new Promise(function (resolve, reject) {
    var workbook = XLSX.readFile(file);
    var sheet_name_list = workbook.SheetNames;
    var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
    resolve(xlData);

  });
};


module.exports.parsers = {
  processExcelToJson
}