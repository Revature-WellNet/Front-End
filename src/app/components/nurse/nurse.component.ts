import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patient';
import { NurseService } from 'src/app/services/nurse.service';
import { PatientService } from 'src/app/services/patient.service';
import { FirebaseService } from 'src/app/user-auth/services/firebase.service';
import { map, take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nurse',
  templateUrl: './nurse.component.html',
  styleUrls: ['./nurse.component.css']
})
export class NurseComponent implements OnInit {

  patientsArray:any=[];

  constructor(private nurseService: NurseService, private firebaseService : FirebaseService, private router : Router, private patientService: PatientService) { }


  ngOnInit(): void {
    console.log("before pipe");
    if(!this.firebaseService.autoSignIn())
      this.router.navigate(['login']);  
    const userData = JSON.parse(localStorage.getItem('userinfo') || '{}');
    if(userData.role == "doctor")
      this.router.navigate(['doctor']);
    this.getAllPatients();
  }

  getInfo(){
    this.nurseService.getUserInfo();
  }

  addPatient(){
    this.nurseService.addPatients();
    console.log("Button Clicked");
  }

  searchPatient(){
    this.nurseService.getPatientById(1);
  }

  searchPatByFName(firstName: string){
    console.log("Button Clickd")
    this.nurseService.getPatientByFirstName(firstName).subscribe((response: Patient[])=> {
        this.patientsArray = response;
        console.log(this.patientsArray);
        console.log(response);
        console.log(typeof response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
  }

  searchPatByFullName(firstName: string, lastName: string){
    this.nurseService.getPatientByFullName(firstName, lastName).subscribe((response: Patient[])=> {
        this.patientsArray = response;
        console.log(this.patientsArray);
        console.log(response);
        console.log(typeof response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      );
  }

  searchPatNameDate(firstName: string, lastName:string, dobField : string){

    //console.log(dobField);

    let fullDate:string = dobField;
    console.log(firstName, lastName, fullDate);
    this.nurseService.getPatientByNameDOB(firstName, lastName, fullDate).subscribe(
      (response: Patient[])=> {
        this.patientsArray = response;
        console.log(this.patientsArray);
        console.log(response);
        console.log(typeof response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  getAllPatients(){
    this.nurseService.getPatients().subscribe(
      (response: Patient[])=> {
        this.patientsArray = response;
                console.log(this.patientsArray);
        console.log(response);
        console.log(typeof response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  diagnosePatient(patient: Patient){
    this.patientService.diagnosePatient(patient);
  }

  goBack(){
    this.nurseService.goBack();
  }

  logout(){
    this.firebaseService.logout();
  }

}
