import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Reporter {

  private url = 'http://localhost:51819/'

  constructor(private http: HttpClient) { }

  GetAssignment(userCode: string): Observable<any> {
    return this.http.get<any>(this.url + 'GetAssignments?userCode=' + userCode);
  }

  GetUploadedAssignment(userCode: string) {
    return this.http.get<any>(this.url + 'reporter/getassignmentupload?userCode=' + userCode);
  }

  GetDirectUpload(userCode: string) {
    return this.http.get<any>(this.url + 'reporter/getdirectupload?userCode=' + userCode)
  }
}
