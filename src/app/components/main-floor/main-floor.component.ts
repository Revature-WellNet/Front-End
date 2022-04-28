import { Component, HostListener, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Patient } from '../../models/patient';
import { PatientService } from '../../services/patient.service';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';
import { TraumaFloorComponent } from '../trauma-floor/trauma-floor.component';
import { Role } from '../../models/role';
import { Sex } from '../../models/sex'; 
import { Allergy } from '../../models/allergy';
import { Vaccination } from '../../models/vaccination';
import { Bloodtype } from '../../models/bloodtype';
import { Specialization } from '../../models/specialization';
import { Room } from '../../models/rooms/room';
import { Area } from '../../models/rooms/area';
import {RoomService} from '../../services/room.service'
import { sys } from 'typescript';
@Component({
  selector: 'main-floor',
  templateUrl: 'main-floor.component.html',
  styleUrls: ['main-floor.component.css'],
})
export class MainFloorComponent{
  title = 'rooms';
  wasPlaced = false;
  @HostListener('click')
  bringToFront() {
    var main = document.getElementById('main');
    var mainFloor = document.getElementById('main-floor');
    var trauma = document.getElementById('trauma');
    var traumaFloor = document.getElementById('trauma-floor');
    var emergency = document.getElementById('emergency');
    var emergencyFloor = document.getElementById('emergency-floor');
    var physicalTherapy = document.getElementById('physical-therapy');
    var physicalTherapyFloor = document.getElementById(
      'physical-therapy-floor'
    );

    main?.addEventListener('click', bringMainToFront);
    trauma?.addEventListener('click', bringTraumaToFront);
    emergency?.addEventListener('click', bringEmergencyToFront);
    physicalTherapy?.addEventListener('click', bringPhysicalTherapyToFront);

    function bringMainToFront() {
      main?.classList.remove('inactive');
      main?.classList.add('active');
      mainFloor?.classList.remove('inactive');
      mainFloor?.classList.add('active');
      trauma?.classList.remove('active');
      trauma?.classList.add('inactive');
      traumaFloor?.classList.remove('active');
      traumaFloor?.classList.add('inactive');
      emergency?.classList.remove('active');
      emergency?.classList.add('inactive');
      emergencyFloor?.classList.remove('active');
      emergencyFloor?.classList.add('inactive');
      physicalTherapy?.classList.remove('active');
      physicalTherapy?.classList.add('inactive');
      physicalTherapyFloor?.classList.remove('active');
      physicalTherapyFloor?.classList.add('inactive');
      console.log('main brought to front');
    }

    function bringTraumaToFront() {
      main?.classList.remove('active');
      main?.classList.add('inactive');
      mainFloor?.classList.remove('active');
      mainFloor?.classList.add('inactive');
      trauma?.classList.remove('inactive');
      trauma?.classList.add('active');
      traumaFloor?.classList.remove('inactive');
      traumaFloor?.classList.add('active');
      emergency?.classList.remove('active');
      emergency?.classList.add('inactive');
      emergencyFloor?.classList.remove('active');
      emergencyFloor?.classList.add('inactive');
      physicalTherapy?.classList.remove('active');
      physicalTherapy?.classList.add('inactive');
      physicalTherapyFloor?.classList.remove('active');
      physicalTherapyFloor?.classList.add('inactive');
      console.log('trauma brought to front');
    }

    function bringEmergencyToFront() {
      main?.classList.remove('active');
      main?.classList.add('inactive');
      mainFloor?.classList.remove('active');
      mainFloor?.classList.add('inactive');
      trauma?.classList.remove('active');
      trauma?.classList.add('inactive');
      traumaFloor?.classList.remove('active');
      traumaFloor?.classList.add('inactive');
      emergency?.classList.remove('inactive');
      emergency?.classList.add('active');
      emergencyFloor?.classList.remove('inactive');
      emergencyFloor?.classList.add('active');
      physicalTherapy?.classList.remove('active');
      physicalTherapy?.classList.add('inactive');
      physicalTherapyFloor?.classList.remove('active');
      physicalTherapyFloor?.classList.add('inactive');
      console.log('emergency brought to front');
    }

    function bringPhysicalTherapyToFront() {
      main?.classList.remove('active');
      main?.classList.add('inactive');
      mainFloor?.classList.remove('active');
      mainFloor?.classList.add('inactive');
      trauma?.classList.remove('active');
      trauma?.classList.add('inactive');
      traumaFloor?.classList.remove('active');
      traumaFloor?.classList.add('inactive');
      emergency?.classList.remove('active');
      emergency?.classList.add('inactive');
      emergencyFloor?.classList.remove('active');
      emergencyFloor?.classList.add('inactive');
      physicalTherapy?.classList.remove('inactive');
      physicalTherapy?.classList.add('active');
      physicalTherapyFloor?.classList.remove('inactive');
      physicalTherapyFloor?.classList.add('active');
      console.log('physical therapy brought to front');
    }
  }

