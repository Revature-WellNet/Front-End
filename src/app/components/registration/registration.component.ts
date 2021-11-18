import { Component, OnInit } from '@angular/core';
import { RegistrationInfo } from '../../models/registration-info';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public firstName : string = "";
  public lastName : string = "";
  public role : string = "";
  
  // VV Will Need To Remove Eventually To Satisfy The
  // VV Do Not Store Username And Password Functionality
  public username : string = "";
  public password : string = "";

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {

    this.updateFirstName(this.firstName);

  }

  updateFirstName(firstName : string) {

    this.firstName = firstName;

  }

  updateLastName(lastName : string) {

    this.lastName = lastName;

  }

  updateUsername(username : string) {

    this.username = username;

  }

  updatePassword(password : string) {

    this.password = password;

  }

  updateRole(role : string) {

    this.role = role;

  }

  
  updateValues() {

    console.log("First Name : " + this.firstName);

  }
  


}
