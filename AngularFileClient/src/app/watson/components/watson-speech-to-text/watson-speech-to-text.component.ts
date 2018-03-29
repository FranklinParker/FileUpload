import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watson-speech-to-text',
  templateUrl: './watson-speech-to-text.component.html',
  styleUrls: ['./watson-speech-to-text.component.css']
})
export class WatsonSpeechToTextComponent implements OnInit {
  file: File;
  constructor() { }

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

}
