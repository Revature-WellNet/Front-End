import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocationStrategy } from '@angular/common';
import { Observable } from 'rxjs';


const APIURL="http://localHost:8081/"
@Injectable({
  providedIn: 'root'
})
export class NurseService {

  // private patientAPI = "URL for Patients";

  constructor(private http: HttpClient, private router: Router, private location: LocationStrategy) { }

  // Will turn into observable once have patient table created in database
  // getPatients(): Observable:any[]{
  //   console.log("This will return patients");
  //   return this.http.http.get<any[]>(this.api)
  // }

  // Will turn into observable once have patient table created in database
  getPatientsById(){
    console.log("This will return patients");
    // return this.http.http.get<any[]>(this.api)
  }

  addPatients(){
    console.log("This will create a patient");
    // this.http.post(patientAPI, body possible HTTPHeaders);
  }

  getUserInfo(){
    this.router.navigate(["profile"]);
  }

  logout(){
    this.router.navigate(["registration"]);
  }

  goBack(): void {
    this.location.back();
  }
}
