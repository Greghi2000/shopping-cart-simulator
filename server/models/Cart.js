class Cart {
  constructor(ID, user) {
    this._ID = ID;
    this._user = user;
    this._totalPrice = 0;
    this._cartItems = [];
  }

  addItem(item) {
    this._items.push(item);
  }

  get totalPrice() {
    return this._cartItems.reduce((total, item) => total + item.totalPrice, 0);
  }

  set userID(ID) {
    this._user.ID = ID;
  }

  get userID() {
    return this._user.ID;
  }

  get _cartItems() {
    return this._cartItems;
  }

  set CartItems(CartItems) {
    this._cartItems = CartItems;
  }

  get _cartItems() {
    return this._cartItems;
  }

  set CartItems(CartItems) {
    this._cartItems = CartItems;
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