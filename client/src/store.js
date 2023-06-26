import {configureStore} from '@reduxjs/toolkit'
import productReducer from './store/product'
import cartSlice from './store/cart'

export const store = configureStore ({
    reducer: {
        product: productReducer,
        cart: cartSlice
    }
})