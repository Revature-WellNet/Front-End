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

import { Userinfo } from '../models/userinfo';
import { Tknholder } from '../models/tknholder';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {

  public API_KEY: string = environment.firebase.apiKey;
  userInfo = new BehaviorSubject<Userinfo | null>(null);
  public url: string = environment.apiBaseUrl;
  
  public idToken: string = '';
  private tokenExpireTime: any;

  constructor(
    public firebaseAuth: AngularFireAuth,
    public httpClient: HttpClient,
    public router: Router
  ) {}


//register with firebase
  async signUp(email: string, password: string) {
    let signupdata = await this.firebaseAuth.createUserWithEmailAndPassword(
      email,
      password
    );

    // if (signupdata.user?.uid != null) {
    //   const userin = firebase.auth().currentUser;
    //   if (userin) {
    //     const time = (await userin.getIdTokenResult()).expirationTime;
    //     let exp = new Date(time);
    //     let role="";
    //     const nurse = (await userin.getIdTokenResult()).claims.ROLE_NURSE;
    //     if (typeof nurse !== 'undefined' && nurse == true){ role = "nurse"}
    //     const doctor = (await userin.getIdTokenResult()).claims.ROLE_DOCTOR;
    //     if (typeof doctor !== 'undefined' && doctor == true){ role = "doctor"}
    //     const tok = (await userin.getIdTokenResult()).token;
    //     let email = userin.email;
    //     if (email == null) {
    //       email = '';
    //     }
    //     const refresh = userin.refreshToken;
    //     const uid = userin.uid;
    //     this.authenticatedUser(email, uid,role, tok, refresh, exp);
    //   }
    // }
    return signupdata;
  }

  async setEmail(email: string) {
    await firebase
      .auth()
      .currentUser?.updateEmail(email)
      .then(() => {
        console.log('Email updated to ' + email);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  async ResetPass(email: string) {
    await firebase
      .auth().sendPasswordResetEmail(email).then(res=>{
        console.log(res)
      })
      .catch((error) => {
        console.error(error);
      });
  }

  setPassword(password: string) {
    firebase
      .auth()
      .currentUser?.updatePassword(password)
      .then(() => {
        console.log('Password updated');
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // Sign in with firebase
  async login(email: string, pass: string) {
    let loginData = await this.firebaseAuth.signInWithEmailAndPassword(
      email,
      pass
    );

    if (loginData.user?.uid != null) {
      const userin = firebase.auth().currentUser;
      if (userin) {
        const time = (await userin.getIdTokenResult()).expirationTime;
        //console.log(time)
        let exp = new Date(time);
        console.log(exp);
        let role="";
        const nurse = (await userin.getIdTokenResult()).claims.ROLE_NURSE;
        if (typeof nurse !== 'undefined' && nurse == true){ role = "nurse";}
        const doctor = (await userin.getIdTokenResult()).claims.ROLE_DOCTOR;
        if (typeof doctor !== 'undefined' && doctor == true){ role = "doctor";}
        const tok = (await userin.getIdTokenResult()).token;
        let email = userin.email;
        if (email == null) {
          email = '';
        }
        const refresh = userin.refreshToken;
        const uid = userin.uid;
        this.authenticatedUser(email, uid, role, tok, refresh, exp);
      }
    }

    return loginData;
  }

  // method to refresh the token
  async refreshToken() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        user.getIdToken(true).then((idToken) => {});
      }
    });
    const userin = firebase.auth().currentUser;
    if (userin) {
      const time = (await userin.getIdTokenResult()).expirationTime;
      let exp = new Date(time);
      let role="";
      const nurse = (await userin.getIdTokenResult()).claims.ROLE_NURSE;
      if (typeof nurse !== 'undefined' && nurse == true){ role = "nurse"}
      const doctor = (await userin.getIdTokenResult()).claims.ROLE_DOCTOR;
      if (typeof doctor !== 'undefined' && doctor == true){ role = "doctor"}
      const tok = (await userin.getIdTokenResult()).token;
      let email = userin.email;
      if (email == null) {
        email = '';
      }
      const refresh = userin.refreshToken;
      const uid = userin.uid;
      this.authenticatedUser(email, uid, role, tok, refresh, exp);
    }
  }

  //push the localstorage data to memory.
  autoSignIn() {
    const userData = JSON.parse(localStorage.getItem('userinfo') || '{}');

    if (userData == '{}' || !userData) {
      return;
    }
    const loggedInUser = new Userinfo(
      userData.email,
      userData.id,
      userData.role,
      userData._token,
      userData._refreshToken,
      new Date(userData._tokenExpirationDate)
    );
    if (loggedInUser.token) {
      this.userInfo.next(loggedInUser);
      const expirDurationtimer =
        new Date(userData._tokenExpirationDate).getTime() -
        new Date().getTime();
      this.autoSignOut(expirDurationtimer);
    }
  }

  // logout and distroy token and localstorage info
  logout() {
    
    firebase.auth().signOut().then(()=>{
      this.userInfo.next(null);
    }).then(()=>{
      localStorage.clear();

      if (this.tokenExpireTime) {
        clearTimeout(this.tokenExpireTime);
      }
      this.tokenExpireTime = null;
      this.router.navigate(['/login']);
    });
  }

  // either signout or refresh token
  autoSignOut(expirDuration: number) {
    this.tokenExpireTime = setTimeout(() => {
      var answer = confirm(
        'Your token is about to expire. Press cancel to refresh it'
      );
      if (answer) {
        this.logout();
      } else {
        this.refreshToken();
      }
    }, expirDuration);
  }

  // authenticated user's data saving to localstorage and userinfo model class
  private authenticatedUser(
    email: string,
    userId: string,
    role: string,
    token: string,
    refreshToken: string,
    expiresIn: any
  ) {
    // const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    let expirationDate = new Date(expiresIn);
    //expirationDate.setHours(expirationDate.getHours()+1)
   
    const userInfo = new Userinfo(
      email,
      userId,
      role,
      token,
      refreshToken,
      expirationDate
    );
    // console.log('User Info>', userInfo);
    this.userInfo.next(userInfo);
    this.autoSignOut(expirationDate.getTime());
    localStorage.setItem('userinfo', JSON.stringify(userInfo));
  }

  // For testing purpuse
  gettest(): Observable<any> {
    const userData = JSON.parse(localStorage.getItem('userinfo') || '{}');
    let tkn = new Tknholder(userData._token, 'nurse');
    console.log(userData._token);

    return this.httpClient.post<any>(
      'http://localhost:8081/wellnet/public/signup',
      tkn
    ) as Observable<any>;
  }

  // //when creating a nurse model (front-end) make sure to call this function when setting their uid
  getLoggedUserUid(): string {
    const userData = JSON.parse(localStorage.getItem('userinfo') || '{}');
    return userData.id;
  }
  

  
  
}// end of file




  //Deprecated Methods
  //=========================================================================================
  // async getToken() {
  //   const user = firebase.auth().currentUser;
  //   if (user != null) this.idToken = await user.getIdToken(true);
  // }
  

  // Deprecated
  // login(email: string, pass: string) {

    // return this.httpClient
    //   .post<SignupResponse>(
    //     'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
    //       this.API_KEY,
    //     {
    //       email: email,
    //       password: pass,
    //       returnSecureToken: true,
    //     }
    //   )
    //   .pipe(
    //     catchError((err) => {
    //       return err;
    //     }),
    //     tap((res: any) => {
    //       this.authenticatedUser(
    //         res.email,
    //         res.localId,
    //         res.idToken,
    //         res.refreshToken,
    //         +res.expiresIn
    //       );
    //     })
    //   );
  //}

  //Deprecated
  // Registering with firebase
  // signup(email: string, pass: string) {
  //   return this.httpClient
  //     .post<SignupResponse>(
  //       'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
  //         this.API_KEY,
  //       {
  //         email: email,
  //         password: pass,
  //         returnSecureToken: true,
  //       }
  //     )
  //     .pipe(
  //       catchError((err) => {
  //         return err;
  //       }),
  //       tap((res: any) => {
  //         this.authenticatedUser(
  //           res.email,
  //           res.localId,
  //           res.idToken,
  //           res.refreshToken,
  //           +res.expiresIn
  //         );
  //       })
  //     );
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

