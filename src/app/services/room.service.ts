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
  
  getAllRooms(): Observable<any>{
    let rooms: Observable<any> = this.http.get<{roomId: number, roomNumber: number, area: Area}[]>(this.backendUrl);
    return rooms;
  }
}