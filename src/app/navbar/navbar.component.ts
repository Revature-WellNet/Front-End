import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../user-auth/services/firebase.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private firebaseService : FirebaseService, private router:Router) { }

  ngOnInit(): void {
    this.firebaseService.autoSignIn();
  }

  logout()
  {
    this.firebaseService.logout();
  }

  editPage()
  {
    this.router.navigate(['/profileEdit'])
  }

}
