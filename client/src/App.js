import NavBar from './components/NavBar';
import CartContainer from './components/CartContainer';
import ProductList from './components/ProductList';
function App() {
  return (
    <>
      <NavBar/>
      <CartContainer/>
      <ProductList/>
    </>
  );
}

//WHAT IS LEFT TO DO:
//Add product to cart
//Remove product from cart
//Add new product app
//Edit quantity in cart
//Refactor router routes to include controllers
//Refactor react so pages are being used
//Authentication

export default App;