import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';
import { NurseService } from '../../services/nurse.service';
import { Patient } from '../../models/patient';

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

  constructor(
    private doctorService: DoctorService,
    private nurseService : NurseService
  ) { }

  ngOnInit(): void {

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

  searchPatNameDate(firstName: string, lastName:string, dobYear:string, dobMonth:string, dobDay:string){
    
    this.searchingDoctor = false;

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
    this.doctorService.getPatients().subscribe(
      (response: Patient[])=> {
        this.patientsArray = response;
        let dobtest:any = this.patientsArray[0].dob;
        console.log(this.patientsArray);
        console.log(response);
        console.log(typeof dobtest);
      }, 
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  logout(){

    this.doctorService.routerLogOutDoctor();

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

}
