import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import * as firebase from 'firebase/compat';
import { Userinfo } from 'src/app/user-auth/models/userinfo';
import { FirebaseService } from 'src/app/user-auth/services/firebase.service';

import { UserService } from 'src/app/services/user.service';
import { Covid19VerificationService } from 'src/app/services/covid19-verification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  title="Sign in";
  
  constructor(
    public firebaseService: FirebaseService,
    public router: Router,
    public userService: UserService,
    public cvs: Covid19VerificationService
  ) {}

  register() {
    this.router.navigate(['registration']);
  }

  forgetPassword(){
    this.router.navigate(['forget-password']);
  }

  onSignin(email: string, password: string) {
    // console.log('sign in');
    this.firebaseService.login(email, password).then(res => {
          const userData = JSON.parse(localStorage.getItem('userinfo') || '{}');
         // this.userService.getUser(userData.id).subscribe((data) => {
            this.cvs.getFormServByString(userData.id).subscribe((formData) => {
                localStorage.setItem('covidInfo', JSON.stringify(formData));
                if (userData.role == 'nurse') {
                  // nurseUI()
                  this.router.navigate(['nurse']);
                } else if (userData.role == 'doctor') {
                  console.log("should route to doctor");
                  this.router.navigate(['doctor']);
                } else {
                  // user does not have a role / could not find users role
                  console.error('This account is not properly registered. Please register again');
                }
          //    })
            });
        }).catch((err) => {
        alert(err);
      });
  }
  //Depricated functions           
  // logout() {
  //   this.firebaseService.logout();
  // }

  // //dummy example of sending an http request requiring an authorization header
  // getUser() {
  //   this.firebaseService.userInfo.subscribe((res) => {
  //     console.log(res);
  //   });
  //   this.firebaseService.gettest().subscribe((data) => {
  //     console.log(data);
  //   });
  // }
  // refreshToken() {
  //   this.firebaseService.refreshToken();
  // }
  ngOnInit(): void {
    //to check the status of login
    this.firebaseService.userInfo.subscribe((res) => {
      if (res == null) {
        console.log("Attempting automatic sign in...");
        if(this.firebaseService.autoSignIn())
        {
          const userData = JSON.parse(localStorage.getItem('userinfo') || '{}');
          if (userData.role == 'nurse') {
            // nurseUI()
            this.router.navigate(['nurse']);
          } else if (userData.role == 'doctor') {
            // doctorUI()
            this.router.navigate(['doctor']);
          } else {
            // user does not have a role / could not find users role
            console.error('This user account does not have an associated role.');
          }
        }
      }
    });
  }

  
}
