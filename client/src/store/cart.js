const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    user: null,
    totalPrice: 0,
    cartItems: [],
    cartId: null,
    isLoading: true,
    cartChange: false,
    isQuantityChanged: false,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        clearCart: (state) => {
            state.cartItems = []
        },
        setCartById: (state, action) => {
            state.cartItems = action.payload
        },
        setCartItemsByCartId: (state, action) => {
            state.cartItems = action.payload
        },
        setCartChange: (state, action) => {
            state.cartChange = action.payload
        },
        setIsQuantityChanged: (state, action) => {
            state.isQuantityChanged = action.payload
        },
    }
})

export const { setCartById, clearCart, setCartItemsByCartId, setCartChange, setIsQuantityChanged } = cartSlice.actions;
export default cartSlice.reducer