import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FirebaseService } from '../user-auth/services/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http : HttpClient, private router : Router, private firebaseService : FirebaseService ) { }

  // private registrationValues! : Registration;

  private url : string = environment.apiBaseUrl;

  // getRegistrationValues(values : Registration) {

  //   this.registrationValues = values;

  // }

  
   overrideNull(): string {
    if (sessionStorage.getItem('token') === null) return '';
    return sessionStorage.getItem('token') as any;
  }


  postRegistration(values : User) : Promise<User[]>{
    console.log(this.url);
    return this.http.post<User[]>(this.url + "registration", values).toPromise<User[]>();

  }


  routeToNurseComponent(whichPage : string) {

    this.router.navigate([whichPage]);

  }


}
