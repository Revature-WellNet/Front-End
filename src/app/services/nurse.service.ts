import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


const APIURL="http://localHost:8081/"
@Injectable({
  providedIn: 'root'
})
export class NurseService {

  constructor(private http: HttpClient) { }

  // getPatients(){
  //   this.http.get(APIURL + "wellnet/user");
  // }

  // addPatients(){
  //   this.http.post(apiUrl + "wellnet/user", body);
  // }

  getUserInfo(){
    this.http.get(APIURL + "wellnet/user");
  }
}
