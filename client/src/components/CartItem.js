import { ChevronDown, ChevronUp } from '../icons';
import './CartItem.css';

const CartItem = () => {
    return (
        <article>
        <div>
        {/* <h4>{name}</h4> */}
        {/* <h4 className='item-price'>${price}</h4> */}
        <button className='remove-btn'>
          remove
        </button>
      </div>
      <div>
        <button className='amount-btn'>
          <ChevronUp />
        </button>
        {/* <p className='amount'>{amount}</p> */}
        <button className='amount-btn'>
          <ChevronDown />
        </button>
      </div>
        </article>
    );
}
 
export default CartItem;