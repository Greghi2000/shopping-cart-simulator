import { useDispatch, useSelector } from 'react-redux';
import './NavBar.css';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { setIsActive } from "../store/filter";
import NavLink from './NavLink';


const NavBar = () => {
    const amount = useSelector((store) => store.cart.cartItems.length);
    const { user } = useContext(AuthContext)
    const allergens = useSelector((state) => state.filter.allergens)
    const dispatch = useDispatch()


    const handleOnClick = () => {
      dispatch(setIsActive(false))
    }

    return (
      <>
        <nav className="navbar">
          <div className="nav-center">
            <Link to="/">
              <h3>Allerg.ly</h3>
            </Link>
            {user ? (
              <>
                <div className="nav-container">
                  <div className="dropdown">
                  <Link to="/products" className="nav-option">
                    <span onClick={() => handleOnClick} className="dropbtn">Products</span>
                  </Link>
                    <div className="dropdown-content">
                      {allergens.map((allergen, index) => (
                        <NavLink key={index} allergen={allergen._allergenName} allergenID={allergen._ID} />
                      ))} 
                    </div>
                  </div>
                </div>
                <div className="nav-container">
                  <Link to="/profile" className="nav-option">
                    Profile
                  </Link>
                </div>
                <div className="nav-container">
                  <Link to="/cart" className="nav-option">
                    <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
                    <span className="total-amount">{amount}</span>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="nav-container">
                  <Link to="/login" className="nav-option">
                    Login
                  </Link>
                </div>
              </>
            )}
          </div>
        </nav>
      </>
    );    
}
 
export default NavBar;