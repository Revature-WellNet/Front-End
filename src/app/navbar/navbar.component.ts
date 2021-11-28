import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../user-auth/services/firebase.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private firebaseService:FirebaseService) { }
  logout()
  {
    this.firebaseService.logout();
  }
  ngOnInit(): void {
    this.firebaseService.autoSignIn();
  }

}
