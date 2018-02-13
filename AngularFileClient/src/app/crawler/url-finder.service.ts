import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()
export class UrlFinderService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  navigateUrl(url): Observable<any> {

    return this.http.post(this.apiUrl + '/url/navigateUrl', {url: url});
  }

}
