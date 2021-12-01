import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patient';
import { NurseService } from 'src/app/services/nurse.service';
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

  constructor(private nurseService: NurseService, private firebaseService : FirebaseService, private router : Router) { }

  ngOnInit(): void {
    console.log("before pipe");
    this.firebaseService.userInfo.subscribe((res)=>{
      if(res==null){
        this.router.navigate(['login']);
      }
      console.log("res role: " + res?.role);
      if(res?.role == "doctor"){
        this.router.navigate(['doctor']);
      }
    });
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

  searchPatNameDate(firstName: string, lastName:string, dobYear:string, dobMonth:string, dobDay:string){
    let fullDate:string = dobYear+"-"+dobMonth+"-"+dobDay;
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

  goBack(){
    this.nurseService.goBack();
  }

  logout(){
    this.firebaseService.logout();
  }

}
