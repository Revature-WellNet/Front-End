import { Component, Input, OnInit } from '@angular/core';
import { Role } from 'src/app/models/role';
import { User } from 'src/app/models/user';
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
 

  constructor(private userService : UserService) { }


  ngOnInit(): void {
  }

  submit(fName: any, lName: any, role: any, email : any){
    

    let userRole = new Role(8, role);

    if(role.role === "doctor"){
      userRole.roleId = 2;
    }else{
      userRole.roleId = 1;
    }

//need to add user id, but that comes from login service into creating user here
    let user = new User("53", fName, lName, email, userRole);
    console.log(user);
    this.userService.createOrUpdateUser(user);
  
}
}