import React, { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp } from '../icons';
import { setCartChange } from "../store/cart";
import { getProductById, deleteByIdFromCart } from '../utils/api';
import { useDispatch } from 'react-redux';
import './CartItem.css';

const CartItem = ({ ProductID, Quantity }) => {
  const [product, setProduct] = useState()
  const dispatch = useDispatch()
  useEffect(() => {
    getProductById(ProductID)
    .then((data) => {
      setProduct(data)
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }, [ProductID, Quantity])

  const handleDeleteFromCart = () => {
    deleteByIdFromCart(ProductID)
    dispatch(setCartChange(true))
  }

  return (
      <article>
      {product && (
      <div>
      <h4>Name: {product.Title}</h4>
      <h4 className='item-price'>${product.Price}</h4>
      <button onClick={() => {handleDeleteFromCart()}} className='remove-btn'>
        remove
      </button>
      </div>
      )}
      <div>
        <button className='amount-btn'>
          {/* <ChevronUp /> */}
        </button>
        <p className='amount'>Quantity: {Quantity}</p>
        <button className='amount-btn'>
          {/* <ChevronDown /> */}
        </button>
      </div>
      </article>
    );
}
 
export default CartItem;