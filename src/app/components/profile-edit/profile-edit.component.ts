import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/models/role';
import { User } from 'src/app/models/user';
import { EmailValidationService } from 'src/app/services/email-validation.service';
import { UserService } from 'src/app/services/user.service';
import { FirebaseService } from 'src/app/user-auth/services/firebase.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  @Input() firstName!: string;
  @Input() lastName!: string;
  @Input() role!: string;
  @Input() email!: string;
 

  constructor(private userService : UserService, private emailValidator : EmailValidationService, private router : Router, private firebaseService : FirebaseService) { }


  ngOnInit(): void {

    console.log("First Name : " + this.firstName);

  }

  submit(fName: any, lName: any){
    
    const userData = JSON.parse(localStorage.getItem('userinfo') || '{}');


    this.userService.getUser(userData.id).subscribe((user : User) => {

    //   if(email){
    //     if(!this.emailValidator.validateEmailFormat(email)){
    //       alert("Email format not accepted. Please try again.");
    //       return;
    
    //     }else{
    //       user.email = email;
    //     }
    // }

    if(fName){
      user.firstname = fName;
      console.log("being called?");
    }
    if(lName){
      user.lastname = lName;
    }
    if(document.querySelector('input[name="role"]:checked')){
    let newRole =  (<HTMLInputElement>document.querySelector('input[name="role"]:checked'))!.value
      let userRole = new Role(888, newRole);
      console.log(userRole)
      if(userRole.role == "doctor"){
        userRole.roleId = 2;
      }else{
        userRole.roleId = 1;
      }
      user.role = userRole;
      console.log("being called in query selector");
    }

    console.log("called before setting email");
    this.firebaseService.setEmail(user.email).then(()=>{
      this.userService.createOrUpdateUser(user);

      if(user.role.role.toLowerCase() === "doctor"){
        this.router.navigate(["/doctor"]);
      }else{
        this.router.navigate(["/nurse"]);
      }
    }).catch((error) => {
      alert(error);
    });

    
    })

        

        



  }


}