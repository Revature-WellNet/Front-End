
import { LocationStrategy } from '@angular/common';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Patient } from '../models/patient';



const APIURL = 'http://user-service/' //environment.apiBaseUrl;
@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  [x: string]: any;

  private patientApiServerUrl = 'http://localhost:8095/' //environment.apiBaseUrl;

  constructor (private http : HttpClient, private location: LocationStrategy, private router : Router) {}

  // constructor(private http: HttpClient, private location: LocationStrategy, 
  //    private router : Router) { }


  getPatients(): Observable<Patient[]>{
    console.log("This will return patients");

    return this.http.get<Patient[]>(`${this.patientApiServerUrl}patient/`);

  }

  getResolvedPatients(): Observable<Patient[]>{
    console.log("This will return patients");
    console.log(`${this.patientApiServerUrl}patient/resolved`);
    return this.http.get<Patient[]>(`${this.patientApiServerUrl}patient/resolved`);

  }



   // getPatientById(id){
  //   this.http.get(APIURL + "* not this: select patient where id = ?");
  // }

  // VV Likely Not In Use
  getPatientsByDocId(){
    this.http.get(APIURL +"patient/doctor")
  }

  // VV Might Not Be In Use
  getPatientsByDocIdUser(inputString : string) : Observable<Patient[]> {

    console.log("Sending String : " + inputString);

    return this.http.get<Patient[]>(APIURL + "user/patient/doctor/" + inputString);

  }

  // VV Tested
  getPatientsByDoctorName(doctorFirstName : string, doctorLastName : string) : Observable<Patient[]> {

    console.log("Getting Patients Of Doctor : " + doctorFirstName + "  " + doctorLastName);
    if(doctorFirstName && doctorLastName){
    return this.http.get<Patient[]>(APIURL + "user/doctorPatientMap/" + doctorFirstName + "/" + doctorLastName);
    } else {
      let  returner: Observable<Patient[]> = new Observable<Patient[]>();
      return returner;
    }


  }



  getUserInfo(){
    this.router.navigate(['profile']);
  }

  goBack(): void {
    this.location.back();
  }

  routerLogOutDoctor() {

    this.router.navigate(['registration']);

  }

}
