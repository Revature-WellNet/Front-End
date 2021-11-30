import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';
import { NurseService } from '../../services/nurse.service';
import { Patient } from '../../models/patient';
import { FirebaseService } from 'src/app/user-auth/services/firebase.service';
import { Router } from '@angular/router';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  doctorId!: string;

  public patientsArray : any = [];

  constructor(private doctorService: DoctorService, private nurseService : NurseService, private firebaseService:FirebaseService, private router: Router) { }

  ngOnInit(): void {
    this.firebaseService.userInfo.subscribe((res)=>{
      if(res==null){
        this.router.createUrlTree(['login']);
      }
      if(res?.role == "nurse"){
        this.router.navigate(['nurse']);
      }
    });
    //before we get doctor: 
    this.getAllPatients();


   // getPatientsByDoctor(doctorId){
  //   this.doctorService.getPatientsByDocId();
  // }
  }

  // getPatientById(){
  //   this.doctorService.getPatientById(id);
  // }
  goBack(){
    this.doctorService.goBack();
  }
  
  viewUserInfo(){
    this.doctorService.getUserInfo();
  }
  
  // getPatients(){
  //   this.doctorService.getPatients();
  // }

   getPatientsByDoctor(doctorId: string){
    this.doctorService.getPatientsByDocId();
  }



  getPatientsByString(inputString : string) {

    console.log(inputString);

    this.doctorService.getPatientsByDocIdUser(inputString).subscribe(
      data => { 
        console.log(Object(data)); 

        let length : number = data.length;

        for (let i = 0; i < length; ++ i) {

          this.patientsArray.push(Object(data)[i]);

          console.log(this.patientsArray[i]);

        }

      }

    );

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

  logout(){
    this.firebaseService.logout();
  }
  // RouterLink to redirect to Login Page



}
