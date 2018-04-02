import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import 'rxjs/add/operator/map';
import {WatsonSessionModel} from "../model/watson-session-model";


@Injectable()
export class WatsonApiService {
  apiUrl = environment.apiUrl;
  session: string;
  recognizeUrl: string;

  constructor(private http: HttpClient) {
  }

  /**
   * gets a watson session
   *
   * @param {string} username
   * @param {string} password
   */

  getSession(username: string, password: string): Observable<WatsonSessionModel> {
    return this.http.get(this.apiUrl +'/watson/session/'+
    username + '/' + password)
      .map((resp:WatsonSessionModel)=>{
        this.session  = resp.data.session_id;
        console.log('session: ' + this.session);
        this.recognizeUrl = resp.data.recognize;
        return resp;
      });

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

    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(this.recognizeUrl,
      formData);
  }

  postToSpeechToText(file: File, username: string,
                     password: string): Observable<any> {
    // let headers = new Headers();
    // headers.set('Authorization',
    //   btoa(username + ':' + password));
    // headers.set('Content-Type', 'audio/wav');
    // var config = {
    //   headers: {
    //     'Authorization': btoa(username + ':' + password),
    //     'Content-Type': 'audio/wav'
    //
    //   }
    // };
    const formData = new FormData();
    formData.append('file', file);
    return this.http
      .post(this.apiUrl + '/watson/speechToText/' + username + '/' + password
        , formData);

  }

}
