export class RegistrationInfo {

  public firstName : string;
  public lastName : string;
  public username : string;
  public password : string;
  public role : string;

  constructor( firstName : string, lastName : string, username : string,
    password : string, role : string) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.password = password;
    this.role = role;

  }

}

