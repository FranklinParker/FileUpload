import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WatsonApiService} from "./service/watson-api.service";
import {WatsonSpeechToTextComponent} from "./components/watson-speech-to-text/watson-speech-to-text.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    WatsonSpeechToTextComponent
  ],
  exports: [
    WatsonSpeechToTextComponent
  ],
  providers: [
    WatsonApiService
  ]
})
export class WatsonModule { }
