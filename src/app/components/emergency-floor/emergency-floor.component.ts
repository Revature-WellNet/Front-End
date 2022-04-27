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
  selector: 'app-emergency-floor',
  templateUrl: './emergency-floor.component.html',
  styleUrls: ['./emergency-floor.component.css']
})
export class EmergencyFloorComponent implements OnInit {

  ngOnInit(): void {
    this.getUsers();
    this.getPatients();
    console.log(this.edoctors);
    console.log(this.enurses);
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
              this.enurses.push(u);
            }
            else if(u.role.role == "doctor")
            {
              this.edoctors.push(u); 
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

  room301: any[] = [];

  room302: any[] = [];

  room303: any[] = [];

  room304: any[] = [];

  room305: any[] = [];

  room306: any[] = [];

  room307: any[] = [];

  room308: any[] = [];

  room309: any[] = [];

  room310: any[] = [];

  room311: any[] = [];

  room312: any[] = [];

  room313: any[] = [];

  room314: any[] = [];

  room315: any[] = [];

  room316: any[] = [];

  room317: any[] = [];

  roleDoc: Role = { roleId: 0, role: 'doctor'};
  roleNurse: Role = { roleId: 1, role: 'nurse'};

  em: Specialization = Specialization.General_Surgeon;

  sex: Sex = {sexId: 0, sex: 'male'};
  blood: Bloodtype = { typeId: 0, type: 'o'}

  //Dummy data 
  doc2: User = {id: '2', firstname: 'second test', lastname: 'test', email: 'test', role: this.roleDoc, specialization: Specialization.Pediatrician};
  nurse: User = {id: '1', firstname: 'nurse', lastname: 'test', email: 'test', role: this.roleNurse, specialization: Specialization.General_Practicioner};
  // End of dummy 

  edoctors: any[] = [this.doc2];
  enurses: any[] = [this.nurse];
  patients: any[] = [];
  emFloor: any[] = [];
  
  constructor(public patientService: PatientService, public userService: UserService) {
  }

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

}
