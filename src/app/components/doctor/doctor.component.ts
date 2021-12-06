import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';
import { NurseService } from '../../services/nurse.service';
import { Patient } from '../../models/patient';
import { FirebaseService } from 'src/app/user-auth/services/firebase.service';
import { PatientService } from 'src/app/services/patient.service';
import { Router } from '@angular/router';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  doctorId!: string;

  public doctorName!: string;

  public patientsArray : any = [];
  public searchingDoctor : boolean = false;

  constructor(private doctorService: DoctorService, 
    private nurseService : NurseService, 
    private firebaseService : FirebaseService, 
    private patientService: PatientService, 
    private router: Router) { }




  ngOnInit(): void {
    console.log("calling auto sign in from doctor");
    if(!this.firebaseService.autoSignIn())
      this.router.navigate(['login']);
    const userData = JSON.parse(localStorage.getItem('userinfo') || '{}');
    if(userData.role == "nurse")
      this.router.navigate(['nurse']);
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
  
  searchPatient(){

    this.searchingDoctor = false;

    this.nurseService.getPatientById(1);
  }

  searchPatByFName(firstName: string){

    this.searchingDoctor = false;

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

    this.searchingDoctor = false;  

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
    //this.patientService.diagnosePatient(patient);
  }

  logout(){
    this.firebaseService.logout();
  }
  // RouterLink to redirect to Login Page


  searchByDoctor(doctorFirstName : string, doctorLastName : string) {
    this.doctorName =  `${doctorFirstName} ${doctorLastName}`;
    console.log("First Name : " + doctorFirstName);
    console.log("Last Name  : " + doctorLastName);

    this.searchingDoctor = true;

    this.doctorService.getPatientsByDoctorName(doctorFirstName, doctorLastName).subscribe((response)=>{this.patientsArray=response;
      console.log(this.patientsArray);
    });
  }

  routeToAdd(){
    this.router.navigate(["addAllergiesVaccines"]);
  }

}
