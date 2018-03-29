import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WatsonApiService} from "./service/watson-api.service";
import {WatsonSpeechToTextComponent} from "./components/watson-speech-to-text/watson-speech-to-text.component";

@NgModule({
  imports: [
    CommonModule
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
