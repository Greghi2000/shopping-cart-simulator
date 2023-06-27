import {configureStore} from '@reduxjs/toolkit'
import productSlice from './store/product'
import cartSlice from './store/cart'

export const store = configureStore ({
    reducer: {
        products: productSlice,
        cart: cartSlice
    }
})