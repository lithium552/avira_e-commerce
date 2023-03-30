import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    womenProducts: [],
    status: 'idle',
    error: null
  }

  export const fetchWomenProducts = createAsyncThunk('womenProducts/fetchWomenProducts', async () => {
    const res = await axios.get('http://localhost:3000/womanProducts')
    return res.data
  })

  export const updateWomenProducts = createAsyncThunk('womenProducts/updateWomenProducts', async (item) => {
    const res = await axios.put(`http://localhost:3000/womanProducts/${item.id}`, {...item, isFavorite: !item.isFavorite})
    return res.data
  })

const womenProductsSlice = createSlice({
    name: 'womenProducts',
    initialState,
    reducers: {

    },
    extraReducers(builer) {
        builer
            .addCase(fetchWomenProducts.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchWomenProducts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                if (!state.womenProducts.length) state.womenProducts = state.womenProducts.concat(action.payload)
                
            })
            .addCase(fetchWomenProducts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message 
            })
            .addCase(updateWomenProducts.fulfilled, (state, action) => {
                console.log(action.payload)
                const res = state.womenProducts.find(item => action.payload.id === item.id)
                res.isFavorite = !res.isFavorite
            })
    }
})

export default womenProductsSlice.reducer
export const selectAllWomenProducts = state => state.womenProducts.womenProducts
export const selectAllFavoriteProducts = state => state.womenProducts.womenProducts.filter(item => item.isFavorite === true)
