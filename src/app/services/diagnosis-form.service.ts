import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DiagnosisDTO } from '../models/diagnosis-dto';
import { DiagnosisForm } from '../models/diagnosis-form';
import { Patient } from '../models/patient';
import { Room } from '../models/rooms/room';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DiagnosisFormService {
  private backendUrl = 'http://localhost:8081/wellnet/diagnosis/'

  constructor(private http: HttpClient) { 

  }
  postDiagnosisForm(diagDTO: DiagnosisDTO): Observable<any>{  
    return this.http.post(this.backendUrl,diagDTO) as Observable<any>;
  }
  getDiagnosisForm(patientId: number): Observable<DiagnosisForm[]>{  
    return this.http.get<DiagnosisForm[]>(this.backendUrl+"patientId/"+patientId) as Observable<DiagnosisForm[]>;
  }
  getAllDiagnosisForms(): Observable<DiagnosisForm[]>{
    return this.http.get<DiagnosisForm[]>(this.backendUrl) as Observable<DiagnosisForm[]>;
  }
}