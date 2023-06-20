class CartItem {
    constructor(ID, quantity, cartID, productID) {
      this._ID = ID;
      this._quantity = quantity;
      this._cartID = cartID;
      this._productID = productID;
    }
  
    get ID() {
      return this._ID;
    }
  
    set ID(ID) {
      this._ID = ID;
    }
  
    get quantity() {
      return this._quantity;
    }
  
    set quantity(quantity) {
      this._quantity = quantity;
    }
  
    get cartID() {
      return this._cartID;
    }
  
    set cartID(cartID) {
      this._cartID = cartID;
    }
  
    get productID() {
      return this._productID;
    }
  
    set productID(productID) {
      this._productID = productID;
    }
}