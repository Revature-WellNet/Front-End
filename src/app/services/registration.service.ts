import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http : HttpClient, private router : Router ) { }

  // private registrationValues! : Registration;

  private url : string = environment.apiBaseUrl;

  // getRegistrationValues(values : Registration) {

  //   this.registrationValues = values;

  // }

  
   overrideNull(): string {
    if (sessionStorage.getItem('token') === null) return '';
    return sessionStorage.getItem('token') as any;
  }

httpOptions = {
    headers: new HttpHeaders({
      Authorization: this.overrideNull(),
     
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Credentials': 'true',
    }),
  };

  postRegistration(values : User) : Observable<User[]>{

    return this.http.post<User[]>(this.url + "user/registration", values, this.httpOptions);

  }

  routeToNurseComponent(whichPage : string) {

    this.router.navigate([whichPage]);

  }


}
