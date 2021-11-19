import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public firebaseAuth : AngularFireAuth, public httpClient : HttpClient) { }

  async signin(email : string, password : string)
  {
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
    .then(response => {
      let responseString : string = JSON.stringify(response);
      console.log(responseString);
      localStorage.setItem('user', responseString);
    }, function(e)
    {
      console.error(e);
    });
  }
  
  overrideNull(): any {
    if (localStorage.getItem('user') === null) return '';
    return localStorage.getItem('user') as any;
  }

  getUserFromSpringServer()
  {
    const user = JSON.parse(this.overrideNull());
    let header : HttpHeaders = new HttpHeaders({
      Authorization: 'Bearer ' + user.user.stsTokenManager.accessToken,
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type'
    });

    let url : string = 'http://localhost:8080/private/random';
    return this.httpClient.get<any>(url, {headers: header}) as Observable<any>;
  }

  
}
