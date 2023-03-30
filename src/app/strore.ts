import { configureStore } from '@reduxjs/toolkit';
import womenProductsReducer from '../features/products/womanProductsSlice'
import cartReducer from '../features/cart';

export default configureStore({
  reducer: {
   womenProducts: womenProductsReducer,
   cart: cartReducer
  }
});