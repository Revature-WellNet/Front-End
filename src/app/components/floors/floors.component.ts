import { Component, HostListener, OnInit } from '@angular/core';
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
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-floors',
  templateUrl: './floors.component.html',
  styleUrls: ['./floors.component.css']
})
export class FloorsComponent implements OnInit {

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

  doctors: any[] = [];
  nurses: any[] = [];
  patients: any[] = [];

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
