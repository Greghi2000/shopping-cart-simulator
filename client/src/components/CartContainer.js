import Cart from "../store/cart";
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import './NavBar.css';

const CartContainer = () => {
    const { user, totalPrice, cartItems } = useSelector((store) => store.cart);
    if (cartItems.length < 1) {
        return (
            <section>
                <h2>Your cart</h2>
                <h4>is currently empty</h4>
            </section>
        );
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
        </section>
    );
}
 
export default CartContainer;