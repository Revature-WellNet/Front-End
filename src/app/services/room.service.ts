import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Area } from '../models/rooms/area';
import { Room } from '../models/rooms/room';
import { User } from '../models/user';
import { Patient } from '../models/patient';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private backendUrl = 'http://localhost:8094/wellnet/room/'

  constructor(private http: HttpClient, private router: Router) {

  }

  getAllRooms(): Observable<any>{
    let rooms: Observable<any> = this.http.get<{roomId: number, roomNumber: number, area: Area, doctor: User, patient: Patient}[]>(this.backendUrl);
    return rooms;
  }

  getFindById(roomId: number){

    return this.http.get<Room>(`http://localhost:8094/wellnet/room/${roomId}`);
  }
  getFindByAreaName(name: String){


    return this.http.get<Area>(`http://localhost:8094/wellnet/area/${name}` );
  }
  getFindRoomByAreaName(name: String){


    return this.http.get<Room[]>(`http://localhost:8094/wellnet/roombyarea/${name}`);
  }
  getFindByDoctor(id: number){


    return this.http.get<User[]>(`http://localhost:8094/wellnet/roombydoctor/${id}` );
}
putUpdateRoom(room: Room, id: number){


    return this.http.put<Room[]>(`${this.backendUrl}update/${id}`, room);


}
}
