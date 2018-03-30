import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class WatsonApiService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  /**
   * gets a watson session
   *
   * @param {string} username
   * @param {string} password
   */

  getSession(username: string, password: string) {
    return this.http.get(this.apiUrl +'/watson/session/'+
    username + '/' + password);

  }

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
  authenticate(username: string, password: string) {
    let params = new HttpParams();
    params.set('username', username);
    params.set('password', password);
    let headers = {


      "Access-Control-Allow-Methods": "POST"
    }


    return this.http.get(
      'https://stream.watsonplatform.net/speech-to-text/api/v1/sessions');
    // ,
    //   null,
    //   {params: params, headers} );
  }

  /**
   * using a session
   *
   *
   * @param {File} file
   * @returns {Observable<any>}
   */

  postToSpeechToTextSession(file: File): Observable<any> {
    var config = {
      headers: {
        //'Authorization': authHeader,
        'Content-Type': 'audio/wav'

      }
    };
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post('https://stream.watsonplatform.net/speech-to-text/api/v1/sessions/513772e7a6c26455abe4ad4047d255de/recognize',
      formData, config);
  }

  postToSpeechToText(file: File, username: string,
                     password: string): Observable<any> {
    let headers = new Headers();
    headers.set('Authorization',
      btoa(username + ':' + password));
    headers.set('Content-Type', 'audio/wav');
    var config = {
      headers: {
        'Authorization': btoa(username + ':' + password),
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
