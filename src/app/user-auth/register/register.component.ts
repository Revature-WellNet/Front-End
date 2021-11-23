import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public firebaseService : FirebaseService) { }

  ngOnInit(): void {
  }

  onSignUp(email: string, password: string) {
    this.firebaseService.signUp(email, password);
  }
}
