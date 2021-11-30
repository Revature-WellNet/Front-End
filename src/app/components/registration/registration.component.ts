import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/models/role';
import { User } from 'src/app/models/user';
import { RegistrationInfo } from '../../models/registration-info';
import { EmailValidationService } from '../../services/email-validation.service';
import { RoleValidationService } from '../../services/role-validation.service';
import { CallBootstrapDBService } from '../../services/call-bootstrap-db.service';

import { RegistrationService } from '../../services/registration.service';
import { SemiUniqueStringsService } from '../../services/semi-unique-strings.service';
import { FirebaseService } from 'src/app/user-auth/services/firebase.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public uniqueUserString : string = "";
  public firstName : string = "";
  public lastName : string = "";
  public role : string = "";

  // VV Sent To Firebase - Token Returned
  public email : string = "";
  public idToken : string = "";

  public covidStatus : boolean = false;

  public emailValidated : boolean | null = null;
  public roleValidated : boolean | null = null;

  public registrationButtonSetting : boolean = true;
  
  // VV Will Need To Remove Eventually To Satisfy The
  // VV Do Not Store Username And Password Functionality
  // VV Username Is Not A Thing Anymore
  public username : string = "";

  // VV Sent To Firebase - Token Returned
  public password : string = "";

  public debugging : boolean = false;



  constructor(
    private emailValidator : EmailValidationService,
    private roleValidator : RoleValidationService,
    private router : Router,
    private registrationSender : RegistrationService,
    private rngGenerator : SemiUniqueStringsService,
    private firebaseService : FirebaseService
  ) { }


  ngOnInit(): void {

    // this.bootstrapCaller.getPatientsByDoctorName();

    this.registrationButtonSetting = true;

  }





  ngOnChanges(){

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

    console.log(role);

    this.role = role;

    this.roleValidated = this.roleValidator.validateRole(this.role);

    this.buttonActivator();

  }

  updateEmail(email : string) {

    this.email = email;

    this.emailValidated = this.emailValidator.validateEmailFormat(this.email);

    this.buttonActivator();

  }

  updateCovidStatus(status : string) {

    switch (status) {
      case "Yes" :
        this.covidStatus = true;
        break;
      case "No" :
        this.covidStatus = false;
        break;
      default :
        this.covidStatus = false;
        break;

    }
    
    console.log(this.covidStatus);

  }

  buttonActivator() {

    if (this.emailValidated && this.roleValidated) {

      this.registrationButtonSetting = false;

    }

  }

  rng() {

    this.uniqueUserString = this.rngGenerator.generateString(this.uniqueUserString);

  }



  async updateValues() {

    //console.log(this.email);

    console.log(this.emailValidated);
    console.log(this.roleValidated);

    // if (this.emailValidated && this.roleValidated) {

    //   this.registrationButtonSetting = false;

    //   console.log("Successful Button Press");
    //   if(this.role.toLowerCase() == "nurse"){
    //     this.router.navigate(["/nurse"]);
    //   } else if (this.role.toLowerCase() == "doctor")
    //   {
    //     this.router.navigate(["/doctor"]);
    //   }

    // }


    // public firstName : string = "";
    // public lastName : string = "";
    // public role : string = "";
    // public email : string = "";


    // public userId : string;
    // public firstName : string;
    // public lastName : string;
    // public email : string;
    // public role : Role;
  
    let JWT = await this.firebaseService.signUp(this.email, this.password);
    console.log(JSON.stringify(JWT));

    this.uniqueUserString = "";
    this.uniqueUserString = this.role + "USER" + this.rngGenerator.generateString(this.uniqueUserString);

    console.log("User : " + this.uniqueUserString);

    let user! : User;

    console.log("Creating User");

    if (this.role == "nurse") {

      user = new User(this.firebaseService.getLoggedUserUid(), this.firstName, 
      this.lastName, this.email, new Role(1, this.role));

    }
    if (this.role == "doctor") {
      
      user = new User(this.firebaseService.getLoggedUserUid(), this.firstName, 
      this.lastName, this.email, new Role(2, this.role));

    }

    console.log("User Created : ");
    console.log (user);

    this.registrationSender.postRegistration(user).then(
      data => {

        // console.error("Data Values VVV");
        // console.log(data);
        // console.log(Object(data).firstname);
        // console.log(Object(data).role.role);
        // console.log(data[0].role);
        // console.log(data[0].role.role);

        //this.registrationSender.routeToNurseComponent(Object(data).role.role);
        console.log(Object(data).role.role);

      });

      this.router.navigate(["/login"]);
  }


  
  

}
