import { Component, OnInit } from '@angular/core';
import {WatsonApiService} from "../../service/watson-api.service";

@Component({
  selector: 'app-watson-speech-to-text',
  templateUrl: './watson-speech-to-text.component.html',
  styleUrls: ['./watson-speech-to-text.component.css']
})
export class WatsonSpeechToTextComponent implements OnInit {
  file: File;

  constructor(private watsonApiService: WatsonApiService) { }

  ngOnInit() {
  }

  /**
   * event when file is selected
   *
   * @param {FileList} files
   */
  handleFileInput(files: FileList) {
    this.file = files.item(0);

  }

  onSpeechToText(){
    this.watsonApiService.postToSpeechToText(this.file)
      .subscribe((result)=>{
        console.log('stt', result);
      });
  }

}
