import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/models/role';
import { User } from 'src/app/models/user';
import { EmailValidationService } from 'src/app/services/email-validation.service';
import { UserService } from 'src/app/services/user.service';

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
 

  constructor(private userService : UserService, private emailValidator : EmailValidationService, private router : Router) { }


  ngOnInit(): void {
  }

  submit(fName: any, lName: any, email : any){
    
//need to add user id, but that comes from login service
    let userId ="53";

    this.userService.getUser(userId).subscribe((user : User) => {

    if(fName){
      user.firstname = fName;
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
    }
    if(this.emailValidator.validateEmailFormat(email)){
     user.email = email;
    }

    console.log(user);
    this.userService.createOrUpdateUser(user);

    if(user.role.role.toLowerCase() === "doctor"){
      this.router.navigate(["/doctor"]);
    }else{
      this.router.navigate(["/nurse"]);
    }
    
    })

        

        



  }


}