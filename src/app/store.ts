import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice'
import allProductsReducer from '../features/products/allProductsSlice'
import cartReducer from '../features/cart';
import userReducer from '../features/user'

export const store = configureStore({
  reducer: {
   products: productsReducer,
   cart: cartReducer,
   allProducts: allProductsReducer,
   user: userReducer
  }
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>