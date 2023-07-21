class Cart {
  constructor(ID, userID) {
    this._ID = ID;
    this._userID = userID;
    // this._totalPrice = 0;
    // this._cartItems = [];
  }

  addItem(item) {
    this._cartItems.push(item);
  }

  get totalPrice() {
    return this._cartItems.reduce((total, item) => total + item.totalPrice, 0);
  }

  set userID(ID) {
    this._userID = ID;
  }

  get userID() {
    return this._userID;
  }

  get cartItems() {
    return this._cartItems;
  }

  set cartItems(items) {
    this._cartItems = items;
  }

  get ID() {
    return this._ID;
  }

  set ID(ID) {
    this._ID = ID;
  }
}

module.exports = Cart;