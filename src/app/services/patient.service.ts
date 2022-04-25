import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient';
import { Room } from '../models/rooms/room';
import { RoomDto } from '../models/rooms/room-dto';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:8095/'
  })
};

@Injectable({
  providedIn: 'root'
})

export class PatientService {

  private backendUrl = 'http://localhost:8095/wellnet/patient'
  public patient!: Patient;  
  public room!: RoomDto;
  constructor(private router: Router, private http: HttpClient) {
 
  }

  createPatient(patient : Patient){

    return this.http.post<Patient>(this.backendUrl, patient).subscribe((response : any) => {console.log(response)});
  }

  getAllergies(){
    return this.http.get<Object[]>(this.backendUrl+'/allergies');
  }

  getVaccinations(){
    return this.http.get<Object[]>(this.backendUrl+'/vaccinations');

  }

  getBloodType(name :string){
    return this.http.get<Object[]>(this.backendUrl+'/bloodtype/'+name);
  }

  getSex(name :string){
    return this.http.get<Object[]>(this.backendUrl+'/sex/'+name);

  }

  getPatient(firstName: string, lastName: string, dob: Date): Observable<Patient>{
    return this.http.get<Patient>(this.backendUrl+"?firstname="+firstName+"&lastname="+lastName+"&dob="+dob, httpOptions) as Observable<Patient>;
  }

  createAllergy(allergy : string){

    return this.http.post<string>(this.backendUrl+'/allergies', allergy).subscribe((response : any) => {console.log(response)});
  }

  createVaccination(vaccine : string){

    return this.http.post<string>(this.backendUrl+'/vaccinations', vaccine).subscribe((response : any) => {console.log(response)});
  }

  deleteAllergy(oldAllergies : string[]){
    
    for(let i of oldAllergies){
      console.log(i)
      this.http.delete(this.backendUrl+'/allergies/'+i).subscribe((response : any) => {console.log(response)});
      
      }
  }

 deleteVaccine(oldVaccines :string[]){

    for(let i of oldVaccines){
      console.log(i)
    this.http.delete(this.backendUrl+'/vaccinations/'+i).subscribe((response : any) => {console.log(response)});
    }
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}


// http://localhost:8081/wellnet/patient?firstname=Captain&lastname=America&dob=1920-03-31

  diagnosePatient(patient: Patient) {
    this.patient = patient;

    this.router.navigate(["rooms"]);
  }

 /* Not enough time to implement and not an MVP user story

  updatePatient(){
    // implement logic to update info in backend
  }

  updateWeight(weight:number){
    this.patient.weight = weight;
    this.updatePatient();
  }

  updateHeight(height:number):Patient{
    this.patient.height = height;
    this.updatePatient();
    return this.patient;
  }

  addVaccination(vaccination:object){
    this.patient.vaccinations.push(vaccination);
    this.updatePatient();
  }

  addAllergy(allergy:object){
    this.patient.allergies.push(allergy);
    this.updatePatient();
  }
*/

}
