import { Link } from "react-router-dom";
import ProductList from "../components/ProductList";
import ProductFilter from "../components/ProductFilter";
import SearchBar from "../components/SearchBar";
import './HomePage.css'

const HomePage = () => {
    return (
        <div className="home-page">
            <SearchBar/>
            <ProductFilter/>
            <ProductList/>
            <Link to='/products/add-new-product' className="add-product-link"> Add Products </Link>
        </div>  
    )
}
 
export default HomePage;