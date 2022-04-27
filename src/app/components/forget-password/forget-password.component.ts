import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/user-auth/services/firebase.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(
    public firebaseService: FirebaseService,
    private router: Router
    ) {}

  ngOnInit(): void {
  }

  sendEmail(email: string){
    this.firebaseService.ResetPass(email)
      .then(
        (res) =>{
          this.router.navigate(['login']);
        }
      ).catch(error =>{
        alert(error);
      });
  }

  
  loginPage(){
    this.router.navigate(['login']);
  }

}