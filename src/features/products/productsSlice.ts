import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    products: [],
    status: 'idle',
    error: null
  }

  export const fetchProducts = createAsyncThunk('products/fetchProducts', async (products: string) => {
    const res = await axios.get(`http://localhost:3000/products/${products}`)
    return res.data
  })

  export const updateProducts = createAsyncThunk('products/updateProducts', async (data) => {
    console.log(data)
    await axios.post('http://localhost:3000/products/all', {id : data._id, isFavorite: !data.isFavorite})
    return data
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
                state.products = state.products = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message 
            })
            .addCase(updateProducts.fulfilled, (state, action) => {
                console.log(action.payload)
                const res = state.products.find(item => action.payload._id === item._id)
                console.log(res)
                res.isFavorite = !res.isFavorite
            })
    }
})

export default productsSlice.reducer
export const selectProducts = state => state.products.products
