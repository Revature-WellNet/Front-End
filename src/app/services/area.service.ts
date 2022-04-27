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
export class AreaService {
  private backendUrl = 'http://localhost:8094/wellnet/area/'

  constructor(private http: HttpClient, private router: Router) { 

  }
  
  getAllRooms(): Observable<any>{
    let rooms: Observable<any> = this.http.get<{roomId: number, roomNumber: number, area: Area, doctor: User, patient: Patient}[]>(this.backendUrl);
    return rooms;
  }
}