export class Userinfo {
    constructor(
        public email:string,
        public id: string,
        public role:string,
        private _token: string,
        public _refreshToken: string,
        private _tokenExpirationDate: Date
    ){}
        get token(){
            if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate)
                {
                    return null;
                }
                return this._token;
        }

}
