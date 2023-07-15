import { addProduct } from '../utils/api'
import { setAddedProductData } from '../store/product'

const AddProduct = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        // setTimeout(() => {
        //     navigate('/products') // If we pass -1 it would redirect back to the previous page, -2 would redirect 2 pages back
        // }, 2000)
        const form = e.target;
        const productName = form.elements["product-name"].value;
        const productPrice = form.elements["product-price"].value;
        const productDescription = form.elements["product-description"].value;
        const productImageUrl = form.elements["product-image-url"].value;
        const addedProductData = {
            "title": productName,
            "price": productPrice,
            "description": productDescription,
            "ImageURL": productImageUrl
        }
        addProduct(addedProductData).then(() => {
            // navigate('/products')
        })
        console.log(addedProductData)
    }

    setAddedProductData()

    return (
        <>
        <h1>Add Prods</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="product-name" id="" />
            <input type="text" name="product-price" id="" />
            <input type="text" name="product-description" id="" />
            <input type="text" name="product-image-url" id="" />
            <button type="submit">Add Product</button>
        </form>
        </>
    );
}
 
export default AddProduct;