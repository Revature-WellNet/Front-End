import { Role } from "./role";

export class User {

    public id : string | null;
    public firstname : string;
    public lastname : string;
    public email : string;
    public role : Role;

    constructor(id :string, firstname : string, lastname : string, email : string, role : Role) {
  
      this.id = id;
      this.firstname = firstname;
      this.lastname = lastname;
      this.email = email;
      this.role = role;
  
    }
  

}
