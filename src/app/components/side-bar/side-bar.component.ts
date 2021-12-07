import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/user-auth/services/firebase.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  role:string = "";
  email:string = "";

  constructor(private firebase: FirebaseService) { }

  ngOnInit(): void {

    this.setRoleView();
    
  }

  setRoleView(){
    const userData = JSON.parse(localStorage.getItem('userinfo') || '{}');
    if(userData.role == "nurse"){
      this.role = "Nurse";
    }else{
      this.role = "Doctor";
    }

    this.email = userData.email;
  }

  logout(){
    this.firebase.logout();
  }
}
