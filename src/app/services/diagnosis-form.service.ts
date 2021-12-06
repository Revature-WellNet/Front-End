import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DiagnosisForm } from '../models/diagnosis-form';

@Injectable({
  providedIn: 'root'
})
export class DiagnosisFormService {
  private backendUrl = 'http://localhost:8081/wellnet/diagnosis/'

  constructor(private http: HttpClient) {}

  getDiagnosisForm(patientId: number): Observable<DiagnosisForm[]>{
    return this.http.get<DiagnosisForm[]>(this.backendUrl+"patientId/"+patientId) as Observable<DiagnosisForm[]>;
  }

  postDiagnosisForm(diagDTO: DiagnosisForm): Observable<any>{
    return this.http.post(this.backendUrl,diagDTO) as Observable<any>;
  }

  putDiagnosisForm(diagDTO: DiagnosisForm): Observable<any>{
    return this.http.put(this.backendUrl, diagDTO) as Observable<any>;
  }
  getAllDiagnosisForms(): Observable<DiagnosisForm[]>{
    return this.http.get<DiagnosisForm[]>(this.backendUrl) as Observable<DiagnosisForm[]>;
  }
}
