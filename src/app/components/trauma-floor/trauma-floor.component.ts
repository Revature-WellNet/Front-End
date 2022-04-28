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
  selector: 'app-trauma-floor',
  templateUrl: './trauma-floor.component.html',
  styleUrls: ['./trauma-floor.component.css']
})
export class TraumaFloorComponent implements OnInit{

  constructor(public patientService: PatientService, public userService: UserService) {
  
  }

  ngOnInit(): void {
    this.getUsers();
    this.getPatients();
    console.log(this.tdoctors);
    console.log(this.tnurses);
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
              this.tnurses.push(u);
            }
            else if(u.role.role == "doctor")
            {
              let myInt: Number = u.specialization;

              if(myInt === 3)
              {
                console.log("IOHJEWGFQOHIPQWFEIOP:HQFEP:OHIQDRWFPHOI :QFEWPHOIU: QFE PHO)I*:QFGWE H)P*O{I:QGFEWHPO)I:QGFEhp[oIQGFEHPO){I*QWFGETHQIPO:GEWFQFWEHOIP:QFWEHOIP{: QFEOHPI")
               this.tdoctors.push(u);
              }    
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

  room201: any[] = [];

  room202: any[] = [];

  room203: any[] = [];

  room204: any[] = [];

  room205: any[] = [];

  room206: any[] = [];

  room207: any[] = [];

  room208: any[] = [];

  room209: any[] = [];

  room210: any[] = [];

  room211: any[] = [];

  room212: any[] = [];

  room213: any[] = [];

  room214: any[] = [];

  room215: any[] = [];

  room216: any[] = [];

  room217: any[] = [];

  roleDoc: Role = { roleId: 2, role: 'doctor'};
  roleNurse: Role = { roleId: 1, role: 'nurse'};

  sex: Sex = {sexId: 0, sex: 'male'};
  blood: Bloodtype = { typeId: 0, type: 'o'}
  
  tr: Specialization = Specialization.Radiologist;

  doc2: User = {id: '2', firstname: 'second test', lastname: 'test', email: 'test', role: this.roleDoc, specialization: Specialization.Radiologist};

  nurse: User = {id: '1', firstname: 'nurse', lastname: 'test', email: 'test', role: this.roleNurse, specialization: Specialization.General_Practicioner};

  tdoctors: any[] = [this.doc2];
  tnurses: any[] = [this.nurse];
  patients: any[] = [];
  tFloor: any[] = [];


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
