import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patient';
import { NurseService } from 'src/app/services/nurse.service';

@Component({
  selector: 'app-nurse',
  templateUrl: './nurse.component.html',
  styleUrls: ['./nurse.component.css']
})
export class NurseComponent implements OnInit {

  patientsArray:any=[];

  constructor(private nurseService: NurseService) { }

  ngOnInit(): void {
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

  getAllPatients(){
    this.nurseService.getPatients().subscribe(
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

  goBack(){
    this.nurseService.goBack();
  }

  logout(){
    this.nurseService.logout();
  }

}
