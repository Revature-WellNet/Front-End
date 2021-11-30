import { Component, OnInit } from '@angular/core';
import { Area } from 'src/app/models/rooms/area';
import { Room } from 'src/app/models/rooms/room';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {


  areas:Area[] = [];
  rooms:Room[] = [];
  log:string = "";

  waitingroom:string[] = ["Mario Vidal", "Bob White", "Iron Man"];
  constructor() { }

  ngOnInit(): void {
    this.getAllAreas();
    this.getRooms();
  }

  getAllAreas(){

    this.areas[0] = new Area(1,"Main Floor");
    this.areas[1] = new Area(2,"Trauma");
    this.areas[2] = new Area(3,"ER");
    this.areas[3] = new Area(4,"Physical Therapy");
    this.areas[4] = new Area(5,"Pediatrics");/**/ 
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

  getRooms(){
    this.rooms[0] = new Room(1, 1, this.areas[0] , 2, ["Patient Name"], false);
    this.rooms[1] = new Room(2, 2, this.areas[0] , 2, ["Patient Name"], false);
    this.rooms[2] = new Room(3, 3, this.areas[0] , 2, ["Patient Name"], false);
    this.rooms[3] = new Room(4, 4, this.areas[0] , 1, [], false);
    this.rooms[4] = new Room(5, 5, this.areas[0] , 1, [], false);
    this.rooms[5] = new Room(6, 6, this.areas[0] , 1, [], false);
    this.rooms[6] = new Room(7, 7, this.areas[1] , 2, [], false);
    this.rooms[7] = new Room(8, 8, this.areas[1] , 1, [], false);
    this.rooms[8] = new Room(9, 9, this.areas[3] , 1, [], false);
    this.rooms[9] = new Room(10, 10, this.areas[4] , 2, ["Patient Name"], false);
    this.rooms[10] = new Room(11, 11, this.areas[4] , 1, [], false);
    this.rooms[11] = new Room(12, 12, this.areas[2] , 2, ["Patient Name"], false);
    this.rooms[12] = new Room(13, 13, this.areas[2] , 2, ["Patient Name"], false);
    this.rooms[13] = new Room(14, 14, this.areas[2] , 2, ["Patient Name"], false);
    this.rooms[14] = new Room(15, 15, this.areas[2] , 2, ["Patient Name"], false);
    this.rooms[15] = new Room(16, 16, this.areas[2] , 2, ["Patient Name"], false);
    this.rooms[16] = new Room(17, 17, this.areas[2] , 1, [], false);
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
      if(previndex >  0){
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
