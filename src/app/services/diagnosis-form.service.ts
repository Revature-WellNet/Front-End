import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DiagnosisDTO } from '../models/diagnosis-dto';
import { Patient } from '../models/patient';
import { Room } from '../models/rooms/room';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DiagnosisFormService {
  private backendUrl = 'http://localhost:8081/wellnet/diagnosis'

  constructor(private http: HttpClient) { 

  }
  postDiagnosisForm(diagDTO: DiagnosisDTO): Observable<any>{  
    return this.http.post(this.backendUrl,diagDTO) as Observable<any>;
  }
}