import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '../../app/store'
import { Data } from '../../components/ItemCard'

const initialState = {
    allProducts: [],
    status: 'idle',
    error: ''
}

export const fetchAllProducts = createAsyncThunk('allProducts/fetchAllProducts', async () => {
    const fetch = await axios.get('https://avira-api-388212.lm.r.appspot.com/products/all')
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
                state.error = action.error.message || ''
            })
    }
})

export default allProductsSlice.reducer

export const selectAllProducts = (state: RootState) => state.allProducts.allProducts
export const selectAllSlashedProducts = (state: RootState) => state.allProducts.allProducts.filter((prod: Data) => prod.oldPrice !== null)
