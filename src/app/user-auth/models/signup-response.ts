export interface SignupResponse {
     email :string;
     refreshToken :string;
     expiresIn:string;
     localId:string;
     idToken: string;
     registered?: boolean;
   
}
