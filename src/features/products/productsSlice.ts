import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    products: [],
    favorites: [],
    status: 'idle',
    error: null
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (products: string) => {
    const res = await axios.get(`http://localhost:3000/products/${products}`)
    return res.data
})

export const fetchFavoriteProducts = createAsyncThunk('products/fetchFavoriteProducts', async () => {
    const res = await axios.get('http://localhost:3000/products/getFavorites', {withCredentials: true})
    return res.data
})

export const updateProducts = createAsyncThunk('products/updateProducts', async ({favorites, email, isFavorite}) => {
    const res = await axios.post('http://localhost:3000/products/favorite', { favorites: favorites, email: (email ? email : ''), isFavorite }, { withCredentials: true })
    return res.data
})

export const deleteFromFavorite = createAsyncThunk('allProducts/deleteFromFavorite', async (item) => {
    const fetch = await axios.post('http://localhost:3000/products/delete-favorite', {id: item._id}, {withCredentials: true})
    console.log(fetch.data)
    return fetch.data
})

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
    },
    extraReducers(builer) {
        builer
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                    state.products = action.payload
                state.status = 'succeeded'
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(updateProducts.fulfilled, (state, action) => {
                console.log(action.payload)
                state.favorites = action.payload.items
                localStorage.removeItem('products')
            })
            .addCase(fetchFavoriteProducts.fulfilled, (state, action) => {
                state.favorites = action.payload
            })
            .addCase(deleteFromFavorite.fulfilled, (state, action) => {
                console.log(action.payload)
                state.favorites = action.payload.items
            })
    }
})

export default productsSlice.reducer
export const { addToFavorite } = productsSlice.actions
export const selectProducts = state => state.products.products
export const selectFavoriteProducts = state => state.products.favorites
