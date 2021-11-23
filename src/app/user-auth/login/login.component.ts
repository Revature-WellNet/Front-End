import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Userinfo } from '../models/userinfo';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  log:boolean=false;
  constructor(public firebaseService : FirebaseService, private router: Router) { }

 

  onSignin(email : string, password : string)
  {
    console.log('sign in');
    this.firebaseService.login(email, password).subscribe(
      res=> {
        console.log(res);
    },
    err => {
      console.log(err);
      alert(err.error.error.message)
    });
  }
  

  logout()
  {
    this.firebaseService.logout();
  
  }

  //dummy example of sending an http request requiring an authorization header
  getUser()
  {
    this.firebaseService.gettest().subscribe(data=>{
      console.log(data);
    })
    
  }


  ngOnInit(): void {
    // to keep yourself sign in
    this.firebaseService.autoSignIn();
    // to check the status of login
    this.firebaseService.userInfo.subscribe(res=>{
      this.log=!!res;
    })
  }

}
