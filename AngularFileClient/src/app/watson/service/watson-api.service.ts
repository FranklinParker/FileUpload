import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable()
export class WatsonApiService {

  constructor(private http: HttpClient) { }

  /**
   * authentic
   * headers:  {
        'Authorization': authHeader,
        'Content-Type': 'audio/wav',
        "X-Testing" : "testing",
        'Access-Control-Allow-Origin':'*',
        "Access-Control-Allow-Methods": "POST"
      }
   *
   * @param {string} username
   * @param {string} password
   * @returns {Observable<Object>}
   */
  authenticate(username: string, password: string){
    let params = new HttpParams();
    params.set('username',username);
    params.set('password', password);
    let headers =  {


        "Access-Control-Allow-Methods": "POST"
    }


    return this.http.get(
      'https://stream.watsonplatform.net/speech-to-text/api/v1/sessions');
    // ,
    //   null,
    //   {params: params, headers} );
  }

  postToSpeechToText(file: File): Observable<any> {
    var config =  {
      headers:  {
        //'Authorization': authHeader,
        'Content-Type': 'audio/wav'

      }
    };
    const formData = new FormData();
    formData.append('file', file);
    return this.http
      .post('https://stream.watsonplatform.net/speech-to-text/api/v1/recognize'
      , formData,
        config);

  }

}
