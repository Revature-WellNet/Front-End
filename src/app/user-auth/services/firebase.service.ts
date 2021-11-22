import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app'


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  public springServerUrl : string = 'http://localhost:8080/';

  public idToken : string = "";

  constructor(public firebaseAuth : AngularFireAuth, public httpClient : HttpClient) { }

  gettest(): Observable<any>
  {
   return this.httpClient.get<any>("http://localhost:8080/test") as Observable<any>
  }

  async signin(email : string, password : string)
  {
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
    .then(response => {
      let responseString : string = JSON.stringify(response);
      console.log(responseString);
    }, function(e)
    {
      console.error(e);
    });
  }

  async logout()
  {
    await this.firebaseAuth.signOut();
  }

  async getToken() { 
    const user = firebase.auth().currentUser;
    if(user != null)
       this.idToken = await user.getIdToken(true);
  }

  async getUserFromSpringServer() : Promise<any>
  {
    let idToken = await firebase.auth().currentUser?.getIdToken();

    let httpHeader : HttpHeaders = new HttpHeaders({
      // Authorization: 'Bearer ' + idToken,
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type'
      });
  
    let url : string = this.springServerUrl + 'private/random';
    return this.httpClient.get<any>(url).toPromise<any>();
  }

  
}
