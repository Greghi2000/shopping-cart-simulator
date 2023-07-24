import { setCartChange, setCartItemsByCartId, clearCart } from "../store/cart";
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import './NavBar.css';
import { getCartById, getCartItemsByCartId, deleteAllFromCart, getTotalPrice } from "../utils/api";
import { useEffect, useState } from "react";
import './CartContainer.css';
import { Button } from "@mui/material";


const CartContainer = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart.cartItems);
    const cartChanged = useSelector((state) => state.cart.cartChange)
    const [cartTotalPrice, setCartTotalPrice] = useState(0)
    useEffect(() => {
        getCartItemsByCartId(1)
        .then(data => {
            console.log('Cart by id ', data)
            dispatch(setCartItemsByCartId(data))
            dispatch(setCartChange(false))
        })
        .catch(error => {
            console.error('Error:', error);
        });
        getTotalPrice(1)
        .then(data => {
            if (data && data.length > 0) {
                setCartTotalPrice(data)
            }
            dispatch(setCartChange(false))
        })
    }, [dispatch, cartChanged])

    const handleClearCart = () => {
        dispatch(clearCart())
        deleteAllFromCart()
    }
    if (cartItems.length < 1) {
        return (
            <section className="empty-cart">
                <h2>Your cart</h2>
                <h4>is currently empty</h4>
            </section>
        );
    }
    let newCartTotalPrice;
    if (cartTotalPrice && cartTotalPrice.length > 0) {
        console.log(cartItems)
        newCartTotalPrice = cartTotalPrice[0].TotalPrice.toFixed(2);
    }
    

    return (
<section className="cart-container">
      <h2>Your Cart:</h2>
      <div>
        {cartItems.map((item) => (
          <CartItem key={item._ID} itemID={item._ID} {...item} />
        ))}
      </div>
      <footer>
        <hr />
        <h4>
          Total: <span>${newCartTotalPrice !== null ? newCartTotalPrice : 'N/A'}</span>
        </h4>
        <Button onClick={handleClearCart} className="clear-button">
          Clear Cart
        </Button>
      </footer>
    </section>
    );
}
 
export default CartContainer;