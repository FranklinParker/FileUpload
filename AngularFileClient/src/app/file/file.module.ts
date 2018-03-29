import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import {FormsModule} from "@angular/forms";
import {FileUploadService} from "./service/file-upload.service";
import {HttpClientModule} from "@angular/common/http";
import { ExcelResultsComponent } from './components/excel-results/excel-results.component';
import {AngularMaterialModule} from "../angular-material/angular-material.module";
import {MatDialog, MatDialogRef} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { WatsonSpeechToTextComponent } from './components/watson-speech-to-text/watson-speech-to-text.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AngularMaterialModule,
    BrowserAnimationsModule

  ],
  declarations: [
    FileUploadComponent,
    ExcelResultsComponent,
    WatsonSpeechToTextComponent],
  exports: [
    FileUploadComponent,
    WatsonSpeechToTextComponent
  ],
  providers:[FileUploadService,
    MatDialog],
  entryComponents: [
    ExcelResultsComponent
  ],
})
export class FileModule { }
