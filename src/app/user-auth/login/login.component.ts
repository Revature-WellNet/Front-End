import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public firebaseService : FirebaseService, public router:Router) { }

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

  //dummy example of sending an http request requiring an authorization header
  getUser()
  {
    this.firebaseService.getUserFromSpringServer().then(user=>{
      console.log("current user uid: " + user.uid);
    })
  }

  register(){
    this.router.navigateByUrl('/registration');
  }

}
