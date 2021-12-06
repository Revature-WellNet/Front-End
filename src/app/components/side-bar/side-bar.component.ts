import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/user-auth/services/firebase.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private firebase: FirebaseService) { }

  ngOnInit(): void {
  }

  logout(){
    this.firebase.logout();
  }
}
