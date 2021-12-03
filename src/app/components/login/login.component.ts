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
  log: boolean = false;
  constructor(
    public firebaseService: FirebaseService,
    private router: Router,
    public userService: UserService,
    public cvs: Covid19VerificationService
  ) {}

  register() {
    this.router.navigate(['registration']);
  }

  onSignin(email: string, password: string) {
    // console.log('sign in');
    this.firebaseService
      .login(email, password)
      .then(
        (res) => 
        {
          const userData = JSON.parse(localStorage.getItem('userinfo') || '{}');
          this.userService.getUser(userData.id).subscribe((data) => {
            this.cvs.getFormServByString(userData.id).subscribe((formData) => {
                localStorage.setItem('covidInfo', JSON.stringify(formData));
                if (data.role.role == 'nurse') {
                  // nurseUI()
                  this.router.navigate(['nurse']);
                } else if (data.role.role == 'doctor') {
                  console.log("should route to doctor");
                  this.router.navigate(['doctor']);
                } else {
                  // user does not have a role / could not find users role
                  console.error('This user account does not have an associated role.');
                }
              })
            });
        }).catch((err) => {
        alert(err);
      });
  }

  logout() {
    this.firebaseService.logout();
  }
  forgetPassword() {}

  //dummy example of sending an http request requiring an authorization header
  getUser() {
    this.firebaseService.userInfo.subscribe((res) => {
      console.log(res);
    });
    this.firebaseService.gettest().subscribe((data) => {
      console.log(data);
    });
  }

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

  refreshToken() {
    this.firebaseService.refreshToken();
  }
}
