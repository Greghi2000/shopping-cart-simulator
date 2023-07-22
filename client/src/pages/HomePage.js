import { Link } from "react-router-dom";
import ProductList from "../components/ProductList";
import ProductFilter from "../components/ProductFilter";

const HomePage = () => {
    return (
        <>
            <h2>HomePage, soon to be ProductsPage</h2>
            <ProductFilter/>
            <ProductList/>
            <Link to='/products/add-new-product'> Add Products </Link>
        </>
    );
}
 
export default HomePage;