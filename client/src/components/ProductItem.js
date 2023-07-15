import React, { useState } from 'react';
import './ProductItem.css'
import { setCartChange } from "../store/cart";
import { addProductToCart } from '../utils/api';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


const ProductItem = ({ ID, Title, Price, Description, ImageURL }) => {
  const [quantitySelected, setQuantitySelected] = useState(1)
  const dispatch = useDispatch()
    const handleAddToCart = () => {
      const cartID = 1 // when auth is done will be user.cartID
        const product = {ID, Title, Price, Description, ImageURL}
        console.log(product)
        addProductToCart({ quantity: quantitySelected, cartId: cartID, productId: ID})
        dispatch(setCartChange(true))
    }

    const handleSelectChange = (e) => {
      setQuantitySelected(e.target.value)
    }
    return (
        <div className="product-item">
          <Link to={`/products/${ID}`}><h2>{Title}</h2></Link>
          <p>{Description}</p>
          <p className="price">Price: ${Price}</p>
          <img src={ImageURL} alt={Title} />
          <button onClick={handleAddToCart} className="add-to-cart-btn">Add to Cart</button>
          <select onChange={handleSelectChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <hr />
        </div>
    );      
  };
  
  export default ProductItem;
  