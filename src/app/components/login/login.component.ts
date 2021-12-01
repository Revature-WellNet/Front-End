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
        //.subscribe(
        (res) => {
         
        }
      ).then(covid=>{
        console.log(covid)
        this.covidInfo()
      })
      .catch((err) => {
        alert(err);
      });
  }

  covidInfo() {
    this.firebaseService.userInfo.subscribe((user) => {
      if (user != null)
        this.cvs.getFormServByString(user.id).subscribe((data) => {
          if (data == null) {
            console.log('line');
            this.router.navigate(['/covid-verification']);
          } else {
            console.log(JSON.stringify(data));
            localStorage.setItem('covidInfo', JSON.stringify(data));
            let dataArray = Object.values(data);
            console.log(dataArray);
            console.log(dataArray[3]);
            if (dataArray[3] == true) {
              let now = new Date().getTime();
              let date = new Date(dataArray[2]).getTime();
              console.log(now - date);
              if ((now - date) > 1210000000 ) {
                this.router.navigate(['covid-verification']);
              } else if ((now - date) > 86400000 && (now - date) < 1210000000){
                console.log("555")
                this.router.navigate(['lockout']);
              }
            } else {
              let now = new Date().getTime();
              let date = new Date(dataArray[2]).getTime();
              console.log(now - date);
              if (now - date < 86400000) {
                console.log(data);
                if (user.role == 'nurse') {
                  // nurseUI()
                  this.router.navigate(['nurse']);
                } else if (user.role == 'doctor') {
                  // doctorUI()
                  this.router.navigate(['doctor']);
                } else {
                  // user does not have a role / could not find users role
                  console.error('this user does not have a role');
                }
              } else {
                console.log('go here');
                this.router.navigate(['covid-verification']);
              }
            }
          }
        });
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
      if (res != null) {
        this. covidInfo();
      }
      if (res == null) {
        this.firebaseService.autoSignIn();
      }
    });
  }

  refreshToken() {
    this.firebaseService.refreshToken();
  }
}
