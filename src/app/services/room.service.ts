import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Area } from '../models/rooms/area';
import { Room } from '../models/rooms/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private backendUrl = 'http://localhost:8081/wellnet/room/'

  constructor(private http: HttpClient) { 

  }

  //Mismatch between front and backend room models means this must manually rectify that
  /*getAllRooms(): Room[]{
      let rooms: Observable<any> = this.http.get<{roomId: number, roomNumber: number, area: Area}[]>(this.backendUrl);
      //let rooms: Observable<any> = this.http.get<any[]>(this.backendUrl);
      console.log("rooms: " + JSON.stringify(rooms));
      let finalRooms: Room[] = [];
      rooms.subscribe(roomList => {
          for(let i = 0; i < roomList.length; i++){
              finalRooms.push(new Room(roomList[i].roomId, roomList[i].roomNumber, roomList[i].area, 1, [], false));
          }
      });
      return finalRooms;
  }*/
  
  getAllRooms(): Observable<any>{
    let rooms: Observable<any> = this.http.get<{roomId: number, roomNumber: number, area: Area}[]>(this.backendUrl);
    return rooms;
  }
}