import { addProduct } from '../utils/api'
import './AddProduct.css'

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
            "imageURL": productImageUrl
        }
        addProduct(addedProductData).then(() => {
            form.reset()
        })
        console.log(addedProductData)
    }

    return (
        <>
            <form className="AddProduct" onSubmit={handleSubmit}>
                <label htmlFor="product-name">Insert Product Name</label>
                <input type="text" name="product-name" id="product-name" />

                <label htmlFor="product-price">Insert Product Price</label>
                <input type="text" name="product-price" id="product-price" />

                <label htmlFor="product-description">Insert Product Description</label>
                <input type="text" name="product-description" id="product-description" />

                <label htmlFor="product-image-url">Insert Product URL</label>
                <input type="text" name="product-image-url" id="product-image-url" />

                <button type="submit">Add Product</button>
            </form>
        </>
    );
}
 
export default AddProduct;