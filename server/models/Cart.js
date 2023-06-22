class Cart {
    constructor(ID, userID) {
      this._ID = ID;
      this._userID = userID;
      this._totalPrice = 0;
    }
  
    get ID() {
      return this._ID;
    }
  
    set ID(ID) {
      this._ID = ID;
    }
  
    get userID() {
      return this._userID;
    }
  
    set userID(userID) {
      this._userID = userID;
    }
  
    get totalPrice() {
      return this._totalPrice;
    }
  
    set totalPrice(totalPrice) {
      this._totalPrice = totalPrice;
    }
}