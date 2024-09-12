import { Injectable } from '@angular/core';
//Add
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UserModelLogin, UserModelRegister } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  // URL API
  private apiUrl = environment.dotnet_api_url;

  //Header
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  }
  //DI
  constructor(private http: HttpClient) { }

  //Login API Method
  Login(data: UserModelLogin): Observable<UserModelLogin> {
    return this.http.post<UserModelLogin>(
      this.apiUrl + 'Authenticate/login',
      data,
      this.httpOptions);
  }

  //Register API Method
  Register(data: UserModelRegister): Observable<UserModelRegister> {
    return this.http.post<UserModelRegister>(
      this.apiUrl + 'Authenticate/register-user',
      data,
      this.httpOptions);
  }
}
