class Cart {
    constructor(ID, user) {
      this._ID = ID;
      this._user = user;
      this._totalPrice = 0;
      this._CartItems = [];
    }

    set userID(ID) {
      this._user.ID = ID;
    }

    get userID() {
      return this._user.ID;
    }
  
    get _CartItems() {
      return this._CartItems;
    }

    set CartItems(CartItems) {
      this._CartItems = CartItems;
    }

    get _CartItems() {
      return this._CartItems;
    }

    set CartItems(CartItems) {
      this._CartItems = CartItems;
    }

    get ID() {
      return this._ID;
    }
  
    set ID(ID) {
      this._ID = ID;
    }
  
    get userID() {
      return this._user;
    }
  
    set userID(userID) {
      this._user = userID;
    }
  
    get totalPrice() {
      return this._totalPrice;
    }
  
    set totalPrice(totalPrice) {
      this._totalPrice = totalPrice;
    }
}