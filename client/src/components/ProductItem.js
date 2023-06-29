import React from 'react';
import './ProductItem.css'
import { setCartChange } from "../store/cart";
import { addProductToCart } from '../utils/api';
import { useDispatch } from 'react-redux';


const ProductItem = ({ ID, Title, Price, Description, ImageURL }) => {
  const dispatch = useDispatch()
    const handleAddToCart = () => {
      const cartID = 1 // when auth is done will be user.cartID
        const product = {ID, Title, Price, Description, ImageURL}
        console.log(product)
        addProductToCart({ quantity: 1, cartId: cartID, productId: ID})
        dispatch(setCartChange(true))
    }
    return (
        <div className="product-item">
          <h2>{Title}</h2>
          <p>{Description}</p>
          <p className="price">Price: ${Price}</p>
          <img src={ImageURL} alt={Title} />
          <button onClick={handleAddToCart} className="add-to-cart-btn">Add to Cart</button>
          <hr />
        </div>
    );      
  };
  
  export default ProductItem;
  