import { Component, OnInit } from '@angular/core';
import {WatsonApiService} from "../../service/watson-api.service";
import {WatsonSessionModel} from "../../model/watson-session-model";

@Component({
  selector: 'app-watson-speech-to-text',
  templateUrl: './watson-speech-to-text.component.html',
  styleUrls: ['./watson-speech-to-text.component.css']
})
export class WatsonSpeechToTextComponent implements OnInit {
  file: File;
  username: string = 'franklin';
  password: string = 'test';
  authResult: WatsonSessionModel;
  sttResult: string;

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

  /**
   * invoke speech to text
   *
   *
   */
  onSpeechToText(){
    try{
      this.watsonApiService.postToSpeechToText(this.file,this.username, this.password)
        .subscribe((result)=>{
          console.log('stt', result);
          this.sttResult = result;
        });
    }catch (e){
      console.log('error', e);

    }

  }

  /**
   * gets the session for the speech to text
   *
   */
  onGetSession(){
    this.watsonApiService
      .getSession(this.username, this.password)
      .subscribe((result:WatsonSessionModel)=>{
        this.authResult = result;

      });
  }

  /**
   * Only allow speech to text if the session exists
   * && valid wav file selected
   *
   * @returns {boolean}
   */
  get disablePostSpeechToText(){
    return !(this.authResult &&
      this.authResult.data.recognize && this.file
      && this.file.type.startsWith('audio'));
  }

}
