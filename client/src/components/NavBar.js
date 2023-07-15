import { useSelector } from 'react-redux';
import './NavBar.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const amount = useSelector((store) => store.cart.cartItems.length);
    return (
        <nav className="navbar">
          <div className="nav-center">
          <Link to="/products"><h3>Allerg.ly</h3></Link>
            <div className="nav-container">
            <Link to="/products" className="nav-option">Products</Link>
              <div className="amount-container">
                <Link to="/cart" className="total-amount">{amount}</Link>
              </div>
            </div>
          </div>
        </nav>
      );      
}
 
export default NavBar;