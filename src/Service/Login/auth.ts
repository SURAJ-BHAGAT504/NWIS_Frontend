import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private apiUrl: string = "http://localhost:51819/Login";

  constructor(private http: HttpClient) {

  }

  Login(login: any): Observable<any> {
    const payload = {
      UserId: login.Email,
      UserPassword: login.Password
    }

    return this.http.post(this.apiUrl, payload)
  }
}
