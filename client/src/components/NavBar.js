import Cart from "../store/cart";
import { useSelector } from 'react-redux';
import './NavBar.css';

const NavBar = () => {
    const amount = useSelector((store) => store.cart.cartItems.length);
    return (
        <nav className="navbar">
            <div className='nav-center'>
                <h3>Allerg.ly</h3>
                <div className="nav-container">
                    <div className="amount-container">
                        <p className='total-amount'>{amount}</p>
                    </div>
                </div>
            </div>
        </nav>
    );
}
 
export default NavBar;