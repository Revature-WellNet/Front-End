
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';


const APIURL = "http://localHost:8081/"
@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }


  // getPatients(){
  //   this.http.get(APIURL + "wellnet/user");
  // }

   // getPatientById(id){
  //   this.http.get(APIURL + "* not this: select patient where id = ?");
  // }

  // getPatientsByDocId(){
  //   this.http.get(APIURL +"wellnet/patient/doctor")
  // }


  getUserInfo(){
    this.http.get(APIURL + "Wellnet/user");
  }

}
