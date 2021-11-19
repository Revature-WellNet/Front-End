import { Component, OnInit } from '@angular/core';
import { NurseService } from 'src/app/services/nurse.service';

@Component({
  selector: 'app-nurse',
  templateUrl: './nurse.component.html',
  styleUrls: ['./nurse.component.css']
})
export class NurseComponent implements OnInit {

  patientsArray=[];

  constructor(private nurse: NurseService) { }

  ngOnInit(): void {
    // this.nurse.getPatients().subscribe((response: any[])=> this.patientsArray = response)
  }

  getInfo(){
    this.nurse.getUserInfo();
  }

  addPatient(){
    this.nurse.addPatients();
    console.log("Button Clicked");
  }

  searchPatient(){
    this.nurse.getPatientsById();
  }

  goBack(){
    this.nurse.goBack();
  }

  logout(){
    this.nurse.logout();
  }

}
