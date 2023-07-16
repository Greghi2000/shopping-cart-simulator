import React, { useEffect, useState } from 'react';
import { setCartChange, setIsQuantityChanged } from "../store/cart";
import { getProductById, deleteByIdFromCart } from '../utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { updateCartItemQuantityByCartID } from "../utils/api";
import './CartItem.css';

const CartItem = ({ ProductID, Quantity, itemID }) => {
  const [product, setProduct] = useState()
  const [quantity, setQuantity] = useState(Quantity)
  const dispatch = useDispatch()
  const isQuantityChanged = useSelector(state => state.cart.isQuantityChanged)
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

  const handleIncreaseQuantity = () => {
    console.log(ProductID)
    setQuantity(quantity + 1)
    dispatch(setIsQuantityChanged(true))
  };

  const handleDecreaseQuantity = () => {
    if(quantity > 1) {
      setQuantity(quantity - 1)
      dispatch(setIsQuantityChanged(true))
    }
  };

  const handleConfirmQuantity = () => {
    // have a put request that changes the quantity of the prod based on the prod id.
    console.log(ProductID, "ProductID")
    console.log(quantity, 'quantity')
    //put request using qunatity as the quantity and cartItemID is 
    console.log(itemID, 'itemID')
    const quantityPayload = {"quantity": quantity}
    updateCartItemQuantityByCartID(itemID, quantityPayload)
  }

  return (
    <article className="cart-item">
      {product && (
        <div>
          <h4>Name: {product.Title}</h4>
          <h4 className="item-price">${product.Price}</h4>
          <button onClick={handleDeleteFromCart} className="remove-btn">
            remove
          </button>
        </div>
      )}
      <div className="quantity-container">
        <button onClick={handleDecreaseQuantity} className="quantity-btn">
          &#8249;
        </button>
        <p className="amount">Quantity: {quantity}</p>
        <button onClick={handleIncreaseQuantity} className="quantity-btn">
          &#8250;
        </button>
      </div>
      {isQuantityChanged && (
        <button onClick={handleConfirmQuantity} className="confirm-btn">
          Confirm
        </button>
      )}
    </article>
  );
}
 
export default CartItem;