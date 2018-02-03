import { Component, OnInit } from '@angular/core';
import {FileUploadService} from "../../service/file-upload.service";

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  file:File;
  constructor(private fileUploadService:FileUploadService) { }

  ngOnInit() {


  }

  handleFileInput(files: FileList) {
    this.file = files.item(0);
    console.log('file change', this.file);
  }
  uploadFile(){
    console.log('uploadFile', this.file);
    this.fileUploadService.uploadFile(this.file).subscribe((resp)=>{console.log('upload ', resp)});
  }



}
