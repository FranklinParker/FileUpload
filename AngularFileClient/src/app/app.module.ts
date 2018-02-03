import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FileModule} from "./file/file.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FileModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
