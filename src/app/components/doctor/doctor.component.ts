import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
   // getPatientsByDoctor(doctorId){
  //   this.doctorService.getPatientsByDocId();
  // }
  }

  // getPatientById(){
  //   this.doctorService.getPatientById(id);
  // }


  
  viewUserInfo(){
    this.doctorService.getUserInfo();
  }
  
  // getPatients(){
  //   this.doctorService.getPatients();
  // }

   // getPatientsByDoctor(doctorId){
  //   this.doctorService.getPatientsByDocId();
  // }

 
  
  logout(){}
  // RouterLink to redirect to Login Page



}
