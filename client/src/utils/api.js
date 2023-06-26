// Products API Call
export const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/products');
      const data = await response.json();
      console.log(data)
      return data;
    } catch (error) {
      throw new Error('An error occurred while fetching products');
    }
};
  