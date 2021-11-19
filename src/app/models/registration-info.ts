import { Role } from './role';

export class RegistrationInfo {

  public firstname : string;
  public lastname : string;
  // public username : string;
  // public password : string;
  public email : string;
  public role : Role;

  constructor( firstname : string, lastname : string, email :string, role : Role 
    /*username : string, password : string,*/) {

    this.firstname = firstname;
    this.lastname = lastname;
    // this.username = username;
    // this.password = password;
    this.email = email;
    this.role = role;

  }

}

