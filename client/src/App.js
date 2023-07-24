import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import ProductItem from './components/ProductItem';
import AddProduct from './components/AddProduct';
import NotFound from './components/NotFound';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import ConfirmSignUp from './pages/ConfirmSignUp';
import LogIn from './pages/LogIn';
import UserPage from './pages/UserPage';
import RouteGuard from './components/RouteGuard';
function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/confirm-sign-up" element={<ConfirmSignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/profile" element={<RouteGuard><UserPage /></RouteGuard>} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/products">
          <Route index element={<ProductList/>} />
          <Route path=":id" element={<ProductItem/>} />
          <Route path="add-new-product" element={<AddProduct/>} />
          <Route path="filtered-by/:allergenID" element={<ProductList/>} />
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

// In app is where we define all the routes. These routes defined in app are then looked 
// at by react in smaller pieces of the app. Since the route of where that route should go and what component to render
// is defined here, it will now know when you click on anything that has that link where to send you and what to display

//WHAT IS LEFT TO DO:
//Implement auth in backend
//Improve UI, maybe material design if i have time?


//Build pipeline using terraform
//Use material design for frontend ui

export default App;