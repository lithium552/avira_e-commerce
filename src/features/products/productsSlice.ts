import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Data } from '../../components/ItemCard'
import { RootState } from '../../app/store'

interface ProductState {
    products: Data[],
    favorites: string[],
    status: string,
    error: string
}

const initialState: ProductState = {
    products: [],
    favorites: [],
    status: 'idle',
    error: ''
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (products: string) => {
    const res = await axios.get(`https://avira-api-388212.lm.r.appspot.com//products/${products}`)
    return res.data
})

export const fetchFavoriteProducts = createAsyncThunk('products/fetchFavoriteProducts', async () => {
    const res = await axios.get('https://avira-api-388212.lm.r.appspot.com/products/getFavorites', { withCredentials: true })
    return res.data
})

interface UpdateProducts {
    favorites: string[]
    email: string
    isFavorite: boolean
}

export const updateProducts = createAsyncThunk('products/updateProducts', async ({ favorites, email, isFavorite }: UpdateProducts) => {
    const res = await axios.post('https://avira-api-388212.lm.r.appspot.com/products/favorite', { favorites: favorites, email: (email ? email : ''), isFavorite }, { withCredentials: true })
    return res.data
})

export const deleteFromFavorite = createAsyncThunk('allProducts/deleteFromFavorite', async (item: Data) => {
    const fetch = await axios.post('https://avira-api-388212.lm.r.appspot.com/products/delete-favorite', { id: item._id }, { withCredentials: true })
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
                state.error = action.error.message || ''
            })
            .addCase(updateProducts.fulfilled, (state, action) => {
                state.favorites = action.payload.items
                localStorage.removeItem('products')
            })
            .addCase(fetchFavoriteProducts.fulfilled, (state, action) => {
                state.favorites = action.payload
            })
            .addCase(deleteFromFavorite.fulfilled, (state, action) => {
                state.favorites = action.payload.items
            })
    }
})

export default productsSlice.reducer
export const selectProducts = (state: RootState) => state.products.products
export const selectFavoriteProducts = (state: RootState) => state.products.favorites
