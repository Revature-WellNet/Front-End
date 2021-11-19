import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadEnd } from '@angular/router';
import { Router } from '@angular/router';
import { Role } from 'src/app/models/role';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService : UserService, private router : Router) { }



  ngOnInit(): void {
  //  this.generateProfile();
  }

  generateProfile(){
    //need to get user's id from login for this to work
    //this.loginService.getUserId().subscribe((userId : string){
    let userId = "53";

      this.userService.getUser(userId).subscribe((response : User) => {  
        
        let firstName = document.createElement("span");
        let lastName = document.createElement("span");
        let role = document.createElement("span");
        let email = document.createElement("span");
        firstName.innerHTML = response.firstName
        lastName.innerHTML = response.lastName
        role.innerHTML = response.role.role
        email.innerHTML = response.email

        document.getElementById("firstName")!.appendChild(firstName);
        document.getElementById("lastName")!.appendChild(lastName);
        document.getElementById("role")!.appendChild(role);
        document.getElementById("email")!.appendChild(email);
        
      })
   // })
  }

  navigateHome(){
    
  //  this.loginService.getUserId().subscribe((userId : string) => {
    let userId = "53";
        this.userService.getUser(userId).subscribe((response : User) => {

          if(response.role.role.toLowerCase() === "doctor"){
            this.router.navigate(["/doctor"]);
          }else{
            this.router.navigate(["/nurse"]);
          }
        })
   // })

  }

}