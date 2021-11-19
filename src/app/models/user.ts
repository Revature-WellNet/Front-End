import { Role } from "./role";

export class User {

    public userId : string | undefined;
    public firstName : string;
    public lastName : string;
    public email : string;
    public role : Role;
  
    constructor( firstName : string, lastName : string, email : string, role : Role) {
  
      
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.role = role;
  
    }
  

}
