import { Component, HostListener, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Patient } from '../../models/patient';
import { PatientService } from '../../services/patient.service';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';
import { Role } from '../../models/role';
import { Sex } from '../../models/sex'; 
import { Allergy } from '../../models/allergy';
import { Vaccination } from '../../models/vaccination';
import { Bloodtype } from '../../models/bloodtype';
import { Specialization } from '../../models/specialization';

@Component({
  selector: 'app-pt-floor',
  templateUrl: './pt-floor.component.html',
  styleUrls: ['./pt-floor.component.css']
})
export class PtFloorComponent implements OnInit {

  ngOnInit(): void {
    this.getUsers();
    this.getPatients();
    console.log(this.pdoctors);
    console.log(this.pnurses);
    console.log(this.patients);
  }

  getUsers(): void{
    this.userService.getAll().subscribe (
      (response: User[])=>{
        console.log(response);
        response.forEach(
          (u: User)=>
          {
            console.log(u);
            if(u.role.role == "nurse")
            {
              this.pnurses.push(u);
            }
            else if(u.role.role == "doctor")
            {
              this.pdoctors.push(u); 
            }
          }
        )
      }
    )
  }

  getPatients(): void {
    this.patientService.getAll().subscribe (
      (response: Patient[]) => {
        console.log(response);
        response.forEach(
          (p: Patient)=>
          {
            console.log(p);
            this.patients.push(p);
          }
        )
      }
    )
  
  }

  room401: any[] = [];

  room402: any[] = [];

  room403: any[] = [];

  room404: any[] = [];

  room405: any[] = [];

  room406: any[] = [];

  room407: any[] = [];

  room408: any[] = [];

  room409: any[] = [];

  room410: any[] = [];

  room411: any[] = [];

  room412: any[] = [];

  room413: any[] = [];

  room414: any[] = [];

  room415: any[] = [];

  room416: any[] = [];

  room417: any[] = [];

  roleDoc: Role = { roleId: 2, role: 'doctor'};
  roleNurse: Role = { roleId: 1, role: 'nurse'};

  sex: Sex = {sexId: 0, sex: 'male'};
  blood: Bloodtype = { typeId: 0, type: 'o'}

  pt: Specialization = Specialization.Pediatrician;

  // Dummy data
  doc2: User = {id: '2', firstname: 'second test', lastname: 'test', email: 'test', role: this.roleDoc, specialization: Specialization.Pediatrician};
  nurse: User = {id: '1', firstname: 'nurse', lastname: 'test', email: 'test', role: this.roleNurse, specialization: Specialization.General_Practicioner};
  // End of dummy 

  pdoctors: any[] = [this.doc2];
  pnurses: any[] = [this.nurse];
  patients: any[] = []; 
  ptFloor: any[] = [];

  drop(event: CdkDragDrop<any []>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  constructor(public patientService: PatientService, public userService: UserService) {
  }
}
