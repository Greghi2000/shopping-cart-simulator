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
// Get product by ID
export const getProductById = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/products/${id}`);
    const data = await response.json();
    console.log(data);
    return data
  } catch (error) {
    console.error('Error:', error);
  }
};
// Add product
export const addProduct = async (productData) => {
  try {
    const response = await fetch('http://localhost:3000/api/products/add', {
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
// Get cartItems by cartID 
export const getCartItemsByCartId = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/cart/items/${id}`);
    const data = await response.json();
    console.log('Data from api file: ', data);
    return data
  } catch (error) {
    console.error('Error:', error);
  }
};
// Delete all from cart
export const deleteAllFromCart = async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/cart/cartItem/delete`, {
      method: 'DELETE'
    })
    const data = await response.json();
  } catch (error) {
    console.error('Error:', error);
  }
};
// Delete by ID from cart
export const deleteByIdFromCart = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/cart/cartItem/remove/${id}`, {
      method: 'DELETE'
    })
    const data = await response.json();
  } catch (error) {
    console.error('Error:', error);
  }
};
// Add product to cart
export const addProductToCart = async (productData) => {
  try {
    const response = await fetch(`http://localhost:3000/api/cart/cartItem/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productData)
      
    })
    console.log('Product data ', productData)
    const data = await response.json();
    console.log(data)
  } catch (error) {
    console.error('Error:', error)
  }
};
//Update product qunaitty by cartID
export const updateCartItemQuantityByCartID = async (ID, quantity) => {
  try {
    const response = await fetch(`http://localhost:3000/api/cart/cartItem/update/${ID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(quantity)
    })
    console.log('quantity', quantity)
    const data = await response.json()
    console.log('data', data)
  } catch (error) {
    console.error('Error', error)
  }
}
//Get total price of cart with cartId
export const getTotalPrice = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/cart/getTotalPrice/${id}`)
      const data = await response.json();
      return data
    } catch (error) {
      console.error('Error:', error);
    }
}
//Get get all allergens
export const getAllAllergens = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/allergens/`)
      const data = await response.json();
      return data
    } catch (error) {
      console.error('Error:', error);
    }
}
//Get get products not containing allergen with AllergenId
export const getProductsNotContainingAllergen = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/allergens/products-not-containing-allergen/${id}`)
      const data = await response.json();
      return data
    } catch (error) {
      console.error('Error:', error);
    }
}