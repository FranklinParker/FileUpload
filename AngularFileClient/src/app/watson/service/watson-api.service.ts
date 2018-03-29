import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class WatsonApiService {

  constructor(private http: HttpClient) { }

  postToSpeechToText(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post('https://stream.watsonplatform.net/speech-to-text/api/v1/recognize'
      , formData);

  }

}
