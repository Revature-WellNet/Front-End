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

  public tempAllPatients : Array<Patient> = [];

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
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

          this.tempAllPatients.push(Object(data)[i]);

          console.log(this.tempAllPatients[i]);

        }

      }

    );

  }
 
  
  logout(){

    this.doctorService.routerLogOutDoctor();

  }
  // RouterLink to redirect to Login Page



}
