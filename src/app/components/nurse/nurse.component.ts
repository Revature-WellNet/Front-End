import { Component, OnInit } from '@angular/core';
import { NurseService } from 'src/app/services/nurse.service';

@Component({
  selector: 'app-nurse',
  templateUrl: './nurse.component.html',
  styleUrls: ['./nurse.component.css']
})
export class NurseComponent implements OnInit {

  constructor(private nurseSerice: NurseService) { }

  ngOnInit(): void {
  }

  addPatient(){

  }

  searchPatient(){
    // this.nurseSerice.getPatients();
  }

  viewUserInfo(){
    this.nurseSerice.getUserInfo();
  }

  logout(){}
  // RouterLink to redirect to Login Page

}
