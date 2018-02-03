import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import {FormsModule} from "@angular/forms";
import {FileUploadService} from "./service/file-upload.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [FileUploadComponent],
  exports: [FileUploadComponent],
  providers:[FileUploadService]
})
export class FileModule { }
