class CartItem {
  constructor(ID, quantity, cart, productID) {
    this._ID = ID;
    this._quantity = quantity;
    this._cart = cart;
    this._productID = productID;
  }

  get totalPrice() {
    return this._product.price * this._quantity;
  }

  get ID() {
    return this._ID;
  }

  set productID(ID) {
    this._productID = ID;
  }

  get productID() {
    return this._productID;
  }
  
  set cartID(ID) {
    this._cart.ID = ID;
  }

  get cartID() {
    return this._cart.ID;
  }

  get quantity() {
    return this._quantity;
  }

  set quantity(quantity) {
    this._quantity = quantity;
  }

  get cart() {
    return this._cart;
  }

  set cart(cart) {
    this._cart = cart;
  }
}
module.exports = CartItem;