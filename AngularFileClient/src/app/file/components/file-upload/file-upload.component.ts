import {Component, OnInit} from '@angular/core';
import {FileUploadService} from "../../service/file-upload.service";
import {MatDialog} from "@angular/material";
import {ExcelResultsComponent} from "../excel-results/excel-results.component";

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  file: File;
  excelSheetNames = [];
  selectedSheet: string;
  mimeTypesExcel = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    ,'application/vnd.ms-excel'];

  constructor(private fileUploadService: FileUploadService,
              private dialogService: MatDialog) {
  }

  ngOnInit() {


  }

  /**
   * event when file is selected
   *
   * @param {FileList} files
   */
  handleFileInput(files: FileList) {
    this.file = files.item(0);
    console.log('file change', this.file);
    if (this.mimeTypeExcel) {
      this.getSheetNames();

    }
  }

  parseExcel() {
    this.fileUploadService.parseExcel(this.file, this.selectedSheet)
      .subscribe((resp) => {
        const dialogRef = this.dialogService.open(ExcelResultsComponent, {
          height: '600px',
          width: '900px',
          data: resp['data']
        });
        dialogRef.afterClosed().subscribe((yesNo: string) => {
          console.log('yesNo:' + yesNo);

        });
      });
  }

  uploadFile() {
    if (this.file) {
      this.fileUploadService.uploadFile(this.file).subscribe((resp) => {
        console.log('upload ', resp);
      });
    } else {
      alert('Please select a file');
    }
  }

  /**
   *
   *
   */
  getSheetNames() {
    this.fileUploadService.getSheetNames(this.file).subscribe((resp) => {
      if (resp.result === 'success') {
        this.excelSheetNames = resp.sheetNames;
      } else {
        alert('error getting sheet names');
      }
    });
  }

  get mimeTypeExcel() {

    return this.file
      && this.isMimeTypeExcel();

  }

  isMimeTypeExcel(){
    if(!this.file){
      return false;
    }
    const typeExcelFound = this.mimeTypesExcel.find((type) => type ===this.file.type );
    return typeExcelFound;

  }



}
