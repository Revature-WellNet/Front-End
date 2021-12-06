import { Component, OnInit } from '@angular/core';
import { Area } from 'src/app/models/rooms/area';
import { Room } from 'src/app/models/rooms/room';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { DiagnosisFormService } from 'src/app/services/diagnosis-form.service';
import { RoomService } from 'src/app/services/room.service';
import { PatientService } from 'src/app/services/patient.service';
import { Patient } from 'src/app/models/patient';
import { FirebaseService } from 'src/app/user-auth/services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {


  areas:Area[] = [];
  rooms:Room[] = [];
  log:string = "";
  patient: Patient = this.patientService.patient; 

  waitingroom:string[] = ["Mario Vidal", "Bob White", "Iron Man"];
  
  constructor(private router:Router, private diagService: DiagnosisFormService, private service: FirebaseService, private roomService: RoomService, private patientService: PatientService) { }
  
  ngOnInit(): void {
    
    if(!this.service.autoSignIn()){
      this.router.navigate(['login'])
    }
    this.getAllAreas();
    this.getRooms();
  }

  getAllAreas(){

    this.areas[0] = new Area(1,"Main Floor");
    this.areas[1] = new Area(2,"Trauma");
    this.areas[2] = new Area(3,"ER");
    this.areas[3] = new Area(4,"Physical Therapy");
    this.areas[4] = new Area(5,"Pediatrics");/*12*/ 
  }

  selectArea(areaId:number){
    for(let room of this.rooms){
      if(room.area.areaId == areaId){
        room.highlighted = true;
      }else{
        room.highlighted = false;
      }
    }
  }

  /*
  get all diagnForms where status = false;
  check rooms and populate UI
  */

  getRooms(){

    this.roomService.getAllRooms().subscribe(roomList => {
      console.log(JSON.stringify(roomList));
      roomList.forEach((room: any) => {
        //mismatch between frontend and backend representations of rooms requires this constructor stuff
        this.rooms[room.roomNumber-1] = (new Room(room.roomId, room.roomNumber, new Area(room.area.id, room.area.name), 1, [], false));
      });
    });

    // populating rooms with current patients
    this.diagService.getAllDiagnosisForms().subscribe(diags => {
      diags.forEach(diag => {
        if(!diag.getResolutionStatus()){ //resolutionStatus = false means that the patient is still in the room
          this.rooms[diag.getRoom().roomNumber - 1].patients.push(diag.getPatient().firstName + " " + diag.getPatient().lastName);
          this.rooms[diag.getRoom().roomNumber - 1].roomStatus = 2;
        }
      });
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    
    } else {
      
      let newRoom = event.container.element.nativeElement.dataset.rn;

      if(event.container.data.length > 0 && Number(newRoom) > 0){
        this.log = "Room " + newRoom + " is occupied.";
        return;
      }

      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      let newindex:number = Number(newRoom) - 1;
      let previndex:number = Number(event.previousContainer.element.nativeElement.dataset.rn) - 1;
      if(previndex > 0){
        this.rooms[previndex].roomStatus = 1; 
      }
      if(newindex > 0){
        this.rooms[newindex].roomStatus = 2;
        this.log = "Patient assigned to room " + newRoom;
      }else{
        this.log = "Patient returned to waiting room";
      }
    }
  }
}
