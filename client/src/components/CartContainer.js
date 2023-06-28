import Cart, { setCartById, setCartItemsByCartId, clearCart } from "../store/cart";
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import './NavBar.css';
import { getCartById, getCartItemsByCartId } from "../utils/api";
import { useEffect } from "react";

const CartContainer = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart.cartItems);
    useEffect(() => {
        getCartItemsByCartId(1) // when auth is done will be user.id
        .then(data => {
            console.log('Cart by id ', data)
            dispatch(setCartItemsByCartId(data))
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }, [dispatch])

    const handleClearCart = () => {
        dispatch(clearCart())
        // do the API call
    }
    if (cartItems.length < 1) {
        return (
            <section>
                <h2>Your cart</h2>
                <h4>is currently empty</h4>
            </section>
        );
    }
    if (cartItems.length >= 0) {
        console.log('These are the cart items in the if statement', cartItems)
    }
    return (
        <section className="cart-container">
            <h2>Your Cart:</h2>
            <div>
                {cartItems.map((item) =>{
                    return <CartItem key={item.id} {...item}/> // Spread operator makes it so that i dont have to individually 
                    // pass all the props down eg: id={id}, name={name}, the spread automatically does it for me
                })}
            </div>
            <footer>
                <hr />
                <h4>
                    {/* total <span>${totalPrice}</span> */}
                </h4>
                <button onClick={() => {handleClearCart(); /* deleteAllFromCart() */}} className="clear-button">Clear Cart</button>
            </footer>
        </section>
    );
}
 
export default CartContainer;