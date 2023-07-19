import NavBar from './components/NavBar';
import CartContainer from './components/CartContainer';
import ProductList from './components/ProductList';
import ProductItem from './components/ProductItem';
import AddProduct from './components/AddProduct';
import NotFound from './components/NotFound';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
function App() {
  return (
    <>
      {/* <NavBar/>
      <Routes>
          <Route exact path="/cart" element={<CartContainer/>} />
          <Route exact path="/products">
            <Route index element={<ProductList/>} />
            <Route exact path=":id" element={<ProductItem/>} />
            <Route exact path="add-new-product" element={<AddProduct/>} />
          </Route>
          <Route exact path="*" element={<NotFound/>}/>
      </Routes> */}
      <>
      <NavBar/>
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/products">
            <Route index element={<ProductList/>} />
            <Route path=":id" element={<ProductItem/>} />
            <Route path="add-new-product" element={<AddProduct/>} />
          </Route>
          <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
    </>
  );
}

// In app is where we define all the routes. These routes defined in app are then looked 
// at by react in smaller pieces of the app. Since the route of where that route should go and what component to render
// is defined here, it will now know when you click on anything that has that link where to send you and what to display

//WHAT IS LEFT TO DO:
//Deploy a pipeline using terraform
//Use material design for frontend ui
//Authentication

export default App;