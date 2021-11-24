import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import firebase from 'firebase/compat/app';
import { environment } from 'src/environments/environment';
import { catchError, tap } from 'rxjs/operators';
import { SignupResponse } from '../models/signup-response';
import { Userinfo } from '../models/userinfo';
import { Tknholder } from '../models/tknholder';

import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private tokenExpireTime: any;
  public API_KEY: string = environment.firebase.apiKey;
  userInfo = new BehaviorSubject<Userinfo | null>(null);

  public url: string = environment.apiBaseUrl;
  public idToken: string = '';

  constructor(
    public firebaseAuth: AngularFireAuth,
    public httpClient: HttpClient,
    public router: Router
   
  ) {}

  // Registering with firebase
  signup(email: string, pass: string) {
    return this.httpClient
      .post<SignupResponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
          this.API_KEY,
        {
          email: email,
          password: pass,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError((err) => {
          return err;
        }),
        tap((res: any) => {
          this.authenticatedUser(
            res.email,
            res.localId,
            res.idToken,
            +res.expiresIn
          );
        })
      );
  }

  async signUp(email: string, password: string) {
    return this.firebaseAuth.createUserWithEmailAndPassword(email, password);
  }

  setEmail(email : string) {
    firebase.auth().currentUser?.updateEmail(email).then(() => {
      console.log("Email updated to " + email);
    }).catch((error) => {
      console.error(error);
    });
  }

  setPassword(password : string) {
    firebase.auth().currentUser?.updatePassword(password).then(() => {
      console.log("Password updated");
    }).catch((error) => {
      console.error(error);
    });
  }

  // Sign in with firebase

  login(email: string, pass: string) {
    return this.httpClient
      .post<SignupResponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
          this.API_KEY,
        {
          email: email,
          password: pass,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError((err) => {
          return err;
        }),
        tap((res: any) => {
          this.authenticatedUser(
            res.email,
            res.localId,
            res.idToken,
            +res.expiresIn
          );
        })
      );
  }
  autoSignIn() {
    const userData = JSON.parse(localStorage.getItem('userinfo') || '{}');

    if (userData == '{}' || !userData) {
      return;
    }
    const loggedInUser = new Userinfo(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );
    if (loggedInUser.token) {
      this.userInfo.next(loggedInUser);
      const expirDurationtimer= new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
      this.autoSignOut(expirDurationtimer);
    }
  }
  // logout and distroy token
  logout() {
    this.userInfo.next(null);
    this.router.navigate(['']);
    localStorage.removeItem('userinfo');
    if (this.tokenExpireTime) {
      clearTimeout(this.tokenExpireTime);
    }
    this.tokenExpireTime = null;
  }

  autoSignOut(expirDuration: number) {
    this.tokenExpireTime = setTimeout(() => {
      this.logout();
    }, expirDuration);
  }

  // authenticate user
  private authenticatedUser(
    email: string,
    userId: string,
    token: string,
    expiresIn: any
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const userInfo = new Userinfo(email, userId, token, expirationDate);
    console.log('User Info>>>>', userInfo);
    this.userInfo.next(userInfo);
    this.autoSignOut(expiresIn * 1000);
    localStorage.setItem('userinfo', JSON.stringify(userInfo));
    
  }

  gettest( ): Observable<any> {
 const userData = JSON.parse(localStorage.getItem('userinfo') || '{}');
  let  tkn = new Tknholder(userData._token, "nurse");
console.log(userData._token)

    return this.httpClient.post<any>(
      'http://localhost:8081/wellnet/public/signup', tkn
    ) as Observable<any>;
  }

  // //when creating a nurse model (front-end) make sure to call this function when setting their uid
   getLoggedUserUid(): string {
   
    const user = firebase.auth().currentUser;
    return user != null ? user.uid : '';

  }

  

  //Deprecated
  // async getToken() {
  //   const user = firebase.auth().currentUser;
  //   if (user != null) this.idToken = await user.getIdToken(true);
  // }

  //Deprecated
  //Test function - example of sending a request to Spring server with appropriate header.
  //All functions sending HTTP requests must call getToken() and if they are expecting to return a response
  //for components, they MUST be in the form of a promise object not an Observable
  // async getUserFromSpringServer() : Promise<any>
  // {
  //   await this.getToken(); //always await for this
  //   let httpHeader : HttpHeaders = new HttpHeaders({
  //     Authorization: 'Bearer ' + this.idToken,
  //     'Access-Control-Allow-Origin': '*',
  //     'Content-Type': 'application/json',
  //     'Access-Control-Allow-Headers': 'Content-Type'
  //     });

  //   let url : string = this.url + 'private/user-details';
  //   return this.httpClient.get<any>(url, {headers: httpHeader}).toPromise<any>();
  // }
}
