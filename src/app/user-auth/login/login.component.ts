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

  async onSignin(email : string, password : string)
  {
    await this.firebaseService.signin(email, password).then(()=>{
      this.firebaseService.getUserFromSpringServer().subscribe((data) => {
        console.log(data);
      });
    });
  }
  

}
