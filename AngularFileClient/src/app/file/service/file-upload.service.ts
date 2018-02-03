import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class FileUploadService {
  apiUrl = 'http://localhost:3000/api/file'
  constructor(private http: HttpClient) {}

  uploadFile(file: File): Observable<any> {

    const formData = new FormData();
    formData.append('file', file);


    return this.http.post(this.apiUrl, formData);

  }
}
