import { Component, OnInit } from '@angular/core';
import { Area } from 'src/app/models/rooms/area';
import { Room } from 'src/app/models/rooms/room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {


  areas:Area[] = [];
  rooms:Room[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getAllAreas();
  }

  getAllAreas(){

    this.areas[0] = new Area(1,"Main Floor");
    this.areas[1] = new Area(2,"Trauma");
    this.areas[2] = new Area(3,"ER");
    this.areas[3] = new Area(4,"Physical Therapy");
    this.areas[4] = new Area(5,"Pediatrics");
  }



  getRoomByArea(areaId:number){

    this.rooms = [];
  
    let ri = 1;
    for(let i = 0; i < 10 ; i++){
      this.rooms[i] = new Room(i + 1, (areaId * 100) + ri, new Area(areaId, ''));
      ri++;
    }
  }

}
