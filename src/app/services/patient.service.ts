import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:8081/'
  })
};

@Injectable({
  providedIn: 'root'
})

export class PatientService {

  private backendUrl = 'http://localhost:8081/wellnet/patient'
  public patient!: Patient;  //= new Patient(-1,'dummyfirst','dummylast',new Date(),120,10,'AB','other',[],[]);
  constructor(private http: HttpClient/*private patientIn: Patient*/) {
    //this.patient = patientIn;
  }

  createPatient(patient : Patient){
    return this.http.post<Patient>('http://localhost:8081/wellnet/public/patient', patient).subscribe((response : any) => {console.log(response)});
  }

  getAllergies(){
    
    return this.http.get<Object[]>('http://localhost:8081/wellnet/public/patient/allergies');
  }

  getVaccinations(){
    return this.http.get<Object[]>('http://localhost:8081/wellnet/public/patient/vaccinations');
  }

  getBloodType(name :string){
    return this.http.get<Object[]>('http://localhost:8081/wellnet/public/patient/bloodtype/'+name);
  }

  getSex(name :string){
    return this.http.get<Object[]>('http://localhost:8081/wellnet/public/patient/sex/'+name);
  }

  getPatient(firstName: string, lastName: string, dob: Date): Observable<Patient>{
    console.log("getting patient: " + this.backendUrl+"?firstname="+firstName+"&lastname="+lastName+"&dob="+dob);
    return this.http.get<Patient>(this.backendUrl+"?firstname="+firstName+"&lastname="+lastName+"&dob="+dob, httpOptions) as Observable<Patient>;
  }
/*


http://localhost:8081/wellnet/patient?firstname=Captain&lastname=America&dob=1920-03-31


  updatePatient(){
    // put statement
  }

  updateWeight(weight:number){
    this.patient.weight = weight;
    this.updatePatient();
}

updateHeight(height:number):Patient{
   // this.patient.height = height;
   // this.updatePatient();
   // return this.patient;
}

addVaccination(vaccination:object){
 // this.patient.vaccinations?.push(vaccination);
  //this.updatePatient();
}

addAllergy(Allergy:object){
  this.patient.allergies?.push(Allergy);
  this.updatePatient();
}

  // input a diagnosis by a nurse

  // approve/deny/override diagnosis by a doctor

  // prescribe a treatment for a patient
*/

}
