import { Role } from "./role";

export class User {

    public userId : string | null;
    public firstname : string;
    public lastname : string;
    public email : string;
    public role : Role;

    constructor(userId :string, firstname : string, lastname : string, email : string, role : Role) {
  
      this.userId = userId;
      this.firstname = firstname;
      this.lastname = lastname;
      this.email = email;
      this.role = role;
  
    }
  

}
