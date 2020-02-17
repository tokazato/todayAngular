export class User {
    constructor (
        public email: string,
        public id: string,
        private _token: string,
        private expirenDate: Date
    ) {}

    get token() {
        if( !this.expirenDate || new Date > this.expirenDate) {
            return null
        }
        return this._token
    }
}