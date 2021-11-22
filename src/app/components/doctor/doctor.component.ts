import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';
import { Patient } from '../../models/patient';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  doctorId!: string;

  public patientsArray : any = [];

  constructor(private doctorService: DoctorService) { }

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



}
