class User {
    // Use of _ to indicate encapsulation/private
    constructor(ID, username, password, email) {
      this._ID = ID;
      this._username = username;
      this._password = password;
      this._email = email;
    }
  
    get ID() {
      return this._ID;
    }
  
    set ID(ID) {
      this._ID = ID;
    }
  
    get username() {
      return this._username;
    }
  
    set username(username) {
      this._username = username;
    }
  
    get password() {
      return this._password;
    }
  
    set password(password) {
      this._password = password;
    }
  
    get email() {
      return this._email;
    }
  
    set email(email) {
      this._email = email;
    }
}
  