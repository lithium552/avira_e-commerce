import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Data } from '../../components/ItemCard'

const initialState = {
    allProducts: [],
    status: 'idle',
    error: null
}

export const fetchAllProducts = createAsyncThunk('allProducts/fetchAllProducts', async () => {
    const fetch = await axios.get('http://localhost:3000/products/all')
    return fetch.data
})


const allProductsSlice = createSlice({
    name: 'allProducts',
    initialState,
    reducers: {

    },
    extraReducers(builer) {
        builer
            .addCase(fetchAllProducts.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchAllProducts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                if (!state.allProducts.length) state.allProducts = state.allProducts.concat(action.payload)
            })
            .addCase(fetchAllProducts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export default allProductsSlice.reducer

export const selectAllFavoriteProducts = state => state.allProducts.allProducts.filter(item => item.isFavorite === true)
export const selectAllProducts = state => state.allProducts.allProducts
export const selectAllSlashedProducts = state => state.allProducts.allProducts.filter(prod => prod.oldPrice !== null)
