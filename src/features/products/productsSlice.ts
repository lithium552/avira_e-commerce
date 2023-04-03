import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    products: [],
    status: 'idle',
    error: null
  }

  export const fetchProducts = createAsyncThunk('products/fetchProducts', async (products: string) => {
    const res = await axios.get(`http://localhost:3000/${products}`)
    return res.data
  })

  export const updateProducts = createAsyncThunk('products/updateProducts', async (data) => {
    const res = await axios.put(`http://localhost:3000/${data.pathname}/${data.item.id}`, {...data.item, isFavorite: !data.item.isFavorite})
    return res.data
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
                state.status = 'succeeded'
                if (!state.products.length) state.products = state.products.concat(action.payload)
                
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message 
            })
            .addCase(updateProducts.fulfilled, (state, action) => {
                const res = state.products.find(item => action.payload.id === item.id)
                res.isFavorite = !res.isFavorite
            })
    }
})

export default productsSlice.reducer
export const selectProducts = state => state.products.products
