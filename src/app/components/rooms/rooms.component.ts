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
import { RoomDto } from 'src/app/models/rooms/room-dto';

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

  waitingroom:string[] = [];
  
  constructor(private router:Router, private diagService: DiagnosisFormService, private service: FirebaseService, private roomService: RoomService, private patientService: PatientService) { }
  
  ngOnInit(): void {
    
    if(!this.service.autoSignIn()){
      this.router.navigate(['login'])
    }
    this.getAllAreas();
    this.getRooms();
    this.patient=this.patientService.patient;
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
        console.log(diag);
        if(!diag.resolutionStatus){ //resolutionStatus = false means that the patient is still in the room;
          if(diag.room){
            this.rooms[diag.room.roomNumber - 1].patients.push(diag.patient.patientId + ' - ' + diag.patient.firstName + ' ' + diag.patient.lastName);
            this.rooms[diag.room.roomNumber - 1].roomStatus = 2;
          }
          else{
            this.waitingroom.push(this.patientService.patient.patientId + ' - ' + this.patientService.patient.firstName + ' ' + this.patientService.patient.lastName);
          }
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

      let p:string = event.container.data[0];
      let pid:number = Number(p.substring(0, p.indexOf(' - ')));
      
      console.log(pid);
      

      let newindex:number = Number(newRoom) - 1;
      let previndex:number = Number(event.previousContainer.element.nativeElement.dataset.rn) - 1;
      if(previndex > 0){
        this.rooms[previndex].roomStatus = 1; 
      }
      if(newindex > 0){
        this.rooms[newindex].roomStatus = 2;
        this.updateDForm(pid, newindex);
        this.log = "Patient assigned to room " + newRoom;
        this.router.navigate(['diagnosis']);
      }else{
        this.log = "Patient returned to waiting room";
      }
    }
  }

  updateDForm(pid:number, newindex:number){
    this.diagService.getDiagnosisForm(pid).subscribe(diags => {
      diags.forEach(diag => {
        
        if(!diag.resolutionStatus){ //resolutionStatus = false means that the patient is still in the room;
          
          

          if(diag.room == null){

           
            
            
            let newr:Room = this.rooms[newindex];
            console.log(newr);
            let newrDto:RoomDto = new RoomDto(newr.roomNumber, newr.roomNumber, newr.area);
            console.log(newrDto);
            console.log(newr.area);
            diag.room = newrDto;
            this.patientService.room=newrDto;
            
            

            // console.log(diag);

            // this.diagService.putDiagnosisForm(diag).subscribe(
            //   (success) => {
            //     console.log('Room updated ');
            //   },
            //   (error) => {
            //     console.log('there was an error');
            //   }
            // );
          }          
        }
      });
    } );
  }

}
