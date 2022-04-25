import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http : HttpClient) { }

   BASE_URL='http://localhost:8081/wellnet/user/';
  
  getUser(id : string){
    //right now the backend takes an int. need to change that after we talk with login
    return this.http.get<User>('http://localhost:8081/wellnet/user/'+id);
  }

  createOrUpdateUser(user : User){
   // console.log(user);
   // console.log(typeof User);

    return this.http.put<User>('http://localhost:8081/wellnet/user/updateprofile', user).subscribe((response : any) => {console.log(response)});
  }

  getAll() {

    return this.http.get<User[]>(this.BASE_URL);
  } 
  
           
}