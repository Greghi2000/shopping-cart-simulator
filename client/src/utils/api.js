// Get all products
export const getProducts = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/products');
      const data = await response.json();
      console.log('Data from api file: ', data);
      return data
    } catch (error) {
      console.error('Error:', error);
    }
};
//Get product by ID
export const getProductById = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/products/${id}`);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
};
//Add product
export const addProduct = async (productData) => {
    try {
        const response = await fetch('http://localhost:3000/api/products', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        });

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
};
// Get cart by ID 
export const getCartById = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/cart/${id}`);
      const data = await response.json();
      console.log('Data from api file: ', data);
      return data
    } catch (error) {
      console.error('Error:', error);
    }
};
export const getCartItemsByCartId = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/cart/items/${id}`);
      // once this is done set this to the state.cartItems param in the cart slice
      const data = await response.json();
      console.log('Data from api file: ', data);
      return data
    } catch (error) {
      console.error('Error:', error);
    }
};