import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http : HttpClient) { }

  getUser(email : string){
    //right now the backend takes an int. need to change that after we talk with login
    return this.http.get<User>('http://localhost:8081/wellnet/'+email);
  }

  createOrUpdateUser(user : User){

    return this.http.post<User>('http:localhost:8081/wellnet', user);
  }
           
}