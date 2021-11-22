import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public firebaseService : FirebaseService) { }

  ngOnInit(): void {
  }

  onSignin(email : string, password : string)
  {
    console.log('sign in');
    this.firebaseService.signin(email, password);
  }

  logout()
  {
    console.log('log out');
    this.firebaseService.logout();
  }

  getUser()
  {
    this.firebaseService.gettest().subscribe(data=>{
      console.log(data);
    })
    this.firebaseService.getUserFromSpringServer().then(user=>{
      console.log("current user uid: " + user.uid);
    })
  }
  

}
