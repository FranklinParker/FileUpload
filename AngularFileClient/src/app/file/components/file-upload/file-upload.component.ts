import {Component, OnInit} from '@angular/core';
import {FileUploadService} from "../../service/file-upload.service";

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  file: File;
  excelSheetNames = [];
  selectedSheet:string;
  constructor(private fileUploadService: FileUploadService) {
  }

  ngOnInit() {


  }

  handleFileInput(files: FileList) {
    this.file = files.item(0);
    console.log('file change', this.file);
    if( this.mimeTypeExcel){
      this.getSheetNames();

    }
  }

  uploadFile() {
    if (this.file) {
      this.fileUploadService.uploadFile(this.file).subscribe((resp) => {
        console.log('upload ', resp);
        alert(resp.message);
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
        alert('Got sheet names:' + resp.sheetNames);
        this.excelSheetNames = resp.sheetNames;
      }else{
        alert('error getting sheet names');
      }
    });
  }

  get mimeTypeExcel() {

    return this.file
      && this.file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
  }


}
