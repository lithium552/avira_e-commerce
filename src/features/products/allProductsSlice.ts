import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Data } from '../../components/ItemCard'

const initialState = {
    allProducts: [],
    status: 'idle',
    error: null
  }

  export const fetchAllProducts = createAsyncThunk('allProducts/fetchAllProducts', async () => {
    const fetch = await axios.get('http://localhost:3000/db')
    const res = Object.values(fetch.data).reduce((prev, curr) => prev.concat(...curr) , [])
    return res
  })


const allProductsSlice = createSlice({
    name: 'allProducts',
    initialState,
    reducers: {
        addToFavorite: (state, action) => {
            const res = state.allProducts.find((item: Data) => item.id === action.payload.id)
            res.isFavorite = !res.isFavorite
        } 
    },
    extraReducers(builer) {
        builer
            .addCase(fetchAllProducts.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchAllProducts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                if (!state.allProducts.length) state.allProducts = state.allProducts.concat(action.payload)
                console.log(state.allProducts)
            })
            .addCase(fetchAllProducts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message 
            })
    }
})

export default allProductsSlice.reducer
export const { addToFavorite } = allProductsSlice.actions
export const selectAllFavoriteProducts = state => state.allProducts.allProducts.filter(item => item.isFavorite === true)
export const selectAllProducts = state => state.allProducts.allProducts
export const selectAllSlashedProducts = state => state.allProducts.allProducts.filter(prod => prod.oldPrice !== null)
