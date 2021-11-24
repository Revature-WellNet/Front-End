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
export class CallBootstrapDBService {

  private patientApiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient, private location: LocationStrategy, 
    private ttp: HttpClientModule, private router : Router) { }



  getPatientsByDoctorName() : Observable<Patient[]> {

    console.log("Setting Up H2");

    return this.http.get<Patient[]>(APIURL + "public/bootstrapDB/filler/one");

  }


}
