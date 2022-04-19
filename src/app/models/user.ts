import { Role } from "./role";
import { Specialization } from "./Specialization";

export class User {

    public id : string | null;
    public firstname : string;
    public lastname : string;
    public email : string;
    public role : Role;
    public specialization : Specialization;

    constructor(id :string, firstname : string, lastname : string, email : string, role : Role, specialization : Specialization) {
  
      this.id = id;
      this.firstname = firstname;
      this.lastname = lastname;
      this.email = email;
      this.role = role;
      this.specialization = specialization;
    }
  

}
