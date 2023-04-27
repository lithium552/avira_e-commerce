import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice'
import allProductsReducer from '../features/products/allProductsSlice'
import cartReducer from '../features/cart';
import userReducer from '../features/user'

export default configureStore({
  reducer: {
   products: productsReducer,
   cart: cartReducer,
   allProducts: allProductsReducer,
   user: userReducer
  }
});