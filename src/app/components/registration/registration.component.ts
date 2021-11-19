import { Component, OnInit } from '@angular/core';
import { RegistrationInfo } from '../../models/registration-info';
import { EmailValidationService } from '../../services/email-validation.service';
import { RoleValidationService } from '../../services/role-validation.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public firstName : string = "";
  public lastName : string = "";
  public role : string = "";
  public email : string = "";

  public emailValidated : boolean | null = null;
  public roleValidated : boolean | null = null;

  public registrationButtonSetting : boolean = true;
  
  // VV Will Need To Remove Eventually To Satisfy The
  // VV Do Not Store Username And Password Functionality
  public username : string = "";
  public password : string = "";

  public debugging : boolean = false;



  constructor(
    private emailValidator : EmailValidationService,
    private roleValidator : RoleValidationService
  ) { }

  ngOnInit(): void {

    this.registrationButtonSetting = true;
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

    this.roleValidated = this.roleValidator.validateRole(this.role);

    this.buttonActivator();

  }

  updateEmail(email : string) {

    this.email = email;

    this.emailValidated = this.emailValidator.validateEmailFormat(this.email);

    this.buttonActivator();

  }

  buttonActivator() {

    if (this.emailValidated && this.roleValidated) {

      this.registrationButtonSetting = false;

    }

  }




  updateValues() {

    //console.log(this.email);

    console.log(this.emailValidated);
    console.log(this.roleValidated);

    if (this.emailValidated && this.roleValidated) {

      this.registrationButtonSetting = false;

      console.log("Successful Button Press");

    }

  }
  


}
