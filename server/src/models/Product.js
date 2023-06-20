class Product {
    constructor(ID, title, price, description, imageURL) {
      this._ID = ID;
      this._title = title;
      this._price = price;
      this._description = description;
      this._imageURL = imageURL;
    }
  
    get ID() {
      return this._ID;
    }
  
    set ID(ID) {
      this._ID = ID;
    }
  
    get title() {
      return this._title;
    }
  
    set title(title) {
      this._title = title;
    }
  
    get price() {
      return this._price;
    }
  
    set price(price) {
      this._price = price;
    }
  
    get description() {
      return this._description;
    }
  
    set description(description) {
      this._description = description;
    }
  
    get imageURL() {
      return this._imageURL;
    }
  
    set imageURL(imageURL) {
      this._imageURL = imageURL;
    }
}