  ngOnInit(): void {
    this.getUsers();
    this.getPatients();
    console.log(this.doctors);
    console.log(this.nurses);
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
              this.nurses.push(u);
            }
            else if(u.role.role == "doctor")
            {
              this.doctors.push(u);    
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

  constructor(public patientService: PatientService, public userService: UserService, public roomService: RoomService) {
  }


  room1: any[] = [];

  room2: any[] = [];

  room3: any[] = [];

  room4: any[] = [];

  room5: any[] = [];

  room6: any[] = [];

  room7: any[] = [];

  room8: any[] = [];

  room9: any[] = [];

  room10: any[] = [];

  room11: any[] = [];

  room12: any[] = [];

  room13: any[] = [];

  room14: any[] = [];

  room15: any[] = [];

  room16: any[] = [];

  room17: any[] = [];

  roleDoc: Role = { roleId: 2, role: 'doctor'};
  roleNurse: Role = { roleId: 1, role: 'nurse'};

  sex: Sex = {sexId: 0, sex: 'male'};
  blood: Bloodtype = { typeId: 0, type: 'o'}
  
  pc: Specialization = Specialization.Primary_Care;

  // // Dummy data 
  // doc: User = {id: '0', firstname: 'test', lastname: 'test', email: 'test', role: this.roleDoc, specialization: Specialization.Primary_Care};
  // doc1: User = {id: '1', firstname: 'test', lastname: 'test', email: 'test', role: this.roleDoc, specialization: Specialization.General_Practicioner};
  // doc2: User = {id: '2', firstname: 'second test', lastname: 'test', email: 'test', role: this.roleDoc, specialization: Specialization.General_Surgeon};
  // nurse: User = {id: '1', firstname: 'nurse', lastname: 'test', email: 'test', role: this.roleNurse, specialization : Specialization.General_Practicioner};
  // nurse2: User = {id: '2', firstname: 'sexy nurse', lastname: 'test', email: 'test', role: this.roleNurse, specialization: Specialization.Pediatrician};
  // patient1: Patient = {
  //   patientId: 0, firstName: 'TestPatient', lastName: 'TestPatient', dob: new Date(), height: 60, weight: 100, bloodType: this.blood, sex: this.sex,
  //   fullName: function (): string {
  //     throw new Error('Function not implemented.');
  //   }
  // }
  // End of Dummy data

  // Used to populate the rooms with nurses and doctors
  mainFloor: any[] = [];

  // Holds dummy data, comment out inside 
  doctors: any[] = [

    // this.doc,
    // this.doc2
  
  ];

  nurses: any[] = [

    // this.nurse,
    // this.nurse2

  ];

  patients: any[] = [

    // this.patient1

  ];

  drop(event: CdkDragDrop<any []>) {

    console.log(event.container)
    //let p: Patient = JSON.parse(event.container.data[0])
    //console.log(p);
    this.wasPlaced = true;
    let room = new Room(1, 1, new Area(1, "Main Floor"), 1, ["Bob"], true);
    this.roomService.putUpdateRoom(room, 1);
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
