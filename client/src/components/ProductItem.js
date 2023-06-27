import React from 'react';
import './ProductItem.css'

const ProductItem = ({ ID, Title, Price, Description, ImageURL }) => {
    return (
        <div className="product-item">
          <h2>{Title}</h2>
          <p>{Description}</p>
          <p className="price">Price: ${Price}</p>
          <img src={ImageURL} alt={Title} />
          <button className="add-to-cart-btn">Add to Cart</button>
          <hr />
        </div>
    );      
  };
  
  export default ProductItem;
  