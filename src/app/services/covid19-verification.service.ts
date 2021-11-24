import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Covid19VerificationModel } from '../models/covid19-verification-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Covid19VerificationService {

  public serverUrl:string = 'http://localhost:8081/wellnet/public';

  constructor(private http: HttpClient) { }

  submitFormServ(cv:Covid19VerificationModel):Observable<Object>{
    return this.http.post(this.serverUrl + '/covid', cv) ;
  }

  getFormServ(id:number):Observable<Object>{
    console.log(this.serverUrl + '/covid/' + id);
    return this.http.get(this.serverUrl + '/covid/' + id);
  }

  getFormServByString(id:string):Observable<Object>{
    return this.http.get(this.serverUrl+'/covid/user/'+id);
  }

  

}
