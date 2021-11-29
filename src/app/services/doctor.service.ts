
import { LocationStrategy } from '@angular/common';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Patient } from '../models/patient';



const APIURL = environment.apiBaseUrl;
@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private patientApiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient, private location: LocationStrategy,
    private ttp: HttpClientModule, private router : Router) { }



  overrideNull(): string {
    if (localStorage.getItem('token') === null) return '';
    return localStorage.getItem('token') as any;
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

  getPatients(): Observable<Patient[]>{
    console.log("This will return patients");
    return this.http.get<Patient[]>(`${this.patientApiServerUrl}patient`);
  }

   // getPatientById(id){
  //   this.http.get(APIURL + "* not this: select patient where id = ?");
  // }

  getPatientsByDocId(){
    this.http.get(APIURL +"patient/doctor")
  }

  getPatientsByDocIdUser(inputString : string) : Observable<Patient[]> {

    console.log("Sending String : " + inputString);

    return this.http.get<Patient[]>(APIURL + "user/patient/doctor/" + inputString);

  }


  getUserInfo(){
    this.router.navigate(['profile']);
  }

  goBack(): void {
    this.router.navigate(['diagnosis']);
  }

  routerLogOutDoctor() {

    this.router.navigate(['registration']);

  }

}
