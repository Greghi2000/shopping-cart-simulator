import { Link } from "react-router-dom";
import ProductList from "../components/ProductList";

const HomePage = () => {
    return (
        <>
            <h2>HomePage, soon to be ProductsPage</h2>
            <ProductList/>
            <Link to='/products/add-new-product'> Add Products </Link>
            {/* <ProductFilter/> */}
        </>
    );
}
 
export default HomePage;