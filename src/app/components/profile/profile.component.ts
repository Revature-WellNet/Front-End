import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService : UserService) { }

  public firstName = "";
  public lastName = "";
  public specialty = "";
  public email = "";

  ngOnInit(): void {
    this.generateProfile();
  }

  generateProfile(){


  }

}
