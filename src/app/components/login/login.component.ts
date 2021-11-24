import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import * as firebase from 'firebase/compat';
import { Userinfo } from 'src/app/user-auth/models/userinfo';
import { FirebaseService } from 'src/app/user-auth/services/firebase.service';
import firebase from 'firebase/compat/app';
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  log:boolean=false;
  constructor(public firebaseService : FirebaseService, private router: Router, public userService : UserService) { }
 
  register()
  {
    this.router.navigate(['registration']);
  }

  onSignin(email : string, password : string)
  {
    console.log('sign in');
    this.firebaseService.login(email, password).subscribe(
      res=> {
        console.log(res);
        const userData = JSON.parse(localStorage.getItem('userinfo') || '{}');
        // get custom claims to find role
        this.userService.getUser(userData.id).subscribe(
          data =>{
            console.log(JSON.stringify(data));
            if(data.role.role=='nurse'){
              // nurseUI()
              this.router.navigate(['nurse']);
            }else if(data.role.role=='doctor'){
              // doctorUI()
              this.router.navigate(['doctor']);
            }else{
              // user does not have a role / could not find users role
              console.error('this user does not have a role');
            }
          }
        )
      
        // this.router.navigate([whichPage]);
      }
    )
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
    this.firebaseService.logout();
  }

}
