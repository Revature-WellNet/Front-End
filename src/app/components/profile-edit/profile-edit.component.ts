import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

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
 

  constructor() { }


  ngOnInit(): void {
  }

  submit(fName: any, lName: any, role: any, email : any){

let user = new User(fName, lName, role, email);
    console.log(user);
    //this.registrationService.postRegistration(this.user);
  

}
}
